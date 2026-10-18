import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GACEB_CONFIG } from "./gaceb-oSGkBD3P.mjs";
import { i as PageIntro } from "./router-qxoopPAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-SvGFyhCF.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		h: "Using the site",
		p: "GACEB Scholar offers study resources, revision tools and notices for learners. Please use it honestly, keep your login private, and do not try to copy, resell or share paid resources."
	},
	{
		h: "Coins and Premium",
		p: "Some documents are free, some need coins and some need Premium. Coin packs and plans are paid through Mobile Money and are activated once the payment is confirmed. Prices shown on the site are the prices that apply."
	},
	{
		h: "Study materials",
		p: "Resources are for revision and learning. They support, but do not replace, your school teaching or official UNEB guidance. Always check dates and requirements with your school and UNEB."
	},
	{
		h: "Accounts",
		p: "We may suspend an account that is used to abuse the site, submit false payments or harm other learners."
	},
	{
		h: "Changes",
		p: "We may update these terms and the site from time to time. Continuing to use the site means you accept the current version."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-3xl gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "Legal",
				title: "Terms of use",
				lede: "The simple rules for using GACEB Scholar."
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
export { TermsPage as component };
