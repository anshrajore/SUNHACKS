module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/gradient-button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Demo": (()=>Demo),
    "GradientButton": (()=>GradientButton),
    "gradientButtonVariants": (()=>gradientButtonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const gradientButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])([
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "text-base leading-[19px] font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50"
], {
    variants: {
        variant: {
            default: "",
            variant: "gradient-button-variant"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const GradientButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(gradientButtonVariants({
            variant,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/gradient-button.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, this);
});
GradientButton.displayName = "GradientButton";
function Demo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GradientButton, {
                children: "JOIN DISCORD"
            }, void 0, false, {
                fileName: "[project]/components/ui/gradient-button.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GradientButton, {
                variant: "variant",
                children: "REGISTER NOW"
            }, void 0, false, {
                fileName: "[project]/components/ui/gradient-button.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/gradient-button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/shape-landing-hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DemoHeroGeometric": (()=>DemoHeroGeometric),
    "HeroGeometric": (()=>HeroGeometric)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$gradient$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/gradient-button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -150,
            rotate: rotate - 15
        },
        animate: {
            opacity: 1,
            y: 0,
            rotate: rotate
        },
        transition: {
            duration: 2.4,
            delay,
            ease: [
                0.23,
                0.86,
                0.39,
                0.96
            ],
            opacity: {
                duration: 1.2
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                y: [
                    0,
                    15,
                    0
                ]
            },
            transition: {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
            },
            style: {
                width,
                height
            },
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]")
            }, void 0, false, {
                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/shape-landing-hero.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/shape-landing-hero.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function HeroGeometric({ badge = "Welcome to", title1 = "SUNHACKS", title2 = "International level Hackathon", description = "Leading the Future of AI — Organizing India's Largest GenAI Hackathon." }) {
    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElegantShape, {
                        delay: 0.3,
                        width: 600,
                        height: 140,
                        rotate: 12,
                        gradient: "from-indigo-500/[0.15]",
                        className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElegantShape, {
                        delay: 0.5,
                        width: 500,
                        height: 120,
                        rotate: -15,
                        gradient: "from-rose-500/[0.15]",
                        className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElegantShape, {
                        delay: 0.4,
                        width: 300,
                        height: 80,
                        rotate: -8,
                        gradient: "from-violet-500/[0.15]",
                        className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElegantShape, {
                        delay: 0.6,
                        width: 200,
                        height: 60,
                        rotate: 20,
                        gradient: "from-amber-500/[0.15]",
                        className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElegantShape, {
                        delay: 0.7,
                        width: 150,
                        height: 40,
                        rotate: -25,
                        gradient: "from-cyan-500/[0.15]",
                        className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUpVariants,
                            initial: "hidden",
                            animate: "visible",
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                    className: "h-2 w-2 fill-rose-500/80"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/60 tracking-wide",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/shape-landing-hero.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUpVariants,
                            initial: "hidden",
                            animate: "visible",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80",
                                        children: title1
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                        lineNumber: 162,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "),
                                        children: title2
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                        lineNumber: 166,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                lineNumber: 161,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shape-landing-hero.tsx",
                            lineNumber: 156,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: fadeUpVariants,
                            initial: "hidden",
                            animate: "visible",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                    lineNumber: 181,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center w-full mb-4 z-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$gradient$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Demo"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                        lineNumber: 185,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/shape-landing-hero.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/shape-landing-hero.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/shape-landing-hero.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ui/shape-landing-hero.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/shape-landing-hero.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
;
function DemoHeroGeometric() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroGeometric, {
        badge: "Welcome to",
        title1: "SUNHACKS",
        title2: "International level Hackathon",
        description: "Leading the Future of AI — Organizing India's Largest GenAI Hackathon."
    }, void 0, false, {
        fileName: "[project]/components/ui/shape-landing-hero.tsx",
        lineNumber: 199,
        columnNumber: 12
    }, this);
}
;
}}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hero": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const aboutImages = [
    {
        src: "/tt8.jpg",
        alt: "Group discussion in classroom"
    },
    {
        src: "/IMG_6142.jpeg",
        alt: "Group discussion in classroom"
    },
    {
        src: "/IMG_6155.jpeg",
        alt: "SunHacks participants and mentors"
    },
    {
        src: "/IMG_6162.jpeg",
        alt: "Audience in seminar hall"
    },
    {
        src: "/IMG_6171.jpeg",
        alt: "Group photo with UDAAN frame"
    },
    {
        src: "/IMG_6130.jpeg",
        alt: "Team presenting at podium"
    }
];
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full pt-8 pb-12 lg:pt-12 lg:pb-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:grid md:grid-cols-2 gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "text-white border-white",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5 flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl md:max-w-2xl tracking-tighter text-left font-bold text-white",
                                        children: "Innovate Boldly. Break Records. Build the Future."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-xl md:max-w-2xl text-left space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "SunHacks is India's premier GenAI hackathon, hosted in Nashik by Sandip University. Designed to unite the country's brightest minds, this groundbreaking ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: " 36-hour in-person "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 182
                                                    }, this),
                                                    " event brings together over 1500+ developers, data scientists, and AI innovators to solve real-world challenges using Generative AI and cutting-edge technologies."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "As the organizers of India's Largest GenAI Hackathon, SunHacks is not only a platform for breakthrough ideas — it's a ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "World Record attempt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 147
                                                    }, this),
                                                    ", pushing the boundaries of collaborative innovation at scale."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "With curated tracks like FinTech, HealthTech, Sustainability, SaaS, and GenAI/ML, participants will engage in high-impact ideation, hands-on mentorship, and live pitching to top industry experts. Whether you're a seasoned developer or a rising tech enthusiast, SunHacks offers national visibility, deep learning experiences, and unmatched networking with recruiters, mentors, and fellow visionaries."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Join us in this transformative journey — where technology meets ambition, and innovation makes history."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted rounded-md aspect-square overflow-hidden relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: aboutImages[0].src,
                                    alt: aboutImages[0].alt,
                                    fill: true,
                                    style: {
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted rounded-md row-span-2 overflow-hidden relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: aboutImages[1].src,
                                    alt: aboutImages[1].alt,
                                    fill: true,
                                    style: {
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted rounded-md aspect-square overflow-hidden relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: aboutImages[2].src,
                                    alt: aboutImages[2].alt,
                                    fill: true,
                                    style: {
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/rubik-s-cube.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DemoOne": (()=>DemoOne),
    "Scene": (()=>Scene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f681e724.esm.js [app-ssr] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f681e724.esm.js [app-ssr] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$SpotLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/SpotLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useDepthBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/useDepthBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/RoundedBox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hero$2d$with$2d$group$2d$of$2d$images$2d$text$2d$and$2d$two$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const RubiksCubeModel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function RubiksCubeModel(props, ref) {
    const ANIMATION_DURATION = 1.2;
    const GAP = 0.01;
    const RADIUS = 0.075;
    const mainGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentRotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastMoveAxisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentMoveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const viewportSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const isResizingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resizeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [size] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.8);
    const [cubes, setCubes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deviceSettings, setDeviceSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const isMobile = window.innerWidth < 768;
        return {
            smoothness: isMobile ? 2 : 4,
            castShadow: !isMobile,
            receiveShadow: !isMobile
        };
    });
    const reusableVec3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), []);
    const reusableMatrix4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](), []);
    const reusableQuaternion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, ()=>({
            ...mainGroupRef.current || {},
            reset: resetCube
        }));
    const initializeCubes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const initial = [];
        const positions = [
            -1,
            0,
            1
        ];
        for (const x of positions){
            for (const y of positions){
                for (const z of positions){
                    initial.push({
                        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x, y, z),
                        rotationMatrix: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]().identity(),
                        id: `cube-${x}-${y}-${z}`,
                        originalCoords: {
                            x,
                            y,
                            z
                        }
                    });
                }
            }
        }
        return initial;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCubes(initializeCubes());
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
                resizeTimeoutRef.current = null;
            }
        };
    }, [
        initializeCubes
    ]);
    const resetCube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isMountedRef.current) return;
        setCubes(initializeCubes());
        if (mainGroupRef.current) {
            mainGroupRef.current.rotation.set(0, 0, 0);
        }
        isAnimatingRef.current = false;
        currentRotationRef.current = 0;
        lastMoveAxisRef.current = null;
        currentMoveRef.current = null;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    }, [
        initializeCubes
    ]);
    const handleViewportChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isMountedRef.current) return;
        isResizingRef.current = true;
        if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
        }
        resizeTimeoutRef.current = setTimeout(()=>{
            if (!isMountedRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            const visualViewportWidth = window.visualViewport ? window.visualViewport.width : width;
            const visualViewportHeight = window.visualViewport ? window.visualViewport.height : height;
            const effectiveWidth = Math.min(width, visualViewportWidth);
            const effectiveHeight = Math.min(height, visualViewportHeight);
            const prevSize = viewportSizeRef.current;
            if (Math.abs(prevSize.width - effectiveWidth) < 10 && Math.abs(prevSize.height - effectiveHeight) < 10) {
                isResizingRef.current = false;
                return;
            }
            viewportSizeRef.current = {
                width: effectiveWidth,
                height: effectiveHeight
            };
            const isMobile = effectiveWidth < 768;
            setDeviceSettings((prevSettings)=>{
                const newSettings = {
                    smoothness: isMobile ? 2 : 4,
                    castShadow: !isMobile,
                    receiveShadow: !isMobile
                };
                if (prevSettings.smoothness !== newSettings.smoothness || prevSettings.castShadow !== newSettings.castShadow || prevSettings.receiveShadow !== newSettings.receiveShadow) {
                    return newSettings;
                }
                return prevSettings;
            });
            isResizingRef.current = false;
        }, 150);
    }, [
        resetCube
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleViewportChange();
        let throttleTimer = null;
        const throttledHandler = ()=>{
            if (throttleTimer) return;
            throttleTimer = setTimeout(()=>{
                handleViewportChange();
                throttleTimer = null;
            }, 100);
        };
        window.addEventListener("resize", throttledHandler);
        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", throttledHandler);
            window.visualViewport.addEventListener("scroll", throttledHandler);
        }
        const handleOrientationChange = ()=>{
            if (isAnimatingRef.current) {
                resetCube();
            }
            setTimeout(handleViewportChange, 100);
        };
        window.addEventListener("orientationchange", handleOrientationChange);
        return ()=>{
            window.removeEventListener("resize", throttledHandler);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener("resize", throttledHandler);
                window.visualViewport.removeEventListener("scroll", throttledHandler);
            }
            window.removeEventListener("orientationchange", handleOrientationChange);
            if (throttleTimer) {
                clearTimeout(throttleTimer);
            }
        };
    }, [
        handleViewportChange,
        resetCube
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleVisibilityChange = ()=>{
            if (!isMountedRef.current) return;
            const isPageVisible = document.visibilityState === "visible";
            setIsVisible(isPageVisible);
            if (!isPageVisible) {
                resetCube();
            } else {
                setTimeout(()=>{
                    if (isMountedRef.current) {
                        handleViewportChange();
                    }
                }, 100);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [
        resetCube,
        handleViewportChange
    ]);
    const possibleMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const moves = [];
        for (const axis of [
            'x',
            'y',
            'z'
        ]){
            for (const layer of [
                -1,
                0,
                1
            ]){
                for (const direction of [
                    1,
                    -1
                ]){
                    moves.push({
                        axis,
                        layer,
                        direction
                    });
                }
            }
        }
        return moves;
    }, []);
    const isInLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((position, axis, layer)=>{
        const coord = axis === "x" ? position.x : axis === "y" ? position.y : position.z;
        return Math.abs(coord - layer) < 0.1;
    }, []);
    const selectNextMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isAnimatingRef.current && isVisible && isMountedRef.current && !isResizingRef.current) {
            const availableMoves = possibleMoves.filter((move)=>move.axis !== lastMoveAxisRef.current);
            const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            const rotationAngle = Math.PI / 2;
            currentMoveRef.current = {
                ...move,
                rotationAngle
            };
            lastMoveAxisRef.current = move.axis;
            isAnimatingRef.current = true;
            currentRotationRef.current = 0;
        } else {}
    }, [
        possibleMoves,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeoutId;
        const scheduleNextMove = ()=>{
            if (isVisible && isMountedRef.current && !isResizingRef.current) {
                const delay = isAnimatingRef.current ? ANIMATION_DURATION * 1000 : 200;
                timeoutId = setTimeout(()=>{
                    selectNextMove();
                    if (isMountedRef.current) {
                        scheduleNextMove();
                    }
                }, delay);
            } else {
                if (isResizingRef.current && isVisible && isMountedRef.current) {
                    setTimeout(()=>{
                        if (isMountedRef.current) {
                            scheduleNextMove();
                        }
                    }, 500);
                }
            }
        };
        scheduleNextMove();
        return ()=>{
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [
        isVisible,
        selectNextMove
    ]);
    const createRotationMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((axis, angle)=>{
        reusableMatrix4.identity();
        reusableQuaternion.identity();
        reusableVec3.set(0, 0, 0);
        reusableVec3[axis] = 1;
        reusableQuaternion.setFromAxisAngle(reusableVec3, angle);
        return reusableMatrix4.makeRotationFromQuaternion(reusableQuaternion);
    }, [
        reusableMatrix4,
        reusableQuaternion,
        reusableVec3
    ]);
    const easeInOutQuad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }, []);
    const matrixToQuaternion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((matrix)=>{
        reusableQuaternion.setFromRotationMatrix(matrix);
        return reusableQuaternion.clone();
    }, [
        reusableQuaternion
    ]);
    const normalizePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cubes)=>{
        return cubes.map((cube)=>{
            const x = Math.round(cube.position.x);
            const y = Math.round(cube.position.y);
            const z = Math.round(cube.position.z);
            const newPosition = Math.abs(cube.position.x - x) > 0.001 || Math.abs(cube.position.y - y) > 0.001 || Math.abs(cube.position.z - z) > 0.001 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x, y, z) : cube.position;
            return {
                ...cube,
                position: newPosition
            };
        });
    }, []);
    const checkCubeIntegrity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cubes)=>{
        if (cubes.length !== 27) {
            console.warn("Incorrect number of cubes:", cubes.length);
            return false;
        }
        for (const cube of cubes){
            const { x, y, z } = cube.position;
            if (Math.abs(x) > 1.1 || Math.abs(y) > 1.1 || Math.abs(z) > 1.1) {
                console.warn("Cube out of range:", cube.id, x, y, z);
                return false;
            }
        }
        return true;
    }, []);
    const updateCubes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((prevCubes, move, stepRotationMatrix)=>{
        return prevCubes.map((cube)=>{
            if (isInLayer(cube.position, move.axis, move.layer)) {
                const tempVec3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](cube.position.x, cube.position.y, cube.position.z);
                tempVec3.applyMatrix4(stepRotationMatrix);
                const newRotationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]().multiplyMatrices(stepRotationMatrix, cube.rotationMatrix);
                return {
                    ...cube,
                    position: tempVec3,
                    rotationMatrix: newRotationMatrix
                };
            }
            return cube;
        });
    }, [
        isInLayer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (!isVisible || !isMountedRef.current) return;
        if (mainGroupRef.current) {
            mainGroupRef.current.rotation.x += delta * 0.3;
            mainGroupRef.current.rotation.y += delta * 0.5;
            mainGroupRef.current.rotation.z += delta * 0.2;
        }
        if (isResizingRef.current && isAnimatingRef.current) {
            resetCube();
            return;
        }
        if (isAnimatingRef.current && currentMoveRef.current) {
            const move = currentMoveRef.current;
            const targetRotation = move.rotationAngle ?? Math.PI / 2;
            const rotation = delta / ANIMATION_DURATION;
            if (currentRotationRef.current < 1) {
                const newRotation = Math.min(currentRotationRef.current + rotation, 1);
                const prevRotation = currentRotationRef.current;
                currentRotationRef.current = newRotation;
                const easedProgress = easeInOutQuad(newRotation);
                const prevEasedProgress = easeInOutQuad(prevRotation);
                const currentAngle = easedProgress * targetRotation;
                const prevAngle = prevEasedProgress * targetRotation;
                const stepRotation = currentAngle - prevAngle;
                const stepRotationMatrix = createRotationMatrix(move.axis, stepRotation * move.direction);
                if (isMountedRef.current && !isResizingRef.current) {
                    setCubes((prevCubes)=>{
                        const updatedCubes = updateCubes(prevCubes, move, stepRotationMatrix);
                        if (newRotation >= 1) {
                            const normalizedCubes = normalizePositions(updatedCubes);
                            if (!checkCubeIntegrity(normalizedCubes)) {
                                console.warn("Found a cube out of bounds");
                                if (isMountedRef.current) {
                                    setTimeout(()=>resetCube(), 0);
                                }
                            }
                            isAnimatingRef.current = false;
                            currentRotationRef.current = 0;
                            currentMoveRef.current = null;
                            return normalizedCubes;
                        }
                        return updatedCubes;
                    });
                }
            }
        }
    });
    const chromeMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            color: '#000000',
            metalness: 0.5,
            roughness: 0.5,
            clearcoat: 0,
            clearcoatRoughness: 0,
            reflectivity: 0.5,
            iridescence: 0,
            iridescenceIOR: 0,
            iridescenceThicknessRange: [
                100,
                400
            ],
            envMapIntensity: 8
        }), []);
    const sharedMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
            ...chromeMaterial
        }, void 0, false, {
            fileName: "[project]/components/ui/rubik-s-cube.tsx",
            lineNumber: 461,
            columnNumber: 5
        }, this), [
        chromeMaterial
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: mainGroupRef,
        ...props,
        children: cubes.map((cube)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    cube.position.x * (size + GAP),
                    cube.position.y * (size + GAP),
                    cube.position.z * (size + GAP)
                ],
                quaternion: matrixToQuaternion(cube.rotationMatrix),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBox"], {
                    args: [
                        size,
                        size,
                        size
                    ],
                    radius: RADIUS,
                    smoothness: deviceSettings.smoothness,
                    castShadow: deviceSettings.castShadow,
                    receiveShadow: deviceSettings.receiveShadow,
                    children: sharedMaterial
                }, void 0, false, {
                    fileName: "[project]/components/ui/rubik-s-cube.tsx",
                    lineNumber: 476,
                    columnNumber: 11
                }, this)
            }, cube.id, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 467,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/rubik-s-cube.tsx",
        lineNumber: 465,
        columnNumber: 5
    }, this);
});
RubiksCubeModel.displayName = "RubiksCubeModel";
function CameraController() {
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])((_state, _delta)=>{
        camera.lookAt(0, 0, 0);
    });
    return null;
}
function EnhancedSpotlight(props) {
    const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Uncomment to see a visual helper for the spotlight
    //useHelper(spotlightRef, THREE.SpotLightHelper, 'red');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (light.current) {
            light.current.target.position.set(0, 0, 0);
            light.current.target.updateMatrixWorld();
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$SpotLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"], {
            castShadow: false,
            ref: light,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/rubik-s-cube.tsx",
            lineNumber: 516,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function SceneContent() {
    const depthBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useDepthBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDepthBuffer"])({
        size: 2048,
        frames: 1
    });
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f681e724$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])((state)=>{
        setTime(state.clock.getElapsedTime());
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedSpotlight, {
                depthBuffer: depthBuffer,
                color: "#aaaace",
                position: [
                    3,
                    3,
                    2
                ],
                volumetric: true,
                opacity: 1,
                penumbra: 1,
                distance: 17,
                angle: 0.8,
                attenuation: 30,
                anglePower: 6,
                intensity: 1,
                shadowMapSize: 2048,
                shadowBias: -0.0001,
                shadowAutoUpdate: true,
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                makeDefault: true,
                fov: 50,
                position: [
                    0,
                    0,
                    7
                ],
                near: 0.1,
                far: 1000
            }, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {}, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RubiksCubeModel, {}, void 0, false, {
                    fileName: "[project]/components/ui/rubik-s-cube.tsx",
                    lineNumber: 568,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function Scene() {
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkIsDesktop = ()=>{
            setIsDesktop(window.innerWidth >= 768);
        };
        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return ()=>window.removeEventListener("resize", checkIsDesktop);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-svh w-screen relative bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            gl: {
                antialias: isDesktop,
                preserveDrawingBuffer: isDesktop,
                powerPreference: isDesktop ? "high-performance" : "default",
                alpha: true,
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                toneMappingExposure: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContent, {}, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 602,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/rubik-s-cube.tsx",
            lineNumber: 591,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/rubik-s-cube.tsx",
        lineNumber: 590,
        columnNumber: 5
    }, this);
}
const aboutImages = [
    {
        src: "/tt8.jpg",
        alt: "Group discussion in classroom"
    },
    {
        src: "/IMG_6142.jpeg",
        alt: "Group discussion in classroom"
    },
    {
        src: "/IMG_6155.jpeg",
        alt: "SunHacks participants and mentors"
    },
    {
        src: "/IMG_6162.jpeg",
        alt: "Audience in seminar hall"
    },
    {
        src: "/IMG_6171.jpeg",
        alt: "Group photo with UDAAN frame"
    },
    {
        src: "/IMG_6130.jpeg",
        alt: "Team presenting at podium"
    }
];
const DemoOne = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {}, void 0, false, {
                    fileName: "[project]/components/ui/rubik-s-cube.tsx",
                    lineNumber: 623,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hero$2d$with$2d$group$2d$of$2d$images$2d$text$2d$and$2d$two$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                    fileName: "[project]/components/ui/rubik-s-cube.tsx",
                    lineNumber: 627,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/rubik-s-cube.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/rubik-s-cube.tsx",
        lineNumber: 620,
        columnNumber: 5
    }, this);
};
;
}}),
"[project]/hooks/use-mouse-position-ref.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMousePositionRef": (()=>useMousePositionRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useMousePositionRef = (containerRef)=>{
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updatePosition = (x, y)=>{
            if (containerRef && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const relativeX = x - rect.left;
                const relativeY = y - rect.top;
                // Calculate relative position even when outside the container
                positionRef.current = {
                    x: relativeX,
                    y: relativeY
                };
            } else {
                positionRef.current = {
                    x,
                    y
                };
            }
        };
        const handleMouseMove = (ev)=>{
            updatePosition(ev.clientX, ev.clientY);
        };
        const handleTouchMove = (ev)=>{
            const touch = ev.touches[0];
            updatePosition(touch.clientX, touch.clientY);
        };
        // Listen for both mouse and touch events
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [
        containerRef
    ]);
    return positionRef;
};
}}),
"[project]/components/ui/parallax-floating.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatingElement": (()=>FloatingElement),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mouse$2d$position$2d$ref$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-mouse-position-ref.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const FloatingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const Floating = ({ children, className, sensitivity = 1, easingFactor = 0.05, ...props })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const mousePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mouse$2d$position$2d$ref$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMousePositionRef"])(containerRef);
    const registerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, element, depth)=>{
        elementsMap.current.set(id, {
            element,
            depth,
            currentPosition: {
                x: 0,
                y: 0
            }
        });
    }, []);
    const unregisterElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        elementsMap.current.delete(id);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationFrame"])(()=>{
        if (!containerRef.current) return;
        elementsMap.current.forEach((data)=>{
            const strength = data.depth * sensitivity / 20;
            // Calculate new target position
            const newTargetX = mousePositionRef.current.x * strength;
            const newTargetY = mousePositionRef.current.y * strength;
            // Check if we need to update
            const dx = newTargetX - data.currentPosition.x;
            const dy = newTargetY - data.currentPosition.y;
            // Update position only if we're still moving
            data.currentPosition.x += dx * easingFactor;
            data.currentPosition.y += dy * easingFactor;
            data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`;
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingContext.Provider, {
        value: {
            registerElement,
            unregisterElement
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 w-full h-full", className),
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/parallax-floating.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/parallax-floating.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Floating;
const FloatingElement = ({ children, className, depth = 1 })=>{
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Math.random().toString(36).substring(7));
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FloatingContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!elementRef.current || !context) return;
        const nonNullDepth = depth ?? 0.01;
        context.registerElement(idRef.current, elementRef.current, nonNullDepth);
        return ()=>context.unregisterElement(idRef.current);
    }, [
        depth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute will-change-transform", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/parallax-floating.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ui/space-tracks-demo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StarfieldBackground": (()=>StarfieldBackground),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TRACK_ICONS = {
    'Gen AI & ML': '🤖',
    'SaaS': '☁️',
    'HealthTech': '💊',
    'Fintech': '💳',
    'Sustainable ': '🌱',
    'Mystery Track': '✨'
};
function TrackRing({ duration = 30, className }) {
    const [animationStarted, setAnimationStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        baseRadius: 120,
        isMobile: false,
        trackRings: [
            {
                tracks: [
                    'Gen AI & ML',
                    'SaaS'
                ],
                radius: 96,
                duration: duration,
                delay: 0
            },
            {
                tracks: [
                    'HealthTech',
                    'Fintech'
                ],
                radius: 132,
                duration: duration * 1.1,
                delay: 2
            },
            {
                tracks: [
                    'Sustainable ',
                    'Mystery Track'
                ],
                radius: 168,
                duration: duration * 0.9,
                delay: 4
            }
        ]
    });
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [parallax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Calculate responsive sizes only on client
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const minDim = Math.min(vw, vh);
        const baseRadius = Math.max(70, Math.min(minDim * 0.22, 160));
        const isMobile = minDim < 700;
        setSizes({
            baseRadius,
            isMobile,
            trackRings: [
                {
                    tracks: [
                        'Gen AI & ML',
                        'SaaS'
                    ],
                    radius: baseRadius * 0.8,
                    duration: duration,
                    delay: 0
                },
                {
                    tracks: [
                        'HealthTech',
                        'Fintech'
                    ],
                    radius: baseRadius * 1.1,
                    duration: duration * 1.1,
                    delay: 2
                },
                {
                    tracks: [
                        'Sustainable ',
                        'Mystery Track'
                    ],
                    radius: baseRadius * 1.4,
                    duration: duration * 0.9,
                    delay: 4
                }
            ]
        });
        const timer = setTimeout(()=>{
            setAnimationStarted(true);
        }, 100);
        return ()=>clearTimeout(timer);
    }, [
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ringRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-full h-full flex items-center justify-center", className),
        style: {
            perspective: 1200,
            transform: `rotateY(${parallax.x * 10}deg) rotateX(${-parallax.y * 10}deg)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[clamp(2rem,7vw,3.5rem)] font-extrabold bg-gradient-to-b from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient-glow",
                    children: "Tracks"
                }, void 0, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            sizes.trackRings.map((ring, ringIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 flex items-center justify-center",
                    initial: {
                        rotate: 0
                    },
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: ring.duration,
                        ease: "linear",
                        repeat: Infinity,
                        delay: animationStarted ? ring.delay : 0
                    },
                    style: {
                        width: sizes.isMobile ? '100vw' : '100%',
                        height: sizes.isMobile ? '100vw' : '100%'
                    },
                    children: ring.tracks.map((track, index)=>{
                        const angle = index / ring.tracks.length * 360;
                        const x = Math.cos((angle - 90) * (Math.PI / 180)) * ring.radius;
                        const y = Math.sin((angle - 90) * (Math.PI / 180)) * ring.radius;
                        const icon = TRACK_ICONS[track] || '';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                minWidth: sizes.isMobile ? 64 : 100,
                                maxWidth: sizes.isMobile ? 110 : 160
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                tabIndex: 0,
                                "aria-label": track,
                                className: "px-2 sm:px-4 py-1 sm:py-2 bg-background/20 backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105 hover:shadow-blue-400/60 transition-all duration-200 ring-glow",
                                style: {
                                    boxShadow: '0 0 12px 2px rgba(59,130,246,0.25), 0 0 24px 4px rgba(147,51,234,0.18)',
                                    fontSize: sizes.isMobile ? 'clamp(0.8rem, 3vw, 1.1rem)' : 'clamp(1rem, 1.5vw, 1.2rem)'
                                },
                                onClick: ()=>alert(`More info about ${track}`),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        alert(`More info about ${track}`);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-lg align-middle",
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/space-tracks-demo.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "align-middle",
                                        children: track
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/space-tracks-demo.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this)
                        }, track, false, {
                            fileName: "[project]/components/ui/space-tracks-demo.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this);
                    })
                }, ringIndex, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: sizes.trackRings.map((ring, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute border border-white/10 rounded-full ring-blur",
                        style: {
                            width: `${ring.radius * 2}px`,
                            height: `${ring.radius * 2}px`,
                            boxShadow: '0 0 32px 4px rgba(59,130,246,0.08)',
                            filter: 'blur(0.5px)'
                        }
                    }, index, false, {
                        fileName: "[project]/components/ui/space-tracks-demo.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/4 left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center",
                animate: {
                    y: [
                        -10,
                        10,
                        -10
                    ],
                    rotate: [
                        0,
                        180,
                        360
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-3/4 right-1/4 w-4 sm:w-6 h-4 sm:h-6 bg-purple-500/20 rounded-full flex items-center justify-center",
                animate: {
                    y: [
                        10,
                        -10,
                        10
                    ],
                    rotate: [
                        360,
                        180,
                        0
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 sm:w-2 h-1 sm:h-2 bg-purple-400 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-green-500/20 rounded-full flex items-center justify-center",
                animate: {
                    x: [
                        -5,
                        5,
                        -5
                    ],
                    y: [
                        -5,
                        5,
                        -5
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/space-tracks-demo.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function StarfieldBackground({ starCount = 100, className = "absolute inset-0" }) {
    const [stars, setStars] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [isClient, setIsClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setIsClient(true);
        setStars(Array.from({
            length: starCount
        }).map(()=>({
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2
            })));
    }, [
        starCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: isClient && stars.map((star, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full",
                style: {
                    left: `${star.left}%`,
                    top: `${star.top}%`
                },
                animate: {
                    opacity: [
                        0.2,
                        1,
                        0.2
                    ],
                    scale: [
                        0.5,
                        1,
                        0.5
                    ]
                },
                transition: {
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay
                }
            }, i, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/space-tracks-demo.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
function SpaceTracksDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[80vh] sm:min-h-screen w-full bg-black overflow-hidden relative px-2 sm:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarfieldBackground, {}, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-[60vh] sm:h-screen flex items-center justify-center p-2 sm:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrackRing, {}, void 0, false, {
                    fileName: "[project]/components/ui/space-tracks-demo.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/space-tracks-demo.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/space-tracks-demo.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = SpaceTracksDemo;
}}),
"[project]/components/ui/sponsors-section.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SponsorsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const sponsors = [
    {
        name: "Sponsor 1",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 2",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 3",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 4",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 5",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 6",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 7",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 8",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 9",
        logo: "/public/logo1.png"
    },
    {
        name: "Sponsor 10",
        logo: "/public/logo1.png"
    }
];
function SponsorsSection() {
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStars(Array.from({
            length: 120
        }).map(()=>({
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() > 0.98 ? 2 : 1,
                opacity: Math.random() * 0.7 + 0.2
            })));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-d35a78dd2cbf2a0b" + " " + "relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d35a78dd2cbf2a0b" + " " + "absolute inset-0 z-0 pointer-events-none",
                children: stars.map((star, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: star.size,
                            height: star.size,
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            opacity: star.opacity
                        },
                        className: "jsx-d35a78dd2cbf2a0b" + " " + "absolute rounded-full bg-white opacity-70"
                    }, i, false, {
                        fileName: "[project]/components/ui/sponsors-section.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui/sponsors-section.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: '"Press Start 2P", monospace'
                },
                className: "jsx-d35a78dd2cbf2a0b" + " " + "relative z-10 text-3xl md:text-5xl font-bold text-white mb-12 text-center",
                children: [
                    "Partners in building",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "jsx-d35a78dd2cbf2a0b"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sponsors-section.tsx",
                        lineNumber: 53,
                        columnNumber: 29
                    }, this),
                    "for better"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sponsors-section.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d35a78dd2cbf2a0b" + " " + "relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-6xl mb-12 px-2 md:px-0",
                children: sponsors.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minHeight: 96
                        },
                        className: "jsx-d35a78dd2cbf2a0b" + " " + "flex items-center justify-center bg-white rounded-2xl shadow-lg h-24 md:h-28 px-4 py-2 transition-transform hover:scale-105",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: s.logo,
                            alt: s.name,
                            style: {
                                maxWidth: "90%"
                            },
                            className: "jsx-d35a78dd2cbf2a0b" + " " + "max-h-12 md:max-h-16 object-contain mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/sponsors-section.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, s.name, false, {
                        fileName: "[project]/components/ui/sponsors-section.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui/sponsors-section.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    fontFamily: '"Press Start 2P", monospace',
                    boxShadow: '0 0 0 2px #fff, 0 0 16px #fff8'
                },
                className: "jsx-d35a78dd2cbf2a0b" + " " + "relative z-10 mt-2 px-8 py-3 border-2 border-white rounded-full text-white text-lg font-bold tracking-wider bg-black hover:bg-white hover:text-black transition-colors duration-200 shadow-lg",
                children: "• Sponsors"
            }, void 0, false, {
                fileName: "[project]/components/ui/sponsors-section.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d35a78dd2cbf2a0b",
                children: '@import "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sponsors-section.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/testimonials-section.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialsColumn": (()=>TestimonialsColumn),
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const testimonials = [
    {
        text: "Sunhacks was intense and immersive! The 36-hour challenge pushed our limits and helped us grow as a team. We walked in as students and walked out as real builders.",
        image: "data:image/png;base64,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",
        name: "Akshay Desale",
        role: "Developer"
    },
    {
        text: "I loved the inclusivity at Sunhacks. As someone from a non-coding background, I felt empowered to contribute through UI/UX. The mentors made it easy to stay confident and creative",
        image: "data:image/jpeg;base64,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",
        name: "Shakuntala Saund",
        role: "UI/UX Designer"
    },
    {
        text: "The hardware lab was a dream come true. From soldering kits to Raspberry Pis, we had it all. Sunhacks was the perfect blend of chaos, code, and caffeine.",
        image: "data:image/jpeg;base64,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",
        name: "Fizaan Mansuri",
        role: "Hardware Hacker"
    },
    {
        text: "I was nervous joining my first hackathon, but Sunhacks made me feel right at home. Friendly mentors, helpful volunteers, and the best midnight chai ever.",
        image: "data:image/jpeg;base64,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",
        name: "Kartik Patil",
        role: "First-time Hacker"
    },
    {
        text: "What stood out was the amazing networking. I met developers from different states, exchanged ideas, and even found a co-founder. Sunhacks wasn’t just a hackathon—it was a turning point.",
        image: "data:image/jpeg;base64,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",
        name: "Nikhil Patil",
        role: "Final Year Student"
    },
    {
        text: "Sunhacks gave us access to incredible APIs and cloud credits. We prototyped an AI tool in less than 24 hours. The technical support and workshops were top-notch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfkj3AaFBJBkJOANddXsL5BKh_aX8S0Hl_Q&s",
        name: "Anushka Deshmukh",
        role: "AI Enthusiast"
    },
    {
        text: "As a mentor, I was amazed by the energy and curiosity of the hackers. The organizing team did a fantastic job balancing creativity and structure.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1S3geHH6KDq3TSQbRxsBAFdVDnP5zdDR9g&s",
        name: "Dr Rohit Gupta",
        role: "Mentor"
    },
    {
        text: "My biggest takeaway was confidence. I pitched my idea for the first time, collaborated with strangers, and built something I was proud of. Can't wait for Season 2!",
        image: "data:image/jpeg;base64,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",
        name: "Prathamesh Tiwari",
        role: "CSE Fresher"
    },
    {
        text: "I've attended hackathons across India, but Sunhacks had a different vibe—retro aesthetics, fast-paced energy, and a strong sense of community. Definitely one to watch!",
        image: "data:image/jpeg;base64,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",
        name: "Vedant Lokhande ",
        role: " Developer & Blogger"
    }
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
function Testimonials() {
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStars(Array.from({
            length: 120
        }).map(()=>({
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() > 0.98 ? 2 : 1,
                opacity: Math.random() * 0.7 + 0.2
            })));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: stars.map((star, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full bg-white opacity-70",
                        style: {
                            width: star.size,
                            height: star.size,
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            opacity: star.opacity
                        }
                    }, i, false, {
                        fileName: "[project]/components/ui/testimonials-section.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui/testimonials-section.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container z-10 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        viewport: {
                            once: true
                        },
                        className: "flex flex-col items-center justify-center max-w-[540px] mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border py-1 px-4 rounded-lg text-white bg-black/60",
                                    children: "Testimonials"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/testimonials-section.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white",
                                children: "Voices of Sunhacks"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center mt-5 opacity-75 text-white",
                                children: "Commits, Collabs & Comments"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/testimonials-section.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-26 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsColumn, {
                                testimonials: firstColumn,
                                duration: 15
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsColumn, {
                                testimonials: secondColumn,
                                className: "hidden md:block",
                                duration: 19
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsColumn, {
                                testimonials: thirdColumn,
                                className: "hidden lg:block",
                                duration: 17
                            }, void 0, false, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/testimonials-section.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/testimonials-section.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/testimonials-section.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
const TestimonialsColumn = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: props.className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                translateY: "-50%"
            },
            transition: {
                duration: props.duration || 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
            },
            className: "flex flex-col gap-6 pb-6 bg-black",
            children: [
                ...new Array(2).fill(0).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: props.testimonials.map(({ text, image, name, role }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-black/80 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: text
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/testimonials-section.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                width: 40,
                                                height: 40,
                                                src: image,
                                                alt: name,
                                                className: "h-10 w-10 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium tracking-tight leading-5",
                                                        children: name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/testimonials-section.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "leading-5 opacity-60 tracking-tight",
                                                        children: role
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/testimonials-section.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/testimonials-section.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/ui/testimonials-section.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this))
                    }, index, false, {
                        fileName: "[project]/components/ui/testimonials-section.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, false, {
            fileName: "[project]/components/ui/testimonials-section.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/testimonials-section.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ui/fancy-preview-section.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FancyPreviewSection": (()=>FancyPreviewSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$parallax$2d$floating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/parallax-floating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$space$2d$tracks$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/space-tracks-demo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sponsors$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sponsors-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/testimonials-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const exampleImages = [
    {
        url: "https://images.unsplash.com/photo-1750323844540-5bb7c8f1a11a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aHRlY2h8ZW58MHx8MHx8fDA%3D",
        author: "Branislav Rodman",
        link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
        title: "Health Tech"
    },
    {
        url: "https://images.unsplash.com/photo-1563986768711-b3bde3dc8211?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmludGVjaHxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
        author: "Wesley Tingey",
        title: "Rippling Crystal Blue Water"
    },
    {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Fhc3xlbnwwfHwwfHx8MA%3D%3D",
        link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
        author: "Serhii Tyaglovsky",
        title: "Mann im schwarzen Hemd unter blauem Himmel"
    },
    {
        url: "https://images.unsplash.com/photo-1653850406499-b6e1353e323e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
        author: "Vladimir Yelizarov",
        title: "A women with a flower crown on her head"
    },
    {
        url: "https://media.istockphoto.com/id/2166014022/photo/laptop-with-genai-text-top-view-generative-ai-inscription-on-laptop-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=0zWMa3zWUI5xHm9p2BxltbueV_-hTAF7QeDi_FlY9h8=",
        title: "A blurry photo of white flowers in a field",
        author: "Eugene Golovesov",
        link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc"
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1678103472974-a6435884b194?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXlzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        author: "Mathilde Langevin",
        link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
        title: "A table topped with two wine glasses and plates"
    }
];
function FancyPreviewSection() {
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // Removed animate('img', ...) effect since there are no images to animate
    }, [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    ref: scope,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$space$2d$tracks$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ui/fancy-preview-section.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$parallax$2d$floating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            sensitivity: -1,
                            className: "overflow-hidden"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/fancy-preview-section.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/fancy-preview-section.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/fancy-preview-section.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sponsors$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/ui/fancy-preview-section.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/ui/fancy-preview-section.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/components/ui/music-reactive-hero-section.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Component": (()=>Component)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Component = ()=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const grainCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [audioProgress, setAudioProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Film grain generator class
    class FilmGrain {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.grainCanvas = document.createElement('canvas');
            this.grainCanvas.width = width;
            this.grainCanvas.height = height;
            this.grainCtx = this.grainCanvas.getContext('2d');
            this.grainData = null;
            this.frame = 0;
            this.generateGrainPattern();
        }
        generateGrainPattern() {
            const imageData = this.grainCtx.createImageData(this.width, this.height);
            const data = imageData.data;
            for(let i = 0; i < data.length; i += 4){
                const grain = Math.random();
                const value = grain * 255;
                data[i] = value; // R
                data[i + 1] = value; // G
                data[i + 2] = value; // B
                data[i + 3] = 255; // A
            }
            this.grainData = imageData;
        }
        update() {
            this.frame++;
            // Regenerate grain every few frames for animation
            if (this.frame % 2 === 0) {
                const data = this.grainData.data;
                for(let i = 0; i < data.length; i += 4){
                    // Create animated grain with varying intensity
                    const grain = Math.random();
                    const time = this.frame * 0.01;
                    const x = i / 4 % this.width;
                    const y = Math.floor(i / 4 / this.width);
                    // Add some structure to the grain for more realistic look
                    const pattern = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 - time);
                    const value = (grain * 0.8 + pattern * 0.2) * 255;
                    data[i] = value;
                    data[i + 1] = value;
                    data[i + 2] = value;
                }
                this.grainCtx.putImageData(this.grainData, 0, 0);
            }
        }
        apply(ctx, intensity = 0.05, colorize = true, hue = 0) {
            ctx.save();
            // Apply grain with screen blend mode for lighter areas
            ctx.globalCompositeOperation = 'screen';
            ctx.globalAlpha = intensity * 0.5;
            ctx.drawImage(this.grainCanvas, 0, 0);
            // Apply grain with multiply for darker areas
            ctx.globalCompositeOperation = 'multiply';
            ctx.globalAlpha = 1 - intensity * 0.3;
            ctx.drawImage(this.grainCanvas, 0, 0);
            // Add colored grain if specified
            if (colorize) {
                ctx.globalCompositeOperation = 'overlay';
                ctx.globalAlpha = intensity * 0.3;
                ctx.fillStyle = `hsla(${hue}, 50%, 50%, 1)`;
                ctx.fillRect(0, 0, this.width, this.height);
            }
            ctx.restore();
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
            this.grainCanvas.width = width;
            this.grainCanvas.height = height;
            this.generateGrainPattern();
        }
    }
    // Initialize audio
    const initAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!audioRef.current || audioContextRef.current) return;
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContextRef.current = audioContext;
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048;
            analyser.smoothingTimeConstant = 0.8;
            analyserRef.current = analyser;
            const source = audioContext.createMediaElementSource(audioRef.current);
            source.connect(analyser);
            analyser.connect(audioContext.destination);
        } catch (error) {
            console.error('Error initializing audio:', error);
        }
    }, []);
    // Initialize canvas and animation
    const initCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        // Set canvas size
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (beam.filmGrain) {
                beam.filmGrain.resize(canvas.width, canvas.height);
            }
        };
        // Initialize film grain
        const filmGrain = new FilmGrain(window.innerWidth, window.innerHeight);
        // Beam state with dynamic color system
        const beam = {
            bassIntensity: 0,
            midIntensity: 0,
            trebleIntensity: 0,
            time: 0,
            filmGrain: filmGrain,
            // Dynamic color state
            colorState: {
                hue: 30,
                targetHue: 30,
                saturation: 80,
                targetSaturation: 80,
                lightness: 50,
                targetLightness: 50
            },
            waves: [
                {
                    amplitude: 30,
                    frequency: 0.003,
                    speed: 0.02,
                    offset: 0,
                    thickness: 1,
                    opacity: 0.9
                },
                {
                    amplitude: 25,
                    frequency: 0.004,
                    speed: 0.015,
                    offset: Math.PI * 0.5,
                    thickness: 0.8,
                    opacity: 0.7
                },
                {
                    amplitude: 20,
                    frequency: 0.005,
                    speed: 0.025,
                    offset: Math.PI,
                    thickness: 0.6,
                    opacity: 0.5
                },
                {
                    amplitude: 35,
                    frequency: 0.002,
                    speed: 0.01,
                    offset: Math.PI * 1.5,
                    thickness: 1.2,
                    opacity: 0.6
                }
            ],
            particles: [],
            bassHistory: new Array(20).fill(0),
            postProcessing: {
                filmGrainIntensity: 0.04,
                vignetteIntensity: 0.4,
                chromaticAberration: 0.8,
                scanlineIntensity: 0.02
            }
        };
        beamRef.current = beam;
        resizeCanvas();
        const animate = ()=>{
            animationRef.current = requestAnimationFrame(animate);
            // Clear canvas with slight fade for motion blur
            ctx.fillStyle = 'rgba(0, 0, 0, 0.92)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Get audio data
            let bassAmplitude = 0;
            let midAmplitude = 0;
            let trebleAmplitude = 0;
            if (analyserRef.current && isPlaying) {
                const bufferLength = analyserRef.current.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                analyserRef.current.getByteFrequencyData(dataArray);
                // Calculate frequency ranges
                let bassSum = 0;
                for(let i = 0; i < 30; i++){
                    bassSum += dataArray[i];
                }
                bassAmplitude = bassSum / (30 * 255);
                let midSum = 0;
                for(let i = 30; i < 200; i++){
                    midSum += dataArray[i];
                }
                midAmplitude = midSum / (170 * 255);
                let trebleSum = 0;
                for(let i = 200; i < 800; i++){
                    trebleSum += dataArray[i];
                }
                trebleAmplitude = trebleSum / (600 * 255);
                beam.bassHistory.shift();
                beam.bassHistory.push(bassAmplitude);
                const avgBass = beam.bassHistory.reduce((a, b)=>a + b) / beam.bassHistory.length;
                beam.bassIntensity = avgBass;
                beam.midIntensity = midAmplitude;
                beam.trebleIntensity = trebleAmplitude;
                // Dynamic color mapping
                if (bassAmplitude > midAmplitude && bassAmplitude > trebleAmplitude) {
                    beam.colorState.targetHue = 0 + bassAmplitude * 30;
                    beam.colorState.targetSaturation = 80 + bassAmplitude * 20;
                    beam.colorState.targetLightness = 50 + bassAmplitude * 10;
                } else if (midAmplitude > trebleAmplitude) {
                    beam.colorState.targetHue = 40 + midAmplitude * 80;
                    beam.colorState.targetSaturation = 20 + midAmplitude * 30;
                    beam.colorState.targetLightness = 55 + midAmplitude * 15;
                } else {
                    beam.colorState.targetHue = 200 + trebleAmplitude * 80;
                    beam.colorState.targetSaturation = 20 + trebleAmplitude * 40;
                    beam.colorState.targetLightness = 60 + trebleAmplitude * 10;
                }
                // Adjust post-processing based on audio
                beam.postProcessing.filmGrainIntensity = 0.03 + bassAmplitude * 0.2;
                beam.postProcessing.chromaticAberration = trebleAmplitude * 0.5;
            } else {
                // Demo animation
                beam.bassIntensity = 0.4 + Math.sin(beam.time * 0.01) * 0.3;
                beam.midIntensity = 0.3 + Math.sin(beam.time * 0.015) * 0.2;
                beam.trebleIntensity = 0.2 + Math.sin(beam.time * 0.02) * 0.1;
                beam.colorState.targetHue = 180 + Math.sin(beam.time * 0.005) * 180;
                beam.colorState.targetSaturation = 70 + Math.sin(beam.time * 0.01) * 30;
                beam.colorState.targetLightness = 50 + Math.sin(beam.time * 0.008) * 20;
            }
            // Smooth color transitions
            beam.colorState.hue += (beam.colorState.targetHue - beam.colorState.hue) * 0.5;
            beam.colorState.saturation += (beam.colorState.targetSaturation - beam.colorState.saturation) * 0.2;
            beam.colorState.lightness += (beam.colorState.targetLightness - beam.colorState.lightness) * 0.1;
            // Update time
            beam.time++;
            const centerY = canvas.height / 2;
            // Draw waves (previous wave drawing code here)
            beam.waves.forEach((wave, waveIndex)=>{
                wave.offset += wave.speed * (1 + beam.bassIntensity * 0.8);
                const freqInfluence = waveIndex < 2 ? beam.bassIntensity : beam.midIntensity;
                const dynamicAmplitude = wave.amplitude * (1 + freqInfluence * 5);
                const waveHue = beam.colorState.hue + waveIndex * 15;
                const waveSaturation = beam.colorState.saturation - waveIndex * 5;
                const waveLightness = beam.colorState.lightness + waveIndex * 5;
                const gradient = ctx.createLinearGradient(0, centerY - dynamicAmplitude, 0, centerY + dynamicAmplitude);
                const alpha = wave.opacity * (0.5 + beam.bassIntensity * 0.5);
                gradient.addColorStop(0, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness}%, 0)`);
                gradient.addColorStop(0.5, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness + 10}%, ${alpha})`);
                gradient.addColorStop(1, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness}%, 0)`);
                ctx.beginPath();
                for(let x = -50; x <= canvas.width + 50; x += 2){
                    const y1 = Math.sin(x * wave.frequency + wave.offset) * dynamicAmplitude;
                    const y2 = Math.sin(x * wave.frequency * 2 + wave.offset * 1.5) * (dynamicAmplitude * 0.3 * beam.midIntensity);
                    const y3 = Math.sin(x * wave.frequency * 0.5 + wave.offset * 0.7) * (dynamicAmplitude * 0.5);
                    const y = centerY + y1 + y2 + y3;
                    if (x === -50) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.lineTo(canvas.width + 50, canvas.height);
                ctx.lineTo(-50, canvas.height);
                ctx.closePath();
                ctx.fillStyle = gradient;
                ctx.fill();
            });
            // Apply post-processing effects
            // 1. Film grain
            beam.filmGrain.update();
            beam.filmGrain.apply(ctx, beam.postProcessing.filmGrainIntensity, true, beam.colorState.hue);
            // 2. Scanlines
            ctx.strokeStyle = `rgba(0, 0, 0, ${beam.postProcessing.scanlineIntensity})`;
            ctx.lineWidth = 1;
            for(let y = 0; y < canvas.height; y += 3){
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            // 3. Chromatic aberration
            if (beam.postProcessing.chromaticAberration > 0.1) {
                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                ctx.globalAlpha = beam.postProcessing.chromaticAberration * 0.7;
                // Create temporary canvas for channel shifting
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                const tempCtx = tempCanvas.getContext('2d');
                // Copy current frame
                tempCtx.drawImage(canvas, 0, 0);
                // Red channel shift
                ctx.globalCompositeOperation = 'multiply';
                ctx.fillStyle = 'rgb(255, 0, 0)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'screen';
                ctx.drawImage(tempCanvas, -2 * beam.postProcessing.chromaticAberration, 0);
                // Blue channel shift
                ctx.globalCompositeOperation = 'multiply';
                ctx.fillStyle = 'rgb(0, 0, 255)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'screen';
                ctx.drawImage(tempCanvas, 2 * beam.postProcessing.chromaticAberration, 0);
                ctx.restore();
            }
            // 4. Vignette with film burn effect
            const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.width * 0.2, canvas.width / 2, canvas.height / 2, canvas.width * 0.9);
            vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
            vignette.addColorStop(0.5, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity * 0.3})`);
            vignette.addColorStop(0.8, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity * 0.6})`);
            vignette.addColorStop(1, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity})`);
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 5. Film damage/dust particles
            if (Math.random() < 0.02) {
                const dustCount = Math.floor(Math.random() * 5) + 1;
                for(let i = 0; i < dustCount; i++){
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const size = Math.random() * 2 + 0.5;
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            // 6. Film flicker effect
            const flicker = Math.sin(beam.time * 0.3) * 0.02 + Math.random() * 0.01;
            ctx.fillStyle = `rgba(255, 255, 255, ${flicker})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 7. Subtle color grading
            ctx.save();
            ctx.globalCompositeOperation = 'overlay';
            ctx.globalAlpha = 0.1;
            // Warm highlights, cool shadows
            const colorGradeGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            colorGradeGradient.addColorStop(0, 'rgb(255, 240, 220)');
            colorGradeGradient.addColorStop(0.5, 'rgb(255, 255, 255)');
            colorGradeGradient.addColorStop(1, 'rgb(220, 230, 255)');
            ctx.fillStyle = colorGradeGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
            // 8. Film scratches (occasional)
            if (Math.random() < 0.005) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
                ctx.lineWidth = Math.random() * 2 + 0.5;
                ctx.beginPath();
                const scratchX = Math.random() * canvas.width;
                ctx.moveTo(scratchX, 0);
                ctx.lineTo(scratchX + (Math.random() - 0.5) * 20, canvas.height);
                ctx.stroke();
            }
        };
        animate();
        // Handle resize
        window.addEventListener('resize', resizeCanvas);
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [
        isPlaying
    ]);
    // Toggle playback
    const togglePlayback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Demo mode - just toggle the animation state
        setIsPlaying(!isPlaying);
    }, [
        isPlaying
    ]);
    // Update progress
    const updateProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (audioRef.current && audioRef.current.duration) {
            const progress = audioRef.current.currentTime / audioRef.current.duration * 100;
            setAudioProgress(progress);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cleanup = initCanvas();
        return cleanup;
    }, [
        initCanvas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (audio) {
            const handleCanPlay = ()=>setIsLoading(false);
            const handleError = (e)=>{
                console.error('Audio error:', e);
                setIsLoading(false);
            };
            audio.addEventListener('canplay', handleCanPlay);
            audio.addEventListener('error', handleError);
            audio.addEventListener('timeupdate', updateProgress);
            return ()=>{
                audio.removeEventListener('canplay', handleCanPlay);
                audio.removeEventListener('error', handleError);
                audio.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, [
        updateProgress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "music-reactive-hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "visualization-canvas"
            }, void 0, false, {
                fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hwi-logo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/HWl2.svg",
                    alt: "Hack With India Logo",
                    className: "logo-image"
                }, void 0, false, {
                    fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line",
                            children: "SUNHACKS"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-tagline",
                        children: "A joint initiative with "
                    }, void 0, false, {
                        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line",
                            children: "Hack With India"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-subtitle",
                        children: "Where Innovation Begins – In collaboration with Hack with India."
                    }, void 0, false, {
                        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-credit",
                        children: "Innovate Today, Impact Tomorrow."
                    }, void 0, false, {
                        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "audio-progress",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar",
                    style: {
                        width: `${audioProgress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                    lineNumber: 519,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this),
            "]"
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/music-reactive-hero-section.tsx",
        lineNumber: 492,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ui/container-scroll-animation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "ContainerScroll": (()=>ContainerScroll),
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const ContainerScroll = ({ titleComponent, children })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef
    });
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>{
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    const scaleDimensions = ()=>{
        return isMobile ? [
            0.7,
            0.9
        ] : [
            1.05,
            1
        ];
    };
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        20,
        0
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], scaleDimensions());
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -100
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-10 md:py-40 w-full relative",
            style: {
                perspective: "1000px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                    translate: translate,
                    titleComponent: titleComponent
                }, void 0, false, {
                    fileName: "[project]/components/ui/container-scroll-animation.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    rotate: rotate,
                    translate: translate,
                    scale: scale,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/container-scroll-animation.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/container-scroll-animation.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/container-scroll-animation.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
const Header = ({ translate, titleComponent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            translateY: translate
        },
        className: "div max-w-5xl mx-auto text-center",
        children: titleComponent
    }, void 0, false, {
        fileName: "[project]/components/ui/container-scroll-animation.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
const Card = ({ rotate, scale, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            rotateX: rotate,
            scale,
            boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
        },
        className: "max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/container-scroll-animation.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/container-scroll-animation.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
};
}}),
"[project]/components/ui/hero-scroll-demo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroScrollDemo": (()=>HeroScrollDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$container$2d$scroll$2d$animation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/container-scroll-animation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$space$2d$tracks$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/space-tracks-demo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HeroScrollDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[80vh] sm:min-h-screen w-full bg-black overflow-hidden relative px-2 sm:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$space$2d$tracks$2d$demo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarfieldBackground"], {}, void 0, false, {
                fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$container$2d$scroll$2d$animation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContainerScroll"], {
                titleComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-semibold text-white dark:text-white",
                        children: [
                            "PRIZE POOL OF ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                                lineNumber: 15,
                                columnNumber: 29
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl md:text-[6rem] font-bold mt-1 leading-none",
                                children: "1,50,000+"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: `https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75`,
                    alt: "hero",
                    height: 720,
                    width: 1400,
                    className: "mx-auto rounded-2xl object-cover h-full object-left-top",
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/hero-scroll-demo.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/hero-scroll-demo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8ca210f9._.js.map