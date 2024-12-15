"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["76469"],{1279:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-pi/index","title":"Introduction","description":"Nous sommes ravis de pr\xe9senter la toute nouvelle carte m\xe8re FLY-\u03C0. Cette carte peut remplacer un Raspberry Pi comme contr\xf4leur principal, avec 1 Go de m\xe9moire DDR3 int\xe9gr\xe9e, permettant l\'ex\xe9cution d\'un bureau Linux complet (optimis\xe9 sur la base d\'Armbian). La carte peut \xeatre utilis\xe9e avec les firmwares Klipper et RRF, et m\xeame faire fonctionner l\'\xe9cran Klipper lors de l\'utilisation de la carte SHT.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi/index.mdx","sourceDirName":"ProductDoc/SBC/fly-pi","slug":"/ProductDoc/SBC/fly-pi/","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-Pi","permalink":"/fly-docs-next/fr/docs/category/fly-pi"},"next":{"title":"Gravure du syst\xe8me","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-pi/fly-os"}}'),n=r("52676"),s=r("79938");let o={sidebar_position:1,sidebar_label:"Introduction"},l="Introduction",a={},c=[{value:"Caract\xe9ristiques",id:"caract\xe9ristiques",level:2},{value:"Description des interfaces du produit",id:"description-des-interfaces-du-produit",level:2}];function u(e){let t={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{ImageView:i}=t;return!i&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.p,{children:"Nous sommes ravis de pr\xe9senter la toute nouvelle carte m\xe8re FLY-\u03C0. Cette carte peut remplacer un Raspberry Pi comme contr\xf4leur principal, avec 1 Go de m\xe9moire DDR3 int\xe9gr\xe9e, permettant l'ex\xe9cution d'un bureau Linux complet (optimis\xe9 sur la base d'Armbian). La carte peut \xeatre utilis\xe9e avec les firmwares Klipper et RRF, et m\xeame faire fonctionner l'\xe9cran Klipper lors de l'utilisation de la carte SHT."}),"\n",(0,n.jsx)(t.p,{children:"Le but de la conception de ce contr\xf4leur principal est de rendre l'utilisation des firmwares Klipper ou RRF plus facile pour les clients. Nous avons optimis\xe9 l'image syst\xe8me Linux pour qu'elle soit plus adapt\xe9e \xe0 l'impression 3D, rendant l'installation et l'utilisation plus simples, m\xeame pour les d\xe9butants qui peuvent rapidement apprendre \xe0 s'en servir. Par rapport aux autres cartes contr\xf4leurs, cela r\xe9duit les co\xfbts d'apprentissage, vous permettant de vous concentrer davantage sur le plaisir de l'impression 3D (achetez le forfait avec carte SD pr\xe9install\xe9e avec le firmware Klipper pour une utilisation imm\xe9diate, ce qui \xe9conomise du temps et des efforts)."}),"\n",(0,n.jsx)(t.h2,{id:"caract\xe9ristiques",children:"Caract\xe9ristiques"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU : Puissant chipset Allwinner H5, 4 c\u0153urs Cortex-A53 \xe0 64 bits"}),"\n",(0,n.jsx)(t.li,{children:"GPU : Puissant GPU \xe0 6 c\u0153urs Mali 450, taux de remplissage de pixels sup\xe9rieur \xe0 2.7 Gpixel/s"}),"\n",(0,n.jsx)(t.li,{children:"RAM : 1 Go DDR3 (partag\xe9 avec le GPU) (512+512)"}),"\n",(0,n.jsx)(t.li,{children:"ROM : Supporte jusqu'\xe0 128 Go SDCARD"}),"\n",(0,n.jsx)(t.li,{children:"P\xe9riph\xe9riques : Spi x2, UART x2, USB x4 (USB 2.0 x3, OTG x1), Micro HDMI x1, Eth x1 (100M), CAN x1 (n\xe9cessite l'achat s\xe9par\xe9 d'un module CAN)"}),"\n",(0,n.jsx)(t.li,{children:"Interfaces : Interface M.2 int\xe9gr\xe9e, extensible pour WIFI, eMMC, etc. (protocole priv\xe9, ne connectez pas d'appareils M.2 non sp\xe9cifiques \xe0 FLY \u03C0)"}),"\n",(0,n.jsx)(t.li,{children:"Interface 40 broches, compatible avec Raspberry Pi"}),"\n",(0,n.jsx)(t.li,{children:"Supporte une alimentation DC de 12-24V, pour une alimentation plus stable"}),"\n",(0,n.jsx)(t.li,{children:"Une interface de ventilateur contr\xf4lable \xe0 5V est pr\xe9vue pour le refroidissement du contr\xf4leur principal"}),"\n",(0,n.jsx)(t.li,{children:"Interface d'extension CAN pr\xe9vue"}),"\n",(0,n.jsx)(t.li,{children:"Syst\xe8me pr\xe9install\xe9 avec klipper, moonraker, mainsail, fluidd, klipper-screen, Crowsnest, plugin de compensation de r\xe9sonance numpy et FLY-Tools, sans besoin de changer de source ou d'op\xe9rations complexes, plus facile pour les d\xe9butants (n\xe9cessite l'achat d'une carte TF ou M2WE)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description-des-interfaces-du-produit",children:"Description des interfaces du produit"}),"\n",(0,n.jsx)(i,{image:r(87057).Z,size:"80%",align:"center"}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},87057:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/images/interface-d6bbf7820a50c7c3c865674bffbe7039.webp"},79938:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return o}});var i=r(75271);let n={},s=i.createContext(n);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);