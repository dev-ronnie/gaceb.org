import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as useGaceb } from "./gaceb-oSGkBD3P.mjs";
import { S as Megaphone, T as Library, W as CalendarDays, Z as ArrowRight, l as Smartphone, n as Wallet, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { r as Crest } from "./router-qxoopPAz.mjs";
import { i as fetchSharedEvents, r as fetchSharedAnnouncements, s as mergeEvents } from "./board-DcG_cUPI.mjs";
import { o as prettyDate } from "./format-Cg7u4TL-.mjs";
import { t as Countdown } from "./countdown-DuD5iEMN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsSDPmK4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Read-only home-page preview. Uses the existing board.ts fetchers; no database changes. */
function LatestNotices() {
	const [notes, setNotes] = (0, import_react.useState)([]);
	const [events, setEvents] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let live = true;
		fetchSharedAnnouncements().then((rows) => {
			if (!live) return;
			const sorted = [...rows].sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.createdAt.localeCompare(a.createdAt));
			setNotes(sorted.slice(0, 3));
		});
		fetchSharedEvents().then((rows) => {
			if (!live) return;
			const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
			setEvents(mergeEvents(rows, []).filter((e) => e.eventDate >= today).slice(0, 4));
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
		"aria-label": "Latest from GACEB",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-card border border-line bg-paper p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 font-display text-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
						className: "size-5 text-burgundy",
						"aria-hidden": true
					}), " Latest notices"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/announcements",
					className: "inline-flex items-center gap-1 text-sm font-semibold text-forest",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "No notices right now. Check back soon."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 rounded-2xl bg-cream p-3",
					children: [n.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: n.imageUrl,
						alt: "",
						className: "size-16 shrink-0 rounded-xl object-cover",
						loading: "lazy"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							n.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-bold tracking-widest text-gold-deep uppercase",
								children: "Pinned"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-balance",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-2 text-sm text-muted",
								children: n.body
							})
						]
					})]
				}, n.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-card border border-line bg-paper p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 font-display text-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
						className: "size-5 text-gold-deep",
						"aria-hidden": true
					}), " Coming up"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					className: "inline-flex items-center gap-1 text-sm font-semibold text-forest",
					children: ["Calendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Nothing scheduled yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-sage p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-forest uppercase",
						children: prettyDate(e.eventDate)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: e.title })]
				}, e.id))
			})]
		})]
	});
}
function Home() {
	const { openAuth, session } = useGaceb();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-gold-deep uppercase",
						children: "Learn · Grow · Achieve"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 font-display text-5xl leading-[1.05] text-balance text-ink sm:text-6xl",
						children: ["Your learning journey. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-forest",
							children: "Your brighter future."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg text-pretty text-muted",
						children: "Uganda curriculum study resources, revision planning and a community built to help O-Level and A-Level learners rise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							className: "btn btn-primary",
							children: ["Explore courses ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/library",
							className: "btn btn-outline",
							children: "Open PDF library"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "btn btn-outline",
							children: "My dashboard"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-primary",
							onClick: () => openAuth("login"),
							children: "Log in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-outline",
							onClick: () => openAuth("signup"),
							children: "Create account"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 flex flex-wrap gap-2 text-sm text-forest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-sage px-3 py-1",
								children: "O-Level & A-Level"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-sage px-3 py-1",
								children: "Learn anywhere"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-sage px-3 py-1",
								children: "Student-first"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-forest p-6 text-paper shadow-lg ring-1 ring-gold/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-paper p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, { className: "mx-auto h-44 w-auto max-w-full sm:h-56" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl text-balance",
							children: "Learn today. Build tomorrow."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-paper/80",
							children: "Small steps. Strong habits. Brighter futures."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-paper/10 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "O-Level" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-paper/75",
									children: "Sciences · Humanities"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-paper/10 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "A-Level" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-paper/75",
									children: "Sciences · Arts"
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { compact: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestNotices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-6 text-forest" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: "Study library"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: "Revision notes, topic guides and past papers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/library",
								className: "mt-3 inline-flex items-center gap-1 font-semibold text-forest",
								children: ["Browse resources ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6 text-gold-deep" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: "Live events"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: "The honour calendar and the UNEB briefing countdown."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events",
								className: "mt-3 inline-flex items-center gap-1 font-semibold text-forest",
								children: ["Open live events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-6 text-burgundy" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: "Announcements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: "Notices with words and photographs, in one board."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/announcements",
								className: "mt-3 inline-flex items-center gap-1 font-semibold text-forest",
								children: ["Read the board ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				"aria-label": "Why GACEB Scholar",
				children: [
					{
						Icon: ShieldCheck,
						title: "Checked PDFs",
						text: "Resources are approved by GACEB before learners see them."
					},
					{
						Icon: Smartphone,
						title: "Made for phones",
						text: "Study, plan and read notices from any device."
					},
					{
						Icon: Wallet,
						title: "Mobile Money",
						text: "Unlock coins and Premium with MTN or Airtel."
					}
				].map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-card border border-line bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-sage text-forest",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: text
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-center gap-4 rounded-card bg-forest-deep p-6 text-paper sm:grid-cols-[1fr_auto] sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-gold uppercase",
						children: "Your study companion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "Meet Gauge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-paper/80",
						children: "Study strategies, revision ideas and a calm way through a hard topic."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/assistant",
						className: "btn btn-gold mt-4",
						children: "Open Gauge"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, { className: "hidden h-28 w-auto sm:block" })]
			})
		]
	});
}
//#endregion
export { Home as component };
