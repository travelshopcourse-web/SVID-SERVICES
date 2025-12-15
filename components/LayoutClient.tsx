"use client";

import { useEffect, useState } from "react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for loader to complete (2200ms as defined in Loader component)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${isLoading ? "opacity-0 invisible" : "opacity-100 visible"}`}>
      {children}
    </div>
  );
}
