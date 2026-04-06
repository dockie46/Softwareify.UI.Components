import { jsx as n, jsxs as p } from "react/jsx-runtime";
import { Form as L, Input as ne, Select as ke, DatePicker as De, InputNumber as ze, Switch as pe, TimePicker as Re, Checkbox as Me, Row as q, Col as le, Grid as Fe, Typography as E, Card as A, Skeleton as $, Tooltip as ae, Button as F, Badge as J, Divider as Ae, Space as _, Dropdown as $e, Table as Ee, Modal as ce, Spin as Le, Breadcrumb as Oe, Empty as ge, Descriptions as Be } from "antd";
import { useTranslation as O } from "react-i18next";
import { format as re } from "react-string-format";
import { useRef as G, useMemo as Q, useState as B, useEffect as P, useCallback as ee, Fragment as je } from "react";
import { MenuOutlined as me, PushpinOutlined as He, UndoOutlined as _e, SearchOutlined as se, TableOutlined as Ye, ExclamationCircleOutlined as We, ArrowLeftOutlined as Ne, ClearOutlined as Ve } from "@ant-design/icons";
import { useDrop as ye, useDrag as be, DndProvider as qe } from "react-dnd";
import { HTML5Backend as Ge } from "react-dnd-html5-backend";
import { useResizeDetector as Ze } from "react-resize-detector";
import xe from "dayjs";
const Ke = "DD.MM.YYYY", Ue = "DD.MM.YYYY HH:mm:ss", Ot = "DD.MM.YYYY HH:mm", Bt = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", Xe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, jt = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", Je = 50, Qe = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", Pe = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, Ht = 2147483646, j = (e, t, l) => {
  var o;
  const { t: r } = O();
  if (!e) return [];
  const i = (o = e.label) == null ? void 0 : o.toString(), s = [
    {
      required: e.required,
      message: i ? `${e.label ?? l} ${r("global.validations.input.isRequiredField")}` : r("global.validations.input.common")
    }
  ];
  return t === "email" && s.push({
    type: t,
    message: re(r("global.validations.input.incorrectFormat"), i ?? r("global.validations.input.field"))
  }), t === "url" && s.push({
    pattern: new RegExp(Qe),
    message: re(r("global.validations.input.incorrectFormat"), i ?? r("global.validations.input.field"))
  }), t === "phone" && s.push({
    pattern: new RegExp(Pe),
    message: re(r("global.validations.input.incorrectFormat"), i ?? r("global.validations.input.field"))
  }), s ?? e.rules ?? [];
}, _t = ({ elementProps: e, formProps: t }) => {
  const l = j(t, e == null ? void 0 : e.type);
  return /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(ne, { ...e }) });
}, Yt = ({ elementProps: e, formProps: t }) => {
  const l = j(t);
  return /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(
    ke,
    {
      showSearch: !0,
      filterOption: (r, i) => String((i == null ? void 0 : i.label) ?? (i == null ? void 0 : i.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
        r.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      ),
      ...e
    }
  ) });
}, Wt = ({ formProps: e, elementProps: t }) => {
  const l = j(e);
  return /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(
    De,
    {
      ...t,
      format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? Ue : Ke,
      className: "w-full"
    }
  ) });
}, Nt = ({ elementProps: e, formProps: t }) => {
  const l = j(t);
  return /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(ze, { ...e, className: "w-full" }) });
}, Vt = ({ elementProps: e, formProps: t }) => {
  const l = j(t);
  return /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(ne.TextArea, { ...e }) });
}, qt = ({ elementProps: e, formProps: t }) => {
  const l = j(t);
  return /* @__PURE__ */ n(L.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, valuePropName: "checked", children: /* @__PURE__ */ n(pe, { ...e }) });
}, Gt = ({ formProps: e, elementProps: t }) => {
  const l = j(e);
  return /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(Re, { ...t, className: "w-full" }) });
}, Zt = ({ formProps: e, elementProps: t, children: l }) => {
  const r = j(e);
  return /* @__PURE__ */ n(L.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? r, valuePropName: "checked", children: /* @__PURE__ */ n(Me, { ...t, children: l }) });
}, Kt = L.Item, Ut = ({ firstItem: e, secondItem: t, style: l, gutter: r = 24 }) => /* @__PURE__ */ p(q, { gutter: r, style: l, children: [
  /* @__PURE__ */ n(le, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(le, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), K = () => {
  const e = Fe.useBreakpoint(), t = !e.md, l = !!e.md && !e.lg, r = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: l,
    isCompact: r
  };
}, { Title: et, Text: tt } = E, Xt = ({
  title: e,
  subtitle: t,
  children: l,
  columns: r = 2,
  loading: i = !1
}) => {
  const { isMobile: s } = K();
  return /* @__PURE__ */ p(A, { style: { marginBottom: 16 }, children: [
    /* @__PURE__ */ p("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ n(et, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(tt, { type: "secondary", style: { display: "block", marginTop: 4 }, children: t })
    ] }),
    i ? /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(q, { gutter: 24, children: (s ? 1 : r) === 1 ? /* @__PURE__ */ n(le, { span: 24, children: l }) : l })
  ] });
}, te = "DraggableColumn", C = {
  primary: "var(--color-brand-primary, var(--ant-color-primary, #1890ff))",
  secondary: "var(--color-bg-secondary, #f5f7fa)",
  accent: "var(--color-bg-elevated, #e6f7ff)",
  border: "var(--color-border, #e8e8e8)",
  success: "var(--color-success, #52c41a)",
  muted: "var(--color-text-muted, #8c8c8c)"
}, nt = 44, rt = ({
  columnKey: e,
  index: t,
  isVisible: l,
  fixed: r,
  title: i,
  moveColumn: s,
  toggleVisibility: o,
  setFixedStatus: c
}) => {
  const a = G(null), { t: u } = O(), [, h] = ye({
    accept: te,
    hover(I, w) {
      if (!a.current) return;
      const D = I.index, m = t;
      if (D === m) return;
      const b = a.current.getBoundingClientRect(), g = (b.bottom - b.top) / 2, y = w.getClientOffset();
      if (!y) return;
      const x = y.y - b.top;
      D < m && x < g || D > m && x > g || (s(D, m), I.index = m);
    }
  }), [{ isDragging: d }, f] = be({
    type: te,
    item: { index: t, columnKey: e },
    collect: (I) => ({
      isDragging: I.isDragging()
    })
  });
  f(h(a));
  const v = () => r === "left" ? C.primary : r === "right" ? C.success : C.muted, S = (I) => {
    I.stopPropagation();
    let w = !1;
    r === !1 ? w = "left" : r === "left" && (w = "right"), c(e, w);
  }, T = () => u(r === "left" ? "global.labels.fixedLeft" : r === "right" ? "global.labels.fixedRight" : "global.labels.pinColumn");
  return /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      style: {
        opacity: d ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: `1px solid ${C.border}`,
        height: nt,
        backgroundColor: d ? C.secondary : t % 2 === 0 ? "#ffffff" : C.secondary,
        transition: "all 0.2s",
        position: "relative"
      },
      children: [
        l && /* @__PURE__ */ n(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              backgroundColor: r ? v() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          me,
          {
            style: {
              marginRight: 12,
              cursor: "grab",
              color: C.muted,
              fontSize: 14
            }
          }
        ),
        /* @__PURE__ */ p(
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
              /* @__PURE__ */ p(
                "div",
                {
                  style: {
                    opacity: l ? 1 : 0.5,
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
                          background: r === "left" ? C.accent : "#f6ffed",
                          color: r === "left" ? C.primary : C.success,
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
                        children: i
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(ae, { title: T(), children: /* @__PURE__ */ n(
                  F,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      He,
                      {
                        style: {
                          color: v(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: S,
                    style: { marginRight: 4, padding: "0 8px" }
                  }
                ) }),
                /* @__PURE__ */ n(pe, { checked: l, size: "small", onChange: () => o(e) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, lt = ({
  columns: e,
  moveColumn: t,
  toggleVisibility: l,
  setFixedStatus: r,
  resetToDefault: i,
  onCancel: s,
  onApply: o
}) => {
  const c = e.filter((f) => f.visible).length, a = e.length, { t: u } = O(), h = e.filter((f) => f.fixed === "left").length, d = e.filter((f) => f.fixed === "right").length;
  return /* @__PURE__ */ p("div", { className: "bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ p(
      "div",
      {
        style: { background: C.secondary },
        className: "p-4 font-bold border-b flex justify-between items-center",
        children: [
          /* @__PURE__ */ n(E.Title, { level: 5, style: { margin: 0 }, children: u("global.labels.customizeTableColumns") }),
          /* @__PURE__ */ n(ae, { title: u("global.btns.reset"), children: /* @__PURE__ */ n(F, { type: "text", icon: /* @__PURE__ */ n(_e, {}), onClick: i, style: { color: C.primary } }) })
        ]
      }
    ),
    /* @__PURE__ */ p("div", { className: "px-3 py-2 flex justify-between border-b", style: { background: C.secondary }, children: [
      /* @__PURE__ */ p("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n(
          J,
          {
            count: c,
            color: C.primary,
            size: "small",
            overflowCount: 999,
            style: { marginRight: 8 }
          }
        ),
        /* @__PURE__ */ n(E.Text, { type: "secondary", className: "text-xs", children: u("global.texts.columnsVisible", { count: c, total: a }) })
      ] }),
      (h > 0 || d > 0) && /* @__PURE__ */ p("div", { className: "flex items-center", children: [
        h > 0 && /* @__PURE__ */ n(J, { count: h, size: "small", color: C.primary, style: { marginRight: 4 } }),
        d > 0 && /* @__PURE__ */ n(J, { count: d, size: "small", color: C.success })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "overflow-auto flex-grow", children: e.map((f, v) => /* @__PURE__ */ n(
      rt,
      {
        columnKey: f.key,
        index: v,
        isVisible: f.visible,
        fixed: f.fixed,
        title: f.title,
        moveColumn: t,
        toggleVisibility: l,
        setFixedStatus: r
      },
      f.key
    )) }),
    /* @__PURE__ */ n(Ae, { className: "my-0" }),
    /* @__PURE__ */ p("div", { className: "py-3 px-4 flex justify-end gap-2", style: { background: C.secondary }, children: [
      /* @__PURE__ */ n(F, { block: !0, size: "middle", onClick: s, children: u("global.btns.cancel") }),
      /* @__PURE__ */ n(F, { block: !0, type: "primary", size: "middle", onClick: o, children: u("global.btns.apply") })
    ] })
  ] });
}, it = ({ title: e, columnKey: t, index: l, moveColumn: r }) => {
  const i = G(null), [, s] = ye({
    accept: te,
    hover(a) {
      if (!i.current) return;
      const u = a.index, h = l;
      u !== h && (r(u, h), a.index = h);
    }
  }), [{ isDragging: o }, c] = be({
    type: te,
    item: { index: l, columnKey: t },
    collect: (a) => ({
      isDragging: a.isDragging()
    })
  });
  return c(s(i)), /* @__PURE__ */ n(
    "div",
    {
      ref: i,
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
function ot(e) {
  const t = (g) => g.key || g.dataIndex, l = Q(() => e.map(t), [e]), r = () => e.reduce((g, y, x) => {
    const k = t(y);
    return {
      ...g,
      [k]: {
        key: k,
        visible: !0,
        fixed: y.fixed ?? !1,
        originalIndex: x
      }
    };
  }, {}), [i, s] = B(() => r()), [o, c] = B(() => r()), [a, u] = B(() => l), [h, d] = B(() => l);
  P(() => {
    const g = r(), y = e.map(t);
    s(g), c(g), u(y), d(y);
  }, [e]);
  const f = ee(() => {
    c({ ...i }), d([...a]);
  }, [i, a]);
  return {
    getColumnKey: t,
    getVisibleColumns: () => a.filter((g) => {
      var y;
      return (y = i[g]) == null ? void 0 : y.visible;
    }).map((g) => {
      var y;
      return {
        key: g,
        fixed: ((y = i[g]) == null ? void 0 : y.fixed) || !1
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
      c({ ...i }), d([...a]);
    },
    resetToDefault: () => {
      c(r()), d([...l]);
    },
    moveColumn: (g, y) => {
      const x = [...h], k = x[g];
      x.splice(g, 1), x.splice(y, 0, k), d(x);
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
const at = (e, t, l) => {
  const r = G(null), i = Ze({
    refreshMode: "debounce",
    onResize: () => s(),
    refreshRate: 1
  }), s = () => {
    var T, I, w, D, m, b, g, y, x;
    const o = (T = i.ref.current) == null ? void 0 : T.querySelector("div.ant-table-wrapper"), c = ((w = (I = i.ref.current) == null ? void 0 : I.querySelector("thead.ant-table-thead")) == null ? void 0 : w.clientHeight) ?? 0, a = 8;
    if (e) {
      const k = (D = i.ref.current) == null ? void 0 : D.querySelector("div.ant-table-placeholder");
      k == null || k.setAttribute(
        "style",
        `min-height: ${+e + c - a}px; max-height: ${+e + c - a}px`
      );
      const z = (m = i.ref.current) == null ? void 0 : m.querySelector("div.ant-table-container");
      return z == null || z.setAttribute(
        "style",
        `min-height: ${+e + c - a}px; max-height: ${+e + c - a}px`
      ), e;
    }
    const u = ((g = (b = i.ref.current) == null ? void 0 : b.querySelector("div.ant-table-footer")) == null ? void 0 : g.clientHeight) ?? 0, h = l ? 24 : 40, d = ((y = i.ref.current) == null ? void 0 : y.clientHeight) ?? 0, f = ((x = t.current) == null ? void 0 : x.clientHeight) ?? 0, S = d - c - u - f - a - 16 - h;
    return o && o.setAttribute("style", `max-height:${S + c}px;height: 100%`), S;
  };
  return {
    tableWrapperRef: i.ref,
    tableRef: r,
    getTableHeight: s
  };
}, ct = ({
  headerRef: e,
  isMobile: t,
  searchLabel: l,
  columnsLabel: r,
  customizeColumnsTooltip: i,
  onSearchInputChange: s,
  searchText: o = "",
  columnMenuOpen: c,
  onColumnMenuOpenChange: a,
  columnManagerPanel: u,
  actionButtons: h
}) => {
  const d = !!s;
  return /* @__PURE__ */ p(
    "div",
    {
      ref: e,
      style: {
        marginBottom: 16,
        display: "flex",
        flexDirection: t ? "column" : "row",
        justifyContent: "space-between",
        alignItems: t ? "stretch" : "center",
        background: C.secondary,
        padding: t ? "12px 12px" : "12px 16px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: t ? 12 : 0
      },
      children: [
        d && /* @__PURE__ */ n("div", { style: { position: "relative", width: t ? "100%" : 320 }, children: /* @__PURE__ */ n(
          ne,
          {
            placeholder: l,
            allowClear: !0,
            prefix: /* @__PURE__ */ n(se, { style: { color: C.primary, fontSize: 16 } }),
            style: {
              borderRadius: 6,
              padding: "8px 12px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${C.border}`,
              width: "100%"
            },
            onChange: s,
            value: o
          }
        ) }),
        /* @__PURE__ */ p(
          _,
          {
            size: t ? "small" : "middle",
            direction: t ? "vertical" : "horizontal",
            style: {
              width: t ? "100%" : "auto",
              justifyContent: "flex-end",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ n(ae, { title: i, children: /* @__PURE__ */ n(
                $e,
                {
                  open: c,
                  onOpenChange: a,
                  dropdownRender: () => u,
                  trigger: ["click"],
                  children: /* @__PURE__ */ n(
                    F,
                    {
                      icon: t ? /* @__PURE__ */ n(me, {}) : /* @__PURE__ */ n(Ye, {}),
                      style: {
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        backgroundColor: c ? C.accent : "white",
                        borderColor: c ? C.primary : C.border,
                        color: c ? C.primary : "inherit",
                        boxShadow: c ? `0 0 0 2px ${C.accent}` : "none",
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
  actionButtons: l,
  searchDebounceMs: r = 300,
  ...i
}) => {
  var de, ue;
  const s = G(null), o = G(null), { t: c } = O(), { isMobile: a } = K(), { tableWrapperRef: u, tableRef: h, getTableHeight: d } = at(
    (de = i.scroll) == null ? void 0 : de.y,
    s,
    a
  ), f = i.columns || [], [v, S] = B(!1), [T, I] = B(""), {
    getColumnKey: w,
    getVisibleColumns: D,
    getEditingColumns: m,
    startEditing: b,
    applyChanges: g,
    cancelChanges: y,
    resetToDefault: x,
    moveColumn: k,
    toggleVisibility: z,
    setFixedStatus: Z
  } = ot(f);
  P(() => {
    v && b();
  }, [v]), P(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const Y = ee(
    (H) => {
      const W = H.target.value;
      I(W), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        t == null || t(W);
      }, r);
    },
    [t, r]
  ), Se = () => {
    g(), S(!1);
  }, Te = () => {
    y(), S(!1);
  }, U = Q(() => {
    const H = D(), W = new Map(f.map((R) => [w(R), R]));
    return H.map((R, X) => {
      const N = W.get(R.key);
      return N ? {
        ...N,
        fixed: a ? !1 : R.fixed,
        title: /* @__PURE__ */ n(it, { title: N.title, columnKey: R.key, index: X, moveColumn: k }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: a ? "normal" : "nowrap",
            padding: a ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [f, D, w, a, k]), Ie = Q(() => {
    const H = m(), W = new Map(f.map((R) => [w(R), R]));
    return H.map((R) => {
      var X, N;
      return {
        key: R.key,
        visible: R.visible,
        fixed: R.fixed,
        title: ((N = (X = W.get(R.key)) == null ? void 0 : X.title) == null ? void 0 : N.toString()) || R.key
      };
    });
  }, [f, m, w]);
  return /* @__PURE__ */ n(qe, { backend: Ge, children: /* @__PURE__ */ p("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ n(
      ct,
      {
        headerRef: s,
        isMobile: a,
        searchLabel: c("global.labels.search"),
        columnsLabel: c("global.btns.columns"),
        customizeColumnsTooltip: c("global.labels.customizeTableColumns"),
        onSearchInputChange: t ? Y : void 0,
        searchText: T,
        columnMenuOpen: v,
        onColumnMenuOpenChange: S,
        columnManagerPanel: /* @__PURE__ */ n(
          lt,
          {
            columns: Ie,
            moveColumn: k,
            toggleVisibility: z,
            setFixedStatus: Z,
            resetToDefault: x,
            onCancel: Te,
            onApply: Se
          }
        ),
        actionButtons: l
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: u, children: /* @__PURE__ */ n(
      Ee,
      {
        ...i,
        columns: U,
        virtual: i.virtual ?? !0,
        ref: h,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: Je,
          showSizeChanger: !1,
          size: a ? "small" : "default",
          ...i.pagination || {}
        },
        className: `w-full h-full ${i.className || ""}`,
        scroll: {
          x: ((ue = i.scroll) == null ? void 0 : ue.x) ?? ((U == null ? void 0 : U.length) ?? 0) * (a ? 150 : 200),
          y: d()
        },
        rowKey: (H) => H.id,
        size: a ? "small" : "middle"
      }
    ) })
  ] }) });
}, ve = "calc(100dvh - 300px)", st = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: ve }
}, Qt = {
  size: "small",
  pagination: !1
}, Pt = (e, t) => {
  const r = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? r : `${r} overflow-hidden`;
}, en = (e, t) => {
  const l = ve;
  return e && t != null && t > 0 ? { x: t, y: l } : { ...st.scroll };
}, tn = ({
  children: e,
  grow: t = !0,
  className: l
}) => /* @__PURE__ */ n("div", { className: ["min-h-0 w-full", t ? "flex-1" : "", l ?? ""].filter(Boolean).join(" "), children: e }), Ce = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: l,
  clearFilters: r,
  placeholder: i
}) => {
  const { t: s } = O();
  return /* @__PURE__ */ p("div", { style: { padding: 8 }, children: [
    /* @__PURE__ */ n(
      ne,
      {
        placeholder: i ?? s("global.labels.search"),
        value: t[0],
        onChange: (o) => e(o.target.value ? [o.target.value] : []),
        onPressEnter: () => l(),
        style: { marginBottom: 8, display: "block" }
      }
    ),
    /* @__PURE__ */ p(_, { children: [
      /* @__PURE__ */ n(F, { type: "primary", onClick: () => l(), size: "small", style: { width: 90 }, children: s("global.btns.ok") }),
      /* @__PURE__ */ n(
        F,
        {
          onClick: () => {
            r == null || r(), l();
          },
          size: "small",
          style: { width: 90 },
          children: s("global.btns.reset")
        }
      )
    ] })
  ] });
}, nn = (e, t = {}) => {
  const { mode: l = "client", placeholder: r } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n(Ce, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(se, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, s) => String(s[e] ?? "").toLowerCase().includes(String(i).toLowerCase())
    }
  };
}, rn = (e, t = {}) => {
  const { mode: l = "client", placeholder: r } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n(Ce, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(se, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, s) => {
        const o = String(i).toLowerCase();
        return e.some(
          (c) => String(s[c] ?? "").toLowerCase().includes(o)
        );
      }
    }
  };
}, ln = (e, t, l, r = {}) => {
  const { mode: i = "client" } = r;
  return {
    filters: Object.values(e).map((s) => ({
      text: t(s),
      value: s
    })),
    ...i === "client" && {
      onFilter: (s, o) => o[l] === s
    }
  };
}, on = (e, t, l, r = {}) => {
  const { mode: i = "client" } = r;
  return {
    filters: [
      { text: t, value: !0 },
      { text: l, value: !1 }
    ],
    ...i === "client" && {
      onFilter: (s, o) => o[e] === s
    }
  };
}, an = ({
  onCancel: e,
  onFormSubmit: t,
  open: l,
  children: r,
  title: i,
  width: s = "50%",
  footer: o,
  loading: c = !1,
  btns: a
}) => {
  var d, f;
  const { t: u } = O(), h = /* @__PURE__ */ p(q, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(F, { disabled: c, onClick: () => e(), type: "default", children: ((d = a == null ? void 0 : a.cancel) == null ? void 0 : d.label) ?? u("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(F, { disabled: c, onClick: t, block: !1, type: "primary", loading: c, children: ((f = a == null ? void 0 : a.save) == null ? void 0 : f.label) ?? u("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    ce,
    {
      centered: !0,
      maskClosable: !1,
      width: s,
      onCancel: e,
      open: l,
      footer: o ?? h,
      title: !!i && /* @__PURE__ */ n(q, { justify: "start", align: "middle", children: /* @__PURE__ */ n(E.Title, { level: 2, children: i }) }),
      children: /* @__PURE__ */ n(Le, { spinning: c, style: { maxHeight: "100%" }, children: r })
    }
  );
}, dt = "mobile-fullscreen-modal", cn = ({
  splitFooterButtonsOnMobile: e = !0,
  rootClassName: t,
  width: l,
  style: r,
  styles: i,
  okButtonProps: s,
  cancelButtonProps: o,
  ...c
}) => {
  const { isMobile: a } = K(), u = [t, a ? dt : ""].filter(Boolean).join(" "), h = a ? {
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
    ce,
    {
      ...c,
      rootClassName: u || void 0,
      width: a ? "100%" : l,
      style: h,
      styles: i,
      okButtonProps: d,
      cancelButtonProps: f
    }
  );
}, { Text: ut } = E, gt = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, sn = ({
  open: e,
  onConfirm: t,
  onCancel: l,
  title: r,
  description: i,
  confirmLabel: s,
  cancelLabel: o,
  variant: c = "danger",
  loading: a = !1,
  icon: u,
  children: h
}) => {
  const { t: d } = O();
  return /* @__PURE__ */ p(
    ce,
    {
      open: e,
      onCancel: l,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ p(q, { align: "middle", style: { gap: 8 }, children: [
        u ?? /* @__PURE__ */ n(We, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: r })
      ] }),
      footer: /* @__PURE__ */ p(q, { align: "middle", justify: "end", style: { gap: 8 }, children: [
        /* @__PURE__ */ n(F, { disabled: a, onClick: l, children: o ?? d("global.btns.cancel") }),
        /* @__PURE__ */ n(F, { type: "primary", ...gt[c], loading: a, onClick: t, children: s ?? d("global.btns.confirm") })
      ] }),
      children: [
        i && /* @__PURE__ */ n(ut, { type: "secondary", children: i }),
        h
      ]
    }
  );
}, { Title: ht, Text: ft } = E, we = ({
  title: e,
  variant: t = "page",
  subtitle: l,
  breadcrumb: r,
  breadcrumbExtra: i,
  onBack: s,
  filters: o,
  actions: c
}) => {
  const { isMobile: a } = K(), u = t === "page", h = u ? 4 : 5, d = u ? 16 : 12, f = u ? 12 : 8, v = !!(o || c);
  return /* @__PURE__ */ p("div", { style: { marginBottom: d }, children: [
    u && (r || i) && /* @__PURE__ */ p(
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
          i ? /* @__PURE__ */ n(_, { size: 8, wrap: !0, style: { flexShrink: 0 }, children: i }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
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
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            u && s && /* @__PURE__ */ n(F, { type: "text", icon: /* @__PURE__ */ n(Ne, {}), onClick: s, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ n(ht, { level: h, style: { margin: 0 }, children: e }),
              l && /* @__PURE__ */ n(ft, { type: "secondary", style: { marginTop: 2, display: "block" }, children: l })
            ] })
          ] }),
          v && /* @__PURE__ */ p(_, { size: 8, wrap: !0, style: { width: a ? "100%" : void 0 }, children: [
            o,
            c
          ] })
        ]
      }
    )
  ] });
}, dn = (e) => /* @__PURE__ */ n(we, { variant: "section", ...e }), un = (e) => /* @__PURE__ */ n(we, { variant: "page", ...e }), { Text: pt } = E, gn = ({ label: e, children: t, style: l }) => /* @__PURE__ */ p(A, { size: "small", styles: { body: { padding: "16px 20px" } }, style: l, children: [
  /* @__PURE__ */ n(pt, { type: "secondary", style: { fontSize: 12, display: "block", marginBottom: 6 }, children: e }),
  t
] }), hn = () => /* @__PURE__ */ n(A, { variant: "borderless", children: /* @__PURE__ */ n($, {}) }), V = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), fn = ({
  variant: e = "hero",
  cards: t = 4,
  rows: l,
  inputRows: r = 5,
  showAvatar: i = !0,
  gap: s = 16,
  className: o,
  style: c,
  footer: a
}) => {
  const u = s, h = l ?? 6, d = l ?? 5;
  return e === "stacked" ? /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n(
      $,
      {
        active: !0,
        title: { width: "30%" },
        paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
      }
    ) }),
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 4 } }) }),
    a
  ] }) : e === "content" ? /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n($, { active: !0, title: !0, paragraph: { rows: h } }) }),
    a
  ] }) : e === "fields" ? /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n(_, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: r }).map((f, v) => /* @__PURE__ */ n($.Input, { active: !0, size: "large", style: { width: v % 2 === 0 ? "100%" : "72%" } }, v)) }) }),
    a
  ] }) : e === "grid" ? /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: 12
        },
        children: [...Array(Math.max(1, t))].map((f, v) => /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, v))
      }
    ),
    a
  ] }) : e === "rows" ? /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n(_, { direction: "vertical", style: { width: "100%" }, size: 12, children: Array.from({ length: d }).map((f, v) => /* @__PURE__ */ n($, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, v)) }) }),
    a
  ] }) : /* @__PURE__ */ p("div", { className: o, style: { ...V(u), ...c }, children: [
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n(
      $,
      {
        avatar: i ? { size: 72, shape: "circle" } : !1,
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
        children: [...Array(Math.max(1, t))].map((f, v) => /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, v))
      }
    ),
    /* @__PURE__ */ n(A, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 4 } }) }),
    a
  ] });
}, { Text: he } = E, pn = ({ icon: e, title: t, description: l, action: r }) => /* @__PURE__ */ p(
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
      e ?? /* @__PURE__ */ n(ge, { image: ge.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(he, { strong: !0, style: { fontSize: 16, marginTop: e ? 16 : 0, display: "block" }, children: t }),
      l && /* @__PURE__ */ n(he, { type: "secondary", style: { marginTop: 8, display: "block", maxWidth: 400 }, children: l }),
      r && /* @__PURE__ */ n("div", { style: { marginTop: 16 }, children: r })
    ]
  }
), mt = (e) => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: e
}), mn = ({
  items: e,
  left: t,
  right: l,
  className: r,
  gap: i = 12,
  dividerColor: s = "var(--color-border-light, rgba(0,0,0,0.06))"
}) => {
  const o = e !== void 0 ? e : [t, l].filter((a) => a != null);
  return o.length === 0 ? null : /* @__PURE__ */ n("div", { className: r, style: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap: i
  }, children: o.map((a, u) => /* @__PURE__ */ p(je, { children: [
    u > 0 ? /* @__PURE__ */ n("div", { style: mt(s), "aria-hidden": !0 }) : null,
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
  onSign: l,
  disabled: r = !1,
  clearLabel: i,
  confirmLabel: s
}) => {
  const { t: o } = O(), c = G(null), [a, u] = B(!1), [h, d] = B(!1), f = ee(() => {
    const m = c.current;
    return m ? m.getContext("2d") : null;
  }, []), v = ee(() => {
    const m = f(), b = c.current;
    !m || !b || (m.clearRect(0, 0, b.width, b.height), d(!1));
  }, [f]);
  P(() => {
    const m = f();
    if (!m) return;
    const b = getComputedStyle(c.current).getPropertyValue("--color-text-primary").trim();
    m.strokeStyle = b || "#000", m.lineWidth = 2, m.lineCap = "round", m.lineJoin = "round";
  }, [f]);
  const S = (m) => {
    const b = c.current;
    if (!b) return null;
    const g = b.getBoundingClientRect(), y = b.width / g.width, x = b.height / g.height;
    if ("touches" in m) {
      const k = m.touches[0];
      return k ? {
        x: (k.clientX - g.left) * y,
        y: (k.clientY - g.top) * x
      } : null;
    }
    return {
      x: (m.clientX - g.left) * y,
      y: (m.clientY - g.top) * x
    };
  }, T = (m) => {
    if (r) return;
    const b = f(), g = S(m);
    !b || !g || (b.beginPath(), b.moveTo(g.x, g.y), u(!0));
  }, I = (m) => {
    if (!a || r) return;
    const b = f(), g = S(m);
    !b || !g || (b.lineTo(g.x, g.y), b.stroke(), d(!0));
  }, w = () => {
    u(!1);
  }, D = () => {
    const m = c.current;
    !m || !h || l(m.toDataURL("image/png"));
  };
  return /* @__PURE__ */ p("div", { className: "flex flex-col gap-2", children: [
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
        onMouseDown: T,
        onMouseMove: I,
        onMouseUp: w,
        onMouseLeave: w,
        onTouchStart: T,
        onTouchMove: I,
        onTouchEnd: w
      }
    ),
    !r && /* @__PURE__ */ p(_, { children: [
      /* @__PURE__ */ n(F, { size: "small", icon: /* @__PURE__ */ n(Ve, {}), onClick: v, disabled: !h, children: i ?? o("global.btns.clear") }),
      /* @__PURE__ */ n(F, { size: "small", type: "primary", onClick: D, disabled: !h, children: s ?? o("global.btns.confirm") })
    ] })
  ] });
}, { Text: fe } = E, bn = ({ value: e, label: t, copyTooltip: l, copiedTooltip: r }) => {
  const { t: i } = O();
  return e ? /* @__PURE__ */ p(
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
          fe,
          {
            style: {
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-highlight-text, #586069)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              flexShrink: 0
            },
            children: t ?? i("global.labels.primaryKey")
          }
        ),
        /* @__PURE__ */ n(
          fe,
          {
            copyable: {
              tooltips: [
                l ?? i("global.btns.copy"),
                r ?? i("global.btns.copied")
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
}, { Text: yt } = E, bt = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, xn = ({ status: e, label: t }) => /* @__PURE__ */ p("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 }, children: [
  /* @__PURE__ */ n(J, { color: bt[e] }),
  /* @__PURE__ */ n(yt, { children: t })
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
}, xt = {
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
}, ie = (e) => !(e == null || typeof e == "string" && e.trim() === ""), vt = (e) => Array.isArray(e) ? e : Object.entries(e).map(([t, l]) => ({
  label: t === "" ? void 0 : t,
  value: l
})), oe = (e) => Array.isArray(e) ? e.length === 0 ? null : e.length === 1 ? e[0] : e.map((t, l) => /* @__PURE__ */ n("div", { children: t }, l)) : e, Ct = "entity-info-value-only", M = "ant-descriptions", wt = (e, t) => {
  if (e == null) return t ? 1 : 2;
  if (typeof e == "number") return e;
}, St = ({
  items: e,
  labelStyle: t,
  contentStyle: l,
  labelClassName: r,
  contentClassName: i
}) => /* @__PURE__ */ n("div", { className: `${M}-view`, children: /* @__PURE__ */ n("table", { children: /* @__PURE__ */ n("tbody", { children: e.map((s, o) => ie(s.label) ? /* @__PURE__ */ p("tr", { className: `${M}-row`, children: [
  /* @__PURE__ */ n("th", { className: `${M}-item-label ${r ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: t, children: s.label }) }),
  /* @__PURE__ */ n("td", { className: `${M}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: oe(s.value) }) })
] }, o) : /* @__PURE__ */ n("tr", { className: `${M}-row ${M}-row--value-only`, children: /* @__PURE__ */ n("td", { colSpan: 2, className: `${M}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: oe(s.value) }) }) }, o)) }) }) }), In = ({
  items: e,
  loading: t = !1,
  column: l,
  title: r,
  bordered: i = !1,
  layout: s,
  colon: o,
  extra: c,
  className: a,
  style: u,
  styles: h,
  classNames: d,
  rootClassName: f,
  id: v
}) => {
  const { isMobile: S } = K(), T = vt(e), I = Q(() => T.map((z, Z) => {
    const Y = ie(z.label);
    return {
      key: Z,
      label: Y ? z.label : void 0,
      span: z.span,
      className: Y ? void 0 : Ct,
      children: oe(z.value)
    };
  }), [T]);
  if (t)
    return /* @__PURE__ */ n($, { active: !0, paragraph: { rows: T.length }, title: !!r && { width: "30%" } });
  const w = l ?? (S ? 1 : 2), D = s ?? (S ? "vertical" : "horizontal"), m = {
    ...h,
    label: {
      fontSize: xt.sm,
      ...h == null ? void 0 : h.label
    }
  }, b = ["entity-info", a].filter(Boolean).join(" "), g = T.some((z) => !ie(z.label)), y = T.some((z) => z.span != null), x = wt(l, S);
  if (i && D === "horizontal" && !y && (g || x === 1)) {
    const z = S ? `${M}-small` : void 0, Z = d == null ? void 0 : d.label, Y = d == null ? void 0 : d.content;
    return /* @__PURE__ */ p(
      "div",
      {
        id: v,
        className: [
          M,
          `${M}-bordered`,
          `${M}-horizontal`,
          "entity-info--bordered-native",
          z,
          b,
          f,
          d == null ? void 0 : d.root
        ].filter(Boolean).join(" "),
        style: { ...u, ...h == null ? void 0 : h.root },
        children: [
          (r || c) && /* @__PURE__ */ p(
            "div",
            {
              className: [`${M}-header`, d == null ? void 0 : d.header].filter(Boolean).join(" "),
              style: h == null ? void 0 : h.header,
              children: [
                r && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${M}-title`, d == null ? void 0 : d.title].filter(Boolean).join(" "),
                    style: h == null ? void 0 : h.title,
                    children: r
                  }
                ),
                c && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${M}-extra`, d == null ? void 0 : d.extra].filter(Boolean).join(" "),
                    style: h == null ? void 0 : h.extra,
                    children: c
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
            St,
            {
              items: T,
              labelStyle: m.label,
              contentStyle: m.content,
              labelClassName: Z,
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
      id: v,
      title: r,
      extra: c,
      column: w,
      bordered: i,
      layout: D,
      colon: o,
      className: b,
      rootClassName: f,
      style: u,
      styles: m,
      classNames: d,
      size: S ? "small" : "default",
      items: I
    }
  );
}, kn = {
  mobileMax: "md",
  compactMax: "lg"
}, Dn = "mobile-fullscreen-modal", zn = (e, t, l) => {
  const r = new FormData();
  function i(o, c) {
    if (!s(c))
      if (c = c || "", o instanceof File)
        r.append(c, o);
      else if (o instanceof xe)
        o && r.append(c, o.toISOString());
      else if (Array.isArray(o))
        for (let a = 0; a < o.length; a++)
          i(o[a], c + "[" + a + "]");
      else if (typeof o == "object" && o !== null)
        for (const a in o)
          Object.prototype.hasOwnProperty.call(o, a) && (c === "" ? i(o[a], a) : i(o[a], c + "." + a));
      else
        o !== null && typeof o < "u" && r.append(c, String(o));
  }
  function s(o) {
    return Array.isArray(l) && l.some(function(c) {
      return c === o;
    });
  }
  return i(e, t || ""), r;
}, Tt = (e) => typeof e == "string" && Xe.test(e), It = (e) => {
  if (e == null || typeof e != "object")
    return e;
  const t = { ...e };
  for (const l of Object.keys(t)) {
    const r = t[l];
    Tt(r) ? t[l] = xe(r) : typeof r == "object" && r !== null && (t[l] = It(r));
  }
  return t;
};
export {
  mn as ActionColumnRow,
  an as BaseModal,
  Zt as CheckboxFormItem,
  lt as ColumnManager,
  sn as ConfirmModal,
  fn as ContentLoader,
  pn as ContentState,
  Qt as DETAIL_TABLE_PROPS,
  te as DRAG_TYPE,
  Wt as DateFormItem,
  it as DraggableHeader,
  rt as DraggableMenuItem,
  In as EntityInfo,
  Kt as FormItem,
  Ut as FormItemWrapper,
  Xt as FormSection,
  cn as FullscreenMobileModal,
  _t as InputFormItem,
  ve as LIST_TABLE_BODY_MAX_Y,
  st as LIST_TABLE_PROPS,
  tn as ListPageTableArea,
  Dn as MOBILE_FULLSCREEN_MODAL_CLASS,
  we as MainHeader,
  Jt as MainTable,
  ct as MainTableToolbar,
  Nt as NumberFormItem,
  un as PageHeader,
  bn as PrimaryKey,
  kn as RESPONSIVE_BREAKPOINTS,
  dn as SectionHeader,
  Yt as SelectFormItem,
  yn as SignatureCanvas,
  hn as SkeletonCard,
  gn as StatCard,
  xn as StatusBadge,
  qt as SwitchFormItem,
  Vt as TextAreaFormItem,
  Ce as TextFilterDropdown,
  Gt as TimePickerFormItem,
  on as booleanFilterColumnProps,
  vn as brand,
  Cn as colors,
  Ke as dateFormat,
  Bt as dateFormatISO,
  Ue as dateTimeFormat,
  Ot as dateTimeFormatWithoutSeconds,
  It as datesToDayjs,
  Je as defaultTablePageSize,
  Ht as dropdownItemsMaxTake,
  ln as enumFilterColumnProps,
  xt as fontSize,
  wn as fontWeight,
  Xe as isoDateFormatRegex,
  Pt as listPageRootClassName,
  en as listTableScroll,
  zn as objectToFormData,
  jt as passwordRegex,
  Pe as phoneFormatRegex,
  Tn as radius,
  Sn as spacing,
  nn as textSearchColumnProps,
  rn as textSearchMultiFieldProps,
  Qe as uriRegex,
  ot as useColumnManager,
  j as useFormRules,
  K as useResponsive,
  at as useTableFullHeightCalculator
};
