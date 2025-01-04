"use client";

"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <button
                    onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Login with Credentials
                </button>
                <p className="mt-4 text-center text-gray-600">
                    Don’t have an account?{' '}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => router.push("/auth/signup")}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}