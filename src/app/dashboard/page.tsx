"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push("/auth/login");
        return null;
    }

    return (
        <div className="p-6">
            <h1>Welcome, {session.user?.name || "User"}!</h1>
            <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded"
            >
                Sign Out
            </button>
        </div>
    );
}