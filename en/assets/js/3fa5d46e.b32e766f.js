"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["69425"],{69048:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen7/linux","title":"Ethernet Cable Usage Tutorial","description":"The screen firmware needs to be manually updated","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen7/linux.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen7","slug":"/ProductDoc/Screen/fly-wiscreen7/linux","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/linux","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen7/linux.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Tutorial for Using Ethernet Cables with Raspberry Pi and Other Host Computers"},"sidebar":"tutorialSidebar","previous":{"title":"WIFI Connection and Klipper Configuration","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/klipper"},"next":{"title":"Custom Screen UI - Preliminary Preparation","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/source_code"}}'),i=t("85893"),s=t("50065");let o={sidebar_position:5,sidebar_label:"Tutorial for Using Ethernet Cables with Raspberry Pi and Other Host Computers"},c="Ethernet Cable Usage Tutorial",a={},l=[{value:"Screen Firmware Download",id:"screen-firmware-download",level:2},{value:"Ethernet Cable Wiring",id:"ethernet-cable-wiring",level:2},{value:"System Packages Suitable for FLY Host Computers",id:"system-packages-suitable-for-fly-host-computers",level:2},{value:"Install Services",id:"install-services",level:2},{value:"Configure Network",id:"configure-network",level:2},{value:"Improve WIFI Priority",id:"improve-wifi-priority",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:r,ImageView:o}=n;return r||u("Button",!0),o||u("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ethernet-cable-usage-tutorial",children:"Ethernet Cable Usage Tutorial"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The screen firmware needs to be manually updated"})}),"\n",(0,i.jsx)(n.h2,{id:"screen-firmware-download",children:"Screen Firmware Download"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/wiscreen/wiscreen7/Cable/update.img",children:"Click to download the screen firmware"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A memory card with a capacity of no more than 32GB is required, and the transfer speed of the TF card must be class10 or above. It is recommended to use a TF card from brands like SanDisk."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ethernet-cable-wiring",children:"Ethernet Cable Wiring"}),"\n",(0,i.jsx)(o,{image:t(79288).Z,size:"100%",align:"left"}),"\n",(0,i.jsx)(n.h2,{id:"system-packages-suitable-for-fly-host-computers",children:"System Packages Suitable for FLY Host Computers"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Suitable for C8 PI_V2 PI GEMINI series"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/IMG/Beta/FLY_OS%E7%BD%91%E7%BA%BF%E5%B1%8F%E7%B3%BB%E7%BB%9F.img.xz",children:"Download the system package"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-services",children:"Install Services"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Other host computers need to install services by themselves"})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(n.p,{children:"The installation process requires an internet connection"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install isc-dhcp-server\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configure-network",children:"Configure Network"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This tutorial will occupy the host computer's Ethernet port, and only the connection to the screen can be used."}),"\n",(0,i.jsx)(n.li,{children:"If not needed, just completely delete the modified and added configurations below."}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"/etc/network/interfaces.d/eth0"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"auto eth0\niface eth0 inet static\naddress 192.168.251.100\nnetmask 255.255.255.0\nbroadcast 192.168.251.255\nnetwork 192.168.251.0\ngateway 192.168.251.1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"/etc/default/isc-dhcp-server"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Defaults for isc-dhcp-server (sourced by /etc/init.d/isc-dhcp-server)\n\n# Path to dhcpd\'s config file (default: /etc/dhcp/dhcpd.conf).\n#DHCPDv4_CONF=/etc/dhcp/dhcpd.conf\n#DHCPDv6_CONF=/etc/dhcp/dhcpd6.conf\n\n# Path to dhcpd\'s PID file (default: /var/run/dhcpd.pid).\n#DHCPDv4_PID=/var/run/dhcpd.pid\n#DHCPDv6_PID=/var/run/dhcpd6.pid\n\n# Additional options to start dhcpd with.\n#       Don\'t use options -cf or -pf here; use DHCPD_CONF/ DHCPD_PID instead\n#OPTIONS=""\n\n# On what interfaces should the DHCP server (dhcpd) serve DHCP requests?\n#       Separate multiple interfaces with spaces, e.g. "eth0 eth1".\nINTERFACESv4="eth0"\n#INTERFACESv4="eth0"\nINTERFACESv6=""\n#INTERFACES="eth0"\n\nINTERFACES="eth0"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"/etc/dhcp/dhcpd.conf"}),", add the following content at the end"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# ddns-update-style none;\nsubnet 192.168.251.0 netmask 255.255.255.0 {\n    range 192.168.251.100 192.168.251.200;\n    option routers 192.168.251.1;\n    option domain-name-servers 8.8.8.8, 8.8.4.4; # Google Public DNS as an example\n    default-lease-time 600; # Default lease time in seconds\n    max-lease-time 7200;    # Maximum lease time in seconds\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the system first, then execute the following restart service"}),"\n",(0,i.jsx)(n.p,{children:"Or restart the network service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart NetworkManager\n"})}),"\n",(0,i.jsx)(n.p,{children:"This operation will disconnect and reconnect the internet"}),"\n",(0,i.jsx)(n.p,{children:"Restart the service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart isc-dhcp-server\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The local IP address should be ",(0,i.jsx)(n.code,{children:"192.168.251.100"})]}),"\n",(0,i.jsx)(n.h2,{id:"improve-wifi-priority",children:"Improve WIFI Priority"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This command is to improve network priority. If it is not added, it will not be able to connect to the internet and download things properly!!!"}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please add the following instructions in ",(0,i.jsx)(n.code,{children:"/etc/rc.local"})," on the host computer"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ip route del default && sudo ip route add default via $(ip route show dev wlan0 | grep 'default via' | awk 'NR==1 {print $3}') dev wlan0\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79288:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/fpc-2b5a9fe2c0b6954dcfae93b9c9995ebc.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(67294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);