import { Item } from "./api/items/route";
import { Card } from "./components/Card";

async function getItems(): Promise<Item[]> {
  const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const apiUrl = `${url}/api/items`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Error fetching items: ${response.statusText}`);
    }
    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export default async function Home() {
  let items: Item[] = [];
  let fetchError: string | null = null;

  try {
    items = await getItems();
  } catch (error: any) {
    console.error("Error fetching items:", error);
    fetchError = error.message || "An unknown error occurred while fetching items.";
  }

  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Cat Food For Sale
      </h1>
      {fetchError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {fetchError}</span>
        </div>
      )}
      {!fetchError && items.length === 0 && (
        <p className="text-center text-gray-500">No items found.</p>
      )}
      {items.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>) : (<div>No items available</div>)}
    </main>
  );
}
