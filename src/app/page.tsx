"use client";

import Toggler from "./components/Toggler";
import Navbar from "./sections/Navbar";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center w-full min-h-screen">
        <Main darkMode={darkMode} />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <Toggler darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}
