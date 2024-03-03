"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7912],{8848:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=e(5893),l=e(1151);const i={sidebar_position:1},c="Node.js \u7b80\u4ecb",o={id:"Node.js/Introduction",title:"Node.js \u7b80\u4ecb",description:"\u7b80\u4ecb",source:"@site/docs/Node.js/Introduction.md",sourceDirName:"Node.js",slug:"/Node.js/Introduction",permalink:"/docs/Node.js/Introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docs/category/nodejs"},next:{title:"\u6a21\u5757\u5316",permalink:"/docs/Node.js/Module"}},t={},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:2},{value:"Promise",id:"promise",level:2},{value:"Promise",id:"promise-1",level:2},{value:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",id:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",level:2},{value:"\u624b\u5199 Promise",id:"\u624b\u5199-promise",level:2},{value:"async \u548c await",id:"async-\u548c-await",level:2}];function d(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"nodejs-\u7b80\u4ecb",children:"Node.js \u7b80\u4ecb"}),"\n",(0,s.jsx)(r.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Node.js","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd0\u884c\u5728\u670d\u52a1\u5668\u7aef\u7684 js"}),"\n",(0,s.jsx)(r.li,{children:"\u7528\u6765\u7f16\u5199\u670d\u52a1\u5668"}),"\n",(0,s.jsxs)(r.li,{children:["\u7279\u70b9\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5355\u7ebf\u7a0b\u3001\u5f02\u6b65\u3001\u975e\u963b\u585e"}),"\n",(0,s.jsx)(r.li,{children:"\u7edf\u4e00 API"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5e38\u7528\u547d\u4ee4","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["node -v","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u67e5\u770b node \u7684\u7248\u672c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm \u547d\u4ee4","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["nvm version","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u67e5\u770b nvm \u7684\u7248\u672c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm list","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u67e5\u770b\u6240\u6709\u5b89\u88c5\u7684 node \u7248\u672c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm install \u7248\u672c\u53f7","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684 node"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm install latest","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 node"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm install lts","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5b89\u88c5 node \u7684\u957f\u671f\u7ef4\u62a4\u7248"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["nvm use \u7248\u672c\u53f7","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u6307\u5b9a\u8981\u4f7f\u7528\u7684 node \u7248\u672c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u914d\u7f6e nvm \u7684\u955c\u50cf\u670d\u52a1\u5668","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["nvm node_mirror ",(0,s.jsx)(r.a,{href:"https://npmmirror.com/mirrors/node/",children:"https://npmmirror.com/mirrors/node/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["node.js \u548c JavaScript \u6709\u4ec0\u4e48\u533a\u522b","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"ECMAScript (node \u6709)\uff0cDOM (node \u6ca1\u6709)\uff0cBOM (node \u6ca1\u6709)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u5f02\u6b65",children:"\u5f02\u6b65"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u8fdb\u7a0b\u548c\u7ebf\u7a0b","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u8fdb\u7a0b(\u5382\u623f)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7a0b\u5e8f\u7684\u8fd0\u884c\u7684\u73af\u5883"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u7ebf\u7a0b(\u5de5\u4eba)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7ebf\u7a0b\u662f\u5b9e\u9645\u8fdb\u884c\u8fd0\u7b97\u7684\u4e1c\u897f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u540c\u6b65","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u901a\u5e38\u60c5\u51b5\u4ee3\u7801\u90fd\u662f\u81ea\u4e0a\u5411\u4e0b\u4e00\u884c\u4e00\u884c\u6267\u884c\u7684"}),"\n",(0,s.jsx)(r.li,{children:"\u524d\u8fb9\u7684\u4ee3\u7801\u4e0d\u6267\u884c\u540e\u8fb9\u7684\u4ee3\u7801\u4e5f\u4e0d\u4f1a\u6267\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u540c\u6b65\u7684\u4ee3\u7801\u6267\u884c\u4f1a\u51fa\u73b0\u963b\u585e\u7684\u60c5\u51b5"}),"\n",(0,s.jsx)(r.li,{children:"\u4e00\u884c\u4ee3\u7801\u6267\u884c\u6162\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u7a0b\u5e8f\u7684\u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u51b3\u540c\u6b65\u95ee\u9898\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["java python","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7\u591a\u7ebf\u7a0b\u6765\u89e3\u51b3"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["node.js","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7\u5f02\u6b65\u65b9\u5f0f\u6765\u89e3\u51b3"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5f02\u6b65","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4e00\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u7684\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(r.li,{children:["\u5f02\u6b65\u7684\u95ee\u9898\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5f02\u6b65\u7684\u4ee3\u7801\u65e0\u6cd5\u901a\u8fc7 return \u6765\u8bbe\u7f6e\u8fd4\u56de\u503c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u7279\u70b9\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4e0d\u4f1a\u963b\u585e\u5176\u4ed6\u4ee3\u7801\u7684\u6267\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u9700\u8981\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u7ed3\u679c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u57fa\u4e8e\u56de\u8c03\u51fd\u6570\u7684\u5f02\u6b65\u5e26\u6765\u7684\u95ee\u9898","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u5dee"}),"\n",(0,s.jsx)(r.li,{children:"\u53ef\u8c03\u8bd5\u6027\u5dee"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u51b3\u95ee\u9898\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u9700\u8981\u4e00\u4e2a\u4e1c\u897f\uff0c\u53ef\u4ee5\u4ee3\u66ff\u56de\u8c03\u51fd\u6570\u6765\u7ed9\u6211\u4eec\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,s.jsxs)(r.li,{children:["Promise \u6a2a\u7a7a\u51fa\u4e16","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Promise \u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u5bf9\u8c61"}),"\n",(0,s.jsx)(r.li,{children:"Promise \u5b58\u50a8\u6570\u636e\u7684\u65b9\u5f0f\u6bd4\u8f83\u7279\u6b8a\uff0c\u8fd9\u79cd\u7279\u6b8a\u65b9\u5f0f\u4f7f\u5f97 Promise \u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u5f02\u6b65\u8c03\u7528\u7684\u6570\u636e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"function sum(a, b, cb) {\r\n  // const begin = Date.now()\r\n  // while (Date.now() - begin < 5000) {}\r\n\r\n  setTimeout(() => {\r\n    cb(a + b)\r\n  }, 1000)\r\n}\r\n\r\nconsole.log(111)\r\n\r\n// const result = sum(10, 20)\r\n// console.log(result)\r\n\r\nsum(10, 20, (res) => {\r\n  sum(res, 1, (res2) => {\r\n    sum(res2, 2, (res3) => {\r\n      sum(res3, 3, (res4) => {\r\n        sum(res4, 4, (res5) => {\r\n          console.log(res5)\r\n        })\r\n      })\r\n    })\r\n  })\r\n})\r\n\r\nconsole.log(222)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"promise",children:"Promise"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5f02\u6b65\u8c03\u7528\u5fc5\u987b\u8981\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u6570\u636e\uff0c\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u590d\u6742\u7684\u8c03\u7528\u65f6\uff0c\u4f1a\u51fa\u73b0\u201c\u56de\u8c03\u5730\u72f1\u201d"}),"\n",(0,s.jsxs)(r.li,{children:["\u95ee\u9898\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5f02\u6b65\u5fc5\u987b\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u7ed3\u679c\uff0c\u56de\u8c03\u51fd\u6570\u4e00\u591a\u5c31\u5f88\u75db\u82e6"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Promise \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u5f02\u6b65\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u7684\u95ee\u9898"}),"\n",(0,s.jsx)(r.li,{children:"Promise \u5c31\u662f\u4e00\u4e2a\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u5bb9\u5668"}),"\n",(0,s.jsx)(r.li,{children:"\u5b83\u62e5\u6709\u7740\u4e00\u5957\u7279\u6b8a\u7684\u5b58\u53d6\u6570\u636e\u7684\u65b9\u5f0f"}),"\n",(0,s.jsx)(r.li,{children:"\u8fd9\u4e2a\u65b9\u5f0f\u4f7f\u5f97\u5b83\u91cc\u8fb9\u53ef\u4ee5\u5b58\u50a8\u5f02\u6b65\u8c03\u7528\u7684\u7ed3\u679c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u521b\u5efa Promise","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa Promise \u65f6\uff0c\u6784\u9020\u51fd\u6570\u4e2d\u9700\u8981\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"}),"\n",(0,s.jsx)(r.li,{children:"Promise \u6784\u9020\u51fd\u6570\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u4f1a\u5728\u521b\u5efa Promise \u65f6\u8c03\u7528\uff0c\u8c03\u7528\u65f6\u4f1a\u6709\u4e24\u4e2a\u53c2\u6570\u4f20\u9012\u8fdb\u53bb"}),"\n",(0,s.jsx)(r.li,{children:"resolve \u548c reject \u662f\u4e24\u4e2a\u51fd\u6570\uff0c\u901a\u8fc7\u8fd9\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u5411 Promise \u4e2d\u5b58\u50a8\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"resolve \u5728\u6267\u884c\u6b63\u5e38\u65f6\u5b58\u50a8\u6570\u636e\uff0creject \u5728\u6267\u884c\u9519\u8bef\u65f6\u5b58\u50a8\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7\u51fd\u6570\u6765\u5411 Promise \u4e2d\u6dfb\u52a0\u6570\u636e\uff0c\u597d\u5904\u5c31\u662f\u53ef\u4ee5\u7528\u6765\u6dfb\u52a0\u5f02\u6b65\u8c03\u7528\u7684\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4ece Promise \u4e2d\u8bfb\u53d6\u6570\u636e","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u53ef\u4ee5\u901a\u8fc7 Promise \u7684\u5b9e\u4f8b\u65b9\u6cd5 then \u6765\u8bfb\u53d6 Promise \u4e2d\u5b58\u50a8\u7684\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"then \u9700\u8981\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u56de\u8c03\u51fd\u6570\u7528\u6765\u83b7\u53d6 Promise \u4e2d\u7684\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7 resolve \u5b58\u50a8\u7684\u6570\u636e\uff0c\u4f1a\u8c03\u7528\u7b2c\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\uff0c\u53ef\u4ee5\u5728\u7b2c\u4e00\u4e2a\u51fd\u6570\u4e2d\u7f16\u5199\u5904\u7406\u6570\u636e\u7684\u4ee3\u7801"}),"\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7 reject \u5b58\u50a8\u7684\u6570\u636e\u6216\u8005\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u4f1a\u8c03\u7528\u7b2c\u4e8c\u4e2a\u51fd\u6570\u8fd4\u56de\uff0c\u53ef\u4ee5\u5728\u7b2c\u4e8c\u4e2a\u51fd\u6570\u4e2d\u7f16\u5199\u5904\u7406\u5f02\u5e38\u7684\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise \u4e2d\u7ef4\u62a4\u4e86\u4e24\u4e2a\u9690\u85cf\u5c5e\u6027\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["PromiseResult","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7528\u6765\u5b58\u50a8\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["PromiseState","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u8bb0\u5f55 Promise \u7684\u72b6\u6001(\u4e09\u79cd\u72b6\u6001)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"pending(\u8fdb\u884c\u4e2d)"}),"\n",(0,s.jsx)(r.li,{children:"fulfilled(\u5b8c\u6210) \u901a\u8fc7 resolve \u5b58\u50a8\u6570\u636e\u65f6"}),"\n",(0,s.jsx)(r.li,{children:"rejected(\u62d2\u7edd\uff0c\u51fa\u9519\u4e86) \u51fa\u9519\u4e86\u6216\u901a\u8fc7 reject \u5b58\u50a8\u6570\u636e\u65f6"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"state \u53ea\u80fd\u4fee\u6539\u4e00\u6b21\uff0c\u4fee\u6539\u4ee5\u540e\u6c38\u8fdc\u4e0d\u4f1a\u518d\u53d8"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6d41\u7a0b\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5f53 Promise \u521b\u5efa\u65f6\uff0cPromiseState \u521d\u59cb\u503c\u4e3a pending"}),"\n",(0,s.jsxs)(r.li,{children:["\u5f53\u901a\u8fc7 resolve \u5b58\u50a8\u6570\u636e\u65f6 PromiseState \u53d8\u4e3a fulfilled(\u5b8c\u6210)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"PromiseResult \u53d8\u4e3a\u5b58\u50a8\u7684\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5f53\u901a\u8fc7 reject \u5b58\u50a8\u6570\u636e\u6216\u51fa\u9519\u65f6 PromiseState \u53d8\u4e3a rejected(\u62d2\u7edd\uff0c\u51fa\u9519\u4e86)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"PromiseResult \u53d8\u4e3a\u5b58\u50a8\u7684\u6570\u636e \u6216 \u5f02\u5e38\u5bf9\u8c61"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5f53\u6211\u4eec\u901a\u8fc7 then \u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u76f8\u5f53\u4e8e\u4e3a Promise \u8bbe\u7f6e\u4e86\u56de\u8c03\u51fd\u6570","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5982\u679c PromiseState \u53d8\u4e3a fulfilled\uff0c\u5219\u8c03\u7528 then \u7684\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"\u5982\u679c PromiseState \u53d8\u4e3a rejected\uff0c\u5219\u8c03\u7528 then \u7684\u7b2c\u4e8c\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u6570\u636e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["catch() \u7528\u6cd5\u548c then \u7c7b\u4f3c\uff0c\u4f46\u662f\u53ea\u9700\u8981\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"catch() \u4e2d\u7684\u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5728 Promise \u88ab\u62d2\u7edd\u65f6\u624d\u8c03\u7528"}),"\n",(0,s.jsxs)(r.li,{children:["catch() \u76f8\u5f53\u4e8e then(null, reason => ",")"]}),"\n",(0,s.jsx)(r.li,{children:"catch() \u5c31\u662f\u4e00\u4e2a\u4e13\u95e8\u5904\u7406 Promise \u5f02\u5e38\u7684\u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["finally()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u65e0\u8bba\u662f\u6b63\u5e38\u5b58\u50a8\u6570\u636e\u8fd8\u662f\u51fa\u73b0\u5f02\u5e38\u4e86\uff0cfinally \u603b\u4f1a\u6267\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u4f46\u662f finally \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u4e0d\u4f1a\u63a5\u6536\u5230\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"finally() \u901a\u5e38\u7528\u6765\u7f16\u5199\u4e00\u4e9b\u65e0\u8bba\u6210\u529f\u4e0e\u5426\u90fd\u8981\u6267\u884c\u7684\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const promise = new Promise((resolve, reject) => {\r\n  resolve('\u54c8\u54c8\u54c8')\r\n  // reject('\u88ab\u62d2\u7edd\u4e86')\r\n  // throw new Error('\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38')\r\n  // setTimeout(() => {\r\n  //   resolve('\u54c8\u54c8\u54c8')\r\n  // }, 2000)\r\n})\r\n\r\nconsole.log(promise)\r\n\r\n// Promise.resolve(111)\r\n\r\npromise.then(\r\n  (result) => {\r\n    console.log('result--\x3e', result)\r\n  },\r\n  (reason) => {\r\n    console.log('reason--\x3e', reason)\r\n  }\r\n)\r\n\r\npromise.catch((reason) => {\r\n  console.log('catch--\x3e', reason)\r\n})\r\n\r\npromise.finally(() => {\r\n  console.log('finally\u6267\u884c\u4e86')\r\n})\n"})}),"\n",(0,s.jsx)(r.h2,{id:"promise-1",children:"Promise"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Promise \u5c31\u662f\u4e00\u4e2a\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u5bf9\u8c61"}),"\n",(0,s.jsx)(r.li,{children:"\u4f46\u662f\u7531\u4e8e Promise \u5b58\u53d6\u7684\u65b9\u5f0f\u7684\u7279\u6b8a\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5c06\u5f02\u6b65\u8c03\u7528\u7684\u7ed3\u679c\u5b58\u50a8\u5230 Promise \u4e2d"}),"\n",(0,s.jsxs)(r.li,{children:["\u5bf9 Promise \u8fdb\u884c\u94fe\u5f0f\u8c03\u7528\u65f6","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u540e\u8fb9\u7684\u65b9\u6cd5(then \u548c catch)\u8bfb\u53d6\u7684\u662f\u4e0a\u4e00\u6b65\u7684\u6267\u884c\u7ed3\u679c"}),"\n",(0,s.jsx)(r.li,{children:"\u5982\u679c\u4e0a\u4e00\u6b65\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u662f\u5f53\u524d\u60f3\u8981\u7684\u7ed3\u679c\uff0c\u5219\u8df3\u8fc7\u5f53\u524d\u7684\u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"\u5f53 Promise \u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u800c\u6574\u4e2a\u8c03\u7528\u94fe\u4e2d\u6ca1\u6709\u51fa\u73b0 catch\uff0c\u5219\u5f02\u5e38\u4f1a\u5411\u5916\u629b\u51fa"}),"\n",(0,s.jsxs)(r.li,{children:["promise \u4e2d\u7684","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"then(return new Promise())"}),"\n",(0,s.jsxs)(r.li,{children:["catch","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise"}),"\n",(0,s.jsx)(r.li,{children:"Promise \u4e2d\u4f1a\u5b58\u50a8\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["finally","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"finally \u7684\u8fd4\u56de\u503c\uff0c\u4e0d\u4f1a\u5b58\u50a8\u5230\u65b0\u7684 Promise \u4e2d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u9759\u6001\u65b9\u6cd5","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Promise.resolve()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5b8c\u6210\u7684 Promise"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise.reject()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u62d2\u7edd\u7684 Promise"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise.all(\u6570\u7ec4)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u540c\u65f6\u8fd4\u56de\u591a\u4e2a Promise \u7684\u6267\u884c\u7ed3\u679c\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u771f\u6570\u7ec4"}),"\n",(0,s.jsx)(r.li,{children:"\u5176\u4e2d\u6709\u4e00\u4e2a\u62a5\u9519\uff0c\u5c31\u8fd4\u56de\u9519\u8bef"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise.allSettled(\u6570\u7ec4)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u540c\u65f6\u8fd4\u56de\u591a\u4e2a Promise \u7684\u6267\u884c\u7ed3\u679c(\u65e0\u8bba\u6210\u529f\u6216\u5931\u8d25)\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u771f\u6570\u7ec4\uff0c\u6570\u7ec4\u91cc\u9762\u662f\u5bf9\u8c61"}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"{status: 'fulfilled', value: 579}"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"{status: 'rejected', reason: '\u54c8\u54c8'}"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise.race(\u6570\u7ec4)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd4\u56de\u6267\u884c\u6700\u5feb\u7684 Promise(\u4e0d\u8003\u8651\u5bf9\u9519)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Promise.any(\u6570\u7ec4)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd4\u56de\u6267\u884c\u6700\u5feb\u7684\u5b8c\u6210\u7684 Promise"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const promise = new Promise((resolve, reject) => {\r\n  // resolve('\u54c8\u54c8\u54c8')\r\n  reject('\u54c8\u54c8\u54c8')\r\n})\r\n\r\npromise\r\n  .then((result) => {\r\n    console.log('\u7b2c\u4e00\u4e2athen', result)\r\n    return 111\r\n  })\r\n  .catch((reason) => {\r\n    console.log('\u7b2c\u4e00\u4e2acatch', reason)\r\n    // throw new Error('\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38')\r\n    return 222\r\n  })\r\n  .then((result) => {\r\n    console.log('\u7b2c\u4e8c\u4e2athen', result)\r\n  })\r\n  .catch((reason) => {\r\n    console.log('\u7b2c\u4e8c\u4e2acatch', reason)\r\n  })\r\n\r\n// const p2 = promise.then(result => {\r\n//   console.log(result)\r\n//   return 111\r\n// })\r\n\r\n// setTimeout(() => {\r\n//   console.log(p2)\r\n// })\r\n\r\n// promise\r\n//   .then(result => {\r\n//     console.log('\u7b2c\u4e00\u4e2athen', result)\r\n//     return 111\r\n//   })\r\n//   .then(result => {\r\n//     console.log('\u7b2c\u4e8c\u4e2athen', result)\r\n//     return 222\r\n//   })\r\n//   .then(result => {\r\n//     console.log('\u7b2c\u4e09\u4e2athen', result)\r\n//   })\r\n\r\nfunction sum(a, b) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve(a + b)\r\n    }, 1000)\r\n  })\r\n}\r\n\r\n// sum(10, 20)\r\n//   .then(result => result)\r\n//   .then(result => result + 1)\r\n//   .then(result => result + 2)\r\n//   .then(result => result + 3)\r\n//   .then(result => console.log(result))\r\n\r\n// sum(10, 20).then(result => {\r\n//   sum(result, 1).then(result => {\r\n//     sum(result, 2).then(result => {\r\n//       sum(result, 3).then(result => {\r\n//         console.log(result)\r\n//       })\r\n//     })\r\n//   })\r\n// })\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// Promise.resolve(111).then(result => {\r\n//   console.log(result)\r\n// })\r\n\r\n// Promise.reject(222).catch(reason => {\r\n//   console.log(reason)\r\n// })\r\n\r\nfunction sum(a, b) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve(a + b)\r\n    }, 1000)\r\n  })\r\n}\r\n\r\n// Promise.all([sum(1, 2), sum(10, 20), sum(100, 200)]).then(result => {\r\n//   console.log(result) // [3, 30, 300] \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u771f\u6570\u7ec4\r\n// })\r\n\r\n// Promise.all([sum(1, 2), sum(10, 20), Promise.reject(111), sum(100, 200)])\r\n//   .then(result => {\r\n//     console.log(result)\r\n//   })\r\n//   .catch(reason => {\r\n//     console.log('\u51fa\u9519\u4e86', reason)\r\n//   })\r\n\r\n// Promise.allSettled([sum(1, 2), sum(10, 20), sum(100, 200)]).then(result => {\r\n//   console.log(result)\r\n// })\r\n\r\n// Promise.allSettled([sum(1, 2), sum(10, 20), Promise.reject(111), sum(100, 200)]).then(result => {\r\n//   console.log(result)\r\n//   // {status: 'fulfilled', value: 30}\r\n//   // {status: 'rejected', reason: 111}\r\n// })\r\n\r\n// Promise.race([sum(1, 2), sum(10, 20), Promise.resolve(111), sum(100, 200)]).then(result => {\r\n//   console.log(result) // 111\r\n// })\r\n\r\n// Promise.race([\r\n//   sum(1, 2),\r\n//   sum(10, 20),\r\n//   Promise.reject(222),\r\n//   Promise.resolve(111),\r\n//   sum(100, 200)\r\n// ]).then(result => {\r\n//   console.log(result) // Promise.reject(222) \u5148\u6267\u884c\r\n// })\r\n\r\n// Promise.any([\r\n//   sum(1, 2),\r\n//   sum(10, 20),\r\n//   Promise.reject(222),\r\n//   Promise.resolve(111),\r\n//   sum(100, 200)\r\n// ]).then(result => {\r\n//   console.log(result) // 111\r\n// })\r\n\r\nPromise.any([Promise.reject(111), Promise.reject(222), Promise.reject(333)])\r\n  .then((result) => {\r\n    console.log(result)\r\n  })\r\n  .catch((reason) => {\r\n    console.log(reason)\r\n  })\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",children:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["JS \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u5b83\u7684\u8fd0\u884c\u662f\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u673a\u5236(event loop)","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u8c03\u7528\u6808","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u6808\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u540e\u8fdb\u5148\u51fa"}),"\n",(0,s.jsx)(r.li,{children:"\u8c03\u7528\u6808\u4e2d\uff0c\u653e\u7684\u662f\u8981\u6267\u884c\u7684\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4efb\u52a1\u961f\u5217","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u961f\u5217\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5148\u8fdb\u5148\u51fa"}),"\n",(0,s.jsx)(r.li,{children:"\u4efb\u52a1\u961f\u5217\u653e\u7684\u662f\u5c06\u8981\u6267\u884c\u7684\u4ee3\u7801"}),"\n",(0,s.jsx)(r.li,{children:"\u5f53\u8c03\u7528\u6808\u4e2d\u7684\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u961f\u5217\u4e2d\u7684\u4ee3\u7801\u624d\u4f1a\u6309\u7167\u987a\u5e8f\u4f9d\u6b21\u8fdb\u5165\u5230\u6808\u4e2d\u6267\u884c"}),"\n",(0,s.jsxs)(r.li,{children:["\u5728 JS \u4e2d\u4efb\u52a1\u961f\u5217\u6709\u4e24\u79cd","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5b8f\u4efb\u52a1\u961f\u5217(\u5927\u90e8\u5206\u4ee3\u7801\u90fd\u53bb\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u6392\u961f)"}),"\n",(0,s.jsx)(r.li,{children:"\u5fae\u4efb\u52a1\u961f\u5217(Promise \u7684\u56de\u8c03\u51fd\u6570(then\u3001catch\u3001finally))"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6574\u4e2a\u6d41\u7a0b","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u8c03\u7528\u6808\u4e2d\u7684\u4ee3\u7801"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6240\u6709\u4efb\u52a1"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6240\u6709\u4efb\u52a1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"\u5b9a\u65f6\u5668\u7684\u4f5c\u7528\u662f\u95f4\u9694\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u5c06\u51fd\u6570\u653e\u5165\u5230\u4efb\u52a1\u961f\u5217\u4e2d"}),"\n",(0,s.jsxs)(r.li,{children:["Promise \u7684\u6267\u884c\u539f\u7406","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Promise \u5728\u6267\u884c\u65f6\uff0cthen \u5c31\u76f8\u5f53\u4e8e\u7ed9 Promise \u7ed1\u5b9a\u4e86\u56de\u8c03\u51fd\u6570"}),"\n",(0,s.jsx)(r.li,{children:"\u5f53 Promise \u7684\u72b6\u6001\u4ece pending \u53d8\u4e3a fulfilled \u65f6\uff0cthen \u7684\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u653e\u5165\u5230\u4efb\u52a1\u961f\u5217\u4e2d"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["queueMicrotask()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7528\u6765\u5411\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4efb\u52a1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// setTimeout(() => {\r\n//   console.log(1)\r\n// })\r\n\r\n// Promise.resolve().then(() => {\r\n//   console.log(2)\r\n// })\r\n\r\n// queueMicrotask(() => {\r\n//   console.log(3)\r\n// })\r\n\r\n// console.log(4)\r\n\r\n// 4 2 3 1\r\n\r\nPromise.resolve().then(() => {\r\n  Promise.resolve().then(() => {\r\n    console.log(1)\r\n  })\r\n})\r\n\r\nqueueMicrotask(() => {\r\n  console.log(2)\r\n})\r\n\r\n// 2 1\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u624b\u5199-promise",children:"\u624b\u5199 Promise"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const PROMISE_STATE = {\r\n  PENDING: 0,\r\n  FULFILLED: 1,\r\n  REJECTED: 2,\r\n}\r\n\r\nclass MyPromise {\r\n  #result\r\n  #state = PROMISE_STATE.PENDING\r\n  #callbacks = []\r\n\r\n  constructor(executor) {\r\n    executor(this.#resolve.bind(this), this.#reject.bind(this))\r\n  }\r\n\r\n  #resolve(value) {\r\n    if (this.#state !== PROMISE_STATE.PENDING) return\r\n    this.#result = value\r\n    this.#state = PROMISE_STATE.FULFILLED\r\n\r\n    queueMicrotask(() => {\r\n      // this.#callback && this.#callback(this.#result)\r\n      this.#callbacks.forEach((cb) => {\r\n        cb()\r\n      })\r\n    })\r\n  }\r\n\r\n  // #resolve = value => {\r\n  //   this.#result = value\r\n  // }\r\n\r\n  #reject(value) {}\r\n\r\n  then(onFulfilled, onRejected) {\r\n    return new MyPromise((resolve, reject) => {\r\n      if (this.#state === PROMISE_STATE.PENDING) {\r\n        this.#callbacks.push(() => {\r\n          resolve(onFulfilled(this.#result))\r\n        })\r\n      } else if (this.#state === PROMISE_STATE.FULFILLED) {\r\n        queueMicrotask(() => {\r\n          resolve(onFulfilled(this.#result))\r\n        })\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nconst mp = new MyPromise((resolve, reject) => {\r\n  setTimeout(() => {\r\n    resolve('\u5b59\u609f\u7a7a')\r\n  }, 1000)\r\n  // resolve('\u732a\u516b\u6212')\r\n})\r\n\r\nmp.then((result) => {\r\n  console.log('\u7b2c\u4e00\u6b21\u8bfb\u53d6', result)\r\n  return '\u732a\u516b\u6212'\r\n})\r\n  .then((res) => {\r\n    console.log('\u7b2c\u4e8c\u6b21\u8bfb\u53d6', res)\r\n    return '\u6c99\u548c\u5c1a'\r\n  })\r\n  .then((res) => {\r\n    console.log('\u7b2c\u4e09\u6b21\u8bfb\u53d6', res)\r\n  })\r\n\r\n// mp.then(result => {\r\n//   console.log('\u7b2c\u4e00\u6b21\u8bfb\u53d6', result)\r\n// })\r\n\r\n// mp.then(result => {\r\n//   console.log('\u7b2c\u4e8c\u6b21\u8bfb\u53d6', result)\r\n// })\r\n\r\n// mp.then(result => {\r\n//   console.log('\u7b2c\u4e09\u6b21\u8bfb\u53d6', result)\r\n// })\r\n\r\n// console.log(mp)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"async-\u548c-await",children:"async \u548c await"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7 async \u53ef\u4ee5\u6765\u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570"}),"\n",(0,s.jsx)(r.li,{children:"\u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u81ea\u52a8\u5c01\u88c5\u5230\u4e00\u4e2a Promise \u4e2d\u8fd4\u56de"}),"\n",(0,s.jsx)(r.li,{children:"\u5728 async \u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\u53ef\u4ee5\u4f7f\u7528 await \u5173\u952e\u5b57\u6765\u8c03\u7528\u5f02\u6b65\u51fd\u6570"}),"\n",(0,s.jsxs)(r.li,{children:["Promise \u89e3\u51b3\u4e86\u5f02\u6b65\u8c03\u7528\u4e2d\u56de\u8c03\u51fd\u6570\u95ee\u9898","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u867d\u7136\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1\uff0c\u4f46\u662f\u94fe\u5f0f\u8c03\u7528\u592a\u591a\u4ee5\u540e\u8fd8\u662f\u4e0d\u597d\u770b"}),"\n",(0,s.jsx)(r.li,{children:"\u6211\u591a\u60f3\u4ee5\u540c\u6b65\u7684\u65b9\u5f0f\u53bb\u8c03\u7528\u5f02\u6b65\u7684\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"\u5f53\u6211\u4eec\u901a\u8fc7 await \u53bb\u8c03\u7528\u5f02\u6b65\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u6682\u505c\u4ee3\u7801\u7684\u8fd0\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u76f4\u5230\u5f02\u6b65\u4ee3\u7801\u6267\u884c\u6709\u7ed3\u679c\u65f6\uff0c\u624d\u4f1a\u5c06\u7ed3\u679c\u8fd4\u56de"}),"\n",(0,s.jsx)(r.li,{children:"\u6ce8\u610f await \u53ea\u80fd\u7528\u4e8e async \u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\uff0c\u6216 es \u6a21\u5757\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4e2d"}),"\n",(0,s.jsx)(r.li,{children:"await \u963b\u585e\u7684\u53ea\u662f\u5f02\u6b65\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5916\u90e8\u4ee3\u7801"}),"\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7 await \u8c03\u7528\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u9700\u8981\u901a\u8fc7 try-catch \u6765\u5904\u7406\u5f02\u5e38"}),"\n",(0,s.jsx)(r.li,{children:"\u5982\u679c async \u58f0\u660e\u7684\u51fd\u6570\u4e2d\u6ca1\u6709\u5199 await\uff0c\u90a3\u4e48\u5b83\u91cc\u8fb9\u7684\u4ee3\u7801\u5c31\u4f1a\u4f9d\u6b21\u6267\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u5f53\u6211\u4eec\u4f7f\u7528 await \u8c03\u7528\u51fd\u6570\u540e\uff0c\u5f53\u524d\u51fd\u6570\u540e\u8fb9\u7684\u6240\u6709\u4ee3\u7801\uff0c\u4f1a\u5728\u5f53\u524d\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u88ab\u653e\u5165\u5230\u5fae\u4efb\u52a1\u961f\u91cc\u4e2d"}),"\n",(0,s.jsx)(r.li,{children:"await \u540e\u8fb9\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4f1a\u653e\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u6267\u884c"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// function fn() {\r\n//   return Promise.resolve(10)\r\n// }\r\n\r\n// \u7b49\u4ef7\u4e8e\u4e0a\u9762\u7684\u4ee3\u7801\r\n// async function fn() {\r\n//   return 10\r\n// }\r\n\r\n// fn().then(res => {\r\n//   console.log(res)\r\n// })\r\n\r\nfunction sum(a, b) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve(a + b)\r\n    }, 2000)\r\n  })\r\n}\r\n\r\n// sum(10, 20)\r\n//   .then(res => res + 1)\r\n//   .then(res => res + 2)\r\n//   .then(res => console.log(res))\r\n\r\n// async function fn() {\r\n//   try {\r\n//     console.log(111)\r\n//     let res = await sum(10, 20)\r\n//     res = await sum(res, 1)\r\n//     res = await sum(res, 2)\r\n//     console.log(res)\r\n//   } catch (e) {\r\n//     console.log('\u51fa\u9519\u4e86', e)\r\n//   }\r\n// }\r\n\r\n// fn()\r\n\r\n// console.log('\u5168\u5c40\u4e2d\u7684\u8f93\u51fa')\r\n\r\n// async function fn() {\r\n//   console.log(1)\r\n//   await console.log(2)\r\n//   console.log(3)\r\n// }\r\n\r\n// fn()\r\n\r\n// console.log(4)\r\n// 1 2 4 3\r\n\r\n// \u7b49\u4ef7\u4e8e\u4e0a\u8ff0\u4ee3\u7801\r\n// function fn() {\r\n//   return new Promise((resolve, reject) => {\r\n//     console.log(1)\r\n//     console.log(2) // \u52a0\u4e86 await\r\n//     resolve()\r\n//   }).then(res => {\r\n//     console.log(3)\r\n//   })\r\n// }\r\n\r\n// fn()\r\n\r\n// console.log(4)\r\n\r\n// async function fn() {\r\n//   await console.log(111)\r\n// }\r\n\r\n// fn()\r\n;(async () => {\r\n  await console.log(222)\r\n})()\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728 HTML \u4e2d\u4f7f\u7528 await"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="zh">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Document</title>\r\n    <script type="module">\r\n      await console.log(111)\r\n    <\/script>\r\n  </head>\r\n  <body></body>\r\n</html>\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u540e\u7f00\u540d\u4e3a .mjs \u7684\u6587\u4ef6\u4e2d\u4f7f\u7528 await"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"await console.log(111)\n"})})]})}function j(n={}){const{wrapper:r}={...(0,l.a)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>o,a:()=>c});var s=e(7294);const l={},i=s.createContext(l);function c(n){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(i.Provider,{value:r},n.children)}}}]);