import { jsx as n, jsxs as p } from "react/jsx-runtime";
import { Form as O, Input as oe, Select as $e, DatePicker as Le, InputNumber as Me, Switch as be, TimePicker as Fe, Checkbox as Ee, Row as Z, Col as ae, Grid as Be, Typography as H, Card as F, Skeleton as E, Tooltip as ue, Button as M, Badge as ne, Divider as He, Space as V, Dropdown as Ae, Table as Oe, Modal as ge, Spin as je, Breadcrumb as _e, Empty as pe, Descriptions as Ye, ConfigProvider as We } from "antd";
import { useTranslation as Ve } from "react-i18next";
import { useRef as J, useMemo as re, useState as _, useEffect as ie, useCallback as N, Fragment as qe } from "react";
import { MenuOutlined as ve, PushpinOutlined as Ge, UndoOutlined as Ke, SearchOutlined as he, TableOutlined as Ue, ExclamationCircleOutlined as Xe, ArrowLeftOutlined as Ze, ClearOutlined as Je } from "@ant-design/icons";
import { useDrop as Ce, useDrag as we, DndProvider as Ne } from "react-dnd";
import { HTML5Backend as Qe } from "react-dnd-html5-backend";
import { useResizeDetector as Pe } from "react-resize-detector";
import Se from "dayjs";
function j() {
  return Ve("softwareify-ui");
}
const et = {
  save: "Save",
  saveChanges: "Save Changes",
  cancel: "Cancel",
  cancelChanges: "Cancel Changes",
  confirm: "Confirm",
  clear: "Clear",
  reset: "Reset",
  apply: "Apply",
  columns: "Columns",
  ok: "OK",
  copy: "Copy",
  copied: "Copied!",
  delete: "Delete"
}, tt = {
  search: "Search...",
  customizeTableColumns: "Customize columns",
  primaryKey: "Primary Key",
  pinColumn: "Pin column",
  fixedLeft: "Fixed left",
  fixedRight: "Fixed right",
  left: "LEFT",
  right: "RIGHT"
}, nt = {
  columnsVisible: "{{count}} of {{total}} visible"
}, rt = {
  input: {
    isRequiredField: "is required",
    common: "This field is required",
    incorrectFormat: "{{fieldName}} has incorrect format",
    field: "Field"
  }
}, it = {
  btns: et,
  labels: tt,
  texts: nt,
  validations: rt
};
function Kt(e, t = "en") {
  const r = {
    en: it
    // Additional locales can be added here in the future
  }[t];
  if (!r) {
    console.warn(`Softwareify UI locale '${t}' not found. Defaulting to 'en'.`);
    return;
  }
  e.addResourceBundle(t, "softwareify-ui", r, !0, !0);
}
const lt = "DD.MM.YYYY", ot = "DD.MM.YYYY HH:mm:ss", Ut = "DD.MM.YYYY HH:mm", Xt = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", at = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, Zt = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", ct = 50, st = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", dt = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, Jt = 2147483646, Y = (e, t, i) => {
  var o;
  const { t: r } = j();
  if (!e) return [];
  const l = (o = e.label) == null ? void 0 : o.toString(), d = [
    {
      required: e.required,
      message: l ? `${e.label ?? i} ${r("validations.input.isRequiredField")}` : r("validations.input.common")
    }
  ];
  return t === "email" && d.push({
    type: t,
    message: r("validations.input.incorrectFormat", {
      fieldName: l ?? r("validations.input.field")
    })
  }), t === "url" && d.push({
    pattern: new RegExp(st),
    message: r("validations.input.incorrectFormat", {
      fieldName: l ?? r("validations.input.field")
    })
  }), t === "phone" && d.push({
    pattern: new RegExp(dt),
    message: r("validations.input.incorrectFormat", {
      fieldName: l ?? r("validations.input.field")
    })
  }), d ?? e.rules ?? [];
}, Nt = ({ elementProps: e, formProps: t }) => {
  const i = Y(t, e == null ? void 0 : e.type);
  return /* @__PURE__ */ n(O.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? i, children: /* @__PURE__ */ n(oe, { ...e }) });
}, Qt = ({ elementProps: e, formProps: t }) => {
  const i = Y(t);
  return /* @__PURE__ */ n(O.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? i, children: /* @__PURE__ */ n(
    $e,
    {
      showSearch: !0,
      filterOption: (r, l) => String((l == null ? void 0 : l.label) ?? (l == null ? void 0 : l.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
        r.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      ),
      ...e
    }
  ) });
}, Pt = ({ formProps: e, elementProps: t }) => {
  const i = Y(e);
  return /* @__PURE__ */ n(O.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? i, children: /* @__PURE__ */ n(
    Le,
    {
      ...t,
      format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? ot : lt,
      style: { width: "100%", ...t == null ? void 0 : t.style }
    }
  ) });
}, en = ({ elementProps: e, formProps: t }) => {
  const i = Y(t);
  return /* @__PURE__ */ n(O.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? i, children: /* @__PURE__ */ n(Me, { ...e, style: { width: "100%", ...e == null ? void 0 : e.style } }) });
}, tn = ({ elementProps: e, formProps: t }) => {
  const i = Y(t);
  return /* @__PURE__ */ n(O.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? i, children: /* @__PURE__ */ n(oe.TextArea, { ...e }) });
}, nn = ({ elementProps: e, formProps: t }) => {
  const i = Y(t);
  return /* @__PURE__ */ n(O.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? i, valuePropName: "checked", children: /* @__PURE__ */ n(be, { ...e }) });
}, rn = ({ formProps: e, elementProps: t }) => {
  const i = Y(e);
  return /* @__PURE__ */ n(O.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? i, children: /* @__PURE__ */ n(Fe, { ...t, style: { width: "100%", ...t == null ? void 0 : t.style } }) });
}, ln = ({ formProps: e, elementProps: t, children: i }) => {
  const r = Y(e);
  return /* @__PURE__ */ n(O.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? r, valuePropName: "checked", children: /* @__PURE__ */ n(Ee, { ...t, children: i }) });
}, on = O.Item, ut = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, U = {
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
}, B = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, ce = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, s = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32
}, A = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
}, an = {
  token: {
    // Brand colors
    colorPrimary: ut.primary,
    colorBgContainer: U.bgPrimary,
    colorBorder: U.border,
    colorError: U.error,
    colorSuccess: U.success,
    colorWarning: U.warning,
    colorInfo: U.info,
    // Typography
    fontSize: B.base,
    fontSizeHeading1: B["3xl"],
    fontSizeHeading2: B["2xl"],
    fontSizeHeading3: B.xl,
    fontSizeHeading4: B.lg,
    fontSizeHeading5: B.md,
    fontWeightStrong: ce.semibold,
    // Spacing and sizing (antd uses margin/padding as base, with XS/SM/MD/LG/XL variants)
    margin: s.md,
    marginXS: s.xs,
    marginSM: s.sm,
    marginLG: s.lg,
    marginXL: s.xl,
    padding: s.md,
    paddingXS: s.xs,
    paddingSM: s.sm,
    paddingLG: s.lg,
    paddingXL: s.xl,
    // Border radius
    borderRadius: A.md,
    borderRadiusLG: A.lg,
    borderRadiusSM: A.sm,
    // Other common tokens
    lineHeight: 1.5
  }
}, cn = ({ firstItem: e, secondItem: t, style: i, gutter: r = s["2xl"] }) => /* @__PURE__ */ p(Z, { gutter: r, style: i, children: [
  /* @__PURE__ */ n(ae, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(ae, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), P = () => {
  const e = Be.useBreakpoint(), t = !e.md, i = !!e.md && !e.lg, r = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: i,
    isCompact: r
  };
}, { Title: gt, Text: ht } = H, sn = ({
  title: e,
  subtitle: t,
  children: i,
  columns: r = 2,
  loading: l = !1
}) => {
  const { isMobile: d } = P(), o = d ? 1 : r;
  return /* @__PURE__ */ p(F, { style: { marginBottom: s.lg }, children: [
    /* @__PURE__ */ p("div", { style: { marginBottom: s.lg }, children: [
      /* @__PURE__ */ n(gt, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(ht, { type: "secondary", style: { display: "block", marginTop: s.xs }, children: t })
    ] }),
    l ? /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(Z, { gutter: s["2xl"], children: o === 1 ? /* @__PURE__ */ n(ae, { span: 24, children: i }) : i })
  ] });
}, le = "DraggableColumn", w = {
  primary: "var(--color-brand-primary, var(--ant-color-primary, #1890ff))",
  secondary: "var(--color-bg-secondary, #f5f7fa)",
  accent: "var(--color-bg-elevated, #e6f7ff)",
  border: "var(--color-border, #e8e8e8)",
  success: "var(--color-success, #52c41a)",
  muted: "var(--color-text-muted, #8c8c8c)"
}, ft = 44, mt = ({
  columnKey: e,
  index: t,
  isVisible: i,
  fixed: r,
  title: l,
  moveColumn: d,
  toggleVisibility: o,
  setFixedStatus: a
}) => {
  const c = J(null), { t: g } = j(), [, f] = Ce({
    accept: le,
    hover(I, S) {
      if (!c.current) return;
      const k = I.index, y = t;
      if (k === y) return;
      const b = c.current.getBoundingClientRect(), u = (b.bottom - b.top) / 2, x = S.getClientOffset();
      if (!x) return;
      const v = x.y - b.top;
      k < y && v < u || k > y && v > u || (d(k, y), I.index = y);
    }
  }), [{ isDragging: h }, m] = we({
    type: le,
    item: { index: t, columnKey: e },
    collect: (I) => ({
      isDragging: I.isDragging()
    })
  });
  m(f(c));
  const C = () => r === "left" ? w.primary : r === "right" ? w.success : w.muted, z = (I) => {
    I.stopPropagation();
    let S = !1;
    r === !1 ? S = "left" : r === "left" && (S = "right"), a(e, S);
  }, R = () => g(r === "left" ? "labels.fixedLeft" : r === "right" ? "labels.fixedRight" : "labels.pinColumn");
  return /* @__PURE__ */ p(
    "div",
    {
      ref: c,
      style: {
        opacity: h ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: `${s.sm}px ${s.md}px`,
        borderBottom: `1px solid ${w.border}`,
        height: ft,
        backgroundColor: h ? w.secondary : t % 2 === 0 ? "#ffffff" : w.secondary,
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
          ve,
          {
            style: {
              marginRight: s.md,
              cursor: "grab",
              color: w.muted,
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
                          marginRight: s.xs,
                          fontSize: B.xs,
                          padding: `1px ${s.xs}px`,
                          background: r === "left" ? w.accent : "#f6ffed",
                          color: r === "left" ? w.primary : w.success,
                          borderRadius: A.sm,
                          flexShrink: 0
                        },
                        children: g(r === "left" ? "labels.left" : "labels.right")
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
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(ue, { title: R(), children: /* @__PURE__ */ n(
                  M,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      Ge,
                      {
                        style: {
                          color: C(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: z,
                    style: { marginRight: s.xs, padding: `0 ${s.sm}px` }
                  }
                ) }),
                /* @__PURE__ */ n(be, { checked: i, size: "small", onChange: () => o(e) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, pt = ({
  columns: e,
  moveColumn: t,
  toggleVisibility: i,
  setFixedStatus: r,
  resetToDefault: l,
  onCancel: d,
  onApply: o
}) => {
  const a = e.filter((m) => m.visible).length, c = e.length, { t: g } = j(), f = e.filter((m) => m.fixed === "left").length, h = e.filter((m) => m.fixed === "right").length;
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        backgroundColor: "#fff",
        boxShadow: "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08)",
        borderRadius: 8,
        width: 320,
        maxHeight: 500,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              background: w.secondary,
              padding: s.md,
              fontWeight: 700,
              borderBottom: `1px solid ${w.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ n(H.Title, { level: 5, style: { margin: 0 }, children: g("labels.customizeTableColumns") }),
              /* @__PURE__ */ n(ue, { title: g("btns.reset"), children: /* @__PURE__ */ n(M, { type: "text", icon: /* @__PURE__ */ n(Ke, {}), onClick: l, style: { color: w.primary } }) })
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              paddingLeft: s.sm,
              paddingRight: s.sm,
              paddingTop: s.xs,
              paddingBottom: s.xs,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: `1px solid ${w.border}`,
              background: w.secondary
            },
            children: [
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(
                  ne,
                  {
                    count: a,
                    color: w.primary,
                    size: "small",
                    overflowCount: 999,
                    style: { marginRight: s.sm }
                  }
                ),
                /* @__PURE__ */ n(H.Text, { type: "secondary", style: { fontSize: 12 }, children: g("texts.columnsVisible", { count: a, total: c }) })
              ] }),
              (f > 0 || h > 0) && /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                f > 0 && /* @__PURE__ */ n(ne, { count: f, size: "small", color: w.primary, style: { marginRight: s.xs } }),
                h > 0 && /* @__PURE__ */ n(ne, { count: h, size: "small", color: w.success })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n("div", { style: { overflow: "auto", flex: 1 }, children: e.map((m, C) => /* @__PURE__ */ n(
          mt,
          {
            columnKey: m.key,
            index: C,
            isVisible: m.visible,
            fixed: m.fixed,
            title: m.title,
            moveColumn: t,
            toggleVisibility: i,
            setFixedStatus: r
          },
          m.key
        )) }),
        /* @__PURE__ */ n(He, { style: { margin: 0 } }),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              paddingTop: s.md,
              paddingBottom: s.md,
              paddingLeft: s.lg,
              paddingRight: s.lg,
              display: "flex",
              justifyContent: "flex-end",
              gap: s.xs,
              background: w.secondary
            },
            children: [
              /* @__PURE__ */ n(M, { block: !0, size: "middle", onClick: d, children: g("btns.cancel") }),
              /* @__PURE__ */ n(M, { block: !0, type: "primary", size: "middle", onClick: o, children: g("btns.apply") })
            ]
          }
        )
      ]
    }
  );
}, yt = ({ title: e, columnKey: t, index: i, moveColumn: r }) => {
  const l = J(null), [, d] = Ce({
    accept: le,
    hover(c) {
      if (!l.current) return;
      const g = c.index, f = i;
      g !== f && (r(g, f), c.index = f);
    }
  }), [{ isDragging: o }, a] = we({
    type: le,
    item: { index: i, columnKey: t },
    collect: (c) => ({
      isDragging: c.isDragging()
    })
  });
  return a(d(l)), /* @__PURE__ */ n(
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
function xt(e) {
  const t = (u) => u ? "children" in u ? (u.key || "") ?? "" : (u.key || u.dataIndex) ?? "" : "", i = re(() => e.map(t).filter(Boolean), [e]), r = () => {
    const u = {};
    for (let x = 0; x < e.length; x++) {
      const v = e[x];
      if (!v || "children" in v) continue;
      const T = t(v);
      T && (u[T] = {
        key: T,
        visible: !0,
        fixed: v.fixed ?? !1,
        originalIndex: x
      });
    }
    return u;
  }, [l, d] = _(() => r()), [o, a] = _(() => r()), [c, g] = _(() => i), [f, h] = _(() => i);
  ie(() => {
    const u = r(), x = e.map(t).filter(Boolean);
    d(u), a(u), g(x), h(x);
  }, [e]);
  const m = N(() => {
    a({ ...l }), h([...c]);
  }, [l, c]);
  return {
    getColumnKey: t,
    getVisibleColumns: () => c.filter((u) => {
      var x;
      return (x = l[u]) == null ? void 0 : x.visible;
    }).map((u) => {
      var x;
      return {
        key: u,
        fixed: ((x = l[u]) == null ? void 0 : x.fixed) ?? !1
      };
    }),
    getEditingColumns: () => f.map((u) => {
      var x, v;
      return {
        key: u,
        visible: ((x = o[u]) == null ? void 0 : x.visible) ?? !1,
        fixed: ((v = o[u]) == null ? void 0 : v.fixed) ?? !1
      };
    }),
    startEditing: m,
    applyChanges: () => {
      d(o), g(f);
    },
    cancelChanges: () => {
      a({ ...l }), h([...c]);
    },
    resetToDefault: () => {
      a(r()), h([...i]);
    },
    moveColumn: (u, x) => {
      const v = [...f], T = v[u];
      v.splice(u, 1), v.splice(x, 0, T), h(v);
    },
    toggleVisibility: (u) => {
      var v;
      const x = Object.values(o).filter((T) => T.visible).length;
      (v = o[u]) != null && v.visible && x <= 1 || a((T) => {
        var D;
        return {
          ...T,
          [u]: {
            ...T[u],
            visible: !((D = T[u]) != null && D.visible)
          }
        };
      });
    },
    setFixedStatus: (u, x) => {
      a((v) => ({
        ...v,
        [u]: {
          ...v[u],
          fixed: x
        }
      }));
    }
  };
}
const bt = (e, t, i) => {
  const r = J(null), l = N(
    (a) => {
      var S, k, y;
      if (!a) return;
      const c = ((S = a.querySelector("thead.ant-table-thead")) == null ? void 0 : S.clientHeight) ?? 0, g = 8;
      if (e) {
        const b = +e + c - g, u = a.querySelector("div.ant-table-placeholder");
        u instanceof HTMLElement && (u.style.minHeight = `${b}px`, u.style.maxHeight = `${b}px`);
        const x = a.querySelector("div.ant-table-container");
        return x instanceof HTMLElement && (x.style.minHeight = `${b}px`, x.style.maxHeight = `${b}px`), e;
      }
      const f = ((k = a.querySelector("div.ant-table-footer")) == null ? void 0 : k.clientHeight) ?? 0, h = i ? 24 : 40, m = a.clientHeight ?? 0, C = ((y = t.current) == null ? void 0 : y.clientHeight) ?? 0, R = m - c - f - C - g - 16 - h, I = a.querySelector("div.ant-table-wrapper");
      return I instanceof HTMLElement && (I.style.maxHeight = `${R + c}px`, I.style.height = "100%"), R;
    },
    [e, t, i]
  ), d = Pe({
    refreshMode: "debounce",
    onResize: () => {
      d.ref.current && l(d.ref.current);
    },
    refreshRate: 1
  }), o = N(() => {
    const a = d.ref.current;
    if (a)
      return l(a);
  }, [l, d.ref]);
  return {
    tableWrapperRef: d.ref,
    tableRef: r,
    getTableHeight: o
  };
}, vt = ({
  headerRef: e,
  isMobile: t,
  searchLabel: i,
  columnsLabel: r,
  customizeColumnsTooltip: l,
  onSearchInputChange: d,
  searchText: o = "",
  columnMenuOpen: a,
  onColumnMenuOpenChange: c,
  columnManagerPanel: g,
  actionButtons: f
}) => {
  const h = !!d;
  return /* @__PURE__ */ p(
    "div",
    {
      ref: e,
      style: {
        marginBottom: s.lg,
        display: "flex",
        flexDirection: t ? "column" : "row",
        justifyContent: "space-between",
        alignItems: t ? "stretch" : "center",
        background: w.secondary,
        padding: t ? `${s.sm}px` : `${s.sm}px ${s.md}px`,
        borderRadius: A.lg,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: t ? s.sm : 0
      },
      children: [
        h && /* @__PURE__ */ n("div", { style: { position: "relative", width: t ? "100%" : 320 }, children: /* @__PURE__ */ n(
          oe,
          {
            placeholder: i,
            allowClear: !0,
            prefix: /* @__PURE__ */ n(he, { style: { color: w.primary, fontSize: 16 } }),
            style: {
              borderRadius: A.md,
              padding: `${s.sm}px ${s.md}px`,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${w.border}`,
              width: "100%"
            },
            onChange: d,
            value: o
          }
        ) }),
        /* @__PURE__ */ p(
          V,
          {
            size: t ? "small" : "middle",
            direction: t ? "vertical" : "horizontal",
            style: {
              width: t ? "100%" : "auto",
              justifyContent: "flex-end",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ n(ue, { title: l, children: /* @__PURE__ */ n(
                Ae,
                {
                  open: a,
                  onOpenChange: c,
                  dropdownRender: () => g,
                  trigger: ["click"],
                  children: /* @__PURE__ */ n(
                    M,
                    {
                      icon: t ? /* @__PURE__ */ n(ve, {}) : /* @__PURE__ */ n(Ue, {}),
                      style: {
                        borderRadius: A.md,
                        display: "flex",
                        alignItems: "center",
                        gap: s.sm,
                        backgroundColor: a ? w.accent : "white",
                        borderColor: a ? w.primary : w.border,
                        color: a ? w.primary : "inherit",
                        boxShadow: a ? `0 0 0 2px ${w.accent}` : "none",
                        padding: t ? `${s.xs}px ${s.md}px` : `${s.xs}px ${s.lg}px`,
                        height: "auto",
                        width: t ? "100%" : "auto",
                        justifyContent: t ? "center" : "flex-start"
                      },
                      children: r
                    }
                  )
                }
              ) }),
              f
            ]
          }
        )
      ]
    }
  );
}, dn = ({
  totalCount: e,
  onSearch: t,
  actionButtons: i,
  searchDebounceMs: r = 300,
  ...l
}) => {
  var fe, me;
  const d = J(null), o = J(null), { t: a } = j(), { isMobile: c } = P(), { tableWrapperRef: g, tableRef: f, getTableHeight: h } = bt(
    (fe = l.scroll) == null ? void 0 : fe.y,
    d,
    c
  ), m = l.columns || [], [C, z] = _(!1), [R, I] = _(""), {
    getColumnKey: S,
    getVisibleColumns: k,
    getEditingColumns: y,
    startEditing: b,
    applyChanges: u,
    cancelChanges: x,
    resetToDefault: v,
    moveColumn: T,
    toggleVisibility: D,
    setFixedStatus: Q
  } = xt(m);
  ie(() => {
    C && b();
  }, [C]), ie(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const q = N(
    (W) => {
      const G = W.target.value;
      I(G), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        t == null || t(G);
      }, r);
    },
    [t, r]
  ), Re = () => {
    u(), z(!1);
  }, ke = () => {
    x(), z(!1);
  }, ee = re(() => {
    const W = k(), G = new Map(m.map(($) => [S($), $]));
    return W.map(($, te) => {
      const K = G.get($.key);
      return K ? {
        ...K,
        fixed: c ? !1 : $.fixed,
        title: /* @__PURE__ */ n(yt, { title: K.title, columnKey: $.key, index: te, moveColumn: T }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: c ? "normal" : "nowrap",
            padding: c ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [m, k, S, c, T]), De = re(() => {
    const W = y(), G = new Map(m.map(($) => [S($), $]));
    return W.map(($) => {
      var te, K;
      return {
        key: $.key,
        visible: $.visible,
        fixed: $.fixed,
        title: ((K = (te = G.get($.key)) == null ? void 0 : te.title) == null ? void 0 : K.toString()) || $.key
      };
    });
  }, [m, y, S]);
  return /* @__PURE__ */ n(Ne, { backend: Qe, children: /* @__PURE__ */ p("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ n(
      vt,
      {
        headerRef: d,
        isMobile: c,
        searchLabel: a("labels.search"),
        columnsLabel: a("btns.columns"),
        customizeColumnsTooltip: a("labels.customizeTableColumns"),
        onSearchInputChange: t ? q : void 0,
        searchText: R,
        columnMenuOpen: C,
        onColumnMenuOpenChange: z,
        columnManagerPanel: /* @__PURE__ */ n(
          pt,
          {
            columns: De,
            moveColumn: T,
            toggleVisibility: D,
            setFixedStatus: Q,
            resetToDefault: v,
            onCancel: ke,
            onApply: Re
          }
        ),
        actionButtons: i
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: g, children: /* @__PURE__ */ n(
      Oe,
      {
        ...l,
        columns: ee,
        virtual: l.virtual ?? !0,
        ref: f,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: ct,
          showSizeChanger: !1,
          size: c ? "small" : "default",
          ...l.pagination || {}
        },
        className: `w-full h-full ${l.className || ""}`,
        scroll: {
          x: ((me = l.scroll) == null ? void 0 : me.x) ?? ((ee == null ? void 0 : ee.length) ?? 0) * (c ? 150 : 200),
          y: h()
        },
        rowKey: (W) => W.id,
        size: c ? "small" : "middle"
      }
    ) })
  ] }) });
}, Te = "calc(100dvh - 300px)", Ct = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: Te }
}, un = {
  size: "small",
  pagination: !1
}, gn = (e, t) => {
  const r = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? r : `${r} overflow-hidden`;
}, hn = (e, t) => {
  const i = Te;
  return e && t != null && t > 0 ? { x: t, y: i } : { ...Ct.scroll };
}, fn = ({
  children: e,
  grow: t = !0,
  className: i
}) => /* @__PURE__ */ n("div", { className: ["min-h-0 w-full", t ? "flex-1" : "", i ?? ""].filter(Boolean).join(" "), children: e }), Ie = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: i,
  clearFilters: r,
  placeholder: l
}) => {
  const { t: d } = j();
  return /* @__PURE__ */ p("div", { style: { padding: s.sm }, children: [
    /* @__PURE__ */ n(
      oe,
      {
        placeholder: l ?? d("labels.search"),
        value: t[0],
        onChange: (o) => e(o.target.value ? [o.target.value] : []),
        onPressEnter: () => i(),
        style: { marginBottom: s.sm, display: "block" }
      }
    ),
    /* @__PURE__ */ p(V, { children: [
      /* @__PURE__ */ n(M, { type: "primary", onClick: () => i(), size: "small", style: { width: 90 }, children: d("global.btns.ok") }),
      /* @__PURE__ */ n(
        M,
        {
          onClick: () => {
            r == null || r(), i();
          },
          size: "small",
          style: { width: 90 },
          children: d("global.btns.reset")
        }
      )
    ] })
  ] });
}, mn = (e, t = {}) => {
  const { mode: i = "client", placeholder: r } = t;
  return {
    filterDropdown: (l) => /* @__PURE__ */ n(Ie, { ...l, placeholder: r }),
    filterIcon: (l) => /* @__PURE__ */ n(he, { style: { color: l ? "var(--color-brand-primary)" : void 0 } }),
    ...i === "client" && {
      onFilter: (l, d) => String(d[e] ?? "").toLowerCase().includes(String(l).toLowerCase())
    }
  };
}, pn = (e, t = {}) => {
  const { mode: i = "client", placeholder: r } = t;
  return {
    filterDropdown: (l) => /* @__PURE__ */ n(Ie, { ...l, placeholder: r }),
    filterIcon: (l) => /* @__PURE__ */ n(he, { style: { color: l ? "var(--color-brand-primary)" : void 0 } }),
    ...i === "client" && {
      onFilter: (l, d) => {
        const o = String(l).toLowerCase();
        return e.some(
          (a) => String(d[a] ?? "").toLowerCase().includes(o)
        );
      }
    }
  };
}, yn = (e, t, i, r = {}) => {
  const { mode: l = "client" } = r;
  return {
    filters: Object.values(e).map((d) => ({
      text: t(d),
      value: d
    })),
    ...l === "client" && {
      onFilter: (d, o) => o[i] === d
    }
  };
}, xn = (e, t, i, r = {}) => {
  const { mode: l = "client" } = r;
  return {
    filters: [
      { text: t, value: !0 },
      { text: i, value: !1 }
    ],
    ...l === "client" && {
      onFilter: (d, o) => o[e] === d
    }
  };
}, bn = ({
  onCancel: e,
  onFormSubmit: t,
  open: i,
  children: r,
  title: l,
  width: d = "50%",
  footer: o,
  loading: a = !1,
  btns: c
}) => {
  var h, m;
  const { t: g } = j(), f = /* @__PURE__ */ p(Z, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(M, { disabled: a, onClick: () => e(), type: "default", children: ((h = c == null ? void 0 : c.cancel) == null ? void 0 : h.label) ?? g("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(M, { disabled: a, onClick: t, block: !1, type: "primary", loading: a, children: ((m = c == null ? void 0 : c.save) == null ? void 0 : m.label) ?? g("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    ge,
    {
      centered: !0,
      maskClosable: !1,
      width: d,
      onCancel: e,
      open: i,
      footer: o ?? f,
      title: !!l && /* @__PURE__ */ n(Z, { justify: "start", align: "middle", children: /* @__PURE__ */ n(H.Title, { level: 2, children: l }) }),
      children: /* @__PURE__ */ n(je, { spinning: a, style: { maxHeight: "100%" }, children: r })
    }
  );
}, wt = "mobile-fullscreen-modal", vn = ({
  splitFooterButtonsOnMobile: e = !0,
  rootClassName: t,
  width: i,
  style: r,
  styles: l,
  okButtonProps: d,
  cancelButtonProps: o,
  ...a
}) => {
  const { isMobile: c } = P(), g = [t, c ? wt : ""].filter(Boolean).join(" "), f = c ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...r
  } : r, h = c && e ? {
    ...d,
    style: { flex: 1, ...(d == null ? void 0 : d.style) ?? {} }
  } : d, m = c && e ? {
    ...o,
    style: { flex: 1, ...(o == null ? void 0 : o.style) ?? {} }
  } : o;
  return /* @__PURE__ */ n(
    ge,
    {
      ...a,
      rootClassName: g || void 0,
      width: c ? "100%" : i,
      style: f,
      styles: l,
      okButtonProps: h,
      cancelButtonProps: m
    }
  );
}, { Text: St } = H, Tt = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, Cn = ({
  open: e,
  onConfirm: t,
  onCancel: i,
  title: r,
  description: l,
  confirmLabel: d,
  cancelLabel: o,
  variant: a = "danger",
  loading: c = !1,
  icon: g,
  children: f
}) => {
  const { t: h } = j();
  return /* @__PURE__ */ p(
    ge,
    {
      open: e,
      onCancel: i,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ p(Z, { align: "middle", style: { gap: s.sm }, children: [
        g ?? /* @__PURE__ */ n(Xe, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: r })
      ] }),
      footer: /* @__PURE__ */ p(Z, { align: "middle", justify: "end", style: { gap: s.sm }, children: [
        /* @__PURE__ */ n(M, { disabled: c, onClick: i, children: o ?? h("global.btns.cancel") }),
        /* @__PURE__ */ n(M, { type: "primary", ...Tt[a], loading: c, onClick: t, children: d ?? h("global.btns.confirm") })
      ] }),
      children: [
        l && /* @__PURE__ */ n(St, { type: "secondary", children: l }),
        f
      ]
    }
  );
}, { Title: It, Text: zt } = H, ze = ({
  title: e,
  variant: t = "page",
  subtitle: i,
  breadcrumb: r,
  breadcrumbExtra: l,
  onBack: d,
  filters: o,
  actions: a
}) => {
  const { isMobile: c } = P(), g = t === "page", f = g ? 4 : 5, h = g ? s.lg : s.md, m = g ? s.md : s.sm, C = !!(o || a);
  return /* @__PURE__ */ p("div", { style: { marginBottom: h }, children: [
    g && (r || l) && /* @__PURE__ */ p(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: s.md,
          marginBottom: s.sm,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ n("div", { style: { flex: "1 1 auto", minWidth: 0 }, children: r ? /* @__PURE__ */ n(_e, { ...r }) : null }),
          l ? /* @__PURE__ */ n(V, { size: s.sm, wrap: !0, style: { flexShrink: 0 }, children: l }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: c ? "flex-start" : "center",
          flexDirection: c ? "column" : "row",
          gap: c ? m : 0
        },
        children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: s.md }, children: [
            g && d && /* @__PURE__ */ n(M, { type: "text", icon: /* @__PURE__ */ n(Ze, {}), onClick: d, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ n(It, { level: f, style: { margin: 0 }, children: e }),
              i && /* @__PURE__ */ n(zt, { type: "secondary", style: { marginTop: s.xs, display: "block" }, children: i })
            ] })
          ] }),
          C && /* @__PURE__ */ p(V, { size: s.sm, wrap: !0, style: { width: c ? "100%" : void 0 }, children: [
            o,
            a
          ] })
        ]
      }
    )
  ] });
}, wn = (e) => /* @__PURE__ */ n(ze, { variant: "section", ...e }), Sn = (e) => /* @__PURE__ */ n(ze, { variant: "page", ...e }), { Text: Rt } = H, Tn = ({ label: e, children: t, style: i }) => /* @__PURE__ */ p(
  F,
  {
    size: "small",
    styles: { body: { padding: `${s.md}px ${s.lg}px` } },
    style: i,
    children: [
      /* @__PURE__ */ n(
        Rt,
        {
          type: "secondary",
          style: {
            fontSize: B.xs,
            display: "block",
            marginBottom: s.xs
          },
          children: e
        }
      ),
      t
    ]
  }
), In = () => /* @__PURE__ */ n(F, { variant: "borderless", children: /* @__PURE__ */ n(E, {}) }), X = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), zn = ({
  variant: e = "hero",
  cards: t = 4,
  rows: i,
  inputRows: r = 5,
  showAvatar: l = !0,
  gap: d = s.lg,
  className: o,
  style: a,
  footer: c
}) => {
  const g = d, f = i ?? 6, h = i ?? 5;
  return e === "stacked" ? /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(
      E,
      {
        active: !0,
        title: { width: "30%" },
        paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
      }
    ) }),
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 4 } }) }),
    c
  ] }) : e === "content" ? /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, title: !0, paragraph: { rows: f } }) }),
    c
  ] }) : e === "fields" ? /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(V, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: r }).map((m, C) => /* @__PURE__ */ n(E.Input, { active: !0, size: "large", style: { width: C % 2 === 0 ? "100%" : "72%" } }, C)) }) }),
    c
  ] }) : e === "grid" ? /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: s.md
        },
        children: [...Array(Math.max(1, t))].map((m, C) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, C))
      }
    ),
    c
  ] }) : e === "rows" ? /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(V, { direction: "vertical", style: { width: "100%" }, size: s.md, children: Array.from({ length: h }).map((m, C) => /* @__PURE__ */ n(E, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, C)) }) }),
    c
  ] }) : /* @__PURE__ */ p("div", { className: o, style: { ...X(g), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(
      E,
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
          gap: s.md
        },
        children: [...Array(Math.max(1, t))].map((m, C) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, C))
      }
    ),
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 4 } }) }),
    c
  ] });
}, { Text: ye } = H, Rn = ({ icon: e, title: t, description: i, action: r }) => /* @__PURE__ */ p(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: `${s["3xl"]}px ${s["2xl"]}px`,
      textAlign: "center"
    },
    children: [
      e ?? /* @__PURE__ */ n(pe, { image: pe.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(ye, { strong: !0, style: { fontSize: B.lg, marginTop: e ? s.lg : 0, display: "block" }, children: t }),
      i && /* @__PURE__ */ n(ye, { type: "secondary", style: { marginTop: s.sm, display: "block", maxWidth: 400 }, children: i }),
      r && /* @__PURE__ */ n("div", { style: { marginTop: s.lg }, children: r })
    ]
  }
), kt = (e) => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: e
}), kn = ({
  items: e,
  left: t,
  right: i,
  className: r,
  gap: l = s.md,
  dividerColor: d = "var(--color-border-light, rgba(0,0,0,0.06))"
}) => {
  const o = e !== void 0 ? e : [t, i].filter((c) => c != null);
  return o.length === 0 ? null : /* @__PURE__ */ n("div", { className: r, style: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap: l
  }, children: o.map((c, g) => /* @__PURE__ */ p(qe, { children: [
    g > 0 ? /* @__PURE__ */ n("div", { style: kt(d), "aria-hidden": !0 }) : null,
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
        children: c
      }
    )
  ] }, g)) });
}, Dn = ({
  width: e = 400,
  height: t = 200,
  onSign: i,
  disabled: r = !1,
  clearLabel: l,
  confirmLabel: d
}) => {
  const { t: o } = j(), a = J(null), [c, g] = _(!1), [f, h] = _(!1), m = N(() => {
    const y = a.current;
    return y ? y.getContext("2d") : null;
  }, []), C = N(() => {
    const y = m(), b = a.current;
    !y || !b || (y.clearRect(0, 0, b.width, b.height), h(!1));
  }, [m]);
  ie(() => {
    const y = m();
    if (!y) return;
    const b = getComputedStyle(a.current).getPropertyValue("--color-text-primary").trim();
    y.strokeStyle = b || "#000", y.lineWidth = 2, y.lineCap = "round", y.lineJoin = "round";
  }, [m]);
  const z = (y) => {
    const b = a.current;
    if (!b) return null;
    const u = b.getBoundingClientRect(), x = b.width / u.width, v = b.height / u.height;
    if ("touches" in y) {
      const T = y.touches[0];
      return T ? {
        x: (T.clientX - u.left) * x,
        y: (T.clientY - u.top) * v
      } : null;
    }
    return {
      x: (y.clientX - u.left) * x,
      y: (y.clientY - u.top) * v
    };
  }, R = (y) => {
    if (r) return;
    const b = m(), u = z(y);
    !b || !u || (b.beginPath(), b.moveTo(u.x, u.y), g(!0));
  }, I = (y) => {
    if (!c || r) return;
    const b = m(), u = z(y);
    !b || !u || (b.lineTo(u.x, u.y), b.stroke(), h(!0));
  }, S = () => {
    g(!1);
  }, k = () => {
    const y = a.current;
    !y || !f || i(y.toDataURL("image/png"));
  };
  return /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: s.xs }, children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: a,
        width: e,
        height: t,
        style: {
          border: "1px solid var(--color-border, #d9d9d9)",
          borderRadius: A.lg,
          cursor: r ? "default" : "crosshair",
          touchAction: "none",
          width: "100%",
          maxWidth: e,
          height: "auto",
          aspectRatio: `${e} / ${t}`
        },
        onMouseDown: R,
        onMouseMove: I,
        onMouseUp: S,
        onMouseLeave: S,
        onTouchStart: R,
        onTouchMove: I,
        onTouchEnd: S
      }
    ),
    !r && /* @__PURE__ */ p(V, { children: [
      /* @__PURE__ */ n(M, { size: "small", icon: /* @__PURE__ */ n(Je, {}), onClick: C, disabled: !f, children: l ?? o("global.btns.clear") }),
      /* @__PURE__ */ n(M, { size: "small", type: "primary", onClick: k, disabled: !f, children: d ?? o("global.btns.confirm") })
    ] })
  ] });
}, { Text: xe } = H, $n = ({ value: e, label: t, copyTooltip: i, copiedTooltip: r }) => {
  const { t: l } = j();
  return e ? /* @__PURE__ */ p(
    "div",
    {
      style: {
        background: "var(--color-highlight-bg, #f6f8fa)",
        border: "1px solid var(--color-highlight-border, #e1e4e8)",
        borderRadius: A.lg,
        padding: `${s.md}px ${s["2xl"]}px`,
        display: "flex",
        alignItems: "center",
        gap: s.xl
      },
      children: [
        /* @__PURE__ */ n(
          xe,
          {
            style: {
              fontSize: B.xs,
              fontWeight: ce.bold,
              color: "var(--color-highlight-text, #586069)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              flexShrink: 0
            },
            children: t ?? l("global.labels.primaryKey")
          }
        ),
        /* @__PURE__ */ n(
          xe,
          {
            copyable: {
              tooltips: [
                i ?? l("global.btns.copy"),
                r ?? l("global.btns.copied")
              ]
            },
            style: {
              fontFamily: "monospace",
              fontSize: B.md,
              fontWeight: ce.bold,
              color: "var(--color-text-primary, #24292e)"
            },
            children: e
          }
        )
      ]
    }
  ) : null;
}, { Text: Dt } = H, $t = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, Ln = ({ status: e, label: t }) => /* @__PURE__ */ p("span", { style: { display: "inline-flex", alignItems: "center", gap: s.sm }, children: [
  /* @__PURE__ */ n(ne, { color: $t[e] }),
  /* @__PURE__ */ n(Dt, { children: t })
] }), se = (e) => !(e == null || typeof e == "string" && e.trim() === ""), Lt = (e) => Array.isArray(e) ? e : Object.entries(e).map(([t, i]) => ({
  label: t === "" ? void 0 : t,
  value: i
})), de = (e) => Array.isArray(e) ? e.length === 0 ? null : e.length === 1 ? e[0] : e.map((t, i) => /* @__PURE__ */ n("div", { children: t }, i)) : e, Mt = "entity-info-value-only", L = "ant-descriptions", Ft = (e, t) => {
  if (e == null) return t ? 1 : 2;
  if (typeof e == "number") return e;
}, Et = ({
  items: e,
  labelStyle: t,
  contentStyle: i,
  labelClassName: r,
  contentClassName: l
}) => /* @__PURE__ */ n("div", { className: `${L}-view`, children: /* @__PURE__ */ n("table", { children: /* @__PURE__ */ n("tbody", { children: e.map((d, o) => se(d.label) ? /* @__PURE__ */ p("tr", { className: `${L}-row`, children: [
  /* @__PURE__ */ n("th", { className: `${L}-item-label ${r ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: t, children: d.label }) }),
  /* @__PURE__ */ n("td", { className: `${L}-item-content ${l ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: i, children: de(d.value) }) })
] }, o) : /* @__PURE__ */ n("tr", { className: `${L}-row ${L}-row--value-only`, children: /* @__PURE__ */ n("td", { colSpan: 2, className: `${L}-item-content ${l ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: i, children: de(d.value) }) }) }, o)) }) }) }), Mn = ({
  items: e,
  loading: t = !1,
  column: i,
  title: r,
  bordered: l = !1,
  layout: d,
  colon: o,
  extra: a,
  className: c,
  style: g,
  styles: f,
  classNames: h,
  rootClassName: m,
  id: C
}) => {
  const { isMobile: z } = P(), R = Lt(e), I = re(() => R.map((D, Q) => {
    const q = se(D.label);
    return {
      key: Q,
      label: q ? D.label : void 0,
      span: D.span,
      className: q ? void 0 : Mt,
      children: de(D.value)
    };
  }), [R]);
  if (t)
    return /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: R.length }, title: !!r && { width: "30%" } });
  const S = i ?? (z ? 1 : 2), k = d ?? (z ? "vertical" : "horizontal"), y = {
    ...f,
    label: {
      fontSize: B.sm,
      ...f == null ? void 0 : f.label
    }
  }, b = ["entity-info", c].filter(Boolean).join(" "), u = R.some((D) => !se(D.label)), x = R.some((D) => D.span != null), v = Ft(i, z);
  if (l && k === "horizontal" && !x && (u || v === 1)) {
    const D = z ? `${L}-small` : void 0, Q = h == null ? void 0 : h.label, q = h == null ? void 0 : h.content;
    return /* @__PURE__ */ p(
      "div",
      {
        id: C,
        className: [
          L,
          `${L}-bordered`,
          `${L}-horizontal`,
          "entity-info--bordered-native",
          D,
          b,
          m,
          h == null ? void 0 : h.root
        ].filter(Boolean).join(" "),
        style: { ...g, ...f == null ? void 0 : f.root },
        children: [
          (r || a) && /* @__PURE__ */ p(
            "div",
            {
              className: [`${L}-header`, h == null ? void 0 : h.header].filter(Boolean).join(" "),
              style: f == null ? void 0 : f.header,
              children: [
                r && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${L}-title`, h == null ? void 0 : h.title].filter(Boolean).join(" "),
                    style: f == null ? void 0 : f.title,
                    children: r
                  }
                ),
                a && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${L}-extra`, h == null ? void 0 : h.extra].filter(Boolean).join(" "),
                    style: f == null ? void 0 : f.extra,
                    children: a
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
            Et,
            {
              items: R,
              labelStyle: y.label,
              contentStyle: y.content,
              labelClassName: Q,
              contentClassName: q
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ n(
    Ye,
    {
      id: C,
      title: r,
      extra: a,
      column: S,
      bordered: l,
      layout: k,
      colon: o,
      className: b,
      rootClassName: m,
      style: g,
      styles: y,
      classNames: h,
      size: z ? "small" : "default",
      items: I
    }
  );
}, Fn = {
  mobileMax: "md",
  compactMax: "lg"
}, En = "mobile-fullscreen-modal";
function Bn({ children: e, theme: t }) {
  return /* @__PURE__ */ n(We, { theme: t, children: e });
}
const Hn = (e, t, i) => {
  const r = new FormData();
  function l(o, a) {
    if (!d(a))
      if (a = a || "", o instanceof File)
        r.append(a, o);
      else if (o instanceof Se)
        o && r.append(a, o.toISOString());
      else if (Array.isArray(o))
        for (let c = 0; c < o.length; c++)
          l(o[c], a + "[" + c + "]");
      else if (typeof o == "object" && o !== null)
        for (const c in o)
          Object.prototype.hasOwnProperty.call(o, c) && (a === "" ? l(o[c], c) : l(o[c], a + "." + c));
      else
        o !== null && typeof o < "u" && r.append(a, String(o));
  }
  function d(o) {
    return Array.isArray(i) && i.some(function(a) {
      return a === o;
    });
  }
  return l(e, t || ""), r;
}, Bt = (e) => typeof e == "string" && at.test(e), Ht = (e) => {
  if (e == null || typeof e != "object")
    return e;
  const t = { ...e };
  for (const i of Object.keys(t)) {
    const r = t[i];
    Bt(r) ? t[i] = Se(r) : typeof r == "object" && r !== null && (t[i] = Ht(r));
  }
  return t;
};
export {
  kn as ActionColumnRow,
  bn as BaseModal,
  ln as CheckboxFormItem,
  pt as ColumnManager,
  Cn as ConfirmModal,
  zn as ContentLoader,
  Rn as ContentState,
  un as DETAIL_TABLE_PROPS,
  le as DRAG_TYPE,
  Pt as DateFormItem,
  yt as DraggableHeader,
  mt as DraggableMenuItem,
  Mn as EntityInfo,
  on as FormItem,
  cn as FormItemWrapper,
  sn as FormSection,
  vn as FullscreenMobileModal,
  Nt as InputFormItem,
  Te as LIST_TABLE_BODY_MAX_Y,
  Ct as LIST_TABLE_PROPS,
  fn as ListPageTableArea,
  En as MOBILE_FULLSCREEN_MODAL_CLASS,
  ze as MainHeader,
  dn as MainTable,
  vt as MainTableToolbar,
  en as NumberFormItem,
  Sn as PageHeader,
  $n as PrimaryKey,
  Fn as RESPONSIVE_BREAKPOINTS,
  wn as SectionHeader,
  Qt as SelectFormItem,
  Dn as SignatureCanvas,
  In as SkeletonCard,
  Bn as SoftwareifyThemeProvider,
  Tn as StatCard,
  Ln as StatusBadge,
  nn as SwitchFormItem,
  tn as TextAreaFormItem,
  Ie as TextFilterDropdown,
  rn as TimePickerFormItem,
  xn as booleanFilterColumnProps,
  ut as brand,
  U as colors,
  lt as dateFormat,
  Xt as dateFormatISO,
  ot as dateTimeFormat,
  Ut as dateTimeFormatWithoutSeconds,
  Ht as datesToDayjs,
  ct as defaultTablePageSize,
  Jt as dropdownItemsMaxTake,
  yn as enumFilterColumnProps,
  B as fontSize,
  ce as fontWeight,
  at as isoDateFormatRegex,
  gn as listPageRootClassName,
  hn as listTableScroll,
  Hn as objectToFormData,
  Zt as passwordRegex,
  dt as phoneFormatRegex,
  A as radius,
  Kt as registerLocale,
  an as softwareifyTheme,
  s as spacing,
  mn as textSearchColumnProps,
  pn as textSearchMultiFieldProps,
  st as uriRegex,
  xt as useColumnManager,
  Y as useFormRules,
  j as useLibTranslation,
  P as useResponsive,
  bt as useTableFullHeightCalculator
};
