"use client";
import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    //logic here
  }, []);

  const handleNavigate = () => router.push('/store1')

  return (
    <html lang="en">
      
      <body className={''}>
      <div className="w-100 h-[100px] bg-white">
        <p className="text-black">Header</p>
        <button onClick={handleNavigate} className="text-black">navigate</button>
      </div>
      {children}
      </body>
    </html>
  );
}
