import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, password } = await req.json();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registereng the user." },
      { status: 500 }
    );
  }
}