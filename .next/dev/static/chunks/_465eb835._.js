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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
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
function CooperativeList({ cooperatives }) {
    _s();
    const activeCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "CooperativeList.useCooperativeStore[activeCooperativeId]": (state)=>state.activeCooperativeId
    }["CooperativeList.useCooperativeStore[activeCooperativeId]"]);
    const setActiveCooperativeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCooperativeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCooperativeStore"])({
        "CooperativeList.useCooperativeStore[setActiveCooperativeId]": (state)=>state.setActiveCooperativeId
    }["CooperativeList.useCooperativeStore[setActiveCooperativeId]"]);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "h-[60vh] overflow-y-auto rounded-2xl border border-white/40 bg-white/70 p-3 shadow-lg backdrop-blur-md lg:h-[72vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: cooperatives.map((cooperative, index)=>{
                const isActive = cooperative.id === activeCooperativeId;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: (node)=>{
                        itemRefs.current[cooperative.id] = node;
                    },
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: index * 0.04
                    },
                    onClick: ()=>setActiveCooperativeId(cooperative.id),
                    className: `cursor-pointer rounded-2xl border p-4 transition ${isActive ? 'border-terracotta/70 bg-terracotta/10 shadow-xl' : 'border-white/40 bg-white/50 hover:shadow-lg'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-0.5 h-12 w-12 overflow-hidden rounded-xl border border-white/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: cooperative.coverImage,
                                                alt: cooperative.coverAlt,
                                                fill: true,
                                                sizes: "48px",
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CooperativeList.tsx",
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-wide text-terracotta",
                                                    children: [
                                                        cooperative.zone,
                                                        " • ",
                                                        cooperative.category
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CooperativeList.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-palmier",
                                                    children: cooperative.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CooperativeList.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    size: 18,
                                    className: isActive ? 'text-terracotta' : 'text-palmier/60'
                                }, void 0, false, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-sm text-palmier/80",
                            children: cooperative.descriptionShort
                        }, void 0, false, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-xs text-palmier/70",
                            children: cooperative.location.address
                        }, void 0, false, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap gap-1",
                            children: cooperative.products.slice(0, 2).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-palmier/10 px-2 py-1 text-[11px] text-palmier/75",
                                    children: product.name
                                }, product.id, false, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-palmier/70",
                                    children: [
                                        cooperative.products.length,
                                        " produit",
                                        cooperative.products.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/cooperative/${cooperative.slug}`,
                                    className: "inline-flex items-center gap-1 text-sm font-medium text-palmier hover:text-terracotta",
                                    onClick: (event)=>event.stopPropagation(),
                                    children: [
                                        "Voir profil",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/CooperativeList.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CooperativeList.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CooperativeList.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    ]
                }, cooperative.id, true, {
                    fileName: "[project]/components/CooperativeList.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/CooperativeList.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CooperativeList.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CooperativeList, "xkuMdri2mtFh8faIORrcB7vxfAk=", false, function() {
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
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapClient;
function Map({ cooperatives }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapClient, {
        cooperatives: cooperatives
    }, void 0, false, {
        fileName: "[project]/components/Map.tsx",
        lineNumber: 20,
        columnNumber: 10
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
"[project]/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cooperatives",
    ()=>cooperatives
]);
const cooperatives = [
    {
        id: '1',
        name: 'Coopérative Agricole des Dattes',
        slug: 'coop-dattes-errachidia',
        category: 'Agriculture',
        zone: 'Errachidia',
        location: {
            lat: 31.9314,
            lng: -4.4244,
            address: 'Marché Oued Lahmar, Errachidia'
        },
        descriptionShort: 'Dattes Majhoul & Boufeggous de la vallée du Ziz.',
        descriptionLong: 'La coopérative regroupe des producteurs familiaux de palmeraies pour une culture responsable, un tri soigné et une valorisation locale.',
        coverImage: 'https://images.pexels.com/photos/9399898/pexels-photo-9399898.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Paniers de dattes',
        products: [
            {
                id: 'p1',
                name: 'Dattes Majhoul Premium 500g',
                price: 120,
                image: 'https://images.pexels.com/photos/8789777/pexels-photo-8789777.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Dattes Majhoul',
                shortDescription: 'Sélection manuelle, calibre premium.'
            },
            {
                id: 'p2',
                name: 'Dattes Boufeggous 1kg',
                price: 135,
                image: 'https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Dattes Boufeggous',
                shortDescription: 'Texture fondante et goût caramélisé.'
            },
            {
                id: 'p3',
                name: 'Pâte de Dattes Nature 350g',
                price: 45,
                image: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Pâte de dattes',
                shortDescription: 'Sans sucre ajouté, idéale en pâtisserie.'
            },
            {
                id: 'p4',
                name: 'Sirop de Dattes 250ml',
                price: 55,
                image: 'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Sirop de dattes',
                shortDescription: 'Édulcorant naturel pour boissons et desserts.'
            }
        ]
    },
    {
        id: '2',
        name: 'Coopérative Damaskina',
        slug: 'coop-damaskina-tinghir',
        category: 'Cosmétique',
        zone: 'Tinghir',
        location: {
            lat: 31.2452,
            lng: -6.1286,
            address: "Kelâat M'Gouna, Tinghir"
        },
        descriptionShort: "Distillation de la rose de Kelâat M'Gouna.",
        descriptionLong: "Damaskina valorise la rose de la vallée du Dadès via une distillation artisanale et des soins naturels inspirés des rituels locaux.",
        coverImage: 'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Champ de roses',
        products: [
            {
                id: 'p5',
                name: 'Eau de Rose 200ml',
                price: 35,
                image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Eau de rose',
                shortDescription: '100% naturelle.'
            },
            {
                id: 'p6',
                name: 'Huile Essentielle de Rose 30ml',
                price: 160,
                image: 'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Huile essentielle de rose',
                shortDescription: 'Concentrée, distillation lente.'
            },
            {
                id: 'p7',
                name: 'Savon Rose & Argile 100g',
                price: 28,
                image: 'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Savon artisanal',
                shortDescription: 'Peau douce, parfum floral naturel.'
            },
            {
                id: 'p8',
                name: 'Brume Visage Rose 100ml',
                price: 49,
                image: 'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Brume visage rose',
                shortDescription: 'Hydratation quotidienne légère.'
            }
        ]
    },
    {
        id: '3',
        name: "Pommes de l'Atlas",
        slug: 'coop-pommes-midelt',
        category: 'Agriculture',
        zone: 'Midelt',
        location: {
            lat: 32.6816,
            lng: -4.7303,
            address: "Route d'Imilchil, Midelt"
        },
        descriptionShort: 'Pommes croquantes de la capitale de la pomme.',
        descriptionLong: "Cultivées en altitude sur le plateau de Midelt, ces pommes profitent d'une forte amplitude thermique pour un goût sucré-acidulé.",
        coverImage: 'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Verger de pommiers',
        products: [
            {
                id: 'p9',
                name: 'Cagette Pommes Gala 5kg',
                price: 60,
                image: 'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Pommes Gala',
                shortDescription: 'Cueillies à la main.'
            },
            {
                id: 'p10',
                name: 'Pommes Golden 5kg',
                price: 65,
                image: 'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Pommes Golden',
                shortDescription: 'Douces et parfumées.'
            },
            {
                id: 'p11',
                name: 'Jus de Pomme Artisanal 1L',
                price: 32,
                image: 'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Jus de pomme',
                shortDescription: 'Pressage à froid, sans conservateurs.'
            },
            {
                id: 'p12',
                name: 'Vinaigre de Pomme 500ml',
                price: 34,
                image: 'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Vinaigre de pomme',
                shortDescription: 'Fermentation naturelle locale.'
            }
        ]
    },
    {
        id: '4',
        name: 'Poterie Tamegroute',
        slug: 'coop-poterie-zagora',
        category: 'Artisanat',
        zone: 'Zagora',
        location: {
            lat: 30.2605,
            lng: -5.6749,
            address: 'Tamegroute, Zagora'
        },
        descriptionShort: 'Céramique verte authentique du désert.',
        descriptionLong: "Nos artisans perpétuent la tradition de l'émail vert unique de Tamegroute, fait à base de cuivre et de manganèse.",
        coverImage: 'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Poterie verte',
        products: [
            {
                id: 'p13',
                name: 'Bol en Céramique Verte',
                price: 85,
                image: 'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Bol céramique',
                shortDescription: 'Fait main, cuisson traditionnelle.'
            },
            {
                id: 'p14',
                name: 'Assiette Tamegroute 28cm',
                price: 120,
                image: 'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Assiette artisanale',
                shortDescription: 'Émail vert emblématique.'
            },
            {
                id: 'p15',
                name: 'Vase Décoratif Tamegroute',
                price: 210,
                image: 'https://images.pexels.com/photos/8540162/pexels-photo-8540162.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Vase en céramique',
                shortDescription: 'Pièce décorative unique.'
            },
            {
                id: 'p16',
                name: 'Tasse Artisanale Verte',
                price: 48,
                image: 'https://images.pexels.com/photos/7990478/pexels-photo-7990478.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Tasse céramique',
                shortDescription: 'Modelée à la main par les artisans.'
            }
        ]
    },
    {
        id: '5',
        name: 'Coopérative Miel des Oasis',
        slug: 'coop-miel-oasis-errachidia',
        category: 'Terroir',
        zone: 'Errachidia',
        location: {
            lat: 31.85,
            lng: -4.34,
            address: 'Ksour du Ziz, Errachidia'
        },
        descriptionShort: 'Miel de jujubier, romarin et plantes désertiques.',
        descriptionLong: 'Des apiculteurs locaux transhument selon les floraisons pour produire des miels rares, mis en pot sur place.',
        coverImage: 'https://images.pexels.com/photos/8541409/pexels-photo-8541409.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Pot de miel artisanal',
        products: [
            {
                id: 'p17',
                name: 'Miel de Jujubier 500g',
                price: 140,
                image: 'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Miel de jujubier',
                shortDescription: 'Monofloral, parfum intense.'
            },
            {
                id: 'p18',
                name: 'Miel de Romarin 500g',
                price: 92,
                image: 'https://images.pexels.com/photos/8540162/pexels-photo-8540162.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Miel de romarin',
                shortDescription: 'Récolte printanière locale.'
            },
            {
                id: 'p19',
                name: "Pollen d'Abeille 250g",
                price: 75,
                image: 'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: "Pollen d'abeille",
                shortDescription: 'Riche en nutriments.'
            },
            {
                id: 'p20',
                name: 'Miel Crémeux 250g',
                price: 58,
                image: 'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Miel crémeux',
                shortDescription: 'Texture onctueuse et tartinable.'
            }
        ]
    },
    {
        id: '6',
        name: 'Coopérative Safran de Tinejdad',
        slug: 'coop-safran-tinejdad',
        category: 'Terroir',
        zone: 'Errachidia',
        location: {
            lat: 31.5,
            lng: -4.95,
            address: 'Tinejdad, Errachidia'
        },
        descriptionShort: 'Safran rouge pur cultivé en parcelles familiales.',
        descriptionLong: 'Culture raisonnée, cueillette à l’aube et séchage traditionnel pour conserver le pouvoir aromatique du safran.',
        coverImage: 'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Fleurs de safran',
        products: [
            {
                id: 'p21',
                name: 'Safran Pur 1g',
                price: 95,
                image: 'https://images.pexels.com/photos/10251147/pexels-photo-10251147.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Safran pur',
                shortDescription: 'Filaments rouges de catégorie premium.'
            },
            {
                id: 'p22',
                name: 'Safran Pur 3g',
                price: 260,
                image: 'https://images.pexels.com/photos/9080009/pexels-photo-9080009.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Safran 3g',
                shortDescription: 'Format cuisine familiale.'
            },
            {
                id: 'p23',
                name: 'Sel au Safran 120g',
                price: 34,
                image: 'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Sel au safran',
                shortDescription: 'Assaisonnement gastronomique.'
            },
            {
                id: 'p24',
                name: 'Infusion Safran & Verveine',
                price: 42,
                image: 'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Infusion safran',
                shortDescription: 'Mélange aromatique relaxant.'
            }
        ]
    },
    {
        id: '7',
        name: 'Coopérative Laine Ayt Ayach',
        slug: 'coop-laine-midelt',
        category: 'Artisanat',
        zone: 'Midelt',
        location: {
            lat: 32.7,
            lng: -4.74,
            address: 'Ayt Ayach, Midelt'
        },
        descriptionShort: 'Tissage traditionnel de laine de montagne.',
        descriptionLong: 'Des artisanes transforment la laine locale en pièces tissées durables inspirées des motifs amazighs.',
        coverImage: 'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Tissage traditionnel',
        products: [
            {
                id: 'p25',
                name: 'Tapis Amazigh 120x80',
                price: 480,
                image: 'https://images.pexels.com/photos/3903200/pexels-photo-3903200.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Tapis amazigh',
                shortDescription: 'Laine naturelle, motifs traditionnels.'
            },
            {
                id: 'p26',
                name: 'Couverture Tissée',
                price: 320,
                image: 'https://images.pexels.com/photos/2253550/pexels-photo-2253550.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Couverture laine',
                shortDescription: 'Confort thermique haute montagne.'
            },
            {
                id: 'p27',
                name: 'Écharpe Laine Fine',
                price: 140,
                image: 'https://images.pexels.com/photos/11571296/pexels-photo-11571296.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Écharpe artisanale',
                shortDescription: 'Teinture douce, finition manuelle.'
            },
            {
                id: 'p28',
                name: 'Coussin Berbère',
                price: 95,
                image: 'https://images.pexels.com/photos/7990478/pexels-photo-7990478.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Coussin berbère',
                shortDescription: 'Décoration artisanale locale.'
            }
        ]
    },
    {
        id: '8',
        name: 'Coopérative Henné du Drâa',
        slug: 'coop-henne-zagora',
        category: 'Cosmétique',
        zone: 'Zagora',
        location: {
            lat: 30.33,
            lng: -5.83,
            address: 'Mhamid El Ghizlane, Zagora'
        },
        descriptionShort: 'Henné naturel du Drâa, séché au soleil.',
        descriptionLong: 'Feuilles triées et moulues localement pour des soins capillaires et corporels naturels.',
        coverImage: 'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Poudre de henné',
        products: [
            {
                id: 'p29',
                name: 'Henné Naturel 250g',
                price: 38,
                image: 'https://images.pexels.com/photos/10776407/pexels-photo-10776407.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Henné naturel',
                shortDescription: 'Poudre fine sans additifs.'
            },
            {
                id: 'p30',
                name: 'Masque Henné & Plantes',
                price: 52,
                image: 'https://images.pexels.com/photos/5946675/pexels-photo-5946675.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Masque au henné',
                shortDescription: 'Soin fortifiant pour cheveux.'
            },
            {
                id: 'p31',
                name: 'Tatouage Henné Kit Débutant',
                price: 68,
                image: 'https://images.pexels.com/photos/6734538/pexels-photo-6734538.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Kit henné',
                shortDescription: 'Poches + embouts + guide motifs.'
            },
            {
                id: 'p32',
                name: 'Huile Sèche au Henné 100ml',
                price: 74,
                image: 'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Huile au henné',
                shortDescription: 'Finition brillante et nourrissante.'
            }
        ]
    },
    {
        id: '9',
        name: 'Coopérative Herbes des Gorges',
        slug: 'coop-herbes-tinghir',
        category: 'Terroir',
        zone: 'Tinghir',
        location: {
            lat: 31.53,
            lng: -5.52,
            address: 'Gorges du Todgha, Tinghir'
        },
        descriptionShort: 'Plantes aromatiques de montagne et tisanes du Todgha.',
        descriptionLong: 'Cueillette raisonnée des herbes aromatiques et assemblages de tisanes inspirés des savoirs traditionnels.',
        coverImage: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1400',
        coverAlt: 'Herbes aromatiques',
        products: [
            {
                id: 'p33',
                name: 'Thym Séché 100g',
                price: 24,
                image: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Thym séché',
                shortDescription: 'Arôme intense des hauteurs.'
            },
            {
                id: 'p34',
                name: 'Verveine Bio 80g',
                price: 28,
                image: 'https://images.pexels.com/photos/5692412/pexels-photo-5692412.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Verveine',
                shortDescription: 'Infusion apaisante.'
            },
            {
                id: 'p35',
                name: 'Mélange Tisane Oasis 120g',
                price: 38,
                image: 'https://images.pexels.com/photos/12201100/pexels-photo-12201100.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Tisane mélange',
                shortDescription: 'Menthe, verveine et fleurs locales.'
            },
            {
                id: 'p36',
                name: 'Origan de Montagne 90g',
                price: 26,
                image: 'https://images.pexels.com/photos/27429847/pexels-photo-27429847.jpeg?auto=compress&cs=tinysrgb&w=900',
                alt: 'Origan',
                shortDescription: 'Parfum puissant pour cuisine traditionnelle.'
            }
        ]
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CooperativeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CooperativeList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Map.tsx [app-client] (ecmascript)");
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
        "ExplorePage.useMemo[categories]": ()=>{
            const uniqueCategories = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cooperatives"].map({
                "ExplorePage.useMemo[categories].uniqueCategories": (cooperative)=>cooperative.category
            }["ExplorePage.useMemo[categories].uniqueCategories"])));
            return [
                'Toutes',
                ...uniqueCategories
            ];
        }
    }["ExplorePage.useMemo[categories]"], []);
    const filteredCooperatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[filteredCooperatives]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cooperatives"].filter({
                "ExplorePage.useMemo[filteredCooperatives]": (cooperative)=>{
                    const zoneMatch = selectedZone === 'Toutes' || cooperative.zone === selectedZone;
                    const categoryMatch = selectedCategory === 'Toutes' || cooperative.category === selectedCategory;
                    return zoneMatch && categoryMatch;
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
    const productsCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[productsCatalog]": ()=>{
            return filteredCooperatives.flatMap({
                "ExplorePage.useMemo[productsCatalog]": (cooperative)=>cooperative.products.map({
                        "ExplorePage.useMemo[productsCatalog]": (product)=>({
                                ...product,
                                cooperativeId: cooperative.id,
                                cooperativeName: cooperative.name,
                                cooperativeSlug: cooperative.slug,
                                zone: cooperative.zone
                            })
                    }["ExplorePage.useMemo[productsCatalog]"])
            }["ExplorePage.useMemo[productsCatalog]"]);
        }
    }["ExplorePage.useMemo[productsCatalog]"], [
        filteredCooperatives
    ]);
    const zoneOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExplorePage.useMemo[zoneOverview]": ()=>{
            const bucket = new globalThis.Map();
            for (const cooperative of filteredCooperatives){
                const current = bucket.get(cooperative.zone) ?? {
                    cooperativeCount: 0,
                    productCount: 0
                };
                bucket.set(cooperative.zone, {
                    cooperativeCount: current.cooperativeCount + 1,
                    productCount: current.productCount + cooperative.products.length
                });
            }
            return Array.from(bucket.entries()).map({
                "ExplorePage.useMemo[zoneOverview]": ([zone, stats])=>({
                        zone,
                        ...stats
                    })
            }["ExplorePage.useMemo[zoneOverview]"]);
        }
    }["ExplorePage.useMemo[zoneOverview]"], [
        filteredCooperatives
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "cooperatives",
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-palmier",
                        children: "Explorer les cooperatives"
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-palmier/80",
                        children: "Cliquez sur une carte ou un marqueur pour synchroniser instantanement la selection."
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-terracotta/10 px-3 py-1 font-medium text-terracotta",
                                children: [
                                    filteredCooperatives.length,
                                    " cooperatives"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-palmier/10 px-3 py-1 font-medium text-palmier",
                                children: [
                                    totalProducts,
                                    " produits"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-sable/20 px-3 py-1 font-medium text-palmier",
                                children: "Region Draa-Tafilalet"
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center gap-2 text-sm font-semibold text-palmier",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                                size: 16,
                                className: "text-terracotta"
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            "Vue rapide par zone"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 md:grid-cols-4",
                        children: zoneOverview.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedZone(item.zone),
                                className: `rounded-xl border px-3 py-3 text-left transition ${selectedZone === item.zone ? 'border-terracotta/60 bg-terracotta/10' : 'border-white/50 bg-fond hover:shadow-md'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-palmier",
                                        children: item.zone
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-palmier/70",
                                        children: [
                                            item.cooperativeCount,
                                            " coop • ",
                                            item.productCount,
                                            " produits"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.zone, true, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium text-palmier",
                            children: "Filtrer les cooperatives"
                        }, void 0, false, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-white/60 bg-fond px-3 py-2 text-sm text-palmier",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Zone"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedZone,
                                            onChange: (event)=>setSelectedZone(event.target.value),
                                            className: "min-w-[130px] bg-transparent text-sm outline-none",
                                            children: zones.map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: zone,
                                                    children: zone
                                                }, zone, false, {
                                                    fileName: "[project]/app/explore/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-white/60 bg-fond px-3 py-2 text-sm text-palmier",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Categorie"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedCategory,
                                            onChange: (event)=>setSelectedCategory(event.target.value),
                                            className: "min-w-[140px] bg-transparent text-sm outline-none",
                                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: category,
                                                    children: category
                                                }, category, false, {
                                                    fileName: "[project]/app/explore/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/explore/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center gap-2 text-sm font-semibold text-palmier",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 16,
                                className: "text-terracotta"
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            "Produits disponibles (catalogue general)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4",
                        children: productsCatalog.slice(0, 12).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/cooperative/${product.cooperativeSlug}`,
                                className: "group overflow-hidden rounded-xl border border-white/50 bg-fond transition hover:-translate-y-0.5 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: product.image,
                                            alt: product.alt,
                                            fill: true,
                                            sizes: "(max-width: 768px) 100vw, 25vw",
                                            className: "object-cover transition duration-300 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "line-clamp-1 text-sm font-semibold text-palmier",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "line-clamp-1 text-xs text-palmier/70",
                                                children: [
                                                    product.zone,
                                                    " • ",
                                                    product.cooperativeName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "inline-flex items-center gap-1 text-xs font-medium text-terracotta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/explore/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    product.price,
                                                    " MAD"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/explore/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/explore/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cooperatives: filteredCooperatives
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CooperativeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        cooperatives: filteredCooperatives
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/explore/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(ExplorePage, "COjrBy1srJyly7diiVscuDvQVUM=", false, function() {
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

//# sourceMappingURL=_465eb835._.js.map