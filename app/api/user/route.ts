import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(3).max(100),
  email: z.string().email().max(100),
  password: z.string().min(8).max(100),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const existingUserEmail = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (existingUserEmail)
    return NextResponse.json(
      { error: "This user already exists" },
      { status: 404 }
    );

  const existingUsername = await prisma.user.findUnique({
    where: {
      email: body.username,
    },
  });

  if (existingUsername)
    return NextResponse.json(
      { error: "This username is not available" },
      { status: 404 }
    );

  const hashedPassword = await hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      username: body.username,
      password: hashedPassword,
    },
  });

  const { password, id, ...information } = newUser;

  return NextResponse.json(
    {
      message: "Your information has been registered to the database",
      information,
    },
    { status: 201 }
  );
}
