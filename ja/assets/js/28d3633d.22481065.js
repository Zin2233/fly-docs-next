"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["99205"],{23913:function(e,n,i){i.r(n),i.d(n,{metadata:()=>_,contentTitle:()=>o,default:()=>f,assets:()=>c,toc:()=>P,frontMatter:()=>r});var _=JSON.parse('{"id":"ProductDoc/Screen/12864/index","title":"12864","description":"Klipper\u306E\u8A2D\u5B9A","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/Screen/12864/index.mdx","sourceDirName":"ProductDoc/Screen/12864","slug":"/ProductDoc/Screen/12864/","permalink":"/fly-docs-next/ja/docs/ProductDoc/Screen/12864/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/12864/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\u7D39\u4ECB"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-12864","permalink":"/fly-docs-next/ja/docs/category/fly-12864"},"next":{"title":"FLY-\u9A71\u52A8\u7CFB\u5217","permalink":"/fly-docs-next/ja/docs/category/fly-\u9A71\u52A8\u7CFB\u5217"}}'),t=i("52676"),d=i("79938");let r={sidebar_position:1,sidebar_label:"\u7D39\u4ECB"},o="12864",c={},P=[{value:"Klipper\u306E\u8A2D\u5B9A",id:"klipper\u306E\u8A2D\u5B9A",level:2},{value:"Marlin\u306E\u8A2D\u5B9A\u65B9\u6CD5",id:"marlin\u306E\u8A2D\u5B9A\u65B9\u6CD5",level:2}];function l(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,d.a)(),...e.components},{ImageView:_}=n;return!_&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"12864",children:"12864"})}),"\n",(0,t.jsx)(_,{image:i(46959).Z,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.h2,{id:"klipper\u306E\u8A2D\u5B9A",children:"Klipper\u306E\u8A2D\u5B9A"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"EXP\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u6B63\u3057\u304F\u63A5\u7D9A\u3057\u305F\u5F8C\u3001\u30B5\u30F3\u30D7\u30EB\u8A2D\u5B9A\u306Emini12864\u90E8\u5206\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"marlin\u306E\u8A2D\u5B9A\u65B9\u6CD5",children:"Marlin\u306E\u8A2D\u5B9A\u65B9\u6CD5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8A2D\u5B9A\u306B\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"#if HAS_WIRED_LCD\n\n#define BEEPER_PIN                 EXP1_10_PIN\n#define BTN_ENC                    EXP1_09_PIN\n\n#if ENABLED(CR10_STOCKDISPLAY)\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n#elif ENABLED(MKS_MINI_12864)\n\n    #define DOGLCD_A0                EXP1_04_PIN\n    #define DOGLCD_CS                EXP1_05_PIN\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n#else\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_06_PIN\n    #define BTN_EN2                  EXP2_08_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n    #if ENABLED(FYSETC_MINI_12864)\n    #define DOGLCD_CS              EXP1_08_PIN\n    #define DOGLCD_A0              EXP1_07_PIN\n    //#define LCD_BACKLIGHT_PIN           -1\n    #define LCD_RESET_PIN          EXP1_06_PIN  // LCD\u304C\u6B63\u5E38\u306B\u52D5\u4F5C\u3059\u308B\u305F\u3081\u306B\u306F\u9AD8\u30EC\u30D9\u30EB\u307E\u305F\u306F\u30AA\u30FC\u30D7\u30F3\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n    #if EITHER(FYSETC_MINI_12864_1_2, FYSETC_MINI_12864_2_0)\n        #ifndef RGB_LED_R_PIN\n        #define RGB_LED_R_PIN      EXP1_05_PIN\n        #endif\n        #ifndef RGB_LED_G_PIN\n        #define RGB_LED_G_PIN      EXP1_04_PIN\n        #endif\n        #ifndef RGB_LED_B_PIN\n        #define RGB_LED_B_PIN      EXP1_03_PIN\n        #endif\n    #elif ENABLED(FYSETC_MINI_12864_2_1)\n        #define NEOPIXEL_PIN         EXP1_05_PIN\n    #endif\n    #endif // !FYSETC_MINI_12864\n\n    #if IS_ULTIPANEL\n    #define LCD_PINS_D5            EXP1_05_PIN\n    #define LCD_PINS_D6            EXP1_04_PIN\n    #define LCD_PINS_D7            EXP1_03_PIN\n\n    #if ENABLED(REPRAP_DISCOUNT_FULL_GRAPHIC_SMART_CONTROLLER)\n        #define BTN_ENC_EN           LCD_PINS_D7  // \u30A8\u30F3\u30B3\u30FC\u30C0\u306E\u5B58\u5728\u3092\u691C\u51FA\u3057\u307E\u3059\n    #endif\n\n    #endif\n\n#endif\n\n#endif // HAS_WIRED_LCD\n\n"})}),"\n"]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},46959:function(e,n,i){i.d(n,{Z:function(){return _}});let _=i.p+"assets/images/12864-ca22deb0592806fec347402c3e7082bc.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var _=i(75271);let t={},d=_.createContext(t);function r(e){let n=_.useContext(d);return _.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),_.createElement(d.Provider,{value:n},e.children)}}}]);