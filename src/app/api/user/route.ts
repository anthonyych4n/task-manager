import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try{
        const body = await req.json();
        const {email, password} = body;

        // Check if email is already taken

        const existingUserByEmail = await db.user.findUnique({
            where: {
                email
            }
        });
        if (existingUserByEmail) {
            return NextResponse.json( {user: null, message: "Email already taken"}, {status: 409});
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email,
                password : hashedPassword
            }
        });

        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({ user: rest, message: "User Created successfully"}, {status: 201});
    } catch(e) {
        return NextResponse.json({ user: null, message: "Something went Wrong"}, {status: 500});
        
    }
}