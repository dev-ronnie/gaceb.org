import { i as __toESM } from "../_runtime.mjs";
import { G as redirect, J as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GacebProvider, i as GACEB_CONFIG, u as useGaceb } from "./gaceb-oSGkBD3P.mjs";
import { A as Heart, D as Info, K as BookOpen, S as Megaphone, T as Library, W as CalendarDays, b as MessageCircle, c as Sparkles, i as TriangleAlert, j as GraduationCap, k as House, t as X, v as NotebookPen, x as Menu, z as Coins } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-qxoopPAz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var LINKS = [
	{
		to: "/",
		label: "Home",
		Icon: House
	},
	{
		to: "/courses",
		label: "Courses",
		Icon: BookOpen
	},
	{
		to: "/library",
		label: "Library",
		Icon: Library
	},
	{
		to: "/events",
		label: "Events",
		Icon: CalendarDays
	},
	{
		to: "/planner",
		label: "Planner",
		Icon: NotebookPen
	},
	{
		to: "/announcements",
		label: "Notices",
		Icon: Megaphone
	},
	{
		to: "/coins",
		label: "Coins",
		Icon: Coins
	},
	{
		to: "/assistant",
		label: "Gauge",
		Icon: Sparkles
	},
	{
		to: "/dashboard",
		label: "Account",
		Icon: GraduationCap
	},
	{
		to: "/about",
		label: "About",
		Icon: Info
	},
	{
		to: "/contact",
		label: "Contact",
		Icon: MessageCircle
	}
];
var DOCK = [
	{
		to: "/",
		label: "Home",
		Icon: House
	},
	{
		to: "/events",
		label: "Events",
		Icon: CalendarDays
	},
	{
		to: "/library",
		label: "Library",
		Icon: Library
	},
	{
		to: "/announcements",
		label: "Notices",
		Icon: Megaphone
	},
	{
		to: "/dashboard",
		label: "Account",
		Icon: GraduationCap
	}
];
function Crest({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/brand/gaceb-logo.png",
		alt: "Gauge-Caliper Examination Board",
		width: 1227,
		height: 984,
		className: `crest ${className ?? "h-12"}`
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-gold-deep uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight text-balance text-ink sm:text-5xl",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-pretty text-muted",
				children: lede
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-bar mt-4 w-20 rounded-full",
				"aria-hidden": true
			})
		]
	});
}
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const { session, openAuth } = useGaceb();
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:p-3",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "brand-bar",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, { className: "h-12 w-auto max-w-16 shrink-0 sm:h-14 sm:max-w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate font-display text-lg leading-none text-ink sm:text-xl",
								children: ["GACEB ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-forest",
									children: "Scholar"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex shrink-0 items-center gap-2",
							children: [session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "btn btn-primary hidden sm:inline-flex",
								children: "Account"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-primary hidden sm:inline-flex",
								onClick: () => openAuth("login"),
								children: "Log in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-outline min-h-11 min-w-11 px-3 lg:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								"aria-expanded": open,
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mx-auto hidden w-full max-w-6xl flex-wrap gap-1 px-4 pb-3 lg:flex",
						"aria-label": "Primary",
						children: LINKS.map((l) => {
							const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
							const Icon = l.Icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: `inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium ${active ? "bg-forest text-paper" : "text-ink hover:bg-sage hover:text-forest"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 shrink-0",
									"aria-hidden": true
								}), l.label]
							}, l.to);
						})
					}),
					open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "grid gap-1 border-t border-line px-3 py-3 lg:hidden",
						"aria-label": "Mobile",
						children: [LINKS.map((l) => {
							const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
							const Icon = l.Icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: `flex min-h-12 items-center gap-3 rounded-2xl px-3 py-2 text-base font-medium ${active ? "bg-forest text-paper" : "text-ink hover:bg-sage"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 shrink-0",
									"aria-hidden": true
								}), l.label]
							}, l.to);
						}), session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "btn btn-primary mt-1",
							children: "Account"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-primary mt-1",
							onClick: () => openAuth("login"),
							children: "Log in"
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-28",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "brand-bar",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.3fr_1fr_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, { className: "h-20 w-auto max-w-28 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "font-display text-lg",
										children: "GACEB Scholar"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Learn today · Build tomorrow"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: "Uganda curriculum study resources for O-Level and A-Level learners."
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Learn",
								className: "grid content-start gap-2 text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-xs tracking-widest text-gold-deep uppercase",
										children: "Learn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/courses",
										className: "hover:text-forest",
										children: "Courses"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/library",
										className: "hover:text-forest",
										children: "PDF Library"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/planner",
										className: "hover:text-forest",
										children: "Study Planner"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/assistant",
										className: "hover:text-forest",
										children: "Gauge"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Community",
								className: "grid content-start gap-2 text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-xs tracking-widest text-gold-deep uppercase",
										children: "GACEB"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/events",
										className: "hover:text-forest",
										children: "Live Events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/announcements",
										className: "hover:text-forest",
										children: "Announcements"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-forest",
										children: "About"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "hover:text-forest",
										children: "Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${GACEB_CONFIG.SUPPORT_EMAIL}`,
										className: "break-all hover:text-forest",
										children: GACEB_CONFIG.SUPPORT_EMAIL
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "border-t border-line px-4 py-5 text-center text-sm text-muted",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" GACEB Scholar · Gauge-Caliper Examination Board"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-paper/95 px-1 py-1 backdrop-blur lg:hidden",
				"aria-label": "Quick",
				children: DOCK.map((l) => {
					const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
					const Icon = l.Icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: `dock-link ${active ? "bg-sage text-forest" : ""}`,
						"aria-current": active ? "page" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold leading-none",
							children: l.label
						})]
					}, l.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/donate",
				className: "btn btn-gold fixed right-4 bottom-20 z-30 hidden shadow-lg sm:inline-flex lg:bottom-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "size-4 fill-current",
					"aria-hidden": true
				}), "Donate"]
			})
		]
	});
}
var styles_default = "/assets/styles-v-yh_3-F.css";
var Route$16 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "GACEB Scholar" },
			{
				name: "description",
				content: "Uganda curriculum study resources for O-Level and A-Level learners."
			},
			{
				name: "theme-color",
				content: "#0e5c43"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/brand/icon-192.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/brand/icon-192.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,680&family=Outfit:wght@400;500;600;700&display=swap"
			}
		]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-xl gap-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-gold-deep uppercase",
				children: "Missing page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-balance text-ink sm:text-5xl",
				children: "This page is not on the board"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-pretty text-muted",
				children: "The link may be old. Head home, or open live events."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "btn btn-primary",
					children: "Home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/events",
					className: "btn btn-outline",
					children: "Live events"
				})]
			})
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GacebProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$15 = () => import("./routes-BsSDPmK4.mjs");
var Route$15 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Home | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-CMDtorNw.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./announcements-Dh3X-bu9.mjs");
var Route$13 = createFileRoute("/announcements")({
	head: () => ({ meta: [{ title: "Announcements | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./assistant-gyvJb-fN.mjs");
var Route$12 = createFileRoute("/assistant")({
	head: () => ({ meta: [{ title: "Gauge | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./coins-CtFfRw6a.mjs");
var Route$11 = createFileRoute("/coins")({
	head: () => ({ meta: [{ title: "Coins & Premium | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-FDKm2uZK.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./courses-CgWrIOks.mjs");
var Route$9 = createFileRoute("/courses")({
	head: () => ({ meta: [{ title: "Courses | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard-x4GgBc-U.mjs");
var Route$8 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./donate-Bf5LStyE.mjs");
var Route$7 = createFileRoute("/donate")({
	head: () => ({ meta: [{ title: "Donate | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./events-CyB43uKG.mjs");
var Route$6 = createFileRoute("/events")({
	head: () => ({ meta: [{ title: "Live Events | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./library-C6_wRZDN.mjs");
var Route$5 = createFileRoute("/library")({
	validateSearch: (search) => {
		const level = typeof search.level === "string" ? search.level : "";
		return level ? { level } : {};
	},
	head: () => ({ meta: [{ title: "PDF Library | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./notices-C2WrzTqu.mjs");
var Route$4 = createFileRoute("/notices")({
	beforeLoad: () => {
		throw redirect({ to: "/announcements" });
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./planner-CP9fbQTp.mjs");
var Route$3 = createFileRoute("/planner")({
	head: () => ({ meta: [{ title: "Study Planner | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-FOVDH5Dy.mjs");
var Route$2 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./quizzes-CE-It_sU.mjs");
var Route$1 = createFileRoute("/quizzes")({
	beforeLoad: () => {
		throw redirect({ to: "/events" });
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-SvGFyhCF.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms | GACEB Scholar" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$15.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$16
	}),
	AboutRoute: Route$14.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$16
	}),
	AnnouncementsRoute: Route$13.update({
		id: "/announcements",
		path: "/announcements",
		getParentRoute: () => Route$16
	}),
	AssistantRoute: Route$12.update({
		id: "/assistant",
		path: "/assistant",
		getParentRoute: () => Route$16
	}),
	CoinsRoute: Route$11.update({
		id: "/coins",
		path: "/coins",
		getParentRoute: () => Route$16
	}),
	ContactRoute: Route$10.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$16
	}),
	CoursesRoute: Route$9.update({
		id: "/courses",
		path: "/courses",
		getParentRoute: () => Route$16
	}),
	DashboardRoute: Route$8.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$16
	}),
	DonateRoute: Route$7.update({
		id: "/donate",
		path: "/donate",
		getParentRoute: () => Route$16
	}),
	EventsRoute: Route$6.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$16
	}),
	LibraryRoute: Route$5.update({
		id: "/library",
		path: "/library",
		getParentRoute: () => Route$16
	}),
	NoticesRoute: Route$4.update({
		id: "/notices",
		path: "/notices",
		getParentRoute: () => Route$16
	}),
	PlannerRoute: Route$3.update({
		id: "/planner",
		path: "/planner",
		getParentRoute: () => Route$16
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$16
	}),
	QuizzesRoute: Route$1.update({
		id: "/quizzes",
		path: "/quizzes",
		getParentRoute: () => Route$16
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$16
	})
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PageIntro as i, Route$5 as n, Crest as r, router_exports as t };
