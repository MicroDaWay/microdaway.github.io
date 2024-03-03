"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9843],{1532:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=r(5893),t=r(1151);const d={sidebar_position:1},i="Rest",l={id:"Rest+Ajax/Rest",title:"Rest",description:"- \u6211\u4eec\u4e4b\u524d\u7f16\u5199\u7684\u670d\u52a1\u5668\u90fd\u662f\u4f20\u7edf\u7684\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u7684\u7ed3\u6784\u662f\u57fa\u4e8e MVC \u6a21\u5f0f",source:"@site/docs/Rest+Ajax/Rest.md",sourceDirName:"Rest+Ajax",slug:"/Rest+Ajax/Rest",permalink:"/docs/Rest+Ajax/Rest",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rest+Ajax",permalink:"/docs/category/restajax"},next:{title:"Ajax",permalink:"/docs/Rest+Ajax/Ajax"}},a={},c=[];function o(n){const e={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"rest",children:"Rest"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6211\u4eec\u4e4b\u524d\u7f16\u5199\u7684\u670d\u52a1\u5668\u90fd\u662f\u4f20\u7edf\u7684\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u7684\u7ed3\u6784\u662f\u57fa\u4e8e MVC \u6a21\u5f0f","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Model -- \u6570\u636e\u6a21\u578b"}),"\n",(0,s.jsx)(e.li,{children:"View -- \u89c6\u56fe\uff0c\u7528\u6765\u5448\u73b0"}),"\n",(0,s.jsx)(e.li,{children:"Controller -- \u63a7\u5236\u5668\uff0c\u590d\u6742\u52a0\u8f7d\u6570\u636e\u5e76\u9009\u62e9\u89c6\u56fe\u6765\u5448\u73b0\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"\u4f20\u7edf\u7684\u670d\u52a1\u5668\u662f\u76f4\u63a5\u4e3a\u5ba2\u6237\u7aef\u8fd4\u56de\u4e00\u4e2a\u9875\u9762"}),"\n",(0,s.jsx)(e.li,{children:"\u4f46\u662f\u4f20\u7edf\u7684\u670d\u52a1\u5668\u5e76\u4e0d\u80fd\u9002\u7528\u4e8e\u73b0\u5728\u7684\u5e94\u7528\u573a\u666f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u73b0\u5728\u7684\u5e94\u7528\u573a\u666f\uff0c\u4e00\u4e2a\u5e94\u7528\u901a\u5e38\u90fd\u4f1a\u6709\u591a\u4e2a\u5ba2\u6237\u7aef(client)\u5b58\u5728","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"web \u7aef \u79fb\u52a8\u7aef(app) pc \u7aef"}),"\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u670d\u52a1\u5668\u76f4\u63a5\u8fd4\u56de html \u9875\u9762\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u5c31\u53ea\u80fd\u4e3a web \u7aef\u63d0\u4f9b\u670d\u52a1"}),"\n",(0,s.jsx)(e.li,{children:"\u5176\u4ed6\u7c7b\u578b\u7684\u5ba2\u6237\u7aef\u8fd8\u9700\u8981\u5355\u72ec\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u8fd9\u6837\u5c31\u63d0\u9ad8\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u7684\u6210\u672c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1f","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f20\u7edf\u7684\u670d\u52a1\u5668\u9700\u8981\u505a\u4e24\u4ef6\u4e8b\u60c5\uff0c\u7b2c\u4e00\u4e2a\u52a0\u8f7d\u6570\u636e\uff0c\u7b2c\u4e8c\u4e2a\u8981\u5c06\u6a21\u578b\u6e32\u67d3\u8fdb\u89c6\u56fe"}),"\n",(0,s.jsx)(e.li,{children:"\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u5c06\u6e32\u67d3\u89c6\u56fe\u7684\u529f\u80fd\u4ece\u670d\u52a1\u5668\u4e2d\u5265\u79bb\u51fa\u6765"}),"\n",(0,s.jsx)(e.li,{children:"\u670d\u52a1\u5668\u53ea\u8d1f\u8d23\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u6570\u636e\uff0c\u6e32\u67d3\u89c6\u56fe\u7684\u5de5\u4f5c\u7531\u5ba2\u6237\u7aef\u81ea\u884c\u5b8c\u6210"}),"\n",(0,s.jsx)(e.li,{children:"\u5206\u79bb\u4ee5\u540e\uff0c\u670d\u52a1\u5668\u53ea\u63d0\u4f9b\u6570\u636e\uff0c\u4e00\u4e2a\u670d\u52a1\u5668\u53ef\u4ee5\u540c\u65f6\u4e3a\u591a\u79cd\u5ba2\u6237\u7aef\u63d0\u4f9b\u670d\u52a1"}),"\n",(0,s.jsx)(e.li,{children:"\u540c\u65f6\u5c06\u89c6\u56fe\u6e32\u67d3\u7684\u5de5\u4f5c\u4ea4\u7ed9\u5ba2\u6237\u7aef\u4ee5\u540e\uff0c\u7b80\u5316\u4e86\u670d\u52a1\u5668\u4ee3\u7801\u7684\u7f16\u5199"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Rest","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"REpresentational State Transfer"}),"\n",(0,s.jsx)(e.li,{children:"\u8868\u793a\u5c42\u72b6\u6001\u7684\u4f20\u8f93"}),"\n",(0,s.jsx)(e.li,{children:"Rest \u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u79cd\u670d\u52a1\u5668\u7684\u8bbe\u8ba1\u98ce\u683c"}),"\n",(0,s.jsx)(e.li,{children:"\u5b83\u7684\u4e3b\u8981\u7279\u70b9\u5c31\u662f\uff0c\u670d\u52a1\u5668\u53ea\u8fd4\u56de\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4f20\u8f93\u6570\u636e\u65f6\u901a\u5e38\u4f1a\u4f7f\u7528 JSON \u4f5c\u4e3a\u6570\u636e\u683c\u5f0f"}),"\n",(0,s.jsxs)(e.li,{children:["\u8bf7\u6c42\u7684\u65b9\u6cd5\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"GET \u52a0\u8f7d\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"POST \u65b0\u5efa\u6216\u6dfb\u52a0\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"PUT \u6dfb\u52a0\u6216\u4fee\u6539\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"PATCH \u4fee\u6539\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"DELETE \u5220\u9664\u6570\u636e"}),"\n",(0,s.jsx)(e.li,{children:"OPTION \u7531\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u9001\uff0c\u68c0\u67e5\u8bf7\u6c42\u7684\u4e00\u4e9b\u6743\u9650"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["API(\u63a5\u53e3) Endpoint(\u7aef\u70b9)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"GET /user"}),"\n",(0,s.jsx)(e.li,{children:"POST /user"}),"\n",(0,s.jsxs)(e.li,{children:["DELETE /user/",":id"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6790\u8868\u5355\u683c\u5f0f\u8bf7\u6c42\u4f53\u7684\u4e2d\u95f4\u4ef6 x-www-form-urlencoded","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"app.use(express.urlencoded({ extended: true }))"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6790 json \u683c\u5f0f\u8bf7\u6c42\u4f53\u7684\u4e2d\u95f4\u4ef6 raw -> JSON","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"app.use(express.json())"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const express = require('express')\r\n\r\nlet STUDENT = [\r\n  {\r\n    id: '1',\r\n    name: '\u5b59\u609f\u7a7a',\r\n    age: 18,\r\n    gender: '\u7537',\r\n    address: '\u82b1\u679c\u5c71',\r\n  },\r\n  {\r\n    id: '2',\r\n    name: '\u732a\u516b\u6212',\r\n    age: 28,\r\n    gender: '\u7537',\r\n    address: '\u9ad8\u8001\u5e84',\r\n  },\r\n  {\r\n    id: '3',\r\n    name: '\u6c99\u548c\u5c1a',\r\n    age: 38,\r\n    gender: '\u7537',\r\n    address: '\u6d41\u6c99\u6cb3',\r\n  },\r\n]\r\n\r\nconst app = express()\r\n// \u89e3\u6790\u8868\u5355\u683c\u5f0f\u8bf7\u6c42\u4f53\u7684\u4e2d\u95f4\u4ef6 x-www-form-urlencoded\r\napp.use(express.urlencoded({ extended: true }))\r\n// \u89e3\u6790json\u683c\u5f0f\u8bf7\u6c42\u4f53\u7684\u4e2d\u95f4\u4ef6 raw -> JSON\r\napp.use(express.json())\r\n\r\n// \u83b7\u53d6\u6240\u6709\u5b66\u751f\u4fe1\u606f\u7684\u8def\u7531\r\napp.get('/students', (req, res) => {\r\n  res.send({\r\n    status: 'ok',\r\n    data: STUDENT,\r\n  })\r\n})\r\n\r\n// \u6839\u636eid\u83b7\u53d6\u67d0\u4e2a\u5b66\u751f\u4fe1\u606f\u7684\u8def\u7531\r\napp.get('/students/:id', (req, res) => {\r\n  const id = req.params.id\r\n  const student = STUDENT.find((item) => item.id === id)\r\n\r\n  if (student) {\r\n    res.send({\r\n      status: 'ok',\r\n      data: student,\r\n    })\r\n  } else {\r\n    res.status(403).send({\r\n      status: 'error',\r\n      data: '\u5b66\u751fid\u4e0d\u5b58\u5728',\r\n    })\r\n  }\r\n})\r\n\r\n// \u6dfb\u52a0\u5b66\u751f\u7684\u8def\u7531\r\napp.post('/students', (req, res) => {\r\n  const { name, age, gender, address } = req.body\r\n  const id = STUDENT.length > 0 ? +STUDENT.at(-1).id + 1 + '' : '1'\r\n\r\n  const student = {\r\n    id,\r\n    name,\r\n    age: +age,\r\n    gender,\r\n    address,\r\n  }\r\n\r\n  STUDENT.push(student)\r\n\r\n  res.send({\r\n    status: 'ok',\r\n    data: student,\r\n  })\r\n})\r\n\r\n// \u4fee\u6539\u5b66\u751f\u4fe1\u606f\u7684\u8def\u7531\r\napp.put('/students/:id', (req, res) => {\r\n  const id = req.params.id\r\n  const { name, age, gender, address } = req.body\r\n  const student = STUDENT.find((item) => item.id === id)\r\n\r\n  if (student) {\r\n    student.name = name\r\n    student.age = +age\r\n    student.gender = gender\r\n    student.address = address\r\n\r\n    res.send({\r\n      status: 'ok',\r\n      data: student,\r\n    })\r\n  } else {\r\n    res.status(403).send({\r\n      status: 'error',\r\n      data: '\u5b66\u751fid\u4e0d\u5b58\u5728',\r\n    })\r\n  }\r\n})\r\n\r\n// \u6839\u636eid\u5220\u9664\u5b66\u751f\u7684\u8def\u7531\r\napp.delete('/students/:id', (req, res) => {\r\n  const id = req.params.id\r\n  const student = STUDENT.find((item) => item.id === id)\r\n\r\n  if (student) {\r\n    STUDENT = STUDENT.filter((item) => item.id !== id)\r\n\r\n    res.send({\r\n      status: 'ok',\r\n      data: student,\r\n    })\r\n  } else {\r\n    res.status(403).send({\r\n      status: 'error',\r\n      data: '\u5b66\u751fid\u4e0d\u5b58\u5728',\r\n    })\r\n  }\r\n})\r\n\r\napp.listen(3000, () => {\r\n  console.log('\u670d\u52a1\u5668\u542f\u52a8\u6210\u529f')\r\n})\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>l,a:()=>i});var s=r(7294);const t={},d=s.createContext(t);function i(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);