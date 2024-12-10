"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["35524"],{46670:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/utoc","title":"Utilisation de l\'UTOC int\xe9gr\xe9","description":"Il est d\xe9conseill\xe9 d\'utiliser deux UTOIC, car la gravure et la connexion peuvent \xeatre tr\xe8s compliqu\xe9es.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/utoc.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/utoc","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/utoc","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/utoc.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Utilisation de l\'UTOC int\xe9gr\xe9"},"sidebar":"tutorialSidebar","previous":{"title":"Alimentation de l\'ordinateur h\xf4te","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/power"},"next":{"title":"Connexion de la carte m\xe8re par UART","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-mini-pad/uart"}}'),o=n("52676"),r=n("79938");let s={sidebar_position:8,sidebar_label:"Utilisation de l'UTOC int\xe9gr\xe9"},l="Utilisation de l'UTOC int\xe9gr\xe9",d={},a=[];function c(e){let t={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ImageView:i}=t;return!i&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"utilisation-de-lutoc-int\xe9gr\xe9",children:"Utilisation de l'UTOC int\xe9gr\xe9"})}),"\n",(0,o.jsx)(t.admonition,{title:"\xc0 savoir",type:"danger",children:(0,o.jsx)(t.p,{children:"Il est d\xe9conseill\xe9 d'utiliser deux UTOIC, car la gravure et la connexion peuvent \xeatre tr\xe8s compliqu\xe9es."})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Si vous n'avez pas besoin d'utiliser l'UTOC int\xe9gr\xe9, ex\xe9cutez la commande ci-dessous, l'ex\xe9cution n'aura aucun message :"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"sudo sed -i 's/usbhost2/offusb2/g' /boot/FlyOS-Env.txt\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"M\xe9thode de restauration, l'ex\xe9cution n'aura aucun message :"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"sudo sed -i 's/offusb2/usbhost2/g' /boot/FlyOS-Env.txt\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Le MINI Pad est d\xe9j\xe0 \xe9quip\xe9 d'un UTOC"}),"\n",(0,o.jsx)(i,{image:n(7564).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7564:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/utoc-dd05ca75eec09f5fd80f916b15fef020.webp"},79938:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var i=n(75271);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);