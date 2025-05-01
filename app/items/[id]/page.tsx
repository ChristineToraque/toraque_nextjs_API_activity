import { Item } from "@/app/api/items/route";
import { getMiddlewareRouteMatcher } from "next/dist/shared/lib/router/utils/middleware-route-matcher";
import Image from "next/image";
import Link from "next/link";

interface ItemDetailPageProps {
  params: {
    id: string;
  };
}

async function getItem(id: string): Promise<Item | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const apiUrl = `${baseUrl}/api/items/${id}`;

  console.log('Fetching item from:', apiUrl);

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
    });
    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error fetching item:', errorText);
      throw new Error('Failed to fetch item');
    }

    const data: Item = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching item:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = params;
  let item: Item | null = null;
  let fetchError: string | null = null;

  try {
    item = await getItem(id);
  } catch (error) {
    if (error instanceof Error) {
      fetchError = error.message;
    } else {
      fetchError = 'An unknown error occurred';
    }
  }

  if (fetchError) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error Loading Item</h1>
        <p className="text-gray-600">{fetchError}</p>
        <Link href="/" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Back to Home
        </Link>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Item Not Found</h1>
        <p className="text-gray-600">The item you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
        {/* Image Section */}
        <div className="md:w-1/2 relative h-[600px]">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Item Available
            </div>
          )}
        </div>

        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
              {item.logo && (
                <Image src={item.logo} alt="logo" width={40} height={40} className="object-contain" />
              )}
            </div>
            <p className="text-gray-600 mb-4 text-lg">{item.description}</p>
            {item.price !== undefined && (
              <p className="text-2xl font-semibold text-orange-600 mb-6">{`PHP ${item.price.toLocaleString()}`}</p>
            )}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 px-6 rounded-lg text-white border-0 bg-orange-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 cursor-pointer hover:bg-orange-700 font-semibold">
              Add to Cart
            </button>
            <Link href="/" className="flex-1 text-center py-3 px-6 rounded-lg text-gray-700 border border-gray-300 bg-gray-100 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer hover:bg-gray-200 font-semibold">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}