(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/store/useCooperativeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCooperativeStore",
    ()=>useCooperativeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
'use client';
;
const useCooperativeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activeCooperativeId: null,
        setActiveCooperativeId: (id)=>set({
                activeCooperativeId: id
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductsPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductsPopup({ cooperative, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPopup.useEffect": ()=>{
            const handleEscape = {
                "ProductsPopup.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["ProductsPopup.useEffect.handleEscape"];
            document.addEventListener('keydown', handleEscape);
            return ({
                "ProductsPopup.useEffect": ()=>document.removeEventListener('keydown', handleEscape)
            })["ProductsPopup.useEffect"];
        }
    }["ProductsPopup.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPopup.useEffect": ()=>{
            if (cooperative) {
                document.body.style.overflow = 'hidden';
            }
            return ({
                "ProductsPopup.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["ProductsPopup.useEffect"];
        }
    }["ProductsPopup.useEffect"], [
        cooperative
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: cooperative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: onClose,
            className: "fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                },
                onClick: (e)=>e.stopPropagation(),
                className: "relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/40 bg-white shadow-xl backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 border-b border-palmier/10 bg-gradient-to-r from-palmier/5 to-terracotta/5 px-5 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-palmier",
                                            children: cooperative.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductsPopup.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-sm text-palmier/70",
                                            children: [
                                                cooperative.zone,
                                                " • ",
                                                cooperative.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductsPopup.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductsPopup.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Fermer",
                                    className: "rounded-full p-1.5 text-palmier/70 transition hover:bg-palmier/10 hover:text-palmier",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductsPopup.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductsPopup.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductsPopup.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductsPopup.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-0 flex-1 overflow-y-auto p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: cooperative.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                    product: product
                                }, product.id, false, {
                                    fileName: "[project]/components/ProductsPopup.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ProductsPopup.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductsPopup.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductsPopup.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, cooperative.id, false, {
            fileName: "[project]/components/ProductsPopup.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductsPopup.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ProductsPopup, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = ProductsPopup;
function ProductCard({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/product/${product.id}`,
        className: "group flex gap-3 overflow-hidden rounded-xl border border-white/60 bg-white/80 p-2.5 transition hover:border-terracotta/30 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: product.images[0],
                    alt: product.alt,
                    fill: true,
                    sizes: "64px",
                    className: "object-cover transition group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/components/ProductsPopup.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductsPopup.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2 text-sm font-medium text-palmier group-hover:text-terracotta",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/ProductsPopup.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs font-semibold text-terracotta",
                        children: [
                            product.price,
                            " MAD"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductsPopup.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductsPopup.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductsPopup.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c1 = ProductCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductsPopup");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CooperativeList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CooperativeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useCooperativeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductsPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductsPopup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function CooperativeList({ cooperatives, className, compact = false }) {
    _s();
    const activeCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "CooperativeList.useCooperativeStore[activeCooperativeId]": (state)=>state.activeCooperativeId
    }["CooperativeList.useCooperativeStore[activeCooperativeId]"]);
    const setActiveCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "CooperativeList.useCooperativeStore[setActiveCooperativeId]": (state)=>state.setActiveCooperativeId
    }["CooperativeList.useCooperativeStore[setActiveCooperativeId]"]);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [productsCooperative, setProductsCooperative] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CooperativeList.useEffect": ()=>{
            if (!activeCooperativeId) return;
            const target = itemRefs.current[activeCooperativeId];
            if (!target) return;
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }["CooperativeList.useEffect"], [
        activeCooperativeId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `overflow-y-auto rounded-2xl border border-white/40 bg-white/70 p-2 shadow-lg backdrop-blur-md md:p-3 ${compact ? 'h-full' : 'h-[60vh] lg:h-[72vh]'} ${className ?? ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: cooperatives.map((cooperative, index)=>{
                        const isActive = cooperative.id === activeCooperativeId;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: (node)=>{
                                itemRefs.current[cooperative.id] = node;
                            },
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.3,
                                delay: index * 0.03
                            },
                            onClick: ()=>setActiveCooperativeId(cooperative.id),
                            className: `group flex cursor-pointer overflow-hidden rounded-lg border transition ${isActive ? 'border-terracotta/60 bg-terracotta/5 shadow-md ring-2 ring-terracotta/25' : 'border-white/40 bg-white/70 hover:border-palmier/25 hover:shadow-md'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square h-28 w-28 shrink-0 overflow-hidden sm:h-36 sm:w-36",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: cooperative.coverImage,
                                        alt: cooperative.coverAlt,
                                        fill: true,
                                        sizes: "(max-width: 640px) 112px, 144px",
                                        className: "object-cover object-center transition duration-400 group-hover:scale-105",
                                        unoptimized: cooperative.coverImage.startsWith('/')
                                    }, void 0, false, {
                                        fileName: "[project]/components/CooperativeList.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 flex-1 flex-col justify-center p-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-wider text-terracotta",
                                            children: [
                                                cooperative.zone,
                                                " • ",
                                                cooperative.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-0.5 line-clamp-1 text-sm font-semibold text-palmier",
                                            children: cooperative.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setProductsCooperative(cooperative);
                                                    },
                                                    className: "inline-flex items-center gap-1 rounded-md bg-palmier/15 px-2 py-1.5 text-[11px] font-medium text-palmier transition hover:bg-palmier/25",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CooperativeList.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Produits"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CooperativeList.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/cooperative/${cooperative.slug}`,
                                                    className: "inline-flex items-center gap-0.5 rounded-md bg-terracotta/15 px-2 py-1.5 text-[11px] font-medium text-terracotta transition hover:bg-terracotta/25",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: [
                                                        "Profil",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CooperativeList.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CooperativeList.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cooperative.id, true, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/CooperativeList.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CooperativeList.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductsPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cooperative: productsCooperative,
                onClose: ()=>setProductsCooperative(null)
            }, void 0, false, {
                fileName: "[project]/components/CooperativeList.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(CooperativeList, "yu7JBgb8CRzFucJ2NCwFdF1hmFA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"]
    ];
});
_c = CooperativeList;
var _c;
__turbopack_context__.k.register(_c, "CooperativeList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
const MapClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/MapClient.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/MapClient.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[60vh] items-center justify-center rounded-2xl border border-white/40 bg-white/70 text-palmier shadow-lg backdrop-blur-md",
            children: "Chargement de la carte..."
        }, void 0, false, {
            fileName: "[project]/components/Map.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapClient;
function Map({ cooperatives, className, hideSpotlight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapClient, {
        cooperatives: cooperatives,
        className: className,
        hideSpotlight: hideSpotlight
    }, void 0, false, {
        fileName: "[project]/components/Map.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c1 = Map;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapClient");
__turbopack_context__.k.register(_c1, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloatingSearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingSearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
'use client';
;
;
function FloatingSearchBar({ zones, categories, selectedZone, selectedCategory, onZoneChange, onCategoryChange, embedded = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border border-white/50 bg-white/95 px-3 py-2 shadow-md ${embedded ? 'static' : 'absolute left-3 right-3 top-3 z-[600] sm:left-4 sm:right-auto'} sm:px-4`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 text-sm font-medium text-palmier",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            size: 15,
                            className: "text-terracotta"
                        }, void 0, false, {
                            fileName: "[project]/components/FloatingSearchBar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        "Recherche rapide"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FloatingSearchBar.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "inline-flex items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                    size: 14,
                                    className: "text-terracotta"
                                }, void 0, false, {
                                    fileName: "[project]/components/FloatingSearchBar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedZone,
                                    onChange: (event)=>onZoneChange(event.target.value),
                                    className: "min-w-[130px] bg-transparent text-sm outline-none",
                                    children: zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: zone,
                                            children: zone
                                        }, zone, false, {
                                            fileName: "[project]/components/FloatingSearchBar.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/FloatingSearchBar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FloatingSearchBar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "inline-flex items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                    size: 14,
                                    className: "text-terracotta"
                                }, void 0, false, {
                                    fileName: "[project]/components/FloatingSearchBar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedCategory,
                                    onChange: (event)=>onCategoryChange(event.target.value),
                                    className: "min-w-[170px] bg-transparent text-sm outline-none",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: category,
                                            children: category
                                        }, category, false, {
                                            fileName: "[project]/components/FloatingSearchBar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/FloatingSearchBar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FloatingSearchBar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FloatingSearchBar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FloatingSearchBar.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FloatingSearchBar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = FloatingSearchBar;
var _c;
__turbopack_context__.k.register(_c, "FloatingSearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coopMatchesProductType",
    ()=>coopMatchesProductType,
    "cooperatives",
    ()=>cooperatives,
    "getProductTypeMeta",
    ()=>getProductTypeMeta,
    "getProductsByProductType",
    ()=>getProductsByProductType,
    "productTypes",
    ()=>productTypes
]);
// URLs Pexels pour galeries produits (images pertinentes)
const pexels = {
    dates: [
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    dates2: [
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pate: [
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    sirop: [
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    rose: [
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    huile: [
        'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    savon: [
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    brume: [
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pommes: [
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    jus: [
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    vinaigre: [
        'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    ceramique: [
        'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8540162/pexels-photo-8540162.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    miel: [
        'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    pollen: [
        'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    safran: [
        'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    tapis: [
        'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    henne: [
        'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    herbes: [
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Apiculture – ruches, reines, caisses apicoles (abeilles, miel, ruches – pas de photo hors-sujet)
    ruches: [
        'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Cire, cadres à cire gaufrée, honeycomb (pas de miel en pot)
    cire: [
        'https://images.pexels.com/photos/4111270/pexels-photo-4111270.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/2664320/pexels-photo-2664320.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Élevage ovin – moutons, agneaux, laine (lié au contenu Viande d’agneau / Laine brute)
    elevage_ovin: [
        'https://images.pexels.com/photos/37657/sheep-lambs-market-farm-37657.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/750/meadow-animals-sheep-wool.jpg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/880870/pexels-photo-880870.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Volaille – poulet, œufs (lié à Elevage Poulet)
    volaille: [
        'https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/55834/chicks-spring-chicken-plumage-55834.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/6897497/pexels-photo-6897497.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Couscous, céréales
    couscous: [
        'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    // Séchage fruits
    sechage_fruits: [
        'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=900',
        'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900'
    ]
};
const baseCooperatives = [];
// Données issues de Classeur3_converted.csv (coordonnées WGS84 Longitude/Latitude)
const rawCsvData = `
Nom de la coopérative,Cercle,Commune,Douar,Axe de dévelopement,Spécialité,X (Coop),Y (Coop),Longitude,Latitude
TLAYLA,AKNOUL,BOURED,IHARASSEN,Apiculture,Elevage des Reines,616874.0,457686.0,-4.122434984019207,34.712886184140345
TETAOUIN,AKNOUL,AJDIR,AJDIR,Valorisation des produits locaux,valorisation des Plantes aromatiques et médicinales PAM,630347.0,461214.0,-3.9748378390437975,34.74311475565851
MERZOUG,AKNOUL,AJDIR,AJDIR,Valorisation des produits locaux,valorisation des Plantes aromatiques et médicinales PAM,630527.0,460938.0,-3.9729134902651837,34.74060476644399
AGHNAM OULED HEDDOU,AKNOUL,JBARNA,OULED HEDOU,Elevage Ovin,Elevage Ovin,642440.0,433081.0,-3.847357737237632,34.487957011923974
ASSIF BOUHDOUD,AKNOUL,GEZNAYA ALJANOUBIA,BOUHDOUD,Elevage Ovin,Elevage Ovin,630270.0,461251.0,-3.9756731502559335,34.743457743374776
TIMCHATOUIT,AKNOUL,AJDIR,TIZI BOUDRISS,Elevage Ovin,Elevage Ovin,626214.0,464778.0,-4.019454816324051,34.77574060778839
RIF AJDIR,AKNOUL,BOURED,TAMJOUNT,Elevage Ovin,Elevage Ovin,630553.0,459736.0,-3.9728090991087552,34.72976690523996
AGHZAR AMAKRANE,AKNOUL,AJDIR,IHARCHRIYENE 2,Elevage Ovin,Elevage Ovin,631257.0,459979.0,-3.965086264215714,34.7318702502619
AGHNAM BOURED,AKNOUL,AJDIR,IHARCHRIYENE 1,Elevage Ovin,Elevage Ovin,624418.0,467232.0,-4.038724685602619,34.79807275392771
SOUK LAKDIM,AKNOUL,BOURED,OUAD LEKHMISS,Elevage Ovin,Elevage Ovin,630772.0,462484.0,-3.970006869547485,34.75450984933372
ALAKHAWAYN IKAROUAAN,AKNOUL,AJDIR,IKAROUANAE,Elevage Ovin,Elevage Ovin,636484.0,463194.0,-3.907514266314128,34.7601885865965
IAAROUJEN TAGHILASTE,AKNOUL,AJDIR,TAGHILASTE,Elevage Ovin,Elevage Ovin,648850.0,465489.0,-3.772065777286097,34.77920800950719
NISSAE MASSIF,TAINASTE,MSILA,MASSIF,Elevage Poulet,Elevage Poulet,636484.0,463194.0,-3.907514266314128,34.7601885865965
KHABABA LIDAWAJINE,AKNOUL,Sidi Ali Bourakba,Khbaba,Elevage Poulet,Elevage Poulet,648850.0,465489.0,-3.772065777286097,34.77920800950719
IAAISSATENE,AKNOUL,BOURED,IAAISATEN,Elevage Poulet,Elevage Poulet,605631.0,425808.0,-4.249005834646996,34.426687233546744
BAYT NAHLATE GEZNAYA,AKNOUL,AJDIR,TIZI BOUDRISS,Apiculture,Caisses apicoles,655340.0,470415.0,-3.7002927001193875,34.822674264073534
NAHL TAINASTE,TAINASTE,TRAYBA,SIDI AISSA,Apiculture,Caisses apicoles,619325.0,459638.0,-4.095413091262156,34.73020832175684
CHAMAA AJDIR,AKNOUL,AJDIR,AJDIR,Apiculture,CIRE Apicoles,630538.0,461768.0,-3.972669405137001,34.74808486999467
NISSAE BOUYSSLI,AKNOUL,AJDIR,GEZNAYA ALJANOUBIA,Valorisation des produits locaux,Couscous,624591.0,424241.0,-4.042943499833455,34.410505516174865
NISSAE AL GOUZAT,TAINASTE,EL GOUZAT,,Valorisation des produits locaux,PAM+Couscous,630334.0,461361.0,-3.9749578750040215,34.74444138642414
NISSAE LOKTA,TAINASTE,EL GOUZAT,LOUKTA,Valorisation des produits locaux,PAM+Couscous,639594.0,456208.0,-3.874662695537152,34.69681286138208
KENZA ALOURABIA,TAINASTE,EL GOUZAT,NKHAKHSA,Valorisation des produits locaux,PAM+Couscous,618338.0,434401.0,-4.10959697010049,34.502816906517644
TAINASTE AL KHAIR,TAINASTE,TAINASTE,EZZERK,Valorisation des produits locaux,PAM+Couscous,602675.0,432187.0,-4.280423203412928,34.48448754830177
NISSAE MSSILA,TAINASTE,HED MSSILA,HED MSSILA,Valorisation des produits locaux,PAM+Couscous,612425.0,425938.0,-4.175069661365551,34.42716195324209
KHAYRAT BOURED,AKNOUL,BOURED,BOURED,Valorisation des produits locaux,Séchage Fruits,619916.0,459417.0,-4.0889906678065175,34.72814945589474
TAGHZA,AKNOUL,AJDIR,AJDIR,Apiculture,Elevage des Reines,630288.0,461501.0,-3.9754393233811847,34.745708980753776
TANSSAFIN,AKNOUL,AJDIR,AJDIR,Apiculture,Elevage des Reines,630815.0,461252.0,-3.969721679583028,34.7433995625577
ELBARANESS,TAINASTE,El Gouzate,El Gouzate,Apiculture,Elevage des Reines,618340.0,434336.0,-4.109583943972023,34.502230695491754
KRAKRA,TAINASTE,Msila,Msila,Apiculture,Elevage des Reines,611866.0,426148.0,-4.18112500002904,34.42911424676457
NISSAE BAB EMROUJ,Tainaste,Bab Emrouj,,Patissereie,Gateaux Marocaine,624504.0,424838.0,-4.043805477397821,34.415897993557905
HALAWYAT AJDIR,AKNOUL,AJDIR,Ajdir,Patissereie,Gateaux Marocaine,630270.0,461251.0,-3.9756731502559335,34.743457743374776
NIAAMAT ELARD,AKNOUL,Boured,IHARCHRIYEN,Valorisation des produits locaux,Valorisation des produits locaux,628206.0,463275.0,-3.9979148413216126,34.761953591343556
AKNOUL Alfilahya,AKNOUL,GEZNAYA ALJANOUBIA,GEZNAYA ALJANOUBIA,Valorisation des produits locaux,Production d'emballage,637397.0,457582.0,-3.898424615500401,34.70948522312451
AJDIR KANDI,AKNOUL,AJDIR,AJDIR,Apiculture,candi apicole,630270.0,461251.0,-3.9756731502559335,34.743457743374776
MANHAL LAARAISS,Tainaste,Tainaste,,Apiculture,Apiculture miel,621265.0,426059.0,-4.078873238723781,34.42728056200002
AIN MSILKLA,Tainaste,Traiba,,Apiculture,Apiculture miel,627043.0,426526.0,-4.015941255765199,34.4308155769642
AIN BOUDAWED,Tainaste,Taifa,,Apiculture,Apiculture miel,626062.0,413070.0,-4.028539194810275,34.30961693552703
MERJ ERROUMI,Tainaste,Tainaste,,Apiculture,Apiculture miel,620621.0,444205.0,-4.083388985043034,34.590942586475435
ALJALLA,Tainaste,Tainaste,,Apiculture,Apiculture miel,611694.0,443674.0,-4.180768404353771,34.587133553811704
AMAL SIOUANE,Aknoul,Jbarna,,Apiculture,Apiculture miel,645940.0,444135.0,-3.807415331651403,34.587129946629766
TAFRASS OUAKHZANE,Aknoul,Sidi Ali Bourakba,,Apiculture,Apiculture miel,651838.0,477513.0,-3.737331832381084,34.88715605861651
BOUZBAYAR,Aknoul,Tizi Ousli,,Apiculture,Apiculture miel,651087.0,461499.0,-3.7483186136476982,34.74292750440669
OULAD ALI BEN AISSA,Aknoul,Tizi Ousli,,Apiculture,Apiculture miel,641035.0,470707.0,-3.856595437087491,34.82730971040973
AIT SAOUD,Aknoul,Tizi Ousli,,Apiculture,Apiculture miel,673390.0,467775.0,-3.5035462471248096,34.79607670195598
DOUAYER,Aknoul,Sidi Ali Bourakba,,Apiculture,Apiculture miel,643288.0,471707.0,-3.831805233362063,34.83602010225462
MARO,Aknoul,geznaya al janoubiya,,Apiculture,Apiculture miel,640309.0,451662.0,-3.867587945188214,34.655740570913345
BOUHAYRATE MASAOUDA,Aknoul,geznaya al janoubiya,,Apiculture,Apiculture miel,640423.0,447225.0,-3.8670554148438616,34.615729231287595
AYAR OUAINAS,Aknoul,Ajdir,,Apiculture,Apiculture miel,626831.0,460935.0,-4.013272601816164,34.7410269051543
EL OOSFORA,Aknoul,Sidi Ali Bourakba,,Apiculture,Apiculture miel,651508.0,477492.0,-3.7409449405949964,34.8870141315113
BARAKA APICOLE,Aknoul,geznaya al janoubiya,,Apiculture,Apiculture miel,640118.0,445224.0,-3.870700753195449,34.59773174961762
MARJ ALAIN,Aknoul,Ajdir,,Apiculture,Apiculture miel,636873.0,466065.0,-3.902815750104793,34.78601630687641
IZOUTHAN,Aknoul,Ajdir,,Apiculture,Apiculture miel,629393.0,469526.0,-3.984023697621,34.8181529783986
AJYO,Aknoul,Ajdir,,Apiculture,Apiculture miel,638614.0,467271.0,-3.883603636309654,34.79665992824008
`.trim();
function parseCsvData(source) {
    const lines = source.split('\n').map((line)=>line.trim());
    const [, ...rows] = lines;
    return rows.filter((line)=>line.length > 0).map((line)=>{
        const parts = line.split(',').map((p)=>p.trim());
        const [name, cercle, commune, douar, axis, specialty, xStr, yStr, lngStr, latStr] = parts;
        return {
            name: name ?? '',
            cercle: cercle ?? '',
            commune: commune ?? '',
            douar: douar ?? '',
            developmentAxis: axis ?? '',
            specialty: specialty ?? '',
            x: xStr ? Number(xStr) : undefined,
            y: yStr ? Number(yStr) : undefined,
            longitude: lngStr ? Number(lngStr) : undefined,
            latitude: latStr ? Number(latStr) : undefined
        };
    });
}
function slugify(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}
function buildAddress(row) {
    const parts = [];
    if (row.douar) parts.push(row.douar);
    if (row.commune) parts.push(row.commune);
    if (row.cercle) parts.push(`Cercle ${row.cercle}`);
    return parts.join(', ');
}
function mapAxisToCategory(axis, specialty) {
    const axisLower = axis.toLowerCase();
    const specialtyLower = specialty.toLowerCase();
    if (axisLower.includes('elevage') || specialtyLower.includes('elevage')) {
        return 'Agriculture';
    }
    if (axisLower.includes('apiculture') || specialtyLower.includes('apiculture')) {
        return 'Terroir';
    }
    if (axisLower.includes('valorisation des produits locaux') || specialtyLower.includes('patis') || specialtyLower.includes('gateaux')) {
        return 'Terroir';
    }
    return 'Terroir';
}
/** Chemin de base pour les images de coopératives (fichiers dans public/images/images/, servis sous /images/images/) */ const COOPERATIVE_IMAGES_BASE = '/images/images';
/**
 * Mapping (axe|spécialité) normalisé en minuscules → nom exact du fichier dans public/images/.
 * Correspond aux images réellement présentes dans le dossier.
 */ const LOCAL_COVER_IMAGES = {
    'apiculture|caisses apicoles': 'Apiculture - Caisses Apicoles.png',
    'apiculture|apiculture': 'Apiculture.png',
    'elevage ovin|elevage ovin': 'Elevage Ovin - Elevage Ovin.png',
    'elevage poulet|elevage poulet': 'Elevage Poulet - Elevage Poulet.png',
    'patissereie|gateaux marocaine': "Patisserie - Gâteaux Marocains.png",
    'valorisation des produits locaux|couscous': 'Valorisation des produits locaux - Couscous.png',
    "valorisation des produits locaux|production d'emballage": "Valorisation des produits locaux - Production d'Emballage.png",
    'valorisation des produits locaux|valorisation des produits locaux': 'Valorisation des produits locaux.png',
    'valorisation des produits locaux|valorisation des plantes aromatiques et médicinales pam': 'Valorisation des produits locaux.png',
    'valorisation des produits locaux|pam+couscous': 'Valorisation des produits locaux.png'
};
function normalizeKeyPart(text) {
    return (text ?? '').trim().toLowerCase();
}
/**
 * Retourne le chemin de l'image de couverture locale pour une coopérative CSV.
 * Utilise les noms exacts des fichiers présents dans public/images/ (voir LOCAL_COVER_IMAGES).
 * Sinon construit "Axe - Spécialité.png" en casse titre, puis fallback imageKey.jpg.
 */ function getLocalCoverImagePathFromAxisSpecialty(axis, specialty, imageKey) {
    const a = (axis ?? '').trim();
    const s = (specialty ?? '').trim();
    const keyNorm = `${normalizeKeyPart(a)}|${normalizeKeyPart(s)}`;
    // 1) Correspondance exacte (axe|spécialité)
    const exact = LOCAL_COVER_IMAGES[keyNorm];
    if (exact) {
        return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent(exact)}`;
    }
    // 2) Image "axe seul" (ex. Apiculture.png, Valorisation des produits locaux.png)
    if (a && !s) {
        if (normalizeKeyPart(a) === 'apiculture') {
            return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Apiculture.png')}`;
        }
        if (normalizeKeyPart(a) === 'valorisation des produits locaux') {
            return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Valorisation des produits locaux.png')}`;
        }
    }
    // 3) Construire "Axe - Spécialité.png" (casse titre) si ce nom existe dans la liste
    if (a && s) {
        const titleA = a.split(/\s+/).map((w)=>w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        const titleS = s.split(/\s+/).map((w)=>w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        const built = `${titleA} - ${titleS}.png`;
        if (Object.values(LOCAL_COVER_IMAGES).includes(built)) {
            return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent(built)}`;
        }
    }
    // 4) Fallback par axe : image "axe seul" si disponible (ex. Apiculture miel → Apiculture.png)
    const axisNorm = normalizeKeyPart(a);
    if (axisNorm === 'apiculture') {
        return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Apiculture.png')}`;
    }
    if (axisNorm === 'valorisation des produits locaux') {
        return `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Valorisation des produits locaux.png')}`;
    }
    return `${COOPERATIVE_IMAGES_BASE}/${imageKey}.jpg`;
}
/** Images liées à l'axe et à la spécialité (Apiculture+Elevage des Reines → ruches, etc.) */ function pickImageSetKey(axis, specialty) {
    const axisLower = axis.toLowerCase();
    const specialtyLower = specialty.toLowerCase();
    // Apiculture – par spécialité
    if (axisLower.includes('apiculture')) {
        if (specialtyLower.includes('elevage des reines') || specialtyLower.includes('reines')) return 'ruches';
        if (specialtyLower.includes('caisses apicoles')) return 'ruches';
        if (specialtyLower.includes('cire apicole') || specialtyLower.includes('cire')) return 'cire';
        if (specialtyLower.includes('candi apicole') || specialtyLower.includes('candi')) return 'cire';
        if (specialtyLower.includes('miel') || specialtyLower.includes('apiculture miel')) return 'miel';
        return 'miel';
    }
    // Élevage – Poulet avant Ovin pour éviter de matcher "elevage" seul
    if (axisLower.includes('poulet') || specialtyLower.includes('poulet')) return 'volaille';
    if (axisLower.includes('elevage ovin') || specialtyLower.includes('elevage ovin')) return 'elevage_ovin';
    if (axisLower.includes('elevage')) return 'elevage_ovin';
    // Valorisation / PAM / Couscous
    if (specialtyLower.includes('couscous') && !specialtyLower.includes('pam')) return 'couscous';
    if (specialtyLower.includes('pam') || specialtyLower.includes('plantes aromatiques')) return 'herbes';
    if (specialtyLower.includes('séchage fruits') || specialtyLower.includes('sechage')) return 'sechage_fruits';
    if (axisLower.includes('valorisation des produits locaux')) return 'herbes';
    // Pâtisserie
    if (specialtyLower.includes('gateaux') || specialtyLower.includes('patis')) return 'pate';
    // Emballage
    if (specialtyLower.includes('emballage')) return 'ceramique';
    return 'herbes';
}
function estimatePrice(axis, specialty) {
    const axisLower = axis.toLowerCase();
    const specialtyLower = specialty.toLowerCase();
    if (specialtyLower.includes('miel') || axisLower.includes('apiculture')) return 90;
    if (specialtyLower.includes('couscous')) return 60;
    if (specialtyLower.includes('gateaux') || specialtyLower.includes('patis')) return 45;
    if (axisLower.includes('elevage')) return 120;
    return 70;
}
/** Produits par spécialité : images et textes liés à l’axe / spécialité (ex. Apiculture + Elevage des Reines). */ function getProductTemplatesForSpecialty(axis, specialty) {
    const a = axis.toLowerCase();
    const s = specialty.toLowerCase();
    const generic = [
        {
            name: specialty || axis || 'Produit local',
            imageKey: pickImageSetKey(axis, specialty),
            price: estimatePrice(axis, specialty),
            shortDesc: 'Produit de la coopérative.',
            longDesc: 'Produit issu de l’axe ' + axis + ' et de la spécialité ' + (specialty || '—') + '.'
        }
    ];
    if (a.includes('apiculture') && (s.includes('elevage des reines') || s.includes('reines'))) {
        return [
            {
                name: 'Reines d’abeilles',
                imageKey: 'ruches',
                price: 85,
                shortDesc: 'Reines sélectionnées pour l’élevage.',
                longDesc: 'Reines d’abeilles issues de l’élevage local, destinées au renouvellement des ruches et à l’apiculture.'
            },
            {
                name: 'Cage à reines',
                imageKey: 'ruches',
                price: 12,
                shortDesc: 'Cage de transport et introduction.',
                longDesc: 'Cage apicole pour le transport et l’introduction des reines en ruche.'
            },
            {
                name: 'Nourriture pour reines',
                imageKey: 'cire',
                price: 35,
                shortDesc: 'Gelée et candi pour l’élevage.',
                longDesc: 'Nourriture spéciale pour l’élevage des reines et le renforcement des colonies.'
            }
        ];
    }
    if (a.includes('apiculture') && (s.includes('caisses apicoles') || s.includes('caisses'))) {
        return [
            {
                name: 'Caisse apicole 10 cadres',
                imageKey: 'ruches',
                price: 180,
                shortDesc: 'Ruche en bois locale.',
                longDesc: 'Caisse apicole traditionnelle en bois, 10 cadres, pour l’apiculture de production.'
            },
            {
                name: 'Cadres à cire gaufrée',
                imageKey: 'cire',
                price: 25,
                shortDesc: 'Lot de 10 cadres.',
                longDesc: 'Cadres avec cire gaufrée pour équiper les ruches.'
            }
        ];
    }
    if (a.includes('apiculture') && (s.includes('cire') || s.includes('cire apicole'))) {
        return [
            {
                name: 'Cire d’abeille brute 500 g',
                imageKey: 'cire',
                price: 45,
                shortDesc: 'Cire naturelle des ruches.',
                longDesc: 'Cire d’abeille brute récoltée dans les ruches, pour bougies ou cosmétique.'
            },
            {
                name: 'Bougies en cire naturelle',
                imageKey: 'cire',
                price: 28,
                shortDesc: 'Bougies artisanales.',
                longDesc: 'Bougies fabriquées à la main à partir de cire d’abeille locale.'
            }
        ];
    }
    if (a.includes('apiculture') && s.includes('candi')) {
        return [
            {
                name: 'Candi apicole 1 kg',
                imageKey: 'cire',
                price: 42,
                shortDesc: 'Nourriture d’hiver pour abeilles.',
                longDesc: 'Candi apicole pour nourrir les colonies en période hivernale.'
            },
            {
                name: 'Miel toutes fleurs 500 g',
                imageKey: 'miel',
                price: 75,
                shortDesc: 'Miel de la coopérative.',
                longDesc: 'Miel récolté et mis en pot par les apiculteurs de la coopérative.'
            }
        ];
    }
    if (a.includes('apiculture') && s.includes('miel')) {
        return [
            {
                name: 'Miel toutes fleurs 500 g',
                imageKey: 'miel',
                price: 88,
                shortDesc: 'Miel récolté localement.',
                longDesc: 'Miel de la coopérative, récolté et conditionné sur place.'
            },
            {
                name: 'Miel 1 kg',
                imageKey: 'miel',
                price: 165,
                shortDesc: 'Format familial.',
                longDesc: 'Miel en pot d’1 kg, idéal pour les familles.'
            },
            {
                name: "Pollen d'abeille 250 g",
                imageKey: 'pollen',
                price: 55,
                shortDesc: 'Pollen séché.',
                longDesc: "Pollen d'abeille récolté à la ruche, riche en nutriments."
            }
        ];
    }
    if (a.includes('elevage') && s.includes('ovin')) {
        return [
            {
                name: 'Viande d’agneau (coupe au kg)',
                imageKey: 'elevage_ovin',
                price: 95,
                shortDesc: 'Viande locale.',
                longDesc: 'Viande d’agneau issue de l’élevage ovin traditionnel de la coopérative.'
            },
            {
                name: 'Laine brute lavée',
                imageKey: 'elevage_ovin',
                price: 35,
                shortDesc: 'Laine de mouton.',
                longDesc: 'Laine brute lavée, prête pour le tissage ou la vente.'
            }
        ];
    }
    if (a.includes('elevage') && s.includes('poulet')) {
        return [
            {
                name: 'Poulet fermier (pièce)',
                imageKey: 'volaille',
                price: 65,
                shortDesc: 'Élevage local.',
                longDesc: 'Poulet fermier élevé par la coopérative.'
            },
            {
                name: 'Œufs frais (lot 30)',
                imageKey: 'volaille',
                price: 28,
                shortDesc: 'Œufs du jour.',
                longDesc: 'Œufs frais issus de l’élevage poulet de la coopérative.'
            }
        ];
    }
    if (s.includes('couscous') || s.includes('pam+couscous')) {
        return [
            {
                name: 'Couscous traditionnel 1 kg',
                imageKey: 'couscous',
                price: 52,
                shortDesc: 'Semoule travaillée à la main.',
                longDesc: 'Couscous préparé selon les méthodes traditionnelles, à base de blé local.'
            },
            {
                name: 'Mélange PAM pour couscous 200 g',
                imageKey: 'herbes',
                price: 22,
                shortDesc: 'Plantes aromatiques et médicinales.',
                longDesc: 'Mélange de plantes aromatiques et médicinales pour parfumer le couscous.'
            }
        ];
    }
    if (s.includes('gateaux') || s.includes('patis')) {
        return [
            {
                name: 'Assortiment de gâteaux marocains',
                imageKey: 'pate',
                price: 48,
                shortDesc: 'Sachet 500 g.',
                longDesc: 'Gâteaux marocains traditionnels préparés par la coopérative.'
            },
            {
                name: 'Ghriba aux amandes',
                imageKey: 'pate',
                price: 38,
                shortDesc: 'Biscuit aux amandes.',
                longDesc: 'Ghriba maison aux amandes, recette traditionnelle.'
            }
        ];
    }
    if (s.includes('séchage') || s.includes('sechage')) {
        return [
            {
                name: 'Fruits secs mélangés 500 g',
                imageKey: 'sechage_fruits',
                price: 55,
                shortDesc: 'Abricot, figue, prune.',
                longDesc: 'Fruits séchés au soleil selon les méthodes traditionnelles.'
            },
            {
                name: 'Figues séchées 300 g',
                imageKey: 'sechage_fruits',
                price: 42,
                shortDesc: 'Figues nature.',
                longDesc: 'Figues séchées nature, sans additif.'
            }
        ];
    }
    if (s.includes('valorisation des produits locaux') || a.includes('valorisation') && !s) {
        return [
            {
                name: 'Panier découverte terroir',
                imageKey: 'herbes',
                price: 65,
                shortDesc: 'Sélection de produits locaux.',
                longDesc: 'Assortiment de produits valorisés par la coopérative.'
            },
            {
                name: 'Tisane aux plantes aromatiques 100 g',
                imageKey: 'herbes',
                price: 28,
                shortDesc: 'Mélange de plantes locales.',
                longDesc: 'Tisane à base de plantes aromatiques et médicinales du terroir.'
            }
        ];
    }
    if (s.includes('emballage') || s.includes('production d\'emballage')) {
        return [
            {
                name: 'Emballages artisanaux (lot)',
                imageKey: 'ceramique',
                price: 35,
                shortDesc: 'Emballages durables.',
                longDesc: 'Emballages produits par la coopérative pour les produits locaux.'
            }
        ];
    }
    return generic;
}
/** Rotation du tableau d'images pour que chaque produit ait une image principale différente (images[0] varie). */ function rotateImageSet(arr, offset) {
    if (arr.length === 0) return arr;
    const n = offset % arr.length;
    return [
        ...arr.slice(n),
        ...arr.slice(0, n)
    ];
}
function createProductsForCsvCoop(coopId, row) {
    const address = buildAddress(row);
    const templates = getProductTemplatesForSpecialty(row.developmentAxis, row.specialty);
    // Utiliser la même image de couverture que la coopérative pour tous les produits
    const imageKey = pickImageSetKey(row.developmentAxis, row.specialty);
    const cooperativeCoverImage = getLocalCoverImagePathFromAxisSpecialty(row.developmentAxis, row.specialty, imageKey);
    const productImages = [
        cooperativeCoverImage,
        cooperativeCoverImage,
        cooperativeCoverImage
    ];
    return templates.map((t, i)=>{
        const name = t.name;
        const longDesc = t.longDesc.replace(/{name}/g, row.name).replace(/{address}/g, address).replace(/{specialty}/g, row.specialty || row.developmentAxis);
        return {
            id: `p-${coopId}-${i + 1}`,
            name,
            price: t.price,
            images: productImages,
            alt: name,
            shortDescription: t.shortDesc + ` Coopérative ${row.name}.`,
            longDescription: longDesc,
            cooperativeId: coopId
        };
    });
}
/** Génère le texte "Notre histoire" à partir des champs Excel (Cercle, Commune, Douar, Axe, Spécialité). */ function generateNotreHistoire(row) {
    const zone = (row.cercle?.trim() || '').toUpperCase();
    const addr = buildAddress(row);
    const axis = row.developmentAxis || 'activité locale';
    const spec = row.specialty || axis;
    return `La coopérative ${row.name.trim()} a été créée dans le douar ${row.douar || '—'}, commune de ${row.commune || '—'}, dans le cercle de ${zone || '—'}. ` + `Spécialisée dans l’axe « ${axis} » et plus précisément dans « ${spec} », elle regroupe des producteurs et productrices locaux pour valoriser les savoir-faire et les ressources du territoire. ` + `Située à ${addr}, elle propose des produits issus de ${spec} et contribue au développement économique de la région. ` + `Aujourd’hui, ${row.name.trim()} met en avant la qualité et la traçabilité de ses productions.`;
}
function createCooperativesFromCsv(rows) {
    return rows.map((row, index)=>{
        const id = `csv-${index + 1}`;
        // Cercle = zone (AKNOUL / TAINASTE), normalisé en majuscules pour cohérence
        const zone = (row.cercle?.trim() || 'Autre').toUpperCase();
        const address = buildAddress(row);
        const category = mapAxisToCategory(row.developmentAxis, row.specialty);
        const imageKey = pickImageSetKey(row.developmentAxis, row.specialty);
        // Varier l’image de couverture par coop pour éviter que toutes les coops (ex. Elevage Ovin) aient la même photo
        const hasCoords = row.latitude != null && row.longitude != null && Number.isFinite(row.latitude) && Number.isFinite(row.longitude);
        return {
            id,
            name: row.name.trim(),
            slug: slugify(row.name),
            category,
            zone,
            location: {
                lat: hasCoords ? row.latitude : Number.NaN,
                lng: hasCoords ? row.longitude : Number.NaN,
                address
            },
            descriptionShort: `${row.specialty || row.developmentAxis} à ${row.commune || zone}.`,
            descriptionLong: generateNotreHistoire(row),
            coverImage: getLocalCoverImagePathFromAxisSpecialty(row.developmentAxis, row.specialty, imageKey),
            coverAlt: row.specialty || row.developmentAxis,
            products: createProductsForCsvCoop(id, row),
            circle: row.cercle,
            commune: row.commune,
            douar: row.douar,
            developmentAxis: row.developmentAxis,
            specialty: row.specialty,
            x: row.x,
            y: row.y
        };
    });
}
const csvRows = parseCsvData(rawCsvData);
const csvCooperatives = createCooperativesFromCsv(csvRows);
const cooperatives = [
    ...baseCooperatives,
    ...csvCooperatives
];
function coopMatchesProductType(coop, typeSlug) {
    const axis = (coop.developmentAxis ?? '').toLowerCase();
    const spec = (coop.specialty ?? '').toLowerCase();
    switch(typeSlug){
        case 'apiculture':
            return axis.includes('apiculture');
        case 'terroir':
            return axis.includes('valorisation des produits locaux') || spec.includes('pam') || spec.includes('couscous') || spec.includes('plantes aromatiques') || spec.includes('séchage') || spec.includes('sechage fruits') || spec.includes('emballage') || spec.includes("production d'emballage");
        case 'patisserie':
            return axis.includes('patisserie') || axis.includes('patissereie') || spec.includes('gateaux') || spec.includes('patis');
        case 'elevage':
            return axis.includes('elevage ovin') || spec.includes('elevage ovin') || axis.includes('elevage poulet') || spec.includes('elevage poulet') || axis.includes('poulet') || spec.includes('poulet');
        default:
            return false;
    }
}
const productTypes = [
    {
        slug: 'apiculture',
        label: 'Miel & Apiculture',
        description: 'Miel, cire, candi, élevage de reines, caisses apicoles',
        image: `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Apiculture.png')}`,
        alt: 'Miel et produits de la ruche'
    },
    {
        slug: 'terroir',
        label: 'Produits du Terroir',
        description: 'PAM, couscous, fruits séchés, emballage',
        image: `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Valorisation des produits locaux.png')}`,
        alt: 'PAM, couscous, fruits secs'
    },
    {
        slug: 'patisserie',
        label: 'Pâtisserie Marocaine',
        description: 'Gâteaux traditionnels (chebakia, cornes de gazelle, briouates…)',
        image: `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Patisserie - Gâteaux Marocains.png')}`,
        alt: 'Gâteaux marocains'
    },
    {
        slug: 'elevage',
        label: 'Élevage & Volailles',
        description: 'Viande d’agneau, laine, poulet fermier, œufs',
        image: `${COOPERATIVE_IMAGES_BASE}/${encodeURIComponent('Elevage Ovin - Elevage Ovin.png')}`,
        alt: 'Élevage ovin et volailles'
    }
];
function getProductsByProductType(typeSlug) {
    const slug = typeSlug;
    if (!productTypes.some((t)=>t.slug === slug)) return [];
    return cooperatives.filter((coop)=>coopMatchesProductType(coop, slug)).flatMap((coop)=>coop.products.map((p)=>({
                ...p,
                cooperativeSlug: coop.slug,
                cooperativeName: coop.name,
                zone: coop.zone,
                category: coop.category
            })));
}
function getProductTypeMeta(typeSlug) {
    return productTypes.find((t)=>t.slug === typeSlug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/explore/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExplorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListFilter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-filter.js [app-client] (ecmascript) <export default as ListFilter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CooperativeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CooperativeList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloatingSearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useCooperativeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ExplorePage() {
    _s();
    const [selectedZone, setSelectedZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Toutes');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Toutes');
    const [isSheetOpen, setIsSheetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "ExplorePage.useCooperativeStore[activeCooperativeId]": (state)=>state.activeCooperativeId
    }["ExplorePage.useCooperativeStore[activeCooperativeId]"]);
    const setActiveCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "ExplorePage.useCooperativeStore[setActiveCooperativeId]": (state)=>state.setActiveCooperativeId
    }["ExplorePage.useCooperativeStore[setActiveCooperativeId]"]);
    const zones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[zones]": ()=>{
            const uniqueZones = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cooperatives"].map({
                "ExplorePage.useMemo[zones].uniqueZones": (cooperative)=>cooperative.zone
            }["ExplorePage.useMemo[zones].uniqueZones"])));
            return [
                'Toutes',
                ...uniqueZones
            ];
        }
    }["ExplorePage.useMemo[zones]"], []);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[categories]": ()=>[
                'Toutes',
                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productTypes"].map({
                    "ExplorePage.useMemo[categories]": (type)=>type.label
                }["ExplorePage.useMemo[categories]"])
            ]
    }["ExplorePage.useMemo[categories]"], []);
    const filteredCooperatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[filteredCooperatives]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cooperatives"].filter({
                "ExplorePage.useMemo[filteredCooperatives]": (cooperative)=>{
                    const zoneMatch = selectedZone === 'Toutes' || cooperative.zone === selectedZone;
                    if (selectedCategory === 'Toutes') {
                        return zoneMatch;
                    }
                    const matchingType = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productTypes"].find({
                        "ExplorePage.useMemo[filteredCooperatives].matchingType": (type)=>type.label === selectedCategory
                    }["ExplorePage.useMemo[filteredCooperatives].matchingType"]);
                    if (!matchingType) {
                        return zoneMatch;
                    }
                    const productTypeMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coopMatchesProductType"])(cooperative, matchingType.slug);
                    return zoneMatch && productTypeMatch;
                }
            }["ExplorePage.useMemo[filteredCooperatives]"]);
        }
    }["ExplorePage.useMemo[filteredCooperatives]"], [
        selectedZone,
        selectedCategory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExplorePage.useEffect": ()=>{
            if (!activeCooperativeId) return;
            const existsInFilteredList = filteredCooperatives.some({
                "ExplorePage.useEffect.existsInFilteredList": (cooperative)=>cooperative.id === activeCooperativeId
            }["ExplorePage.useEffect.existsInFilteredList"]);
            if (!existsInFilteredList) {
                setActiveCooperativeId(null);
            }
        }
    }["ExplorePage.useEffect"], [
        activeCooperativeId,
        filteredCooperatives,
        setActiveCooperativeId
    ]);
    const totalProducts = filteredCooperatives.reduce((count, cooperative)=>{
        return count + cooperative.products.length;
    }, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "cooperatives",
        className: "flex h-full flex-col overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative hidden size-full overflow-hidden lg:grid lg:grid-cols-[58%_42%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex h-full w-full min-w-0 flex-col overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-h-0 w-full flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    cooperatives: filteredCooperatives,
                                    className: "h-full w-full rounded-none border-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-col overflow-hidden border-l border-white/50 bg-white/80 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 space-y-3 border-b border-white/50 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            zones: zones,
                                            categories: categories,
                                            selectedZone: selectedZone,
                                            selectedCategory: selectedCategory,
                                            onZoneChange: setSelectedZone,
                                            onCategoryChange: setSelectedCategory,
                                            embedded: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between rounded-xl bg-palmier/5 px-4 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 text-sm font-medium text-palmier",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                            size: 16,
                                                            className: "text-terracotta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/explore/page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        filteredCooperatives.length,
                                                        " coopérative",
                                                        filteredCooperatives.length > 1 ? 's' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/explore/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 text-sm text-palmier/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListFilter$3e$__["ListFilter"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/explore/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this),
                                                        totalProducts,
                                                        " produits"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/explore/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-h-0 flex-1 overflow-y-auto p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CooperativeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        cooperatives: filteredCooperatives,
                                        compact: true,
                                        className: "border-0 bg-transparent p-0 shadow-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/explore/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full overflow-hidden lg:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            cooperatives: filteredCooperatives,
                            className: "h-full min-h-[300px] rounded-none border-0",
                            hideSpotlight: true
                        }, void 0, false, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSheetOpen((prev)=>!prev),
                            className: "absolute bottom-20 right-4 z-[1000] inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/95 px-4 py-2.5 text-sm font-semibold text-palmier shadow-xl backdrop-blur-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    size: 16,
                                    className: `transition-transform ${isSheetOpen ? 'rotate-180' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                "Voir les coopératives"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isSheetOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: '100%'
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: '100%'
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 320,
                                    damping: 32
                                },
                                className: "absolute inset-x-0 bottom-0 z-[1001] flex max-h-[70vh] flex-col rounded-t-3xl border border-white/60 bg-white/95 shadow-2xl backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 space-y-3 border-b border-white/50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto h-1.5 w-14 rounded-full bg-palmier/25"
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloatingSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                zones: zones,
                                                categories: categories,
                                                selectedZone: selectedZone,
                                                selectedCategory: selectedCategory,
                                                onZoneChange: setSelectedZone,
                                                onCategoryChange: setSelectedCategory,
                                                embedded: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-palmier",
                                                    children: [
                                                        filteredCooperatives.length,
                                                        " coopérative",
                                                        filteredCooperatives.length > 1 ? 's' : '',
                                                        " • ",
                                                        totalProducts,
                                                        " produits"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/explore/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-0 flex-1 overflow-y-auto p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CooperativeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            cooperatives: filteredCooperatives,
                                            compact: true,
                                            className: "h-full border-0 bg-transparent p-0 shadow-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/explore/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/explore/page.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/explore/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(ExplorePage, "+QYMdb56/N1mmpGAHv5dKnxsRhY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"]
    ];
});
_c = ExplorePage;
var _c;
__turbopack_context__.k.register(_c, "ExplorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d7d9e86d._.js.map