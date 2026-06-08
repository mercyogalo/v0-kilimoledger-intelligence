'use client';

export function CargoStabilityGauge() {
  const percentage = 94;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card-premium p-6 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Track */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#2D3748"
            strokeWidth="3"
          />

          {/* Gradient fill with animated progress */}
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 transform -rotate-90"
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-foreground">{percentage}</p>
          <p className="text-xs text-muted-foreground">/100</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h4 className="text-sm font-semibold text-foreground">Cargo Stability Index</h4>
        <p className="text-xs text-success font-medium mt-1">Excellent Condition</p>
      </div>

      {/* Legend */}
      <div className="mt-4 w-full grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <div className="w-2 h-2 rounded-full bg-red-500 mx-auto mb-1" />
          <p className="text-muted-foreground">Poor</p>
        </div>
        <div>
          <div className="w-2 h-2 rounded-full bg-exception mx-auto mb-1" />
          <p className="text-muted-foreground">Caution</p>
        </div>
        <div>
          <div className="w-2 h-2 rounded-full bg-success mx-auto mb-1" />
          <p className="text-muted-foreground">Excellent</p>
        </div>
      </div>
    </div>
  );
}
