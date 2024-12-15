"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83666"],{30405:function(e,s,o){o.r(s),o.d(s,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>t});var l=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg","title":"klipper\u53C2\u8003\u914D\u7F6E","description":"* \u53C2\u8003\u914D\u7F6E","source":"@site/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1722235238000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u0427\u0442\u0435\u043D\u0438\u0435 ID \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id"},"next":{"title":"LIS2DW","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/adxl345"}}'),r=o("52676"),n=o("79938");let t={sidebar_position:4,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},i="klipper\u53C2\u8003\u914D\u7F6E",d={},c=[];function a(e){let s={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u53C2\u8003\u914D\u7F6E"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cfg",children:"[mcu LIS]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\n### \u67E5\u8BE2usb\u56FA\u4EF6id\u662F\uFF1Als -l /dev/serial/by-id/\n### \u628A/dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\u66FF\u6362\u67E5\u8BE2\u5230\u7684id\n\n[lis2dw]\ncs_pin: LIS:gpio9\nspi_software_sclk_pin: LIS:gpio10\nspi_software_mosi_pin: LIS:gpio11\nspi_software_miso_pin: LIS:gpio12\n\n[resonance_tester]\naccel_chip: lis2dw\nprobe_points: 150, 150, 20        # \u5171\u632F\u6D4B\u8BD5\u7684\u5750\u6807\u70B9\nmin_freq: 5                       # \u5171\u632F\u6D4B\u8BD5\u7684\u6700\u5C0F\u9891\u7387\nmax_freq: 133                     # \u5171\u632F\u6D4B\u8BD5\u7684\u6700\u5927\u9891\u7387\naccel_per_hz: 75                  # \u6BCF\u8D6B\u5179\u52A0\u901F\u5EA6(mm/sec)\uFF0C\u52A0\u901F\u5EA6=\u6BCF\u8D6B\u5179\u52A0\u901F\u5EA6*\u9891\u7387\uFF0C\u5982\u679C\u5171\u632F\u8FC7\u4E8E\u5F3A\u70C8\uFF0C\u53EF\u4EE5\u51CF\u5C11\u8BE5\u503C\u3002\u9ED8\u8BA475\nhz_per_sec: 1                     # \u6D4B\u8BD5\u7684\u901F\u5EA6\uFF0C\u8F83\u5C0F\u7684\u503C\u4F1A\u52A0\u957F\u6D4B\u8BD5\u65F6\u95F4\uFF0C\u8F83\u5927\u7684\u503C\u4F1A\u964D\u4F4E\u6D4B\u8BD5\u7CBE\u5EA6\uFF0C(Hz/sec == sec^-2)\uFF0C\u9ED8\u8BA41\n"})})]})}function u(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79938:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return t}});var l=o(75271);let r={},n=l.createContext(r);function t(e){let s=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(n.Provider,{value:s},e.children)}}}]);