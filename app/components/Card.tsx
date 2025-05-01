import Image from "next/image";
import { Item } from "../api/items/route";
import Link from "next/link";

export interface CardProps {
  item: Item;
};

export function Card({ item }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {item.imageUrl && (
        <div className="relative w-full h-[300px] mb-[50px]">
          <div className="flex justify-between items-center w-full mb-2 h-[40px]">
            <Image
              src={item.logo || "/globe.svg"}
              alt="logo"
              width={40}
              height={40}
              className="object-contain hover:cursor-pointer hover:opacity-80" />
            <span className="absolute top-2 right-2 text-3xl font-black text-white bg-black bg-opacity-60 px-2 py-1 rounded z-10">
              {`PHP ${item.price}`}
            </span>
          </div>
          <div className="relative w-full h-full">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="object-fit-contain rounded-circle d-block mx-auto mb-4 hover:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={item.id <= 2} />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center h-[50px]">
        <h2 className="text-xl font-semibold mb-1 text-gray-800">{item.title}</h2>
      </div>
      <div className="flex flex-col items-center h-[100px]">
       <p className="text-gray-600 mb-2">{item.description}</p>
      </div>
      <Link href={`/items/${item.id}`} className="w-full">
        <button className="py-2 px-5 mb-4 rounded-pill text-white border-0 bg-orange-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded cursor-pointer hover:bg-orange-700 mr-1">
          View
        </button>
      </Link>
      <button className="py-2 px-5 mb-4 rounded-pill text-white border-0 bg-orange-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded cursor-pointer hover:bg-orange-700">
        Add to Cart
      </button>
    </div>
  )
}