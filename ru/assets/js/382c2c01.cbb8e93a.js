"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["48275"],{12319:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36/cfg","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1720514387000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36/wiring"},"next":{"title":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0430\u043A\u0441\u0435\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0430","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36/adxl"}}'),o=t("52676"),s=t("79938");let i={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},c="\u53C2\u8003\u914D\u7F6E",a={},d=[];function l(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cfg",children:"## SHT36\u8BBE\u7F6E\n[mcu sht36]\ncanbus_uuid:  *d085135ff4c2*\n\n## SHT36\u6E29\u5EA6\n[temperature_sensor FLY-SHT36]\nsensor_type: temperature_mcu\nsensor_mcu: sht36\n\n## FAN0\n[fan]\npin: sht36:PB10\n\n## FAN1\n[heater_fan hotend_fan]\npin: sht36:PB11\nheater: extruder\nheater_temp: 50.0\n\n\n## X\u9650\u4F4D\u8BBE\u7F6E\n[stepper_x]\nendstop_pin: !sht36:PA0\n## SHT\u677F\u6709PA0,PA1,PA2\u4E09\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n\n## \u6324\u51FA\u673A\n[extruder]\nstep_pin: sht36:PB4\ndir_pin: sht36:PB3\nenable_pin: !sht36:PA15\nmicrosteps: 16\nrotation_distance: 33.5\nnozzle_diameter: 0.400\nfilament_diameter: 1.750\nheater_pin: sht36:PA8\nsensor_pin: sht36:PB0\nsensor_type: ATC Semitec 104GT-2\npullup_resistor: 2200\ncontrol: pid\npid_Kp: 22.2\npid_Ki: 1.08\npid_Kd: 114\nmin_temp: -50\nmax_temp: 350\n\n## \u6324\u51FA\u673A\u9A71\u52A8\u8BBE\u7F6E\n[tmc2209 extruder]\nuart_pin: sht36:PB5\nrun_current: 0.600\nstealthchop_threshold: 999999\n\n\n## RGB\n[neopixel my_neopixel]\npin: sht36:PB15\nchain_count: 12\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.0\ninitial_BLUE: 0.0\n\n## ADXL345\u52A0\u901F\u5EA6\u8BA1\n[adxl345]\ncs_pin: sht36:PA4\nspi_bus: spi1\n\n## BLTOUCH\n[bltouch]\nsensor_pin: ^sht36:PC15\ncontrol_pin: sht36:PB1\nx_offset: -26.1\ny_offset: -15.3\nz_offset: 2.1\n\n## PT100\u8BBE\u7F6E\n[temperature_sensor PT100]\nsensor_type: MAX31865\nsensor_pin: sht36:PA3\nspi_bus: spi1\nmin_temp: -50\nmax_temp: 350\nrtd_reference_r: 430\n\n"})})]})}function p(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var r=t(75271);let o={},s=r.createContext(o);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);