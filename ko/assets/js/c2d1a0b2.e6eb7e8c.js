"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["11161"],{42983:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>s,metadata:()=>o,assets:()=>p,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/cfg","title":"cfg","description":"\u8BF7\u4E0D\u8981\u6253\u5F00\u7F51\u9875\u7FFB\u8BD1\u65F6\u5019\u4FEE\u6539\u914D\u7F6E","source":"@site/docs/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232","slug":"/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/cfg","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"RS232 \uD38C\uC6E8\uC5B4 \uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2DC","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/rs232"},"next":{"title":"ID \uAC80\uC0C9 \uD29C\uD1A0\uB9AC\uC5BC","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/TOOL-LITE/TOOL-LITE-232/id"}}'),r=t("74132"),i=t("94551");let s={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},a="\u53C2\u8003\u914D\u7F6E",p={},l=[];function c(n){let e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u8BF7\u4E0D\u8981\u6253\u5F00\u7F51\u9875\u7FFB\u8BD1\u65F6\u5019\u4FEE\u6539\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.admonition,{title:"\u6CE8\u610F\u4E8B\u9879",type:"warning",children:(0,r.jsx)(e.p,{children:"\u8BF7\u4E0D\u8981\u6253\u5F00\u7F51\u9875\u7FFB\u8BD1\u65F6\u5019\u4FEE\u6539\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.admonition,{title:"\u987B\u77E5",type:"danger",children:(0,r.jsx)(e.p,{children:"\u8BF7\u4E0D\u8981\u6253\u5F00\u7F51\u9875\u7FFB\u8BD1\u65F6\u5019\u4FEE\u6539\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#      Notes\n#####################################################################\n## \u5DE5\u5177\u677F\u5C06\u4F7F\u7528\u4EE5\u4E0B\u51E0\u79CD\u914D\u7F6E\uFF0C\u5982\u679C\u5176\u4ED6\u914D\u7F6E\u4E2D\u4F7F\u7528\u5230\u4E0B\u9762\u7684\u914D\u7F6E\u53EF\u80FD\u4F1A\u51B2\u7A81\n## The tool plate will use the following configurations, \n## and if the following configurations are used in other configurations, conflicts may occur.\n## [resonance_tester] && [extruder] && [tmc2209 extruder] && [fan] && [heater_fan my_hotend_fan]\n## [probe] && [bltouch] && [stepper_x]\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n#TOOL-LITE\u914D\u7F6E\n#[mcu TOOL-LITE]\n#TOOL-LITEbus_uuid: \n#\u641C\u7D22id\u547D\u4EE4\n#~/klippy-env/bin/python ~/klipper/scripts/TOOL-LITEbus_query.py can0\n#~/klippy-env/bin/python ~/klipper/scripts/TOOL-LITEbus_query.py can1\n\n#232\u914D\u7F6E\n[mcu TOOL-LITE]\nserial: /dev/serial/by-path/*\nbaud: 250000   #\u8BF7\u6839\u636E\u56FA\u4EF6\u914D\u7F6E\u586B\u5199\u6CE2\u7279\u7387\nrestart_method:command\n#\u641C\u7D22id\u547D\u4EE4\n#ls /dev/serial/by-path/*\n\n[temperature_sensor TOOL-LITE]     # TOOL-LITE\u4E3B\u677F\u6E29\u5EA6\uFF08\u53EF\u81EA\u884C\u91CD\u547D\u540D\uFF09\nsensor_type: temperature_mcu     # \u5173\u8054mcu\uFF08\u9ED8\u8BA4\uFF09\n\n[force_move]\nenable_force_move: true\n\n[extruder]\nstep_pin:TOOL-LITE:gpio24\ndir_pin:TOOL-LITE:gpio23  #ORBTER V2.5 \u4F7F\u7528ldo36\u7535\u673A\u5728pin\u524D\u9762\u52A0! (!\u662F\u5927\u5199\u7684\uFF09\nenable_pin:!TOOL-LITE:gpio29\n##\u6324\u51FA\u673A\u6B65\u8FDB\u503C\u8BBE\u7F6E\nrotation_distance: 32.7\n#rotation_distance\u6B65\u8FDB\u503C\n#---------------T8\u9F7F\u8F6E\u7535\u673A--------------    \n#VZ-Hextrudort-Low plus \u4F7F\u7528moons/LDO 36\u7535\u673A17mm/20MM T8\u6B65\u8FDB\u503C\uFF1A29.7 \n#VZ-Hextrudort-Low \u4F7F\u7528moons\u7535\u673AT8\u6B65\u8FDB\u503C\uFF1A22.5  \n#VZ-Hextrudort-Low \u4F7F\u7528LDO36 20MM/17M \u7535\u673AT8\u6B65\u8FDB\u503C\uFF1A23.37 \n#Sherpa Micro \u4F7F\u7528LDO36 20MM/17MM \u7535\u673A T8\u6B65\u8FDB\u503C:23.37\n#Sherpa Micro \u4F7F\u7528moons\u7535\u673AT8\u6B65\u8FDB\u503C\uFF1A22.5\n#---------------T10\u9F7F\u8F6E\u7535\u673A--------------             \n#Sherpa Micro \u4F7F\u7528moons\u7535\u673AT10\u6B65\u8FDB\u503C\uFF1A23.8425\n#VZ-Hextrudort-Low \u4F7F\u7528moons\u7535\u673AT10\u6B65\u8FDB\u503C\uFF1A23.8425\n#VZ-Hextrudort-Low \u4F7F\u7528LDO36 17MM/20MM \u7535\u673AT10\u6B65\u8FDB\u503C\uFF1A\n#VZ-Hextrudort-Low plus T10\u6B65\u8FDB\u503C\uFF1A29.11 \n#ORBITER V2.5\u6B65\u8FDB\u503C:35.5\n\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\n#gear_ratio:50:8 #VZ-Hextrudort-Low plus \u51CF\u901F\u6BD450:8\uFF0810\u9F7F\u7535\u673A8\u653910\uFF09\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200   \nnozzle_diameter:0.400\nfilament_diameter:1.75\nsensor_type:NTC 100K MGB18-104F39050L32\n## Type of sensor - common thermistors are (Generic 3950, ATC Semitec 104GT-2)\n## \u4F20\u611F\u5668\u7C7B\u578B-\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT-2)\n###------------------------------------------------------------------\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n# sensor_pin:SHT36:gpio27\n# pullup_resistor: 1000\nsensor_pin:TOOL-LITE:gpio28\nheater_pin:TOOL-LITE:gpio6\nmin_temp:-200\nmax_temp:350\nmax_power:1.0\nmin_extrude_temp:-200\npressure_advance: 0.05\npressure_advance_smooth_time: 0.040\nmax_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\nmax_extrude_cross_section:200\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\n\n[tmc2209 extruder]\nuart_pin:TOOL-LITE:gpio25\ninterpolate:False\nrun_current: 0.5\nsense_resistor:0.110\nstealthchop_threshold:0\n\n\n[lis2dw]\ncs_pin:TOOL-LITE:gpio9\nspi_software_sclk_pin:TOOL-LITE: gpio10\nspi_software_mosi_pin:TOOL-LITE: gpio11\nspi_software_miso_pin:TOOL-LITE:gpio8\n\n[resonance_tester]\naccel_chip: lis2dw\nprobe_points: 150, 150, 20\n# Somewhere slightly above the middle of your print bed\n# \u5728\u6253\u5370\u5E8A\u7684\u4E2D\u95F4\u7A0D\u5FAE\u504F\u4E0A\u7684\u4F4D\u7F6E\nmin_freq: 5\nmax_freq: 133\naccel_per_hz: 75\nhz_per_sec: 1 \n\n[fan]   #\u6A21\u578B\u98CE\u6247\npin:TOOL-LITE:gpio13\nmax_power:0.6\n###------------------------------------------------------------------\n[heater_fan my_hotend_fan]  #\u5589\u7BA1\u98CE\u6247\npin:TOOL-LITE:gpio14\nheater: extruder\nheater_temp: 50.0\nfan_speed: 0.2\n\n## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n# [probe]\n# pin: TOOL-LITE:gpio19 #\u9AD8\u538Bpin\u811A\n# x_offset: 0\n# y_offset: 25.0\n# z_offset: 0\n# speed: 10.0\n# samples: 3\n# samples_result: median\n# sample_retract_dist: 4.0\n# samples_tolerance: 0.010\n# samples_tolerance_retries: 3\n\n## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n# [probe]\n# pin: ^TOOL-LITE:gpio22\n# x_offset: 0\n# y_offset: 25.0\n# z_offset: 0\n# speed: 10.0\n# samples: 3\n# samples_result: median\n# sample_retract_dist: 4.0\n# samples_tolerance: 0.010\n# samples_tolerance_retries: 3\n\n## https://www.klipper3d.org/Config_Reference.html?h=probe#bltouch\n#[bltouch]\n#sensor_pin: ^TOOL-LITE:gpio22    # \u4FE1\u53F7\u63A5\u53E3\n#control_pin: TOOL-LITE:gpio7    # \u8235\u673A\u63A7\u5236\n#x_offset: -26.1              # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#y_offset: -15.3              # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#z_offset: 2.1                # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n\n\n\n# #\u81EA\u5B9A\u4E49\u8235\u673A\u914D\u7F6E\n# [servo my_servo]\n# pin:TOOL-LITE:gpio7\n# #   \u63A7\u5236\u4F3A\u670D\u7684PWM\u8F93\u51FA\u5F15\u811A\u3002\n# #   \u5FC5\u987B\u63D0\u4F9B\u6B64\u53C2\u6570\u3002\n# maximum_servo_angle: 180\n# #   \u8FD9\u4E2A\u4F3A\u670D\u53EF\u4EE5\u8BBE\u5B9A\u7684\u6700\u5927\u89D2\u5EA6\uFF08\u4EE5\u5EA6\u4E3A\u5355\u4F4D\uFF09\u3002\n# #   \u9ED8\u8BA4\u662F180\u5EA6\u3002\n# minimum_pulse_width: 0.0005\n# #   \u6700\u5C0F\u8109\u5BBD\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u8FD9\u5E94\u8BE5\u5BF9\u5E94\u4E8E0\u5EA6\u7684\u89D2\u5EA6\u3002\n# #   \u9ED8\u8BA4\u662F0.001\u79D2\u3002\n# maximum_pulse_width: 0.0025\n# #   \u6700\u5927\u8109\u5BBD\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u8FD9\u5E94\u8BE5\u5BF9\u5E94\u4E8Emaximum_servo_angle\u7684\u89D2\u5EA6\u3002\n# #   \u9ED8\u8BA4\u662F0.002\u79D2\u3002\n# initial_angle:0 \n# #   \u521D\u59CB\u8BBE\u5B9A\u7684\u4F3A\u670D\u89D2\u5EA6\uFF08\u4EE5\u5EA6\u4E3A\u5355\u4F4D\uFF09\u3002\n# #   \u9ED8\u8BA4\u542F\u52A8\u65F6\u4E0D\u53D1\u9001\u4EFB\u4F55\u4FE1\u53F7\u3002\n# #initial_pulse_width:\n# #   \u521D\u59CB\u8BBE\u5B9A\u7684\u8109\u5BBD\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\uFF08\u53EA\u6709\u5728\u672A\u8BBE\u5B9Ainitial_angle\u65F6\u624D\u6709\u6548\uFF09\u3002\n# #   \u9ED8\u8BA4\u542F\u52A8\u65F6\u4E0D\u53D1\u9001\u4EFB\u4F55\u4FE1\u53F7\u3002\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},94551:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var o=t(39546);let r={},i=o.createContext(r);function s(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);