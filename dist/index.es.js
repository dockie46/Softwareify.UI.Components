import { jsx as r, jsxs as x } from "react/jsx-runtime";
import { Form as L, Input as Z, Select as Ce, DatePicker as we, InputNumber as Se, Switch as oe, Row as Q, Col as ie, Tooltip as ee, Button as I, Typography as O, Badge as U, Divider as Te, Grid as G, Space as K, Dropdown as De, Table as Ie, Modal as ce, Spin as ke, Card as F, Avatar as Me, Skeleton as j } from "antd";
import de from "dayjs";
import { format as X } from "react-string-format";
import { useTranslation as V } from "react-i18next";
import { MenuOutlined as ue, PushpinOutlined as Re, UndoOutlined as ze, SearchOutlined as te, TableOutlined as Fe, ClearOutlined as Ee } from "@ant-design/icons";
import { useRef as B, useMemo as P, useState as E, useEffect as ne, useCallback as ae } from "react";
import { useDrop as ge, useDrag as fe, DndProvider as Oe } from "react-dnd";
import { HTML5Backend as Ne } from "react-dnd-html5-backend";
import { useResizeDetector as Ae } from "react-resize-detector";
const He = "DD.MM.YYYY", je = "DD.MM.YYYY HH:mm:ss", ct = "DD.MM.YYYY HH:mm", dt = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", Le = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, ut = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", $e = 50, _e = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", Be = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, gt = 2147483646, ft = (t, e, i) => {
  const n = new FormData();
  function a(s, l) {
    if (!g(l))
      if (l = l || "", s instanceof File)
        n.append(l, s);
      else if (s instanceof de)
        s && n.append(l, s.toISOString());
      else if (Array.isArray(s))
        for (let o = 0; o < s.length; o++)
          a(s[o], l + "[" + o + "]");
      else if (typeof s == "object" && s)
        for (const o in s)
          s.hasOwnProperty(o) && (l === "" ? a(s[o], o) : a(s[o], l + "." + o));
      else
        s !== null && typeof s < "u" && n.append(l, s);
  }
  function g(s) {
    return Array.isArray(i) && i.some(function(l) {
      return l === s;
    });
  }
  return a(t, e), n;
}, $ = (t, e, i) => {
  var s;
  if (!t) return [];
  const { t: n } = V(), a = (s = t.label) == null ? void 0 : s.toString(), g = [
    {
      required: t.required,
      message: a ? `${t.label ?? i} ${n("global.validations.input.isRequiredField")}` : n("global.validations.input.common")
    }
  ];
  return e === "email" && g.push({
    type: e,
    message: X(n("global.validations.input.incorrectFormat"), a ?? n("global.validations.input.field"))
  }), e === "url" && g.push({
    pattern: new RegExp(_e),
    message: X(n("global.validations.input.incorrectFormat"), a ?? n("global.validations.input.field"))
  }), e === "phone" && g.push({
    pattern: new RegExp(Be),
    message: X(n("global.validations.input.incorrectFormat"), a ?? n("global.validations.input.field"))
  }), g ?? t.rules ?? [];
}, Ye = (t) => t && typeof t == "string" && Le.test(t), We = (t) => {
  const e = { ...t };
  if (e == null || typeof e != "object")
    return e;
  for (const i of Object.keys(e)) {
    const n = e[i];
    Ye(n) ? e[i] = de(n) : typeof n == "object" && We(n);
  }
  return e;
}, ht = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ r(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? $(e, t == null ? void 0 : t.type), children: /* @__PURE__ */ r(Z, { ...t }) }), mt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ r(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? $(e), children: /* @__PURE__ */ r(
  Ce,
  {
    showSearch: !0,
    filterOption: (i, n) => String((n == null ? void 0 : n.label) ?? (n == null ? void 0 : n.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
      i.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    ),
    ...t
  }
) }), pt = ({ formProps: t, elementProps: e }) => /* @__PURE__ */ r(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? $(t), children: /* @__PURE__ */ r(
  we,
  {
    ...e,
    format: (e == null ? void 0 : e.format) ?? (e == null ? void 0 : e.showTime) ? je : He,
    className: "w-full"
  }
) }), xt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ r(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? $(e), children: /* @__PURE__ */ r(Se, { ...t, className: "w-full" }) }), yt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ r(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? $(e), children: /* @__PURE__ */ r(Z.TextArea, { ...t }) }), bt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ r(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? $(e), valuePropName: "checked", children: /* @__PURE__ */ r(oe, { ...t }) }), vt = ({ firstItem: t, secondItem: e, style: i, gutter: n = 24 }) => /* @__PURE__ */ x(Q, { gutter: n, style: i, children: [
  /* @__PURE__ */ r(ie, { xl: 12, md: 24, sm: 24, xs: 24, children: t }),
  /* @__PURE__ */ r(ie, { xl: 12, md: 24, sm: 24, xs: 24, children: e })
] }), q = "DraggableColumn", N = {
  primary: "#1890ff",
  accent: "#e6f7ff",
  border: "#e8e8e8",
  success: "#52c41a"
}, qe = ({
  columnKey: t,
  index: e,
  isVisible: i,
  fixed: n,
  title: a,
  moveColumn: g,
  toggleVisibility: s,
  setFixedStatus: l
}) => {
  const o = B(null), u = 44, [, b] = ge({
    accept: q,
    hover(w, C) {
      if (!o.current) return;
      const D = w.index, d = e;
      if (D === d) return;
      const y = o.current.getBoundingClientRect(), v = (y.bottom - y.top) / 2, c = C.getClientOffset();
      if (!c) return;
      const m = c.y - y.top;
      D < d && m < v || D > d && m > v || (g(D, d), w.index = d);
    }
  }), [{ isDragging: f }, h] = fe({
    type: q,
    item: { index: e, columnKey: t },
    collect: (w) => ({
      isDragging: w.isDragging()
    })
  });
  h(b(o));
  const T = () => n === "left" ? N.primary : n === "right" ? N.success : "#d9d9d9", k = (w) => {
    w.stopPropagation();
    let C = !1;
    n === !1 ? C = "left" : n === "left" && (C = "right"), l(t, C);
  };
  return /* @__PURE__ */ x(
    "div",
    {
      ref: o,
      style: {
        opacity: f ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: `1px solid ${N.border}`,
        height: `${u}px`,
        backgroundColor: f ? "#f5f5f5" : e % 2 === 0 ? "#ffffff" : "#fafafa",
        transition: "all 0.2s",
        position: "relative"
      },
      children: [
        i && /* @__PURE__ */ r(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: n ? T() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ r(
          ue,
          {
            style: {
              marginRight: 12,
              cursor: "grab",
              color: "#8c8c8c",
              fontSize: "14px"
            }
          }
        ),
        /* @__PURE__ */ x(
          "div",
          {
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            children: [
              /* @__PURE__ */ x(
                "div",
                {
                  style: {
                    opacity: i ? 1 : 0.5,
                    transition: "opacity 0.2s",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "calc(100% - 100px)"
                  },
                  children: [
                    n && /* @__PURE__ */ r(
                      "span",
                      {
                        style: {
                          marginRight: 6,
                          fontSize: 12,
                          padding: "1px 4px",
                          background: n === "left" ? N.accent : "#f6ffed",
                          color: n === "left" ? N.primary : N.success,
                          borderRadius: 4,
                          flexShrink: 0
                        },
                        children: n === "left" ? "LEFT" : "RIGHT"
                      }
                    ),
                    /* @__PURE__ */ r(
                      "span",
                      {
                        style: {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: a
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ x("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ r(ee, { title: n ? `Fixed ${n}` : "Pin column", children: /* @__PURE__ */ r(
                  I,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ r(
                      Re,
                      {
                        style: {
                          color: T(),
                          transform: n ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: k,
                    style: {
                      marginRight: 4,
                      padding: "0 8px"
                    }
                  }
                ) }),
                /* @__PURE__ */ r(
                  oe,
                  {
                    checked: i,
                    size: "small",
                    onChange: () => s(t),
                    style: {
                      backgroundColor: i ? N.primary : void 0
                    }
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, J = {
  primary: "#1890ff",
  success: "#52c41a"
}, Ze = ({
  columns: t,
  moveColumn: e,
  toggleVisibility: i,
  setFixedStatus: n,
  resetToDefault: a,
  onCancel: g,
  onApply: s
}) => {
  const l = t.filter((h) => h.visible).length, o = t.length, { t: u } = V(), b = t.filter((h) => h.fixed === "left").length, f = t.filter((h) => h.fixed === "right").length;
  return /* @__PURE__ */ x("div", { className: "bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ x("div", { className: "p-4 font-bold border-b flex justify-between items-center bg-[#f5f7fa]", children: [
      /* @__PURE__ */ r(O.Title, { level: 5, style: { margin: 0 }, children: u("global.labels.customizeTableColumns") }),
      /* @__PURE__ */ r(ee, { title: u("global.btns.reset"), children: /* @__PURE__ */ r(I, { type: "text", icon: /* @__PURE__ */ r(ze, {}), onClick: a, className: "text-[#1890ff]" }) })
    ] }),
    /* @__PURE__ */ x("div", { className: "px-3 py-2 flex justify-between bg-[#fafafa] border-b", children: [
      /* @__PURE__ */ x("div", { className: "flex items-center", children: [
        /* @__PURE__ */ r(
          U,
          {
            count: l,
            color: J.primary,
            size: "small",
            overflowCount: 999,
            style: { marginRight: "8px" }
          }
        ),
        /* @__PURE__ */ r(O.Text, { type: "secondary", className: "text-xs", children: u("global.texts.columnsVisible", { count: l, total: o }) })
      ] }),
      (b > 0 || f > 0) && /* @__PURE__ */ x("div", { className: "flex items-center", children: [
        b > 0 && /* @__PURE__ */ r(U, { count: b, size: "small", color: J.primary, style: { marginRight: "4px" } }),
        f > 0 && /* @__PURE__ */ r(U, { count: f, size: "small", color: J.success })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "overflow-auto flex-grow scrollbar-thin scrollbar-thumb-[#e8e8e8] scrollbar-track-transparent", children: t.map((h, T) => /* @__PURE__ */ r(
      qe,
      {
        columnKey: h.key,
        index: T,
        isVisible: h.visible,
        fixed: h.fixed,
        title: h.title,
        moveColumn: e,
        toggleVisibility: i,
        setFixedStatus: n
      },
      h.key
    )) }),
    /* @__PURE__ */ r(Te, { className: "my-0" }),
    /* @__PURE__ */ x("div", { className: "py-3 px-4 flex justify-end gap-2 bg-[#fafafa]", children: [
      /* @__PURE__ */ r(I, { block: !0, size: "middle", onClick: g, children: u("global.btns.cancel") }),
      /* @__PURE__ */ r(I, { block: !0, type: "primary", size: "middle", onClick: s, children: u("global.btns.apply") })
    ] })
  ] });
};
function Ge({
  title: t,
  columnKey: e,
  index: i,
  moveColumn: n
}) {
  const a = B(null), [, g] = ge({
    accept: q,
    hover(o) {
      if (!a.current) return;
      const u = o.index, b = i;
      u !== b && (n(u, b), o.index = b);
    }
  }), [{ isDragging: s }, l] = fe({
    type: q,
    item: { index: i, columnKey: e },
    collect: (o) => ({
      isDragging: o.isDragging()
    })
  });
  return l(g(a)), /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      style: {
        opacity: s ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center"
      },
      children: t == null ? void 0 : t.toString()
    }
  );
}
function Ke(t) {
  const e = (c) => c.key || c.dataIndex, i = P(() => t.map(e), [t]), n = () => t.reduce((c, m, p) => {
    const M = e(m);
    return {
      ...c,
      [M]: {
        key: M,
        visible: !0,
        fixed: m.fixed ?? !1,
        originalIndex: p
      }
    };
  }, {}), [a, g] = E(() => n()), [s, l] = E(() => n()), [o, u] = E(() => i), [b, f] = E(() => i);
  return ne(() => {
    const c = n(), m = t.map(e);
    g(c), l(c), u(m), f(m);
  }, [t]), {
    getColumnKey: e,
    getVisibleColumns: () => o.filter((c) => {
      var m;
      return (m = a[c]) == null ? void 0 : m.visible;
    }).map((c) => {
      var m;
      return {
        key: c,
        fixed: ((m = a[c]) == null ? void 0 : m.fixed) || !1
      };
    }),
    getEditingColumns: () => b.map((c) => {
      var m, p;
      return {
        key: c,
        visible: ((m = s[c]) == null ? void 0 : m.visible) || !1,
        fixed: ((p = s[c]) == null ? void 0 : p.fixed) || !1
      };
    }),
    startEditing: () => {
      l({ ...a }), f([...o]);
    },
    applyChanges: () => {
      g(s), u(b);
    },
    cancelChanges: () => {
      l({ ...a }), f([...o]);
    },
    resetToDefault: () => {
      l(n()), f([...i]);
    },
    moveColumn: (c, m) => {
      const p = [...b], M = p[c];
      p.splice(c, 1), p.splice(m, 0, M), f(p);
    },
    toggleVisibility: (c) => {
      const m = Object.values(s).filter((p) => p.visible).length;
      s[c].visible && m <= 1 || l((p) => ({
        ...p,
        [c]: {
          ...p[c],
          visible: !p[c].visible
        }
      }));
    },
    setFixedStatus: (c, m) => {
      l((p) => ({
        ...p,
        [c]: {
          ...p[c],
          fixed: m
        }
      }));
    }
  };
}
const Ve = (t, e, i) => {
  const n = B(null), a = Ae({
    refreshMode: "debounce",
    onResize: () => g(),
    refreshRate: 1
  }), g = () => {
    var w, C, D, d, y, v, c, m, p;
    const s = (w = a.ref.current) == null ? void 0 : w.querySelector("div.ant-table-wrapper"), l = ((D = (C = a.ref.current) == null ? void 0 : C.querySelector("thead.ant-table-thead")) == null ? void 0 : D.clientHeight) ?? 0, o = 8;
    if (t) {
      const M = (d = a.ref.current) == null ? void 0 : d.querySelector("div.ant-table-placeholder");
      M == null || M.setAttribute(
        "style",
        `min-height: ${+t + l - o}px; max-height: ${+t + l - o}px`
      );
      const _ = (y = a.ref.current) == null ? void 0 : y.querySelector("div.ant-table-container");
      return _ == null || _.setAttribute(
        "style",
        `min-height: ${+t + l - o}px; max-height: ${+t + l - o}px`
      ), t;
    }
    const u = ((c = (v = a.ref.current) == null ? void 0 : v.querySelector("div.ant-table-footer")) == null ? void 0 : c.clientHeight) ?? 0, b = i.xs ? 24 : 40, f = ((m = a.ref.current) == null ? void 0 : m.clientHeight) ?? 0, h = ((p = e.current) == null ? void 0 : p.clientHeight) ?? 0, k = f - l - u - h - o - 16 - b;
    return s && s.setAttribute("style", `max-height:${k + l}px;height: 100%`), k;
  };
  return {
    tableWrapperRef: a.ref,
    tableRef: n,
    getTableHeight: g
  };
}, z = {
  primary: "#1890ff",
  secondary: "#f5f7fa",
  accent: "#e6f7ff",
  border: "#e8e8e8"
}, Ct = ({
  totalCount: t,
  onSearch: e,
  actionButtons: i,
  ...n
}) => {
  var re, le;
  const a = B(null), { t: g } = V(), { useBreakpoint: s } = G, l = s(), { tableWrapperRef: o, tableRef: u, getTableHeight: b } = Ve(
    (re = n.scroll) == null ? void 0 : re.y,
    a,
    l
  ), f = n.columns || [], [h, T] = E(!1), [k, w] = E(""), {
    getColumnKey: C,
    getVisibleColumns: D,
    getEditingColumns: d,
    startEditing: y,
    applyChanges: v,
    cancelChanges: c,
    resetToDefault: m,
    moveColumn: p,
    toggleVisibility: M,
    setFixedStatus: _
  } = Ke(f);
  ne(() => {
    h && y();
  }, [h]);
  const pe = (R) => {
    T(R);
  }, xe = () => {
    v(), T(!1);
  }, ye = () => {
    c(), T(!1);
  }, Y = P(() => {
    const R = D(), A = new Map(f.map((S) => [C(S), S]));
    return R.map((S, W) => {
      const H = A.get(S.key);
      return H ? {
        ...H,
        fixed: l.xs ? !1 : S.fixed,
        title: /* @__PURE__ */ r(Ge, { title: H.title, columnKey: S.key, index: W, moveColumn: p }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: l.xs ? "normal" : "nowrap",
            padding: l.xs ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [f, D, l]), be = P(() => {
    const R = d(), A = new Map(f.map((S) => [C(S), S]));
    return R.map((S) => {
      var W, H;
      return {
        key: S.key,
        visible: S.visible,
        fixed: S.fixed,
        title: ((H = (W = A.get(S.key)) == null ? void 0 : W.title) == null ? void 0 : H.toString()) || S.key
      };
    });
  }, [f, d]), ve = /* @__PURE__ */ r(
    Ze,
    {
      columns: be,
      moveColumn: p,
      toggleVisibility: M,
      setFixedStatus: _,
      resetToDefault: m,
      onCancel: ye,
      onApply: xe
    }
  );
  return /* @__PURE__ */ r(Oe, { backend: Ne, children: /* @__PURE__ */ x("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ x(
      "div",
      {
        ref: a,
        style: {
          marginBottom: "16px",
          display: "flex",
          flexDirection: l.xs ? "column" : "row",
          justifyContent: "space-between",
          alignItems: l.xs ? "stretch" : "center",
          background: z.secondary,
          padding: l.xs ? "12px 12px" : "12px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          gap: l.xs ? "12px" : "0"
        },
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              style: {
                position: "relative",
                width: l.xs ? "100%" : "320px"
              },
              children: /* @__PURE__ */ r(
                Z,
                {
                  placeholder: g("global.labels.search"),
                  allowClear: !0,
                  prefix: /* @__PURE__ */ r(te, { style: { color: z.primary, fontSize: "16px" } }),
                  style: {
                    borderRadius: "6px",
                    padding: "8px 12px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
                    border: `1px solid ${z.border}`,
                    width: "100%"
                  },
                  onChange: (R) => {
                    const A = R.target.value;
                    w(A), clearTimeout(window.searchTimeout), window.searchTimeout = setTimeout(() => {
                      e && e(A);
                    }, 300);
                  },
                  value: k
                }
              )
            }
          ),
          /* @__PURE__ */ x(
            K,
            {
              size: l.xs ? "small" : "middle",
              direction: l.xs ? "vertical" : "horizontal",
              style: {
                width: l.xs ? "100%" : "auto",
                justifyContent: "flex-end",
                display: "flex"
              },
              children: [
                /* @__PURE__ */ r(ee, { title: g("global.labels.customizeTableColumns"), children: /* @__PURE__ */ r(
                  De,
                  {
                    open: h,
                    onOpenChange: pe,
                    overlay: ve,
                    trigger: ["click"],
                    children: /* @__PURE__ */ r(
                      I,
                      {
                        icon: l.xs ? /* @__PURE__ */ r(ue, {}) : /* @__PURE__ */ r(Fe, {}),
                        style: {
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          backgroundColor: h ? z.accent : "white",
                          borderColor: h ? z.primary : z.border,
                          color: h ? z.primary : "inherit",
                          boxShadow: h ? `0 0 0 2px ${z.accent}` : "none",
                          padding: l.xs ? "6px 12px" : "6px 16px",
                          height: "auto",
                          width: l.xs ? "100%" : "auto",
                          justifyContent: l.xs ? "center" : "flex-start"
                        },
                        children: g("global.btns.columns")
                      }
                    )
                  }
                ) }),
                i
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r("div", { style: { height: "100%", width: "100%" }, ref: o, children: /* @__PURE__ */ r(
      Ie,
      {
        ...n,
        columns: Y,
        virtual: n.virtual ?? !0,
        ref: u,
        pagination: {
          position: ["bottomCenter"],
          total: t ?? 0,
          defaultPageSize: $e,
          showSizeChanger: !1,
          size: l.xs ? "small" : "default",
          ...n.pagination || {}
        },
        className: `w-full h-full ${n.className || ""}`,
        scroll: {
          x: (le = n.scroll) != null && le.x ? n.scroll.x : ((Y == null ? void 0 : Y.length) ?? 0) * (l.xs ? 150 : 200),
          y: b()
        },
        rowKey: (R) => R.id,
        size: l.xs ? "small" : "middle"
      }
    ) })
  ] }) });
}, he = "calc(100dvh - 300px)", Ue = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: he }
}, wt = {
  size: "small",
  pagination: !1
}, St = (t, e) => {
  const n = `flex h-full min-h-0 flex-col ${(e == null ? void 0 : e.gap) ?? "gap-6"}`;
  return t ? n : `${n} overflow-hidden`;
}, Tt = (t, e) => {
  const i = he;
  return t && e != null && e > 0 ? { x: e, y: i } : { ...Ue.scroll };
}, Dt = ({
  children: t,
  grow: e = !0,
  className: i
}) => /* @__PURE__ */ r(
  "div",
  {
    className: ["min-h-0 w-full", e ? "flex-1" : "", i ?? ""].filter(Boolean).join(" "),
    children: t
  }
), me = ({
  setSelectedKeys: t,
  selectedKeys: e,
  confirm: i,
  clearFilters: n
}) => /* @__PURE__ */ x("div", { style: { padding: 8 }, children: [
  /* @__PURE__ */ r(
    Z,
    {
      placeholder: "Search...",
      value: e[0],
      onChange: (a) => t(a.target.value ? [a.target.value] : []),
      onPressEnter: () => i(),
      style: { marginBottom: 8, display: "block" }
    }
  ),
  /* @__PURE__ */ x(K, { children: [
    /* @__PURE__ */ r(I, { type: "primary", onClick: () => i(), size: "small", style: { width: 90 }, children: "OK" }),
    /* @__PURE__ */ r(
      I,
      {
        onClick: () => {
          n == null || n(), i();
        },
        size: "small",
        style: { width: 90 },
        children: "Reset"
      }
    )
  ] })
] }), It = (t) => ({
  filterDropdown: me,
  filterIcon: (e) => /* @__PURE__ */ r(te, { style: { color: e ? "var(--color-brand-primary)" : void 0 } }),
  onFilter: (e, i) => String(i[t] ?? "").toLowerCase().includes(String(e).toLowerCase())
}), kt = (t) => ({
  filterDropdown: me,
  filterIcon: (e) => /* @__PURE__ */ r(te, { style: { color: e ? "var(--color-brand-primary)" : void 0 } }),
  onFilter: (e, i) => {
    const n = String(e).toLowerCase();
    return t.some(
      (a) => String(i[a] ?? "").toLowerCase().includes(n)
    );
  }
}), Mt = (t, e, i) => ({
  filters: Object.values(t).map((n) => ({
    text: e(n),
    value: n
  })),
  onFilter: (n, a) => a[i] === n
}), Rt = (t, e, i) => ({
  filters: [
    { text: e, value: !0 },
    { text: i, value: !1 }
  ],
  onFilter: (n, a) => a[t] === n
}), zt = ({
  onCancel: t,
  onFormSubmit: e,
  open: i,
  children: n,
  title: a,
  width: g = "50%",
  footer: s,
  loading: l = !1,
  btns: o
}) => {
  var f, h;
  const { t: u } = V(), b = /* @__PURE__ */ x(Q, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ r(I, { disabled: l, onClick: () => t(), type: "default", children: ((f = o == null ? void 0 : o.cancel) == null ? void 0 : f.label) ?? u("global.btns.cancelChanges") }),
    /* @__PURE__ */ r(I, { disabled: l, onClick: e, block: !1, type: "primary", loading: l, children: ((h = o == null ? void 0 : o.save) == null ? void 0 : h.label) ?? u("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ r(
    ce,
    {
      centered: !0,
      maskClosable: !1,
      width: g,
      onCancel: t,
      open: i,
      footer: s ?? b,
      title: !!a && /* @__PURE__ */ r(Q, { justify: "start", align: "middle", children: /* @__PURE__ */ r(O.Title, { level: 2, children: a }) }),
      children: /* @__PURE__ */ r(ke, { spinning: l, style: { maxHeight: "100%" }, children: n })
    }
  );
}, Xe = () => {
  const t = G.useBreakpoint(), e = !t.md, i = !!t.md && !t.lg, n = !t.lg;
  return {
    screens: t,
    isMobile: e,
    isTablet: i,
    isCompact: n
  };
}, Je = "mobile-fullscreen-modal", Ft = ({
  splitFooterButtonsOnMobile: t = !0,
  rootClassName: e,
  width: i,
  style: n,
  styles: a,
  okButtonProps: g,
  cancelButtonProps: s,
  ...l
}) => {
  const { isMobile: o } = Xe(), u = [e, o ? Je : ""].filter(Boolean).join(" "), b = o ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...n
  } : n, f = o && t ? {
    ...g,
    style: { flex: 1, ...(g == null ? void 0 : g.style) ?? {} }
  } : g, h = o && t ? {
    ...s,
    style: { flex: 1, ...(s == null ? void 0 : s.style) ?? {} }
  } : s;
  return /* @__PURE__ */ r(
    ce,
    {
      ...l,
      rootClassName: u || void 0,
      width: o ? "100%" : i,
      style: b,
      styles: a,
      okButtonProps: f,
      cancelButtonProps: h
    }
  );
}, Et = ({ title: t, filters: e, actions: i }) => {
  const a = !G.useBreakpoint().md;
  return /* @__PURE__ */ x(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: a ? "flex-start" : "center",
        flexDirection: a ? "column" : "row",
        gap: a ? 8 : 0,
        marginBottom: 12
      },
      children: [
        /* @__PURE__ */ r(O.Title, { level: 5, style: { margin: 0 }, children: t }),
        e || i ? /* @__PURE__ */ x(K, { size: 8, wrap: !0, style: { width: a ? "100%" : void 0 }, children: [
          e,
          i
        ] }) : null
      ]
    }
  );
}, Ot = ({
  avatar: t,
  title: e,
  subtitle: i,
  meta: n,
  rightContent: a,
  brandPrimary: g = "#ED1C24",
  cardGradient: s = "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
}) => {
  const l = G.useBreakpoint(), o = !l.md, u = !l.lg;
  return /* @__PURE__ */ r(
    F,
    {
      style: { flexShrink: 0 },
      styles: {
        body: {
          background: s,
          borderRadius: "var(--radius-lg)",
          padding: o ? "16px 16px" : "28px 32px"
        }
      },
      children: /* @__PURE__ */ x(
        "div",
        {
          style: {
            display: "flex",
            alignItems: u ? "flex-start" : "center",
            gap: u ? 12 : 20,
            flexWrap: u ? "wrap" : "nowrap"
          },
          children: [
            t && /* @__PURE__ */ r(
              Me,
              {
                size: o ? 52 : 72,
                style: {
                  background: g,
                  fontSize: o ? 16 : 24,
                  fontWeight: 700,
                  flexShrink: 0
                },
                children: t
              }
            ),
            /* @__PURE__ */ x("div", { style: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ r(O.Title, { level: u ? 4 : 3, style: { color: "#ffffff", margin: 0 }, children: e }),
              i && /* @__PURE__ */ r(
                O.Text,
                {
                  style: {
                    color: "rgba(255,255,255,0.55)",
                    fontSize: u ? 12 : 13
                  },
                  children: i
                }
              ),
              n && /* @__PURE__ */ r("div", { style: { marginTop: 4 }, children: n })
            ] }),
            a ? /* @__PURE__ */ r(
              "div",
              {
                style: {
                  marginLeft: u ? 0 : "auto",
                  display: "flex",
                  alignItems: "center",
                  width: u ? "100%" : "auto",
                  justifyContent: u ? "flex-start" : "flex-end"
                },
                children: a
              }
            ) : null
          ]
        }
      )
    }
  );
}, { Text: Qe } = O, Nt = ({ label: t, children: e, style: i }) => /* @__PURE__ */ x(F, { size: "small", styles: { body: { padding: "16px 20px" } }, style: i, children: [
  /* @__PURE__ */ r(Qe, { type: "secondary", style: { fontSize: 12, display: "block", marginBottom: 6 }, children: t }),
  e
] }), At = () => /* @__PURE__ */ r(F, { variant: "borderless", children: /* @__PURE__ */ r(j, {}) }), Ht = ({ left: t, right: e }) => /* @__PURE__ */ x("div", { className: "flex items-stretch gap-3 w-full", children: [
  /* @__PURE__ */ r("div", { className: "flex-1 flex justify-center", children: t }),
  /* @__PURE__ */ r(
    "div",
    {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--color-border-light)"
      }
    }
  ),
  /* @__PURE__ */ r("div", { className: "flex-1 flex justify-center", children: e })
] }), jt = ({ cards: t = 4, variant: e = "user" }) => e === "project" ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(
    j,
    {
      active: !0,
      title: { width: "30%" },
      paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
    }
  ) }),
  /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(j, { active: !0, paragraph: { rows: 4 } }) })
] }) : /* @__PURE__ */ x("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(
    j,
    {
      avatar: { size: 72, shape: "circle" },
      active: !0,
      paragraph: { rows: 2, width: ["40%", "25%"] },
      title: { width: "30%" }
    }
  ) }),
  /* @__PURE__ */ r(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${t}, 1fr)`,
        gap: 12
      },
      children: [...Array(t)].map((i, n) => /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(j, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, n))
    }
  ),
  /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(j, { active: !0, paragraph: { rows: 4 } }) })
] }), Lt = ({
  width: t = 400,
  height: e = 200,
  onSign: i,
  disabled: n = !1,
  clearLabel: a = "Clear",
  confirmLabel: g = "Confirm"
}) => {
  const s = B(null), [l, o] = E(!1), [u, b] = E(!1), f = ae(() => {
    const d = s.current;
    return d ? d.getContext("2d") : null;
  }, []), h = ae(() => {
    const d = f(), y = s.current;
    !d || !y || (d.clearRect(0, 0, y.width, y.height), b(!1));
  }, [f]);
  ne(() => {
    const d = f();
    d && (d.strokeStyle = "#000", d.lineWidth = 2, d.lineCap = "round", d.lineJoin = "round");
  }, [f]);
  const T = (d) => {
    const y = s.current;
    if (!y) return null;
    const v = y.getBoundingClientRect(), c = y.width / v.width, m = y.height / v.height;
    if ("touches" in d) {
      const p = d.touches[0];
      return p ? {
        x: (p.clientX - v.left) * c,
        y: (p.clientY - v.top) * m
      } : null;
    }
    return {
      x: (d.clientX - v.left) * c,
      y: (d.clientY - v.top) * m
    };
  }, k = (d) => {
    if (n) return;
    const y = f(), v = T(d);
    !y || !v || (y.beginPath(), y.moveTo(v.x, v.y), o(!0));
  }, w = (d) => {
    if (!l || n) return;
    const y = f(), v = T(d);
    !y || !v || (y.lineTo(v.x, v.y), y.stroke(), b(!0));
  }, C = () => {
    o(!1);
  }, D = () => {
    const d = s.current;
    !d || !u || i(d.toDataURL("image/png"));
  };
  return /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ r(
      "canvas",
      {
        ref: s,
        width: t,
        height: e,
        style: {
          border: "1px solid #d9d9d9",
          borderRadius: 8,
          cursor: n ? "default" : "crosshair",
          touchAction: "none",
          width: "100%",
          maxWidth: t,
          height: "auto",
          aspectRatio: `${t} / ${e}`
        },
        onMouseDown: k,
        onMouseMove: w,
        onMouseUp: C,
        onMouseLeave: C,
        onTouchStart: k,
        onTouchMove: w,
        onTouchEnd: C
      }
    ),
    !n && /* @__PURE__ */ x(K, { children: [
      /* @__PURE__ */ r(I, { size: "small", icon: /* @__PURE__ */ r(Ee, {}), onClick: h, disabled: !u, children: a }),
      /* @__PURE__ */ r(I, { size: "small", type: "primary", onClick: D, disabled: !u, children: g })
    ] })
  ] });
}, { Text: se } = O, $t = ({ value: t, label: e = "Primary key" }) => t ? /* @__PURE__ */ x(
  "div",
  {
    style: {
      background: "var(--color-highlight-bg, #f6f8fa)",
      border: "1px solid var(--color-highlight-border, #e1e4e8)",
      borderRadius: 8,
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      gap: 20
    },
    children: [
      /* @__PURE__ */ r(
        se,
        {
          style: {
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-highlight-text, #586069)",
            textTransform: "uppercase",
            letterSpacing: 1.5,
            flexShrink: 0
          },
          children: e
        }
      ),
      /* @__PURE__ */ r(
        se,
        {
          copyable: { tooltips: ["Copy", "Copied!"] },
          style: {
            fontFamily: "monospace",
            fontSize: 15,
            fontWeight: 700,
            color: "var(--color-text-primary, #24292e)"
          },
          children: t
        }
      )
    ]
  }
) : null, _t = {
  mobileMax: "md",
  compactMax: "lg"
}, Bt = "mobile-fullscreen-modal", Yt = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, Wt = {
  success: "#52c41a",
  warning: "#fa8c16",
  error: "#f5222d",
  info: "#1677ff",
  textPrimary: "var(--color-text-primary)",
  textSecondary: "var(--color-text-secondary)",
  textMuted: "var(--color-text-muted)",
  textInverse: "var(--color-text-inverse)",
  bgPrimary: "var(--color-bg-primary)",
  bgSecondary: "var(--color-bg-secondary)",
  bgElevated: "var(--color-bg-elevated)",
  border: "var(--color-border)",
  borderLight: "var(--color-border-light)",
  headerBg: "var(--color-header-bg)",
  headerGradient: "var(--color-header-gradient)",
  cardGradient: "var(--color-card-gradient)"
}, qt = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, Zt = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Gt = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32
}, Kt = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
};
export {
  zt as BaseEditModal,
  Ze as ColumnManager,
  wt as DETAIL_TABLE_PROPS,
  q as DRAG_TYPE,
  pt as DateFormItem,
  jt as DetailSkeleton,
  Ge as DraggableHeader,
  qe as DraggableMenuItem,
  vt as FormItemWrapper,
  Ft as FullscreenMobileModal,
  Ot as HeroHeaderCard,
  ht as InputFormItem,
  he as LIST_TABLE_BODY_MAX_Y,
  Ue as LIST_TABLE_PROPS,
  Dt as ListPageTableArea,
  Bt as MOBILE_FULLSCREEN_MODAL_CLASS,
  Ct as MainTable,
  Ht as MobileActionSplitRow,
  xt as NumberFormItem,
  $t as PrimaryKey,
  _t as RESPONSIVE_BREAKPOINTS,
  Et as SectionHeader,
  mt as SelectFormItem,
  Lt as SignatureCanvas,
  At as SkeletonCard,
  Nt as StatCard,
  bt as SwitchFormItem,
  yt as TextAreaFormItem,
  me as TextFilterDropdown,
  Rt as booleanFilterColumnProps,
  Yt as brand,
  Wt as colors,
  He as dateFormat,
  dt as dateFormatISO,
  je as dateTimeFormat,
  ct as dateTimeFormatWithoutSeconds,
  We as datesToDayjs,
  $e as defaultTablePageSize,
  gt as dropdownItemsMaxTake,
  Mt as enumFilterColumnProps,
  qt as fontSize,
  Zt as fontWeight,
  $ as getRules,
  Le as isoDateFormatRegex,
  St as listPageRootClassName,
  Tt as listTableScroll,
  ft as objectToFormData,
  ut as passwordRegex,
  Be as phoneFormatRegex,
  Kt as radius,
  Gt as spacing,
  It as textSearchColumnProps,
  kt as textSearchMultiFieldProps,
  _e as uriRegex,
  Ke as useColumnManager,
  Xe as useResponsive,
  Ve as useTableFullHeightCalculator
};
