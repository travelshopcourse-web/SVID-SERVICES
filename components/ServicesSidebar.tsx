"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/lib/data";

export default function ServicesSidebar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services-section");
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show sidebar when services section is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <a
        href={`https://wa.me/${siteData.contact.whatsapp}?text=I'm interested in your services`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-amber-500 hover:bg-amber-600 text-white shadow-2xl transition-all duration-300 group hover:pr-4"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
        }}
      >
        <span className="py-6 px-4 font-bold text-lg tracking-wider">
          GET QUOTE
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm">
          Click to request a quote via WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900"></div>
        </div>
      </a>
    </div>
  );
}
