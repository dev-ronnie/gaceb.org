import { ChevronLeft, ChevronRight, Star, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import type { CalEvent } from "@/lib/board";
import { isoDate, monthMatrix, prettyDate } from "@/lib/format";

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function HonourCalendar({
  events,
  onSelect,
  selected,
}: {
  events: CalEvent[];
  selected: string;
  onSelect: (iso: string) => void;
}) {
  const [cursor, setCursor] = useState(() => new Date(2026, 10, 1));
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const cells = monthMatrix(year, month);
  const byDay = new Map<string, CalEvent[]>();
  for (const ev of events) {
    const list = byDay.get(ev.eventDate) ?? [];
    list.push(ev);
    byDay.set(ev.eventDate, list);
  }
  const label = cursor.toLocaleDateString("en-UG", { month: "long", year: "numeric" });
  const [today, setToday] = useState("");
  useEffect(() => setToday(isoDate(new Date())), []);

  return (
    <section className="overflow-hidden rounded-card border border-line bg-paper shadow-lg">
      <div className="bg-forest px-4 py-5 text-paper sm:px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
          <Trophy className="size-4" aria-hidden /> Honour calendar
        </p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-balance sm:text-4xl">{label}</h2>
          <Star className="size-8 shrink-0 fill-gold text-gold" aria-hidden />
        </div>
      </div>
      <div className="brand-bar" aria-hidden />
      <div className="p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <button type="button" className="btn btn-outline min-h-11 min-w-11 px-3" aria-label="Previous month" onClick={() => setCursor(new Date(year, month - 1, 1))}>
            <ChevronLeft className="size-5" />
          </button>
          <b className="font-display text-xl text-forest">{label}</b>
          <button type="button" className="btn btn-outline min-h-11 min-w-11 px-3" aria-label="Next month" onClick={() => setCursor(new Date(year, month + 1, 1))}>
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold tracking-wide uppercase">
          {WEEK.map((d, i) => (
            <div key={d} className={`rounded-lg py-2 ${i >= 5 ? "bg-gold-soft text-gold-deep" : "bg-sage text-forest"}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((date, i) => {
            if (!date) return <div key={`e-${i}`} className="min-h-12 sm:min-h-16" />;
            const iso = isoDate(date);
            const dayEvents = byDay.get(iso) ?? [];
            const briefing = iso === "2026-11-06";
            const isToday = iso === today;
            const isSelected = iso === selected;
            const weekend = date.getDay() === 0 || date.getDay() === 6;
            let tone = "bg-sky text-ink";
            if (weekend) tone = "bg-gold-soft text-ink";
            if (dayEvents.length && !briefing) tone = "bg-sage text-forest ring-1 ring-forest/30";
            if (briefing) tone = "btn-gold text-ink shadow-md";
            return (
              <button
                key={iso}
                type="button"
                onClick={() => onSelect(iso)}
                aria-pressed={isSelected}
                aria-label={`${prettyDate(iso)}${briefing ? ", UNEB briefing" : ""}${dayEvents.length ? `, ${dayEvents.length} marked` : ""}`}
                className={`relative min-h-12 rounded-xl px-0.5 py-1 text-center sm:min-h-16 ${tone} ${
                  isSelected ? "ring-2 ring-burgundy" : isToday ? "ring-2 ring-royal" : ""
                }`}
              >
                <span className="block text-sm font-bold tabular-nums sm:text-base">{date.getDate()}</span>
                {briefing ? (
                  <Trophy className="mx-auto mt-0.5 size-3.5 text-burgundy sm:size-4" aria-hidden />
                ) : dayEvents.length ? (
                  <Star className="mx-auto mt-0.5 size-3 fill-gold-deep text-gold-deep" aria-hidden />
                ) : null}
              </button>
            );
          })}
        </div>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li className="flex items-center gap-2 rounded-xl bg-gold-soft px-3 py-2">
            <Trophy className="size-4 text-burgundy" aria-hidden /> UNEB briefing
          </li>
          <li className="flex items-center gap-2 rounded-xl bg-sage px-3 py-2">
            <Star className="size-4 fill-gold-deep text-gold-deep" aria-hidden /> Marked day
          </li>
          <li className="flex items-center gap-2 rounded-xl bg-sky px-3 py-2">
            <i className="size-3 rounded-full ring-2 ring-royal" aria-hidden /> Today
          </li>
          <li className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 ring-1 ring-line">
            <i className="size-3 rounded-full ring-2 ring-burgundy" aria-hidden /> Selected
          </li>
        </ul>
      </div>
    </section>
  );
}
