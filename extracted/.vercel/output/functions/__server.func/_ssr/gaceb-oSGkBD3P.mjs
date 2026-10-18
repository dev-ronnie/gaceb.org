import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gaceb-oSGkBD3P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Public browser settings already used by GACEB Scholar. Do not rename these keys. */
var GACEB_CONFIG = {
	SUPABASE_URL: "https://wwiedsnmkqjlhxlkfquj.supabase.co",
	SUPABASE_ANON_KEY: "sb_publishable_OElqt_dsZWnkLxd-gykvjA_NO4AFJOT",
	DONATION_URL: "",
	WEEKLY_PAYMENT_URL: "",
	MONTHLY_PAYMENT_URL: "",
	SUPPORT_EMAIL: "gacebscholar@gmail.com"
};
var WHATSAPP_URL = "https://api.whatsapp.com/send?phone=+256743766451";
var UNEB_BRIEFING = /* @__PURE__ */ new Date("2026-11-06T00:00:00+03:00");
var DEFAULT_NUMS = ["0743766451", "0783165623"];
var DEFAULT_PACKS = [
	{
		coins: 150,
		amount_ugx: 1e4,
		label: "Starter"
	},
	{
		coins: 500,
		amount_ugx: 25e3,
		label: "Popular"
	},
	{
		coins: 1e3,
		amount_ugx: 4e4,
		label: "Best value"
	}
];
var DEFAULT_PLANS = [
	{
		code: "daily",
		name: "Daily",
		hours: 24,
		amount_ugx: 2e3
	},
	{
		code: "weekly",
		name: "Weekly",
		hours: 168,
		amount_ugx: 7e3
	},
	{
		code: "monthly",
		name: "Monthly",
		hours: 720,
		amount_ugx: 2e4
	},
	{
		code: "yearly",
		name: "Yearly",
		hours: 8760,
		amount_ugx: 15e4
	}
];
var client = null;
function getDb() {
	if (typeof window === "undefined") return null;
	if (!client) client = createClient(GACEB_CONFIG.SUPABASE_URL, GACEB_CONFIG.SUPABASE_ANON_KEY, { auth: {
		persistSession: true,
		autoRefreshToken: true,
		detectSessionInUrl: true
	} });
	return client;
}
async function callRpc(fn, args) {
	const db = getDb();
	if (!db) return {
		data: null,
		error: { message: "Sign-in is not available right now." }
	};
	const rpc = db.rpc;
	return rpc(fn, args);
}
var GacebContext = (0, import_react.createContext)(null);
function useGaceb() {
	const ctx = (0, import_react.useContext)(GacebContext);
	if (!ctx) throw new Error("useGaceb outside provider");
	return ctx;
}
function GacebProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [dialog, setDialog] = (0, import_react.useState)(null);
	const [authMode, setAuthMode] = (0, import_react.useState)(null);
	const timer = (0, import_react.useRef)(null);
	const notify = (0, import_react.useCallback)((msg) => {
		setToast(msg);
		if (timer.current) window.clearTimeout(timer.current);
		timer.current = window.setTimeout(() => setToast(null), 3800);
	}, []);
	const refresh = (0, import_react.useCallback)(async () => {
		const db = getDb();
		if (!db) {
			setReady(true);
			return;
		}
		try {
			const s = (await db.auth.getSession()).data.session;
			setSession(s);
			if (s) {
				const p = await db.from("profiles").select("*").eq("id", s.user.id).maybeSingle();
				setProfile(p.data ?? null);
			} else setProfile(null);
		} catch {} finally {
			setReady(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const ref = new URLSearchParams(window.location.search).get("ref");
		if (ref) sessionStorage.setItem("gaceb-ref", ref);
		const db = getDb();
		refresh();
		if (!db) return;
		const sub = db.auth.onAuthStateChange(() => {
			window.setTimeout(() => void refresh(), 0);
		});
		return () => sub.data.subscription.unsubscribe();
	}, [refresh]);
	(0, import_react.useEffect)(() => {
		if (!dialog && !authMode) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				setDialog(null);
				setAuthMode(null);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [dialog, authMode]);
	const closeDialog = (0, import_react.useCallback)(() => {
		setDialog(null);
		setAuthMode(null);
	}, []);
	const openDialog = (0, import_react.useCallback)((node) => {
		setAuthMode(null);
		setDialog(node);
	}, []);
	const openAuth = (0, import_react.useCallback)((mode = "login") => {
		setDialog(null);
		setAuthMode(mode);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		session,
		profile,
		ready,
		isAdmin: profile?.role === "admin",
		notify,
		refresh,
		openDialog,
		closeDialog,
		openAuth
	}), [
		session,
		profile,
		ready,
		notify,
		refresh,
		openDialog,
		closeDialog,
		openAuth
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GacebContext.Provider, {
		value,
		children: [
			children,
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "status",
				className: "fixed bottom-24 left-1/2 z-50 max-w-sm -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-center text-sm text-paper shadow-lg sm:bottom-6",
				children: toast
			}) : null,
			dialog || authMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-end bg-ink/50 p-0 sm:place-items-center sm:p-4",
				onClick: closeDialog,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-paper p-5 shadow-2xl sm:rounded-card",
					onClick: (e) => e.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-outline min-h-10 px-3",
							onClick: closeDialog,
							"aria-label": "Close",
							children: "Close"
						})
					}), authMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthPanel, {
						mode: authMode,
						onMode: setAuthMode
					}) : dialog]
				})
			}) : null
		]
	});
}
function AuthPanel({ mode, onMode }) {
	const { notify, closeDialog, refresh } = useGaceb();
	const [status, setStatus] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const refCode = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("gaceb-ref") || "" : "";
	async function onSubmit(e) {
		e.preventDefault();
		const db = getDb();
		const fd = new FormData(e.currentTarget);
		if (!db) {
			setStatus("Sign-in is not available right now.");
			return;
		}
		setBusy(true);
		setStatus("Please wait…");
		try {
			if (mode === "signup") {
				const result = await db.auth.signUp({
					email: String(fd.get("email") || ""),
					password: String(fd.get("password") || ""),
					options: { data: {
						full_name: fd.get("full_name"),
						school: fd.get("school"),
						level: fd.get("level"),
						referral_code: fd.get("referral_code")
					} }
				});
				if (result.error) throw result.error;
				setStatus("Account created. Check your email if confirmation is on.");
			} else {
				const result = await db.auth.signInWithPassword({
					email: String(fd.get("email") || ""),
					password: String(fd.get("password") || "")
				});
				if (result.error) throw result.error;
				setStatus("You are logged in.");
			}
			await refresh();
			notify(mode === "signup" ? "Account created" : "Welcome back");
			window.setTimeout(closeDialog, 700);
		} catch (err) {
			setStatus(err instanceof Error ? err.message : "Authentication failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl text-balance",
			children: mode === "signup" ? "Create your account" : "Log in to GACEB Scholar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-4 grid gap-3",
			onSubmit,
			children: [
				mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							name: "full_name",
							required: true,
							maxLength: 100
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["School", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							name: "school",
							maxLength: 150
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Study level", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "field",
							name: "level",
							defaultValue: "O-Level",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "O-Level" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "A-Level" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Referral code (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							name: "referral_code",
							defaultValue: refCode
						})]
					})
				] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "email",
						type: "email",
						required: true,
						autoComplete: "email"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						name: "password",
						type: "password",
						required: true,
						minLength: 6,
						autoComplete: mode === "signup" ? "new-password" : "current-password"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary",
					disabled: busy,
					children: mode === "signup" ? "Create account" : "Log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					role: "status",
					children: status
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn btn-outline mt-2 w-full",
			onClick: () => onMode(mode === "signup" ? "login" : "signup"),
			children: mode === "signup" ? "I already have an account" : "Create a new account"
		})
	] });
}
//#endregion
export { GacebProvider as a, callRpc as c, GACEB_CONFIG as i, getDb as l, DEFAULT_PACKS as n, UNEB_BRIEFING as o, DEFAULT_PLANS as r, WHATSAPP_URL as s, DEFAULT_NUMS as t, useGaceb as u };
