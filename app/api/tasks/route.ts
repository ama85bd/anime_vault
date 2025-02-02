import { prisma } from '@/lib/db/connect';
import { NextResponse } from 'next/server';

export async function POST(req: Response) {
  try {
    const { name, image } = await req.json();
    console.log('name', name);
    console.log('image', image);

    const create = await prisma.anime.create({
      data: { name, image },
    });

    return NextResponse.json({ create });
  } catch (error) {
    console.log('Error creating: ', error);
    return NextResponse.json({ error: 'Error creating', status: 500 });
  }
}
