"use client";

interface DRScoreCircleProps {
  score: number;
  change: number;
  size?: number;
}

export default function DRScoreCircle({ score, change, size = 180 }: DRScoreCircleProps) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const center = size / 2;

  const getColor = (s: number) => {
    if (s >= 70) return "#16a34a";
    if (s >= 50) return "#f97316";
    if (s >= 30) return "#eab308";
    return "#ef4444";
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} className="dr-circle">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="10"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90 ${center} ${center})`}
          style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
        />
        <text
          x={center}
          y={center - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold"
          style={{ fontSize: size * 0.28, fill: "var(--foreground)" }}
        >
          {score}
        </text>
        <text
          x={center}
          y={center + size * 0.15}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: size * 0.09, fill: "#64748b" }}
        >
          Domain Rating
        </text>
      </svg>
      <span
        className="text-sm font-semibold px-2 py-0.5 rounded-full"
        style={{
          color: change >= 0 ? "#16a34a" : "#ef4444",
          backgroundColor: change >= 0 ? "#dcfce7" : "#fef2f2",
        }}
      >
        {change >= 0 ? "+" : ""}{change} 先月比
      </span>
    </div>
  );
}
