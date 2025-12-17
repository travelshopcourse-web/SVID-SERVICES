"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { siteData } from "@/lib/data";

export default function NavigationLoader() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader when pathname changes
    setIsNavigating(true);
    
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isNavigating) return null;

  return (
    <div 
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
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

      {/* Main loader content - SVID Services style */}
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
