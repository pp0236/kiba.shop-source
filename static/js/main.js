(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0], {
        49: function (e, t, n) {},
        50: function (e, t, n) {},
        51: function (e, t, n) {
            "use strict";
            n.r(t);
            var a, c = n(1),
                s = n.n(c),
                r = n(31),
                i = n.n(r),
                l = n(9),
                o = n(3),
                d = n(7),
                j = n.n(d),
                u = n(17),
                b = n(14),
                m = n(8);

            function h(e, t, n) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = Object(b.a)(j.a.mark((function e(t, n, c) {
                    var s, r, i, l;
                    return j.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                }, localStorage.auth && (s.Authorization = localStorage.auth), e.next = 4, fetch("/api" + n, {
                                    method: t,
                                    headers: s,
                                    body: c ? JSON.stringify(c) : void 0
                                });
                            case 4:
                                if (204 !== (r = e.sent).status) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return");
                            case 9:
                                return e.next = 11, r.json();
                            case 11:
                                if (i = e.sent, !(r.status < 400)) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", i);
                            case 16:
                                if ((l = i).code !== a.Unauthorized || n.startsWith("/sellers/me")) {
                                    e.next = 23;
                                    break
                                }
                                throw delete localStorage.auth, window.location.href = "/login", new Error;
                            case 23:
                                throw l;
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function p(e) {
                return h("GET", "/sellers/".concat(e))
            }

            function f(e, t) {
                return h("GET", "/sellers/".concat(e, "/items?withdisabled=").concat(null !== t && void 0 !== t && t))
            }

            function O(e) {
                return h("GET", "/roblox/users/".concat(e, "/details"))
            }! function (e) {
                e[e.InvalidField = 0] = "InvalidField", e[e.Unauthorized = 1] = "Unauthorized", e[e.ResourceNotFound = 2] = "ResourceNotFound", e[e.Ratelimited = 3] = "Ratelimited", e[e.NotAvailable = 4] = "NotAvailable"
            }(a || (a = {}));
            var v = n(27),
                g = n(2),
                w = n(0),
                N = function (e) {
                    var t, n, a = Object(m.c)(e),
                        c = Object(g.a)(a, 2),
                        s = c[0],
                        r = c[1],
                        i = r.error ? r.error : "";
                    return Object(w.jsxs)("div", Object(v.a)(Object(v.a)({}, s), {}, {
                        className: null !== (t = e.className) && void 0 !== t ? t : "",
                        style: null !== (n = e.style) && void 0 !== n ? n : {},
                        children: [e.children, Object(w.jsx)("label", {
                            className: "text-danger" + (e.offset ? " offset" : ""),
                            style: {
                                display: 0 === i.length ? "none" : ""
                            },
                            children: i
                        })]
                    }))
                },
                y = s.a.createContext(void 0),
                k = function (e) {
                    var t = e.children,
                        n = Object(c.useState)(),
                        a = Object(g.a)(n, 2),
                        s = a[0],
                        r = a[1];
                    return Object(w.jsx)(y.Provider, {
                        value: {
                            user: s,
                            setUser: r
                        },
                        children: t
                    })
                },
                S = function (e) {
                    var t = e.path,
                        n = e.name,
                        a = e.exact,
                        c = Object(o.f)();
                    return Object(w.jsx)("li", {
                        className: "nav item" + ((a ? c.location.pathname === t : c.location.pathname.startsWith(t)) ? " active" : ""),
                        children: Object(w.jsx)(l.b, {
                            className: "nav-link",
                            to: t,
                            children: n
                        })
                    })
                },
                C = function (e) {
                    var t = e.size;
                    return Object(w.jsx)("svg", {
                        height: null !== t && void 0 !== t ? t : 18,
                        width: null !== t && void 0 !== t ? t : 18,
                        viewBox: "0 0 14 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "Icon",
                        children: Object(w.jsx)("path", {
                            className: "shp0",
                            d: "m 12.847705,2.8969737 c 0.937827,0.5210157 1.458844,1.5630471 1.458844,2.6050787 v 5.0017516 c 0,1.04203 -0.521017,2.084062 -1.458844,2.605077 l -4.272329,2.500877 c -0.937828,0.521015 -2.084063,0.521015 -3.021891,0 L 1.281157,13.108881 C 0.239125,12.587866 -0.281891,11.545834 -0.281891,10.503804 V 5.5020524 c 0,-1.0420316 0.625219,-2.084063 1.458844,-2.6050787 L 5.449282,0.39609836 c 0.937828,-0.52101571 2.084063,-0.52101571 3.021891,0 z M 1.802172,3.8348021 C 1.176953,4.1474116 0.76014,4.8768335 0.76014,5.5020524 v 4.8975486 c 0,0.729421 0.416813,1.458844 1.042032,1.771453 l 4.168126,2.500875 c 0.625219,0.312609 1.354641,0.312609 1.979859,0 l 4.272328,-2.500875 c 0.62522,-0.312609 1.042032,-1.042032 1.042032,-1.771453 V 5.5020524 c 0,-0.6252189 -0.416812,-1.3546408 -1.042032,-1.6672503 L 8.05436,1.3339267 c -0.625218,-0.3126095 -1.458843,-0.3126095 -2.084062,0 z m 9.378283,0.5210157 c 0.625218,0.4168125 1.04203,1.1462346 1.04203,1.8756565 v 3.4387036 c 0,0.8336261 -0.416812,1.4588441 -1.04203,1.8756561 l -3.126094,1.875657 c -0.625219,0.416814 -1.458844,0.416814 -2.188266,0 L 2.844204,11.650037 C 2.218985,11.233225 1.802172,10.503804 1.802172,9.7743815 V 6.2314743 c 0,-0.7294219 0.416813,-1.458844 1.042032,-1.8756565 L 5.970298,2.5843643 c 0.625219,-0.3126095 1.458844,-0.3126095 2.084062,0 z M 4.928266,10.08699 H 9.096391 V 5.9188649 H 4.928266 Z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                            id: "path2",
                            style: {
                                strokeWidth: "1.04203"
                            }
                        })
                    })
                },
                R = function (e) {
                    var t = e.absolute,
                        n = Object(c.useContext)(y),
                        a = Object(c.useState)({
                            credit: 0,
                            frozen: 0
                        }),
                        s = Object(g.a)(a, 2),
                        r = s[0],
                        i = s[1];
                    return Object(c.useEffect)((function () {
                        n && p("me").then((function (e) {
                            null === n || void 0 === n || n.setUser(e), h("GET", "/credit").then((function (e) {
                                return i(e)
                            })).catch((function (e) {}))
                        })).catch((function (e) {}))
                    }), []), Object(w.jsxs)("nav", {
                        className: "navbar navbar-expand-lg navbar-dark w-100" + (t ? " absolute" : ""),
                        children: [Object(w.jsxs)("a", {
                            className: "navbar-brand p-2 d-flex align-items-center",
                            href: "#",
                            children: [Object(w.jsx)(C, {
                                size: 30
                            }), Object(w.jsx)("span", {
                                className: "ml-2",
                                children: "RoExchange"
                            })]
                        }), Object(w.jsx)("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#nav-items",
                            "aria-controls": "nav-items",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: Object(w.jsx)("span", {
                                className: "navbar-toggler-icon"
                            })
                        }), Object(w.jsx)("div", {
                            className: "collapse navbar-collapse",
                            id: "nav-items",
                            children: Object(w.jsxs)("ul", {
                                className: "navbar-nav ml-auto",
                                children: [Object(w.jsx)(S, {
                                    path: "/",
                                    exact: !0,
                                    name: "Market"
                                }), Object(w.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(w.jsx)("a", {
                                        className: "nav-link",
                                        href: "https://discord.gg/kUMrFcWdv9",
                                        target: "_blank",
                                        children: "Discord"
                                    })
                                }), (null === n || void 0 === n ? void 0 : n.user) ? Object(w.jsxs)(w.Fragment, {
                                    children: [Object(w.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [Object(w.jsx)("a", {
                                            className: "nav-link dropdown-toggle",
                                            href: "#",
                                            id: "creditDrop",
                                            role: "button",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Credit"
                                        }), Object(w.jsxs)("div", {
                                            className: "dropdown-menu dropdown-menu-right",
                                            "aria-labelledby": "creditDrop",
                                            children: [Object(w.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "#",
                                                children: ["Credit: $", r.credit]
                                            }), Object(w.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "#",
                                                children: ["Frozen: $", r.frozen]
                                            }), Object(w.jsx)("a", {
                                                className: "dropdown-item",
                                                href: "#",
                                                onClick: function () {
                                                    return h("GET", "/credit/invoice").then((function (e) {
                                                        return window.open(e.url, "_blank")
                                                    })).catch((function (e) {}))
                                                },
                                                children: "Buy credit"
                                            })]
                                        })]
                                    }), Object(w.jsx)(S, {
                                        path: "/settings",
                                        name: "Settings"
                                    })]
                                }) : Object(w.jsxs)(w.Fragment, {
                                    children: [Object(w.jsx)(S, {
                                        path: "/login",
                                        name: "Log in"
                                    }), Object(w.jsx)(S, {
                                        path: "/register",
                                        name: "Register"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                F = function () {
                    var e = Object(o.f)();
                    return Object(w.jsxs)(w.Fragment, {
                        children: [Object(w.jsx)(R, {
                            absolute: !0
                        }), Object(w.jsx)("div", {
                            className: "h-100 d-flex justify-content-center align-items-center",
                            children: Object(w.jsx)("div", {
                                style: {
                                    width: "300px"
                                },
                                children: Object(w.jsx)(m.b, {
                                    initialValues: {
                                        username: "",
                                        password: ""
                                    },
                                    validate: function () {
                                        var t = Object(b.a)(j.a.mark((function t(n) {
                                            var a, c;
                                            return j.a.wrap((function (t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, s = n.username, r = n.password, h("POST", "/auth/login", {
                                                            username: s,
                                                            password: r
                                                        });
                                                    case 3:
                                                        a = t.sent, localStorage.auth = a.token, e.push("/"), t.next = 14;
                                                        break;
                                                    case 8:
                                                        if (t.prev = 8, t.t0 = t.catch(0), "number" !== typeof t.t0.code) {
                                                            t.next = 14;
                                                            break
                                                        }
                                                        if (!(c = t.t0).field) {
                                                            t.next = 14;
                                                            break
                                                        }
                                                        return t.abrupt("return", Object(u.a)({}, c.field, c.message));
                                                    case 14:
                                                    case "end":
                                                        return t.stop()
                                                }
                                                var s, r
                                            }), t, null, [
                                                [0, 8]
                                            ])
                                        })));
                                        return function (e) {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    validateOnChange: !1,
                                    validateOnBlur: !1,
                                    validateOnMount: !1,
                                    onSubmit: function () {},
                                    children: function (e) {
                                        var t = e.isValidating;
                                        return Object(w.jsxs)(m.a, {
                                            children: [Object(w.jsx)("h1", {
                                                style: {
                                                    textAlign: "center",
                                                    fontWeight: 100
                                                },
                                                children: "Log in"
                                            }), Object(w.jsx)(N, {
                                                name: "username",
                                                className: "mb-2",
                                                children: Object(w.jsx)("input", {
                                                    className: "form-control",
                                                    name: "username",
                                                    placeholder: "Username",
                                                    disabled: t
                                                })
                                            }), Object(w.jsx)(N, {
                                                name: "password",
                                                className: "mb-4",
                                                children: Object(w.jsx)("input", {
                                                    className: "form-control",
                                                    type: "password",
                                                    name: "password",
                                                    placeholder: "Password",
                                                    disabled: t
                                                })
                                            }), Object(w.jsx)("div", {
                                                className: "d-flex justify-content-center",
                                                children: Object(w.jsx)("button", {
                                                    type: "submit",
                                                    className: "btn btn-primary px-5",
                                                    disabled: t,
                                                    children: "Log in"
                                                })
                                            })]
                                        })
                                    }
                                })
                            })
                        })]
                    })
                },
                I = function (e) {
                    var t = e.asset,
                        n = Object(o.f)();
                    return Object(w.jsx)("div", {
                        className: "rounded p-3 mb-2 d-flex align-items-center justify-content-between roblox-asset shadow-sm",
                        onClick: function () {
                            return n.push("/assets/".concat(t.id, "?redirect=").concat(n.location.pathname + n.location.search))
                        },
                        children: Object(w.jsxs)("div", {
                            className: "d-flex",
                            children: [Object(w.jsx)("img", {
                                src: "https://www.roblox.com/asset-thumbnail/image?assetId=".concat(t.id, "&width=250&height=250&format=png"),
                                style: {
                                    width: "85px",
                                    height: "85px"
                                },
                                className: "rounded-top",
                                alt: "Thumbnail"
                            }), Object(w.jsxs)("div", {
                                children: [Object(w.jsx)("h4", {
                                    className: "mb-0 font-weight-bold",
                                    children: t.name
                                }), Object(w.jsxs)("div", {
                                    className: "text-muted mb-2 readonly",
                                    style: {
                                        fontSize: "17px"
                                    },
                                    children: [t.item_count, " available"]
                                }), Object(w.jsxs)("span", {
                                    className: "rap",
                                    children: [Object(w.jsx)(C, {}), " ", t.rap]
                                }), Object(w.jsxs)("span", {
                                    children: [" ", "\xa0", "$", t.price_range.min === t.price_range.max ? t.price_range.min : t.price_range.min + "-" + t.price_range.max]
                                })]
                            })]
                        })
                    })
                },
                _ = function (e) {
                    var t = e.size,
                        n = e.className,
                        a = e.user,
                        c = e.srcOverwrite;
                    return Object(w.jsx)("img", {
                        alt: "User avatar",
                        src: c && c.length > 0 ? c : "/cdn/avatars/" + a.avatar,
                        className: "rounded-circle " + n,
                        style: {
                            width: t,
                            height: t
                        }
                    })
                },
                T = function (e) {
                    var t = e.seller,
                        n = Object(o.f)();
                    return Object(w.jsxs)("div", {
                        className: "rounded d-flex align-items-center p-2 seller-card",
                        onClick: function () {
                            return n.push("/sellers/".concat(t.id, "?redirect=").concat(n.location.pathname + n.location.search))
                        },
                        children: [Object(w.jsx)(_, {
                            user: t,
                            className: "mr-2",
                            size: "40px"
                        }), Object(w.jsx)("label", {
                            className: "ml-1",
                            children: t.username
                        })]
                    })
                },
                E = function () {
                    var e, t = Object(c.useState)([]),
                        n = Object(g.a)(t, 2),
                        a = n[0],
                        s = n[1],
                        r = Object(c.useState)([]),
                        i = Object(g.a)(r, 2),
                        l = i[0],
                        d = i[1],
                        u = Object(o.f)(),
                        m = null !== (e = new URLSearchParams(window.location.search).get("query")) && void 0 !== e ? e : "";
                    return Object(c.useEffect)((function () {
                        Object(b.a)(j.a.mark((function e() {
                            return j.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = s, e.next = 3, h("GET", "/assets/query?name=" + m);
                                    case 3:
                                        if (e.t1 = e.sent, (0, e.t0)(e.t1), !(m.length > 0)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.t2 = d, e.next = 9, h("GET", "/sellers/query?username=" + m);
                                    case 9:
                                        e.t3 = e.sent, (0, e.t2)(e.t3), e.next = 14;
                                        break;
                                    case 13:
                                        l.length > 0 && d([]);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [m]), Object(w.jsxs)(w.Fragment, {
                        children: [Object(w.jsx)(R, {
                            absolute: !1
                        }), localStorage.dismissedTutorial ? "" : Object(w.jsx)("div", {
                            className: "d-flex justify-content-center w-100",
                            style: {
                                position: "absolute",
                                bottom: "1px"
                            },
                            children: Object(w.jsxs)("div", {
                                className: "alert alert-dismissible fade show w-25 clickable-alert readonly",
                                role: "alert",
                                "data-dismiss": "alert",
                                "aria-label": "Close",
                                onClick: function (e) {
                                    console.log(e.target), "span" !== e.target.localName && window.open("https://www.youtube.com/watch?v=uePBXsFUD8I", "_blank"), localStorage.dismissedTutorial = !0
                                },
                                children: [Object(w.jsx)("strong", {
                                    children: "New here?"
                                }), " Watch the tutorial", Object(w.jsx)("button", {
                                    type: "button",
                                    className: "close",
                                    children: Object(w.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "\xd7"
                                    })
                                })]
                            })
                        }), Object(w.jsx)("div", {
                            className: "p-3",
                            children: Object(w.jsx)("div", {
                                className: "d-flex justify-content-center w-100",
                                children: Object(w.jsx)("input", {
                                    className: "form-control w-25",
                                    style: {
                                        minWidth: "300px"
                                    },
                                    placeholder: "Look up an item or a seller",
                                    defaultValue: null !== m && void 0 !== m ? m : "",
                                    onKeyUp: function (e) {
                                        13 === e.keyCode && u.push("/?query=" + e.target.value)
                                    }
                                })
                            })
                        }), Object(w.jsxs)("div", {
                            className: "d-flex justify-content-center",
                            children: [l.length > 0 ? Object(w.jsxs)("div", {
                                className: "w-50",
                                children: [Object(w.jsx)("div", {
                                    className: "text-center readonly",
                                    children: "Sellers"
                                }), Object(w.jsx)("div", {
                                    className: "mb-2 d-flex justify-content-center",
                                    style: {
                                        overflowX: "auto",
                                        width: "100%",
                                        gap: "10px"
                                    },
                                    children: l.map((function (e) {
                                        return Object(w.jsx)(T, {
                                            seller: e
                                        }, e.id)
                                    }))
                                })]
                            }) : "", a.length > 0 ? Object(w.jsxs)("div", {
                                style: {
                                    width: "40%"
                                },
                                children: [Object(w.jsx)("div", {
                                    className: "text-center readonly",
                                    children: "Items"
                                }), Object(w.jsx)("div", {
                                    children: a.map((function (e) {
                                        return Object(w.jsx)(I, {
                                            asset: e
                                        }, e.id)
                                    }))
                                })]
                            }) : ""]
                        })]
                    })
                },
                P = n(34),
                z = function () {
                    var e = Object(c.useState)(null),
                        t = Object(g.a)(e, 2),
                        n = t[0],
                        a = t[1],
                        s = Object(o.f)();
                    return Object(w.jsx)("div", {
                        className: "h-100 d-flex justify-content-center align-items-center",
                        children: Object(w.jsx)("div", {
                            style: {
                                width: "300px"
                            },
                            children: Object(w.jsx)(m.b, {
                                initialValues: {
                                    username: "",
                                    password: ""
                                },
                                validate: function () {
                                    var e = Object(b.a)(j.a.mark((function e(t) {
                                        var a, c;
                                        return j.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return e.prev = 1, e.next = 4, r = t.username, i = t.password, h("POST", "/auth/register", {
                                                        username: r,
                                                        password: i,
                                                        captcha_token: n
                                                    });
                                                case 4:
                                                    a = e.sent, localStorage.auth = a.token, s.push("/"), e.next = 15;
                                                    break;
                                                case 9:
                                                    if (e.prev = 9, e.t0 = e.catch(1), "number" !== typeof e.t0.code) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    if (!(c = e.t0).field) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return e.abrupt("return", Object(u.a)({}, c.field, c.message));
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                            var r, i
                                        }), e, null, [
                                            [1, 9]
                                        ])
                                    })));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                validateOnChange: !1,
                                validateOnBlur: !1,
                                validateOnMount: !1,
                                onSubmit: function () {},
                                children: function (e) {
                                    var t = e.isValidating;
                                    return Object(w.jsxs)(m.a, {
                                        children: [Object(w.jsx)("h1", {
                                            style: {
                                                textAlign: "center",
                                                fontWeight: 100
                                            },
                                            children: "Register"
                                        }), Object(w.jsx)(N, {
                                            name: "username",
                                            className: "mb-2",
                                            children: Object(w.jsx)("input", {
                                                className: "form-control",
                                                name: "username",
                                                placeholder: "Username",
                                                disabled: t
                                            })
                                        }), Object(w.jsx)(N, {
                                            name: "password",
                                            className: "mb-2",
                                            children: Object(w.jsx)("input", {
                                                className: "form-control",
                                                type: "password",
                                                name: "password",
                                                placeholder: "Password",
                                                disabled: t
                                            })
                                        }), Object(w.jsx)("div", {
                                            className: "mb-4",
                                            children: Object(w.jsx)(P.a, {
                                                sitekey: "6LeRIqQaAAAAAMWmq--42ZPBtU5BnbuESmLXcOYl",
                                                theme: "dark",
                                                onChange: function (e) {
                                                    return a(e)
                                                }
                                            })
                                        }), Object(w.jsx)("div", {
                                            className: "d-flex justify-content-center",
                                            children: Object(w.jsx)("button", {
                                                type: "submit",
                                                className: "btn btn-primary px-5",
                                                disabled: t,
                                                children: "Register"
                                            })
                                        })]
                                    })
                                }
                            })
                        })
                    })
                },
                L = (n(49), n(50), function (e) {
                    var t = e.item,
                        n = Object(o.f)();
                    return Object(w.jsxs)("div", {
                        className: "rounded roblox-item mb-2 p-3 d-flex align-items-center justify-content-between shadow-sm",
                        children: [Object(w.jsxs)("div", {
                            className: "d-flex",
                            children: [Object(w.jsx)("img", {
                                src: "https://www.roblox.com/asset-thumbnail/image?assetId=".concat(t.asset_id, "&width=250&height=250&format=png"),
                                style: {
                                    width: "85px",
                                    height: "85px"
                                },
                                className: "rounded-top",
                                alt: "Thumbnail"
                            }), Object(w.jsxs)("div", {
                                children: [Object(w.jsx)("h4", {
                                    className: "mb-0 font-weight-bold",
                                    children: t.name
                                }), Object(w.jsxs)("div", {
                                    className: "text-muted mb-2",
                                    style: {
                                        fontSize: "18px"
                                    },
                                    children: ["By ", Object(w.jsx)(l.b, {
                                        to: "/sellers/" + t.seller.id + "?redirect=" + n.location.pathname + n.location.search,
                                        onClick: function (e) {
                                            return e.stopPropagation()
                                        },
                                        children: t.seller.username
                                    })]
                                }), Object(w.jsxs)("span", {
                                    className: "rap",
                                    children: [Object(w.jsx)(C, {}), " ", t.rap]
                                }), Object(w.jsxs)("span", {
                                    children: [" ", "\xa0", "$", t.price]
                                })]
                            })]
                        }), Object(w.jsxs)("div", {
                            className: "flex-wrap",
                            style: {
                                width: "150px"
                            },
                            children: [Object(w.jsx)("button", {
                                className: "btn btn-secondary mb-2 w-100",
                                onClick: function (e) {
                                    e.stopPropagation(), window.open("https://www.roblox.com/catalog/" + t.asset_id, "_blank")
                                },
                                children: "About"
                            }), Object(w.jsx)("button", {
                                className: "btn btn-primary w-100",
                                onClick: function (e) {
                                    n.push("/items/".concat(t.id, "/purchase?redirect=").concat(n.location.pathname + n.location.search)), e.stopPropagation()
                                },
                                children: "Purchase"
                            })]
                        })]
                    })
                }),
                U = function () {
                    var e = Object(o.g)().id,
                        t = Object(c.useState)(),
                        n = Object(g.a)(t, 2),
                        s = n[0],
                        r = n[1],
                        i = Object(c.useState)(),
                        l = Object(g.a)(i, 2),
                        d = l[0],
                        j = l[1],
                        u = Object(o.f)(),
                        b = new URLSearchParams(window.location.search).get("redirect");
                    return Object(c.useEffect)((function () {
                        p(e).then((function (t) {
                            r(t), f(e).then((function (e) {
                                return j(e)
                            }))
                        })).catch((function (e) {
                            "number" === typeof e.code && (e.code === a.ResourceNotFound && (b && "null" !== b ? u.push("/404?redirect=" + b) : u.push("/404")))
                        }))
                    }), [e]), Object(w.jsxs)(w.Fragment, {
                        children: [b ? Object(w.jsx)("button", {
                            className: "btn btn-outline-danger",
                            style: {
                                position: "absolute",
                                left: "10px",
                                top: "10px",
                                paddingLeft: "11px",
                                paddingRight: "11px"
                            },
                            onClick: function () {
                                return u.push(b)
                            },
                            children: Object(w.jsx)("i", {
                                className: "fa fa-arrow-left",
                                "aria-hidden": "true"
                            })
                        }) : "", s ? Object(w.jsx)("div", {
                            className: "h-100 d-flex justify-content-center",
                            children: Object(w.jsxs)("div", {
                                className: "w-50 mt-3",
                                children: [Object(w.jsxs)("div", {
                                    className: "d-flex justify-content-center mt-3",
                                    children: [Object(w.jsx)(_, {
                                        user: s,
                                        className: "mr-4",
                                        size: "128px"
                                    }), Object(w.jsxs)("div", {
                                        style: {
                                            flexGrow: 1
                                        },
                                        children: [Object(w.jsx)("span", {
                                            style: {
                                                fontSize: "18px"
                                            },
                                            children: s.username
                                        }), Object(w.jsx)("hr", {
                                            className: "mt-0 mb-2 w-100"
                                        }), s.bio ? Object(w.jsx)("div", {
                                            style: {
                                                wordWrap: "break-word",
                                                color: "rgb(210, 210, 210)"
                                            },
                                            children: s.bio
                                        }) : Object(w.jsx)("div", {
                                            className: "text-muted font-italic",
                                            children: "Seller has no biography"
                                        })]
                                    })]
                                }), d && d.length > 0 ? Object(w.jsxs)(w.Fragment, {
                                    children: [Object(w.jsx)("div", {
                                        className: "text-center mt-3",
                                        children: "Items"
                                    }), Object(w.jsx)("div", {
                                        className: "d-flex justify-content-center flex-wrap",
                                        style: {
                                            maxWidth: "100%"
                                        },
                                        children: d.map((function (e) {
                                            return Object(w.jsx)(L, {
                                                item: e
                                            }, e.id)
                                        }))
                                    })]
                                }) : ""]
                            })
                        }) : ""]
                    })
                },
                V = n(24),
                A = n(35),
                G = function (e) {
                    var t = e.item,
                        n = e.removeItem;
                    return Object(w.jsxs)("div", {
                        className: "rounded mt-2 p-2 d-flex justify-content-between",
                        style: {
                            backgroundColor: "rgb(17, 17, 17)"
                        },
                        children: [Object(w.jsxs)("div", {
                            className: "ellipsis d-flex",
                            children: [Object(w.jsx)("img", {
                                src: "https://www.roblox.com/asset-thumbnail/image?assetId=".concat(t.asset_id, "&width=250&height=250&format=png"),
                                style: {
                                    width: "45px",
                                    height: "45px"
                                },
                                alt: "Thumbnail"
                            }), Object(w.jsxs)("div", {
                                className: "ellipsis readonly",
                                children: [Object(w.jsx)("div", {
                                    className: "ellipsis",
                                    style: {
                                        color: "rgb(220, 220, 220)"
                                    },
                                    children: t.name
                                }), Object(w.jsxs)("div", {
                                    children: ["$", t.price]
                                })]
                            })]
                        }), Object(w.jsx)("button", {
                            className: "btn btn-danger px-3 ml-3",
                            disabled: !t.available,
                            onClick: function () {
                                return n()
                            },
                            children: Object(w.jsx)("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })
                        })]
                    }, t.id)
                },
                B = function (e) {
                    var t = e.id,
                        n = e.title,
                        a = e.children;
                    return Object(w.jsx)("div", {
                        id: t,
                        className: "modal fade",
                        tabIndex: -1,
                        role: "dialog",
                        children: Object(w.jsx)("div", {
                            className: "modal-dialog modal-lg modal-dialog-centered",
                            role: "document",
                            children: Object(w.jsxs)("div", {
                                className: "modal-content",
                                children: [Object(w.jsxs)("div", {
                                    className: "modal-header",
                                    children: [Object(w.jsx)("h5", {
                                        className: "modal-title",
                                        children: n
                                    }), Object(w.jsx)("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: Object(w.jsx)("span", {
                                            "aria-hidden": "true",
                                            children: "\xd7"
                                        })
                                    })]
                                }), a]
                            })
                        })
                    })
                };

            function W(e, t) {
                var n = t * e.fraction;
                return (n > e.min ? n : e.min).toFixed(2)
            }
            var M, q = function (e) {
                    var t = e.availableItems,
                        n = e.addItem,
                        a = Object(c.useState)(),
                        s = Object(g.a)(a, 2),
                        r = s[0],
                        i = s[1];
                    return Object(c.useEffect)((function () {
                        h("GET", "/credit/variables").then((function (e) {
                            return i(e)
                        }))
                    }), []), Object(w.jsx)(B, {
                        id: "sell-modal",
                        title: "Sell an item",
                        children: Object(w.jsx)(m.b, {
                            initialValues: {
                                item: 0,
                                price: 0
                            },
                            validate: function (e) {
                                if (e.price < 1) return {
                                    price: "Minimum $1"
                                }
                            },
                            validateOnChange: !1,
                            validateOnBlur: !1,
                            validateOnMount: !1,
                            onSubmit: function (e) {
                                var a;
                                a = e.item ? t[e.item] : t[0], n({
                                    id: a.id,
                                    name: a.name,
                                    rap: 0,
                                    asset_id: a.asset_id,
                                    seller: {
                                        id: "",
                                        username: "",
                                        avatar: null
                                    },
                                    price: e.price,
                                    available: !0,
                                    trusted: !1
                                }), $("#sell-modal").modal("hide")
                            },
                            children: function (e) {
                                var n = e.isValidating,
                                    a = e.submitForm,
                                    c = e.values;
                                return Object(w.jsxs)(m.a, {
                                    children: [Object(w.jsxs)("div", {
                                        className: "modal-body",
                                        children: [Object(w.jsxs)("div", {
                                            className: "d-flex",
                                            children: [Object(w.jsx)(N, {
                                                name: "item",
                                                style: {
                                                    flexGrow: 1
                                                },
                                                children: Object(w.jsx)("select", {
                                                    name: "item",
                                                    className: "form-control",
                                                    disabled: n,
                                                    children: t.map((function (e) {
                                                        return Object(w.jsx)("option", {
                                                            value: e.id,
                                                            children: e.name
                                                        }, e.id)
                                                    }))
                                                })
                                            }), Object(w.jsx)(N, {
                                                name: "price",
                                                className: "ml-2",
                                                style: {
                                                    flexBasis: "25%"
                                                },
                                                children: Object(w.jsx)("input", {
                                                    type: "number",
                                                    name: "price",
                                                    className: "form-control",
                                                    placeholder: "Price",
                                                    disabled: n
                                                })
                                            })]
                                        }), r && c.price > 0 ? Object(w.jsxs)("div", {
                                            className: "d-flex justify-content-end mt-1",
                                            children: [" ", Object(w.jsxs)("span", {
                                                className: "text-muted",
                                                children: ["$", W(r, c.price), " fee"]
                                            }), " "]
                                        }) : ""]
                                    }), Object(w.jsx)("div", {
                                        className: "modal-footer",
                                        children: Object(w.jsx)("button", {
                                            className: "btn btn-primary",
                                            type: "button",
                                            disabled: n,
                                            onClick: function () {
                                                return a()
                                            },
                                            children: "Add"
                                        })
                                    })]
                                })
                            }
                        })
                    })
                },
                D = function (e) {
                    var t = e.username,
                        n = e.avatar;
                    return Object(w.jsx)("div", {
                        className: "rounded mt-2 p-2 d-flex align-items-center" + (null === t ? " text-danger" : ""),
                        style: {
                            backgroundColor: "rgb(17, 17, 17)"
                        },
                        children: null === t ? Object(w.jsxs)(w.Fragment, {
                            children: [Object(w.jsx)("i", {
                                className: "fa fa-exclamation-triangle mr-2",
                                "aria-hidden": "true",
                                style: {
                                    fontSize: "35px"
                                }
                            }), Object(w.jsx)("span", {
                                children: "Invalid token"
                            })]
                        }) : Object(w.jsxs)(w.Fragment, {
                            children: [n ? Object(w.jsx)("img", {
                                src: n,
                                className: "rounded-circle mr-2",
                                style: {
                                    width: "40px",
                                    height: "40px"
                                }
                            }) : Object(w.jsx)("div", {
                                style: {
                                    height: "40px"
                                }
                            }), Object(w.jsx)("span", {
                                children: t
                            })]
                        })
                    })
                },
                Y = function (e) {
                    var t, n, s, r, i = e.localItems,
                        l = e.setLocalItems,
                        o = Object(c.useContext)(y),
                        d = Object(m.d)(),
                        j = d.values,
                        u = d.isValidating,
                        b = d.setFieldValue,
                        x = Object(c.useState)(),
                        p = Object(g.a)(x, 2),
                        f = p[0],
                        v = p[1],
                        k = Object(c.useState)(),
                        S = Object(g.a)(k, 2),
                        C = S[0],
                        R = S[1],
                        F = Object(c.useState)(),
                        I = Object(g.a)(F, 2),
                        T = I[0],
                        E = I[1],
                        P = Object(c.useState)(),
                        z = Object(g.a)(P, 2),
                        L = z[0],
                        U = z[1],
                        V = Object(c.useRef)();
                    Object(c.useEffect)((function () {
                        var e;
                        j.shoppy && j.shoppy.length > 0 ? (e = j.shoppy, h("GET", "/settings/shoppy?token=" + e)).then((function (e) {
                            return U(e)
                        })).catch((function (e) {
                            return U(null)
                        })) : L && U(void 0)
                    }), [j.shoppy]), Object(c.useEffect)((function () {
                        var e;
                        "undefined" !== typeof i && (j.cookie && j.cookie.length > 0 ? (E(void 0), (e = j.cookie, h("GET", "/roblox/validate?roblosecurity=" + e)).then((function (e) {
                            v(e), O(e.id).then((function (e) {
                                R(e), e.premium || E("Account does not have premium"), l(i.filter((function (t) {
                                    return e.collectibles.find((function (e) {
                                        return e.id == t.id
                                    }))
                                })))
                            }))
                        })).catch((function (e) {
                            if ("number" === typeof e.code) {
                                var t = e;
                                t.code === a.InvalidField && "roblosecurity" === t.field && v(null)
                            }
                        }))) : f && (v(void 0), R(void 0), E(void 0)))
                    }), [j.cookie, "undefined" === typeof i]);
                    var B = null === i || void 0 === i ? void 0 : i.map((function (e) {
                        return e.id
                    }));
                    return Object(w.jsxs)(w.Fragment, {
                        children: [Object(w.jsxs)("div", {
                            className: "d-flex mb-3",
                            children: [Object(w.jsx)("input", {
                                accept: "image/*",
                                ref: V,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: function () {
                                    var e;
                                    if (null === (e = V.current) || void 0 === e ? void 0 : e.files) {
                                        var t = new FileReader;
                                        t.readAsDataURL(V.current.files[0]), t.onload = function () {
                                            return b("avatar", t.result)
                                        }, t.onerror = function (e) {
                                            return console.log(e)
                                        }
                                    }
                                }
                            }), Object(w.jsx)("div", {
                                className: "rounded-circle mr-3",
                                onClick: function () {
                                    var e;
                                    return null === (e = V.current) || void 0 === e ? void 0 : e.click()
                                },
                                children: (null === o || void 0 === o ? void 0 : o.user) ? Object(w.jsx)("div", {
                                    className: "settings-avatar-container rounded-circle",
                                    children: Object(w.jsx)(_, {
                                        user: null === o || void 0 === o ? void 0 : o.user,
                                        srcOverwrite: j.avatar,
                                        size: "125px"
                                    })
                                }) : ""
                            }), Object(w.jsxs)("div", {
                                className: "w-100",
                                children: [Object(w.jsxs)(N, {
                                    name: "username",
                                    className: "w-100",
                                    children: [Object(w.jsx)("label", {
                                        className: "above",
                                        htmlFor: "username",
                                        children: "Username"
                                    }), Object(w.jsx)("input", {
                                        className: "form-control",
                                        name: "username",
                                        defaultValue: null !== (t = j.username) && void 0 !== t ? t : "",
                                        disabled: u,
                                        autoComplete: "off",
                                        placeholder: "Niggerslayer"
                                    })]
                                }), Object(w.jsxs)(N, {
                                    name: "password",
                                    className: "w-100",
                                    children: [Object(w.jsx)("label", {
                                        className: "above mt-2",
                                        htmlFor: "password",
                                        children: "Current password"
                                    }), Object(w.jsx)("input", {
                                        className: "form-control",
                                        type: "password",
                                        name: "password",
                                        style: {
                                            flexBasis: "100%"
                                        },
                                        disabled: u,
                                        autoComplete: "off",
                                        placeholder: "qwerty1234"
                                    })]
                                })]
                            })]
                        }), Object(w.jsxs)(N, {
                            name: "bio",
                            children: [Object(w.jsx)("label", {
                                className: "above mt-2",
                                htmlFor: "bio",
                                children: "Biography"
                            }), Object(w.jsx)("textarea", {
                                className: "form-control",
                                style: {
                                    resize: "none"
                                },
                                name: "bio",
                                defaultValue: null !== (n = j.bio) && void 0 !== n ? n : "",
                                rows: 5,
                                disabled: u,
                                placeholder: "I sell roblox items (and CP)"
                            })]
                        }), Object(w.jsxs)(N, {
                            name: "shoppy",
                            children: [Object(w.jsx)("label", {
                                className: "above mt-2",
                                htmlFor: "shoppy",
                                children: "Shoppy API token"
                            }), Object(w.jsx)("input", {
                                className: "form-control",
                                name: "shoppy",
                                defaultValue: null !== (s = j.shoppy) && void 0 !== s ? s : "",
                                disabled: u,
                                placeholder: "RteQqra0pVzS4LROYZrCbrLjhC3cfRUzgfUnLtDlYsjSJU6eyI"
                            })]
                        }), "undefined" !== typeof L ? Object(w.jsx)(D, {
                            username: L ? L.username : null,
                            avatar: (null === L || void 0 === L ? void 0 : L.avatar) ? "https://s3-storage.shoppy.gg/shoppy-gg/" + L.avatar : void 0
                        }) : "", Object(w.jsxs)(N, {
                            name: "cookie",
                            children: [Object(w.jsx)("label", {
                                className: "above mt-2",
                                htmlFor: "cookie",
                                children: "Roblox cookie"
                            }), Object(w.jsx)("input", {
                                className: "form-control",
                                name: "cookie",
                                defaultValue: null !== (r = j.cookie) && void 0 !== r ? r : "",
                                disabled: u,
                                placeholder: "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                            })]
                        }), "undefined" !== typeof f ? Object(w.jsx)(D, {
                            username: f ? f.username : null,
                            avatar: null === f || void 0 === f ? void 0 : f.avatar
                        }) : "", C && i && B ? Object(w.jsxs)(w.Fragment, {
                            children: [Object(w.jsx)(q, {
                                availableItems: C.collectibles ? C.collectibles.filter((function (e) {
                                    return !B.includes(e.id)
                                })) : [],
                                addItem: function (e) {
                                    return l([].concat(Object(A.a)(i), [e]))
                                }
                            }), i.map((function (e) {
                                return Object(w.jsx)(G, {
                                    item: e,
                                    removeItem: function () {
                                        return l(i.filter((function (t) {
                                            return t.id !== e.id
                                        })))
                                    }
                                }, e.id)
                            })), Object(w.jsx)("button", {
                                type: "button",
                                className: "mt-2 btn btn-success w-100",
                                disabled: !C.premium || 0 === C.collectibles.filter((function (e) {
                                    return !B.includes(e.id)
                                })).length,
                                "data-toggle": "modal",
                                "data-target": "#sell-modal",
                                children: "Sell item"
                            }), T ? Object(w.jsxs)("div", {
                                className: "text-danger text-center mt-1 readonly",
                                children: [Object(w.jsx)("i", {
                                    className: "fa fa-exclamation-triangle",
                                    "aria-hidden": "true"
                                }), " ", T]
                            }) : ""]
                        }) : ""]
                    })
                },
                H = function () {
                    var e, t = Object(c.useContext)(y),
                        n = Object(c.useState)(),
                        a = Object(g.a)(n, 2),
                        s = a[0],
                        r = a[1],
                        i = Object(c.useState)(),
                        l = Object(g.a)(i, 2),
                        o = l[0],
                        d = l[1];
                    return Object(c.useEffect)((function () {
                        h("GET", "/settings").then((function (e) {
                            r(e), f("me", !0).then((function (e) {
                                return d(e)
                            }))
                        })).catch((function (e) {}))
                    }), []), Object(w.jsxs)(w.Fragment, {
                        children: [Object(w.jsx)(R, {
                            absolute: !0
                        }), Object(w.jsx)("div", {
                            className: "d-flex justify-content-center align-items-center h-100",
                            children: (null === t || void 0 === t ? void 0 : t.user) && s ? Object(w.jsx)(m.b, {
                                initialValues: {
                                    bio: null === t || void 0 === t ? void 0 : t.user.bio,
                                    shoppy: s.shoppy_token,
                                    cookie: s.roblox_token,
                                    username: null === t || void 0 === t || null === (e = t.user) || void 0 === e ? void 0 : e.username,
                                    password: "",
                                    avatar: ""
                                },
                                validate: function () {
                                    var e = Object(b.a)(j.a.mark((function e(t) {
                                        var n, a, c, s, r;
                                        return j.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!o) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    e.prev = 1, n = {}, a = Object(V.a)(o);
                                                    try {
                                                        for (a.s(); !(c = a.n()).done;) s = c.value, n[s.id] = s.price
                                                    } catch (r) {
                                                        a.e(r)
                                                    } finally {
                                                        a.f()
                                                    }
                                                    return e.next = 7, h("PATCH", "/settings", {
                                                        bio: t.bio,
                                                        items: n,
                                                        shoppy_token: t.shoppy,
                                                        roblox_token: t.cookie,
                                                        username: t.username,
                                                        password: t.password,
                                                        avatar: t.avatar
                                                    });
                                                case 7:
                                                    e.next = 15;
                                                    break;
                                                case 9:
                                                    if (e.prev = 9, e.t0 = e.catch(1), "number" !== typeof e.t0.code) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    if (!(r = e.t0).field) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return e.abrupt("return", Object(u.a)({}, r.field, r.message));
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 9]
                                        ])
                                    })));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                validateOnChange: !1,
                                validateOnBlur: !1,
                                validateOnMount: !1,
                                onSubmit: function () {},
                                children: function (e) {
                                    var t = e.isValidating;
                                    return Object(w.jsxs)(m.a, {
                                        className: "w-25 mt-3",
                                        style: {
                                            minWidth: "300px"
                                        },
                                        children: [Object(w.jsx)(Y, {
                                            localItems: o,
                                            setLocalItems: d
                                        }), Object(w.jsx)("div", {
                                            className: "d-flex justify-content-end mt-4",
                                            children: Object(w.jsx)("button", {
                                                className: "btn btn-primary",
                                                disabled: t,
                                                type: "submit",
                                                children: "Save changes"
                                            })
                                        })]
                                    })
                                }
                            }) : ""
                        })]
                    })
                },
                X = function (e) {
                    var t = e.user,
                        n = e.select;
                    return Object(w.jsxs)("div", {
                        className: "rounded mb-2 p-2 d-flex align-items-center queried-user",
                        onClick: function () {
                            return n()
                        },
                        children: [Object(w.jsx)("img", {
                            alt: "Avatar",
                            src: t.avatar,
                            className: "rounded-circle mr-2"
                        }), Object(w.jsx)("span", {
                            children: t.username
                        })]
                    })
                },
                J = function (e) {
                    var t = e.item,
                        n = e.select;
                    return Object(w.jsxs)("div", {
                        className: "rounded d-flex justify-content-between align-items-center small-card py-1 pr-2 mb-2",
                        onClick: function () {
                            return n()
                        },
                        children: [Object(w.jsxs)("div", {
                            children: [Object(w.jsx)("img", {
                                src: "https://www.roblox.com/asset-thumbnail/image?assetId=".concat(t.asset_id, "&width=250&height=250&format=png"),
                                style: {
                                    width: "45px",
                                    height: "45px"
                                },
                                alt: "Thumbnail"
                            }), Object(w.jsx)("span", {
                                children: t.name
                            })]
                        }), Object(w.jsxs)("span", {
                            className: "rap",
                            children: [Object(w.jsx)(C, {}), " ", t.rap]
                        })]
                    })
                };
            ! function (e) {
                e[e.Recipient = 0] = "Recipient", e[e.Small = 1] = "Small", e[e.Pay = 2] = "Pay"
            }(M || (M = {}));
            var Z = function (e) {
                    var t = e.select,
                        n = Object(c.useState)(""),
                        a = Object(g.a)(n, 2),
                        s = a[0],
                        r = a[1],
                        i = Object(c.useState)(""),
                        l = Object(g.a)(i, 2),
                        o = l[0],
                        d = l[1],
                        j = Object(c.useState)(!1),
                        u = Object(g.a)(j, 2),
                        b = u[0],
                        m = u[1],
                        x = Object(c.useState)([]),
                        p = Object(g.a)(x, 2),
                        f = p[0],
                        v = p[1];
                    return Object(w.jsxs)("div", {
                        children: [Object(w.jsxs)("div", {
                            className: "d-flex mb-2",
                            children: [Object(w.jsx)("input", {
                                className: "form-control",
                                style: {
                                    flexGrow: 1
                                },
                                placeholder: "Username",
                                onChange: function (e) {
                                    return r(e.target.value)
                                }
                            }), Object(w.jsx)("button", {
                                className: "btn btn-primary ml-2",
                                onClick: function () {
                                    var e;
                                    s.length >= 3 ? (m(!0), (e = s, h("GET", "/roblox/users/query?username=" + e)).then((function (e) {
                                        v(e), m(!1)
                                    })).catch((function (e) {}))) : v([])
                                },
                                children: "Search"
                            })]
                        }), Object(w.jsx)("div", {
                            className: "rounded p-2",
                            style: {
                                backgroundColor: "rgb(20, 20, 20)",
                                height: "300px",
                                overflowY: "auto"
                            },
                            children: f.map((function (e) {
                                return Object(w.jsx)(X, {
                                    user: e,
                                    select: function () {
                                        m(!0), d(""), O(e.id).then((function (n) {
                                            m(!1), n.premium ? 0 === n.collectibles.length ? d("User has no limiteds") : t(e, n.collectibles) : d("User does not have premium")
                                        })).catch((function (e) {
                                            (m(!1), "number" === typeof e.code) && d(e.message)
                                        }))
                                    }
                                }, e.id)
                            }))
                        }), Object(w.jsx)("div", {
                            className: "mt-1",
                            children: Object(w.jsxs)("div", {
                                className: "d-flex justify-content-between",
                                children: [Object(w.jsx)("span", {
                                    className: "text-danger",
                                    children: o
                                }), Object(w.jsx)("i", {
                                    style: b ? {} : {
                                        visibility: "hidden"
                                    },
                                    className: "fa fa-spinner fa-spin",
                                    "aria-hidden": "true"
                                })]
                            })
                        })]
                    })
                },
                Q = function (e) {
                    var t = e.collectibles,
                        n = e.select;
                    return Object(w.jsx)("div", {
                        className: "rounded p-2",
                        style: {
                            backgroundColor: "rgb(20, 20, 20)",
                            height: "300px",
                            overflowY: "auto"
                        },
                        children: t.map((function (e) {
                            return Object(w.jsx)(J, {
                                item: e,
                                select: function () {
                                    return n(e)
                                }
                            }, e.id)
                        }))
                    })
                },
                K = function (e) {
                    var t = e.item,
                        n = e.recipient,
                        a = e.small;
                    return Object(w.jsxs)(w.Fragment, {
                        children: [Object(w.jsxs)("div", {
                            className: "rounded p-3",
                            style: {
                                backgroundColor: "rgb(20, 20, 20)",
                                fontSize: "17px"
                            },
                            children: [Object(w.jsxs)("div", {
                                className: "d-flex justify-content-between",
                                children: [Object(w.jsx)("span", {
                                    children: "Item "
                                }), Object(w.jsx)("span", {
                                    children: Object(w.jsx)("a", {
                                        target: "_blank",
                                        href: "https://www.roblox.com/catalog/" + t.id,
                                        children: t.name
                                    })
                                })]
                            }), Object(w.jsxs)("div", {
                                className: "d-flex justify-content-between mt-1",
                                children: [Object(w.jsx)("span", {
                                    children: "Recipient "
                                }), Object(w.jsx)("span", {
                                    children: Object(w.jsx)("a", {
                                        target: "_blank",
                                        href: "https://www.roblox.com/users/".concat(n.id, "/profile"),
                                        children: n.username
                                    })
                                })]
                            }), Object(w.jsxs)("div", {
                                className: "d-flex justify-content-between mt-1",
                                children: [Object(w.jsx)("span", {
                                    children: "Small "
                                }), Object(w.jsx)("span", {
                                    children: Object(w.jsx)("a", {
                                        target: "_blank",
                                        href: "https://www.roblox.com/catalog/" + a.asset_id,
                                        children: a.name
                                    })
                                })]
                            }), Object(w.jsx)("hr", {}), Object(w.jsxs)("div", {
                                className: "d-flex justify-content-between mt-1",
                                children: [Object(w.jsx)("span", {
                                    children: "Price "
                                }), Object(w.jsxs)("span", {
                                    children: ["$", t.price]
                                })]
                            })]
                        }), Object(w.jsx)("div", {
                            className: "d-flex justify-content-end mt-3",
                            children: Object(w.jsx)("button", {
                                className: "btn btn-primary px-5",
                                onClick: function () {
                                    var e, c, s;
                                    (e = t.id, c = n.id, s = a.id, h("GET", "/items/".concat(e, "/invoice?recipient=").concat(c, "&small=").concat(s))).then((function (e) {
                                        return window.open(e.url, "_blank")
                                    }))
                                },
                                children: "Pay"
                            })
                        })]
                    })
                };

            function ee(e) {
                return e === M.Recipient ? "Choose an account" : e === M.Small ? "Choose a small" : e === M.Pay ? "Your order" : void 0
            }
            var te = function () {
                    var e = Object(o.g)().id,
                        t = Object(c.useState)(M.Recipient),
                        n = Object(g.a)(t, 2),
                        a = n[0],
                        s = n[1],
                        r = Object(c.useState)(),
                        i = Object(g.a)(r, 2),
                        l = i[0],
                        d = i[1],
                        j = Object(c.useState)(),
                        u = Object(g.a)(j, 2),
                        b = u[0],
                        m = u[1],
                        x = Object(c.useState)([]),
                        p = Object(g.a)(x, 2),
                        f = p[0],
                        O = p[1],
                        v = Object(c.useState)(),
                        N = Object(g.a)(v, 2),
                        y = N[0],
                        k = N[1];
                    Object(c.useEffect)((function () {
                        (function (e) {
                            return h("GET", "/items/" + e)
                        })(parseInt(e)).then((function (e) {
                            return d(e)
                        })).catch((function (e) {}))
                    }), [e]);
                    var S = Object(o.f)(),
                        C = new URLSearchParams(window.location.search).get("redirect");
                    return Object(w.jsxs)(w.Fragment, {
                        children: [C ? Object(w.jsx)("button", {
                            className: "btn btn-outline-danger",
                            style: {
                                position: "absolute",
                                left: "10px",
                                top: "10px",
                                paddingLeft: "11px",
                                paddingRight: "11px"
                            },
                            onClick: function () {
                                return S.push(C)
                            },
                            children: Object(w.jsx)("i", {
                                className: "fa fa-arrow-left",
                                "aria-hidden": "true"
                            })
                        }) : "", Object(w.jsx)("div", {
                            className: "h-100 d-flex justify-content-center align-items-center",
                            children: l ? Object(w.jsxs)("div", {
                                className: "w-25",
                                children: [Object(w.jsxs)("div", {
                                    className: "text-center font-weight-light text-muted readonly",
                                    style: {
                                        letterSpacing: "1px"
                                    },
                                    children: ["Step ", a + 1]
                                }), Object(w.jsx)("h3", {
                                    className: "text-center font-weight-light",
                                    style: {
                                        marginTop: "-10px"
                                    },
                                    children: ee(a)
                                }), a === M.Recipient ? Object(w.jsx)(Z, {
                                    select: function (e, t) {
                                        m(e), O(t), s(M.Small)
                                    }
                                }) : a === M.Small ? Object(w.jsx)(Q, {
                                    collectibles: f,
                                    select: function (e) {
                                        k(e), s(M.Pay)
                                    }
                                }) : Object(w.jsx)(K, {
                                    item: l,
                                    recipient: b,
                                    small: y
                                })]
                            }) : ""
                        })]
                    })
                },
                ne = function (e) {
                    var t = e.item,
                        n = Object(o.f)();
                    return Object(w.jsxs)("div", {
                        className: "d-flex align-items-center justify-content-between rounded p-2 mb-2 roblox-item",
                        children: [Object(w.jsxs)("div", {
                            className: "d-flex readonly",
                            children: [Object(w.jsxs)("div", {
                                className: "ml-1 mr-2",
                                children: ["$", t.price]
                            }), t.trusted ? Object(w.jsx)("div", {
                                className: "rounded bg-success mr-2 px-2 d-flex align-items-center",
                                children: "Trusted"
                            }) : "", Object(w.jsxs)("div", {
                                style: {
                                    color: "rgb(210, 210, 210)"
                                },
                                children: [t.seller.username, "'s ", t.name]
                            })]
                        }), Object(w.jsx)("button", {
                            className: "btn btn-primary",
                            onClick: function () {
                                return n.push("/items/".concat(t.id, "/purchase?redirect=").concat(n.location.pathname + n.location.search))
                            },
                            children: "Buy"
                        })]
                    })
                },
                ae = function () {
                    var e = Object(o.f)(),
                        t = Object(o.g)().id,
                        n = Object(c.useState)(),
                        s = Object(g.a)(n, 2),
                        r = s[0],
                        i = s[1],
                        l = new URLSearchParams(window.location.search).get("redirect");
                    Object(c.useEffect)((function () {
                        (function (e) {
                            return h("GET", "/assets/" + e)
                        })(parseInt(t)).then((function (e) {
                            return i(e)
                        })).catch((function (t) {
                            "number" === typeof t.code && (t.code === a.ResourceNotFound && (l && "null" !== l ? e.push("/404?redirect=" + l) : e.push("/404")))
                        }))
                    }), [t]);
                    var d = 0;
                    if (r) {
                        var j, u = Object(V.a)(r.items);
                        try {
                            for (u.s(); !(j = u.n()).done;) {
                                var b = j.value.price.toString().length;
                                b > d && (d = b)
                            }
                        } catch (m) {
                            u.e(m)
                        } finally {
                            u.f()
                        }
                    }
                    return Object(w.jsxs)(w.Fragment, {
                        children: [l ? Object(w.jsx)("button", {
                            className: "btn btn-outline-danger",
                            style: {
                                position: "absolute",
                                left: "10px",
                                top: "10px",
                                paddingLeft: "11px",
                                paddingRight: "11px"
                            },
                            onClick: function () {
                                return e.push(l)
                            },
                            children: Object(w.jsx)("i", {
                                className: "fa fa-arrow-left",
                                "aria-hidden": "true"
                            })
                        }) : "", Object(w.jsx)("div", {
                            className: "d-flex justify-content-center p-4",
                            children: r ? Object(w.jsxs)("div", {
                                style: {
                                    width: "40%"
                                },
                                children: [Object(w.jsxs)("div", {
                                    className: "d-flex align-items-center rounded py-3 mb-3",
                                    style: {
                                        backgroundColor: "rgb(30, 30, 30)"
                                    },
                                    children: [Object(w.jsx)("img", {
                                        src: "https://www.roblox.com/asset-thumbnail/image?assetId=".concat(r.id, "&width=250&height=250&format=png"),
                                        style: {
                                            width: "94px"
                                        },
                                        className: "rounded-top",
                                        alt: "Thumbnail"
                                    }), Object(w.jsxs)("div", {
                                        children: [Object(w.jsx)("h4", {
                                            className: "mb-0 font-weight-bold",
                                            children: r.name
                                        }), Object(w.jsxs)("span", {
                                            className: "rap",
                                            children: [Object(w.jsx)(C, {}), " ", r.rap]
                                        }), Object(w.jsxs)("span", {
                                            children: [" ", "\xa0", "$", r.price_range.min === r.price_range.max ? r.price_range.min : r.price_range.min + "-" + r.price_range.max]
                                        }), Object(w.jsx)("div", {
                                            className: "mt-2",
                                            children: Object(w.jsx)("button", {
                                                className: "btn btn-dark px-3",
                                                onClick: function (e) {
                                                    e.stopPropagation(), window.open("https://www.roblox.com/catalog/" + r.id, "_blank")
                                                },
                                                children: "View on ROBLOX"
                                            })
                                        })]
                                    })]
                                }), Object(w.jsx)("div", {
                                    className: "text-center",
                                    children: "For sale"
                                }), Object(w.jsx)("div", {
                                    children: r.items.sort((function (e, t) {
                                        return t.price - e.price
                                    })).sort((function (e, t) {
                                        return t.trusted ? 1 : 0
                                    })).map((function (e) {
                                        return Object(w.jsx)(ne, {
                                            item: e
                                        }, e.id)
                                    }))
                                })]
                            }) : ""
                        })]
                    })
                },
                ce = function () {
                    var e = new URLSearchParams(window.location.search).get("redirect");
                    return Object(w.jsx)("div", {
                        className: "h-100 d-flex justify-content-center align-items-center",
                        children: Object(w.jsxs)("div", {
                            children: [Object(w.jsxs)("div", {
                                className: "text-danger",
                                style: {
                                    fontSize: "60px"
                                },
                                children: [Object(w.jsx)("i", {
                                    className: "fa fa-exclamation-triangle",
                                    "aria-hidden": "true"
                                }), " ", "\xa0", "Page not found"]
                            }), e ? Object(w.jsx)("div", {
                                className: "text-center",
                                children: Object(w.jsxs)(l.b, {
                                    to: e,
                                    style: {
                                        fontSize: "20px"
                                    },
                                    children: [Object(w.jsx)("i", {
                                        className: "fa fa-angle-right",
                                        "aria-hidden": "true"
                                    }), " Go back ", Object(w.jsx)("i", {
                                        className: "fa fa-angle-left",
                                        "aria-hidden": "true"
                                    })]
                                })
                            }) : ""]
                        })
                    })
                };
            i.a.render(Object(w.jsx)(s.a.StrictMode, {
                children: Object(w.jsx)(k, {
                    children: Object(w.jsx)(l.a, {
                        children: Object(w.jsxs)(o.c, {
                            children: [Object(w.jsx)(o.a, {
                                path: "/login",
                                exact: !0,
                                component: F
                            }), Object(w.jsx)(o.a, {
                                path: "/register",
                                exact: !0,
                                component: z
                            }), Object(w.jsx)(o.a, {
                                path: "/items/:id/purchase",
                                exact: !0,
                                component: te
                            }), Object(w.jsx)(o.a, {
                                path: "/assets/:id",
                                exact: !0,
                                component: ae
                            }), Object(w.jsx)(o.a, {
                                path: "/sellers/:id",
                                exact: !0,
                                component: U
                            }), Object(w.jsx)(o.a, {
                                path: "/settings",
                                exact: !0,
                                component: H
                            }), Object(w.jsx)(o.a, {
                                path: "/404",
                                exact: !0,
                                component: ce
                            }), Object(w.jsx)(o.a, {
                                path: "/",
                                exact: !0,
                                component: E
                            })]
                        })
                    })
                })
            }), document.getElementById("root"))
        }
    },
    [
        [51, 1, 2]
    ]
]);
//# sourceMappingURL=main.d3bdbee2.chunk.js.map