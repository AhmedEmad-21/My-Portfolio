import React, { useState, useEffect } from "react";
import { Sun, Moon, Code2, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Navbar = React.memo(() => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b shadow-sm transition duration-300 bg-background/70 backdrop-blur-md text-foreground border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-3 py-2.5 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1 text-xl md:text-2xl font-bold transition-all duration-300 group text-primary">
          <a href="/">
            <Code2 className="w-7 h-7 md:w-7 md:h-7 text-blue-500 dark:text-yellow-400 transition-transform duration-300 hover:scale-110" />
          </a>

          <TypeAnimation
            sequence={["Ahmed Emad", 2000, "Developer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 dark:from-yellow-300 dark:to-orange-400"
          />
        </div>

        {/* Controls */}
        <div className="flex p-2 border border-gray-400 dark:border-gray-600 rounded-full items-center gap-4">
          {/* <a
            href=""
            target="_blank"
            title="Source Code"
          >
            <Github size={20} />
          </a> */}
          <button
            onClick={handleThemeToggle}
            title="Toggle Theme"
            className="transition-transform duration-300 relative z-10"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
