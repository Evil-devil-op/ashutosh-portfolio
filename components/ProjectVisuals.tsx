export function FitnessDietMockup() {
  return (
    <div className="h-full bg-mist/60 p-4 md:p-8" aria-hidden="true">
      <div className="flex h-full min-h-[340px] flex-col rounded-sm border border-line bg-paper/90 shadow-xl transition-all duration-300 group-hover:border-accent/40">
        <div className="flex items-center justify-between border-b border-line bg-mist/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink">
              Diet &amp; Workout Tracker
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-mute">
            API &bull; Auth &bull; MongoDB
          </span>
        </div>

        <div className="grid grid-cols-3 border-b border-line bg-mist/30">
          {[
            ["Calories", "1,840", "kcal"],
            ["Protein", "112", "g"],
            ["Fiber", "28", "g"],
          ].map(([label, value, unit]) => (
            <div
              key={label}
              className="border-r border-line p-4 last:border-r-0 md:p-5"
            >
              <p className="text-[9px] tracking-[0.16em] uppercase text-mute">
                {label}
              </p>
              <p className="mt-1 font-mono text-xl tracking-tight text-ink md:text-2xl">
                {value}
                <span className="ml-1 text-xs text-accent font-sans">{unit}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
          <div className="border-b border-line p-5 sm:border-b-0 sm:border-r">
            <div className="flex items-center justify-between pb-3 border-b border-line/60">
              <p className="text-[10px] tracking-[0.18em] uppercase text-accent font-medium">
                Daily Meal Logs
              </p>
              <span className="text-[10px] font-mono text-mute">3 Meals</span>
            </div>
            <ul className="mt-3 space-y-2.5 text-xs">
              <li className="flex justify-between border-b border-line/40 pb-2 text-dim">
                <span className="text-ink">Breakfast (Oats &amp; Whey)</span>
                <span className="font-mono text-mute">420 kcal</span>
              </li>
              <li className="flex justify-between border-b border-line/40 pb-2 text-dim">
                <span className="text-ink">Lunch (Rice, Dal &amp; Paneer)</span>
                <span className="font-mono text-mute">680 kcal</span>
              </li>
              <li className="flex justify-between text-dim">
                <span className="text-ink">Dinner (Salad &amp; Protein)</span>
                <span className="font-mono text-mute">740 kcal</span>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between pb-3 border-b border-line/60">
              <p className="text-[10px] tracking-[0.18em] uppercase text-accent font-medium">
                Workout Activity
              </p>
              <span className="text-[10px] font-mono text-mute">Today</span>
            </div>
            <ul className="mt-3 space-y-2.5 text-xs">
              <li className="flex justify-between border-b border-line/40 pb-2 text-dim">
                <span className="text-ink">Push Workout (Chest/Tri)</span>
                <span className="font-mono text-mute">45 min</span>
              </li>
              <li className="flex justify-between text-dim">
                <span className="text-ink">Hydration &amp; Recovery</span>
                <span className="font-mono text-accent">Logged ✓</span>
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
    <div className="h-full bg-mist/60 p-4 md:p-8" aria-hidden="true">
      <div className="flex h-full min-h-[340px] flex-col rounded-sm border border-line bg-paper/90 shadow-xl transition-all duration-300 group-hover:border-accent/40">
        <div className="flex items-center justify-between border-b border-line bg-mist/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink">
              Anand Education Center
            </span>
          </div>
          <span className="rounded-[2px] bg-accent/20 px-2 py-0.5 font-mono text-[9px] font-medium text-accent">
            ADMIN PORTAL
          </span>
        </div>

        <div className="grid flex-1 grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Courses", "Academic programmes & syllabus management", "01"],
            ["Faculty", "Teaching staff directory & profiles", "02"],
            ["Admissions", "Student applications & admission flow", "03"],
          ].map(([title, note, idx]) => (
            <div key={title} className="flex flex-col justify-between p-5">
              <div>
                <span className="font-mono text-[10px] text-mute">{idx}</span>
                <p className="mt-3 text-lg font-medium tracking-tight uppercase text-ink">
                  {title}
                </p>
              </div>
              <p className="mt-4 text-xs text-dim leading-relaxed">{note}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-line bg-mist/60 px-4 py-3 text-[10px] tracking-[0.16em] uppercase text-mute">
          <span className="text-ink">React.js Frontend</span>
          <span>Node / Express REST</span>
          <span className="text-accent">MongoDB Store</span>
        </div>
      </div>
    </div>
  );
}

export function BmiCalculatorMockup() {
  return (
    <div className="h-full bg-mist/60 p-4 md:p-8" aria-hidden="true">
      <div className="flex h-full min-h-[260px] items-stretch rounded-sm border border-line bg-paper/90 shadow-xl transition-all duration-300 group-hover:border-accent/40">
        <div className="flex flex-1 flex-col justify-between border-r border-line p-5 md:p-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">
              Client-Side Input
            </p>
            <span className="text-[10px] font-mono text-mute">Live DOM</span>
          </div>

          <div className="space-y-4 my-4">
            <div className="border-b border-line/60 pb-2">
              <p className="text-[10px] uppercase text-mute">Height</p>
              <p className="font-mono text-2xl text-ink">170 <span className="text-xs text-mute font-sans">cm</span></p>
            </div>
            <div className="border-b border-line/60 pb-2">
              <p className="text-[10px] uppercase text-mute">Weight</p>
              <p className="font-mono text-2xl text-ink">65 <span className="text-xs text-mute font-sans">kg</span></p>
            </div>
          </div>

          <p className="text-[10px] tracking-wider text-mute uppercase">Instant JS calculation</p>
        </div>

        <div className="flex w-[45%] flex-col items-center justify-center gap-3 bg-mist/40 p-5 text-center md:p-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-mute">
            Calculated BMI
          </p>
          <p className="font-mono text-5xl font-light tracking-tight text-accent">
            22.5
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mist px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-ink">
              Normal Weight
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
