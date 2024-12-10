"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["13272"],{24489:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>_,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/cfg","title":"Klipper\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-cdy/fly-cdy-v3","slug":"/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/cfg","permalink":"/fly-docs-next/ja/docs/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1725931817000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Klipper\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u30DE\u30B6\u30FC\u30DC\u30FC\u30C9\u306E\u914D\u7DDA","permalink":"/fly-docs-next/ja/docs/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/wiring"},"next":{"title":"BL\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3001\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044","permalink":"/fly-docs-next/ja/docs/ProductDoc/MainBoard/fly-cdy/fly-cdy-v3/bl"}}'),r=t("52676"),p=t("79938");let s={sidebar_position:5,sidebar_label:"Klipper\u53C2\u8003\u914D\u7F6E"},_="Klipper\u53C2\u8003\u914D\u7F6E",o={},a=[];function c(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,p.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"Klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:"[stepper_x]\nstep_pin: PE5\ndir_pin: PC0\nenable_pin: !PC1\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: ^PC7        # X-MAX PC6\nposition_endstop: 0\nposition_max: 200\nhoming_speed: 50\n\n[stepper_y]\nstep_pin: PE4\ndir_pin: !PC13\nenable_pin: !PC14\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: ^PD11       # Y-MAX PD10\nposition_endstop: 0\nposition_max: 200\nhoming_speed: 50\n\n[stepper_z]\nstep_pin: PE3\ndir_pin: PB7\nenable_pin: !PB8\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: ^PB10       # Z-MAX PB11\nposition_endstop: 0.5\nposition_max: 200\n\n[extruder]\nstep_pin: PE2\ndir_pin: PD6\nenable_pin: !PD7\nmicrosteps: 16\nrotation_distance: 33.500\nnozzle_diameter: 0.400\nfilament_diameter: 1.750\nheater_pin: PD12\nsensor_pin: PA3\nsensor_type: EPCOS 100K B57560G104F\ncontrol: pid\npid_Kp: 22.2\npid_Ki: 1.08\npid_Kd: 114\nmin_temp: 0\nmax_temp: 350\n\n#[extruder1]\n#step_pin: PE1\n#dir_pin: !PD3\n#enable_pin: !PD4\n#heater_pin: PD13\n#sensor_pin: PC4\n\n#[extruder2]\n#step_pin: PE0\n#dir_pin: !PA15\n#enable_pin: !PD0\n#heater_pin: PD14\n#sensor_pin: PC5\n\n[heater_bed]\nheater_pin: PB0\nsensor_type: Generic 3950\nsensor_pin: PB1\ncontrol: watermark\nmin_temp: 0\nmax_temp: 130\n\n#FAN0\n[fan]\npin: PA0\n\n#FAN1\n#[heater_fan fan1]\n#pin: PA1\n\n#FAN2\n#[heater_fan fan2]\n#pin: PA2\n\n\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_Klipper_firmware_12345-if00\n\n[printer]\nkinematics: cartesian\nmax_velocity: 300\nmax_accel: 3000\nmax_z_velocity: 5\nmax_z_accel: 100\n\n\n########################################\n# TMC2209 configuration\n########################################\n\n#[tmc2209 stepper_x]\n#uart_pin: PC15\n#run_current: 0.800\n#diag_pin: PC7\n#stealthchop_threshold: 999999\n\n#[tmc2209 stepper_y]\n#uart_pin: PA8\n#run_current: 0.800\n#diag_pin: PC6\n#stealthchop_threshold: 999999\n\n#[tmc2209 stepper_z]\n#uart_pin: PB6\n#run_current: 0.800\n#diag_pin: PD11\n#stealthchop_threshold: 999999\n\n#[tmc2209 extruder]\n#uart_pin: PD5\n#run_current: 0.600\n#diag_pin: PD10\n#stealthchop_threshold: 999999\n\n#[tmc2209 extruder1]\n#uart_pin: PD1\n#run_current: 0.600\n#diag_pin: PB10\n#stealthchop_threshold: 999999\n\n#[tmc2209 extruder2]\n#uart_pin: PE9\n#run_current: 0.600\n#diag_pin: PB11\n#stealthchop_threshold: 999999\n\n########################################\n# TMC5160 configuration\n########################################\n\n#[tmc5160 stepper_x]\n#cs_pin: PC15\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PC7\n#stealthchop_threshold: 999999\n\n#[tmc5160 stepper_y]\n#cs_pin: PA8\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PC6\n#stealthchop_threshold: 999999\n\n#[tmc5160 stepper_z]\n#cs_pin: PB6\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PD11\n#stealthchop_threshold: 999999\n\n#[tmc5160 extruder]\n#cs_pin: PD5\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PD10\n#stealthchop_threshold: 999999\n\n#[tmc5160 extruder1]\n#cs_pin: PD1\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PB10\n#stealthchop_threshold: 999999\n\n#[tmc5160 extruder2]\n#cs_pin: PE9\n#spi_bus: spi3\n#run_current: 0.800\n#diag1_pin: PB11\n#stealthchop_threshold: 999999\n\n########################################\n# Accelerometer (ADXL345) pins\n########################################\n\n## SCK=PA5, MISO=PA6, MOSI=PA7\n#[adxl345]\n#cs_pin: PE7\n#spi_bus: spi1\n\n########################################\n# EXP1 / EXP2 (display) pins\n########################################\n\n[board_pins]\naliases:\n    # EXP1 header\n    EXP1_1=<NC>, EXP1_3=PB2,  EXP1_5=PE15, EXP1_7=PA13,  EXP1_9=<GND>,\n    EXP1_2=PA9,  EXP1_4=PA10, EXP1_6=PE14, EXP1_8=PA14,  EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PA6,  EXP2_3=PD8,  EXP2_5=PD9,  EXP2_7=PE13,  EXP2_9=<GND>,\n    EXP2_2=PA5,  EXP2_4=PA4,  EXP2_6=PA7,  EXP2_8=<RST>, EXP2_10=<NC>,\n\n\n########################################\n#Mini 12864 LCD\n########################################\n#[display]\n#lcd_type: uc1701\n#cs_pin: EXP1_3\n#a0_pin: EXP1_4\n#rst_pin: EXP1_5\n#contrast: 63\n#encoder_pins: ^EXP2_5, ^!EXP2_3\n#click_pin: ^!EXP1_2\n#spi_bus: spi1\n\n#####\u9002\u7528\u4E8EFLY Mini12864\n#[neopixel fly_mini12864]\n#pin: EXP1_6\n#chain_count: 3\n#initial_RED: 0.1\n#initial_GREEN: 0.5\n#initial_BLUE: 0.0\n#color_order: RGB\n\n"})})]})}function d(n={}){let{wrapper:e}={...(0,p.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return _},a:function(){return s}});var i=t(75271);let r={},p=i.createContext(r);function s(n){let e=i.useContext(p);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function _(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(p.Provider,{value:e},n.children)}}}]);