import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Church, E as Landmark, G as Calculator, I as Dna, K as BookOpen, M as Globe, N as FlaskConical, P as Feather, X as Atom, _ as PenLine, a as TrendingUp, p as RefreshCw, q as BookOpenCheck } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-CgWrIOks.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	Biology: Dna,
	Chemistry: FlaskConical,
	Physics: Atom,
	Mathematics: Calculator,
	English: BookOpen,
	Geography: Globe,
	History: Landmark,
	"CRE / Divinity": Church,
	Economics: TrendingUp,
	Literature: Feather
};
var OLEVEL = [
	"Biology",
	"Chemistry",
	"Physics",
	"Mathematics",
	"English",
	"Geography",
	"History",
	"CRE / Divinity"
];
var ALEVEL = [
	"Biology",
	"Chemistry",
	"Physics",
	"Mathematics",
	"Economics",
	"History",
	"Literature",
	"Geography"
];
var STEPS = [
	{
		title: "Learn",
		text: "Understand the idea before memorising facts.",
		Icon: BookOpenCheck
	},
	{
		title: "Practise",
		text: "Answer questions without looking at notes.",
		Icon: PenLine
	},
	{
		title: "Review",
		text: "Track mistakes and revisit weak areas.",
		Icon: RefreshCw
	}
];
function SubjectGrid({ list, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4",
		children: list.map((s) => {
			const Icon = ICONS[s] ?? BookOpen;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `grid justify-items-center gap-1.5 rounded-2xl px-2 py-3 text-center text-sm font-medium ${tone === "green" ? "bg-paper/15 text-paper ring-1 ring-paper/25" : "bg-paper text-ink ring-1 ring-gold/50"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: `size-6 ${tone === "green" ? "text-gold" : "text-forest"}`,
					"aria-hidden": true
				}), s]
			}, s);
		})
	});
}
function Courses() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Find your path",
			title: "Courses & subjects",
			lede: "Choose your level and follow a focused path through your subjects."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card bg-forest p-6 text-paper shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-gold uppercase",
						children: "Ordinary level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl",
						children: "O-Level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-paper/85",
						children: "Build strong foundations, revise key topics and practise exam-style questions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectGrid, {
						list: OLEVEL,
						tone: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/library",
						search: { level: "O-Level" },
						className: "btn btn-gold mt-5",
						children: "O-Level resources"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-gold bg-gold-soft p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-gold-deep uppercase",
						children: "Advanced level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl",
						children: "A-Level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Strengthen subject knowledge, practise structured answers and prepare for UNEB."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectGrid, {
						list: ALEVEL,
						tone: "gold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/library",
						search: { level: "A-Level" },
						className: "btn btn-primary mt-5",
						children: "A-Level resources"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: STEPS.map(({ title, text, Icon }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-card border border-line bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-sage text-forest",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-xl",
					children: [
						i + 1,
						". ",
						title
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: text
				})] })]
			}, title))
		})
	] });
}
//#endregion
export { Courses as component };
