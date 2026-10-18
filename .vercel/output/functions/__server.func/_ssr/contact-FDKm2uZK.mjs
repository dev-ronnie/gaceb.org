import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GACEB_CONFIG, l as getDb, s as WHATSAPP_URL, u as useGaceb } from "./gaceb-oSGkBD3P.mjs";
import { C as Mail, g as Phone } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-FDKm2uZK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-8",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.76 14.05c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.41.48-.14.13-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.19.66-.77.84-1.03.18-.26.35-.22.58-.13.24.1 1.5.71 1.76.84.26.13.43.19.49.3.07.1.07.61-.17 1.29z"
		})
	});
}
function Glyph({ d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-8",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d
		})
	});
}
var SOON = [
	{
		name: "Facebook",
		tone: "bg-royal text-paper",
		d: "M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2.9v8h2.6z"
	},
	{
		name: "Instagram",
		tone: "bg-burgundy text-paper",
		d: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 2.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM17.4 6.4a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"
	},
	{
		name: "X",
		tone: "bg-ink text-paper",
		d: "M4 4h3.2l4.2 5.6L16.4 4H20l-6.2 7.4L20.3 20h-3.2l-4.6-6.1L7.4 20H4l6.5-7.8L4 4z"
	},
	{
		name: "YouTube",
		tone: "bg-burgundy text-paper",
		d: "M22.5 12.2s0-3-.4-4.3c-.2-.9-.9-1.6-1.8-1.8C18.8 5.7 12 5.7 12 5.7s-6.8 0-8.3.4c-.9.2-1.6.9-1.8 1.8C1.5 9.2 1.5 12.2 1.5 12.2s0 3 .4 4.3c.2.9.9 1.6 1.8 1.8 1.5.4 8.3.4 8.3.4s6.8 0 8.3-.4c.9-.2 1.6-.9 1.8-1.8.4-1.3.4-4.3.4-4.3zM10 15.5v-6.6l5.8 3.3L10 15.5z"
	},
	{
		name: "Telegram",
		tone: "bg-sky text-royal",
		d: "M20.8 4.6 3.4 11.3c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.6.1.9.8.9.4 0 .6-.2.9-.4l2.6-2.5 4.5 3.3c.8.5 1.4.2 1.6-.8l2.8-13.3c.3-1.1-.4-1.7-1.8-1.3zM8.7 13.6l8.7-5.4c.4-.3.8-.1.5.2l-7.4 6.7-.3 3.2-1.5-4.7z"
	},
	{
		name: "TikTok",
		tone: "bg-ink text-gold",
		d: "M14 4h2.1a4.6 4.6 0 0 0 3.4 3.2v2.2a6.7 6.7 0 0 1-3.4-1v6.1a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .8.1v2.3a3 3 0 1 0 2.1 2.8V4z"
	}
];
function ContactPage() {
	const { notify } = useGaceb();
	const [status, setStatus] = (0, import_react.useState)("");
	async function send(e) {
		e.preventDefault();
		const db = getDb();
		const fd = new FormData(e.currentTarget);
		if (!db) {
			setStatus("Message box is offline. Use the icons above.");
			return;
		}
		setStatus("Sending…");
		const r = await db.from("contact_messages").insert({
			name: String(fd.get("name") || "").trim(),
			email: String(fd.get("email") || "").trim(),
			message: String(fd.get("message") || "").trim()
		});
		if (r.error) setStatus(r.error.message);
		else {
			setStatus("Sent. Thank you.");
			e.currentTarget.reset();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-xl gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "Contact",
				title: "Reach GACEB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						className: "grid aspect-square place-items-center rounded-card bg-forest text-paper shadow-md",
						"aria-label": "WhatsApp",
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+256743766451",
						className: "grid aspect-square place-items-center rounded-card border border-line bg-paper text-forest",
						"aria-label": "Call",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${GACEB_CONFIG.SUPPORT_EMAIL}`,
						className: "grid aspect-square place-items-center rounded-card border border-line bg-gold-soft text-burgundy",
						"aria-label": "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-8" })
					}),
					SOON.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `grid aspect-square place-items-center rounded-card ${p.tone}`,
						"aria-label": p.name,
						onClick: () => notify("Link coming soon."),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, { d: p.d })
					}, p.name))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-card border border-line bg-paper p-5",
				onSubmit: send,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							name: "name",
							required: true,
							maxLength: 100
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "field",
							name: "email",
							type: "email",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm font-medium",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-32",
							name: "message",
							required: true,
							maxLength: 3e3
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						children: "Send"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						role: "status",
						children: status
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
