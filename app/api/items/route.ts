import { NextResponse } from 'next/server';

export interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
};

const items: Item[] = [
    {
        id: 1,
        title: 'Item 1',
        description: 'Description for Item 1',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 2,
        title: 'Item 2',
        description: 'Description for Item 2',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 3,
        title: 'Item 3',
        description: 'Description for Item 3',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 4,
        title: 'Item 4',
        description: 'Description for Item 4',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 5,
        title: 'Item 5',
        description: 'Description for Item 5',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 6,
        title: 'Item 6',
        description: 'Description for Item 6',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 7,
        title: 'Item 7',
        description: 'Description for Item 7',
        imageUrl: '/images/image-01.png'
    },
    {
        id: 8,
        title: 'Item 8',
        description: 'Description for Item 8',
        imageUrl: '/images/image-01.png'
    },
];

export async function GET(request: Request) {
    return NextResponse.json(items);
}