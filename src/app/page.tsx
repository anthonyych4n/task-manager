
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to TaskFlow</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your ultimate tool to manage assignments, midterms, and tasks effortlessly.
        </p>
      </header>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/auth/login")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Login
        </button>

        <button
          onClick={() => router.push("/auth/signup")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
