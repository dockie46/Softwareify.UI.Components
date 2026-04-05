import { jsx as n, jsxs as g } from "react/jsx-runtime";
import { Form as A, Input as J, Select as Ie, DatePicker as De, InputNumber as ke, Switch as ue, TimePicker as Me, Checkbox as Re, Row as W, Col as P, Grid as ze, Typography as E, Card as z, Skeleton as F, Tooltip as ne, Button as k, Badge as K, Divider as Fe, Space as $, Dropdown as Ee, Table as Ae, Modal as le, Spin as Oe, Breadcrumb as Le, Empty as oe, Descriptions as se } from "antd";
import ge from "dayjs";
import { format as Q } from "react-string-format";
import { useTranslation as O } from "react-i18next";
import { MenuOutlined as he, PushpinOutlined as je, UndoOutlined as Ne, SearchOutlined as re, TableOutlined as $e, ExclamationCircleOutlined as He, ArrowLeftOutlined as _e, ClearOutlined as Be } from "@ant-design/icons";
import { useRef as q, useMemo as ee, useState as L, useEffect as U, useCallback as te } from "react";
import { useDrop as fe, useDrag as me, DndProvider as Ye } from "react-dnd";
import { HTML5Backend as We } from "react-dnd-html5-backend";
import { useResizeDetector as qe } from "react-resize-detector";
const Ve = "DD.MM.YYYY", Ge = "DD.MM.YYYY HH:mm:ss", Dt = "DD.MM.YYYY HH:mm", kt = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", Ze = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, Mt = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", Ke = 50, Ue = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", Xe = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, Rt = 2147483646, zt = (e, t, o) => {
  const l = new FormData();
  function i(a, s) {
    if (!c(s))
      if (s = s || "", a instanceof File)
        l.append(s, a);
      else if (a instanceof ge)
        a && l.append(s, a.toISOString());
      else if (Array.isArray(a))
        for (let r = 0; r < a.length; r++)
          i(a[r], s + "[" + r + "]");
      else if (typeof a == "object" && a)
        for (const r in a)
          a.hasOwnProperty(r) && (s === "" ? i(a[r], r) : i(a[r], s + "." + r));
      else
        a !== null && typeof a < "u" && l.append(s, a);
  }
  function c(a) {
    return Array.isArray(o) && o.some(function(s) {
      return s === a;
    });
  }
  return i(e, t), l;
}, j = (e, t, o) => {
  var a;
  if (!e) return [];
  const { t: l } = O(), i = (a = e.label) == null ? void 0 : a.toString(), c = [
    {
      required: e.required,
      message: i ? `${e.label ?? o} ${l("global.validations.input.isRequiredField")}` : l("global.validations.input.common")
    }
  ];
  return t === "email" && c.push({
    type: t,
    message: Q(l("global.validations.input.incorrectFormat"), i ?? l("global.validations.input.field"))
  }), t === "url" && c.push({
    pattern: new RegExp(Ue),
    message: Q(l("global.validations.input.incorrectFormat"), i ?? l("global.validations.input.field"))
  }), t === "phone" && c.push({
    pattern: new RegExp(Xe),
    message: Q(l("global.validations.input.incorrectFormat"), i ?? l("global.validations.input.field"))
  }), c ?? e.rules ?? [];
}, Je = (e) => e && typeof e == "string" && Ze.test(e), Qe = (e) => {
  const t = { ...e };
  if (t == null || typeof t != "object")
    return t;
  for (const o of Object.keys(t)) {
    const l = t[o];
    Je(l) ? t[o] = ge(l) : typeof l == "object" && Qe(l);
  }
  return t;
}, Ft = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(A.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t, e == null ? void 0 : e.type), children: /* @__PURE__ */ n(J, { ...e }) }), Et = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(A.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(
  Ie,
  {
    showSearch: !0,
    filterOption: (o, l) => String((l == null ? void 0 : l.label) ?? (l == null ? void 0 : l.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
      o.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    ),
    ...e
  }
) }), At = ({ formProps: e, elementProps: t }) => /* @__PURE__ */ n(A.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), children: /* @__PURE__ */ n(
  De,
  {
    ...t,
    format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? Ge : Ve,
    className: "w-full"
  }
) }), Ot = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(A.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(ke, { ...e, className: "w-full" }) }), Lt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(A.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), children: /* @__PURE__ */ n(J.TextArea, { ...e }) }), jt = ({ elementProps: e, formProps: t }) => /* @__PURE__ */ n(A.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? j(t), valuePropName: "checked", children: /* @__PURE__ */ n(ue, { ...e }) }), Nt = ({ formProps: e, elementProps: t }) => /* @__PURE__ */ n(A.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), children: /* @__PURE__ */ n(Me, { ...t, className: "w-full" }) }), $t = ({ formProps: e, elementProps: t, children: o }) => /* @__PURE__ */ n(A.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? j(e), valuePropName: "checked", children: /* @__PURE__ */ n(Re, { ...t, children: o }) }), Ht = A.Item, _t = ({ firstItem: e, secondItem: t, style: o, gutter: l = 24 }) => /* @__PURE__ */ g(W, { gutter: l, style: o, children: [
  /* @__PURE__ */ n(P, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(P, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), V = () => {
  const e = ze.useBreakpoint(), t = !e.md, o = !!e.md && !e.lg, l = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: o,
    isCompact: l
  };
}, { Title: Pe, Text: et } = E, Bt = ({
  title: e,
  subtitle: t,
  children: o,
  columns: l = 2,
  loading: i = !1
}) => {
  const { isMobile: c } = V();
  return /* @__PURE__ */ g(z, { style: { marginBottom: 16 }, children: [
    /* @__PURE__ */ g("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ n(Pe, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(et, { type: "secondary", style: { display: "block", marginTop: 4 }, children: t })
    ] }),
    i ? /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(W, { gutter: 24, children: (c ? 1 : l) === 1 ? /* @__PURE__ */ n(P, { span: 24, children: o }) : o })
  ] });
}, X = "DraggableColumn", w = {
  primary: "var(--color-brand-primary, var(--ant-color-primary, #1890ff))",
  secondary: "var(--color-bg-secondary, #f5f7fa)",
  accent: "var(--color-bg-elevated, #e6f7ff)",
  border: "var(--color-border, #e8e8e8)",
  success: "var(--color-success, #52c41a)",
  muted: "var(--color-text-muted, #8c8c8c)"
}, tt = 44, nt = ({
  columnKey: e,
  index: t,
  isVisible: o,
  fixed: l,
  title: i,
  moveColumn: c,
  toggleVisibility: a,
  setFixedStatus: s
}) => {
  const r = q(null), { t: u } = O(), [, m] = fe({
    accept: X,
    hover(S, T) {
      if (!r.current) return;
      const M = S.index, f = t;
      if (M === f) return;
      const b = r.current.getBoundingClientRect(), d = (b.bottom - b.top) / 2, y = T.getClientOffset();
      if (!y) return;
      const x = y.y - b.top;
      M < f && x < d || M > f && x > d || (c(M, f), S.index = f);
    }
  }), [{ isDragging: p }, h] = me({
    type: X,
    item: { index: t, columnKey: e },
    collect: (S) => ({
      isDragging: S.isDragging()
    })
  });
  h(m(r));
  const v = () => l === "left" ? w.primary : l === "right" ? w.success : w.muted, C = (S) => {
    S.stopPropagation();
    let T = !1;
    l === !1 ? T = "left" : l === "left" && (T = "right"), s(e, T);
  }, R = () => u(l === "left" ? "global.labels.fixedLeft" : l === "right" ? "global.labels.fixedRight" : "global.labels.pinColumn");
  return /* @__PURE__ */ g(
    "div",
    {
      ref: r,
      style: {
        opacity: p ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: `1px solid ${w.border}`,
        height: tt,
        backgroundColor: p ? w.secondary : t % 2 === 0 ? "#ffffff" : w.secondary,
        transition: "all 0.2s",
        position: "relative"
      },
      children: [
        o && /* @__PURE__ */ n(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              backgroundColor: l ? v() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          he,
          {
            style: {
              marginRight: 12,
              cursor: "grab",
              color: w.muted,
              fontSize: 14
            }
          }
        ),
        /* @__PURE__ */ g(
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
              /* @__PURE__ */ g(
                "div",
                {
                  style: {
                    opacity: o ? 1 : 0.5,
                    transition: "opacity 0.2s",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "calc(100% - 100px)"
                  },
                  children: [
                    l && /* @__PURE__ */ n(
                      "span",
                      {
                        style: {
                          marginRight: 6,
                          fontSize: 12,
                          padding: "1px 4px",
                          background: l === "left" ? w.accent : "#f6ffed",
                          color: l === "left" ? w.primary : w.success,
                          borderRadius: 4,
                          flexShrink: 0
                        },
                        children: u(l === "left" ? "global.labels.left" : "global.labels.right")
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
              /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(ne, { title: R(), children: /* @__PURE__ */ n(
                  k,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      je,
                      {
                        style: {
                          color: v(),
                          transform: l ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: C,
                    style: { marginRight: 4, padding: "0 8px" }
                  }
                ) }),
                /* @__PURE__ */ n(
                  ue,
                  {
                    checked: o,
                    size: "small",
                    onChange: () => a(e)
                  }
                )
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
  toggleVisibility: o,
  setFixedStatus: l,
  resetToDefault: i,
  onCancel: c,
  onApply: a
}) => {
  const s = e.filter((h) => h.visible).length, r = e.length, { t: u } = O(), m = e.filter((h) => h.fixed === "left").length, p = e.filter((h) => h.fixed === "right").length;
  return /* @__PURE__ */ g("div", { className: "bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ g(
      "div",
      {
        style: { background: w.secondary },
        className: "p-4 font-bold border-b flex justify-between items-center",
        children: [
          /* @__PURE__ */ n(E.Title, { level: 5, style: { margin: 0 }, children: u("global.labels.customizeTableColumns") }),
          /* @__PURE__ */ n(ne, { title: u("global.btns.reset"), children: /* @__PURE__ */ n(
            k,
            {
              type: "text",
              icon: /* @__PURE__ */ n(Ne, {}),
              onClick: i,
              style: { color: w.primary }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ g("div", { className: "px-3 py-2 flex justify-between border-b", style: { background: w.secondary }, children: [
      /* @__PURE__ */ g("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n(
          K,
          {
            count: s,
            color: w.primary,
            size: "small",
            overflowCount: 999,
            style: { marginRight: 8 }
          }
        ),
        /* @__PURE__ */ n(E.Text, { type: "secondary", className: "text-xs", children: u("global.texts.columnsVisible", { count: s, total: r }) })
      ] }),
      (m > 0 || p > 0) && /* @__PURE__ */ g("div", { className: "flex items-center", children: [
        m > 0 && /* @__PURE__ */ n(K, { count: m, size: "small", color: w.primary, style: { marginRight: 4 } }),
        p > 0 && /* @__PURE__ */ n(K, { count: p, size: "small", color: w.success })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "overflow-auto flex-grow", children: e.map((h, v) => /* @__PURE__ */ n(
      nt,
      {
        columnKey: h.key,
        index: v,
        isVisible: h.visible,
        fixed: h.fixed,
        title: h.title,
        moveColumn: t,
        toggleVisibility: o,
        setFixedStatus: l
      },
      h.key
    )) }),
    /* @__PURE__ */ n(Fe, { className: "my-0" }),
    /* @__PURE__ */ g("div", { className: "py-3 px-4 flex justify-end gap-2", style: { background: w.secondary }, children: [
      /* @__PURE__ */ n(k, { block: !0, size: "middle", onClick: c, children: u("global.btns.cancel") }),
      /* @__PURE__ */ n(k, { block: !0, type: "primary", size: "middle", onClick: a, children: u("global.btns.apply") })
    ] })
  ] });
}, rt = ({ title: e, columnKey: t, index: o, moveColumn: l }) => {
  const i = q(null), [, c] = fe({
    accept: X,
    hover(r) {
      if (!i.current) return;
      const u = r.index, m = o;
      u !== m && (l(u, m), r.index = m);
    }
  }), [{ isDragging: a }, s] = me({
    type: X,
    item: { index: o, columnKey: t },
    collect: (r) => ({
      isDragging: r.isDragging()
    })
  });
  return s(c(i)), /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      style: {
        opacity: a ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center"
      },
      children: typeof e == "string" || typeof e == "number" ? e : String(e ?? "")
    }
  );
};
function it(e) {
  const t = (d) => d.key || d.dataIndex, o = ee(() => e.map(t), [e]), l = () => e.reduce((d, y, x) => {
    const D = t(y);
    return {
      ...d,
      [D]: {
        key: D,
        visible: !0,
        fixed: y.fixed ?? !1,
        originalIndex: x
      }
    };
  }, {}), [i, c] = L(() => l()), [a, s] = L(() => l()), [r, u] = L(() => o), [m, p] = L(() => o);
  return U(() => {
    const d = l(), y = e.map(t);
    c(d), s(d), u(y), p(y);
  }, [e]), {
    getColumnKey: t,
    getVisibleColumns: () => r.filter((d) => {
      var y;
      return (y = i[d]) == null ? void 0 : y.visible;
    }).map((d) => {
      var y;
      return {
        key: d,
        fixed: ((y = i[d]) == null ? void 0 : y.fixed) || !1
      };
    }),
    getEditingColumns: () => m.map((d) => {
      var y, x;
      return {
        key: d,
        visible: ((y = a[d]) == null ? void 0 : y.visible) || !1,
        fixed: ((x = a[d]) == null ? void 0 : x.fixed) || !1
      };
    }),
    startEditing: () => {
      s({ ...i }), p([...r]);
    },
    applyChanges: () => {
      c(a), u(m);
    },
    cancelChanges: () => {
      s({ ...i }), p([...r]);
    },
    resetToDefault: () => {
      s(l()), p([...o]);
    },
    moveColumn: (d, y) => {
      const x = [...m], D = x[d];
      x.splice(d, 1), x.splice(y, 0, D), p(x);
    },
    toggleVisibility: (d) => {
      const y = Object.values(a).filter((x) => x.visible).length;
      a[d].visible && y <= 1 || s((x) => ({
        ...x,
        [d]: {
          ...x[d],
          visible: !x[d].visible
        }
      }));
    },
    setFixedStatus: (d, y) => {
      s((x) => ({
        ...x,
        [d]: {
          ...x[d],
          fixed: y
        }
      }));
    }
  };
}
const at = (e, t, o) => {
  const l = q(null), i = qe({
    refreshMode: "debounce",
    onResize: () => c(),
    refreshRate: 1
  }), c = () => {
    var R, S, T, M, f, b, d, y, x;
    const a = (R = i.ref.current) == null ? void 0 : R.querySelector("div.ant-table-wrapper"), s = ((T = (S = i.ref.current) == null ? void 0 : S.querySelector("thead.ant-table-thead")) == null ? void 0 : T.clientHeight) ?? 0, r = 8;
    if (e) {
      const D = (M = i.ref.current) == null ? void 0 : M.querySelector("div.ant-table-placeholder");
      D == null || D.setAttribute(
        "style",
        `min-height: ${+e + s - r}px; max-height: ${+e + s - r}px`
      );
      const H = (f = i.ref.current) == null ? void 0 : f.querySelector("div.ant-table-container");
      return H == null || H.setAttribute(
        "style",
        `min-height: ${+e + s - r}px; max-height: ${+e + s - r}px`
      ), e;
    }
    const u = ((d = (b = i.ref.current) == null ? void 0 : b.querySelector("div.ant-table-footer")) == null ? void 0 : d.clientHeight) ?? 0, m = o.xs ? 24 : 40, p = ((y = i.ref.current) == null ? void 0 : y.clientHeight) ?? 0, h = ((x = t.current) == null ? void 0 : x.clientHeight) ?? 0, C = p - s - u - h - r - 16 - m;
    return a && a.setAttribute("style", `max-height:${C + s}px;height: 100%`), C;
  };
  return {
    tableWrapperRef: i.ref,
    tableRef: l,
    getTableHeight: c
  };
}, Yt = ({
  totalCount: e,
  onSearch: t,
  actionButtons: o,
  searchDebounceMs: l = 300,
  ...i
}) => {
  var ie, ae;
  const c = q(null), a = q(null), { t: s } = O(), { isMobile: r, screens: u } = V(), { tableWrapperRef: m, tableRef: p, getTableHeight: h } = at(
    (ie = i.scroll) == null ? void 0 : ie.y,
    c,
    u
  ), v = i.columns || [], [C, R] = L(!1), [S, T] = L(""), {
    getColumnKey: M,
    getVisibleColumns: f,
    getEditingColumns: b,
    startEditing: d,
    applyChanges: y,
    cancelChanges: x,
    resetToDefault: D,
    moveColumn: H,
    toggleVisibility: xe,
    setFixedStatus: ve
  } = it(v);
  U(() => {
    C && d();
  }, [C]), U(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const we = te(
    (N) => {
      const _ = N.target.value;
      T(_), a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        t == null || t(_);
      }, l);
    },
    [t, l]
  ), Ce = () => {
    y(), R(!1);
  }, Se = () => {
    x(), R(!1);
  }, G = ee(() => {
    const N = f(), _ = new Map(v.map((I) => [M(I), I]));
    return N.map((I, Z) => {
      const B = _.get(I.key);
      return B ? {
        ...B,
        fixed: r ? !1 : I.fixed,
        title: /* @__PURE__ */ n(rt, { title: B.title, columnKey: I.key, index: Z, moveColumn: H }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: r ? "normal" : "nowrap",
            padding: r ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [v, f, r, u]), Te = ee(() => {
    const N = b(), _ = new Map(v.map((I) => [M(I), I]));
    return N.map((I) => {
      var Z, B;
      return {
        key: I.key,
        visible: I.visible,
        fixed: I.fixed,
        title: ((B = (Z = _.get(I.key)) == null ? void 0 : Z.title) == null ? void 0 : B.toString()) || I.key
      };
    });
  }, [v, b]);
  return /* @__PURE__ */ n(Ye, { backend: We, children: /* @__PURE__ */ g("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ g(
      "div",
      {
        ref: c,
        style: {
          marginBottom: 16,
          display: "flex",
          flexDirection: r ? "column" : "row",
          justifyContent: "space-between",
          alignItems: r ? "stretch" : "center",
          background: w.secondary,
          padding: r ? "12px 12px" : "12px 16px",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          gap: r ? 12 : 0
        },
        children: [
          t && /* @__PURE__ */ n("div", { style: { position: "relative", width: r ? "100%" : 320 }, children: /* @__PURE__ */ n(
            J,
            {
              placeholder: s("global.labels.search"),
              allowClear: !0,
              prefix: /* @__PURE__ */ n(re, { style: { color: w.primary, fontSize: 16 } }),
              style: {
                borderRadius: 6,
                padding: "8px 12px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
                border: `1px solid ${w.border}`,
                width: "100%"
              },
              onChange: we,
              value: S
            }
          ) }),
          /* @__PURE__ */ g(
            $,
            {
              size: r ? "small" : "middle",
              direction: r ? "vertical" : "horizontal",
              style: {
                width: r ? "100%" : "auto",
                justifyContent: "flex-end",
                display: "flex"
              },
              children: [
                /* @__PURE__ */ n(ne, { title: s("global.labels.customizeTableColumns"), children: /* @__PURE__ */ n(
                  Ee,
                  {
                    open: C,
                    onOpenChange: R,
                    dropdownRender: () => /* @__PURE__ */ n(
                      lt,
                      {
                        columns: Te,
                        moveColumn: H,
                        toggleVisibility: xe,
                        setFixedStatus: ve,
                        resetToDefault: D,
                        onCancel: Se,
                        onApply: Ce
                      }
                    ),
                    trigger: ["click"],
                    children: /* @__PURE__ */ n(
                      k,
                      {
                        icon: r ? /* @__PURE__ */ n(he, {}) : /* @__PURE__ */ n($e, {}),
                        style: {
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          backgroundColor: C ? w.accent : "white",
                          borderColor: C ? w.primary : w.border,
                          color: C ? w.primary : "inherit",
                          boxShadow: C ? `0 0 0 2px ${w.accent}` : "none",
                          padding: r ? "6px 12px" : "6px 16px",
                          height: "auto",
                          width: r ? "100%" : "auto",
                          justifyContent: r ? "center" : "flex-start"
                        },
                        children: s("global.btns.columns")
                      }
                    )
                  }
                ) }),
                o
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: m, children: /* @__PURE__ */ n(
      Ae,
      {
        ...i,
        columns: G,
        virtual: i.virtual ?? !0,
        ref: p,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: Ke,
          showSizeChanger: !1,
          size: r ? "small" : "default",
          ...i.pagination || {}
        },
        className: `w-full h-full ${i.className || ""}`,
        scroll: {
          x: ((ae = i.scroll) == null ? void 0 : ae.x) ?? ((G == null ? void 0 : G.length) ?? 0) * (r ? 150 : 200),
          y: h()
        },
        rowKey: (N) => N.id,
        size: r ? "small" : "middle"
      }
    ) })
  ] }) });
}, pe = "calc(100dvh - 300px)", ot = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: pe }
}, Wt = {
  size: "small",
  pagination: !1
}, qt = (e, t) => {
  const l = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? l : `${l} overflow-hidden`;
}, Vt = (e, t) => {
  const o = pe;
  return e && t != null && t > 0 ? { x: t, y: o } : { ...ot.scroll };
}, Gt = ({
  children: e,
  grow: t = !0,
  className: o
}) => /* @__PURE__ */ n(
  "div",
  {
    className: ["min-h-0 w-full", t ? "flex-1" : "", o ?? ""].filter(Boolean).join(" "),
    children: e
  }
), ye = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: o,
  clearFilters: l,
  placeholder: i
}) => {
  const { t: c } = O();
  return /* @__PURE__ */ g("div", { style: { padding: 8 }, children: [
    /* @__PURE__ */ n(
      J,
      {
        placeholder: i ?? c("global.labels.search"),
        value: t[0],
        onChange: (a) => e(a.target.value ? [a.target.value] : []),
        onPressEnter: () => o(),
        style: { marginBottom: 8, display: "block" }
      }
    ),
    /* @__PURE__ */ g($, { children: [
      /* @__PURE__ */ n(k, { type: "primary", onClick: () => o(), size: "small", style: { width: 90 }, children: c("global.btns.ok") }),
      /* @__PURE__ */ n(
        k,
        {
          onClick: () => {
            l == null || l(), o();
          },
          size: "small",
          style: { width: 90 },
          children: c("global.btns.reset")
        }
      )
    ] })
  ] });
}, Zt = (e, t = {}) => {
  const { mode: o = "client", placeholder: l } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n(ye, { ...i, placeholder: l }),
    filterIcon: (i) => /* @__PURE__ */ n(re, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...o === "client" && {
      onFilter: (i, c) => String(c[e] ?? "").toLowerCase().includes(String(i).toLowerCase())
    }
  };
}, Kt = (e, t = {}) => {
  const { mode: o = "client", placeholder: l } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n(ye, { ...i, placeholder: l }),
    filterIcon: (i) => /* @__PURE__ */ n(re, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...o === "client" && {
      onFilter: (i, c) => {
        const a = String(i).toLowerCase();
        return e.some(
          (s) => String(c[s] ?? "").toLowerCase().includes(a)
        );
      }
    }
  };
}, Ut = (e, t, o, l = {}) => {
  const { mode: i = "client" } = l;
  return {
    filters: Object.values(e).map((c) => ({
      text: t(c),
      value: c
    })),
    ...i === "client" && {
      onFilter: (c, a) => a[o] === c
    }
  };
}, Xt = (e, t, o, l = {}) => {
  const { mode: i = "client" } = l;
  return {
    filters: [
      { text: t, value: !0 },
      { text: o, value: !1 }
    ],
    ...i === "client" && {
      onFilter: (c, a) => a[e] === c
    }
  };
}, Jt = ({
  onCancel: e,
  onFormSubmit: t,
  open: o,
  children: l,
  title: i,
  width: c = "50%",
  footer: a,
  loading: s = !1,
  btns: r
}) => {
  var p, h;
  const { t: u } = O(), m = /* @__PURE__ */ g(W, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(k, { disabled: s, onClick: () => e(), type: "default", children: ((p = r == null ? void 0 : r.cancel) == null ? void 0 : p.label) ?? u("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(k, { disabled: s, onClick: t, block: !1, type: "primary", loading: s, children: ((h = r == null ? void 0 : r.save) == null ? void 0 : h.label) ?? u("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    le,
    {
      centered: !0,
      maskClosable: !1,
      width: c,
      onCancel: e,
      open: o,
      footer: a ?? m,
      title: !!i && /* @__PURE__ */ n(W, { justify: "start", align: "middle", children: /* @__PURE__ */ n(E.Title, { level: 2, children: i }) }),
      children: /* @__PURE__ */ n(Oe, { spinning: s, style: { maxHeight: "100%" }, children: l })
    }
  );
}, st = "mobile-fullscreen-modal", Qt = ({
  splitFooterButtonsOnMobile: e = !0,
  rootClassName: t,
  width: o,
  style: l,
  styles: i,
  okButtonProps: c,
  cancelButtonProps: a,
  ...s
}) => {
  const { isMobile: r } = V(), u = [t, r ? st : ""].filter(Boolean).join(" "), m = r ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...l
  } : l, p = r && e ? {
    ...c,
    style: { flex: 1, ...(c == null ? void 0 : c.style) ?? {} }
  } : c, h = r && e ? {
    ...a,
    style: { flex: 1, ...(a == null ? void 0 : a.style) ?? {} }
  } : a;
  return /* @__PURE__ */ n(
    le,
    {
      ...s,
      rootClassName: u || void 0,
      width: r ? "100%" : o,
      style: m,
      styles: i,
      okButtonProps: p,
      cancelButtonProps: h
    }
  );
}, { Text: ct } = E, dt = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, Pt = ({
  open: e,
  onConfirm: t,
  onCancel: o,
  title: l,
  description: i,
  confirmLabel: c,
  cancelLabel: a,
  variant: s = "danger",
  loading: r = !1,
  icon: u,
  children: m
}) => {
  const { t: p } = O();
  return /* @__PURE__ */ g(
    le,
    {
      open: e,
      onCancel: o,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ g(W, { align: "middle", style: { gap: 8 }, children: [
        u ?? /* @__PURE__ */ n(He, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: l })
      ] }),
      footer: /* @__PURE__ */ g(W, { align: "middle", justify: "end", style: { gap: 8 }, children: [
        /* @__PURE__ */ n(k, { disabled: r, onClick: o, children: a ?? p("global.btns.cancel") }),
        /* @__PURE__ */ n(
          k,
          {
            type: "primary",
            ...dt[s],
            loading: r,
            onClick: t,
            children: c ?? p("global.btns.confirm")
          }
        )
      ] }),
      children: [
        i && /* @__PURE__ */ n(ct, { type: "secondary", children: i }),
        m
      ]
    }
  );
}, { Title: ut, Text: gt } = E, be = ({
  title: e,
  variant: t = "page",
  subtitle: o,
  breadcrumb: l,
  breadcrumbExtra: i,
  onBack: c,
  filters: a,
  actions: s
}) => {
  const { isMobile: r } = V(), u = t === "page", m = u ? 4 : 5, p = u ? 16 : 12, h = u ? 12 : 8, v = !!(a || s);
  return /* @__PURE__ */ g("div", { style: { marginBottom: p }, children: [
    u && (l || i) && /* @__PURE__ */ g(
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
          /* @__PURE__ */ n("div", { style: { flex: "1 1 auto", minWidth: 0 }, children: l ? /* @__PURE__ */ n(Le, { ...l }) : null }),
          i ? /* @__PURE__ */ n($, { size: 8, wrap: !0, style: { flexShrink: 0 }, children: i }) : null
        ]
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: r ? "flex-start" : "center",
          flexDirection: r ? "column" : "row",
          gap: r ? h : 0
        },
        children: [
          /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            u && c && /* @__PURE__ */ n(k, { type: "text", icon: /* @__PURE__ */ n(_e, {}), onClick: c, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ g("div", { children: [
              /* @__PURE__ */ n(ut, { level: m, style: { margin: 0 }, children: e }),
              o && /* @__PURE__ */ n(gt, { type: "secondary", style: { marginTop: 2, display: "block" }, children: o })
            ] })
          ] }),
          v && /* @__PURE__ */ g($, { size: 8, wrap: !0, style: { width: r ? "100%" : void 0 }, children: [
            a,
            s
          ] })
        ]
      }
    )
  ] });
}, en = (e) => /* @__PURE__ */ n(be, { variant: "section", ...e }), tn = (e) => /* @__PURE__ */ n(be, { variant: "page", ...e }), { Text: ht } = E, nn = ({ label: e, children: t, style: o }) => /* @__PURE__ */ g(z, { size: "small", styles: { body: { padding: "16px 20px" } }, style: o, children: [
  /* @__PURE__ */ n(ht, { type: "secondary", style: { fontSize: 12, display: "block", marginBottom: 6 }, children: e }),
  t
] }), ln = () => /* @__PURE__ */ n(z, { variant: "borderless", children: /* @__PURE__ */ n(F, {}) }), rn = ({ left: e, right: t }) => /* @__PURE__ */ g("div", { className: "flex items-stretch gap-3 w-full", children: [
  /* @__PURE__ */ n("div", { className: "flex-1 flex justify-center", children: e }),
  /* @__PURE__ */ n(
    "div",
    {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--color-border-light)"
      }
    }
  ),
  /* @__PURE__ */ n("div", { className: "flex-1 flex justify-center", children: t })
] }), Y = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), an = ({
  variant: e = "user",
  cards: t = 4,
  rows: o,
  formRows: l = 5,
  showAvatar: i = !0,
  gap: c = 16,
  className: a,
  style: s,
  footer: r
}) => {
  const u = c, m = o ?? 6, p = o ?? 5;
  return e === "project" ? /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(
      F,
      {
        active: !0,
        title: { width: "30%" },
        paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
      }
    ) }),
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: 4 } }) }),
    r
  ] }) : e === "simple" ? /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(F, { active: !0, title: !0, paragraph: { rows: m } }) }),
    r
  ] }) : e === "form" ? /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n($, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: l }).map((h, v) => /* @__PURE__ */ n(F.Input, { active: !0, size: "large", style: { width: v % 2 === 0 ? "100%" : "72%" } }, v)) }) }),
    r
  ] }) : e === "cards" ? /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: 12
        },
        children: [...Array(Math.max(1, t))].map((h, v) => /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, v))
      }
    ),
    r
  ] }) : e === "list" ? /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n($, { direction: "vertical", style: { width: "100%" }, size: 12, children: Array.from({ length: p }).map((h, v) => /* @__PURE__ */ n(F, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, v)) }) }),
    r
  ] }) : /* @__PURE__ */ g("div", { className: a, style: { ...Y(u), ...s }, children: [
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(
      F,
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
        children: [...Array(Math.max(1, t))].map((h, v) => /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, v))
      }
    ),
    /* @__PURE__ */ n(z, { children: /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: 4 } }) }),
    r
  ] });
}, on = ({
  width: e = 400,
  height: t = 200,
  onSign: o,
  disabled: l = !1,
  clearLabel: i,
  confirmLabel: c
}) => {
  const { t: a } = O(), s = q(null), [r, u] = L(!1), [m, p] = L(!1), h = te(() => {
    const f = s.current;
    return f ? f.getContext("2d") : null;
  }, []), v = te(() => {
    const f = h(), b = s.current;
    !f || !b || (f.clearRect(0, 0, b.width, b.height), p(!1));
  }, [h]);
  U(() => {
    const f = h();
    if (!f) return;
    const b = getComputedStyle(s.current).getPropertyValue("--color-text-primary").trim();
    f.strokeStyle = b || "#000", f.lineWidth = 2, f.lineCap = "round", f.lineJoin = "round";
  }, [h]);
  const C = (f) => {
    const b = s.current;
    if (!b) return null;
    const d = b.getBoundingClientRect(), y = b.width / d.width, x = b.height / d.height;
    if ("touches" in f) {
      const D = f.touches[0];
      return D ? {
        x: (D.clientX - d.left) * y,
        y: (D.clientY - d.top) * x
      } : null;
    }
    return {
      x: (f.clientX - d.left) * y,
      y: (f.clientY - d.top) * x
    };
  }, R = (f) => {
    if (l) return;
    const b = h(), d = C(f);
    !b || !d || (b.beginPath(), b.moveTo(d.x, d.y), u(!0));
  }, S = (f) => {
    if (!r || l) return;
    const b = h(), d = C(f);
    !b || !d || (b.lineTo(d.x, d.y), b.stroke(), p(!0));
  }, T = () => {
    u(!1);
  }, M = () => {
    const f = s.current;
    !f || !m || o(f.toDataURL("image/png"));
  };
  return /* @__PURE__ */ g("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: s,
        width: e,
        height: t,
        style: {
          border: "1px solid var(--color-border, #d9d9d9)",
          borderRadius: 8,
          cursor: l ? "default" : "crosshair",
          touchAction: "none",
          width: "100%",
          maxWidth: e,
          height: "auto",
          aspectRatio: `${e} / ${t}`
        },
        onMouseDown: R,
        onMouseMove: S,
        onMouseUp: T,
        onMouseLeave: T,
        onTouchStart: R,
        onTouchMove: S,
        onTouchEnd: T
      }
    ),
    !l && /* @__PURE__ */ g($, { children: [
      /* @__PURE__ */ n(k, { size: "small", icon: /* @__PURE__ */ n(Be, {}), onClick: v, disabled: !m, children: i ?? a("global.btns.clear") }),
      /* @__PURE__ */ n(k, { size: "small", type: "primary", onClick: M, disabled: !m, children: c ?? a("global.btns.confirm") })
    ] })
  ] });
}, { Text: ce } = E, sn = ({ value: e, label: t, copyTooltip: o, copiedTooltip: l }) => {
  const { t: i } = O();
  return e ? /* @__PURE__ */ g(
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
          ce,
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
          ce,
          {
            copyable: {
              tooltips: [
                o ?? i("global.btns.copy"),
                l ?? i("global.btns.copied")
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
}, { Text: de } = E, cn = ({ icon: e, title: t, description: o, action: l }) => /* @__PURE__ */ g(
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
      e ?? /* @__PURE__ */ n(oe, { image: oe.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(de, { strong: !0, style: { fontSize: 16, marginTop: e ? 16 : 0, display: "block" }, children: t }),
      o && /* @__PURE__ */ n(de, { type: "secondary", style: { marginTop: 8, display: "block", maxWidth: 400 }, children: o }),
      l && /* @__PURE__ */ n("div", { style: { marginTop: 16 }, children: l })
    ]
  }
), { Text: ft } = E, mt = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, dn = ({ status: e, label: t }) => /* @__PURE__ */ g("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 }, children: [
  /* @__PURE__ */ n(K, { color: mt[e] }),
  /* @__PURE__ */ n(ft, { children: t })
] }), un = ({
  items: e,
  loading: t = !1,
  column: o,
  title: l,
  bordered: i = !1,
  layout: c
}) => {
  const { isMobile: a } = V();
  return t ? /* @__PURE__ */ n(F, { active: !0, paragraph: { rows: e.length }, title: !!l && { width: "30%" } }) : /* @__PURE__ */ n(
    se,
    {
      title: l,
      column: o ?? (a ? 1 : 2),
      bordered: i,
      layout: c ?? (a ? "vertical" : "horizontal"),
      size: a ? "small" : "default",
      children: e.map((u, m) => /* @__PURE__ */ n(se.Item, { label: u.label, span: u.span, children: u.value }, m))
    }
  );
}, gn = {
  mobileMax: "md",
  compactMax: "lg"
}, hn = "mobile-fullscreen-modal", fn = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, mn = {
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
}, pn = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, yn = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, bn = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32
}, xn = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
};
export {
  Jt as BaseEditModal,
  $t as CheckboxFormItem,
  lt as ColumnManager,
  Pt as ConfirmModal,
  Wt as DETAIL_TABLE_PROPS,
  X as DRAG_TYPE,
  At as DateFormItem,
  un as DescriptionList,
  an as DetailLoader,
  rt as DraggableHeader,
  nt as DraggableMenuItem,
  cn as EmptyState,
  Ht as FormItem,
  _t as FormItemWrapper,
  Bt as FormSection,
  Qt as FullscreenMobileModal,
  Ft as InputFormItem,
  pe as LIST_TABLE_BODY_MAX_Y,
  ot as LIST_TABLE_PROPS,
  Gt as ListPageTableArea,
  hn as MOBILE_FULLSCREEN_MODAL_CLASS,
  be as MainHeader,
  Yt as MainTable,
  rn as MobileActionSplitRow,
  Ot as NumberFormItem,
  tn as PageHeader,
  sn as PrimaryKey,
  gn as RESPONSIVE_BREAKPOINTS,
  en as SectionHeader,
  Et as SelectFormItem,
  on as SignatureCanvas,
  ln as SkeletonCard,
  nn as StatCard,
  dn as StatusBadge,
  jt as SwitchFormItem,
  Lt as TextAreaFormItem,
  ye as TextFilterDropdown,
  Nt as TimePickerFormItem,
  Xt as booleanFilterColumnProps,
  fn as brand,
  mn as colors,
  Ve as dateFormat,
  kt as dateFormatISO,
  Ge as dateTimeFormat,
  Dt as dateTimeFormatWithoutSeconds,
  Qe as datesToDayjs,
  Ke as defaultTablePageSize,
  Rt as dropdownItemsMaxTake,
  Ut as enumFilterColumnProps,
  pn as fontSize,
  yn as fontWeight,
  j as getRules,
  Ze as isoDateFormatRegex,
  qt as listPageRootClassName,
  Vt as listTableScroll,
  zt as objectToFormData,
  Mt as passwordRegex,
  Xe as phoneFormatRegex,
  xn as radius,
  bn as spacing,
  Zt as textSearchColumnProps,
  Kt as textSearchMultiFieldProps,
  Ue as uriRegex,
  it as useColumnManager,
  V as useResponsive,
  at as useTableFullHeightCalculator
};
