import { prisma } from '@/lib/db/connect';
import { NextResponse } from 'next/server';

export async function GET(
  req: Response,
  { params }: { params: { slug: any } }
) {
  try {
    const { slug } = params;
    console.log('router.query.slug', slug);
    // const { id } = params;
    const get = await prisma.anime.findUnique({
      where: { id: slug[0], mobile: slug[1] && Number(slug[1]) },
    });

    return NextResponse.json(get);
  } catch (error) {
    console.log('Error finding: ', error);
    return NextResponse.json({ error: 'Error finding', status: 500 });
  }
}
