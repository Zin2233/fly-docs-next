"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83501"],{25548:function(e,o,l){l.r(o),l.d(o,{metadata:()=>n,contentTitle:()=>s,default:()=>u,assets:()=>a,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","title":"Klipper\u306E\u53C2\u8003\u69CB\u6210","description":"[mcu adxl]","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"Psych0h3ad","lastUpdatedAt":1730438832000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"\u53C2\u8003\u69CB\u6210"},"sidebar":"tutorialSidebar","previous":{"title":"\u30DE\u30B6\u30FC\u30DC\u30FC\u30C9ID\u306E\u8AAD\u307F\u53D6\u308A\u3068\u78BA\u8A8D","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id"},"next":{"title":"ADXL345","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/adxl345"}}'),r=l("52676"),t=l("79938");let d={sidebar_position:"4",sidebar_label:"\u53C2\u8003\u69CB\u6210"},s="Klipper\u306E\u53C2\u8003\u69CB\u6210",a={},i=[];function c(e){let o={code:"code",h1:"h1",header:"header",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"klipper\u306E\u53C2\u8003\u69CB\u6210",children:"Klipper\u306E\u53C2\u8003\u69CB\u6210"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"* \u53C2\u8003\u69CB\u6210\n```cfg\n[mcu adxl]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXXXX\n### USB\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2ID\u3092\u7167\u4F1A\u3057\u307E\u3059: ls -l /dev/serial/by-id/\n### /dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXXXX\u3092\u30AF\u30A8\u30EA\u3055\u308C\u305F ID\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002\n\n##ADXL345\u52A0\u901F\u5EA6\u8A08\n[adxl345]\ncs_pin: adxl:gpio9\nspi_software_sclk_pin: adxl:gpio10\nspi_software_mosi_pin: adxl:gpio11\nspi_software_miso_pin: adxl:gpio12\n\n[resonance_tester]\naccel_chip: adxl345\nprobe_points:\n100, 100, 20 #\u3053\u306E\u5EA7\u6A19\u306F\u5171\u632F\u6E2C\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u4F4D\u7F6E\u3067\u3001\u901A\u5E38\u306F\u30D9\u30C3\u30C9\u306E\u4E2D\u592E\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u53C2\u8003\u5024\u306FX=100mm, Y=100mm, Z=20mm\u306E\u4F4D\u7F6E\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{})})]})}function u(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79938:function(e,o,l){l.d(o,{Z:function(){return s},a:function(){return d}});var n=l(75271);let r={},t=n.createContext(r);function d(e){let o=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);