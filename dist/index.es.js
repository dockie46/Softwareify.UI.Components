import { jsx as n, jsxs as m } from "react/jsx-runtime";
import { Form as N, Input as ie, Select as Oe, DatePicker as Ae, InputNumber as Be, Switch as me, TimePicker as je, Checkbox as Ne, Row as Z, Col as ae, Grid as _e, Typography as A, Card as F, Skeleton as E, Tooltip as oe, Button as $, Badge as ne, Divider as We, Space as Y, Dropdown as Ye, Table as qe, Modal as pe, Spin as Ge, Breadcrumb as Ve, Empty as Ce, Descriptions as Ke, ConfigProvider as Ue } from "antd";
import { useTranslation as Xe } from "react-i18next";
import { useRef as q, useMemo as re, useState as j, useEffect as Q, useCallback as J, Fragment as Ze } from "react";
import { MenuOutlined as ye, PushpinOutlined as Te, UndoOutlined as Je, SearchOutlined as be, TableOutlined as Qe, ExclamationCircleOutlined as Pe, ArrowLeftOutlined as et, ClearOutlined as tt } from "@ant-design/icons";
import { useDrop as nt, useDrag as rt, DndProvider as lt } from "react-dnd";
import { HTML5Backend as it } from "react-dnd-html5-backend";
import ke from "dayjs";
function B() {
  return Xe("softwareify-ui");
}
const ot = {
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
}, at = {
  search: "Search...",
  customizeTableColumns: "Customize columns",
  primaryKey: "Primary Key",
  pinColumn: "Pin column",
  fixedLeft: "Fixed left",
  fixedRight: "Fixed right",
  left: "LEFT",
  right: "RIGHT"
}, st = {
  columnsVisible: "{{count}} of {{total}} visible"
}, ct = {
  input: {
    isRequiredField: "is required",
    common: "This field is required",
    incorrectFormat: "{{fieldName}} has incorrect format",
    field: "Field"
  }
}, dt = {
  btns: ot,
  labels: at,
  texts: st,
  validations: ct
};
function Pt(e, t = "en") {
  const r = {
    en: dt
    // Additional locales can be added here in the future
  }[t];
  if (!r) {
    console.warn(`Softwareify UI locale '${t}' not found. Defaulting to 'en'.`);
    return;
  }
  e.addResourceBundle(t, "softwareify-ui", r, !0, !0);
}
const ut = "DD.MM.YYYY", gt = "DD.MM.YYYY HH:mm:ss", en = "DD.MM.YYYY HH:mm", tn = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", ht = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, nn = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", ft = 50, mt = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", pt = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, rn = 2147483646, _ = (e, t, l) => {
  var o;
  const { t: r } = B();
  if (!e) return [];
  const i = (o = e.label) == null ? void 0 : o.toString(), d = [
    {
      required: e.required,
      message: i ? `${e.label ?? l} ${r("validations.input.isRequiredField")}` : r("validations.input.common")
    }
  ];
  return t === "email" && d.push({
    type: t,
    message: r("validations.input.incorrectFormat", {
      fieldName: i ?? r("validations.input.field")
    })
  }), t === "url" && d.push({
    pattern: new RegExp(mt),
    message: r("validations.input.incorrectFormat", {
      fieldName: i ?? r("validations.input.field")
    })
  }), t === "phone" && d.push({
    pattern: new RegExp(pt),
    message: r("validations.input.incorrectFormat", {
      fieldName: i ?? r("validations.input.field")
    })
  }), d ?? e.rules ?? [];
}, ln = ({ elementProps: e, formProps: t }) => {
  const l = _(t, e == null ? void 0 : e.type);
  return /* @__PURE__ */ n(N.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(ie, { ...e }) });
}, on = ({ elementProps: e, formProps: t }) => {
  const l = _(t);
  return /* @__PURE__ */ n(N.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(
    Oe,
    {
      showSearch: !0,
      filterOption: (r, i) => String((i == null ? void 0 : i.label) ?? (i == null ? void 0 : i.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
        r.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      ),
      ...e
    }
  ) });
}, an = ({ formProps: e, elementProps: t }) => {
  const l = _(e);
  return /* @__PURE__ */ n(N.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(
    Ae,
    {
      ...t,
      format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? gt : ut,
      style: { width: "100%", ...t == null ? void 0 : t.style }
    }
  ) });
}, sn = ({ elementProps: e, formProps: t }) => {
  const l = _(t);
  return /* @__PURE__ */ n(N.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(Be, { ...e, style: { width: "100%", ...e == null ? void 0 : e.style } }) });
}, cn = ({ elementProps: e, formProps: t }) => {
  const l = _(t);
  return /* @__PURE__ */ n(N.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(ie.TextArea, { ...e }) });
}, dn = ({ elementProps: e, formProps: t }) => {
  const l = _(t);
  return /* @__PURE__ */ n(N.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, valuePropName: "checked", children: /* @__PURE__ */ n(me, { ...e }) });
}, un = ({ formProps: e, elementProps: t }) => {
  const l = _(e);
  return /* @__PURE__ */ n(N.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(je, { ...t, style: { width: "100%", ...t == null ? void 0 : t.style } }) });
}, gn = ({ formProps: e, elementProps: t, children: l }) => {
  const r = _(e);
  return /* @__PURE__ */ n(N.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? r, valuePropName: "checked", children: /* @__PURE__ */ n(Ne, { ...t, children: l }) });
}, hn = N.Item, yt = {
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
}, H = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, se = {
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
}, O = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
}, fn = {
  token: {
    // Brand colors
    colorPrimary: yt.primary,
    colorBgContainer: U.bgPrimary,
    colorBorder: U.border,
    colorError: U.error,
    colorSuccess: U.success,
    colorWarning: U.warning,
    colorInfo: U.info,
    // Typography
    fontSize: H.base,
    fontSizeHeading1: H["3xl"],
    fontSizeHeading2: H["2xl"],
    fontSizeHeading3: H.xl,
    fontSizeHeading4: H.lg,
    fontSizeHeading5: H.md,
    fontWeightStrong: se.semibold,
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
    borderRadius: O.md,
    borderRadiusLG: O.lg,
    borderRadiusSM: O.sm,
    // Other common tokens
    lineHeight: 1.5
  }
}, mn = ({ firstItem: e, secondItem: t, style: l, gutter: r = s["2xl"] }) => /* @__PURE__ */ m(Z, { gutter: r, style: l, children: [
  /* @__PURE__ */ n(ae, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(ae, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), P = () => {
  const e = _e.useBreakpoint(), t = !e.md, l = !!e.md && !e.lg, r = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: l,
    isCompact: r
  };
}, { Title: bt, Text: xt } = A, pn = ({
  title: e,
  subtitle: t,
  children: l,
  columns: r = 2,
  loading: i = !1
}) => {
  const { isMobile: d } = P(), o = d ? 1 : r;
  return /* @__PURE__ */ m(F, { style: { marginBottom: s.lg }, children: [
    /* @__PURE__ */ m("div", { style: { marginBottom: s.lg }, children: [
      /* @__PURE__ */ n(bt, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(xt, { type: "secondary", style: { display: "block", marginTop: s.xs }, children: t })
    ] }),
    i ? /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(Z, { gutter: s["2xl"], children: o === 1 ? /* @__PURE__ */ n(ae, { span: 24, children: l }) : l })
  ] });
}, le = "DraggableColumn", b = {
  primary: "var(--color-brand-primary, var(--ant-color-primary, #1890ff))",
  secondary: "var(--color-bg-secondary, #f5f7fa)",
  accent: "var(--color-bg-elevated, #e6f7ff)",
  border: "var(--color-border, #e8e8e8)",
  success: "var(--color-success, #52c41a)",
  muted: "var(--color-text-muted, #8c8c8c)"
};
function vt() {
  try {
    return require.resolve("react-dnd"), require.resolve("react-dnd-html5-backend"), !0;
  } catch {
    return !1;
  }
}
function Ct() {
  try {
    return require.resolve("react-resize-detector"), !0;
  } catch {
    return !1;
  }
}
let ce = null, de = null, Ie = !1;
if (vt())
  try {
    const e = require("react-dnd");
    ce = e.useDrag, de = e.useDrop, Ie = !0;
  } catch {
    console.warn("react-dnd is marked as available but failed to import");
  }
const Re = 44, De = ({
  columnKey: e,
  index: t,
  isVisible: l,
  fixed: r,
  title: i,
  toggleVisibility: d,
  setFixedStatus: o
}) => {
  const { t: a } = B(), c = () => r === "left" ? b.primary : r === "right" ? b.success : b.muted, h = (p) => {
    p.stopPropagation();
    let f = !1;
    r === !1 ? f = "left" : r === "left" && (f = "right"), o(e, f);
  }, u = () => a(r === "left" ? "labels.fixedLeft" : r === "right" ? "labels.fixedRight" : "labels.pinColumn");
  return /* @__PURE__ */ m(
    "div",
    {
      style: {
        opacity: 1,
        cursor: "default",
        display: "flex",
        alignItems: "center",
        padding: `${s.sm}px ${s.md}px`,
        borderBottom: `1px solid ${b.border}`,
        height: Re,
        backgroundColor: t % 2 === 0 ? "#ffffff" : b.secondary,
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
              backgroundColor: r ? c() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          ye,
          {
            style: {
              marginRight: s.md,
              cursor: "default",
              color: b.muted,
              fontSize: 14,
              opacity: 0.3
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
                          marginRight: s.xs,
                          fontSize: H.xs,
                          padding: `1px ${s.xs}px`,
                          background: r === "left" ? b.accent : "#f6ffed",
                          color: r === "left" ? b.primary : b.success,
                          borderRadius: O.sm,
                          flexShrink: 0
                        },
                        children: a(r === "left" ? "labels.left" : "labels.right")
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
              /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(oe, { title: u(), children: /* @__PURE__ */ n(
                  $,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      Te,
                      {
                        style: {
                          color: c(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: h,
                    style: { marginRight: s.xs, padding: `0 ${s.sm}px` }
                  }
                ) }),
                /* @__PURE__ */ n(me, { checked: l, size: "small", onChange: () => d(e) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, wt = ({
  columnKey: e,
  index: t,
  isVisible: l,
  fixed: r,
  title: i,
  moveColumn: d,
  toggleVisibility: o,
  setFixedStatus: a
}) => {
  const c = q(null), { t: h } = B();
  if (!de || !ce)
    return /* @__PURE__ */ n(De, { columnKey: e, index: t, isVisible: l, fixed: r, title: i, toggleVisibility: o, setFixedStatus: a, moveColumn: () => {
    } });
  const [, u] = de({
    accept: le,
    hover(R, k) {
      if (!c.current) return;
      const D = R.index, y = t;
      if (D === y) return;
      const w = c.current.getBoundingClientRect(), g = (w.bottom - w.top) / 2, x = k.getClientOffset();
      if (!x) return;
      const C = x.y - w.top;
      D < y && C < g || D > y && C > g || (d(D, y), R.index = y);
    }
  }), [{ isDragging: p }, f] = ce({
    type: le,
    item: { index: t, columnKey: e },
    collect: (R) => ({
      isDragging: R.isDragging()
    })
  });
  f(u(c));
  const S = () => r === "left" ? b.primary : r === "right" ? b.success : b.muted, T = (R) => {
    R.stopPropagation();
    let k = !1;
    r === !1 ? k = "left" : r === "left" && (k = "right"), a(e, k);
  }, I = () => h(r === "left" ? "labels.fixedLeft" : r === "right" ? "labels.fixedRight" : "labels.pinColumn");
  return /* @__PURE__ */ m(
    "div",
    {
      ref: c,
      style: {
        opacity: p ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: `${s.sm}px ${s.md}px`,
        borderBottom: `1px solid ${b.border}`,
        height: Re,
        backgroundColor: p ? b.secondary : t % 2 === 0 ? "#ffffff" : b.secondary,
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
              backgroundColor: r ? S() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          ye,
          {
            style: {
              marginRight: s.md,
              cursor: "grab",
              color: b.muted,
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
                          marginRight: s.xs,
                          fontSize: H.xs,
                          padding: `1px ${s.xs}px`,
                          background: r === "left" ? b.accent : "#f6ffed",
                          color: r === "left" ? b.primary : b.success,
                          borderRadius: O.sm,
                          flexShrink: 0
                        },
                        children: h(r === "left" ? "labels.left" : "labels.right")
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
              /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(oe, { title: I(), children: /* @__PURE__ */ n(
                  $,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      Te,
                      {
                        style: {
                          color: S(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: T,
                    style: { marginRight: s.xs, padding: `0 ${s.sm}px` }
                  }
                ) }),
                /* @__PURE__ */ n(me, { checked: l, size: "small", onChange: () => o(e) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, St = (e) => Ie ? /* @__PURE__ */ n(wt, { ...e }) : /* @__PURE__ */ n(De, { ...e }), Tt = ({
  columns: e,
  moveColumn: t,
  toggleVisibility: l,
  setFixedStatus: r,
  resetToDefault: i,
  onCancel: d,
  onApply: o
}) => {
  const a = e.filter((f) => f.visible).length, c = e.length, { t: h } = B(), u = e.filter((f) => f.fixed === "left").length, p = e.filter((f) => f.fixed === "right").length;
  return /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
          "div",
          {
            style: {
              background: b.secondary,
              padding: s.md,
              fontWeight: 700,
              borderBottom: `1px solid ${b.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ n(A.Title, { level: 5, style: { margin: 0 }, children: h("labels.customizeTableColumns") }),
              /* @__PURE__ */ n(oe, { title: h("btns.reset"), children: /* @__PURE__ */ n($, { type: "text", icon: /* @__PURE__ */ n(Je, {}), onClick: i, style: { color: b.primary } }) })
            ]
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            style: {
              paddingLeft: s.sm,
              paddingRight: s.sm,
              paddingTop: s.xs,
              paddingBottom: s.xs,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: `1px solid ${b.border}`,
              background: b.secondary
            },
            children: [
              /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(
                  ne,
                  {
                    count: a,
                    color: b.primary,
                    size: "small",
                    overflowCount: 999,
                    style: { marginRight: s.sm }
                  }
                ),
                /* @__PURE__ */ n(A.Text, { type: "secondary", style: { fontSize: 12 }, children: h("texts.columnsVisible", { count: a, total: c }) })
              ] }),
              (u > 0 || p > 0) && /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
                u > 0 && /* @__PURE__ */ n(ne, { count: u, size: "small", color: b.primary, style: { marginRight: s.xs } }),
                p > 0 && /* @__PURE__ */ n(ne, { count: p, size: "small", color: b.success })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n("div", { style: { overflow: "auto", flex: 1 }, children: e.map((f, S) => /* @__PURE__ */ n(
          St,
          {
            columnKey: f.key,
            index: S,
            isVisible: f.visible,
            fixed: f.fixed,
            title: f.title,
            moveColumn: t,
            toggleVisibility: l,
            setFixedStatus: r
          },
          f.key
        )) }),
        /* @__PURE__ */ n(We, { style: { margin: 0 } }),
        /* @__PURE__ */ m(
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
              background: b.secondary
            },
            children: [
              /* @__PURE__ */ n($, { block: !0, size: "middle", onClick: d, children: h("btns.cancel") }),
              /* @__PURE__ */ n($, { block: !0, type: "primary", size: "middle", onClick: o, children: h("btns.apply") })
            ]
          }
        )
      ]
    }
  );
}, kt = ({ title: e, columnKey: t, index: l, moveColumn: r }) => {
  const i = q(null), [, d] = nt({
    accept: le,
    hover(c) {
      if (!i.current) return;
      const h = c.index, u = l;
      h !== u && (r(h, u), c.index = u);
    }
  }), [{ isDragging: o }, a] = rt({
    type: le,
    item: { index: l, columnKey: t },
    collect: (c) => ({
      isDragging: c.isDragging()
    })
  });
  return a(d(i)), /* @__PURE__ */ n(
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
function It(e) {
  const t = (g) => g ? "children" in g ? (g.key || "") ?? "" : (g.key || g.dataIndex) ?? "" : "", l = re(() => e.map(t).filter(Boolean), [e]), r = () => {
    const g = {};
    for (let x = 0; x < e.length; x++) {
      const C = e[x];
      if (!C || "children" in C) continue;
      const v = t(C);
      v && (g[v] = {
        key: v,
        visible: !0,
        fixed: C.fixed ?? !1,
        originalIndex: x
      });
    }
    return g;
  }, [i, d] = j(() => r()), [o, a] = j(() => r()), [c, h] = j(() => l), [u, p] = j(() => l);
  Q(() => {
    const g = r(), x = e.map(t).filter(Boolean);
    d(g), a(g), h(x), p(x);
  }, [e]);
  const f = J(() => {
    a({ ...i }), p([...c]);
  }, [i, c]);
  return {
    getColumnKey: t,
    getVisibleColumns: () => c.filter((g) => {
      var x;
      return (x = i[g]) == null ? void 0 : x.visible;
    }).map((g) => {
      var x;
      return {
        key: g,
        fixed: ((x = i[g]) == null ? void 0 : x.fixed) ?? !1
      };
    }),
    getEditingColumns: () => u.map((g) => {
      var x, C;
      return {
        key: g,
        visible: ((x = o[g]) == null ? void 0 : x.visible) ?? !1,
        fixed: ((C = o[g]) == null ? void 0 : C.fixed) ?? !1
      };
    }),
    startEditing: f,
    applyChanges: () => {
      d(o), h(u);
    },
    cancelChanges: () => {
      a({ ...i }), p([...c]);
    },
    resetToDefault: () => {
      a(r()), p([...l]);
    },
    moveColumn: (g, x) => {
      const C = [...u], v = C[g];
      C.splice(g, 1), C.splice(x, 0, v), p(C);
    },
    toggleVisibility: (g) => {
      var C;
      const x = Object.values(o).filter((v) => v.visible).length;
      (C = o[g]) != null && C.visible && x <= 1 || a((v) => {
        var M;
        return {
          ...v,
          [g]: {
            ...v[g],
            visible: !((M = v[g]) != null && M.visible)
          }
        };
      });
    },
    setFixedStatus: (g, x) => {
      a((C) => ({
        ...C,
        [g]: {
          ...C[g],
          fixed: x
        }
      }));
    }
  };
}
let ue = null;
const ge = Ct();
if (ge)
  try {
    ue = require("react-resize-detector").useResizeDetector;
  } catch {
    console.warn("react-resize-detector is marked as available but failed to import");
  }
const Rt = (e, t, l) => {
  const r = q(null), i = J(
    (u) => {
      var w, g, x;
      if (!u) return;
      const p = ((w = u.querySelector("thead.ant-table-thead")) == null ? void 0 : w.clientHeight) ?? 0, f = 8;
      if (e) {
        const C = +e + p - f, v = u.querySelector("div.ant-table-placeholder");
        v instanceof HTMLElement && (v.style.minHeight = `${C}px`, v.style.maxHeight = `${C}px`);
        const M = u.querySelector("div.ant-table-container");
        return M instanceof HTMLElement && (M.style.minHeight = `${C}px`, M.style.maxHeight = `${C}px`), e;
      }
      const S = ((g = u.querySelector("div.ant-table-footer")) == null ? void 0 : g.clientHeight) ?? 0, T = l ? 24 : 40, I = u.clientHeight ?? 0, R = ((x = t.current) == null ? void 0 : x.clientHeight) ?? 0, D = I - p - S - R - f - 16 - T, y = u.querySelector("div.ant-table-wrapper");
      return y instanceof HTMLElement && (y.style.maxHeight = `${D + p}px`, y.style.height = "100%"), D;
    },
    [e, t, l]
  ), [d, o] = j(null), a = q(null);
  Q(() => {
    if (ge || !a.current)
      return;
    const u = () => {
      a.current && i(a.current);
    }, p = new ResizeObserver(u);
    return p.observe(a.current), o(p), () => {
      p.disconnect();
    };
  }, [i]);
  let c;
  if (ge && ue) {
    const u = ue({
      refreshMode: "debounce",
      onResize: () => {
        u.ref.current && i(u.ref.current);
      },
      refreshRate: 1
    });
    c = u.ref;
  } else
    c = a;
  const h = J(() => {
    const u = c.current;
    if (u)
      return i(u);
  }, [i, c]);
  return {
    tableWrapperRef: c,
    tableRef: r,
    getTableHeight: h
  };
}, Dt = ({
  headerRef: e,
  isMobile: t,
  searchLabel: l,
  columnsLabel: r,
  customizeColumnsTooltip: i,
  onSearchInputChange: d,
  searchText: o = "",
  columnMenuOpen: a,
  onColumnMenuOpenChange: c,
  columnManagerPanel: h,
  actionButtons: u
}) => {
  const p = !!d;
  return /* @__PURE__ */ m(
    "div",
    {
      ref: e,
      style: {
        marginBottom: s.lg,
        display: "flex",
        flexDirection: t ? "column" : "row",
        justifyContent: "space-between",
        alignItems: t ? "stretch" : "center",
        background: b.secondary,
        padding: t ? `${s.sm}px` : `${s.sm}px ${s.md}px`,
        borderRadius: O.lg,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: t ? s.sm : 0
      },
      children: [
        p && // Search input width: 320px is optimal for desktop (enough for typical search terms without taking space).
        // On mobile, expands to 100% for touch-friendly interaction.
        /* @__PURE__ */ n("div", { style: { position: "relative", width: t ? "100%" : 320 }, children: /* @__PURE__ */ n(
          ie,
          {
            placeholder: l,
            allowClear: !0,
            prefix: /* @__PURE__ */ n(be, { style: { color: b.primary, fontSize: 16 } }),
            style: {
              borderRadius: O.md,
              padding: `${s.sm}px ${s.md}px`,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${b.border}`,
              width: "100%"
            },
            onChange: d,
            value: o
          }
        ) }),
        /* @__PURE__ */ m(
          Y,
          {
            size: t ? "small" : "middle",
            direction: t ? "vertical" : "horizontal",
            style: {
              width: t ? "100%" : "auto",
              justifyContent: "flex-end",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ n(oe, { title: i, children: /* @__PURE__ */ n(
                Ye,
                {
                  open: a,
                  onOpenChange: c,
                  dropdownRender: () => h,
                  trigger: ["click"],
                  children: /* @__PURE__ */ n(
                    $,
                    {
                      icon: t ? /* @__PURE__ */ n(ye, {}) : /* @__PURE__ */ n(Qe, {}),
                      style: {
                        borderRadius: O.md,
                        display: "flex",
                        alignItems: "center",
                        gap: s.sm,
                        backgroundColor: a ? b.accent : "white",
                        borderColor: a ? b.primary : b.border,
                        color: a ? b.primary : "inherit",
                        boxShadow: a ? `0 0 0 2px ${b.accent}` : "none",
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
              u
            ]
          }
        )
      ]
    }
  );
}, yn = ({
  totalCount: e,
  onSearch: t,
  actionButtons: l,
  searchDebounceMs: r = 300,
  ...i
}) => {
  var xe, ve;
  const d = q(null), o = q(null), { t: a } = B(), { isMobile: c } = P(), { tableWrapperRef: h, tableRef: u, getTableHeight: p } = Rt(
    (xe = i.scroll) == null ? void 0 : xe.y,
    d,
    c
  ), f = i.columns || [], [S, T] = j(!1), [I, R] = j(""), {
    getColumnKey: k,
    getVisibleColumns: D,
    getEditingColumns: y,
    startEditing: w,
    applyChanges: g,
    cancelChanges: x,
    resetToDefault: C,
    moveColumn: v,
    toggleVisibility: M,
    setFixedStatus: G
  } = It(f);
  Q(() => {
    S && w();
  }, [S]), Q(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const Me = J(
    (W) => {
      const V = W.target.value;
      R(V), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        t == null || t(V);
      }, r);
    },
    [t, r]
  ), Fe = () => {
    g(), T(!1);
  }, Ee = () => {
    x(), T(!1);
  }, ee = re(() => {
    const W = D(), V = new Map(f.map((z) => [k(z), z]));
    return W.map((z, te) => {
      const K = V.get(z.key);
      return K ? {
        ...K,
        fixed: c ? !1 : z.fixed,
        title: /* @__PURE__ */ n(kt, { title: K.title, columnKey: z.key, index: te, moveColumn: v }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: c ? "normal" : "nowrap",
            padding: c ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [f, D, k, c, v]), He = re(() => {
    const W = y(), V = new Map(f.map((z) => [k(z), z]));
    return W.map((z) => {
      var te, K;
      return {
        key: z.key,
        visible: z.visible,
        fixed: z.fixed,
        title: ((K = (te = V.get(z.key)) == null ? void 0 : te.title) == null ? void 0 : K.toString()) || z.key
      };
    });
  }, [f, y, k]);
  return /* @__PURE__ */ n(lt, { backend: it, children: /* @__PURE__ */ m("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ n(
      Dt,
      {
        headerRef: d,
        isMobile: c,
        searchLabel: a("labels.search"),
        columnsLabel: a("btns.columns"),
        customizeColumnsTooltip: a("labels.customizeTableColumns"),
        onSearchInputChange: t ? Me : void 0,
        searchText: I,
        columnMenuOpen: S,
        onColumnMenuOpenChange: T,
        columnManagerPanel: /* @__PURE__ */ n(
          Tt,
          {
            columns: He,
            moveColumn: v,
            toggleVisibility: M,
            setFixedStatus: G,
            resetToDefault: C,
            onCancel: Ee,
            onApply: Fe
          }
        ),
        actionButtons: l
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: h, children: /* @__PURE__ */ n(
      qe,
      {
        ...i,
        columns: ee,
        virtual: i.virtual ?? !0,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: ft,
          showSizeChanger: !1,
          size: c ? "small" : "middle",
          ...i.pagination || {}
        },
        className: `w-full h-full ${i.className || ""}`,
        scroll: {
          // Column width multipliers: Mobile friendly (150px per column) vs Desktop (200px per column).
          // These ensure horizontal scrolling area is sized for content without layout thrashing.
          x: ((ve = i.scroll) == null ? void 0 : ve.x) ?? ((ee == null ? void 0 : ee.length) ?? 0) * (c ? 150 : 200),
          y: p()
        },
        rowKey: (W) => W.id,
        size: c ? "small" : "middle"
      }
    ) })
  ] }) });
}, ze = "calc(100dvh - 300px)", zt = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: ze }
}, bn = {
  size: "small",
  pagination: !1
}, xn = (e, t) => {
  const r = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? r : `${r} overflow-hidden`;
}, vn = (e, t) => {
  const l = ze;
  return e && t != null && t > 0 ? { x: t, y: l } : { ...zt.scroll };
}, Cn = ({
  children: e,
  grow: t = !0,
  className: l
}) => /* @__PURE__ */ n("div", { className: ["min-h-0 w-full", t ? "flex-1" : "", l ?? ""].filter(Boolean).join(" "), children: e }), $e = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: l,
  clearFilters: r,
  placeholder: i
}) => {
  const { t: d } = B();
  return /* @__PURE__ */ m("div", { style: { padding: s.sm }, children: [
    /* @__PURE__ */ n(
      ie,
      {
        placeholder: i ?? d("labels.search"),
        value: t[0],
        onChange: (o) => e(o.target.value ? [o.target.value] : []),
        onPressEnter: () => l(),
        style: { marginBottom: s.sm, display: "block" }
      }
    ),
    /* @__PURE__ */ m(Y, { children: [
      /* @__PURE__ */ n($, { type: "primary", onClick: () => l(), size: "small", style: { width: 90 }, children: d("global.btns.ok") }),
      /* @__PURE__ */ n(
        $,
        {
          onClick: () => {
            r == null || r(), l();
          },
          size: "small",
          style: { width: 90 },
          children: d("global.btns.reset")
        }
      )
    ] })
  ] });
}, wn = (e, t = {}) => {
  const { mode: l = "client", placeholder: r } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n($e, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(be, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, d) => String(d[e] ?? "").toLowerCase().includes(String(i).toLowerCase())
    }
  };
}, Sn = (e, t = {}) => {
  const { mode: l = "client", placeholder: r } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n($e, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(be, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, d) => {
        const o = String(i).toLowerCase();
        return e.some(
          (a) => String(d[a] ?? "").toLowerCase().includes(o)
        );
      }
    }
  };
}, Tn = (e, t, l, r = {}) => {
  const { mode: i = "client" } = r;
  return {
    filters: Object.values(e).map((d) => ({
      text: t(d),
      value: d
    })),
    ...i === "client" && {
      onFilter: (d, o) => o[l] === d
    }
  };
}, kn = (e, t, l, r = {}) => {
  const { mode: i = "client" } = r;
  return {
    filters: [
      { text: t, value: !0 },
      { text: l, value: !1 }
    ],
    ...i === "client" && {
      onFilter: (d, o) => o[e] === d
    }
  };
}, In = ({
  onCancel: e,
  onFormSubmit: t,
  open: l,
  children: r,
  title: i,
  width: d = "50%",
  footer: o,
  loading: a = !1,
  btns: c
}) => {
  var p, f;
  const { t: h } = B(), u = /* @__PURE__ */ m(Z, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n($, { disabled: a, onClick: () => e(), type: "default", children: ((p = c == null ? void 0 : c.cancel) == null ? void 0 : p.label) ?? h("global.btns.cancelChanges") }),
    /* @__PURE__ */ n($, { disabled: a, onClick: t, block: !1, type: "primary", loading: a, children: ((f = c == null ? void 0 : c.save) == null ? void 0 : f.label) ?? h("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    pe,
    {
      centered: !0,
      maskClosable: !1,
      width: d,
      onCancel: e,
      open: l,
      footer: o ?? u,
      title: !!i && /* @__PURE__ */ n(Z, { justify: "start", align: "middle", children: /* @__PURE__ */ n(A.Title, { level: 2, children: i }) }),
      children: /* @__PURE__ */ n(Ge, { spinning: a, style: { maxHeight: "100%" }, children: r })
    }
  );
}, $t = "mobile-fullscreen-modal", Rn = ({
  splitFooterButtonsOnMobile: e = !0,
  rootClassName: t,
  width: l,
  style: r,
  styles: i,
  okButtonProps: d,
  cancelButtonProps: o,
  ...a
}) => {
  const { isMobile: c } = P(), h = [t, c ? $t : ""].filter(Boolean).join(" "), u = c ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...r
  } : r, p = c && e ? {
    ...d,
    style: { flex: 1, ...(d == null ? void 0 : d.style) ?? {} }
  } : d, f = c && e ? {
    ...o,
    style: { flex: 1, ...(o == null ? void 0 : o.style) ?? {} }
  } : o;
  return /* @__PURE__ */ n(
    pe,
    {
      ...a,
      rootClassName: h || void 0,
      width: c ? "100%" : l,
      style: u,
      styles: i,
      okButtonProps: p,
      cancelButtonProps: f
    }
  );
}, { Text: Lt } = A, Mt = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, Dn = ({
  open: e,
  onConfirm: t,
  onCancel: l,
  title: r,
  description: i,
  confirmLabel: d,
  cancelLabel: o,
  variant: a = "danger",
  loading: c = !1,
  icon: h,
  children: u
}) => {
  const { t: p } = B();
  return /* @__PURE__ */ m(
    pe,
    {
      open: e,
      onCancel: l,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ m(Z, { align: "middle", style: { gap: s.sm }, children: [
        h ?? /* @__PURE__ */ n(Pe, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: r })
      ] }),
      footer: /* @__PURE__ */ m(Z, { align: "middle", justify: "end", style: { gap: s.sm }, children: [
        /* @__PURE__ */ n($, { disabled: c, onClick: l, children: o ?? p("global.btns.cancel") }),
        /* @__PURE__ */ n($, { type: "primary", ...Mt[a], loading: c, onClick: t, children: d ?? p("global.btns.confirm") })
      ] }),
      children: [
        i && /* @__PURE__ */ n(Lt, { type: "secondary", children: i }),
        u
      ]
    }
  );
}, { Title: Ft, Text: Et } = A, Le = ({
  title: e,
  variant: t = "page",
  subtitle: l,
  breadcrumb: r,
  breadcrumbExtra: i,
  onBack: d,
  filters: o,
  actions: a
}) => {
  const { isMobile: c } = P(), h = t === "page", u = h ? 4 : 5, p = h ? s.lg : s.md, f = h ? s.md : s.sm, S = !!(o || a);
  return /* @__PURE__ */ m("div", { style: { marginBottom: p }, children: [
    h && (r || i) && /* @__PURE__ */ m(
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
          /* @__PURE__ */ n("div", { style: { flex: "1 1 auto", minWidth: 0 }, children: r ? /* @__PURE__ */ n(Ve, { ...r }) : null }),
          i ? /* @__PURE__ */ n(Y, { size: s.sm, wrap: !0, style: { flexShrink: 0 }, children: i }) : null
        ]
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: c ? "flex-start" : "center",
          flexDirection: c ? "column" : "row",
          gap: c ? f : 0
        },
        children: [
          /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: s.md }, children: [
            h && d && /* @__PURE__ */ n($, { type: "text", icon: /* @__PURE__ */ n(et, {}), onClick: d, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ n(Ft, { level: u, style: { margin: 0 }, children: e }),
              l && /* @__PURE__ */ n(Et, { type: "secondary", style: { marginTop: s.xs, display: "block" }, children: l })
            ] })
          ] }),
          S && /* @__PURE__ */ m(Y, { size: s.sm, wrap: !0, style: { width: c ? "100%" : void 0 }, children: [
            o,
            a
          ] })
        ]
      }
    )
  ] });
}, zn = (e) => /* @__PURE__ */ n(Le, { variant: "section", ...e }), $n = (e) => /* @__PURE__ */ n(Le, { variant: "page", ...e }), { Text: Ht } = A, Ln = ({ label: e, children: t, style: l }) => /* @__PURE__ */ m(
  F,
  {
    size: "small",
    styles: { body: { padding: `${s.md}px ${s.lg}px` } },
    style: l,
    children: [
      /* @__PURE__ */ n(
        Ht,
        {
          type: "secondary",
          style: {
            fontSize: H.xs,
            display: "block",
            marginBottom: s.xs
          },
          children: e
        }
      ),
      t
    ]
  }
), Mn = () => /* @__PURE__ */ n(F, { variant: "borderless", children: /* @__PURE__ */ n(E, {}) }), X = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), Fn = ({
  variant: e = "hero",
  cards: t = 4,
  rows: l,
  inputRows: r = 5,
  showAvatar: i = !0,
  gap: d = s.lg,
  className: o,
  style: a,
  footer: c
}) => {
  const h = d, u = l ?? 6, p = l ?? 5;
  return e === "stacked" ? /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
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
  ] }) : e === "content" ? /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, title: !0, paragraph: { rows: u } }) }),
    c
  ] }) : e === "fields" ? /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(Y, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: r }).map((f, S) => /* @__PURE__ */ n(E.Input, { active: !0, size: "large", style: { width: S % 2 === 0 ? "100%" : "72%" } }, S)) }) }),
    c
  ] }) : e === "grid" ? /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: s.md
        },
        children: [...Array(Math.max(1, t))].map((f, S) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, S))
      }
    ),
    c
  ] }) : e === "rows" ? /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(Y, { direction: "vertical", style: { width: "100%" }, size: s.md, children: Array.from({ length: p }).map((f, S) => /* @__PURE__ */ n(E, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, S)) }) }),
    c
  ] }) : /* @__PURE__ */ m("div", { className: o, style: { ...X(h), ...a }, children: [
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(
      E,
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
          gap: s.md
        },
        children: [...Array(Math.max(1, t))].map((f, S) => /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, S))
      }
    ),
    /* @__PURE__ */ n(F, { children: /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: 4 } }) }),
    c
  ] });
}, { Text: we } = A, En = ({ icon: e, title: t, description: l, action: r }) => /* @__PURE__ */ m(
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
      e ?? /* @__PURE__ */ n(Ce, { image: Ce.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(we, { strong: !0, style: { fontSize: H.lg, marginTop: e ? s.lg : 0, display: "block" }, children: t }),
      l && /* @__PURE__ */ n(we, { type: "secondary", style: { marginTop: s.sm, display: "block", maxWidth: 400 }, children: l }),
      r && /* @__PURE__ */ n("div", { style: { marginTop: s.lg }, children: r })
    ]
  }
), Ot = (e) => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: e
}), Hn = ({
  items: e,
  className: t,
  gap: l = s.md,
  dividerColor: r = "var(--color-border-light, rgba(0,0,0,0.06))"
}) => {
  const i = e ?? [];
  return i.length === 0 ? null : /* @__PURE__ */ n("div", { className: t, style: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap: l
  }, children: i.map((o, a) => /* @__PURE__ */ m(Ze, { children: [
    a > 0 ? /* @__PURE__ */ n("div", { style: Ot(r), "aria-hidden": !0 }) : null,
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
        children: o
      }
    )
  ] }, a)) });
}, On = ({
  width: e = 400,
  height: t = 200,
  onSign: l,
  disabled: r = !1,
  clearLabel: i,
  confirmLabel: d
}) => {
  const { t: o } = B(), a = q(null), [c, h] = j(!1), [u, p] = j(!1), f = J(() => {
    const y = a.current;
    return y ? y.getContext("2d") : null;
  }, []), S = J(() => {
    const y = f(), w = a.current;
    !y || !w || (y.clearRect(0, 0, w.width, w.height), p(!1));
  }, [f]);
  Q(() => {
    const y = f();
    if (!y) return;
    const w = getComputedStyle(a.current).getPropertyValue("--color-text-primary").trim();
    y.strokeStyle = w || "#000", y.lineWidth = 2, y.lineCap = "round", y.lineJoin = "round";
  }, [f]);
  const T = (y) => {
    const w = a.current;
    if (!w) return null;
    const g = w.getBoundingClientRect(), x = w.width / g.width, C = w.height / g.height;
    if ("touches" in y) {
      const v = y.touches[0];
      return v ? {
        x: (v.clientX - g.left) * x,
        y: (v.clientY - g.top) * C
      } : null;
    }
    return {
      x: (y.clientX - g.left) * x,
      y: (y.clientY - g.top) * C
    };
  }, I = (y) => {
    if (r) return;
    const w = f(), g = T(y);
    !w || !g || (w.beginPath(), w.moveTo(g.x, g.y), h(!0));
  }, R = (y) => {
    if (!c || r) return;
    const w = f(), g = T(y);
    !w || !g || (w.lineTo(g.x, g.y), w.stroke(), p(!0));
  }, k = () => {
    h(!1);
  }, D = () => {
    const y = a.current;
    !y || !u || l(y.toDataURL("image/png"));
  };
  return /* @__PURE__ */ m("div", { style: { display: "flex", flexDirection: "column", gap: s.xs }, children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: a,
        width: e,
        height: t,
        style: {
          border: "1px solid var(--color-border, #d9d9d9)",
          borderRadius: O.lg,
          cursor: r ? "default" : "crosshair",
          touchAction: "none",
          width: "100%",
          maxWidth: e,
          height: "auto",
          aspectRatio: `${e} / ${t}`
        },
        onMouseDown: I,
        onMouseMove: R,
        onMouseUp: k,
        onMouseLeave: k,
        onTouchStart: I,
        onTouchMove: R,
        onTouchEnd: k
      }
    ),
    !r && /* @__PURE__ */ m(Y, { children: [
      /* @__PURE__ */ n($, { size: "small", icon: /* @__PURE__ */ n(tt, {}), onClick: S, disabled: !u, children: i ?? o("global.btns.clear") }),
      /* @__PURE__ */ n($, { size: "small", type: "primary", onClick: D, disabled: !u, children: d ?? o("global.btns.confirm") })
    ] })
  ] });
}, { Text: Se } = A, An = ({ value: e, label: t, copyTooltip: l, copiedTooltip: r }) => {
  const { t: i } = B();
  return e ? /* @__PURE__ */ m(
    "div",
    {
      style: {
        background: "var(--color-highlight-bg, #f6f8fa)",
        border: "1px solid var(--color-highlight-border, #e1e4e8)",
        borderRadius: O.lg,
        padding: `${s.md}px ${s["2xl"]}px`,
        display: "flex",
        alignItems: "center",
        gap: s.xl
      },
      children: [
        /* @__PURE__ */ n(
          Se,
          {
            style: {
              fontSize: H.xs,
              fontWeight: se.bold,
              color: "var(--color-highlight-text, #586069)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              flexShrink: 0
            },
            children: t ?? i("global.labels.primaryKey")
          }
        ),
        /* @__PURE__ */ n(
          Se,
          {
            copyable: {
              tooltips: [
                l ?? i("global.btns.copy"),
                r ?? i("global.btns.copied")
              ]
            },
            style: {
              fontFamily: "monospace",
              fontSize: H.md,
              fontWeight: se.bold,
              color: "var(--color-text-primary, #24292e)"
            },
            children: e
          }
        )
      ]
    }
  ) : null;
}, { Text: At } = A, Bt = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, Bn = ({ status: e, label: t }) => /* @__PURE__ */ m("span", { style: { display: "inline-flex", alignItems: "center", gap: s.sm }, children: [
  /* @__PURE__ */ n(ne, { color: Bt[e] }),
  /* @__PURE__ */ n(At, { children: t })
] }), he = (e) => !(e == null || typeof e == "string" && e.trim() === ""), jt = (e) => Array.isArray(e) ? e : Object.entries(e).map(([t, l]) => ({
  label: t === "" ? void 0 : t,
  value: l
})), fe = (e) => Array.isArray(e) ? e.length === 0 ? null : e.length === 1 ? e[0] : e.map((t, l) => /* @__PURE__ */ n("div", { children: t }, l)) : e, Nt = "entity-info-value-only", L = "ant-descriptions", _t = (e, t) => {
  if (e == null) return t ? 1 : 2;
  if (typeof e == "number") return e;
}, Wt = ({
  items: e,
  labelStyle: t,
  contentStyle: l,
  labelClassName: r,
  contentClassName: i
}) => /* @__PURE__ */ n("div", { className: `${L}-view`, children: /* @__PURE__ */ n("table", { children: /* @__PURE__ */ n("tbody", { children: e.map((d, o) => he(d.label) ? /* @__PURE__ */ m("tr", { className: `${L}-row`, children: [
  /* @__PURE__ */ n("th", { className: `${L}-item-label ${r ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: t, children: d.label }) }),
  /* @__PURE__ */ n("td", { className: `${L}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: fe(d.value) }) })
] }, o) : /* @__PURE__ */ n("tr", { className: `${L}-row ${L}-row--value-only`, children: /* @__PURE__ */ n("td", { colSpan: 2, className: `${L}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: fe(d.value) }) }) }, o)) }) }) }), jn = ({
  items: e,
  loading: t = !1,
  column: l,
  title: r,
  bordered: i = !1,
  layout: d,
  colon: o,
  extra: a,
  className: c,
  style: h,
  styles: u,
  classNames: p,
  rootClassName: f,
  id: S
}) => {
  const { isMobile: T } = P(), I = jt(e), R = re(() => I.map((v, M) => {
    const G = he(v.label);
    return {
      key: M,
      label: G ? v.label : void 0,
      span: v.span,
      className: G ? void 0 : Nt,
      children: fe(v.value)
    };
  }), [I]);
  if (t)
    return /* @__PURE__ */ n(E, { active: !0, paragraph: { rows: I.length }, title: !!r && { width: "30%" } });
  const k = l ?? (T ? 1 : 2), D = d ?? (T ? "vertical" : "horizontal"), y = ["entity-info", c].filter(Boolean).join(" "), w = I.some((v) => !he(v.label)), g = I.some((v) => v.span != null), x = _t(l, T);
  if (i && D === "horizontal" && !g && (w || x === 1)) {
    const v = T ? `${L}-small` : void 0, M = u && typeof u == "object" && "label" in u ? u.label : void 0, G = u && typeof u == "object" && "content" in u ? u.content : void 0;
    return /* @__PURE__ */ m(
      "div",
      {
        id: S,
        className: [
          L,
          `${L}-bordered`,
          `${L}-horizontal`,
          "entity-info--bordered-native",
          v,
          y,
          f
        ].filter(Boolean).join(" "),
        style: h,
        children: [
          (r || a) && /* @__PURE__ */ m("div", { className: `${L}-header`, children: [
            r && /* @__PURE__ */ n("div", { className: `${L}-title`, children: r }),
            a && /* @__PURE__ */ n("div", { className: `${L}-extra`, children: a })
          ] }),
          /* @__PURE__ */ n(
            Wt,
            {
              items: I,
              labelStyle: M,
              contentStyle: G,
              labelClassName: void 0,
              contentClassName: void 0
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ n(
    Ke,
    {
      id: S,
      title: r,
      extra: a,
      column: k,
      bordered: i,
      layout: D,
      colon: o,
      className: y,
      rootClassName: f,
      style: h,
      styles: u,
      size: T ? "small" : "default",
      items: R
    }
  );
}, Nn = {
  mobileMax: "md",
  compactMax: "lg"
}, _n = "mobile-fullscreen-modal";
function Wn({ children: e, theme: t }) {
  return /* @__PURE__ */ n(Ue, { theme: t, children: e });
}
const Yn = (e, t, l) => {
  const r = new FormData();
  function i(o, a) {
    if (!d(a))
      if (a = a || "", o instanceof File)
        r.append(a, o);
      else if (o instanceof ke)
        o && r.append(a, o.toISOString());
      else if (Array.isArray(o))
        for (let c = 0; c < o.length; c++)
          i(o[c], a + "[" + c + "]");
      else if (typeof o == "object" && o !== null)
        for (const c in o)
          Object.prototype.hasOwnProperty.call(o, c) && (a === "" ? i(o[c], c) : i(o[c], a + "." + c));
      else
        o !== null && typeof o < "u" && r.append(a, String(o));
  }
  function d(o) {
    return Array.isArray(l) && l.some(function(a) {
      return a === o;
    });
  }
  return i(e, t || ""), r;
}, Yt = (e) => typeof e == "string" && ht.test(e), qt = (e) => {
  if (e == null || typeof e != "object")
    return e;
  const t = { ...e };
  for (const l of Object.keys(t)) {
    const r = t[l];
    Yt(r) ? t[l] = ke(r) : typeof r == "object" && r !== null && (t[l] = qt(r));
  }
  return t;
};
export {
  Hn as ActionColumnRow,
  In as BaseModal,
  gn as CheckboxFormItem,
  Tt as ColumnManager,
  Dn as ConfirmModal,
  Fn as ContentLoader,
  En as ContentState,
  bn as DETAIL_TABLE_PROPS,
  le as DRAG_TYPE,
  an as DateFormItem,
  kt as DraggableHeader,
  St as DraggableMenuItem,
  jn as EntityInfo,
  hn as FormItem,
  mn as FormItemWrapper,
  pn as FormSection,
  Rn as FullscreenMobileModal,
  ln as InputFormItem,
  ze as LIST_TABLE_BODY_MAX_Y,
  zt as LIST_TABLE_PROPS,
  Cn as ListPageTableArea,
  _n as MOBILE_FULLSCREEN_MODAL_CLASS,
  Le as MainHeader,
  yn as MainTable,
  Dt as MainTableToolbar,
  sn as NumberFormItem,
  $n as PageHeader,
  An as PrimaryKey,
  Nn as RESPONSIVE_BREAKPOINTS,
  zn as SectionHeader,
  on as SelectFormItem,
  On as SignatureCanvas,
  Mn as SkeletonCard,
  Wn as SoftwareifyThemeProvider,
  Ln as StatCard,
  Bn as StatusBadge,
  dn as SwitchFormItem,
  cn as TextAreaFormItem,
  $e as TextFilterDropdown,
  un as TimePickerFormItem,
  kn as booleanFilterColumnProps,
  yt as brand,
  U as colors,
  ut as dateFormat,
  tn as dateFormatISO,
  gt as dateTimeFormat,
  en as dateTimeFormatWithoutSeconds,
  qt as datesToDayjs,
  ft as defaultTablePageSize,
  rn as dropdownItemsMaxTake,
  Tn as enumFilterColumnProps,
  H as fontSize,
  se as fontWeight,
  ht as isoDateFormatRegex,
  xn as listPageRootClassName,
  vn as listTableScroll,
  Yn as objectToFormData,
  nn as passwordRegex,
  pt as phoneFormatRegex,
  O as radius,
  Pt as registerLocale,
  fn as softwareifyTheme,
  s as spacing,
  wn as textSearchColumnProps,
  Sn as textSearchMultiFieldProps,
  mt as uriRegex,
  It as useColumnManager,
  _ as useFormRules,
  B as useLibTranslation,
  P as useResponsive,
  Rt as useTableFullHeightCalculator
};
