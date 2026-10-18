import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, Moon, PenLine, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About | GACEB Scholar" }] }),
  component: AboutPage,
});

const PILLARS = [
  {
    title: "The paper is a door",
    text: "UNEB does not measure your whole life. It measures what you can show, clearly, in the time you are given. Walk in as someone who has already done the work.",
    Icon: ShieldCheck,
  },
  {
    title: "One paper, fully marked",
    text: "These weeks are not for rereading the whole syllabus. Sit one past paper as if the room were real. Mark it the same day. Write why each mark was lost.",
    Icon: PenLine,
  },
  {
    title: "Rest keeps the marks",
    text: "A tired mind drops marks a rested one would have kept. Sleep, eat, and stop while the work is still clean. Momentum is a kind of courage.",
    Icon: Moon,
  },
  {
    title: "Read the command word",
    text: "Before you write, see what the question asks. Begin with the one you can finish. Leave the phone outside the worry. Arrive with documents in order.",
    Icon: BookMarked,
  },
];

const PLAN = [
  "One timed paper, not five open topics.",
  "Mark it before you start another.",
  "Sleep before midnight on school nights.",
  "Pack documents the evening before briefing.",
  "Ask one teacher one precise question.",
  "Breathe, then pick up the pen.",
];

function AboutPage() {
  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <PageIntro
        kicker="S.6 · UACE 2026"
        title="Walk in ready."
        lede="A word for candidates heading to UNEB briefing on 6 November 2026. No gallery. Just the work in front of you."
      />

      <article className="rounded-card bg-forest p-6 text-paper sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">To every S.6 candidate</p>
        <h2 className="mt-2 font-display text-4xl text-balance">You have already carried this course.</h2>
        <div className="mt-4 grid gap-4 text-lg leading-relaxed text-paper/90">
          <p>
            Briefing is not the exam. It is the morning you prove your papers are in order and your mind is steady. The two years behind you are the real revision. These days only need to be honest.
          </p>
          <p>
            However the envelope opens, you will still be someone who did the work. Prepared is enough. Steady is enough.
          </p>
        </div>
        <Link to="/events" className="btn btn-gold mt-6">Briefing countdown</Link>
      </article>

      <section className="grid gap-3">
        {PILLARS.map(({ title, text, Icon }) => (
          <article key={title} className="flex gap-4 rounded-card border border-line bg-paper p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sage text-forest">
              <Icon className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-1 text-pretty text-muted">{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-card border border-gold bg-gold-soft p-6">
        <h2 className="font-display text-2xl">A quiet plan for the last stretch</h2>
        <ol className="mt-3 grid gap-2">
          {PLAN.map((line, i) => (
            <li key={line} className="rounded-2xl bg-paper px-4 py-3">
              <span className="mr-2 font-display text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
              {line}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
