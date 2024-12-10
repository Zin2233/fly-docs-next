"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["10269"],{79091:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>s,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-7040/wiring","title":"C\xe2blage de la 7040","description":"Carte de contr\xf4le","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-7040/wiring.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-7040","slug":"/ProductDoc/ExtensionBoard/fly-7040/wiring","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-7040/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-7040/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"C\xe2blage"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-7040/"},"next":{"title":"FLY-FilGuard-\u65AD\u5835\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/fr/docs/category/fly-filguard-\u65AD\u5835\u6599\u4F20\u611F\u5668"}}'),t=r("52676"),o=r("79938");let a={sidebar_position:2,sidebar_label:"C\xe2blage"},l="C\xe2blage de la 7040",d={},s=[{value:"Carte de contr\xf4le",id:"carte-de-contr\xf4le",level:2},{value:"C\xe2blage",id:"c\xe2blage",level:2},{value:"Configuration de r\xe9f\xe9rence",id:"configuration-de-r\xe9f\xe9rence",level:2},{value:"Solution pour r\xe9soudre le probl\xe8me de rotation automatique au d\xe9marrage",id:"solution-pour-r\xe9soudre-le-probl\xe8me-de-rotation-automatique-au-d\xe9marrage",level:2},{value:"Accessoire optionnel : Filtre d&#39;admission d&#39;air",id:"accessoire-optionnel--filtre-dadmission-dair",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"c\xe2blage-de-la-7040",children:"C\xe2blage de la 7040"})}),"\n",(0,t.jsx)(n.h2,{id:"carte-de-contr\xf4le",children:"Carte de contr\xf4le"}),"\n",(0,t.jsx)(i,{image:r(37359).Z,size:"20%",align:"Center"}),"\n",(0,t.jsx)(n.h2,{id:"c\xe2blage",children:"C\xe2blage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connectez au port PWM de la carte m\xe8re, les autres cartes m\xe8res doivent consulter leur documentation correspondante"}),"\n"]}),"\n",(0,t.jsx)(i,{image:r(96827).Z,size:"80%",align:"Center"}),"\n",(0,t.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence",children:"Configuration de r\xe9f\xe9rence"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[fan]\n##    Ventilateur de refroidissement d'impression\npin: PF8\nmax_power: 0.9\ncycle_time: 0.002\nhardware_pwm: false\nshutdown_speed: 0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"solution-pour-r\xe9soudre-le-probl\xe8me-de-rotation-automatique-au-d\xe9marrage",children:"Solution pour r\xe9soudre le probl\xe8me de rotation automatique au d\xe9marrage"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voici une explication simple"}),"\n",(0,t.jsx)(n.li,{children:"Lors de la compilation du firmware, ajoutez la broche de signal PWM et inversez son \xe9tat"}),"\n",(0,t.jsxs)(n.li,{children:["Test\xe9 avec SUPER8PRO, broche PF8 utilis\xe9e, lors de la compilation du firmware, s\xe9lectionnez ",(0,t.jsx)(n.code,{children:"GPIO pins to set at micro-controller startup"})," et ajoutez ",(0,t.jsx)(n.code,{children:"!PF8"})]}),"\n",(0,t.jsxs)(n.li,{children:["Veuillez noter que ",(0,t.jsx)(n.code,{children:"!"})," est un point d'exclamation en anglais"]}),"\n",(0,t.jsx)(n.li,{children:"Le m\xeame principe s'applique aux autres cartes m\xe8res"}),"\n"]})}),"\n",(0,t.jsx)(i,{image:r(24926).Z,size:"80%",align:"Center"}),"\n",(0,t.jsx)(n.h2,{id:"accessoire-optionnel--filtre-dadmission-dair",children:"Accessoire optionnel : Filtre d'admission d'air"}),"\n",(0,t.jsx)(i,{image:r(92501).Z,size:"80%",align:"Center"})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},37359:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/controller_board-73b62dbaef3d30b98079f3478216c2fe.webp"},92501:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/fan-098697201efcd6dba03fd76898c9ddef.webp"},24926:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/klipper-68e17a27fa33b7e423774e756e6e48d9.webp"},96827:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/wiring-597d59b07bf0690ceaa8d90b961514d1.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var i=r(75271);let t={},o=i.createContext(t);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);