export function FitnessDietMockup() {
  return (
    <div className="h-full bg-mist p-4 md:p-6" aria-hidden="true">
      <div className="flex h-full min-h-[320px] flex-col border border-line bg-paper">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="text-[10px] tracking-[0.2em] uppercase">
            Tracker
          </span>
          <span className="text-[10px] text-mute">Profile / Auth</span>
        </div>
        <div className="grid grid-cols-3 border-b border-line">
          {[
            ["Calories", "1,840"],
            ["Protein", "112 g"],
            ["Fiber", "28 g"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-r border-line px-4 py-5 last:border-r-0"
            >
              <p className="text-[9px] tracking-[0.16em] uppercase text-mute">
                {label}
              </p>
              <p className="mt-2 font-mono text-xl tracking-tight">{value}</p>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
          <div className="border-b border-line p-4 sm:border-b-0 sm:border-r">
            <p className="text-[10px] tracking-[0.18em] uppercase text-mute">
              Meal logs
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-line pb-2">
                <span>Breakfast</span>
                <span className="font-mono text-xs">420 kcal</span>
              </li>
              <li className="flex justify-between border-b border-line pb-2">
                <span>Lunch</span>
                <span className="font-mono text-xs">680 kcal</span>
              </li>
              <li className="flex justify-between">
                <span>Dinner</span>
                <span className="font-mono text-xs">740 kcal</span>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <p className="text-[10px] tracking-[0.18em] uppercase text-mute">
              Workout
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-line pb-2">
                <span>Strength</span>
                <span className="font-mono text-xs">45 min</span>
              </li>
              <li className="flex justify-between">
                <span>Progress</span>
                <span className="font-mono text-xs">Logged</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EducationCenterMockup() {
  return (
    <div className="h-full bg-ink p-4 md:p-6" aria-hidden="true">
      <div className="flex h-full min-h-[320px] flex-col border border-dim bg-paper">
        <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
          <span className="text-[10px] tracking-[0.2em] uppercase">
            Anand Education Center
          </span>
          <span className="text-[10px] tracking-[0.16em] uppercase text-mute">
            Admin
          </span>
        </div>
        <div className="grid flex-1 grid-cols-3 divide-x divide-line">
          {[
            ["Courses", "Institute programmes"],
            ["Faculty", "Teaching staff"],
            ["Admissions", "Application info"],
          ].map(([title, note]) => (
            <div key={title} className="flex flex-col justify-between p-4">
              <div>
                <p className="font-mono text-[10px] text-mute">Index</p>
                <p className="mt-4 text-lg font-medium tracking-tight uppercase">
                  {title}
                </p>
              </div>
              <p className="text-xs text-dim">{note}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line px-4 py-3 text-[10px] tracking-[0.16em] uppercase text-mute">
          <span>REST API</span>
          <span>MongoDB</span>
          <span>Authenticated panel</span>
        </div>
      </div>
    </div>
  );
}

export function BmiCalculatorMockup() {
  return (
    <div className="h-full bg-mist p-4 md:p-5" aria-hidden="true">
      <div className="flex h-full min-h-[220px] items-stretch border border-line bg-paper">
        <div className="flex flex-1 flex-col justify-between border-r border-line p-5">
          <p className="text-[10px] tracking-[0.2em] uppercase text-mute">
            Input
          </p>
          <div className="space-y-4">
            <div className="border-b border-line pb-2">
              <p className="text-[10px] uppercase text-mute">Height</p>
              <p className="font-mono text-2xl">170 cm</p>
            </div>
            <div className="border-b border-line pb-2">
              <p className="text-[10px] uppercase text-mute">Weight</p>
              <p className="font-mono text-2xl">65 kg</p>
            </div>
          </div>
        </div>
        <div className="flex w-[42%] flex-col items-center justify-center gap-3 p-5 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-mute">
            BMI
          </p>
          <p className="font-mono text-4xl tracking-tight">22.5</p>
          <p className="text-[11px] tracking-[0.16em] uppercase">Normal</p>
        </div>
      </div>
    </div>
  );
}
