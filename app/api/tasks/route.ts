import { prisma } from '@/lib/db/connect';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, image, address, mobile } = await req.json();

    const create = await prisma.anime.create({
      data: { name, image, address, mobile },
    });

    return NextResponse.json(create);
  } catch (error) {
    console.log('Error creating: ', error);
    return NextResponse.json({ error: 'Error creating', status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const getsss = await prisma.anime.findMany({});

    return NextResponse.json(getsss);
  } catch (error) {
    console.log('Error finding: ', error);
    return NextResponse.json({ error: 'Error finding', status: 500 });
  }
}
