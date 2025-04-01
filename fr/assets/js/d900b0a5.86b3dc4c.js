"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["11446"],{7691:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-airclick/falsh","title":"Mise \xe0 jour et gravure du firmware","description":"* Le firmware est pr\xe9install\xe9 en usine","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-airclick/falsh.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-airclick","slug":"/ProductDoc/ExtensionBoard/fly-airclick/falsh","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/falsh","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-airclick/falsh.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Mise \xe0 jour du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"Pr\xe9sentation","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/"},"next":{"title":"Connexion \xe0 BambuLab","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-airclick/bambulab"}}'),o=n("74132"),l=n("94551");let s={sidebar_position:2,sidebar_label:"Mise \xe0 jour du firmware"},t="Mise \xe0 jour et gravure du firmware",a={},d=[{value:"T\xe9l\xe9chargement du firmware",id:"t\xe9l\xe9chargement-du-firmware",level:2},{value:"Mise \xe0 jour du firmware",id:"mise-\xe0-jour-du-firmware",level:2}];function c(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",ul:"ul",...(0,l.a)(),...e.components},{Button:r,ImageView:s}=i;return r||f("Button",!0),s||f("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"mise-\xe0-jour-et-gravure-du-firmware",children:"Mise \xe0 jour et gravure du firmware"})}),"\n",(0,o.jsx)(i.admonition,{title:"\xc0 savoir",type:"danger",children:(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Le firmware est pr\xe9install\xe9 en usine"}),"\n"]})}),"\n",(0,o.jsx)(i.h2,{id:"t\xe9l\xe9chargement-du-firmware",children:"T\xe9l\xe9chargement du firmware"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Explications sur le firmware"}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"wbtn-vX.X.X-X-XXXXXX-full.bin"})," est un firmware complet qui doit \xeatre grav\xe9 \xe0 partir de l'adresse ",(0,o.jsx)(i.code,{children:"0x0"}),", sans quoi toutes les configurations seront perdues"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"wbtn-vX.X.X-X-XXXXXX-delta.bin"})," est un firmware incr\xe9mentiel qui doit \xeatre grav\xe9 \xe0 partir de l'adresse ",(0,o.jsx)(i.code,{children:"0x10000"}),", il met \xe0 jour uniquement le firmware sans affecter les configurations existantes"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"wbtn-vX.X.X-X-XXXXXX-www.bin"})," est un firmware pour l'interface utilisateur qui doit \xeatre grav\xe9 \xe0 partir de l'adresse ",(0,o.jsx)(i.code,{children:"0x290000"}),", il met \xe0 jour uniquement l'interface utilisateur web sans affecter le firmware ou les configurations existantes"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://g-ofpa1390.coding.net/public-artifacts/3D-Printers/airclick/packages",children:"T\xe9l\xe9chargement du package de firmware"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"mise-\xe0-jour-du-firmware",children:"Mise \xe0 jour du firmware"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Il faut que l'AirClick soit d\xe9connect\xe9 du courant, puis connecter le port de programmation ESP32 de l'AirClick \xe0 l'ordinateur en appuyant sur BOOT","\n",(0,o.jsx)(s,{image:n(49309).Z,size:"80%",align:"Center"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["T\xe9l\xe9charger et d\xe9compresser l'outil de programmation USB ",(0,o.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/Utils/flash_download_tool_3.9.4.zip",children:"Cliquez ici pour t\xe9l\xe9charger"})]}),"\n",(0,o.jsxs)(i.li,{children:["Ouvrir ",(0,o.jsx)(i.code,{children:"flash_download_tool_3.9.4.exe"}),", attention : apr\xe8s avoir ouvert l'outil de programmation, une fen\xeatre CMD s'ouvrira d'abord, puis l'interface de l'outil de programmation, ne fermez pas la fen\xeatre CMD"]}),"\n",(0,o.jsxs)(i.li,{children:["Dans l'outil de programmation, choisir ",(0,o.jsx)(i.code,{children:"ESP32-C3"})," dans ",(0,o.jsx)(i.code,{children:"ChipType:"})]}),"\n",(0,o.jsxs)(i.li,{children:["Dans l'outil de programmation, choisir ",(0,o.jsx)(i.code,{children:"Develop"})," dans ",(0,o.jsx)(i.code,{children:"WorkMode:"})]}),"\n",(0,o.jsxs)(i.li,{children:["Dans l'outil de programmation, choisir ",(0,o.jsx)(i.code,{children:"USB"})," dans ",(0,o.jsx)(i.code,{children:"LoadMode:"})]}),"\n",(0,o.jsxs)(i.li,{children:["Cliquez ensuite sur ",(0,o.jsx)(i.code,{children:"OK"}),", comme indiqu\xe9 dans l'image suivante","\n",(0,o.jsx)(s,{image:n(94028).Z,size:"50%",align:"Center"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["Apr\xe8s avoir cliqu\xe9, l'image suivante appara\xeetra","\n",(0,o.jsx)(s,{image:n(93509).Z,size:"50%",align:"Center"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"tip",children:(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"La zone s\xe9lectionn\xe9e en vert dans l'image ci-dessus doit \xeatre identique \xe0 celle de l'image, ne modifiez pas"}),"\n"]})}),"\n",(0,o.jsxs)(i.ol,{start:"8",children:["\n",(0,o.jsx)(i.li,{children:"Connectez AirClick \xe0 l'ordinateur via un c\xe2ble USB-TypeC"}),"\n",(0,o.jsx)(i.li,{children:"Cliquez sur le bouton bleu dans l'image ci-dessus, zone 1, pour s\xe9lectionner le firmware que vous souhaitez graver"}),"\n",(0,o.jsx)(i.li,{children:"Cliquez sur le bouton bleu dans l'image ci-dessus, zone 2, pour entrer l'adresse de gravure"}),"\n",(0,o.jsx)(i.li,{children:"Cliquez sur le bouton bleu dans l'image ci-dessus, zone 3, pour s\xe9lectionner le port s\xe9rie de l'AirClick (si ce n'est pas le cas, maintenez enfonc\xe9e la touche de programmation de l'AirClick pendant la connexion \xe0 l'ordinateur)"}),"\n",(0,o.jsx)(i.li,{children:"Cliquez sur le bouton bleu dans l'image ci-dessus, zone 4, pour choisir le d\xe9bit de 921600"}),"\n",(0,o.jsx)(i.li,{children:"Cliquez sur le bouton bleu dans l'image ci-dessus, zone 5, pour commencer la gravure, attendez que la gravure soit termin\xe9e avant de d\xe9brancher le c\xe2ble de l'AirClick"}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function f(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93509:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/flash-1-d0146ad4bf2ff5a4b4023f2a1235fa2f.webp"},94028:function(e,i,n){n.d(i,{Z:function(){return r}});let r="data:image/webp;base64,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"},49309:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/host-de82d1e2c3fc4bc842ddbc4507de930a.webp"},94551:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return s}});var r=n(39546);let o={},l=r.createContext(o);function s(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);