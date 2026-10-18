import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as UNEB_BRIEFING } from "./gaceb-oSGkBD3P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countdown-DuD5iEMN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function parts(target, now) {
	const diff = Math.max(0, target - now);
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		mins: Math.floor(diff % 36e5 / 6e4),
		secs: Math.floor(diff % 6e4 / 1e3),
		done: diff <= 0
	};
}
var TILES = [
	{
		key: "days",
		label: "Days",
		tone: "bg-sage text-forest"
	},
	{
		key: "hours",
		label: "Hours",
		tone: "bg-gold-soft text-gold-deep"
	},
	{
		key: "mins",
		label: "Mins",
		tone: "bg-sky text-royal"
	},
	{
		key: "secs",
		label: "Secs",
		tone: "bg-paper text-burgundy"
	}
];
function Countdown({ compact = false }) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(Date.now());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const p = now == null ? null : parts(UNEB_BRIEFING.getTime(), now);
	const runStart = (/* @__PURE__ */ new Date("2026-09-01T00:00:00+03:00")).getTime();
	const runEnd = UNEB_BRIEFING.getTime();
	const progress = now == null ? 0 : Math.min(100, Math.max(0, (now - runStart) / (runEnd - runStart) * 100));
	const values = {
		days: p?.days,
		hours: p?.hours,
		mins: p?.mins,
		secs: p?.secs
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `overflow-hidden rounded-card bg-forest text-paper shadow-lg ${compact ? "" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: compact ? "p-4" : "grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.15fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
					children: "S.6 · UACE 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `mt-1 font-display text-balance ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`,
					children: "UNEB briefing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-paper/85",
					children: "6 November 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-2 overflow-hidden rounded-full bg-paper/20",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-gold",
						style: { width: `${progress}%` }
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2",
				"aria-live": "polite",
				children: TILES.map((tile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl px-1 py-3 text-center ${tile.tone}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "block font-display text-3xl tabular-nums sm:text-4xl",
						children: values[tile.key] == null ? "—" : String(values[tile.key]).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "text-xs font-semibold tracking-wide uppercase",
						children: tile.label
					})]
				}, tile.key))
			})]
		}), p?.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "bg-gold px-5 py-3 text-center font-semibold text-ink",
			children: "Briefing day is here. Walk in prepared."
		}) : null]
	});
}
//#endregion
export { Countdown as t };
