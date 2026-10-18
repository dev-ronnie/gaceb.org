import { useEffect, useState } from "react";
import { UNEB_BRIEFING } from "@/lib/config";

function parts(target: number, now: number) {
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs, done: diff <= 0 };
}

const TILES = [
  { key: "days", label: "Days", tone: "bg-sage text-forest" },
  { key: "hours", label: "Hours", tone: "bg-gold-soft text-gold-deep" },
  { key: "mins", label: "Mins", tone: "bg-sky text-royal" },
  { key: "secs", label: "Secs", tone: "bg-paper text-burgundy" },
] as const;

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const p = now == null ? null : parts(UNEB_BRIEFING.getTime(), now);
  const runStart = new Date("2026-09-01T00:00:00+03:00").getTime();
  const runEnd = UNEB_BRIEFING.getTime();
  const progress = now == null ? 0 : Math.min(100, Math.max(0, ((now - runStart) / (runEnd - runStart)) * 100));
  const values = { days: p?.days, hours: p?.hours, mins: p?.mins, secs: p?.secs };

  return (
    <section className={`overflow-hidden rounded-card bg-forest text-paper shadow-lg ${compact ? "" : ""}`}>
      <div className={compact ? "p-4" : "grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.15fr_1fr] lg:items-center"}>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">S.6 · UACE 2026</p>
          <h2 className={`mt-1 font-display text-balance ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}>UNEB briefing</h2>
          <p className="mt-1 text-paper/85">6 November 2026</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper/20" aria-hidden>
            <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2" aria-live="polite">
          {TILES.map((tile) => (
            <div key={tile.key} className={`rounded-2xl px-1 py-3 text-center ${tile.tone}`}>
              <b className="block font-display text-3xl tabular-nums sm:text-4xl">
                {values[tile.key] == null ? "—" : String(values[tile.key]).padStart(2, "0")}
              </b>
              <small className="text-xs font-semibold tracking-wide uppercase">{tile.label}</small>
            </div>
          ))}
        </div>
      </div>
      {p?.done ? (
        <p className="bg-gold px-5 py-3 text-center font-semibold text-ink">Briefing day is here. Walk in prepared.</p>
      ) : null}
    </section>
  );
}
