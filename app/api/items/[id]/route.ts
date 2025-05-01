import { items } from '@/app/data';
import { NextResponse } from 'next/server';

interface RouteContext {
    params: {
        id: string;
    };
}

export async function GET(request: Request, context: RouteContext) {
    const { params } = context;
    const itemId = params.id ? parseInt(params?.id, 10) : undefined;

    if (itemId === undefined || isNaN(itemId)) {
        return NextResponse.json({ message: "Invalid item ID" }, { status: 400 });
    }

    const item = items.find(item => item.id === itemId);

    if (!item) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
}
