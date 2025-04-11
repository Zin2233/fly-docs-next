"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["25323"],{92782:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/uart","title":"M\xe9thode de configuration","description":"Veuillez noter que vous ne pourrez pas utiliser l\'interface d\'acc\xe9l\xe9rom\xe8tre mini pad pour connecter un acc\xe9l\xe9rom\xe8tre externe apr\xe8s avoir utilis\xe9 cette m\xe9thode.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/uart.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/uart","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/uart","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"Connexion de la carte m\xe8re via UART"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation de l\'UTOC embarqu\xe9","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/utoc"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/schematic"}}'),i=t("85893"),o=t("50065");let a={sidebar_position:9,sidebar_label:"Connexion de la carte m\xe8re via UART"},c="M\xe9thode de configuration",d={},l=[{value:"M\xe9thode de c\xe2blage",id:"m\xe9thode-de-c\xe2blage",level:2},{value:"Configuration de r\xe9f\xe9rence Klipper",id:"configuration-de-r\xe9f\xe9rence-klipper",level:2}];function s(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"m\xe9thode-de-configuration",children:"M\xe9thode de configuration"})}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(n.p,{children:"Veuillez noter que vous ne pourrez pas utiliser l'interface d'acc\xe9l\xe9rom\xe8tre mini pad pour connecter un acc\xe9l\xe9rom\xe8tre externe apr\xe8s avoir utilis\xe9 cette m\xe9thode."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ouvrez le disque BOOT et trouvez ",(0,i.jsx)(n.code,{children:"armbianEnv.txt"})," et ouvrez-le"]}),"\n",(0,i.jsxs)(n.li,{children:["Modifiez ",(0,i.jsx)(n.strong,{children:"uart2"})," en ",(0,i.jsx)(n.strong,{children:"uart3"})," dans ",(0,i.jsx)(n.code,{children:"overlays=usbhost2 usbhost3 uart2"})," puis enregistrez"]}),"\n"]}),"\n",(0,i.jsx)(r,{image:t(8224).Z,size:"80%",align:"center"}),"\n",(0,i.jsx)(n.h2,{id:"m\xe9thode-de-c\xe2blage",children:"M\xe9thode de c\xe2blage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Veuillez noter que le TX du mini-pad doit \xeatre connect\xe9 au RX de la carte m\xe8re avec le firmware s\xe9rie flash\xe9e"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter que le RX du mini-pad doit \xeatre connect\xe9 au TX de la carte m\xe8re avec le firmware s\xe9rie flash\xe9e"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter qu'une connexion de terre commune est n\xe9cessaire"}),"\n",(0,i.jsx)(n.li,{children:"Sinon, vous ne pourrez pas connecter la carte m\xe8re avec le firmware s\xe9rie flash\xe9e"}),"\n"]}),"\n",(0,i.jsx)(r,{image:t(51294).Z,size:"80%",align:"center"}),"\n",(0,i.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-klipper",children:"Configuration de r\xe9f\xe9rence Klipper"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uFF1A250000\n#   Le taux de transmission utilis\xe9. La valeur par d\xe9faut est 250000\nrestart_method:command\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},8224:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/uart-9f86dbf2b17ce74810241302c49d6f21.webp"},51294:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/uart1-84f4dfe5ec67b4a3b173b060fdf6072f.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var r=t(67294);let i={},o=r.createContext(i);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);