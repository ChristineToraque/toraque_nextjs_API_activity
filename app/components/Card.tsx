import Image from "next/image";
import { Item } from "../api/items/route";

export interface CardProps {
  item: Item;
};

export function Card({ item }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {item.imageUrl && (
        <div className="relative w-full h-40 mb-3">
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={item.id <= 2} />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-1 text-gray-800">{item.title}</h2>
      <p className="text-gray-600 mb-2">{item.description}</p>
    </div>
  )
}