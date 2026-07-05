"use client";

import React, { useState } from "react";
import { Sun, Moon, Laptop, ChevronDown } from "lucide-react";
import { useTheme, Theme } from "./ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const themeOptions: { id: Theme; label: string; icon: typeof Sun }[] = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Laptop }
  ];

  const CurrentIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 p-2 rounded-lg border border-[#dcdee0] dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[#171717] dark:text-zinc-200 hover:bg-[#f0f0f3] dark:hover:bg-zinc-700 transition-colors text-xs font-mono"
        title="Toggle Theme (Light / Dark / System)"
        aria-label="Toggle Theme"
      >
        <CurrentIcon className="w-4 h-4 text-[#0d74ce] dark:text-blue-400" />
        <span className="capitalize hidden sm:inline">{theme}</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#60646c]" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-zinc-800 border border-[#dcdee0] dark:border-zinc-700 rounded-lg shadow-lg p-1 z-50 animate-in fade-in duration-150">
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  setTheme(opt.id);
                  setDropdownOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-left transition-colors ${
                  isSelected
                    ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                    : "text-[#171717] dark:text-zinc-200 hover:bg-[#f0f0f3] dark:hover:bg-zinc-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
