import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// TODO: Replace with real database
// This is a demo implementation
const users: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Check if user exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (in real app, save to database)
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: hashedPassword,
    };

    users.push(user);

    return NextResponse.json({ message: 'User created successfully', user: { name, email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
