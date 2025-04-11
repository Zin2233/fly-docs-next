"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["56123"],{23140:function(n,e,t){t.r(e),t.d(e,{default:()=>_,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>p});var o=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/cfg","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u914D\u7F6E\u53C2\u8003"},"sidebar":"tutorialSidebar","previous":{"title":"Wiring Reference","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/wiring"},"next":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/adxl"}}'),r=t("85893"),i=t("50065");let s={sidebar_position:5,sidebar_label:"\u914D\u7F6E\u53C2\u8003"},p="\u53C2\u8003\u914D\u7F6E",a={},l=[];function c(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#      Notes\n#####################################################################\n## \u8BF7\u5C06[include SHT36PRO.cfg]\u6DFB\u52A0\u5230printer.cfg\u4E0B\n## Please add [include SHT36PRO.cfg] under printer.cfg\n## \u5DE5\u5177\u677F\u5C06\u4F7F\u7528\u4EE5\u4E0B\u51E0\u79CD\u914D\u7F6E\uFF0C\u5982\u679C\u5176\u4ED6\u914D\u7F6E\u4E2D\u4F7F\u7528\u5230\u4E0B\u9762\u7684\u914D\u7F6E\u53EF\u80FD\u4F1A\u51B2\u7A81\n## The tool plate will use the following configurations, \n## and if the following configurations are used in other configurations, conflicts may occur.\n## [resonance_tester] && [extruder] && [tmc2209 extruder] && [fan] && [heater_fan my_hotend_fan]\n## [probe] && [bltouch] && [stepper_x]\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu SHT36PRO]\ncanbus_uuid: \n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor SHT36-PRO]\nsensor_type: temperature_mcu\nsensor_mcu: SHT36PRO\n#--------------------------------------------------------------------\n[temperature_sensor Box]\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: SHT36PRO:gpio27\n#####################################################################\n#      Accelerometer\n#####################################################################\n## https://www.klipper3d.org/Measuring_Resonances.html?h=adxl#adxl345\n[adxl345]\ncs_pin: SHT36PRO:gpio9\nspi_software_sclk_pin: SHT36PRO:gpio10\nspi_software_mosi_pin: SHT36PRO:gpio11\nspi_software_miso_pin: SHT36PRO:gpio12\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: adxl345\nprobe_points: 150, 150, 20\n# Somewhere slightly above the middle of your print bed\n# \u5728\u6253\u5370\u5E8A\u7684\u4E2D\u95F4\u7A0D\u5FAE\u504F\u4E0A\u7684\u4F4D\u7F6E\nmin_freq: 5\nmax_freq: 133\naccel_per_hz: 75\nhz_per_sec: 1 \n\n#####################################################################\n#      Extruder thermal sensitivity\n#####################################################################\n## Please select the type of thermocouple you want to use.\n## \u8BF7\u6839\u636E\u4F60\u60F3\u8981\u4F7F\u7528\u7684\u70ED\u654F\u9009\u62E9\n[extruder]\n## Type of sensor - common thermistors are (Generic 3950, ATC Semitec 104GT-2)\n## \u4F20\u611F\u5668\u7C7B\u578B-\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT-2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: SHT36PRO:gpio26\n###------------------------------------------------------------------\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n#pullup_resistor: 1000\n#sensor_pin: SHT36PRO:gpio26\n###------------------------------------------------------------------\n## Using MAX31865 to connect PT100\n## \u4F7F\u7528MAX31865\u63A5PT100\n#sensor_type: MAX31865\n#sensor_pin: SHT36PRO:gpio1\n#spi_software_sclk_pin: SHT36PRO:gpio10       \n#spi_software_mosi_pin: SHT36PRO:gpio11\n#spi_software_miso_pin: SHT36PRO:gpio12\n#rtd_reference_r: 430\n\n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin: SHT36PRO:gpio23\ndir_pin: SHT36PRO:gpio24               # \u6324\u51FA\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\nenable_pin: !SHT36PRO:gpio25\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\ngear_ratio:50:10\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200     \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin: SHT36PRO:gpio8\nmin_temp: -230\nmax_temp: 500\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538B\u529B\u63D0\u524D\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc5160 extruder] \ncs_pin: SHT36PRO:gpio20\nspi_software_sclk_pin: SHT36PRO:gpio10       \nspi_software_mosi_pin: SHT36PRO:gpio11\nspi_software_miso_pin: SHT36PRO:gpio12\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.075\nstealthchop_threshold: 0\n\n#####################################################################\n#      FAN\n#####################################################################\n[fan]\npin: SHT36PRO:gpio15 \n#--------------------------------------------------------------------\n[heater_fan hotend_fan]\npin: SHT36PRO:gpio14\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      X STOP\n#####################################################################\n# [stepper_x]\n# endstop_pin: !SHT36PRO:gpio21\n## SHT V2\u677F\u6709PA1,PA2\u4E24\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n## PA1\u5F15\u811A\u9ED8\u8BA4\u652F\u6301\u9AD8\u538B\u8F93\u5165\uFF0C\u53EF\u7528\u4E8E12v\u7684\u63A5\u8FD1\u4F20\u611F\u5668\u7B49\u3002\u53EF\u901A\u8FC7\u8DF3\u7EBF\u5E3D\u914D\u7F6EPA1\u4E3A\u666E\u901A\u9650\u4F4D\u5F15\u811A\n\n#####################################################################\n#      Stealthburner LED\n#####################################################################\n## https://github.com/VoronDesign/Voron-Stealthburner/tree/main\n[neopixel sb_leds]\npin: SHT36PRO:gpio6\nchain_count: 3\n# Number of LEDs\n# \u706F\u73E0\u6570\u91CF\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n#####################################################################\n#      TAP && PL08N && BLTOUCH \n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n# [probe]\n# pin: ^SHT36PRO:gpio3\n# x_offset: 0\n# y_offset: 25.0\n# z_offset: 0 \n# speed: 10.0\n# samples: 3\n# samples_result: median\n# sample_retract_dist: 4.0\n# samples_tolerance: 0.010\n# samples_tolerance_retries: 3 \n\n#--------------------------------------------------------------------\n## https://www.klipper3d.org/Config_Reference.html?h=probe#bltouch\n# [bltouch]\n# sensor_pin: ^SHT36PRO:gpio3\n# control_pin: SHT36PRO:gpio7 \n# x_offset: -26.1\n# y_offset: -15.3\n# z_offset: 2.1\n\n#####################################################################\n#                          \u78C1\u89D2\u5EA6\u4F20\u611F\u5668\n#####################################################################\n## \u78C1\u89D2\u5EA6\u4F20\u611F\u5668\n## \u76F8\u5173\u8BF4\u660E\u8BF7\u53C2\u8003https://www.klipper3d.org/API_Server.html#angledump_angle \n## https://www.klipper3d.org/Debugging.html#motion-analysis-and-data-logging\n# [angle my_angle_sensor]\n# sensor_type: as5047d\n# #sample_period: 0.000400\n# stepper: stepper_x\n# cs_pin: SHT36PRO:gpio17\n# spi_software_sclk_pin: SHT36PRO:gpio18\n# spi_software_mosi_pin: SHT36PRO:gpio19\n# spi_software_miso_pin: SHT36PRO:gpio16\n\n'})})]})}function _(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return p},a:function(){return s}});var o=t(67294);let r={},i=o.createContext(r);function s(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);