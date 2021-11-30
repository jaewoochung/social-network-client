"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
;// CONCATENATED MODULE: ./components/navbarLayout/logo.js





const LogoBox = (styled_default()).span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
  transform: rotate(20deg);
  }
`;
const Logo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoBox, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    color: (0,react_.useColorModeValue)('white', 'whiteAlpha.900'),
                    fontFamily: "M PLUS Rounded 1c\", sans-serif",
                    fontWeight: "bold",
                    ml: 3,
                    children: "Social Network"
                })
            })
        })
    }));
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./components/navbarLayout/menuItem.jsx


const MenuItem = ({ children , isLast , to ="/" , ...rest })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
        href: to,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            display: "block",
            ...rest,
            children: children
        })
    }));
};
/* harmony default export */ const menuItem = (MenuItem);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./components/navbarLayout/menuLinks.jsx




const cookies = new (external_universal_cookie_default())();
const MenuLinks = ({ isOpen  })=>{
    const logout = ()=>{
        cookies.remove('token');
        cookies.remove('username');
        cookies.remove('name');
        window.location.reload();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: {
            base: isOpen ? 'block' : "none",
            md: 'block'
        },
        flexBasis: {
            base: '100%',
            md: 'auto'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            spacing: 8,
            align: "center",
            justify: [
                'center',
                'space-between',
                'flex-end',
                'flex-end'
            ],
            direction: [
                'column',
                'row',
                'row',
                'row'
            ],
            pt: [
                4,
                4,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(menuItem, {
                    to: "/",
                    children: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(menuItem, {
                    to: "/notifications",
                    children: "Notifications"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(menuItem, {
                    to: "/people",
                    children: "Users"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    onClick: logout,
                    size: "sm",
                    color: "#1E2530",
                    children: "Log out"
                })
            ]
        })
    }));
};
/* harmony default export */ const menuLinks = (MenuLinks);

;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./components/navbarLayout/menuToggle.jsx




const MenuToggle = ({ toggle , isOpen  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: {
            base: 'block',
            md: 'none'
        },
        onClick: toggle,
        children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.CloseIcon, {
        }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {
        })
    }));
};
/* harmony default export */ const menuToggle = (MenuToggle);

;// CONCATENATED MODULE: ./components/navbarLayout/navbarContainer.jsx


const NavbarContainer = ({ children , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        as: "nav",
        align: "center",
        justify: "space-between",
        wrap: "wrap",
        w: "100%",
        mb: 8,
        p: 5,
        bgColor: "#1E2530",
        color: [
            "white",
            "white",
            "primary.700",
            "primary.700"
        ],
        ...props,
        children: children
    }));
};
/* harmony default export */ const navbarContainer = (NavbarContainer);

;// CONCATENATED MODULE: ./components/navbarLayout/Navbar.js








const Navbar_cookies = new (external_universal_cookie_default())();
const authToken = Navbar_cookies.get('token');
const Navbar = (props)=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const toggle = ()=>setIsOpen(!isOpen)
    ;
    if (authToken) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(navbarContainer, {
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(logo, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontWeight: "bold",
                    children: Navbar_cookies.get('name')
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(menuToggle, {
                    toggle: toggle,
                    isOpen: isOpen
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(menuLinks, {
                    isOpen: isOpen
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(navbarContainer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuToggle, {
                toggle: toggle,
                isOpen: isOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuLinks, {
                isOpen: isOpen
            })
        ]
    }));
};
/* harmony default export */ const navbarLayout_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/layout/main.js




const Main = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 1,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Social Network"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbarLayout_Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "100%",
                marginX: 0,
                paddingX: 0,
                paddingY: 10,
                children: children
            })
        ]
    }));
};
/* harmony default export */ const main = (Main);

;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./lib/theme.js


const styles = {
    global: (props)=>({
            body: {
                bg: (0,theme_tools_namespaceObject.mode)('gray.300', '#eaeaeb')(props)
            }
        })
};
const fonts = {
    body: "merriweather"
};
const colors = {
    grassTeal: '#88ccca'
};
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
};
const theme = (0,react_.extendTheme)({
    config,
    styles,
    fonts,
    colors
});
/* harmony default export */ const lib_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.js





const App = ({ Component , pageProps , router  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: lib_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(main, {
            router: router,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(1259)));
module.exports = __webpack_exports__;

})();