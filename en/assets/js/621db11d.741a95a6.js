"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["39854"],{70414:function(t,e,s){s.r(e),s.d(e,{default:()=>m});var a=s("74132");s("39546");var r=s("54461"),l=s("98366"),o=s("11056"),u=s("98508"),n=s("4574"),i=s("42504"),c=s("42827"),h=s("73994");let p={authorListItem:"authorListItem_pGbQ"};function g(t){let{author:e}=t;return(0,a.jsx)("li",{className:p.authorListItem,children:(0,a.jsx)(h.Z,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,a.jsx)("section",{className:(0,r.Z)("margin-vert--lg",p.authorsListSection),children:(0,a.jsx)("ul",{children:e.map(t=>(0,a.jsx)(g,{author:t},t.key))})})}function m(t){let{authors:e,sidebar:s}=t,h=(0,u.HV)();return(0,a.jsxs)(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogAuthorsListPage),children:[(0,a.jsx)(l.d,{title:h}),(0,a.jsx)(i.Z,{tag:"blog_authors_list"}),(0,a.jsxs)(n.Z,{sidebar:s,children:[(0,a.jsx)(c.Z,{as:"h1",children:h}),(0,a.jsx)(d,{authors:e})]})]})}},98508:function(t,e,s){s.d(e,{HV:function(){return o},Wi:function(){return l}}),s(74132),s(39546);var a=s(44688),r=s(51042);function l(t){let e=function(){let{selectMessage:t}=(0,r.c)();return e=>t(e,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}let o=()=>(0,a.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})}}]);