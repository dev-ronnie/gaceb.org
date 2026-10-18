import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as useGaceb } from "./gaceb-oSGkBD3P.mjs";
import { H as ChevronLeft, V as ChevronRight, m as Plus, o as Trash2, r as Trophy, s as Star } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
import { d as removeDeviceEvent, i as fetchSharedEvents, l as publishSharedEvent, n as deleteSharedEvent, o as loadDeviceEvents, p as saveDeviceEvent, s as mergeEvents } from "./board-DcG_cUPI.mjs";
import { i as monthMatrix, o as prettyDate, r as isoDate } from "./format-Cg7u4TL-.mjs";
import { t as Countdown } from "./countdown-DuD5iEMN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-CyB43uKG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEEK = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
function HonourCalendar({ events, onSelect, selected }) {
	const [cursor, setCursor] = (0, import_react.useState)(() => new Date(2026, 10, 1));
	const year = cursor.getFullYear();
	const month = cursor.getMonth();
	const cells = monthMatrix(year, month);
	const byDay = /* @__PURE__ */ new Map();
	for (const ev of events) {
		const list = byDay.get(ev.eventDate) ?? [];
		list.push(ev);
		byDay.set(ev.eventDate, list);
	}
	const label = cursor.toLocaleDateString("en-UG", {
		month: "long",
		year: "numeric"
	});
	const [today, setToday] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setToday(isoDate(/* @__PURE__ */ new Date())), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-card border border-line bg-paper shadow-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-forest px-4 py-5 text-paper sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
						className: "size-4",
						"aria-hidden": true
					}), " Honour calendar"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-balance sm:text-4xl",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
						className: "size-8 shrink-0 fill-gold text-gold",
						"aria-hidden": true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-bar",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-outline min-h-11 min-w-11 px-3",
								"aria-label": "Previous month",
								onClick: () => setCursor(new Date(year, month - 1, 1)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "font-display text-xl text-forest",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-outline min-h-11 min-w-11 px-3",
								"aria-label": "Next month",
								onClick: () => setCursor(new Date(year, month + 1, 1)),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-7 gap-1 text-center text-xs font-semibold tracking-wide uppercase",
						children: WEEK.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `rounded-lg py-2 ${i >= 5 ? "bg-gold-soft text-gold-deep" : "bg-sage text-forest"}`,
							children: d
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 grid grid-cols-7 gap-1",
						children: cells.map((date, i) => {
							if (!date) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-12 sm:min-h-16" }, `e-${i}`);
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
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSelect(iso),
								"aria-pressed": isSelected,
								"aria-label": `${prettyDate(iso)}${briefing ? ", UNEB briefing" : ""}${dayEvents.length ? `, ${dayEvents.length} marked` : ""}`,
								className: `relative min-h-12 rounded-xl px-0.5 py-1 text-center sm:min-h-16 ${tone} ${isSelected ? "ring-2 ring-burgundy" : isToday ? "ring-2 ring-royal" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-bold tabular-nums sm:text-base",
									children: date.getDate()
								}), briefing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
									className: "mx-auto mt-0.5 size-3.5 text-burgundy sm:size-4",
									"aria-hidden": true
								}) : dayEvents.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "mx-auto mt-0.5 size-3 fill-gold-deep text-gold-deep",
									"aria-hidden": true
								}) : null]
							}, iso);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-xl bg-gold-soft px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
									className: "size-4 text-burgundy",
									"aria-hidden": true
								}), " UNEB briefing"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-xl bg-sage px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "size-4 fill-gold-deep text-gold-deep",
									"aria-hidden": true
								}), " Marked day"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-xl bg-sky px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "size-3 rounded-full ring-2 ring-royal",
									"aria-hidden": true
								}), " Today"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-xl bg-paper px-3 py-2 ring-1 ring-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "size-3 rounded-full ring-2 ring-burgundy",
									"aria-hidden": true
								}), " Selected"]
							})
						]
					})
				]
			})
		]
	});
}
function EventsPage() {
	const { isAdmin, session, notify } = useGaceb();
	const [events, setEvents] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)("2026-11-06");
	const [openForm, setOpenForm] = (0, import_react.useState)(false);
	async function reload() {
		const shared = await fetchSharedEvents();
		setEvents(mergeEvents(shared, loadDeviceEvents()));
	}
	(0, import_react.useEffect)(() => {
		setEvents(mergeEvents([], loadDeviceEvents()));
		reload();
	}, []);
	const dayEvents = events.filter((e) => e.eventDate === selected);
	const upcoming = events.slice(0, 8);
	async function add(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const row = {
			id: crypto.randomUUID(),
			title: String(fd.get("title") || "").trim(),
			eventDate: String(fd.get("date") || selected),
			description: String(fd.get("description") || "").trim(),
			source: "device"
		};
		if (!row.title) return;
		if (isAdmin && session) {
			if ((await publishSharedEvent({
				...row,
				source: "shared"
			}, session.user.id)).ok) {
				notify("Event published for everyone.");
				await reload();
				setOpenForm(false);
				return;
			}
			notify("Saved on this device. Shared calendar is not ready yet.");
		} else notify("Saved on this device.");
		saveDeviceEvent(row);
		setEvents(mergeEvents(events.filter((x) => x.source !== "device"), loadDeviceEvents()));
		setSelected(row.eventDate);
		setOpenForm(false);
		e.currentTarget.reset();
	}
	async function remove(ev) {
		if (ev.source === "official") return;
		if (ev.source === "shared") {
			const r = await deleteSharedEvent(ev.id);
			if (!r.ok) {
				notify(r.message);
				return;
			}
		} else removeDeviceEvent(ev.id);
		await reload();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "Live events",
				title: "The road to briefing",
				lede: "Colour calendar and the count to UNEB briefing, 6 November 2026."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HonourCalendar, {
				events,
				selected,
				onSelect: setSelected
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-paper p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: prettyDate(selected)
						}),
						dayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Nothing marked. Add a study mark if you want this day on your calendar."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-3",
							children: dayEvents.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-2xl bg-cream p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: ev.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: ev.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs tracking-wide text-gold-deep uppercase",
											children: ev.source === "device" ? "On this device" : ev.source === "official" ? "GACEB" : "Shared"
										})
									] }), ev.source !== "official" && (ev.source === "device" || isAdmin) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn btn-outline min-h-10 px-3",
										"aria-label": "Remove event",
										onClick: () => remove(ev),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									}) : null]
								})
							}, ev.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-primary mt-4",
							onClick: () => setOpenForm((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add a date"]
						}),
						openForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 grid gap-3",
							onSubmit: add,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-medium",
									children: ["Title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										name: "title",
										required: true,
										maxLength: 80
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-medium",
									children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										type: "date",
										name: "date",
										defaultValue: selected,
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-medium",
									children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field min-h-24",
										name: "description",
										maxLength: 300
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-gold",
									children: "Save date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: isAdmin ? "As admin, this is published for every learner once the calendar table is in place." : "Saved on this device until an admin publishes it to the shared calendar."
								})
							]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-paper p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Coming up"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2",
						children: upcoming.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-center justify-between gap-3 rounded-2xl px-2 py-3 text-left hover:bg-sage",
							onClick: () => setSelected(ev.eventDate),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block",
								children: ev.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-muted",
								children: prettyDate(ev.eventDate)
							})] }), ev.eventDate === "2026-11-06" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gold px-2 py-1 text-xs font-bold text-ink",
								children: "UNEB"
							}) : null]
						}) }, ev.id))
					})]
				})]
			})
		]
	});
}
//#endregion
export { EventsPage as component };
