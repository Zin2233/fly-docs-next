"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["8139"],{34719:function(e,r,s){s.r(r),s.d(r,{default:()=>a,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>u});var n=JSON.parse('{"id":"DebugDoc/faq/tmc","title":"Erreurs li\xe9es au TMC","description":"Impossible de lire l\'enregistrement IFCNT du bus s\xe9rie UART \'stepperx\' du tmc ou Impossible de lire l\'enregistrement de bus s\xe9rie SPI \'stepperx\' du tmc","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/faq/tmc.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/tmc","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/tmc","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/tmc.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"Instructions de d\xe9bogage courantes","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/klipper-directives"},"next":{"title":"Tutoriel d\'utilisation des pilotes externes","permalink":"/fly-docs-next/fr/docs/DebugDoc/faq/servo-drive"}}'),i=s("85893"),t=s("50065");let l={sidebar_position:3},u="Erreurs li\xe9es au TMC",c={},o=[{value:"<code>Impossible de lire l&#39;enregistrement IFCNT du bus s\xe9rie UART &#39;stepper_x&#39; du tmc</code> ou <code>Impossible de lire l&#39;enregistrement de bus s\xe9rie SPI &#39;stepper_x&#39; du tmc</code>",id:"impossible-de-lire-lenregistrement-ifcnt-du-bus-s\xe9rie-uart-stepper_x-du-tmc-ou-impossible-de-lire-lenregistrement-de-bus-s\xe9rie-spi-stepper_x-du-tmc",level:2},{value:"<code>Le TMC XXXX signale une erreur : GSTAT : 00000001 reset=1(RAZ)</code>",id:"le-tmc-xxxx-signale-une-erreur--gstat--00000001-reset1raz",level:2},{value:"<code>Le TMC &#39;extrudeur&#39; signale une erreur : DRV_STATUS : c00d0103 otpw=1(Avertissement de surchauffe !)</code>",id:"le-tmc-extrudeur-signale-une-erreur--drv_status--c00d0103-otpw1avertissement-de-surchauffe-",level:2},{value:"<code>Le TMC &#39;extrudeur&#39; signale une erreur : DRV_STATUS : 601f1000 s2vsa=1(Courant court-circuit\xe9 vers l&#39;alimentation A!) csactual=31 ola=1(Charge ouverte A!) olb=1(Charge ouverte B!)</code>",id:"le-tmc-extrudeur-signale-une-erreur--drv_status--601f1000-s2vsa1courant-court-circuit\xe9-vers-lalimentation-a-csactual31-ola1charge-ouverte-a-olb1charge-ouverte-b",level:2},{value:"<code>Le TMC &#39;extrudeur&#39; signale une erreur : DRV_STATUS : 00190060 s2vsb=1(Courant court-circuit\xe9 vers l&#39;alimentation B!) ola=1(Charge ouverte A!) cs_actual-25</code>",id:"le-tmc-extrudeur-signale-une-erreur--drv_status--00190060-s2vsb1courant-court-circuit\xe9-vers-lalimentation-b-ola1charge-ouverte-a-cs_actual-25",level:2}];function d(e){let r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"erreurs-li\xe9es-au-tmc",children:"Erreurs li\xe9es au TMC"})}),"\n",(0,i.jsxs)(r.h2,{id:"impossible-de-lire-lenregistrement-ifcnt-du-bus-s\xe9rie-uart-stepper_x-du-tmc-ou-impossible-de-lire-lenregistrement-de-bus-s\xe9rie-spi-stepper_x-du-tmc",children:[(0,i.jsx)(r.code,{children:"Impossible de lire l'enregistrement IFCNT du bus s\xe9rie UART 'stepper_x' du tmc"})," ou ",(0,i.jsx)(r.code,{children:"Impossible de lire l'enregistrement de bus s\xe9rie SPI 'stepper_x' du tmc"})]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"D\xe9tails de l'erreur"}),"\n",(0,i.jsx)(n,{image:s(65339).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Cause de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Impossible de communiquer avec le pilote"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"M\xe9thodes principales pour r\xe9soudre le probl\xe8me"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"V\xe9rifier si la configuration des broches UART du pilote correspondante est correcte"}),"\n",(0,i.jsx)(r.li,{children:"Les sauts UART sont-ils corrects ?"}),"\n",(0,i.jsx)(r.li,{children:"Le pilote est-il aliment\xe9 ?"}),"\n",(0,i.jsx)(r.li,{children:"Remplacer le pilote ou configurer la prise pour effectuer un diagnostic"}),"\n",(0,i.jsx)(r.li,{children:"Si c'est un autre fabricant de pilotes, vous devez d\xe9terminer vous-m\xeame si les broches UART du pilote correspondent \xe0 celles de FLY. Les broches UART du pilote FLY sont la quatri\xe8me broche en partant du haut vers le bas."}),"\n"]}),"\n",(0,i.jsx)(n,{image:s(77775).Z,size:"80%",align:"center"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Si les broches UART de votre pilote sont sur la cinqui\xe8me broche, vous pouvez r\xe9soudre cela avec les sauts mentionn\xe9s ci-dessous"}),"\n"]}),"\n",(0,i.jsx)(n,{image:s(25466).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"le-tmc-xxxx-signale-une-erreur--gstat--00000001-reset1raz",children:(0,i.jsx)(r.code,{children:"Le TMC XXXX signale une erreur : GSTAT : 00000001 reset=1(RAZ)"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"D\xe9tails de l'erreur"}),"\n",(0,i.jsx)(n,{image:s(21682).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Cause de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"R\xe9initialisation du pilote"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"M\xe9thodes principales pour r\xe9soudre le probl\xe8me"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Les c\xe2bles d'alimentation ne sont pas bien connect\xe9s"}),"\n",(0,i.jsx)(r.li,{children:"Le fil du moteur est coup\xe9"}),"\n",(0,i.jsx)(r.li,{children:"Vous pouvez connecter l'enveloppe m\xe9tallique du moteur au GND de la carte m\xe8re ou de l'outil"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"le-tmc-extrudeur-signale-une-erreur--drv_status--c00d0103-otpw1avertissement-de-surchauffe-",children:(0,i.jsx)(r.code,{children:"Le TMC 'extrudeur' signale une erreur : DRV_STATUS : c00d0103 otpw=1(Avertissement de surchauffe !)"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"D\xe9tails de l'erreur"}),"\n",(0,i.jsx)(n,{image:s(48522).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Cause de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Le pilote est surchauff\xe9 !"}),"\n",(0,i.jsx)(r.li,{children:"Ce n'est pas le moteur qui est surchauff\xe9 !"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"M\xe9thodes principales pour r\xe9soudre le probl\xe8me"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"R\xe9duire le courant de fonctionnement"}),"\n",(0,i.jsx)(r.li,{children:"Supprimer le courant de maintien"}),"\n",(0,i.jsx)(r.li,{children:"V\xe9rifier si les r\xe9sistances de mesure du pilote sont correctes"}),"\n",(0,i.jsx)(r.li,{children:"Am\xe9liorer la dissipation thermique du pilote, par exemple en ajoutant un ventilateur"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"le-tmc-extrudeur-signale-une-erreur--drv_status--601f1000-s2vsa1courant-court-circuit\xe9-vers-lalimentation-a-csactual31-ola1charge-ouverte-a-olb1charge-ouverte-b",children:(0,i.jsx)(r.code,{children:"Le TMC 'extrudeur' signale une erreur : DRV_STATUS : 601f1000 s2vsa=1(Courant court-circuit\xe9 vers l'alimentation A!) csactual=31 ola=1(Charge ouverte A!) olb=1(Charge ouverte B!)"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"D\xe9tails de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Aucune image disponible"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Cause de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"La v\xe9rification du courant du pilote est incorrecte"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"M\xe9thodes principales pour r\xe9soudre le probl\xe8me"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"V\xe9rifier si la r\xe9sistance des deux bobines de l'entra\xeenement du pas-\xe0-pas est identique"}),"\n",(0,i.jsx)(r.li,{children:"V\xe9rifier si les fils internes du moteur de pas-\xe0-pas ou des composants sont l\xe2ches ou en court-circuit"}),"\n",(0,i.jsx)(r.li,{children:"D\xe9sactiver le mode silencieux"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"le-tmc-extrudeur-signale-une-erreur--drv_status--00190060-s2vsb1courant-court-circuit\xe9-vers-lalimentation-b-ola1charge-ouverte-a-cs_actual-25",children:(0,i.jsx)(r.code,{children:"Le TMC 'extrudeur' signale une erreur : DRV_STATUS : 00190060 s2vsb=1(Courant court-circuit\xe9 vers l'alimentation B!) ola=1(Charge ouverte A!) cs_actual-25"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"D\xe9tails de l'erreur"}),"\n",(0,i.jsx)(n,{image:s(41116).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Cause de l'erreur"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Connexion incorrecte ou le moteur lui-m\xeame a un probl\xe8me"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"M\xe9thodes principales pour r\xe9soudre le probl\xe8me"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"V\xe9rifier si la r\xe9sistance des deux bobines de l'entra\xeenement du pas-\xe0-pas est identique"}),"\n",(0,i.jsx)(r.li,{children:"V\xe9rifier votre moteur de pas-\xe0-pas et vos connexions"}),"\n",(0,i.jsx)(r.li,{children:"V\xe9rifier l'ordre des fils, s'il s'agit d'un groupe \xe0 gauche et d'un groupe \xe0 droite"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},77775:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/2209uart-b0f2cf8cbfb6ec85e2acf1b41bc1d5ec.webp"},41116:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/ab-86b9eb14814b0ed2c040b60b3d692836.webp"},48522:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/overtemperror-b506ea7948fbd68b2ce953e092e1295c.webp"},21682:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/reset-bf52a205a15c1bcde0fdb1f80d31202e.webp"},65339:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/uart-c89c46087f7190f6adebd1dc47a630ce.webp"},25466:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/uart1-4e6955a86b9ff122c9e72b4b4397bdf1.webp"},50065:function(e,r,s){s.d(r,{Z:function(){return u},a:function(){return l}});var n=s(67294);let i={},t=n.createContext(i);function l(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);