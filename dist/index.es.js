import { jsx as n, jsxs as m } from "react/jsx-runtime";
import { Form as L, Input as te, Select as ke, DatePicker as De, InputNumber as ze, Switch as fe, TimePicker as Re, Checkbox as Me, Row as N, Col as re, Grid as Fe, Typography as $, Card as F, Skeleton as A, Tooltip as oe, Button as M, Badge as X, Divider as Ae, Space as H, Dropdown as $e, Table as Ee, Modal as ae, Spin as Le, Breadcrumb as Oe, Empty as ue, Descriptions as Be } from "antd";
import me from "dayjs";
import { format as ne } from "react-string-format";
import { useTranslation as O } from "react-i18next";
import { useRef as G, useMemo as J, useState as B, useEffect as Q, useCallback as P, Fragment as je } from "react";
import { MenuOutlined as pe, PushpinOutlined as _e, UndoOutlined as He, SearchOutlined as ce, TableOutlined as Ye, ExclamationCircleOutlined as We, ArrowLeftOutlined as Ve, ClearOutlined as qe } from "@ant-design/icons";
import { useDrop as ye, useDrag as be, DndProvider as Ne } from "react-dnd";
import { HTML5Backend as Ge } from "react-dnd-html5-backend";
import { useResizeDetector as Ze } from "react-resize-detector";
const Ke = "DD.MM.YYYY", Ue = "DD.MM.YYYY HH:mm:ss", Lt = "DD.MM.YYYY HH:mm", Ot = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", Xe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, Bt = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", Je = 50, Qe = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", Pe = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, jt = 2147483646, _t = (e, t, i) => {
  const r = new FormData();
  function l(o, c) {
    if (!s(c))
      if (c = c || "", o instanceof File)
        r.append(c, o);
      else if (o instanceof me)
        o && r.append(c, o.toISOString());
      else if (Array.isArray(o))
        for (let a = 0; a < o.length; a++)
          l(o[a], c + "[" + a + "]");
      else if (typeof o == "object" && o)
        for (const a in o)
          o.hasOwnProperty(a) && (c === "" ? l(o[a], a) : l(o[a], c + "." + a));
      else
        o !== null && typeof o < "u" && r.append(c, o);
  }
  function s(o) {
    return Array.isArray(i) && i.some(function(c) {
      return c === o;
    });
  }
  return l(e, t), r;
}, j = (e, t, i) => {
  var o;
  if (!e) return [];
  const { t: r } = O(), l = (o = e.label) == null ? void 0 : o.toString(), s = [
    {
      required: e.required,
      message: l ? `${e.label ?? i} ${r("global.validations.input.isRequiredField")}` : r("global.validations.input.common")
    }
  ];
  return t === "email" && s.push({
    type: t,
    message: ne(r("global.validations.input.incorrectFormat"), l ?? r("global.validations.input.field"))
  }), t === "url" && s.push({
    pattern: new RegExp(Qe),
    message: ne(r("global.validations.input.incorrectFormat"), l ?? r("global.validations.input.field"))
  }), t === "phone" && s.push({
    pattern: new RegExp(Pe),
    message: ne(r("global.validations.input.incorrectFormat"), l ?? r("global.validations.input.field"))
  }), s ?? e.rules ?? [];
}, et = (e) => e && typeof e == "string" && Xe.test(e), tt = (e) => {
  const t = { ...e };
  if (t == null || typeof t != "object")
    return t;
  for (const i of Object.keys(t)) {
    const r = t[i];
    et(r) ? t[i] = me(r) : typeof r == "object" && tt(r);
  }
  return t;
}, Ht = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t, e == null ? void 0 : e.type), children: /* @__PURE__ */ n(te, { ...e }) }), Yt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(
  ke,
  {
    showSearch: !0,
    filterOption: (i, r) => String((r == null ? void 0 : r.label) ?? (r == null ? void 0 : r.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
      i.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    ),
    ...e
  }
) }), Wt = ({ formProps: e, elementProps: t }) => /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), children: /* @__PURE__ */ n(
  De,
  {
    ...t,
    format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? Ue : Ke,
    className: "w-full"
  }
) }), Vt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(ze, { ...e, className: "w-full" }) }), qt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(te.TextArea, { ...e }) }), Nt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), valuePropName: "checked", children: /* @__PURE__ */ n(fe, { ...e }) }), Gt = ({ formProps: e, elementProps: t }) => /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), children: /* @__PURE__ */ n(Re, { ...t, className: "w-full" }) }), Zt = ({ formProps: e, elementProps: t, children: i }) => /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), valuePropName: "checked", children: /* @__PURE__ */ n(Me, { ...t, children: i }) }), Kt = L.Item, Ut = ({ firstItem: e, secondItem: t, style: i, gutter: r = 24 }) => /* @__PURE__ */ m(N, { gutter: r, style: i, children: [
  /* @__PURE__ */ n(re, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(re, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), Z = () => {
  const e = Fe.useBreakpoint(), t = !e.md, i = !!e.md && !e.lg, r = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: i,
    isCompact: r
  };
}, { Title: nt, Text: rt } = $, Xt = ({
  title: e,
  subtitle: t,
  children: i,
  columns: r = 2,
  loading: l = !1
}) => {
  const { isMobile: s } = Z();
  return /* @__PURE__ */ m(F, { style: { marginBottom: 16 }, children: [
    /* @__PURE__ */ m("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ n(nt, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(rt, { type: "secondary", style: { display: "block", marginTop: 4 }, children: t })
    ] }),
    l ? /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(N, { gutter: 24, children: (s ? 1 : r) === 1 ? /* @__PURE__ */ n(re, { span: 24, children: i }) : i })
  ] });
}, ee = "DraggableColumn", w = {
  primary: "var(--color-brand-primary, var(--ant-color-primary, #1890ff))",
  secondary: "var(--color-bg-secondary, #f5f7fa)",
  accent: "var(--color-bg-elevated, #e6f7ff)",
  border: "var(--color-border, #e8e8e8)",
  success: "var(--color-success, #52c41a)",
  muted: "var(--color-text-muted, #8c8c8c)"
}, lt = 44, it = ({
  columnKey: e,
  index: t,
  isVisible: i,
  fixed: r,
  title: l,
  moveColumn: s,
  toggleVisibility: o,
  setFixedStatus: c
}) => {
  const a = G(null), { t: u } = O(), [, h] = ye({
    accept: ee,
    hover(k, S) {
      if (!a.current) return;
      const D = k.index, p = t;
      if (D === p) return;
      const b = a.current.getBoundingClientRect(), g = (b.bottom - b.top) / 2, y = S.getClientOffset();
      if (!y) return;
      const x = y.y - b.top;
      D < p && x < g || D > p && x > g || (s(D, p), k.index = p);
    }
  }), [{ isDragging: d }, f] = be({
    type: ee,
    item: { index: t, columnKey: e },
    collect: (k) => ({
      isDragging: k.isDragging()
    })
  });
  f(h(a));
  const C = () => r === "left" ? w.primary : r === "right" ? w.success : w.muted, T = (k) => {
    k.stopPropagation();
    let S = !1;
    r === !1 ? S = "left" : r === "left" && (S = "right"), c(e, S);
  }, I = () => u(r === "left" ? "global.labels.fixedLeft" : r === "right" ? "global.labels.fixedRight" : "global.labels.pinColumn");
  return /* @__PURE__ */ m(
    "div",
    {
      ref: a,
      style: {
        opacity: d ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: `1px solid ${w.border}`,
        height: lt,
        backgroundColor: d ? w.secondary : t % 2 === 0 ? "#ffffff" : w.secondary,
        transition: "all 0.2s",
        position: "relative"
      },
      children: [
        i && /* @__PURE__ */ n(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              backgroundColor: r ? C() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          pe,
          {
            style: {
              marginRight: 12,
              cursor: "grab",
              color: w.muted,
              fontSize: 14
            }
          }
        ),
        /* @__PURE__ */ m(
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
              /* @__PURE__ */ m(
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
                    r && /* @__PURE__ */ n(
                      "span",
                      {
                        style: {
                          marginRight: 6,
                          fontSize: 12,
                          padding: "1px 4px",
                          background: r === "left" ? w.accent : "#f6ffed",
                          color: r === "left" ? w.primary : w.success,
                          borderRadius: 4,
                          flexShrink: 0
                        },
                        children: u(r === "left" ? "global.labels.left" : "global.labels.right")
                      }
                    ),
                    /* @__PURE__ */ n(
                      "span",
                      {
                        style: {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: l
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(oe, { title: I(), children: /* @__PURE__ */ n(
                  M,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      _e,
                      {
                        style: {
                          color: C(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: T,
                    style: { marginRight: 4, padding: "0 8px" }
                  }
                ) }),
                /* @__PURE__ */ n(fe, { checked: i, size: "small", onChange: () => o(e) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, ot = ({
  columns: e,
  moveColumn: t,
  toggleVisibility: i,
  setFixedStatus: r,
  resetToDefault: l,
  onCancel: s,
  onApply: o
}) => {
  const c = e.filter((f) => f.visible).length, a = e.length, { t: u } = O(), h = e.filter((f) => f.fixed === "left").length, d = e.filter((f) => f.fixed === "right").length;
  return /* @__PURE__ */ m("div", { className: "bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ m(
      "div",
      {
        style: { background: w.secondary },
        className: "p-4 font-bold border-b flex justify-between items-center",
        children: [
          /* @__PURE__ */ n($.Title, { level: 5, style: { margin: 0 }, children: u("global.labels.customizeTableColumns") }),
          /* @__PURE__ */ n(oe, { title: u("global.btns.reset"), children: /* @__PURE__ */ n(M, { type: "text", icon: /* @__PURE__ */ n(He, {}), onClick: l, style: { color: w.primary } }) })
        ]
      }
    ),
    /* @__PURE__ */ m("div", { className: "px-3 py-2 flex justify-between border-b", style: { background: w.secondary }, children: [
      /* @__PURE__ */ m("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n(
          X,
          {
            count: c,
            color: w.primary,
            size: "small",
            overflowCount: 999,
            style: { marginRight: 8 }
          }
        ),
        /* @__PURE__ */ n($.Text, { type: "secondary", className: "text-xs", children: u("global.texts.columnsVisible", { count: c, total: a }) })
      ] }),
      (h > 0 || d > 0) && /* @__PURE__ */ m("div", { className: "flex items-center", children: [
        h > 0 && /* @__PURE__ */ n(X, { count: h, size: "small", color: w.primary, style: { marginRight: 4 } }),
        d > 0 && /* @__PURE__ */ n(X, { count: d, size: "small", color: w.success })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "overflow-auto flex-grow", children: e.map((f, C) => /* @__PURE__ */ n(
      it,
      {
        columnKey: f.key,
        index: C,
        isVisible: f.visible,
        fixed: f.fixed,
        title: f.title,
        moveColumn: t,
        toggleVisibility: i,
        setFixedStatus: r
      },
      f.key
    )) }),
    /* @__PURE__ */ n(Ae, { className: "my-0" }),
    /* @__PURE__ */ m("div", { className: "py-3 px-4 flex justify-end gap-2", style: { background: w.secondary }, children: [
      /* @__PURE__ */ n(M, { block: !0, size: "middle", onClick: s, children: u("global.btns.cancel") }),
      /* @__PURE__ */ n(M, { block: !0, type: "primary", size: "middle", onClick: o, children: u("global.btns.apply") })
    ] })
  ] });
}, at = ({ title: e, columnKey: t, index: i, moveColumn: r }) => {
  const l = G(null), [, s] = ye({
    accept: ee,
    hover(a) {
      if (!l.current) return;
      const u = a.index, h = i;
      u !== h && (r(u, h), a.index = h);
    }
  }), [{ isDragging: o }, c] = be({
    type: ee,
    item: { index: i, columnKey: t },
    collect: (a) => ({
      isDragging: a.isDragging()
    })
  });
  return c(s(l)), /* @__PURE__ */ n(
    "div",
    {
      ref: l,
      style: {
        opacity: o ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center"
      },
      children: typeof e == "string" || typeof e == "number" ? e : String(e ?? "")
    }
  );
};
function ct(e) {
  const t = (g) => g.key || g.dataIndex, i = J(() => e.map(t), [e]), r = () => e.reduce((g, y, x) => {
    const v = t(y);
    return {
      ...g,
      [v]: {
        key: v,
        visible: !0,
        fixed: y.fixed ?? !1,
        originalIndex: x
      }
    };
  }, {}), [l, s] = B(() => r()), [o, c] = B(() => r()), [a, u] = B(() => i), [h, d] = B(() => i);
  Q(() => {
    const g = r(), y = e.map(t);
    s(g), c(g), u(y), d(y);
  }, [e]);
  const f = P(() => {
    c({ ...l }), d([...a]);
  }, [l, a]);
  return {
    getColumnKey: t,
    getVisibleColumns: () => a.filter((g) => {
      var y;
      return (y = l[g]) == null ? void 0 : y.visible;
    }).map((g) => {
      var y;
      return {
        key: g,
        fixed: ((y = l[g]) == null ? void 0 : y.fixed) || !1
      };
    }),
    getEditingColumns: () => h.map((g) => {
      var y, x;
      return {
        key: g,
        visible: ((y = o[g]) == null ? void 0 : y.visible) || !1,
        fixed: ((x = o[g]) == null ? void 0 : x.fixed) || !1
      };
    }),
    startEditing: f,
    applyChanges: () => {
      s(o), u(h);
    },
    cancelChanges: () => {
      c({ ...l }), d([...a]);
    },
    resetToDefault: () => {
      c(r()), d([...i]);
    },
    moveColumn: (g, y) => {
      const x = [...h], v = x[g];
      x.splice(g, 1), x.splice(y, 0, v), d(x);
    },
    toggleVisibility: (g) => {
      const y = Object.values(o).filter((x) => x.visible).length;
      o[g].visible && y <= 1 || c((x) => ({
        ...x,
        [g]: {
          ...x[g],
          visible: !x[g].visible
        }
      }));
    },
    setFixedStatus: (g, y) => {
      c((x) => ({
        ...x,
        [g]: {
          ...x[g],
          fixed: y
        }
      }));
    }
  };
}
const st = (e, t, i) => {
  const r = G(null), l = Ze({
    refreshMode: "debounce",
    onResize: () => s(),
    refreshRate: 1
  }), s = () => {
    var I, k, S, D, p, b, g, y, x;
    const o = (I = l.ref.current) == null ? void 0 : I.querySelector("div.ant-table-wrapper"), c = ((S = (k = l.ref.current) == null ? void 0 : k.querySelector("thead.ant-table-thead")) == null ? void 0 : S.clientHeight) ?? 0, a = 8;
    if (e) {
      const v = (D = l.ref.current) == null ? void 0 : D.querySelector("div.ant-table-placeholder");
      v == null || v.setAttribute(
        "style",
        `min-height: ${+e + c - a}px; max-height: ${+e + c - a}px`
      );
      const E = (p = l.ref.current) == null ? void 0 : p.querySelector("div.ant-table-container");
      return E == null || E.setAttribute(
        "style",
        `min-height: ${+e + c - a}px; max-height: ${+e + c - a}px`
      ), e;
    }
    const u = ((g = (b = l.ref.current) == null ? void 0 : b.querySelector("div.ant-table-footer")) == null ? void 0 : g.clientHeight) ?? 0, h = i ? 24 : 40, d = ((y = l.ref.current) == null ? void 0 : y.clientHeight) ?? 0, f = ((x = t.current) == null ? void 0 : x.clientHeight) ?? 0, T = d - c - u - f - a - 16 - h;
    return o && o.setAttribute("style", `max-height:${T + c}px;height: 100%`), T;
  };
  return {
    tableWrapperRef: l.ref,
    tableRef: r,
    getTableHeight: s
  };
}, dt = ({
  headerRef: e,
  isMobile: t,
  searchLabel: i,
  columnsLabel: r,
  customizeColumnsTooltip: l,
  onSearchInputChange: s,
  searchText: o = "",
  columnMenuOpen: c,
  onColumnMenuOpenChange: a,
  columnManagerPanel: u,
  actionButtons: h
}) => {
  const d = !!s;
  return /* @__PURE__ */ m(
    "div",
    {
      ref: e,
      style: {
        marginBottom: 16,
        display: "flex",
        flexDirection: t ? "column" : "row",
        justifyContent: "space-between",
        alignItems: t ? "stretch" : "center",
        background: w.secondary,
        padding: t ? "12px 12px" : "12px 16px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: t ? 12 : 0
      },
      children: [
        d && /* @__PURE__ */ n("div", { style: { position: "relative", width: t ? "100%" : 320 }, children: /* @__PURE__ */ n(
          te,
          {
            placeholder: i,
            allowClear: !0,
            prefix: /* @__PURE__ */ n(ce, { style: { color: w.primary, fontSize: 16 } }),
            style: {
              borderRadius: 6,
              padding: "8px 12px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${w.border}`,
              width: "100%"
            },
            onChange: s,
            value: o
          }
        ) }),
        /* @__PURE__ */ m(
          H,
          {
            size: t ? "small" : "middle",
            direction: t ? "vertical" : "horizontal",
            style: {
              width: t ? "100%" : "auto",
              justifyContent: "flex-end",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ n(oe, { title: l, children: /* @__PURE__ */ n(
                $e,
                {
                  open: c,
                  onOpenChange: a,
                  dropdownRender: () => u,
                  trigger: ["click"],
                  children: /* @__PURE__ */ n(
                    M,
                    {
                      icon: t ? /* @__PURE__ */ n(pe, {}) : /* @__PURE__ */ n(Ye, {}),
                      style: {
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        backgroundColor: c ? w.accent : "white",
                        borderColor: c ? w.primary : w.border,
                        color: c ? w.primary : "inherit",
                        boxShadow: c ? `0 0 0 2px ${w.accent}` : "none",
                        padding: t ? "6px 12px" : "6px 16px",
                        height: "auto",
                        width: t ? "100%" : "auto",
                        justifyContent: t ? "center" : "flex-start"
                      },
                      children: r
                    }
                  )
                }
              ) }),
              h
            ]
          }
        )
      ]
    }
  );
}, Jt = ({
  totalCount: e,
  onSearch: t,
  actionButtons: i,
  searchDebounceMs: r = 300,
  ...l
}) => {
  var se, de;
  const s = G(null), o = G(null), { t: c } = O(), { isMobile: a } = Z(), { tableWrapperRef: u, tableRef: h, getTableHeight: d } = st(
    (se = l.scroll) == null ? void 0 : se.y,
    s,
    a
  ), f = l.columns || [], [C, T] = B(!1), [I, k] = B(""), {
    getColumnKey: S,
    getVisibleColumns: D,
    getEditingColumns: p,
    startEditing: b,
    applyChanges: g,
    cancelChanges: y,
    resetToDefault: x,
    moveColumn: v,
    toggleVisibility: E,
    setFixedStatus: Y
  } = ct(f);
  Q(() => {
    C && b();
  }, [C]), Q(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const we = P(
    (_) => {
      const W = _.target.value;
      k(W), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        t == null || t(W);
      }, r);
    },
    [t, r]
  ), Se = () => {
    g(), T(!1);
  }, Te = () => {
    y(), T(!1);
  }, K = J(() => {
    const _ = D(), W = new Map(f.map((z) => [S(z), z]));
    return _.map((z, U) => {
      const V = W.get(z.key);
      return V ? {
        ...V,
        fixed: a ? !1 : z.fixed,
        title: /* @__PURE__ */ n(at, { title: V.title, columnKey: z.key, index: U, moveColumn: v }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: a ? "normal" : "nowrap",
            padding: a ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [f, D, S, a, v]), Ie = J(() => {
    const _ = p(), W = new Map(f.map((z) => [S(z), z]));
    return _.map((z) => {
      var U, V;
      return {
        key: z.key,
        visible: z.visible,
        fixed: z.fixed,
        title: ((V = (U = W.get(z.key)) == null ? void 0 : U.title) == null ? void 0 : V.toString()) || z.key
      };
    });
  }, [f, p, S]);
  return /* @__PURE__ */ n(Ne, { backend: Ge, children: /* @__PURE__ */ m("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ n(
      dt,
      {
        headerRef: s,
        isMobile: a,
        searchLabel: c("global.labels.search"),
        columnsLabel: c("global.btns.columns"),
        customizeColumnsTooltip: c("global.labels.customizeTableColumns"),
        onSearchInputChange: t ? we : void 0,
        searchText: I,
        columnMenuOpen: C,
        onColumnMenuOpenChange: T,
        columnManagerPanel: /* @__PURE__ */ n(
          ot,
          {
            columns: Ie,
            moveColumn: v,
            toggleVisibility: E,
            setFixedStatus: Y,
            resetToDefault: x,
            onCancel: Te,
            onApply: Se
          }
        ),
        actionButtons: i
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: u, children: /* @__PURE__ */ n(
      Ee,
      {
        ...l,
        columns: K,
        virtual: l.virtual ?? !0,
        ref: h,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: Je,
          showSizeChanger: !1,
          size: a ? "small" : "default",
          ...l.pagination || {}
        },
        className: `w-full h-full ${l.className || ""}`,
        scroll: {
          x: ((de = l.scroll) == null ? void 0 : de.x) ?? ((K == null ? void 0 : K.length) ?? 0) * (a ? 150 : 200),
          y: d()
        },
        rowKey: (_) => _.id,
        size: a ? "small" : "middle"
      }
    ) })
  ] }) });
}, xe = "calc(100dvh - 300px)", ut = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: xe }
}, Qt = {
  size: "small",
  pagination: !1
}, Pt = (e, t) => {
  const r = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? r : `${r} overflow-hidden`;
}, en = (e, t) => {
  const i = xe;
  return e && t != null && t > 0 ? { x: t, y: i } : { ...ut.scroll };
}, tn = ({
  children: e,
  grow: t = !0,
  className: i
}) => /* @__PURE__ */ n("div", { className: ["min-h-0 w-full", t ? "flex-1" : "", i ?? ""].filter(Boolean).join(" "), children: e }), ve = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: i,
  clearFilters: r,
  placeholder: l
}) => {
  const { t: s } = O();
  return /* @__PURE__ */ m("div", { style: { padding: 8 }, children: [
    /* @__PURE__ */ n(
      te,
      {
        placeholder: l ?? s("global.labels.search"),
        value: t[0],
        onChange: (o) => e(o.target.value ? [o.target.value] : []),
        onPressEnter: () => i(),
        style: { marginBottom: 8, display: "block" }
      }
    ),
    /* @__PURE__ */ m(H, { children: [
      /* @__PURE__ */ n(M, { type: "primary", onClick: () => i(), size: "small", style: { width: 90 }, children: s("global.btns.ok") }),
      /* @__PURE__ */ n(
        M,
        {
          onClick: () => {
            r == null || r(), i();
          },
          size: "small",
          style: { width: 90 },
          children: s("global.btns.reset")
        }
      )
    ] })
  ] });
}, nn = (e, t = {}) => {
  const { mode: i = "client", placeholder: r } = t;
  return {
    filterDropdown: (l) => /* @__PURE__ */ n(ve, { ...l, placeholder: r }),
    filterIcon: (l) => /* @__PURE__ */ n(ce, { style: { color: l ? "var(--color-brand-primary)" : void 0 } }),
    ...i === "client" && {
      onFilter: (l, s) => String(s[e] ?? "").toLowerCase().includes(String(l).toLowerCase())
    }
  };
}, rn = (e, t = {}) => {
  const { mode: i = "client", placeholder: r } = t;
  return {
    filterDropdown: (l) => /* @__PURE__ */ n(ve, { ...l, placeholder: r }),
    filterIcon: (l) => /* @__PURE__ */ n(ce, { style: { color: l ? "var(--color-brand-primary)" : void 0 } }),
    ...i === "client" && {
      onFilter: (l, s) => {
        const o = String(l).toLowerCase();
        return e.some(
          (c) => String(s[c] ?? "").toLowerCase().includes(o)
        );
      }
    }
  };
}, ln = (e, t, i, r = {}) => {
  const { mode: l = "client" } = r;
  return {
    filters: Object.values(e).map((s) => ({
      text: t(s),
      value: s
    })),
    ...l === "client" && {
      onFilter: (s, o) => o[i] === s
    }
  };
}, on = (e, t, i, r = {}) => {
  const { mode: l = "client" } = r;
  return {
    filters: [
      { text: t, value: !0 },
      { text: i, value: !1 }
    ],
    ...l === "client" && {
      onFilter: (s, o) => o[e] === s
    }
  };
}, an = ({
  onCancel: e,
  onFormSubmit: t,
  open: i,
  children: r,
  title: l,
  width: s = "50%",
  footer: o,
  loading: c = !1,
  btns: a
}) => {
  var d, f;
  const { t: u } = O(), h = /* @__PURE__ */ m(N, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(M, { disabled: c, onClick: () => e(), type: "default", children: ((d = a == null ? void 0 : a.cancel) == null ? void 0 : d.label) ?? u("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(M, { disabled: c, onClick: t, block: !1, type: "primary", loading: c, children: ((f = a == null ? void 0 : a.save) == null ? void 0 : f.label) ?? u("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    ae,
    {
      centered: !0,
      maskClosable: !1,
      width: s,
      onCancel: e,
      open: i,
      footer: o ?? h,
      title: !!l && /* @__PURE__ */ n(N, { justify: "start", align: "middle", children: /* @__PURE__ */ n($.Title, { level: 2, children: l }) }),
      children: /* @__PURE__ */ n(Le, { spinning: c, style: { maxHeight: "100%" }, children: r })
    }
  );
}, gt = "mobile-fullscreen-modal", cn = ({
  splitFooterButtonsOnMobile: e = !0,
  rootClassName: t,
  width: i,
  style: r,
  styles: l,
  okButtonProps: s,
  cancelButtonProps: o,
  ...c
}) => {
  const { isMobile: a } = Z(), u = [t, a ? gt : ""].filter(Boolean).join(" "), h = a ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...r
  } : r, d = a && e ? {
    ...s,
    style: { flex: 1, ...(s == null ? void 0 : s.style) ?? {} }
  } : s, f = a && e ? {
    ...o,
    style: { flex: 1, ...(o == null ? void 0 : o.style) ?? {} }
  } : o;
  return /* @__PURE__ */ n(
    ae,
    {
      ...c,
      rootClassName: u || void 0,
      width: a ? "100%" : i,
      style: h,
      styles: l,
      okButtonProps: d,
      cancelButtonProps: f
    }
  );
}, { Text: ht } = $, ft = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, sn = ({
  open: e,
  onConfirm: t,
  onCancel: i,
  title: r,
  description: l,
  confirmLabel: s,
  cancelLabel: o,
  variant: c = "danger",
  loading: a = !1,
  icon: u,
  children: h
}) => {
  const { t: d } = O();
  return /* @__PURE__ */ m(
    ae,
    {
      open: e,
      onCancel: i,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ m(N, { align: "middle", style: { gap: 8 }, children: [
        u ?? /* @__PURE__ */ n(We, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: r })
      ] }),
      footer: /* @__PURE__ */ m(N, { align: "middle", justify: "end", style: { gap: 8 }, children: [
        /* @__PURE__ */ n(M, { disabled: a, onClick: i, children: o ?? d("global.btns.cancel") }),
        /* @__PURE__ */ n(M, { type: "primary", ...ft[c], loading: a, onClick: t, children: s ?? d("global.btns.confirm") })
      ] }),
      children: [
        l && /* @__PURE__ */ n(ht, { type: "secondary", children: l }),
        h
      ]
    }
  );
}, { Title: mt, Text: pt } = $, Ce = ({
  title: e,
  variant: t = "page",
  subtitle: i,
  breadcrumb: r,
  breadcrumbExtra: l,
  onBack: s,
  filters: o,
  actions: c
}) => {
  const { isMobile: a } = Z(), u = t === "page", h = u ? 4 : 5, d = u ? 16 : 12, f = u ? 12 : 8, C = !!(o || c);
  return /* @__PURE__ */ m("div", { style: { marginBottom: d }, children: [
    u && (r || l) && /* @__PURE__ */ m(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          marginBottom: 8,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ n("div", { style: { flex: "1 1 auto", minWidth: 0 }, children: r ? /* @__PURE__ */ n(Oe, { ...r }) : null }),
          l ? /* @__PURE__ */ n(H, { size: 8, wrap: !0, style: { flexShrink: 0 }, children: l }) : null
        ]
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: a ? "flex-start" : "center",
          flexDirection: a ? "column" : "row",
          gap: a ? f : 0
        },
        children: [
          /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            u && s && /* @__PURE__ */ n(M, { type: "text", icon: /* @__PURE__ */ n(Ve, {}), onClick: s, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ n(mt, { level: h, style: { margin: 0 }, children: e }),
              i && /* @__PURE__ */ n(pt, { type: "secondary", style: { marginTop: 2, display: "block" }, children: i })
            ] })
          ] }),
          C && /* @__PURE__ */ m(H, { size: 8, wrap: !0, style: { width: a ? "100%" : void 0 }, children: [
            o,
            c
          ] })
        ]
      }
    )
  ] });
}, dn = (e) => /* @__PURE__ */ n(Ce, { variant: "section", ...e }), un = (e) => /* @__PURE__ */ n(Ce, { variant: "page", ...e }), { Text: yt } = $, gn = ({ label: e, children: t, style: i }) => /* @__PURE__ */ m(F, { size: "small", styles: { body: { padding: "16px 20px" } }, style: i, children: [
  /* @__PURE__ */ n(yt, { type: "secondary", style: { fontSize: 12, display: "block", marginBottom: 6 }, children: e }),
  t
] }), hn = () => /* @__PURE__ */ n(F, { variant: "borderless", children: /* @__PURE__ */ n(A, {}) }), q = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), fn = ({
  variant: e = "hero",
  cards: t = 4,
  rows: i,
  inputRows: r = 5,
  showAvatar: l = !0,
  gap: s = 16,
  className: o,
  style: c,
  footer: a
}) => {
  const u = s, h = i ?? 6, d = i ?? 5;
  return e === "stacked" ? /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(
      A,
      {
        active: !0,
        title: { width: "30%" },
        paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
      }
    ) }),
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: 4 } }) }),
    a
  ] }) : e === "content" ? /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(A, { active: !0, title: !0, paragraph: { rows: h } }) }),
    a
  ] }) : e === "fields" ? /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(H, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: r }).map((f, C) => /* @__PURE__ */ n(A.Input, { active: !0, size: "large", style: { width: C % 2 === 0 ? "100%" : "72%" } }, C)) }) }),
    a
  ] }) : e === "grid" ? /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: 12
        },
        children: [...Array(Math.max(1, t))].map((f, C) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, C))
      }
    ),
    a
  ] }) : e === "rows" ? /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(H, { direction: "vertical", style: { width: "100%" }, size: 12, children: Array.from({ length: d }).map((f, C) => /* @__PURE__ */ n(A, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, C)) }) }),
    a
  ] }) : /* @__PURE__ */ m("div", { className: o, style: { ...q(u), ...c }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(
      A,
      {
        avatar: l ? { size: 72, shape: "circle" } : !1,
        active: !0,
        paragraph: { rows: 2, width: ["40%", "25%"] },
        title: { width: "30%" }
      }
    ) }),
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: 12
        },
        children: [...Array(Math.max(1, t))].map((f, C) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, C))
      }
    ),
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: 4 } }) }),
    a
  ] });
}, { Text: ge } = $, mn = ({ icon: e, title: t, description: i, action: r }) => /* @__PURE__ */ m(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      textAlign: "center"
    },
    children: [
      e ?? /* @__PURE__ */ n(ue, { image: ue.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(ge, { strong: !0, style: { fontSize: 16, marginTop: e ? 16 : 0, display: "block" }, children: t }),
      i && /* @__PURE__ */ n(ge, { type: "secondary", style: { marginTop: 8, display: "block", maxWidth: 400 }, children: i }),
      r && /* @__PURE__ */ n("div", { style: { marginTop: 16 }, children: r })
    ]
  }
), bt = (e) => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: e
}), pn = ({
  items: e,
  left: t,
  right: i,
  className: r,
  gap: l = 12,
  dividerColor: s = "var(--color-border-light, rgba(0,0,0,0.06))"
}) => {
  const o = e !== void 0 ? e : [t, i].filter((a) => a != null);
  return o.length === 0 ? null : /* @__PURE__ */ n("div", { className: r, style: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap: l
  }, children: o.map((a, u) => /* @__PURE__ */ m(je, { children: [
    u > 0 ? /* @__PURE__ */ n("div", { style: bt(s), "aria-hidden": !0 }) : null,
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: a
      }
    )
  ] }, u)) });
}, yn = ({
  width: e = 400,
  height: t = 200,
  onSign: i,
  disabled: r = !1,
  clearLabel: l,
  confirmLabel: s
}) => {
  const { t: o } = O(), c = G(null), [a, u] = B(!1), [h, d] = B(!1), f = P(() => {
    const p = c.current;
    return p ? p.getContext("2d") : null;
  }, []), C = P(() => {
    const p = f(), b = c.current;
    !p || !b || (p.clearRect(0, 0, b.width, b.height), d(!1));
  }, [f]);
  Q(() => {
    const p = f();
    if (!p) return;
    const b = getComputedStyle(c.current).getPropertyValue("--color-text-primary").trim();
    p.strokeStyle = b || "#000", p.lineWidth = 2, p.lineCap = "round", p.lineJoin = "round";
  }, [f]);
  const T = (p) => {
    const b = c.current;
    if (!b) return null;
    const g = b.getBoundingClientRect(), y = b.width / g.width, x = b.height / g.height;
    if ("touches" in p) {
      const v = p.touches[0];
      return v ? {
        x: (v.clientX - g.left) * y,
        y: (v.clientY - g.top) * x
      } : null;
    }
    return {
      x: (p.clientX - g.left) * y,
      y: (p.clientY - g.top) * x
    };
  }, I = (p) => {
    if (r) return;
    const b = f(), g = T(p);
    !b || !g || (b.beginPath(), b.moveTo(g.x, g.y), u(!0));
  }, k = (p) => {
    if (!a || r) return;
    const b = f(), g = T(p);
    !b || !g || (b.lineTo(g.x, g.y), b.stroke(), d(!0));
  }, S = () => {
    u(!1);
  }, D = () => {
    const p = c.current;
    !p || !h || i(p.toDataURL("image/png"));
  };
  return /* @__PURE__ */ m("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: c,
        width: e,
        height: t,
        style: {
          border: "1px solid var(--color-border, #d9d9d9)",
          borderRadius: 8,
          cursor: r ? "default" : "crosshair",
          touchAction: "none",
          width: "100%",
          maxWidth: e,
          height: "auto",
          aspectRatio: `${e} / ${t}`
        },
        onMouseDown: I,
        onMouseMove: k,
        onMouseUp: S,
        onMouseLeave: S,
        onTouchStart: I,
        onTouchMove: k,
        onTouchEnd: S
      }
    ),
    !r && /* @__PURE__ */ m(H, { children: [
      /* @__PURE__ */ n(M, { size: "small", icon: /* @__PURE__ */ n(qe, {}), onClick: C, disabled: !h, children: l ?? o("global.btns.clear") }),
      /* @__PURE__ */ n(M, { size: "small", type: "primary", onClick: D, disabled: !h, children: s ?? o("global.btns.confirm") })
    ] })
  ] });
}, { Text: he } = $, bn = ({ value: e, label: t, copyTooltip: i, copiedTooltip: r }) => {
  const { t: l } = O();
  return e ? /* @__PURE__ */ m(
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
        /* @__PURE__ */ n(
          he,
          {
            style: {
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-highlight-text, #586069)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              flexShrink: 0
            },
            children: t ?? l("global.labels.primaryKey")
          }
        ),
        /* @__PURE__ */ n(
          he,
          {
            copyable: {
              tooltips: [
                i ?? l("global.btns.copy"),
                r ?? l("global.btns.copied")
              ]
            },
            style: {
              fontFamily: "monospace",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--color-text-primary, #24292e)"
            },
            children: e
          }
        )
      ]
    }
  ) : null;
}, { Text: xt } = $, vt = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, xn = ({ status: e, label: t }) => /* @__PURE__ */ m("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 }, children: [
  /* @__PURE__ */ n(X, { color: vt[e] }),
  /* @__PURE__ */ n(xt, { children: t })
] }), vn = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, Cn = {
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
}, Ct = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, wn = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Sn = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32
}, Tn = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
}, le = (e) => !(e == null || typeof e == "string" && e.trim() === ""), wt = (e) => Array.isArray(e) ? e : Object.entries(e).map(([t, i]) => ({
  label: t === "" ? void 0 : t,
  value: i
})), ie = (e) => Array.isArray(e) ? e.length === 0 ? null : e.length === 1 ? e[0] : e.map((t, i) => /* @__PURE__ */ n("div", { children: t }, i)) : e, St = "entity-info-value-only", R = "ant-descriptions", Tt = ({
  items: e,
  labelStyle: t,
  contentStyle: i,
  labelClassName: r,
  contentClassName: l
}) => /* @__PURE__ */ n("div", { className: `${R}-view`, children: /* @__PURE__ */ n("table", { children: /* @__PURE__ */ n("tbody", { children: e.map((s, o) => le(s.label) ? /* @__PURE__ */ m("tr", { className: `${R}-row`, children: [
  /* @__PURE__ */ n("th", { className: `${R}-item-label ${r ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: t, children: s.label }) }),
  /* @__PURE__ */ n("td", { className: `${R}-item-content ${l ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: i, children: ie(s.value) }) })
] }, o) : /* @__PURE__ */ n("tr", { className: `${R}-row ${R}-row--value-only`, children: /* @__PURE__ */ n("td", { colSpan: 2, className: `${R}-item-content ${l ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: i, children: ie(s.value) }) }) }, o)) }) }) }), In = ({
  items: e,
  loading: t = !1,
  column: i,
  title: r,
  bordered: l = !1,
  layout: s,
  colon: o,
  extra: c,
  className: a,
  style: u,
  styles: h,
  classNames: d,
  rootClassName: f,
  id: C
}) => {
  const { isMobile: T } = Z(), I = wt(e), k = J(() => I.map((v, E) => {
    const Y = le(v.label);
    return {
      key: E,
      label: Y ? v.label : void 0,
      span: v.span,
      className: Y ? void 0 : St,
      children: ie(v.value)
    };
  }), [I]);
  if (t)
    return /* @__PURE__ */ n(A, { active: !0, paragraph: { rows: I.length }, title: !!r && { width: "30%" } });
  const S = i ?? (T ? 1 : 2), D = s ?? (T ? "vertical" : "horizontal"), p = {
    ...h,
    label: {
      fontSize: Ct.sm,
      ...h == null ? void 0 : h.label
    }
  }, b = ["entity-info", a].filter(Boolean).join(" "), g = I.some((v) => !le(v.label)), y = I.some((v) => v.span != null);
  if (l && D === "horizontal" && g && !y) {
    const v = T ? `${R}-small` : void 0, E = d == null ? void 0 : d.label, Y = d == null ? void 0 : d.content;
    return /* @__PURE__ */ m(
      "div",
      {
        id: C,
        className: [
          R,
          `${R}-bordered`,
          `${R}-horizontal`,
          "entity-info--bordered-native",
          v,
          b,
          f,
          d == null ? void 0 : d.root
        ].filter(Boolean).join(" "),
        style: { ...u, ...h == null ? void 0 : h.root },
        children: [
          (r || c) && /* @__PURE__ */ m(
            "div",
            {
              className: [`${R}-header`, d == null ? void 0 : d.header].filter(Boolean).join(" "),
              style: h == null ? void 0 : h.header,
              children: [
                r && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${R}-title`, d == null ? void 0 : d.title].filter(Boolean).join(" "),
                    style: h == null ? void 0 : h.title,
                    children: r
                  }
                ),
                c && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${R}-extra`, d == null ? void 0 : d.extra].filter(Boolean).join(" "),
                    style: h == null ? void 0 : h.extra,
                    children: c
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
            Tt,
            {
              items: I,
              labelStyle: p.label,
              contentStyle: p.content,
              labelClassName: E,
              contentClassName: Y
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ n(
    Be,
    {
      id: C,
      title: r,
      extra: c,
      column: S,
      bordered: l,
      layout: D,
      colon: o,
      className: b,
      rootClassName: f,
      style: u,
      styles: p,
      classNames: d,
      size: T ? "small" : "default",
      items: k
    }
  );
}, kn = {
  mobileMax: "md",
  compactMax: "lg"
}, Dn = "mobile-fullscreen-modal";
export {
  pn as ActionColumnRow,
  an as BaseModal,
  Zt as CheckboxFormItem,
  ot as ColumnManager,
  sn as ConfirmModal,
  fn as ContentLoader,
  mn as ContentState,
  Qt as DETAIL_TABLE_PROPS,
  ee as DRAG_TYPE,
  Wt as DateFormItem,
  at as DraggableHeader,
  it as DraggableMenuItem,
  In as EntityInfo,
  Kt as FormItem,
  Ut as FormItemWrapper,
  Xt as FormSection,
  cn as FullscreenMobileModal,
  Ht as InputFormItem,
  xe as LIST_TABLE_BODY_MAX_Y,
  ut as LIST_TABLE_PROPS,
  tn as ListPageTableArea,
  Dn as MOBILE_FULLSCREEN_MODAL_CLASS,
  Ce as MainHeader,
  Jt as MainTable,
  dt as MainTableToolbar,
  Vt as NumberFormItem,
  un as PageHeader,
  bn as PrimaryKey,
  kn as RESPONSIVE_BREAKPOINTS,
  dn as SectionHeader,
  Yt as SelectFormItem,
  yn as SignatureCanvas,
  hn as SkeletonCard,
  gn as StatCard,
  xn as StatusBadge,
  Nt as SwitchFormItem,
  qt as TextAreaFormItem,
  ve as TextFilterDropdown,
  Gt as TimePickerFormItem,
  on as booleanFilterColumnProps,
  vn as brand,
  Cn as colors,
  Ke as dateFormat,
  Ot as dateFormatISO,
  Ue as dateTimeFormat,
  Lt as dateTimeFormatWithoutSeconds,
  tt as datesToDayjs,
  Je as defaultTablePageSize,
  jt as dropdownItemsMaxTake,
  ln as enumFilterColumnProps,
  Ct as fontSize,
  wn as fontWeight,
  j as getRules,
  Xe as isoDateFormatRegex,
  Pt as listPageRootClassName,
  en as listTableScroll,
  _t as objectToFormData,
  Bt as passwordRegex,
  Pe as phoneFormatRegex,
  Tn as radius,
  Sn as spacing,
  nn as textSearchColumnProps,
  rn as textSearchMultiFieldProps,
  Qe as uriRegex,
  ct as useColumnManager,
  Z as useResponsive,
  st as useTableFullHeightCalculator
};
