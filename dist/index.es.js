import { jsx as n, jsxs as p } from "react/jsx-runtime";
import { Form as _, Input as oe, Select as Oe, DatePicker as Be, InputNumber as Ae, Switch as pe, TimePicker as je, Checkbox as _e, Row as J, Col as se, Grid as We, Typography as B, Card as E, Skeleton as H, Tooltip as ae, Button as L, Badge as re, Divider as Ye, Space as q, Dropdown as qe, Table as Ge, Modal as ye, Spin as Ve, Breadcrumb as Ke, Empty as we, Descriptions as Ue, ConfigProvider as Xe } from "antd";
import { useTranslation as Ze } from "react-i18next";
import { useRef as G, useMemo as le, useState as j, useEffect as P, useCallback as N, Fragment as Je } from "react";
import { MenuOutlined as xe, PushpinOutlined as ke, UndoOutlined as Ne, SearchOutlined as be, TableOutlined as Qe, ExclamationCircleOutlined as Pe, ArrowLeftOutlined as et, ClearOutlined as tt } from "@ant-design/icons";
import { useDrop as nt, useDrag as rt, DndProvider as lt } from "react-dnd";
import { HTML5Backend as it } from "react-dnd-html5-backend";
import Ie from "dayjs";
function A() {
  return Ze("softwareify-ui");
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
const ut = "DD.MM.YYYY", gt = "DD.MM.YYYY HH:mm:ss", en = "DD.MM.YYYY HH:mm", tn = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", ft = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, nn = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", ht = 50, mt = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", pt = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, rn = 2147483646, W = (e, t, l) => {
  var o;
  const { t: r } = A();
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
  const l = W(t, e == null ? void 0 : e.type);
  return /* @__PURE__ */ n(_.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(oe, { ...e }) });
}, on = ({ elementProps: e, formProps: t }) => {
  const l = W(t);
  return /* @__PURE__ */ n(_.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(
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
  const l = W(e);
  return /* @__PURE__ */ n(_.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(
    Be,
    {
      ...t,
      format: (t == null ? void 0 : t.format) ?? (t == null ? void 0 : t.showTime) ? gt : ut,
      style: { width: "100%", ...t == null ? void 0 : t.style }
    }
  ) });
}, sn = ({ elementProps: e, formProps: t }) => {
  const l = W(t);
  return /* @__PURE__ */ n(_.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(Ae, { ...e, style: { width: "100%", ...e == null ? void 0 : e.style } }) });
}, cn = ({ elementProps: e, formProps: t }) => {
  const l = W(t);
  return /* @__PURE__ */ n(_.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, children: /* @__PURE__ */ n(oe.TextArea, { ...e }) });
}, dn = ({ elementProps: e, formProps: t }) => {
  const l = W(t);
  return /* @__PURE__ */ n(_.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? l, valuePropName: "checked", children: /* @__PURE__ */ n(pe, { ...e }) });
}, un = ({ formProps: e, elementProps: t }) => {
  const l = W(e);
  return /* @__PURE__ */ n(_.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? l, children: /* @__PURE__ */ n(je, { ...t, style: { width: "100%", ...t == null ? void 0 : t.style } }) });
}, gn = ({ formProps: e, elementProps: t, children: l }) => {
  const r = W(e);
  return /* @__PURE__ */ n(_.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? r, valuePropName: "checked", children: /* @__PURE__ */ n(_e, { ...t, children: l }) });
}, fn = _.Item, yt = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, X = {
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
}, F = {
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
}, a = {
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
}, hn = {
  token: {
    // Brand colors
    colorPrimary: yt.primary,
    colorBgContainer: X.bgPrimary,
    colorBorder: X.border,
    colorError: X.error,
    colorSuccess: X.success,
    colorWarning: X.warning,
    colorInfo: X.info,
    // Typography
    fontSize: F.base,
    fontSizeHeading1: F["3xl"],
    fontSizeHeading2: F["2xl"],
    fontSizeHeading3: F.xl,
    fontSizeHeading4: F.lg,
    fontSizeHeading5: F.md,
    fontWeightStrong: ce.semibold,
    // Spacing and sizing (antd uses margin/padding as base, with XS/SM/MD/LG/XL variants)
    margin: a.md,
    marginXS: a.xs,
    marginSM: a.sm,
    marginLG: a.lg,
    marginXL: a.xl,
    padding: a.md,
    paddingXS: a.xs,
    paddingSM: a.sm,
    paddingLG: a.lg,
    paddingXL: a.xl,
    // Border radius
    borderRadius: O.md,
    borderRadiusLG: O.lg,
    borderRadiusSM: O.sm,
    // Other common tokens
    lineHeight: 1.5
  }
}, mn = ({ firstItem: e, secondItem: t, style: l, gutter: r = a["2xl"] }) => /* @__PURE__ */ p(J, { gutter: r, style: l, children: [
  /* @__PURE__ */ n(se, { xl: 12, md: 24, sm: 24, xs: 24, children: e }),
  /* @__PURE__ */ n(se, { xl: 12, md: 24, sm: 24, xs: 24, children: t })
] }), ee = () => {
  const e = We.useBreakpoint(), t = !e.md, l = !!e.md && !e.lg, r = !e.lg;
  return {
    screens: e,
    isMobile: t,
    isTablet: l,
    isCompact: r
  };
}, { Title: xt, Text: bt } = B, pn = ({
  title: e,
  subtitle: t,
  children: l,
  columns: r = 2,
  loading: i = !1
}) => {
  const { isMobile: d } = ee(), o = d ? 1 : r;
  return /* @__PURE__ */ p(E, { style: { marginBottom: a.lg }, children: [
    /* @__PURE__ */ p("div", { style: { marginBottom: a.lg }, children: [
      /* @__PURE__ */ n(xt, { level: 5, style: { margin: 0 }, children: e }),
      t && /* @__PURE__ */ n(bt, { type: "secondary", style: { display: "block", marginTop: a.xs }, children: t })
    ] }),
    i ? /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: 4 } }) : /* @__PURE__ */ n(J, { gutter: a["2xl"], children: o === 1 ? /* @__PURE__ */ n(se, { span: 24, children: l }) : l })
  ] });
}, ie = "DraggableColumn", x = {
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
let de = null, ue = null, Re = !1;
if (vt())
  try {
    const e = require("react-dnd");
    de = e.useDrag, ue = e.useDrop, Re = !0;
  } catch {
    console.warn("react-dnd is marked as available but failed to import");
  }
const ze = 44, De = ({
  columnKey: e,
  index: t,
  isVisible: l,
  fixed: r,
  title: i,
  toggleVisibility: d,
  setFixedStatus: o
}) => {
  const { t: c } = A(), s = () => r === "left" ? x.primary : r === "right" ? x.success : x.muted, h = (g) => {
    g.stopPropagation();
    let m = !1;
    r === !1 ? m = "left" : r === "left" && (m = "right"), o(e, m);
  }, u = () => c(r === "left" ? "labels.fixedLeft" : r === "right" ? "labels.fixedRight" : "labels.pinColumn");
  return /* @__PURE__ */ p(
    "div",
    {
      style: {
        opacity: 1,
        cursor: "default",
        display: "flex",
        alignItems: "center",
        padding: `${a.sm}px ${a.md}px`,
        borderBottom: `1px solid ${x.border}`,
        height: ze,
        backgroundColor: t % 2 === 0 ? "#ffffff" : x.secondary,
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
              backgroundColor: r ? s() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          xe,
          {
            style: {
              marginRight: a.md,
              cursor: "default",
              color: x.muted,
              fontSize: 14,
              opacity: 0.3
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
                          marginRight: a.xs,
                          fontSize: F.xs,
                          padding: `1px ${a.xs}px`,
                          background: r === "left" ? x.accent : "#f6ffed",
                          color: r === "left" ? x.primary : x.success,
                          borderRadius: O.sm,
                          flexShrink: 0
                        },
                        children: c(r === "left" ? "labels.left" : "labels.right")
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
                /* @__PURE__ */ n(ae, { title: u(), children: /* @__PURE__ */ n(
                  L,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      ke,
                      {
                        style: {
                          color: s(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: h,
                    style: { marginRight: a.xs, padding: `0 ${a.sm}px` }
                  }
                ) }),
                /* @__PURE__ */ n(pe, { checked: l, size: "small", onChange: () => d(e) })
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
  setFixedStatus: c
}) => {
  const s = G(null), { t: h } = A();
  if (!ue || !de)
    return /* @__PURE__ */ n(De, { columnKey: e, index: t, isVisible: l, fixed: r, title: i, toggleVisibility: o, setFixedStatus: c, moveColumn: () => {
    } });
  const [, u] = ue({
    accept: ie,
    hover(z, I) {
      if (!s.current) return;
      const D = z.index, y = t;
      if (D === y) return;
      const C = s.current.getBoundingClientRect(), f = (C.bottom - C.top) / 2, b = I.getClientOffset();
      if (!b) return;
      const v = b.y - C.top;
      D < y && v < f || D > y && v > f || (d(D, y), z.index = y);
    }
  }), [{ isDragging: g }, m] = de({
    type: ie,
    item: { index: t, columnKey: e },
    collect: (z) => ({
      isDragging: z.isDragging()
    })
  });
  m(u(s));
  const w = () => r === "left" ? x.primary : r === "right" ? x.success : x.muted, k = (z) => {
    z.stopPropagation();
    let I = !1;
    r === !1 ? I = "left" : r === "left" && (I = "right"), c(e, I);
  }, R = () => h(r === "left" ? "labels.fixedLeft" : r === "right" ? "labels.fixedRight" : "labels.pinColumn");
  return /* @__PURE__ */ p(
    "div",
    {
      ref: s,
      style: {
        opacity: g ? 0.5 : 1,
        cursor: "move",
        display: "flex",
        alignItems: "center",
        padding: `${a.sm}px ${a.md}px`,
        borderBottom: `1px solid ${x.border}`,
        height: ze,
        backgroundColor: g ? x.secondary : t % 2 === 0 ? "#ffffff" : x.secondary,
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
              backgroundColor: r ? w() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
          xe,
          {
            style: {
              marginRight: a.md,
              cursor: "grab",
              color: x.muted,
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
                          marginRight: a.xs,
                          fontSize: F.xs,
                          padding: `1px ${a.xs}px`,
                          background: r === "left" ? x.accent : "#f6ffed",
                          color: r === "left" ? x.primary : x.success,
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
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(ae, { title: R(), children: /* @__PURE__ */ n(
                  L,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      ke,
                      {
                        style: {
                          color: w(),
                          transform: r ? "rotate(-45deg)" : "none",
                          transition: "transform 0.2s, color 0.2s"
                        }
                      }
                    ),
                    onClick: k,
                    style: { marginRight: a.xs, padding: `0 ${a.sm}px` }
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
}, St = (e) => Re ? /* @__PURE__ */ n(wt, { ...e }) : /* @__PURE__ */ n(De, { ...e }), Tt = ({
  columns: e,
  moveColumn: t,
  toggleVisibility: l,
  setFixedStatus: r,
  resetToDefault: i,
  onCancel: d,
  onApply: o
}) => {
  const c = e.filter((m) => m.visible).length, s = e.length, { t: h } = A(), u = e.filter((m) => m.fixed === "left").length, g = e.filter((m) => m.fixed === "right").length;
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
              background: x.secondary,
              padding: a.md,
              fontWeight: 700,
              borderBottom: `1px solid ${x.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ n(B.Title, { level: 5, style: { margin: 0 }, children: h("labels.customizeTableColumns") }),
              /* @__PURE__ */ n(ae, { title: h("btns.reset"), children: /* @__PURE__ */ n(L, { type: "text", icon: /* @__PURE__ */ n(Ne, {}), onClick: i, style: { color: x.primary } }) })
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              paddingLeft: a.sm,
              paddingRight: a.sm,
              paddingTop: a.xs,
              paddingBottom: a.xs,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: `1px solid ${x.border}`,
              background: x.secondary
            },
            children: [
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(
                  re,
                  {
                    count: c,
                    color: x.primary,
                    size: "small",
                    overflowCount: 999,
                    style: { marginRight: a.sm }
                  }
                ),
                /* @__PURE__ */ n(B.Text, { type: "secondary", style: { fontSize: 12 }, children: h("texts.columnsVisible", { count: c, total: s }) })
              ] }),
              (u > 0 || g > 0) && /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center" }, children: [
                u > 0 && /* @__PURE__ */ n(re, { count: u, size: "small", color: x.primary, style: { marginRight: a.xs } }),
                g > 0 && /* @__PURE__ */ n(re, { count: g, size: "small", color: x.success })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n("div", { style: { overflow: "auto", flex: 1 }, children: e.map((m, w) => /* @__PURE__ */ n(
          St,
          {
            columnKey: m.key,
            index: w,
            isVisible: m.visible,
            fixed: m.fixed,
            title: m.title,
            moveColumn: t,
            toggleVisibility: l,
            setFixedStatus: r
          },
          m.key
        )) }),
        /* @__PURE__ */ n(Ye, { style: { margin: 0 } }),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              paddingTop: a.md,
              paddingBottom: a.md,
              paddingLeft: a.lg,
              paddingRight: a.lg,
              display: "flex",
              justifyContent: "flex-end",
              gap: a.xs,
              background: x.secondary
            },
            children: [
              /* @__PURE__ */ n(L, { block: !0, size: "middle", onClick: d, children: h("btns.cancel") }),
              /* @__PURE__ */ n(L, { block: !0, type: "primary", size: "middle", onClick: o, children: h("btns.apply") })
            ]
          }
        )
      ]
    }
  );
}, kt = ({ title: e, columnKey: t, index: l, moveColumn: r }) => {
  const i = G(null), [, d] = nt({
    accept: ie,
    hover(s) {
      if (!i.current) return;
      const h = s.index, u = l;
      h !== u && (r(h, u), s.index = u);
    }
  }), [{ isDragging: o }, c] = rt({
    type: ie,
    item: { index: l, columnKey: t },
    collect: (s) => ({
      isDragging: s.isDragging()
    })
  });
  return c(d(i)), /* @__PURE__ */ n(
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
  const t = (f) => f ? "children" in f ? (f.key || "") ?? "" : (f.key || f.dataIndex) ?? "" : "", l = le(() => e.map(t).filter(Boolean), [e]), r = () => {
    const f = {};
    for (let b = 0; b < e.length; b++) {
      const v = e[b];
      if (!v || "children" in v) continue;
      const S = t(v);
      S && (f[S] = {
        key: S,
        visible: !0,
        fixed: v.fixed ?? !1,
        originalIndex: b
      });
    }
    return f;
  }, [i, d] = j(() => r()), [o, c] = j(() => r()), [s, h] = j(() => l), [u, g] = j(() => l);
  P(() => {
    const f = r(), b = e.map(t).filter(Boolean);
    d(f), c(f), h(b), g(b);
  }, [e]);
  const m = N(() => {
    c({ ...i }), g([...s]);
  }, [i, s]);
  return {
    getColumnKey: t,
    getVisibleColumns: () => s.filter((f) => {
      var b;
      return (b = i[f]) == null ? void 0 : b.visible;
    }).map((f) => {
      var b;
      return {
        key: f,
        fixed: ((b = i[f]) == null ? void 0 : b.fixed) ?? !1
      };
    }),
    getEditingColumns: () => u.map((f) => {
      var b, v;
      return {
        key: f,
        visible: ((b = o[f]) == null ? void 0 : b.visible) ?? !1,
        fixed: ((v = o[f]) == null ? void 0 : v.fixed) ?? !1
      };
    }),
    startEditing: m,
    applyChanges: () => {
      d(o), h(u);
    },
    cancelChanges: () => {
      c({ ...i }), g([...s]);
    },
    resetToDefault: () => {
      c(r()), g([...l]);
    },
    moveColumn: (f, b) => {
      const v = [...u], S = v[f];
      v.splice(f, 1), v.splice(b, 0, S), g(v);
    },
    toggleVisibility: (f) => {
      var v;
      const b = Object.values(o).filter((S) => S.visible).length;
      (v = o[f]) != null && v.visible && b <= 1 || c((S) => {
        var T;
        return {
          ...S,
          [f]: {
            ...S[f],
            visible: !((T = S[f]) != null && T.visible)
          }
        };
      });
    },
    setFixedStatus: (f, b) => {
      c((v) => ({
        ...v,
        [f]: {
          ...v[f],
          fixed: b
        }
      }));
    }
  };
}
let ge = null;
const fe = Ct();
if (fe)
  try {
    ge = require("react-resize-detector").useResizeDetector;
  } catch {
    console.warn("react-resize-detector is marked as available but failed to import");
  }
const Rt = (e, t, l) => {
  const r = G(null), i = N(
    (u) => {
      var C, f, b;
      if (!u) return;
      const g = ((C = u.querySelector("thead.ant-table-thead")) == null ? void 0 : C.clientHeight) ?? 0, m = 8;
      if (e) {
        const v = +e + g - m, S = u.querySelector("div.ant-table-placeholder");
        S instanceof HTMLElement && (S.style.minHeight = `${v}px`, S.style.maxHeight = `${v}px`);
        const T = u.querySelector("div.ant-table-container");
        return T instanceof HTMLElement && (T.style.minHeight = `${v}px`, T.style.maxHeight = `${v}px`), e;
      }
      const w = ((f = u.querySelector("div.ant-table-footer")) == null ? void 0 : f.clientHeight) ?? 0, k = l ? 24 : 40, R = u.clientHeight ?? 0, z = ((b = t.current) == null ? void 0 : b.clientHeight) ?? 0, D = R - g - w - z - m - 16 - k, y = u.querySelector("div.ant-table-wrapper");
      return y instanceof HTMLElement && (y.style.maxHeight = `${D + g}px`, y.style.height = "100%"), D;
    },
    [e, t, l]
  ), [d, o] = j(null), c = G(null);
  P(() => {
    if (fe || !c.current)
      return;
    const u = () => {
      c.current && i(c.current);
    }, g = new ResizeObserver(u);
    return g.observe(c.current), o(g), () => {
      g.disconnect();
    };
  }, [i]);
  let s;
  if (fe && ge) {
    const u = ge({
      refreshMode: "debounce",
      onResize: () => {
        u.ref.current && i(u.ref.current);
      },
      refreshRate: 1
    });
    s = u.ref;
  } else
    s = c;
  const h = N(() => {
    const u = s.current;
    if (u)
      return i(u);
  }, [i, s]);
  return {
    tableWrapperRef: s,
    tableRef: r,
    getTableHeight: h
  };
}, zt = ({
  headerRef: e,
  isMobile: t,
  searchLabel: l,
  columnsLabel: r,
  customizeColumnsTooltip: i,
  onSearchInputChange: d,
  searchText: o = "",
  columnMenuOpen: c,
  onColumnMenuOpenChange: s,
  columnManagerPanel: h,
  actionButtons: u
}) => {
  const g = !!d;
  return /* @__PURE__ */ p(
    "div",
    {
      ref: e,
      style: {
        marginBottom: a.lg,
        display: "flex",
        flexDirection: t ? "column" : "row",
        justifyContent: "space-between",
        alignItems: t ? "stretch" : "center",
        background: x.secondary,
        padding: t ? `${a.sm}px` : `${a.sm}px ${a.md}px`,
        borderRadius: O.lg,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        gap: t ? a.sm : 0
      },
      children: [
        g && /* @__PURE__ */ n("div", { style: { position: "relative", width: t ? "100%" : 320 }, children: /* @__PURE__ */ n(
          oe,
          {
            placeholder: l,
            allowClear: !0,
            prefix: /* @__PURE__ */ n(be, { style: { color: x.primary, fontSize: 16 } }),
            style: {
              borderRadius: O.md,
              padding: `${a.sm}px ${a.md}px`,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
              border: `1px solid ${x.border}`,
              width: "100%"
            },
            onChange: d,
            value: o
          }
        ) }),
        /* @__PURE__ */ p(
          q,
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
                qe,
                {
                  open: c,
                  onOpenChange: s,
                  dropdownRender: () => h,
                  trigger: ["click"],
                  children: /* @__PURE__ */ n(
                    L,
                    {
                      icon: t ? /* @__PURE__ */ n(xe, {}) : /* @__PURE__ */ n(Qe, {}),
                      style: {
                        borderRadius: O.md,
                        display: "flex",
                        alignItems: "center",
                        gap: a.sm,
                        backgroundColor: c ? x.accent : "white",
                        borderColor: c ? x.primary : x.border,
                        color: c ? x.primary : "inherit",
                        boxShadow: c ? `0 0 0 2px ${x.accent}` : "none",
                        padding: t ? `${a.xs}px ${a.md}px` : `${a.xs}px ${a.lg}px`,
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
  var ve, Ce;
  const d = G(null), o = G(null), { t: c } = A(), { isMobile: s } = ee(), { tableWrapperRef: h, tableRef: u, getTableHeight: g } = Rt(
    (ve = i.scroll) == null ? void 0 : ve.y,
    d,
    s
  ), m = i.columns || [], [w, k] = j(!1), [R, z] = j(""), {
    getColumnKey: I,
    getVisibleColumns: D,
    getEditingColumns: y,
    startEditing: C,
    applyChanges: f,
    cancelChanges: b,
    resetToDefault: v,
    moveColumn: S,
    toggleVisibility: T,
    setFixedStatus: Q
  } = It(m);
  P(() => {
    w && C();
  }, [w]), P(() => () => {
    o.current && clearTimeout(o.current);
  }, []);
  const V = N(
    (Y) => {
      const K = Y.target.value;
      z(K), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        t == null || t(K);
      }, r);
    },
    [t, r]
  ), Fe = () => {
    f(), k(!1);
  }, Ee = () => {
    b(), k(!1);
  }, te = le(() => {
    const Y = D(), K = new Map(m.map(($) => [I($), $]));
    return Y.map(($, ne) => {
      const U = K.get($.key);
      return U ? {
        ...U,
        fixed: s ? !1 : $.fixed,
        title: /* @__PURE__ */ n(kt, { title: U.title, columnKey: $.key, index: ne, moveColumn: S }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: s ? "normal" : "nowrap",
            padding: s ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [m, D, I, s, S]), He = le(() => {
    const Y = y(), K = new Map(m.map(($) => [I($), $]));
    return Y.map(($) => {
      var ne, U;
      return {
        key: $.key,
        visible: $.visible,
        fixed: $.fixed,
        title: ((U = (ne = K.get($.key)) == null ? void 0 : ne.title) == null ? void 0 : U.toString()) || $.key
      };
    });
  }, [m, y, I]);
  return /* @__PURE__ */ n(lt, { backend: it, children: /* @__PURE__ */ p("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ n(
      zt,
      {
        headerRef: d,
        isMobile: s,
        searchLabel: c("labels.search"),
        columnsLabel: c("btns.columns"),
        customizeColumnsTooltip: c("labels.customizeTableColumns"),
        onSearchInputChange: t ? V : void 0,
        searchText: R,
        columnMenuOpen: w,
        onColumnMenuOpenChange: k,
        columnManagerPanel: /* @__PURE__ */ n(
          Tt,
          {
            columns: He,
            moveColumn: S,
            toggleVisibility: T,
            setFixedStatus: Q,
            resetToDefault: v,
            onCancel: Ee,
            onApply: Fe
          }
        ),
        actionButtons: l
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: h, children: /* @__PURE__ */ n(
      Ge,
      {
        ...i,
        columns: te,
        virtual: i.virtual ?? !0,
        ref: u,
        pagination: {
          position: ["bottomCenter"],
          total: e ?? 0,
          defaultPageSize: ht,
          showSizeChanger: !1,
          size: s ? "small" : "default",
          ...i.pagination || {}
        },
        className: `w-full h-full ${i.className || ""}`,
        scroll: {
          x: ((Ce = i.scroll) == null ? void 0 : Ce.x) ?? ((te == null ? void 0 : te.length) ?? 0) * (s ? 150 : 200),
          y: g()
        },
        rowKey: (Y) => Y.id,
        size: s ? "small" : "middle"
      }
    ) })
  ] }) });
}, $e = "calc(100dvh - 300px)", Dt = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: $e }
}, xn = {
  size: "small",
  pagination: !1
}, bn = (e, t) => {
  const r = `flex h-full min-h-0 flex-col ${(t == null ? void 0 : t.gap) ?? "gap-6"}`;
  return e ? r : `${r} overflow-hidden`;
}, vn = (e, t) => {
  const l = $e;
  return e && t != null && t > 0 ? { x: t, y: l } : { ...Dt.scroll };
}, Cn = ({
  children: e,
  grow: t = !0,
  className: l
}) => /* @__PURE__ */ n("div", { className: ["min-h-0 w-full", t ? "flex-1" : "", l ?? ""].filter(Boolean).join(" "), children: e }), Le = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: l,
  clearFilters: r,
  placeholder: i
}) => {
  const { t: d } = A();
  return /* @__PURE__ */ p("div", { style: { padding: a.sm }, children: [
    /* @__PURE__ */ n(
      oe,
      {
        placeholder: i ?? d("labels.search"),
        value: t[0],
        onChange: (o) => e(o.target.value ? [o.target.value] : []),
        onPressEnter: () => l(),
        style: { marginBottom: a.sm, display: "block" }
      }
    ),
    /* @__PURE__ */ p(q, { children: [
      /* @__PURE__ */ n(L, { type: "primary", onClick: () => l(), size: "small", style: { width: 90 }, children: d("global.btns.ok") }),
      /* @__PURE__ */ n(
        L,
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
    filterDropdown: (i) => /* @__PURE__ */ n(Le, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(be, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, d) => String(d[e] ?? "").toLowerCase().includes(String(i).toLowerCase())
    }
  };
}, Sn = (e, t = {}) => {
  const { mode: l = "client", placeholder: r } = t;
  return {
    filterDropdown: (i) => /* @__PURE__ */ n(Le, { ...i, placeholder: r }),
    filterIcon: (i) => /* @__PURE__ */ n(be, { style: { color: i ? "var(--color-brand-primary)" : void 0 } }),
    ...l === "client" && {
      onFilter: (i, d) => {
        const o = String(i).toLowerCase();
        return e.some(
          (c) => String(d[c] ?? "").toLowerCase().includes(o)
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
  loading: c = !1,
  btns: s
}) => {
  var g, m;
  const { t: h } = A(), u = /* @__PURE__ */ p(J, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(L, { disabled: c, onClick: () => e(), type: "default", children: ((g = s == null ? void 0 : s.cancel) == null ? void 0 : g.label) ?? h("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(L, { disabled: c, onClick: t, block: !1, type: "primary", loading: c, children: ((m = s == null ? void 0 : s.save) == null ? void 0 : m.label) ?? h("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    ye,
    {
      centered: !0,
      maskClosable: !1,
      width: d,
      onCancel: e,
      open: l,
      footer: o ?? u,
      title: !!i && /* @__PURE__ */ n(J, { justify: "start", align: "middle", children: /* @__PURE__ */ n(B.Title, { level: 2, children: i }) }),
      children: /* @__PURE__ */ n(Ve, { spinning: c, style: { maxHeight: "100%" }, children: r })
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
  ...c
}) => {
  const { isMobile: s } = ee(), h = [t, s ? $t : ""].filter(Boolean).join(" "), u = s ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...r
  } : r, g = s && e ? {
    ...d,
    style: { flex: 1, ...(d == null ? void 0 : d.style) ?? {} }
  } : d, m = s && e ? {
    ...o,
    style: { flex: 1, ...(o == null ? void 0 : o.style) ?? {} }
  } : o;
  return /* @__PURE__ */ n(
    ye,
    {
      ...c,
      rootClassName: h || void 0,
      width: s ? "100%" : l,
      style: u,
      styles: i,
      okButtonProps: g,
      cancelButtonProps: m
    }
  );
}, { Text: Lt } = B, Mt = {
  danger: { danger: !0 },
  warning: { danger: !1 },
  info: { danger: !1 }
}, zn = ({
  open: e,
  onConfirm: t,
  onCancel: l,
  title: r,
  description: i,
  confirmLabel: d,
  cancelLabel: o,
  variant: c = "danger",
  loading: s = !1,
  icon: h,
  children: u
}) => {
  const { t: g } = A();
  return /* @__PURE__ */ p(
    ye,
    {
      open: e,
      onCancel: l,
      centered: !0,
      maskClosable: !1,
      title: /* @__PURE__ */ p(J, { align: "middle", style: { gap: a.sm }, children: [
        h ?? /* @__PURE__ */ n(Pe, { style: { color: "var(--color-warning, #faad14)", fontSize: 20 } }),
        /* @__PURE__ */ n("span", { children: r })
      ] }),
      footer: /* @__PURE__ */ p(J, { align: "middle", justify: "end", style: { gap: a.sm }, children: [
        /* @__PURE__ */ n(L, { disabled: s, onClick: l, children: o ?? g("global.btns.cancel") }),
        /* @__PURE__ */ n(L, { type: "primary", ...Mt[c], loading: s, onClick: t, children: d ?? g("global.btns.confirm") })
      ] }),
      children: [
        i && /* @__PURE__ */ n(Lt, { type: "secondary", children: i }),
        u
      ]
    }
  );
}, { Title: Ft, Text: Et } = B, Me = ({
  title: e,
  variant: t = "page",
  subtitle: l,
  breadcrumb: r,
  breadcrumbExtra: i,
  onBack: d,
  filters: o,
  actions: c
}) => {
  const { isMobile: s } = ee(), h = t === "page", u = h ? 4 : 5, g = h ? a.lg : a.md, m = h ? a.md : a.sm, w = !!(o || c);
  return /* @__PURE__ */ p("div", { style: { marginBottom: g }, children: [
    h && (r || i) && /* @__PURE__ */ p(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: a.md,
          marginBottom: a.sm,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ n("div", { style: { flex: "1 1 auto", minWidth: 0 }, children: r ? /* @__PURE__ */ n(Ke, { ...r }) : null }),
          i ? /* @__PURE__ */ n(q, { size: a.sm, wrap: !0, style: { flexShrink: 0 }, children: i }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: s ? "flex-start" : "center",
          flexDirection: s ? "column" : "row",
          gap: s ? m : 0
        },
        children: [
          /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: a.md }, children: [
            h && d && /* @__PURE__ */ n(L, { type: "text", icon: /* @__PURE__ */ n(et, {}), onClick: d, size: "small", "aria-label": "back" }),
            /* @__PURE__ */ p("div", { children: [
              /* @__PURE__ */ n(Ft, { level: u, style: { margin: 0 }, children: e }),
              l && /* @__PURE__ */ n(Et, { type: "secondary", style: { marginTop: a.xs, display: "block" }, children: l })
            ] })
          ] }),
          w && /* @__PURE__ */ p(q, { size: a.sm, wrap: !0, style: { width: s ? "100%" : void 0 }, children: [
            o,
            c
          ] })
        ]
      }
    )
  ] });
}, Dn = (e) => /* @__PURE__ */ n(Me, { variant: "section", ...e }), $n = (e) => /* @__PURE__ */ n(Me, { variant: "page", ...e }), { Text: Ht } = B, Ln = ({ label: e, children: t, style: l }) => /* @__PURE__ */ p(
  E,
  {
    size: "small",
    styles: { body: { padding: `${a.md}px ${a.lg}px` } },
    style: l,
    children: [
      /* @__PURE__ */ n(
        Ht,
        {
          type: "secondary",
          style: {
            fontSize: F.xs,
            display: "block",
            marginBottom: a.xs
          },
          children: e
        }
      ),
      t
    ]
  }
), Mn = () => /* @__PURE__ */ n(E, { variant: "borderless", children: /* @__PURE__ */ n(H, {}) }), Z = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e
}), Fn = ({
  variant: e = "hero",
  cards: t = 4,
  rows: l,
  inputRows: r = 5,
  showAvatar: i = !0,
  gap: d = a.lg,
  className: o,
  style: c,
  footer: s
}) => {
  const h = d, u = l ?? 6, g = l ?? 5;
  return e === "stacked" ? /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(
      H,
      {
        active: !0,
        title: { width: "30%" },
        paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
      }
    ) }),
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: 4 } }) }),
    s
  ] }) : e === "content" ? /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(H, { active: !0, title: !0, paragraph: { rows: u } }) }),
    s
  ] }) : e === "fields" ? /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(q, { direction: "vertical", size: "middle", style: { width: "100%" }, children: Array.from({ length: r }).map((m, w) => /* @__PURE__ */ n(H.Input, { active: !0, size: "large", style: { width: w % 2 === 0 ? "100%" : "72%" } }, w)) }) }),
    s
  ] }) : e === "grid" ? /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, t)}, 1fr)`,
          gap: a.md
        },
        children: [...Array(Math.max(1, t))].map((m, w) => /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, w))
      }
    ),
    s
  ] }) : e === "rows" ? /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(q, { direction: "vertical", style: { width: "100%" }, size: a.md, children: Array.from({ length: g }).map((m, w) => /* @__PURE__ */ n(H, { active: !0, title: !1, paragraph: { rows: 1, width: "100%" } }, w)) }) }),
    s
  ] }) : /* @__PURE__ */ p("div", { className: o, style: { ...Z(h), ...c }, children: [
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(
      H,
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
          gap: a.md
        },
        children: [...Array(Math.max(1, t))].map((m, w) => /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, w))
      }
    ),
    /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: 4 } }) }),
    s
  ] });
}, { Text: Se } = B, En = ({ icon: e, title: t, description: l, action: r }) => /* @__PURE__ */ p(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: `${a["3xl"]}px ${a["2xl"]}px`,
      textAlign: "center"
    },
    children: [
      e ?? /* @__PURE__ */ n(we, { image: we.PRESENTED_IMAGE_SIMPLE, description: null }),
      /* @__PURE__ */ n(Se, { strong: !0, style: { fontSize: F.lg, marginTop: e ? a.lg : 0, display: "block" }, children: t }),
      l && /* @__PURE__ */ n(Se, { type: "secondary", style: { marginTop: a.sm, display: "block", maxWidth: 400 }, children: l }),
      r && /* @__PURE__ */ n("div", { style: { marginTop: a.lg }, children: r })
    ]
  }
), Ot = (e) => ({
  width: 1,
  alignSelf: "stretch",
  flexShrink: 0,
  background: e
}), Hn = ({
  items: e,
  left: t,
  right: l,
  className: r,
  gap: i = a.md,
  dividerColor: d = "var(--color-border-light, rgba(0,0,0,0.06))"
}) => {
  const o = e !== void 0 ? e : [t, l].filter((s) => s != null);
  return o.length === 0 ? null : /* @__PURE__ */ n("div", { className: r, style: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    gap: i
  }, children: o.map((s, h) => /* @__PURE__ */ p(Je, { children: [
    h > 0 ? /* @__PURE__ */ n("div", { style: Ot(d), "aria-hidden": !0 }) : null,
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
        children: s
      }
    )
  ] }, h)) });
}, On = ({
  width: e = 400,
  height: t = 200,
  onSign: l,
  disabled: r = !1,
  clearLabel: i,
  confirmLabel: d
}) => {
  const { t: o } = A(), c = G(null), [s, h] = j(!1), [u, g] = j(!1), m = N(() => {
    const y = c.current;
    return y ? y.getContext("2d") : null;
  }, []), w = N(() => {
    const y = m(), C = c.current;
    !y || !C || (y.clearRect(0, 0, C.width, C.height), g(!1));
  }, [m]);
  P(() => {
    const y = m();
    if (!y) return;
    const C = getComputedStyle(c.current).getPropertyValue("--color-text-primary").trim();
    y.strokeStyle = C || "#000", y.lineWidth = 2, y.lineCap = "round", y.lineJoin = "round";
  }, [m]);
  const k = (y) => {
    const C = c.current;
    if (!C) return null;
    const f = C.getBoundingClientRect(), b = C.width / f.width, v = C.height / f.height;
    if ("touches" in y) {
      const S = y.touches[0];
      return S ? {
        x: (S.clientX - f.left) * b,
        y: (S.clientY - f.top) * v
      } : null;
    }
    return {
      x: (y.clientX - f.left) * b,
      y: (y.clientY - f.top) * v
    };
  }, R = (y) => {
    if (r) return;
    const C = m(), f = k(y);
    !C || !f || (C.beginPath(), C.moveTo(f.x, f.y), h(!0));
  }, z = (y) => {
    if (!s || r) return;
    const C = m(), f = k(y);
    !C || !f || (C.lineTo(f.x, f.y), C.stroke(), g(!0));
  }, I = () => {
    h(!1);
  }, D = () => {
    const y = c.current;
    !y || !u || l(y.toDataURL("image/png"));
  };
  return /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: a.xs }, children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: c,
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
        onMouseDown: R,
        onMouseMove: z,
        onMouseUp: I,
        onMouseLeave: I,
        onTouchStart: R,
        onTouchMove: z,
        onTouchEnd: I
      }
    ),
    !r && /* @__PURE__ */ p(q, { children: [
      /* @__PURE__ */ n(L, { size: "small", icon: /* @__PURE__ */ n(tt, {}), onClick: w, disabled: !u, children: i ?? o("global.btns.clear") }),
      /* @__PURE__ */ n(L, { size: "small", type: "primary", onClick: D, disabled: !u, children: d ?? o("global.btns.confirm") })
    ] })
  ] });
}, { Text: Te } = B, Bn = ({ value: e, label: t, copyTooltip: l, copiedTooltip: r }) => {
  const { t: i } = A();
  return e ? /* @__PURE__ */ p(
    "div",
    {
      style: {
        background: "var(--color-highlight-bg, #f6f8fa)",
        border: "1px solid var(--color-highlight-border, #e1e4e8)",
        borderRadius: O.lg,
        padding: `${a.md}px ${a["2xl"]}px`,
        display: "flex",
        alignItems: "center",
        gap: a.xl
      },
      children: [
        /* @__PURE__ */ n(
          Te,
          {
            style: {
              fontSize: F.xs,
              fontWeight: ce.bold,
              color: "var(--color-highlight-text, #586069)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              flexShrink: 0
            },
            children: t ?? i("global.labels.primaryKey")
          }
        ),
        /* @__PURE__ */ n(
          Te,
          {
            copyable: {
              tooltips: [
                l ?? i("global.btns.copy"),
                r ?? i("global.btns.copied")
              ]
            },
            style: {
              fontFamily: "monospace",
              fontSize: F.md,
              fontWeight: ce.bold,
              color: "var(--color-text-primary, #24292e)"
            },
            children: e
          }
        )
      ]
    }
  ) : null;
}, { Text: Bt } = B, At = {
  success: "var(--color-success, #52c41a)",
  warning: "var(--color-warning, #fa8c16)",
  error: "var(--color-error, #f5222d)",
  info: "var(--color-info, #1677ff)",
  default: "var(--color-text-muted, #d9d9d9)"
}, An = ({ status: e, label: t }) => /* @__PURE__ */ p("span", { style: { display: "inline-flex", alignItems: "center", gap: a.sm }, children: [
  /* @__PURE__ */ n(re, { color: At[e] }),
  /* @__PURE__ */ n(Bt, { children: t })
] }), he = (e) => !(e == null || typeof e == "string" && e.trim() === ""), jt = (e) => Array.isArray(e) ? e : Object.entries(e).map(([t, l]) => ({
  label: t === "" ? void 0 : t,
  value: l
})), me = (e) => Array.isArray(e) ? e.length === 0 ? null : e.length === 1 ? e[0] : e.map((t, l) => /* @__PURE__ */ n("div", { children: t }, l)) : e, _t = "entity-info-value-only", M = "ant-descriptions", Wt = (e, t) => {
  if (e == null) return t ? 1 : 2;
  if (typeof e == "number") return e;
}, Yt = ({
  items: e,
  labelStyle: t,
  contentStyle: l,
  labelClassName: r,
  contentClassName: i
}) => /* @__PURE__ */ n("div", { className: `${M}-view`, children: /* @__PURE__ */ n("table", { children: /* @__PURE__ */ n("tbody", { children: e.map((d, o) => he(d.label) ? /* @__PURE__ */ p("tr", { className: `${M}-row`, children: [
  /* @__PURE__ */ n("th", { className: `${M}-item-label ${r ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: t, children: d.label }) }),
  /* @__PURE__ */ n("td", { className: `${M}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: me(d.value) }) })
] }, o) : /* @__PURE__ */ n("tr", { className: `${M}-row ${M}-row--value-only`, children: /* @__PURE__ */ n("td", { colSpan: 2, className: `${M}-item-content ${i ?? ""}`.trim(), children: /* @__PURE__ */ n("span", { style: l, children: me(d.value) }) }) }, o)) }) }) }), jn = ({
  items: e,
  loading: t = !1,
  column: l,
  title: r,
  bordered: i = !1,
  layout: d,
  colon: o,
  extra: c,
  className: s,
  style: h,
  styles: u,
  classNames: g,
  rootClassName: m,
  id: w
}) => {
  const { isMobile: k } = ee(), R = jt(e), z = le(() => R.map((T, Q) => {
    const V = he(T.label);
    return {
      key: Q,
      label: V ? T.label : void 0,
      span: T.span,
      className: V ? void 0 : _t,
      children: me(T.value)
    };
  }), [R]);
  if (t)
    return /* @__PURE__ */ n(H, { active: !0, paragraph: { rows: R.length }, title: !!r && { width: "30%" } });
  const I = l ?? (k ? 1 : 2), D = d ?? (k ? "vertical" : "horizontal"), y = {
    ...u,
    label: {
      fontSize: F.sm,
      ...u == null ? void 0 : u.label
    }
  }, C = ["entity-info", s].filter(Boolean).join(" "), f = R.some((T) => !he(T.label)), b = R.some((T) => T.span != null), v = Wt(l, k);
  if (i && D === "horizontal" && !b && (f || v === 1)) {
    const T = k ? `${M}-small` : void 0, Q = g == null ? void 0 : g.label, V = g == null ? void 0 : g.content;
    return /* @__PURE__ */ p(
      "div",
      {
        id: w,
        className: [
          M,
          `${M}-bordered`,
          `${M}-horizontal`,
          "entity-info--bordered-native",
          T,
          C,
          m,
          g == null ? void 0 : g.root
        ].filter(Boolean).join(" "),
        style: { ...h, ...u == null ? void 0 : u.root },
        children: [
          (r || c) && /* @__PURE__ */ p(
            "div",
            {
              className: [`${M}-header`, g == null ? void 0 : g.header].filter(Boolean).join(" "),
              style: u == null ? void 0 : u.header,
              children: [
                r && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${M}-title`, g == null ? void 0 : g.title].filter(Boolean).join(" "),
                    style: u == null ? void 0 : u.title,
                    children: r
                  }
                ),
                c && /* @__PURE__ */ n(
                  "div",
                  {
                    className: [`${M}-extra`, g == null ? void 0 : g.extra].filter(Boolean).join(" "),
                    style: u == null ? void 0 : u.extra,
                    children: c
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
            Yt,
            {
              items: R,
              labelStyle: y.label,
              contentStyle: y.content,
              labelClassName: Q,
              contentClassName: V
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ n(
    Ue,
    {
      id: w,
      title: r,
      extra: c,
      column: I,
      bordered: i,
      layout: D,
      colon: o,
      className: C,
      rootClassName: m,
      style: h,
      styles: y,
      classNames: g,
      size: k ? "small" : "default",
      items: z
    }
  );
}, _n = {
  mobileMax: "md",
  compactMax: "lg"
}, Wn = "mobile-fullscreen-modal";
function Yn({ children: e, theme: t }) {
  return /* @__PURE__ */ n(Xe, { theme: t, children: e });
}
const qn = (e, t, l) => {
  const r = new FormData();
  function i(o, c) {
    if (!d(c))
      if (c = c || "", o instanceof File)
        r.append(c, o);
      else if (o instanceof Ie)
        o && r.append(c, o.toISOString());
      else if (Array.isArray(o))
        for (let s = 0; s < o.length; s++)
          i(o[s], c + "[" + s + "]");
      else if (typeof o == "object" && o !== null)
        for (const s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (c === "" ? i(o[s], s) : i(o[s], c + "." + s));
      else
        o !== null && typeof o < "u" && r.append(c, String(o));
  }
  function d(o) {
    return Array.isArray(l) && l.some(function(c) {
      return c === o;
    });
  }
  return i(e, t || ""), r;
}, qt = (e) => typeof e == "string" && ft.test(e), Gt = (e) => {
  if (e == null || typeof e != "object")
    return e;
  const t = { ...e };
  for (const l of Object.keys(t)) {
    const r = t[l];
    qt(r) ? t[l] = Ie(r) : typeof r == "object" && r !== null && (t[l] = Gt(r));
  }
  return t;
};
export {
  Hn as ActionColumnRow,
  In as BaseModal,
  gn as CheckboxFormItem,
  Tt as ColumnManager,
  zn as ConfirmModal,
  Fn as ContentLoader,
  En as ContentState,
  xn as DETAIL_TABLE_PROPS,
  ie as DRAG_TYPE,
  an as DateFormItem,
  kt as DraggableHeader,
  St as DraggableMenuItem,
  jn as EntityInfo,
  fn as FormItem,
  mn as FormItemWrapper,
  pn as FormSection,
  Rn as FullscreenMobileModal,
  ln as InputFormItem,
  $e as LIST_TABLE_BODY_MAX_Y,
  Dt as LIST_TABLE_PROPS,
  Cn as ListPageTableArea,
  Wn as MOBILE_FULLSCREEN_MODAL_CLASS,
  Me as MainHeader,
  yn as MainTable,
  zt as MainTableToolbar,
  sn as NumberFormItem,
  $n as PageHeader,
  Bn as PrimaryKey,
  _n as RESPONSIVE_BREAKPOINTS,
  Dn as SectionHeader,
  on as SelectFormItem,
  On as SignatureCanvas,
  Mn as SkeletonCard,
  Yn as SoftwareifyThemeProvider,
  Ln as StatCard,
  An as StatusBadge,
  dn as SwitchFormItem,
  cn as TextAreaFormItem,
  Le as TextFilterDropdown,
  un as TimePickerFormItem,
  kn as booleanFilterColumnProps,
  yt as brand,
  X as colors,
  ut as dateFormat,
  tn as dateFormatISO,
  gt as dateTimeFormat,
  en as dateTimeFormatWithoutSeconds,
  Gt as datesToDayjs,
  ht as defaultTablePageSize,
  rn as dropdownItemsMaxTake,
  Tn as enumFilterColumnProps,
  F as fontSize,
  ce as fontWeight,
  ft as isoDateFormatRegex,
  bn as listPageRootClassName,
  vn as listTableScroll,
  qn as objectToFormData,
  nn as passwordRegex,
  pt as phoneFormatRegex,
  O as radius,
  Pt as registerLocale,
  hn as softwareifyTheme,
  a as spacing,
  wn as textSearchColumnProps,
  Sn as textSearchMultiFieldProps,
  mt as uriRegex,
  It as useColumnManager,
  W as useFormRules,
  A as useLibTranslation,
  ee as useResponsive,
  Rt as useTableFullHeightCalculator
};
