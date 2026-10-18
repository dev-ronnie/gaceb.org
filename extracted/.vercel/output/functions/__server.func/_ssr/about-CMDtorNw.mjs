import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as BookMarked, _ as PenLine, u as ShieldCheck, y as Moon } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CMDtorNw.js
var import_jsx_runtime = require_jsx_runtime();
var PILLARS = [
	{
		title: "The paper is a door",
		text: "UNEB does not measure your whole life. It measures what you can show, clearly, in the time you are given. Walk in as someone who has already done the work.",
		Icon: ShieldCheck
	},
	{
		title: "One paper, fully marked",
		text: "These weeks are not for rereading the whole syllabus. Sit one past paper as if the room were real. Mark it the same day. Write why each mark was lost.",
		Icon: PenLine
	},
	{
		title: "Rest keeps the marks",
		text: "A tired mind drops marks a rested one would have kept. Sleep, eat, and stop while the work is still clean. Momentum is a kind of courage.",
		Icon: Moon
	},
	{
		title: "Read the command word",
		text: "Before you write, see what the question asks. Begin with the one you can finish. Leave the phone outside the worry. Arrive with documents in order.",
		Icon: BookMarked
	}
];
var PLAN = [
	"One timed paper, not five open topics.",
	"Mark it before you start another.",
	"Sleep before midnight on school nights.",
	"Pack documents the evening before briefing.",
	"Ask one teacher one precise question.",
	"Breathe, then pick up the pen."
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "S.6 · UACE 2026",
				title: "Walk in ready.",
				lede: "A word for candidates heading to UNEB briefing on 6 November 2026. No gallery. Just the work in front of you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card bg-forest p-6 text-paper sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-gold uppercase",
						children: "To every S.6 candidate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl text-balance",
						children: "You have already carried this course."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 text-lg leading-relaxed text-paper/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Briefing is not the exam. It is the morning you prove your papers are in order and your mind is steady. The two years behind you are the real revision. These days only need to be honest." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "However the envelope opens, you will still be someone who did the work. Prepared is enough. Steady is enough." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "btn btn-gold mt-6",
						children: "Briefing countdown"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3",
				children: PILLARS.map(({ title, text, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex gap-4 rounded-card border border-line bg-paper p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-sage text-forest",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-pretty text-muted",
						children: text
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-gold bg-gold-soft p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "A quiet plan for the last stretch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 grid gap-2",
					children: PLAN.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-paper px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-display text-gold-deep",
							children: String(i + 1).padStart(2, "0")
						}), line]
					}, line))
				})]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
