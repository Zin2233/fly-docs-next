"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["23952"],{63369:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"DebugDoc/faq/kipper-adxl","title":"kipper-adxl","description":"Install Dependencies","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/faq/kipper-adxl.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/kipper-adxl","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/kipper-adxl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/kipper-adxl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Accelerometer Usage"},"sidebar":"debugdocSidebar","previous":{"title":"CAN Issue Collection","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/klipper_can"},"next":{"title":"External Drive Usage Tutorial","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/servo-drive"}}'),s=t("52676"),o=t("79938");let l={sidebar_position:5,sidebar_label:"Accelerometer Usage"},r=void 0,c={},a=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Test Accelerometer",id:"test-accelerometer",level:2},{value:"Calibrate Accelerometer",id:"calibrate-accelerometer",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["It is recommended to use SSH tools such as ",(0,s.jsx)(n.code,{children:"MobaXterm_Personal"})," for operation."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"The FLY host machine does not need to execute, as it already comes with the accelerometer dependency package."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Please execute the following commands in sequence to install the dependencies."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Note that depending on the performance of your CPU, it may take a lot of time, up to 10-20 minutes. Please be patient and wait for the installation to complete. In some cases, if the motherboard's RAM is too low, the installation may fail."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3-numpy python3-matplotlib libatlas-base-dev\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/pip install matplotlib numpy\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test-accelerometer",children:"Test Accelerometer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You need to reset before executing."}),"\n",(0,s.jsxs)(n.li,{children:["Execute ",(0,s.jsx)(n.code,{children:"ACCELEROMETER_QUERY"})," in the console."]}),"\n",(0,s.jsxs)(n.li,{children:["For multiple accelerometers, you can specify testing one by using ",(0,s.jsx)(n.code,{children:"ACCELEROMETER_QUERY CHIP=<ADXL>"}),", where ",(0,s.jsx)(n.code,{children:"<ADXL>"})," needs to be replaced with the corresponding accelerometer name."]}),"\n",(0,s.jsx)(n.li,{children:"If there is an error, please check the wiring and configuration."}),"\n",(0,s.jsxs)(n.li,{children:["The normal output is shown below:","\n",(0,s.jsx)(i,{image:t(15298).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"This allows you to perform resonance compensation measurement."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"calibrate-accelerometer",children:"Calibrate Accelerometer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reset."}),"\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)(n.code,{children:"SHAPER_CALIBRATE"})," in the console to start automatic calibration for X and Y."]}),"\n",(0,s.jsxs)(n.li,{children:["After calibration is completed, execute ",(0,s.jsx)(n.code,{children:"SAVE_CONFIG"})," to save the data."]}),"\n",(0,s.jsxs)(n.li,{children:["You can also use ",(0,s.jsx)(n.code,{children:"SHAPER_CALIBRATE AXIS=X"})," to automatically calibrate one axis."]}),"\n",(0,s.jsx)(n.li,{children:"The calibration process may take a long time, so please be patient."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Attention! If the printer vibrates too violently during the test, please press the emergency stop immediately or send ",(0,s.jsx)(n.code,{children:"M112"})," to stop it."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["An excessively high ",(0,s.jsx)(n.code,{children:"accel_per_hz"})," can make vibrations more intense; you can reduce it appropriately."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[resonance_tester]\naccel_chip: adxl345\naccel_per_hz: 50  # Default value is 75\nprobe_points: ...\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15298:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/adxl_1-95559ddccec52a838a178b24e82c14e5.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(75271);let s={},o=i.createContext(s);function l(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);