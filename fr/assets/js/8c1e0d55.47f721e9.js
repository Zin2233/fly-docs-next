"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["3753"],{48619:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>s,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-dp5/warning","title":"Points \xe0 surveiller pour la carte m\xe8re","description":"Voyant d\'alimentation","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-dp5/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-dp5","slug":"/ProductDoc/MainBoard/fly-d/fly-dp5/warning","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-dp5/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-dp5/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Points \xe0 surveiller pour la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"T\xe9l\xe9chargement du firmware Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-dp5/marlin"},"next":{"title":"FLY-Gemini \u7CFB\u5217\u4E3B\u677F","permalink":"/fly-docs-next/fr/docs/category/fly-gemini-\u7CFB\u5217\u4E3B\u677F"}}'),t=r("52676"),l=r("79938");let o={sidebar_position:10,sidebar_label:"Points \xe0 surveiller pour la carte m\xe8re"},a="Points \xe0 surveiller pour la carte m\xe8re",s={},d=[{value:"Voyant d&#39;alimentation",id:"voyant-dalimentation",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:3},{value:"Moteurs",id:"moteurs",level:2},{value:"Ports de fins de course",id:"ports-de-fins-de-course",level:2},{value:"Firmware",id:"firmware",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,l.a)(),...e.components},{Button:i,ImageView:o}=n;return!i&&p("Button",!0),!o&&p("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"points-\xe0-surveiller-pour-la-carte-m\xe8re",children:"Points \xe0 surveiller pour la carte m\xe8re"})}),"\n",(0,t.jsx)(n.h2,{id:"voyant-dalimentation",children:"Voyant d'alimentation"}),"\n",(0,t.jsx)(o,{image:r(48072).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lors de l'alimentation uniquement via le port TYPE-C sans connecter d'autres alimentations de la carte m\xe8re, au moins deux voyants ",(0,t.jsx)(n.code,{children:"3.3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})," doivent \xeatre allum\xe9s"]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s avoir connect\xe9 l'alimentation de la carte m\xe8re, les voyants d'alimentation de la carte m\xe8re doivent \xeatre allum\xe9s ",(0,t.jsx)(n.code,{children:"3.3V"}),", ",(0,t.jsx)(n.code,{children:"5V"}),", ",(0,t.jsx)(n.code,{children:"VCC"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d\xe9pannage",children:"D\xe9pannage"}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En l'absence de tout dispositif externe (moteurs, fins de course, \xe9cran 12864, etc.)"}),"\n",(0,t.jsxs)(n.li,{children:["L'alimentation uniquement via le port TYPE-C fera au moins s'allumer les deux LED ",(0,t.jsx)(n.code,{children:"3.3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si aucun voyant ne s'allume, cela indique un court-circuit, veuillez contacter le service client apr\xe8s-vente"}),"\n",(0,t.jsxs)(n.li,{children:["Si l'un des voyants ",(0,t.jsx)(n.code,{children:"3.3V"})," ou ",(0,t.jsx)(n.code,{children:"5V"})," clignote, cela indique un court-circuit, veuillez contacter le service client apr\xe8s-vente"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"moteurs",children:"Moteurs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La carte m\xe8re supporte les moteurs externes     ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Guide de c\xe2blage et de configuration"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ports-de-fins-de-course",children:"Ports de fins de course"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez faire attention \xe0 l'ordre de connexion, pour un fin de course \xe0 trois fils, il faut pr\xeater attention \xe0 5V, GND, S, car une mauvaise connexion peut endommager la carte m\xe8re"}),"\n",(0,t.jsx)(n.li,{children:"Pour un fin de course \xe0 deux fils, connectez directement S et GND"}),"\n",(0,t.jsx)(n.li,{children:"PL08 et autres interrupteurs de proximit\xe9 n\xe9cessitent un diode externe sur la borne de signal pour abaisser la tension en dessous de 3.3V"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En raison de probl\xe8mes avec les boutons, le tutoriel a \xe9t\xe9 mis \xe0 jour pour utiliser le firmware Katapult pour la gravure du firmware"}),"\n",(0,t.jsx)(n.li,{children:"Il est recommand\xe9 d'utiliser un ordinateur pour flasher le firmware Katapult puis d'utiliser ce firmware pour flasher klipper"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./flash/bl",children:"Gravure BL"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},48072:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/power-db8bc21f0554541a283f05bbe759b7f8.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var i=r(75271);let t={},l=i.createContext(t);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);