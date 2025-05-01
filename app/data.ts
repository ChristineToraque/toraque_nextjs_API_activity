export interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    logo?: string;
    price?: number;
};

export const items: Item[] = [
    {
        id: 1,
        title: 'Bellotta Mackerel',
        description: 'Tailored nutrition for kittens up to 12 months old. Supports immune system development and healthy growth.',
        imageUrl: '/images/image-08.jpg',
        logo: '/globe.svg',
        price: 25.99
    },
    {
        id: 2,
        title: 'Webbox Cats Delight',
        description: 'High-quality protein with chicken as the first ingredient. Fortified with live probiotics for digestive health.',
        imageUrl: '/images/image-08.jpg',
        logo: '/globe.svg',
        price: 22.50
    },
    {
        id: 3,
        title: 'Felix As Good as itt looks with Chicken in Jelly',
        description: 'Variety pack of wet cat food featuring tender bites in savory gravy. Provides essential moisture.',
        imageUrl: '/images/image-03.png',
        logo: '/globe.svg',
        price: 18.75
    },
    {
        id: 4,
        title: "Senior Cat Care",
        description: 'Precisely balanced nutrition to support graceful aging in cats aged 7 and older. Supports kidney and heart health.',
        imageUrl: '/images/image-03.png',
        logo: '/globe.svg',
        price: 28.00
    },
    {
        id: 5,
        title: 'Classic Cuisine',
        description: 'High-protein, grain-free formula inspired by the diet of the lynx. Features real chicken.',
        imageUrl: '/images/image-02.jpg',
        logo: '/globe.svg',
        price: 32.50
    },
    {
        id: 6,
        title: 'Royal Canin Adult Cat',
        description: 'Gentle formula with easily digestible ingredients for cats with sensitive digestive systems. Includes prebiotics.',
        imageUrl: '/images/image-02.jpg',
        logo: '/globe.svg',
        price: 24.99
    },
    {
        id: 7,
        title: 'Royal Canin Mother & Baby Cat',
        description: 'Specially formulated to help indoor cats maintain a healthy weight. Helps control hairballs.',
        imageUrl: '/images/image-04.jpg',
        logo: '/globe.svg',
        price: 15.80
    },
    {
        id: 8,
        title: 'Halo Holistic',
        description: 'Helps adult cats achieve and maintain a healthy weight. High fiber content promotes satiety.',
        imageUrl: '/images/image-04.jpg',
        logo: '/globe.svg',
        price: 29.95
    },
];

export function findItemById(id: number): Item | undefined {
    return items.find(item => item.id === id);
}