"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["63978"],{77639:function(e,t,l){l.r(t),l.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>j,assets:()=>c,toc:()=>x,frontMatter:()=>r});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/timedatectl","title":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","description":"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0432\u0435\u0440\u0441\u0438\u044E FLY-OS 3.3.4 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 FLY, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C FLY-Tools \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u044F\u0441\u0430 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/timedatectl.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/timedatectl","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/timedatectl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/timedatectl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732242947000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u043F\u0435\u0447\u0430\u0442\u0438 \u0444\u043B\u0435\u0448\u043A\u0438","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/usb_printing"},"next":{"title":"\u041C\u0435\u0442\u043E\u0434 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/backup"}}'),n=l("52676"),i=l("79938");let r={sidebar_position:4},d="\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",c={},x=[{value:"\u0410\u0437\u0438\u044F",id:"\u0430\u0437\u0438\u044F",level:2},{value:"\u0410\u0444\u0440\u0438\u043A\u0430",id:"\u0430\u0444\u0440\u0438\u043A\u0430",level:2},{value:"\u0415\u0432\u0440\u043E\u043F\u0430",id:"\u0435\u0432\u0440\u043E\u043F\u0430",level:2},{value:"\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430",id:"\u0441\u0435\u0432\u0435\u0440\u043D\u0430\u044F-\u0430\u043C\u0435\u0440\u0438\u043A\u0430",level:2},{value:"\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",id:"\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C-\u0447\u0430\u0441\u043E\u0432\u043E\u0439-\u043F\u043E\u044F\u0441-\u0441\u0438\u0441\u0442\u0435\u043C\u044B",children:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"})}),"\n",(0,n.jsx)(t.p,{children:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0432\u0435\u0440\u0441\u0438\u044E FLY-OS 3.3.4 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 FLY, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C FLY-Tools \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u044F\u0441\u0430 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E.\n\u0414\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo timedatectl set-timezone <TIMEZONE>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 ",(0,n.jsx)(t.code,{children:"<TIMEZONE>"})," \u043C\u0435\u0441\u0442\u043D\u044B\u043C \u0447\u0430\u0441\u043E\u0432\u044B\u043C \u043F\u043E\u044F\u0441\u043E\u043C. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0447\u0430\u0441\u043E\u0432\u044B\u0445 \u043F\u043E\u044F\u0441\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 ",(0,n.jsx)(t.a,{href:"http://www.i18nguy.com/unicode/tz.html",children:"http://www.i18nguy.com/unicode/tz.html"}),".\n\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 UTC. \u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C: ",(0,n.jsx)(t.code,{children:"sudo timedatectl set-timezone \\+00\\:00"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u041F\u0440\u0438\u043C\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u044F\u0441\u0430utc Europe/Moscow:",(0,n.jsx)(t.code,{children:"sudo timedatectl set-timezoneEurope/Moscow"}),"\n\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u0442\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435."]}),"\n",(0,n.jsx)(t.h2,{id:"\u0430\u0437\u0438\u044F",children:"\u0410\u0437\u0438\u044F"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Amman"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0410\u043C\u0430\u043D)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Beirut"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0411\u0435\u0440\u043B\u0438\u043D)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Jerusalem"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0418\u0437\u0440\u0430\u0438\u043B\u044C\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0419\u0435\u0440\u0443\u0441\u0430\u043B\u0438\u043C)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baghdad"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0411\u0430\u0433\u0434\u0430\u0434"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuwait"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u0443\u0432\u0435\u0439\u0442"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tehran"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0418\u0440\u0430\u043D\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0414\u0435-\u0425\u0430\u0447\u0430\u043D)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baku"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0411\u0430\u043A\u0443"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tbilisi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0422\u0431\u0438\u043B\u0438\u0441\u0438"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yerevan"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0415\u0440\u0435\u0432\u0430\u043D"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Dubai"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0414\u0443\u0431\u0430\u0438"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kabul"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041A\u0430\u0431\u0443\u043B)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Karachi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u0430\u0440\u0430\u0447\u0438"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Oral"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0423\u0440\u0430\u043B\u044C\u0441\u043A\u0438\u0439"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yekaterinburg"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0429\u0435\u043B\u043A\u043E\u0432\u043E-\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041F\u043E\u0441\u0430\u0434\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Calcutta"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u0430\u043B\u044C\u043A\u0443\u0442\u0442\u0430"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Colombo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u043E\u043B\u043E\u043C\u0431\u043E"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Katmandu"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041D\u0435\u043F\u0430\u043B\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041A\u0430\u0442\u0430\u043C\u0434\u0443)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Almaty"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0410\u043B\u043C\u0430\u0442\u044B"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Rangoon"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0411\u0438\u0440\u043C\u0430\u043D\u0441\u043A\u0438\u0435 \u0447\u0430\u0441\u044B (\u0423\u0431\u0435\u0433\u0434\u0430\u0440\u0430)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Krasnoyarsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Bangkok"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0411\u0443\u0434\u0430\u043F\u0435\u0448\u0442"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Shanghai"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041F\u0435\u043A\u0438\u043D)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Hong_Kong"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0413\u043E\u043D\u043A\u043E\u043D\u0433"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Irkutsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0418\u0440\u043A\u0443\u0442\u0441\u043A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuala_Lumpur"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u044E\u043D\u0443\u043D-\u041B\u0443\u043F\u0443\u0440"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0430\u0444\u0440\u0438\u043A\u0430",children:"\u0410\u0444\u0440\u0438\u043A\u0430"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Windhoek"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0423\u043D\u0434\u0445\u043E\u0439\u043A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Brazzaville"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043B\u044C)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Cairo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041Aairo)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Harare"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0425\u0430\u0440\u0430\u0440\u0430)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Nairobi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043Day \u0447\u0441\u0435\u0441\u0442\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041D\u0430\u0439\u0440\u043E\u0431\u0438)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0435\u0432\u0440\u043E\u043F\u0430",children:"\u0415\u0432\u0440\u043E\u043F\u0430"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/London"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041A\u043D\u0438\u0436\u043D\u0430\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u044F \u0413\u0440\u0438\u043D\u043D\u0438\u044F\u0433\u0441\u0442\u0430\u0443\u043D\u0434\u0441 (\u041B\u043E\u043D\u0434\u043E\u043D)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Amsterdam"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0435\u043D\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Belgrade"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0435\u043D\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0411\u0435\u043B\u0433\u0440\u0430\u0434)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Brussels"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0435\u043D\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0411\u0440\u044E\u043A\u0441\u0435\u043B\u044C)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Sarajevo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0435\u043D\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0421\u0430\u0440\u0430\u0435\u0432\u043E)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Athens"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0413\u0440\u0435\u0446\u0438\u0438 (\u0410\u0444\u0440\u0438\u043A\u0430)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Helsinki"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u0438 (\u0425\u0435\u043B\u044C\u0441\u0438\u043D\u043A\u0438)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Minsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041C\u0438\u043D\u0441\u043A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Moscow"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0441\u0435\u0432\u0435\u0440\u043D\u0430\u044F-\u0430\u043C\u0435\u0440\u0438\u043A\u0430",children:"\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"America/New_York"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u043C\u044F\u0442\u0435\u0436\u043D\u0430\u044F \u0447\u0430\u0441\u043E\u0432\u043E\u0430\u044F \u0447\u0435\u0440\u0442\u0430 (\u041D\u044C\u044E-\u0419\u043E\u0440\u043A)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"America/Los_Angeles"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0417\u0430\u043F\u0430\u0434\u043D\u043E\u043A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",children:"\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Adelaide"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0410\u0434\u043B\u0435\u0440\u0434\u0435\u0438\u0434"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Darwin"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0414\u0430\u0440\u0432\u0438\u043D"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Brisbane"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0411\u0440\u0438\u0437\u0431\u0435\u043D"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Hobart"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0425\u043E\u0431\u0435\u0440\u0442"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Sydney"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u0421\u0438\u0434\u043D\u0435\u0439"})]})]})]})]})}function j(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},79938:function(e,t,l){l.d(t,{Z:function(){return d},a:function(){return r}});var s=l(75271);let n={},i=s.createContext(n);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);