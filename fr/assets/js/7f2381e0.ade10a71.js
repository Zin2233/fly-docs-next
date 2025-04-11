"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["31753"],{850:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return t}});var r=i(85893),s=i(50065);let t=[{value:"M\xe9thodes d&#39;utilisation de DSI",id:"m\xe9thodes-dutilisation-de-dsi",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"m\xe9thodes-dutilisation-de-dsi",children:"M\xe9thodes d'utilisation de DSI"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une fois l'image grav\xe9e, ajoutez la commande suivante dans /boot/config.txt"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"dtoverlay=vc4-kms-dsi-7inch\n"})}),"\n",(0,r.jsx)(t,{image:i(50016).Z,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enregistrez et quittez"}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},66750:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>u,toc:()=>p,contentTitle:()=>d});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-lcd/dsi","title":"Utilisation de DSI","description":"Ce tutoriel utilise le Raspberry Pi 4B en exemple","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-lcd/dsi.mdx","sourceDirName":"ProductDoc/Screen/fly-lcd","slug":"/ProductDoc/Screen/fly-lcd/dsi","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-lcd/dsi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-lcd/dsi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"frontMatter":{"position lat\xe9rale":3,"\xe9tiquette de la position lat\xe9rale":"DSI utilisation"},"sidebar":"tutorialSidebar","previous":{"title":"Mod\xe8les 3D","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-lcd/schematic"},"next":{"title":"FLY-12864","permalink":"/fly-docs-next/fr/docs/category/fly-12864"}}'),s=i("85893"),t=i("50065"),l=i("850");function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"raspberry-pi-5-avec-mipi",children:"Raspberry Pi 5 avec MIPI"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"FLY_MIPI est un module de conversion sp\xe9cialement con\xe7u pour le Raspberry Pi 5, permettant d'utiliser directement des p\xe9riph\xe9riques DSI et CSI via une adaptation."})}),"\n",(0,s.jsx)(n.h3,{id:"connexion-du-raspberry-pi-5-avec-mipi",children:"Connexion du Raspberry Pi 5 avec MIPI"}),"\n",(0,s.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Les interfaces DSI et CSI du Raspberry Pi 5 sont maintenant appel\xe9es MIPI"}),"\n",(0,s.jsx)(n.li,{children:"Les interfaces MIPI peuvent \xeatre utilis\xe9es directement avec des cam\xe9ras CSI ou des \xe9crans DSI via une configuration"}),"\n",(0,s.jsx)(n.li,{children:"Veuillez pr\xeater attention \xe0 la direction des broches"}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Le Raspberry Pi 5 dispose maintenant de deux interfaces MIPI, si vous regardez de face, vous pouvez voir qu'elles sont marqu\xe9es 1 et 0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connexion-de-l\xe9cran-dsi",children:"Connexion de l'\xe9cran DSI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si vous utilisez l'interface 1, veuillez configurer l'\xe9cran selon la configuration suivante"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si vous utilisez l'interface 0, veuillez configurer l'\xe9cran selon la configuration suivante"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Connexion de r\xe9f\xe9rence","\n",(0,s.jsx)(r,{image:i(40052).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connexion-de-la-cam\xe9ra-csi",children:"Connexion de la cam\xe9ra CSI"}),"\n",(0,s.jsx)(r,{image:i(31345).Z,size:"100%",align:"left"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Veuillez noter que le mod\xe8le de cam\xe9ra doit \xeatre configur\xe9 en fonction de celui que vous avez achet\xe9, ce tutoriel fait r\xe9f\xe9rence \xe0 l'utilisation de imx219"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Si vous utilisez l'interface MIPI de gauche, veuillez configurer la cam\xe9ra selon la configuration suivante"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si vous utilisez l'interface MIPI de droite, veuillez configurer la cam\xe9ra selon la configuration suivante"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connexion de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,s.jsx)(r,{image:i(68370).Z,size:"100%",align:"left"})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let c={"position lat\xe9rale":3,"\xe9tiquette de la position lat\xe9rale":"DSI utilisation"},d="Utilisation de DSI",u={},p=[{value:"Syst\xe8me Raspberry Pi",id:"syst\xe8me-raspberry-pi",level:2},{value:"Connexion de r\xe9f\xe9rence",id:"connexion-de-r\xe9f\xe9rence",level:2},{value:"Configuration Raspberry Pi",id:"configuration-raspberry-pi",level:2},...l.d$,{value:"Raspberry Pi 5 avec MIPI",id:"raspberry-pi-5-avec-mipi",level:2},{value:"Connexion du Raspberry Pi 5 avec MIPI",id:"connexion-du-raspberry-pi-5-avec-mipi",level:3},{value:"Connexion de l&#39;\xe9cran DSI",id:"connexion-de-l\xe9cran-dsi",level:2},{value:"Connexion de la cam\xe9ra CSI",id:"connexion-de-la-cam\xe9ra-csi",level:2}];function f(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{Button:r,ImageView:o,TabItem:c,Tabs:d}=n;return r||x("Button",!0),o||x("ImageView",!0),c||x("TabItem",!0),d||x("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"utilisation-de-dsi",children:"Utilisation de DSI"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Ce tutoriel utilise le Raspberry Pi 4B en exemple"})}),"\n",(0,s.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le syst\xe8me du Raspberry Pi est recommand\xe9 d'utiliser la version ",(0,s.jsx)(n.code,{children:"bookworm"})]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"syst\xe8me-raspberry-pi",children:"Syst\xe8me Raspberry Pi"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Il y a des images de syst\xe8me pr\xe9install\xe9es, d\xe9j\xe0 test\xe9es pour l'affichage et le toucher de l'\xe9cran DSI"}),"\n",(0,s.jsxs)(n.li,{children:["Indication: Une configuration d'\xe9cran est n\xe9cessaire\n",(0,s.jsx)(r,{variant:"contained",disableElevation:!0,href:"/docs/ResDownload/system-img/rpi",children:"Image de syst\xe8me"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connexion-de-r\xe9f\xe9rence",children:"Connexion de r\xe9f\xe9rence"}),"\n",(0,s.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,s.jsx)(n.p,{children:"Veuillez noter la direction des broches dor\xe9es"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Broche DSI","\n",(0,s.jsx)(o,{image:i(40449).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Broche Raspberry Pi","\n",(0,s.jsx)(o,{image:i(85526).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-raspberry-pi",children:"Configuration Raspberry Pi"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{value:"Utilisation de l'interface DSI sur Raspberry Pi 4B/3B",default:!0,children:(0,s.jsx)(l.ZP,{})}),(0,s.jsx)(c,{value:"Utilisation de l'interface Mipi sur Raspberry Pi 5B",default:!0,children:(0,s.jsx)(a,{})})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31345:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/csi1-573dc2b884deb22ebf3a6b95b7db6683.webp"},50016:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-75c93341f72ec076930d2fada92d3679.webp"},68370:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/mipi_csi-b0cd3ff44460b344e91a0b32d111467a.webp"},40052:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/mipi_dsi-34e049e6288eabba53ee23a3d0c00b43.webp"},40449:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-link-3370d60f580b6e49ad39f416b02d72d7.webp"},85526:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-link1-b2529cdef2317f0fff7005772f24c59e.webp"},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var r=i(67294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);