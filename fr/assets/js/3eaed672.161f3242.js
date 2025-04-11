"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14345"],{74472:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>s,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-buffer/index","title":"Introduction","description":"Le tampon de consommable LLL est un dispositif con\xe7u pour l\'alimentation \xe0 distance d\'un imprimante 3D, visant \xe0 simplifier les op\xe9rations de chargement et de d\xe9chargement des consommables. Ce tampon est \xe9quip\xe9 de deux boutons, l\'un pour l\'alimentation et l\'autre pour le retrait, permettant aux utilisateurs d\'effectuer des op\xe9rations d\'alimentation et de retrait \xe9lectriques.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-buffer/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-buffer","slug":"/ProductDoc/ExtensionBoard/fly-buffer/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-buffer/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-buffer/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"FLY-LLL\u7F13\u51B2\u5668","permalink":"/fly-docs-next/fr/docs/category/fly-lll\u7F13\u51B2\u5668"},"next":{"title":"Mod\xe8les 3D","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-buffer/schematic"}}'),i=t("85893"),r=t("50065");let a={sidebar_position:1},l="Introduction",s={},d=[{value:"Fonction de tampon :",id:"fonction-de-tampon-",level:3},{value:"Fonction de d\xe9tection de rupture :",id:"fonction-de-d\xe9tection-de-rupture-",level:3},{value:"Lien de t\xe9l\xe9chargement du mod\xe8le",id:"lien-de-t\xe9l\xe9chargement-du-mod\xe8le",level:2},{value:"R\xe9f\xe9rence de configuration",id:"r\xe9f\xe9rence-de-configuration",level:2},{value:"R\xe9f\xe9rence de c\xe2blage",id:"r\xe9f\xe9rence-de-c\xe2blage",level:2},{value:"Sch\xe9ma de c\xe2blage pour le moteur pas \xe0 pas",id:"sch\xe9ma-de-c\xe2blage-pour-le-moteur-pas-\xe0-pas",level:2},{value:"Sch\xe9ma d&#39;installation",id:"sch\xe9ma-dinstallation",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Button:o,ImageView:a,PdfView:l}=n;return o||m("Button",!0),a||m("ImageView",!0),l||m("PdfView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(n.h1,{id:"utilisation-du-tampon-lll",children:"Utilisation du tampon LLL"}),"\n",(0,i.jsx)(n.p,{children:"Le tampon de consommable LLL est un dispositif con\xe7u pour l'alimentation \xe0 distance d'un imprimante 3D, visant \xe0 simplifier les op\xe9rations de chargement et de d\xe9chargement des consommables. Ce tampon est \xe9quip\xe9 de deux boutons, l'un pour l'alimentation et l'autre pour le retrait, permettant aux utilisateurs d'effectuer des op\xe9rations d'alimentation et de retrait \xe9lectriques."}),"\n",(0,i.jsx)(n.h3,{id:"fonction-de-tampon-",children:"Fonction de tampon :"}),"\n",(0,i.jsx)(n.p,{children:"Lorsque l'imprimante 3D alimente l'extrudeuse, si une traction est exerc\xe9e sur le support de consommable distant, le tampon d\xe9tecte cette action et envoie automatiquement une partie de la consommable vers le hot-end. Chaque fois qu'une traction se produit, le tampon r\xe9p\xe8te cette op\xe9ration d'alimentation. Cela permet de r\xe9duire efficacement les tractions exerc\xe9es par l'extrudeuse sur la consommable, en maintenant une pouss\xe9e constante de l'extrudeuse, am\xe9liorant ainsi la stabilit\xe9 de la qualit\xe9 d'impression."}),"\n",(0,i.jsx)(n.h3,{id:"fonction-de-d\xe9tection-de-rupture-",children:"Fonction de d\xe9tection de rupture :"}),"\n",(0,i.jsx)(n.p,{children:"Le tampon est dot\xe9 d'un d\xe9tecteur de rupture qui envoie un signal \xe0 l'imprimante 3D pour suspendre l'impression lorsque la d\xe9tection indique qu'il n'y a plus de consommable dans le tampon. Pour utiliser cette fonction, il est n\xe9cessaire de connecter les broches de signal et de modifier la configuration de l'imprimante 3D. En revanche, la fonction de tampon peut \xeatre utilis\xe9e directement sans modification de configuration."}),"\n",(0,i.jsx)(n.p,{children:"Gr\xe2ce \xe0 ces conceptions de fonctionnalit\xe9s, le tampon de consommable LLL simplifie non seulement les op\xe9rations de consommable, mais am\xe9liore \xe9galement la stabilit\xe9 du processus d'impression et la qualit\xe9 d'impression."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Veuillez noter que vous devez connecter la consommable avant d'utiliser les fonctions, sinon vous ne pouvez contr\xf4ler le moteur que par les boutons."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lien-de-t\xe9l\xe9chargement-du-mod\xe8le",children:"Lien de t\xe9l\xe9chargement du mod\xe8le"}),"\n",(0,i.jsx)(o,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/STEP/%E7%BC%93%E5%86%B2%E5%99%A8.zip",children:"Mod\xe8le du tampon"}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-configuration",children:"R\xe9f\xe9rence de configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[filament_switch_sensor D\xe9tection de rupture]\npause_on_runout: true\nswitch_pin: ^PG7\nrunout_gcode:\n        PAUSE\n        M118 Manque de consommable\ninsert_gcode:\n        M118 Insertion de consommable\n"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-c\xe2blage",children:"R\xe9f\xe9rence de c\xe2blage"}),"\n",(0,i.jsx)(a,{image:t(85960).Z,size:"100%",align:"center"}),"\n",(0,i.jsx)(n.h2,{id:"sch\xe9ma-de-c\xe2blage-pour-le-moteur-pas-\xe0-pas",children:"Sch\xe9ma de c\xe2blage pour le moteur pas \xe0 pas"}),"\n",(0,i.jsx)(a,{image:t(835).Z,size:"100%",align:"center"}),"\n",(0,i.jsx)(n.h2,{id:"sch\xe9ma-dinstallation",children:"Sch\xe9ma d'installation"}),"\n",(0,i.jsx)(l,{file:"https://cdn.mellow.klipper.cn/SCH-PDF/buffer.pdf"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85960:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/buffer-467e1b872d3ff4359460066c15708b1a.webp"},835:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/lll2-0719b3c1e97192d980c8c5ed979f0f18.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var o=t(67294);let i={},r=o.createContext(i);function a(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);