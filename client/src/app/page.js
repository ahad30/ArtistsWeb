"use client";
import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";
import HomePage from "./(pages)/HomePage/page";
import { useState, useEffect } from "react";
import { LoadingPage } from "@/components/LoadingPage/LoadingPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Match the animation duration (2s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <main>
      <HomePage/>
    </main>
  );
}
