import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    console.log('Password received:', !!password);
    console.log(
      'Environment password exists:',
      !!process.env.MUSEUM_PASSWORD
    );

    if (
      !password ||
      password !== process.env.MUSEUM_PASSWORD
    ) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set({
      name: 'museum_access',
      value: 'granted',
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });

    console.log('Museum access cookie set');

    return response;
  } catch (error) {
    console.error('Unlock error:', error);

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}