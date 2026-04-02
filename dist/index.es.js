import { jsx as n, jsxs as x } from "react/jsx-runtime";
import { Form as z, Input as Z, Select as Ce, DatePicker as we, InputNumber as Se, Switch as oe, TimePicker as Te, Checkbox as De, Row as Q, Col as ie, Tooltip as ee, Button as I, Typography as N, Badge as U, Divider as Ie, Grid as G, Space as K, Dropdown as ke, Table as Me, Modal as ce, Spin as Re, Card as E, Avatar as ze, Skeleton as $ } from "antd";
import de from "dayjs";
import { format as X } from "react-string-format";
import { useTranslation as V } from "react-i18next";
import { MenuOutlined as ue, PushpinOutlined as Fe, UndoOutlined as Ee, SearchOutlined as te, TableOutlined as Oe, ClearOutlined as Ne } from "@ant-design/icons";
import { useRef as B, useMemo as P, useState as O, useEffect as ne, useCallback as ae } from "react";
import { useDrop as ge, useDrag as fe, DndProvider as Ae } from "react-dnd";
import { HTML5Backend as He } from "react-dnd-html5-backend";
import { useResizeDetector as je } from "react-resize-detector";
const Le = "DD.MM.YYYY", $e = "DD.MM.YYYY HH:mm:ss", ut = "DD.MM.YYYY HH:mm", gt = "YYYY-MM-DDTHH:mm:ss.SSS[Z]", _e = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?/, ft = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", Be = 50, Ye = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/\\=]*)$", We = /^((([+]|0|00)42[0-9]{1}\s?)?(\d{3}\s?){3}|\d{9})$/, ht = 2147483646, mt = (t, e, r) => {
  const l = new FormData();
  function a(s, i) {
    if (!g(i))
      if (i = i || "", s instanceof File)
        l.append(i, s);
      else if (s instanceof de)
        s && l.append(i, s.toISOString());
      else if (Array.isArray(s))
        for (let o = 0; o < s.length; o++)
          a(s[o], i + "[" + o + "]");
      else if (typeof s == "object" && s)
        for (const o in s)
          s.hasOwnProperty(o) && (i === "" ? a(s[o], o) : a(s[o], i + "." + o));
      else
        s !== null && typeof s < "u" && l.append(i, s);
  }
  function g(s) {
    return Array.isArray(r) && r.some(function(i) {
      return i === s;
    });
  }
  return a(t, e), l;
}, A = (t, e, r) => {
  var s;
  if (!t) return [];
  const { t: l } = V(), a = (s = t.label) == null ? void 0 : s.toString(), g = [
    {
      required: t.required,
      message: a ? `${t.label ?? r} ${l("global.validations.input.isRequiredField")}` : l("global.validations.input.common")
    }
  ];
  return e === "email" && g.push({
    type: e,
    message: X(l("global.validations.input.incorrectFormat"), a ?? l("global.validations.input.field"))
  }), e === "url" && g.push({
    pattern: new RegExp(Ye),
    message: X(l("global.validations.input.incorrectFormat"), a ?? l("global.validations.input.field"))
  }), e === "phone" && g.push({
    pattern: new RegExp(We),
    message: X(l("global.validations.input.incorrectFormat"), a ?? l("global.validations.input.field"))
  }), g ?? t.rules ?? [];
}, qe = (t) => t && typeof t == "string" && _e.test(t), Ze = (t) => {
  const e = { ...t };
  if (e == null || typeof e != "object")
    return e;
  for (const r of Object.keys(e)) {
    const l = e[r];
    qe(l) ? e[r] = de(l) : typeof l == "object" && Ze(l);
  }
  return e;
}, pt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ n(z.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? A(e, t == null ? void 0 : t.type), children: /* @__PURE__ */ n(Z, { ...t }) }), xt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ n(z.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? A(e), children: /* @__PURE__ */ n(
  Ce,
  {
    showSearch: !0,
    filterOption: (r, l) => String((l == null ? void 0 : l.label) ?? (l == null ? void 0 : l.children) ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
      r.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    ),
    ...t
  }
) }), bt = ({ formProps: t, elementProps: e }) => /* @__PURE__ */ n(z.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? A(t), children: /* @__PURE__ */ n(
  we,
  {
    ...e,
    format: (e == null ? void 0 : e.format) ?? (e == null ? void 0 : e.showTime) ? $e : Le,
    className: "w-full"
  }
) }), yt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ n(z.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? A(e), children: /* @__PURE__ */ n(Se, { ...t, className: "w-full" }) }), vt = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ n(z.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? A(e), children: /* @__PURE__ */ n(Z.TextArea, { ...t }) }), Ct = ({ elementProps: t, formProps: e }) => /* @__PURE__ */ n(z.Item, { ...e, rules: (e == null ? void 0 : e.rules) ?? A(e), valuePropName: "checked", children: /* @__PURE__ */ n(oe, { ...t }) }), wt = ({ formProps: t, elementProps: e }) => /* @__PURE__ */ n(z.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? A(t), children: /* @__PURE__ */ n(Te, { ...e, className: "w-full" }) }), St = ({ formProps: t, elementProps: e, children: r }) => /* @__PURE__ */ n(z.Item, { ...t, rules: (t == null ? void 0 : t.rules) ?? A(t), valuePropName: "checked", children: /* @__PURE__ */ n(De, { ...e, children: r }) }), Tt = z.Item, Dt = ({ firstItem: t, secondItem: e, style: r, gutter: l = 24 }) => /* @__PURE__ */ x(Q, { gutter: l, style: r, children: [
  /* @__PURE__ */ n(ie, { xl: 12, md: 24, sm: 24, xs: 24, children: t }),
  /* @__PURE__ */ n(ie, { xl: 12, md: 24, sm: 24, xs: 24, children: e })
] }), q = "DraggableColumn", H = {
  primary: "#1890ff",
  accent: "#e6f7ff",
  border: "#e8e8e8",
  success: "#52c41a"
}, Ge = ({
  columnKey: t,
  index: e,
  isVisible: r,
  fixed: l,
  title: a,
  moveColumn: g,
  toggleVisibility: s,
  setFixedStatus: i
}) => {
  const o = B(null), u = 44, [, y] = ge({
    accept: q,
    hover(w, C) {
      if (!o.current) return;
      const D = w.index, d = e;
      if (D === d) return;
      const b = o.current.getBoundingClientRect(), v = (b.bottom - b.top) / 2, c = C.getClientOffset();
      if (!c) return;
      const m = c.y - b.top;
      D < d && m < v || D > d && m > v || (g(D, d), w.index = d);
    }
  }), [{ isDragging: f }, h] = fe({
    type: q,
    item: { index: e, columnKey: t },
    collect: (w) => ({
      isDragging: w.isDragging()
    })
  });
  h(y(o));
  const T = () => l === "left" ? H.primary : l === "right" ? H.success : "#d9d9d9", k = (w) => {
    w.stopPropagation();
    let C = !1;
    l === !1 ? C = "left" : l === "left" && (C = "right"), i(t, C);
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
        borderBottom: `1px solid ${H.border}`,
        height: `${u}px`,
        backgroundColor: f ? "#f5f5f5" : e % 2 === 0 ? "#ffffff" : "#fafafa",
        transition: "all 0.2s",
        position: "relative"
      },
      children: [
        r && /* @__PURE__ */ n(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: l ? T() : "transparent"
            }
          }
        ),
        /* @__PURE__ */ n(
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
                    opacity: r ? 1 : 0.5,
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
                          background: l === "left" ? H.accent : "#f6ffed",
                          color: l === "left" ? H.primary : H.success,
                          borderRadius: 4,
                          flexShrink: 0
                        },
                        children: l === "left" ? "LEFT" : "RIGHT"
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
                        children: a
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ x("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ n(ee, { title: l ? `Fixed ${l}` : "Pin column", children: /* @__PURE__ */ n(
                  I,
                  {
                    type: "text",
                    icon: /* @__PURE__ */ n(
                      Fe,
                      {
                        style: {
                          color: T(),
                          transform: l ? "rotate(-45deg)" : "none",
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
                /* @__PURE__ */ n(
                  oe,
                  {
                    checked: r,
                    size: "small",
                    onChange: () => s(t),
                    style: {
                      backgroundColor: r ? H.primary : void 0
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
}, Ke = ({
  columns: t,
  moveColumn: e,
  toggleVisibility: r,
  setFixedStatus: l,
  resetToDefault: a,
  onCancel: g,
  onApply: s
}) => {
  const i = t.filter((h) => h.visible).length, o = t.length, { t: u } = V(), y = t.filter((h) => h.fixed === "left").length, f = t.filter((h) => h.fixed === "right").length;
  return /* @__PURE__ */ x("div", { className: "bg-white shadow-lg rounded-lg w-80 max-h-[500px] flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ x("div", { className: "p-4 font-bold border-b flex justify-between items-center bg-[#f5f7fa]", children: [
      /* @__PURE__ */ n(N.Title, { level: 5, style: { margin: 0 }, children: u("global.labels.customizeTableColumns") }),
      /* @__PURE__ */ n(ee, { title: u("global.btns.reset"), children: /* @__PURE__ */ n(I, { type: "text", icon: /* @__PURE__ */ n(Ee, {}), onClick: a, className: "text-[#1890ff]" }) })
    ] }),
    /* @__PURE__ */ x("div", { className: "px-3 py-2 flex justify-between bg-[#fafafa] border-b", children: [
      /* @__PURE__ */ x("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n(
          U,
          {
            count: i,
            color: J.primary,
            size: "small",
            overflowCount: 999,
            style: { marginRight: "8px" }
          }
        ),
        /* @__PURE__ */ n(N.Text, { type: "secondary", className: "text-xs", children: u("global.texts.columnsVisible", { count: i, total: o }) })
      ] }),
      (y > 0 || f > 0) && /* @__PURE__ */ x("div", { className: "flex items-center", children: [
        y > 0 && /* @__PURE__ */ n(U, { count: y, size: "small", color: J.primary, style: { marginRight: "4px" } }),
        f > 0 && /* @__PURE__ */ n(U, { count: f, size: "small", color: J.success })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "overflow-auto flex-grow scrollbar-thin scrollbar-thumb-[#e8e8e8] scrollbar-track-transparent", children: t.map((h, T) => /* @__PURE__ */ n(
      Ge,
      {
        columnKey: h.key,
        index: T,
        isVisible: h.visible,
        fixed: h.fixed,
        title: h.title,
        moveColumn: e,
        toggleVisibility: r,
        setFixedStatus: l
      },
      h.key
    )) }),
    /* @__PURE__ */ n(Ie, { className: "my-0" }),
    /* @__PURE__ */ x("div", { className: "py-3 px-4 flex justify-end gap-2 bg-[#fafafa]", children: [
      /* @__PURE__ */ n(I, { block: !0, size: "middle", onClick: g, children: u("global.btns.cancel") }),
      /* @__PURE__ */ n(I, { block: !0, type: "primary", size: "middle", onClick: s, children: u("global.btns.apply") })
    ] })
  ] });
};
function Ve({
  title: t,
  columnKey: e,
  index: r,
  moveColumn: l
}) {
  const a = B(null), [, g] = ge({
    accept: q,
    hover(o) {
      if (!a.current) return;
      const u = o.index, y = r;
      u !== y && (l(u, y), o.index = y);
    }
  }), [{ isDragging: s }, i] = fe({
    type: q,
    item: { index: r, columnKey: e },
    collect: (o) => ({
      isDragging: o.isDragging()
    })
  });
  return i(g(a)), /* @__PURE__ */ n(
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
function Ue(t) {
  const e = (c) => c.key || c.dataIndex, r = P(() => t.map(e), [t]), l = () => t.reduce((c, m, p) => {
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
  }, {}), [a, g] = O(() => l()), [s, i] = O(() => l()), [o, u] = O(() => r), [y, f] = O(() => r);
  return ne(() => {
    const c = l(), m = t.map(e);
    g(c), i(c), u(m), f(m);
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
    getEditingColumns: () => y.map((c) => {
      var m, p;
      return {
        key: c,
        visible: ((m = s[c]) == null ? void 0 : m.visible) || !1,
        fixed: ((p = s[c]) == null ? void 0 : p.fixed) || !1
      };
    }),
    startEditing: () => {
      i({ ...a }), f([...o]);
    },
    applyChanges: () => {
      g(s), u(y);
    },
    cancelChanges: () => {
      i({ ...a }), f([...o]);
    },
    resetToDefault: () => {
      i(l()), f([...r]);
    },
    moveColumn: (c, m) => {
      const p = [...y], M = p[c];
      p.splice(c, 1), p.splice(m, 0, M), f(p);
    },
    toggleVisibility: (c) => {
      const m = Object.values(s).filter((p) => p.visible).length;
      s[c].visible && m <= 1 || i((p) => ({
        ...p,
        [c]: {
          ...p[c],
          visible: !p[c].visible
        }
      }));
    },
    setFixedStatus: (c, m) => {
      i((p) => ({
        ...p,
        [c]: {
          ...p[c],
          fixed: m
        }
      }));
    }
  };
}
const Xe = (t, e, r) => {
  const l = B(null), a = je({
    refreshMode: "debounce",
    onResize: () => g(),
    refreshRate: 1
  }), g = () => {
    var w, C, D, d, b, v, c, m, p;
    const s = (w = a.ref.current) == null ? void 0 : w.querySelector("div.ant-table-wrapper"), i = ((D = (C = a.ref.current) == null ? void 0 : C.querySelector("thead.ant-table-thead")) == null ? void 0 : D.clientHeight) ?? 0, o = 8;
    if (t) {
      const M = (d = a.ref.current) == null ? void 0 : d.querySelector("div.ant-table-placeholder");
      M == null || M.setAttribute(
        "style",
        `min-height: ${+t + i - o}px; max-height: ${+t + i - o}px`
      );
      const _ = (b = a.ref.current) == null ? void 0 : b.querySelector("div.ant-table-container");
      return _ == null || _.setAttribute(
        "style",
        `min-height: ${+t + i - o}px; max-height: ${+t + i - o}px`
      ), t;
    }
    const u = ((c = (v = a.ref.current) == null ? void 0 : v.querySelector("div.ant-table-footer")) == null ? void 0 : c.clientHeight) ?? 0, y = r.xs ? 24 : 40, f = ((m = a.ref.current) == null ? void 0 : m.clientHeight) ?? 0, h = ((p = e.current) == null ? void 0 : p.clientHeight) ?? 0, k = f - i - u - h - o - 16 - y;
    return s && s.setAttribute("style", `max-height:${k + i}px;height: 100%`), k;
  };
  return {
    tableWrapperRef: a.ref,
    tableRef: l,
    getTableHeight: g
  };
}, F = {
  primary: "#1890ff",
  secondary: "#f5f7fa",
  accent: "#e6f7ff",
  border: "#e8e8e8"
}, It = ({
  totalCount: t,
  onSearch: e,
  actionButtons: r,
  ...l
}) => {
  var le, re;
  const a = B(null), { t: g } = V(), { useBreakpoint: s } = G, i = s(), { tableWrapperRef: o, tableRef: u, getTableHeight: y } = Xe(
    (le = l.scroll) == null ? void 0 : le.y,
    a,
    i
  ), f = l.columns || [], [h, T] = O(!1), [k, w] = O(""), {
    getColumnKey: C,
    getVisibleColumns: D,
    getEditingColumns: d,
    startEditing: b,
    applyChanges: v,
    cancelChanges: c,
    resetToDefault: m,
    moveColumn: p,
    toggleVisibility: M,
    setFixedStatus: _
  } = Ue(f);
  ne(() => {
    h && b();
  }, [h]);
  const pe = (R) => {
    T(R);
  }, xe = () => {
    v(), T(!1);
  }, be = () => {
    c(), T(!1);
  }, Y = P(() => {
    const R = D(), j = new Map(f.map((S) => [C(S), S]));
    return R.map((S, W) => {
      const L = j.get(S.key);
      return L ? {
        ...L,
        fixed: i.xs ? !1 : S.fixed,
        title: /* @__PURE__ */ n(Ve, { title: L.title, columnKey: S.key, index: W, moveColumn: p }),
        ellipsis: !0,
        onCell: () => ({
          style: {
            whiteSpace: i.xs ? "normal" : "nowrap",
            padding: i.xs ? "8px 4px" : void 0
          }
        })
      } : null;
    }).filter(Boolean);
  }, [f, D, i]), ye = P(() => {
    const R = d(), j = new Map(f.map((S) => [C(S), S]));
    return R.map((S) => {
      var W, L;
      return {
        key: S.key,
        visible: S.visible,
        fixed: S.fixed,
        title: ((L = (W = j.get(S.key)) == null ? void 0 : W.title) == null ? void 0 : L.toString()) || S.key
      };
    });
  }, [f, d]), ve = /* @__PURE__ */ n(
    Ke,
    {
      columns: ye,
      moveColumn: p,
      toggleVisibility: M,
      setFixedStatus: _,
      resetToDefault: m,
      onCancel: be,
      onApply: xe
    }
  );
  return /* @__PURE__ */ n(Ae, { backend: He, children: /* @__PURE__ */ x("div", { style: { height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ x(
      "div",
      {
        ref: a,
        style: {
          marginBottom: "16px",
          display: "flex",
          flexDirection: i.xs ? "column" : "row",
          justifyContent: "space-between",
          alignItems: i.xs ? "stretch" : "center",
          background: F.secondary,
          padding: i.xs ? "12px 12px" : "12px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          gap: i.xs ? "12px" : "0"
        },
        children: [
          /* @__PURE__ */ n(
            "div",
            {
              style: {
                position: "relative",
                width: i.xs ? "100%" : "320px"
              },
              children: /* @__PURE__ */ n(
                Z,
                {
                  placeholder: g("global.labels.search"),
                  allowClear: !0,
                  prefix: /* @__PURE__ */ n(te, { style: { color: F.primary, fontSize: "16px" } }),
                  style: {
                    borderRadius: "6px",
                    padding: "8px 12px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
                    border: `1px solid ${F.border}`,
                    width: "100%"
                  },
                  onChange: (R) => {
                    const j = R.target.value;
                    w(j), clearTimeout(window.searchTimeout), window.searchTimeout = setTimeout(() => {
                      e && e(j);
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
              size: i.xs ? "small" : "middle",
              direction: i.xs ? "vertical" : "horizontal",
              style: {
                width: i.xs ? "100%" : "auto",
                justifyContent: "flex-end",
                display: "flex"
              },
              children: [
                /* @__PURE__ */ n(ee, { title: g("global.labels.customizeTableColumns"), children: /* @__PURE__ */ n(
                  ke,
                  {
                    open: h,
                    onOpenChange: pe,
                    overlay: ve,
                    trigger: ["click"],
                    children: /* @__PURE__ */ n(
                      I,
                      {
                        icon: i.xs ? /* @__PURE__ */ n(ue, {}) : /* @__PURE__ */ n(Oe, {}),
                        style: {
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          backgroundColor: h ? F.accent : "white",
                          borderColor: h ? F.primary : F.border,
                          color: h ? F.primary : "inherit",
                          boxShadow: h ? `0 0 0 2px ${F.accent}` : "none",
                          padding: i.xs ? "6px 12px" : "6px 16px",
                          height: "auto",
                          width: i.xs ? "100%" : "auto",
                          justifyContent: i.xs ? "center" : "flex-start"
                        },
                        children: g("global.btns.columns")
                      }
                    )
                  }
                ) }),
                r
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n("div", { style: { height: "100%", width: "100%" }, ref: o, children: /* @__PURE__ */ n(
      Me,
      {
        ...l,
        columns: Y,
        virtual: l.virtual ?? !0,
        ref: u,
        pagination: {
          position: ["bottomCenter"],
          total: t ?? 0,
          defaultPageSize: Be,
          showSizeChanger: !1,
          size: i.xs ? "small" : "default",
          ...l.pagination || {}
        },
        className: `w-full h-full ${l.className || ""}`,
        scroll: {
          x: (re = l.scroll) != null && re.x ? l.scroll.x : ((Y == null ? void 0 : Y.length) ?? 0) * (i.xs ? 150 : 200),
          y: y()
        },
        rowKey: (R) => R.id,
        size: i.xs ? "small" : "middle"
      }
    ) })
  ] }) });
}, he = "calc(100dvh - 300px)", Je = {
  size: "middle",
  pagination: { pageSize: 20, showSizeChanger: !0 },
  scroll: { y: he }
}, kt = {
  size: "small",
  pagination: !1
}, Mt = (t, e) => {
  const l = `flex h-full min-h-0 flex-col ${(e == null ? void 0 : e.gap) ?? "gap-6"}`;
  return t ? l : `${l} overflow-hidden`;
}, Rt = (t, e) => {
  const r = he;
  return t && e != null && e > 0 ? { x: e, y: r } : { ...Je.scroll };
}, zt = ({
  children: t,
  grow: e = !0,
  className: r
}) => /* @__PURE__ */ n(
  "div",
  {
    className: ["min-h-0 w-full", e ? "flex-1" : "", r ?? ""].filter(Boolean).join(" "),
    children: t
  }
), me = ({
  setSelectedKeys: t,
  selectedKeys: e,
  confirm: r,
  clearFilters: l
}) => /* @__PURE__ */ x("div", { style: { padding: 8 }, children: [
  /* @__PURE__ */ n(
    Z,
    {
      placeholder: "Search...",
      value: e[0],
      onChange: (a) => t(a.target.value ? [a.target.value] : []),
      onPressEnter: () => r(),
      style: { marginBottom: 8, display: "block" }
    }
  ),
  /* @__PURE__ */ x(K, { children: [
    /* @__PURE__ */ n(I, { type: "primary", onClick: () => r(), size: "small", style: { width: 90 }, children: "OK" }),
    /* @__PURE__ */ n(
      I,
      {
        onClick: () => {
          l == null || l(), r();
        },
        size: "small",
        style: { width: 90 },
        children: "Reset"
      }
    )
  ] })
] }), Ft = (t) => ({
  filterDropdown: me,
  filterIcon: (e) => /* @__PURE__ */ n(te, { style: { color: e ? "var(--color-brand-primary)" : void 0 } }),
  onFilter: (e, r) => String(r[t] ?? "").toLowerCase().includes(String(e).toLowerCase())
}), Et = (t) => ({
  filterDropdown: me,
  filterIcon: (e) => /* @__PURE__ */ n(te, { style: { color: e ? "var(--color-brand-primary)" : void 0 } }),
  onFilter: (e, r) => {
    const l = String(e).toLowerCase();
    return t.some(
      (a) => String(r[a] ?? "").toLowerCase().includes(l)
    );
  }
}), Ot = (t, e, r) => ({
  filters: Object.values(t).map((l) => ({
    text: e(l),
    value: l
  })),
  onFilter: (l, a) => a[r] === l
}), Nt = (t, e, r) => ({
  filters: [
    { text: e, value: !0 },
    { text: r, value: !1 }
  ],
  onFilter: (l, a) => a[t] === l
}), At = ({
  onCancel: t,
  onFormSubmit: e,
  open: r,
  children: l,
  title: a,
  width: g = "50%",
  footer: s,
  loading: i = !1,
  btns: o
}) => {
  var f, h;
  const { t: u } = V(), y = /* @__PURE__ */ x(Q, { align: "middle", justify: "space-between", children: [
    /* @__PURE__ */ n(I, { disabled: i, onClick: () => t(), type: "default", children: ((f = o == null ? void 0 : o.cancel) == null ? void 0 : f.label) ?? u("global.btns.cancelChanges") }),
    /* @__PURE__ */ n(I, { disabled: i, onClick: e, block: !1, type: "primary", loading: i, children: ((h = o == null ? void 0 : o.save) == null ? void 0 : h.label) ?? u("global.btns.saveChanges") })
  ] });
  return /* @__PURE__ */ n(
    ce,
    {
      centered: !0,
      maskClosable: !1,
      width: g,
      onCancel: t,
      open: r,
      footer: s ?? y,
      title: !!a && /* @__PURE__ */ n(Q, { justify: "start", align: "middle", children: /* @__PURE__ */ n(N.Title, { level: 2, children: a }) }),
      children: /* @__PURE__ */ n(Re, { spinning: i, style: { maxHeight: "100%" }, children: l })
    }
  );
}, Qe = () => {
  const t = G.useBreakpoint(), e = !t.md, r = !!t.md && !t.lg, l = !t.lg;
  return {
    screens: t,
    isMobile: e,
    isTablet: r,
    isCompact: l
  };
}, Pe = "mobile-fullscreen-modal", Ht = ({
  splitFooterButtonsOnMobile: t = !0,
  rootClassName: e,
  width: r,
  style: l,
  styles: a,
  okButtonProps: g,
  cancelButtonProps: s,
  ...i
}) => {
  const { isMobile: o } = Qe(), u = [e, o ? Pe : ""].filter(Boolean).join(" "), y = o ? {
    top: 0,
    maxWidth: "100%",
    margin: 0,
    ...l
  } : l, f = o && t ? {
    ...g,
    style: { flex: 1, ...(g == null ? void 0 : g.style) ?? {} }
  } : g, h = o && t ? {
    ...s,
    style: { flex: 1, ...(s == null ? void 0 : s.style) ?? {} }
  } : s;
  return /* @__PURE__ */ n(
    ce,
    {
      ...i,
      rootClassName: u || void 0,
      width: o ? "100%" : r,
      style: y,
      styles: a,
      okButtonProps: f,
      cancelButtonProps: h
    }
  );
}, jt = ({ title: t, filters: e, actions: r }) => {
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
        /* @__PURE__ */ n(N.Title, { level: 5, style: { margin: 0 }, children: t }),
        e || r ? /* @__PURE__ */ x(K, { size: 8, wrap: !0, style: { width: a ? "100%" : void 0 }, children: [
          e,
          r
        ] }) : null
      ]
    }
  );
}, Lt = ({
  avatar: t,
  title: e,
  subtitle: r,
  meta: l,
  rightContent: a,
  brandPrimary: g = "#ED1C24",
  /** Same surface as the app top bar (`--color-header-gradient`). */
  cardGradient: s = "var(--color-header-gradient)"
}) => {
  const i = G.useBreakpoint(), o = !i.md, u = !i.lg;
  return /* @__PURE__ */ n(
    E,
    {
      variant: "borderless",
      style: {
        flexShrink: 0,
        background: s,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden"
      },
      styles: {
        body: {
          background: "transparent",
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
            t && /* @__PURE__ */ n(
              ze,
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
              /* @__PURE__ */ n(N.Title, { level: u ? 4 : 3, style: { color: "#ffffff", margin: 0 }, children: e }),
              r && /* @__PURE__ */ n(
                N.Text,
                {
                  style: {
                    color: "rgba(255,255,255,0.55)",
                    fontSize: u ? 12 : 13
                  },
                  children: r
                }
              ),
              l && /* @__PURE__ */ n("div", { style: { marginTop: 4 }, children: l })
            ] }),
            a ? /* @__PURE__ */ n(
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
}, { Text: et } = N, $t = ({ label: t, children: e, style: r }) => /* @__PURE__ */ x(E, { size: "small", styles: { body: { padding: "16px 20px" } }, style: r, children: [
  /* @__PURE__ */ n(et, { type: "secondary", style: { fontSize: 12, display: "block", marginBottom: 6 }, children: t }),
  e
] }), _t = () => /* @__PURE__ */ n(E, { variant: "borderless", children: /* @__PURE__ */ n($, {}) }), Bt = ({ left: t, right: e }) => /* @__PURE__ */ x("div", { className: "flex items-stretch gap-3 w-full", children: [
  /* @__PURE__ */ n("div", { className: "flex-1 flex justify-center", children: t }),
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
  /* @__PURE__ */ n("div", { className: "flex-1 flex justify-center", children: e })
] }), Yt = ({ cards: t = 4, variant: e = "user" }) => e === "project" ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(
    $,
    {
      active: !0,
      title: { width: "30%" },
      paragraph: { rows: 5, width: ["45%", "45%", "60%", "45%", "45%"] }
    }
  ) }),
  /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 4 } }) })
] }) : /* @__PURE__ */ x("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(
    $,
    {
      avatar: { size: 72, shape: "circle" },
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
        gridTemplateColumns: `repeat(${t}, 1fr)`,
        gap: 12
      },
      children: [...Array(t)].map((r, l) => /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 1 }, title: { width: "60%" } }) }, l))
    }
  ),
  /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n($, { active: !0, paragraph: { rows: 4 } }) })
] }), Wt = ({
  width: t = 400,
  height: e = 200,
  onSign: r,
  disabled: l = !1,
  clearLabel: a = "Clear",
  confirmLabel: g = "Confirm"
}) => {
  const s = B(null), [i, o] = O(!1), [u, y] = O(!1), f = ae(() => {
    const d = s.current;
    return d ? d.getContext("2d") : null;
  }, []), h = ae(() => {
    const d = f(), b = s.current;
    !d || !b || (d.clearRect(0, 0, b.width, b.height), y(!1));
  }, [f]);
  ne(() => {
    const d = f();
    d && (d.strokeStyle = "#000", d.lineWidth = 2, d.lineCap = "round", d.lineJoin = "round");
  }, [f]);
  const T = (d) => {
    const b = s.current;
    if (!b) return null;
    const v = b.getBoundingClientRect(), c = b.width / v.width, m = b.height / v.height;
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
    if (l) return;
    const b = f(), v = T(d);
    !b || !v || (b.beginPath(), b.moveTo(v.x, v.y), o(!0));
  }, w = (d) => {
    if (!i || l) return;
    const b = f(), v = T(d);
    !b || !v || (b.lineTo(v.x, v.y), b.stroke(), y(!0));
  }, C = () => {
    o(!1);
  }, D = () => {
    const d = s.current;
    !d || !u || r(d.toDataURL("image/png"));
  };
  return /* @__PURE__ */ x("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ n(
      "canvas",
      {
        ref: s,
        width: t,
        height: e,
        style: {
          border: "1px solid #d9d9d9",
          borderRadius: 8,
          cursor: l ? "default" : "crosshair",
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
    !l && /* @__PURE__ */ x(K, { children: [
      /* @__PURE__ */ n(I, { size: "small", icon: /* @__PURE__ */ n(Ne, {}), onClick: h, disabled: !u, children: a }),
      /* @__PURE__ */ n(I, { size: "small", type: "primary", onClick: D, disabled: !u, children: g })
    ] })
  ] });
}, { Text: se } = N, qt = ({ value: t, label: e = "Primary key" }) => t ? /* @__PURE__ */ x(
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
      /* @__PURE__ */ n(
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
) : null, Zt = {
  mobileMax: "md",
  compactMax: "lg"
}, Gt = "mobile-fullscreen-modal", Kt = {
  primary: "#ED1C24",
  dark: "#080808",
  gray: "#7C7C7C",
  white: "#ffffff",
  black: "#000000"
}, Vt = {
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
}, Ut = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30
}, Xt = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Jt = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32
}, Qt = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  round: 20
};
export {
  At as BaseEditModal,
  St as CheckboxFormItem,
  Ke as ColumnManager,
  kt as DETAIL_TABLE_PROPS,
  q as DRAG_TYPE,
  bt as DateFormItem,
  Yt as DetailSkeleton,
  Ve as DraggableHeader,
  Ge as DraggableMenuItem,
  Tt as FormItem,
  Dt as FormItemWrapper,
  Ht as FullscreenMobileModal,
  Lt as HeroHeaderCard,
  pt as InputFormItem,
  he as LIST_TABLE_BODY_MAX_Y,
  Je as LIST_TABLE_PROPS,
  zt as ListPageTableArea,
  Gt as MOBILE_FULLSCREEN_MODAL_CLASS,
  It as MainTable,
  Bt as MobileActionSplitRow,
  yt as NumberFormItem,
  qt as PrimaryKey,
  Zt as RESPONSIVE_BREAKPOINTS,
  jt as SectionHeader,
  xt as SelectFormItem,
  Wt as SignatureCanvas,
  _t as SkeletonCard,
  $t as StatCard,
  Ct as SwitchFormItem,
  vt as TextAreaFormItem,
  me as TextFilterDropdown,
  wt as TimePickerFormItem,
  Nt as booleanFilterColumnProps,
  Kt as brand,
  Vt as colors,
  Le as dateFormat,
  gt as dateFormatISO,
  $e as dateTimeFormat,
  ut as dateTimeFormatWithoutSeconds,
  Ze as datesToDayjs,
  Be as defaultTablePageSize,
  ht as dropdownItemsMaxTake,
  Ot as enumFilterColumnProps,
  Ut as fontSize,
  Xt as fontWeight,
  A as getRules,
  _e as isoDateFormatRegex,
  Mt as listPageRootClassName,
  Rt as listTableScroll,
  mt as objectToFormData,
  ft as passwordRegex,
  We as phoneFormatRegex,
  Qt as radius,
  Jt as spacing,
  Ft as textSearchColumnProps,
  Et as textSearchMultiFieldProps,
  Ye as uriRegex,
  Ue as useColumnManager,
  Qe as useResponsive,
  Xe as useTableFullHeightCalculator
};
