import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { email, username } = requestBody;
    const tokenData = {
      username: username,
      email: email,
    };
    if (!tokenData) {
        return NextResponse.json({ error: "User not verified" }, { status: 404 });
      }
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1hr",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
