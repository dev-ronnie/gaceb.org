import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GACEB_CONFIG } from "./gaceb-oSGkBD3P.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-FOVDH5Dy.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		h: "What we collect",
		p: "When you create an account we store the details you give us, such as your name, email, phone number and school or class. If you submit a Mobile Money payment we store the transaction details you enter so we can confirm it."
	},
	{
		h: "How we use it",
		p: "We use your details to run your account, unlock coins and Premium content you have paid for, confirm payments, and reply when you contact us. We do not sell your personal information."
	},
	{
		h: "Where it is kept",
		p: "Account and payment records are held in our Supabase database. Some preferences, such as study-planner entries, may also be saved in your own browser on your own device."
	},
	{
		h: "Your choices",
		p: "You can update your profile from your dashboard. To ask for your account or data to be corrected or removed, email us and we will help."
	},
	{
		h: "Children and learners",
		p: "GACEB Scholar is made for school learners. If you are under 18, please use the site with the knowledge of a parent, guardian or teacher."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-3xl gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "Legal",
				title: "Privacy",
				lede: "How GACEB Scholar handles your information."
			}),
			SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-line bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: s.h
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-pretty leading-relaxed text-muted",
					children: s.p
				})]
			}, s.h)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Questions? Email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-forest",
						href: `mailto:${GACEB_CONFIG.SUPPORT_EMAIL}`,
						children: GACEB_CONFIG.SUPPORT_EMAIL
					}),
					". This page is a plain-language summary and should be reviewed by GACEB before launch."
				]
			})
		]
	});
}
//#endregion
export { PrivacyPage as component };
