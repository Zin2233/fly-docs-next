"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["63976"],{82410:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"DebugDoc/BasicTutorial/klipperscreen","title":"Fonctionnalit\xe9s \xe9tendues de KlipperScreen","description":"M\xe9thode pour activer le curseur de la souris dans KlipperScreen","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/klipperscreen.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/klipperscreen","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/klipperscreen","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/klipperscreen.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_label":"Fonctionnalit\xe9s \xe9tendues de KlipperScreen"},"sidebar":"debugdocSidebar","previous":{"title":"Ajout d\'une cam\xe9ra USB","permalink":"/fly-docs-next/fr/docs/DebugDoc/BasicTutorial/camera"},"next":{"title":"Klipper \u5E38\u89C1\u95EE\u9898","permalink":"/fly-docs-next/fr/docs/category/klipper-\u5E38\u89C1\u95EE\u9898"}}'),i=r("85893"),s=r("50065");let o={sidebar_position:7,sidebar_label:"Fonctionnalit\xe9s \xe9tendues de KlipperScreen"},l="Fonctionnalit\xe9s \xe9tendues de KlipperScreen",a={},c=[{value:"M\xe9thode pour activer le curseur de la souris dans KlipperScreen",id:"m\xe9thode-pour-activer-le-curseur-de-la-souris-dans-klipperscreen",level:2},{value:"Connexion \xe0 distance \xe0 d&#39;autres ordinateurs de contr\xf4le",id:"connexion-\xe0-distance-\xe0-dautres-ordinateurs-de-contr\xf4le",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fonctionnalit\xe9s-\xe9tendues-de-klipperscreen",children:"Fonctionnalit\xe9s \xe9tendues de KlipperScreen"})}),"\n",(0,i.jsx)(n.h2,{id:"m\xe9thode-pour-activer-le-curseur-de-la-souris-dans-klipperscreen",children:"M\xe9thode pour activer le curseur de la souris dans KlipperScreen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ouvrez ",(0,i.jsx)(n.code,{children:"KlipperScreen.conf"})," dans les param\xe8tres de l'imprimante, ce fichier est g\xe9n\xe9r\xe9 automatiquement apr\xe8s l'installation de KlipperScreen. Si vous ne l'avez pas, cr\xe9ez-le vous-m\xeame.","\n",(0,i.jsx)(t,{image:r(89088).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Ajoutez le code ci-dessous au d\xe9but de la configuration"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[main]\nshow_cursor: True\n"})}),"\n",(0,i.jsx)(t,{image:r(40717).Z,size:"80%",align:"center"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enregistrez et red\xe9marrez pour que cela prenne effet"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connexion-\xe0-distance-\xe0-dautres-ordinateurs-de-contr\xf4le",children:"Connexion \xe0 distance \xe0 d'autres ordinateurs de contr\xf4le"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ouvrez ",(0,i.jsx)(n.code,{children:"KlipperScreen.conf"})," dans les param\xe8tres de l'imprimante, ce fichier est g\xe9n\xe9r\xe9 automatiquement apr\xe8s l'installation de KlipperScreen. Si vous ne l'avez pas, cr\xe9ez-le vous-m\xeame.","\n",(0,i.jsx)(t,{image:r(89088).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Ajoutez le code ci-dessous au d\xe9but de la configuration"}),"\n",(0,i.jsxs)(n.li,{children:["Vous pouvez modifier le nom de l'imprimante ",(0,i.jsx)(n.code,{children:"VORON-300"})," et l'adresse IP du serveur ",(0,i.jsx)(n.code,{children:"192.168.6.217"})," \xe0 connecter."]}),"\n",(0,i.jsxs)(n.li,{children:["Notez que la deuxi\xe8me ",(0,i.jsx)(n.code,{children:"[printer KlipperScreen]"})," est pour se connecter \xe0 une machine distante \xe9tendue, vous pouvez utiliser cette configuration pour d\xe9boguer ou \xe9teindre."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assurez-vous d'\xeatre dans un m\xeame r\xe9seau local"}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"# D\xe9finissez l'imprimante et le nom. Le nom est tout ce qui suit le premier mot imprimante\n[printer VORON-300]\n# D\xe9finissez l'h\xf4te/moonraker port si diff\xe9rent de 127.0.0.1 et 7125\nmoonraker_host: 192.168.6.217\n# Les ports 443 et 7130 utiliseront https/wss\nmoonraker_port: 7125\n# Cl\xe9 API Moonraker si ce n'est pas connect\xe9 depuis une adresse IP client fiable\nmoonraker_api_key: False\n\n# D\xe9finissez l'imprimante et le nom. Le nom est tout ce qui suit le premier mot imprimante\n[printer KlipperScreen]\n# D\xe9finissez l'h\xf4te/moonraker port si diff\xe9rent de 127.0.0.1 et 7125\nmoonraker_host: 127.0.0.1\n# Les ports 443 et 7130 utiliseront https/wss\nmoonraker_port: 7125\n# Cl\xe9 API Moonraker si ce n'est pas connect\xe9 depuis une adresse IP client fiable\nmoonraker_api_key: False\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},40717:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/webp;base64,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"},89088:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/conf-a9b38d77c7166500fe764e0e88251eb4.webp"},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(67294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);