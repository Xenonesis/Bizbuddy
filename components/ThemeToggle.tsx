"use client";

import React from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme, Theme } from "./ThemeProvider";

export const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const themeOptions: { id: Theme; label: string; icon: typeof Sun }[] = [
		{ id: "light", label: "Light", icon: Sun },
		{ id: "dark", label: "Dark", icon: Moon },
		{ id: "system", label: "System", icon: Laptop },
	];

	return (
		<div className="flex items-center gap-1 rounded-lg border border-[#dcdee0] dark:border-zinc-700 bg-white dark:bg-zinc-800 p-0.5">
			{themeOptions.map((opt) => {
				const Icon = opt.icon;
				const isSelected = theme === opt.id;
				return (
					<button
						key={opt.id}
						onClick={() => setTheme(opt.id)}
						className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all ${
							isSelected
								? "bg-black text-white dark:bg-white dark:text-black shadow-xs font-semibold"
								: "text-[#60646c] dark:text-zinc-400 hover:text-[#171717] dark:hover:text-zinc-200"
						}`}
						title={opt.label}
						aria-label={opt.label}
					>
						<Icon className="w-3.5 h-3.5" />
						<span className="hidden sm:inline">{opt.label}</span>
					</button>
				);
			})}
		</div>
	);
};
