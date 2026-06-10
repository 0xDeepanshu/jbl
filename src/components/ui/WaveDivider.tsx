interface WaveDividerProps {
  fill?: string;
  className?: string;
}

export default function WaveDivider({
  fill = "#ff5a1f",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[80px] lg:h-[100px]"
      >
        <path
          d="M0,30 C150,65 300,10 450,50 S700,20 850,55 S1050,5 1200,45 S1350,15 1440,30 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
