
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "TaskFlow - Manage Your Tasks",
  description: "Your ultimate task management tool",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="w-full bg-blue-600 p-4 text-white">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">TaskFlow</h1>
          </div>
        </header>
        <main className="container mx-auto mt-8">{children}</main>
        <footer className="w-full bg-gray-800 text-white text-center py-4 mt-12">
          <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
