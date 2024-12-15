"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["2476"],{17905:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>f,assets:()=>l,toc:()=>s,frontMatter:()=>i});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/fan","title":"Onboard 5V Fan Port","description":"The C8 board has an onboard 5V controllable interface for main control cooling, with the wiring method as shown below","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/fan","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"sidebar_label":"Main Control Fan"},"sidebar":"tutorialSidebar","previous":{"title":"Screen Wiring and Configuration","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/screen"},"next":{"title":"Onboard 40PIN Header Diagram","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/pins"}}'),r=o("52676"),a=o("79938");let i={sidebar_position:11,sidebar_label:"Main Control Fan"},c="Onboard 5V Fan Port",l={},s=[{value:"The C8 board has an onboard 5V controllable interface for main control cooling, with the wiring method as shown below",id:"the-c8-board-has-an-onboard-5v-controllable-interface-for-main-control-cooling-with-the-wiring-method-as-shown-below",level:2},{value:"Reference Configuration",id:"reference-configuration",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,a.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"onboard-5v-fan-port",children:"Onboard 5V Fan Port"})}),"\n",(0,r.jsx)(n.h2,{id:"the-c8-board-has-an-onboard-5v-controllable-interface-for-main-control-cooling-with-the-wiring-method-as-shown-below",children:"The C8 board has an onboard 5V controllable interface for main control cooling, with the wiring method as shown below"}),"\n",(0,r.jsx)(t,{image:o(19762).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"reference-configuration",children:"Reference Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu host]                      # FlyOS has already generated the Linux MCU for you by default, define it to use           \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03C0]      # Host machine temperature\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # Host machine cooling fan\npin: host:gpiochip1/gpio103     # Host machine fan pin\nmax_power: 1.0\nsensor_type: temperature_host   # Set to host machine main control temperature\ncontrol:watermark               # Control method\ntarget_temp: 48                 # Host machine cooling fan start temperature\nmin_temp: 0                     # Minimum temperature, error will occur below this temperature\nmax_temp: 90                    # Maximum temperature, error will occur above this temperature\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # Maximum speed, 80% of full power operation\nmin_speed: 0.3                  # Minimum speed, 30% of full power operation\n"})})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19762:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/corefan-2292074fc1eb47624b75514442e33221.webp"},79938:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var t=o(75271);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);