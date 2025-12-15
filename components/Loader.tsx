"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteData } from "@/lib/data";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Remove loader completely
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Single rotating ring around logo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
          
          {/* Logo */}
          <div className="relative w-20 h-20 animate-scale-pulse">
            <Image
              src={siteData.logo}
              alt="SVID Services"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
