import React from "react";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  theme?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export const ExpoBentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon: Icon,
  theme = "light",
  className = "",
  children,
  href
}) => {
  const isDark = theme === "dark";
  
  const baseClasses = isDark 
    ? "card-dark border-[#262626] bg-[#171717] hover:border-[#404040]"
    : "card-surface border-[#dcdee0] bg-white hover:border-[#171717]";
    
  const textTitleClasses = isDark ? "text-white" : "text-[#171717]";
  const textDescClasses = isDark ? "text-[#a1a1aa]" : "text-[#60646c]";
  
  const CardWrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, className: "block group cursor-pointer" } : { className: "group" };

  return (
    <CardWrapper {...wrapperProps}>
      <div className={`relative overflow-hidden rounded-xl border transition-colors duration-300 flex flex-col h-full ${baseClasses} ${className}`}>
        {/* Content Header */}
        <div className="p-6 md:p-8 flex flex-col gap-4 z-10">
          {Icon && (
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isDark 
                ? "bg-[#262626] text-white group-hover:bg-[#404040]" 
                : "bg-[#f0f0f3] text-[#171717] group-hover:bg-black group-hover:text-white"
            }`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div className="space-y-2">
            <h3 className={`text-xl font-semibold tracking-tight ${textTitleClasses}`}>
              {title}
            </h3>
            <p className={`text-sm leading-relaxed max-w-md ${textDescClasses}`}>
              {description}
            </p>
          </div>
        </div>
        
        {/* Slot for custom visuals, code blocks, or nested UI */}
        {children && (
          <div className="flex-1 px-6 md:px-8 pb-6 md:pb-8 flex flex-col justify-end mt-auto">
            {children}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
