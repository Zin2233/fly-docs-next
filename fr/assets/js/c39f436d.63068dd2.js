"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14745"],{75034:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"DebugDoc/addon/led","title":"\xc9tendre le contr\xf4le de l\'LED via des plugins","description":"Document original","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/addon/led.mdx","sourceDirName":"DebugDoc/addon","slug":"/DebugDoc/addon/led","permalink":"/fly-docs-next/fr/docs/DebugDoc/addon/led","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/addon/led.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u5404\u7C7B\u63D2\u4EF6","permalink":"/fly-docs-next/fr/docs/category/\u5404\u7C7B\u63D2\u4EF6"},"next":{"title":"\u5982\u4F55\u63D0\u95EE","permalink":"/fly-docs-next/fr/docs/category/\u5982\u4F55\u63D0\u95EE"}}'),i=t("85893"),l=t("50065");let s={sidebar_position:1},o="\xc9tendre le contr\xf4le de l'LED via des plugins",d={},a=[{value:"Installation",id:"installation",level:2},{value:"Configuration de r\xe9f\xe9rence",id:"configuration-de-r\xe9f\xe9rence",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\xe9tendre-le-contr\xf4le-de-lled-via-des-plugins",children:"\xc9tendre le contr\xf4le de l'LED via des plugins"})}),"\n",(0,i.jsx)(n.p,{children:"Document original"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"https://github.com/julianschill/klipper-led_effect\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Veuillez utiliser des outils SSH tels que ",(0,i.jsx)(n.strong,{children:"MobaXterm_Personal"})," et vous connecter via ",(0,i.jsx)(n.strong,{children:"WIFI"})," \xe0 votre ordinateur principal. Assurez-vous \xe9galement des points suivants :"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Assurez-vous que le firmware Klipper est install\xe9 sur votre ordinateur principal"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Assurez-vous que l'utilisateur connect\xe9 est celui qui a install\xe9 Klipper"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Assurez-vous que votre m\xe9thode de saisie est en anglais"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Assurez-vous que votre ordinateur principal peut d\xe9tecter correctement l'appareil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Assurez-vous que toutes les pr\xe9cautions ci-dessus sont respect\xe9es, sinon vous ne pourrez pas passer \xe0 l'\xe9tape suivante"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ce module peut \xeatre install\xe9 dans une installation Klipper existante \xe0 l'aide du script d'installation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"cd ~\ngit clone https://github.com/julianschill/klipper-led_effect.git\ncd klipper-led_effect\n./install-led_effect.sh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[neopixel TP_led]\npin: PB7\nchain_count: 25\n# Nombre de LED\n# Nombre de LED\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n[led_effect sb_nozzle_cooling]\nautostart:              false\nframe_rate:             24\nleds:\n    neopixel:TP_led (9,10)\nlayers:\n        breathing  3 1 top (0.0, 0.0, 1.0, 0.1)\n\n[led_effect rainbow]\nleds:\n    neopixel:TP_led\nautostart:                          true\nframe_rate:                         24\nlayers:\n    gradient  0.3  1 add (0.3, 0.0, 0.0),(0.0, 0.3, 0.0),(0.0, 0.0, 0.3)\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(67294);let i={},l=r.createContext(i);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);