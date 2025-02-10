import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/connect';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Extract `slug` from the URL
    const { pathname } = new URL(request.url);
    const slug = pathname.split('/').filter(Boolean); // Split the path and filter out empty segments

    console.log('router.query.slug', slug);

    // Parse slug[1] to a number, or set to null if it's empty
    const mobile = slug[3] ? Number(slug[3]) : null;
    console.log('mobile', mobile);
    console.log('slug[2]', slug[2]);

    const get = await prisma.anime.findUnique({
      where: { id: slug[2], mobile: mobile },
    });

    return NextResponse.json(get);
  } catch (error) {
    console.log('Error finding: ', error);
    return NextResponse.json({ error: 'Error finding', status: 500 });
  }
}
