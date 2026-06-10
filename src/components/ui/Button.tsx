import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "gradient" | "pink" | "orange";
    width?: number;
    height?: number;
    radius?: number;
}

export default function Button({
    variant = "gradient",
    width,
    height,
    radius = 17,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            style={{
                width: width ? `${width}px` : undefined,
                height: height ? `${height}px` : undefined,
                borderRadius: `${radius}px`,
            }}
            className={clsx(
                "inline-flex items-center justify-center font-oswald",
                "font-bold uppercase tracking-wide",
                "transition-all duration-300",
                "hover:scale-[1.02]",
                "active:scale-[0.98]",
                "text-white",
                "px-10 py-1",
                {
                    "bg-[linear-gradient(180deg,#E84B07_0%,#791B43_100%)]":
                        variant === "gradient",

                    "bg-[#F14755]":
                        variant === "pink",

                    "bg-[#E84B07]":
                        variant === "orange",
                },

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}