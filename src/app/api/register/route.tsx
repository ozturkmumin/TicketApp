import { NextResponse } from "next/server";
import {connectMongoDB} from "@/app/lib/mongodb"
import User from "@/app/models/user"
import bcrypt from "bcryptjs"
export async function POST(req: Request, res: Response) {
  try {
    const { name, email, password } = await req.json(); 
    const hashedPassword = await bcrypt.hash(password, 10)
    await connectMongoDB();
    await User.create({name, email, password: hashedPassword})
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registereng the user." },
      { status: 500 }
    );
  }
}
