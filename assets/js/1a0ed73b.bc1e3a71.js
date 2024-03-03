"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3176],{7219:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=e(5893),l=e(1151);const t={sidebar_position:2},i="Vue \u57fa\u7840",a={id:"Vue3Alpha/Base",title:"Vue \u57fa\u7840",description:"App",source:"@site/docs/Vue3Alpha/Base.md",sourceDirName:"Vue3Alpha",slug:"/Vue3Alpha/Base",permalink:"/docs/Vue3Alpha/Base",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/Vue3Alpha/Introduction"},next:{title:"\u6a21\u677f",permalink:"/docs/Vue3Alpha/Template"}},c={},d=[{value:"App",id:"app",level:2},{value:"\u54cd\u5e94\u5f0f\u539f\u7406",id:"\u54cd\u5e94\u5f0f\u539f\u7406",level:2},{value:"data",id:"data",level:2},{value:"methods",id:"methods",level:2},{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"\u7ec4\u5408\u5f0f API \u7b80\u4ecb",id:"\u7ec4\u5408\u5f0f-api-\u7b80\u4ecb",level:2},{value:"\u54cd\u5e94\u5f0f\u5bf9\u8c61",id:"\u54cd\u5e94\u5f0f\u5bf9\u8c61",level:2},{value:"\u7ec4\u5408\u5f0f API \u8865\u5145",id:"\u7ec4\u5408\u5f0f-api-\u8865\u5145",level:2}];function o(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"vue-\u57fa\u7840",children:"Vue \u57fa\u7840"}),"\n",(0,s.jsx)(r.h2,{id:"app",children:"App"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["App.vue \u662f\u6839\u7ec4\u4ef6","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["createApp(App) \u5c06\u6839\u7ec4\u4ef6\u5173\u8054\u5230\u5e94\u7528\u4e0a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e94\u7528\u7684\u5b9e\u4f8b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:['app.mount("#app") \u5c06\u5e94\u7528\u6302\u8f7d\u5230\u9875\u9762\u4e2d',"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6839\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u901a\u5e38\u53ef\u4ee5\u547d\u540d\u4e3a vm"}),"\n",(0,s.jsx)(r.li,{children:"\u7ec4\u4ef6\u5b9e\u4f8b\u662f\u4e00\u4e2a Proxy \u5bf9\u8c61(\u4ee3\u7406\u5bf9\u8c61)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b"}),"\n",(0,s.jsx)(r.li,{children:"\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684 js \u5bf9\u8c61"}),"\n",(0,s.jsxs)(r.li,{children:["data \u662f\u4e00\u4e2a\u51fd\u6570","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728 data \u4e2d\uff0cthis \u5c31\u662f\u5f53\u524d\u7684\u7ec4\u4ef6\u5b9e\u4f8b vm"}),"\n",(0,s.jsx)(r.li,{children:"\u5982\u679c\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0c\u5219\u65e0\u6cd5\u901a\u8fc7 this \u6765\u8bbf\u95ee\u7ec4\u4ef6\u5b9e\u4f8b"}),"\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528 vue \u65f6\uff0c\u51cf\u5c11\u4f7f\u7528\u7bad\u5934\u51fd\u6570"}),"\n",(0,s.jsx)(r.li,{children:"data \u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u8fd4\u56de\u503c\uff0cvue \u4f1a\u5bf9\u8be5\u5bf9\u8c61\u8fdb\u884c\u4ee3\u7406"}),"\n",(0,s.jsx)(r.li,{children:"\u4ece\u800c\u5c06\u5176\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u54cd\u5e94\u5f0f\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7ec4\u4ef6\u5b9e\u4f8b\u8bbf\u95ee"}),"\n",(0,s.jsx)(r.li,{children:"\u76f4\u63a5\u5411\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u6dfb\u52a0\u7684\u5c5e\u6027\u4e0d\u4f1a\u88ab vue \u6240\u4ee3\u7406\uff0c\u4e0d\u662f\u54cd\u5e94\u6570\u636e\uff0c\u4fee\u6539\u540e\u9875\u9762\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u54cd\u5e94\u5f0f\u539f\u7406",children:"\u54cd\u5e94\u5f0f\u539f\u7406"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c\u76f4\u63a5\u4fee\u6539\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u90a3\u4e48\u5c31\u662f\u4ec5\u4ec5\u4fee\u6539\u4e86\u5c5e\u6027\uff0c\u6ca1\u6709\u53bb\u505a\u5176\u4ed6\u7684\u4e8b\u60c5\uff0c","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd9\u79cd\u64cd\u4f5c\u53ea\u4f1a\u5f71\u54cd\u5bf9\u8c61\u81ea\u8eab\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u5143\u7d20\u7684\u91cd\u65b0\u7684\u6e32\u67d3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"\u5e0c\u671b\u5728\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u7684\u540c\u65f6\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u89e6\u53d1\u5143\u7d20\u91cd\u65b0\u6e32\u67d3\uff01"}),"\n",(0,s.jsx)(r.li,{children:"\u8981\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u7684\uff0c\u5fc5\u987b\u8981\u5bf9\u5bf9\u8c61\u8fdb\u884c\u6539\u9020\uff0cvue3 \u4e2d\u4f7f\u7528\u7684\u662f\u4ee3\u7406\u6a21\u5f0f\u6765\u5b8c\u6210\u5bf9\u8c61\u7684\u6539\u9020"}),"\n",(0,s.jsx)(r.li,{children:"\u8bbe\u7f6e\u4ee3\u7406\u65f6\u4e0d\u4f1a\u5bf9\u539f\u5bf9\u8c61\u4ea7\u751f\u5f71\u54cd\uff01"}),"\n",(0,s.jsx)(r.li,{children:"get \u7528\u6765\u6307\u5b9a\u8bfb\u53d6\u6570\u636e\u65f6\u7684\u884c\u4e3a\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u5c31\u662f\u6700\u7ec8\u8bfb\u53d6\u5230\u7684\u503c"}),"\n",(0,s.jsx)(r.li,{children:"\u6307\u5b9a get \u540e\uff0c\u5728\u901a\u8fc7\u4ee3\u7406\u8bfb\u53d6\u5bf9\u8c61\u5c5e\u6027\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528 get \u65b9\u6cd5\u6765\u83b7\u53d6\u503c"}),"\n",(0,s.jsx)(r.li,{children:"\u5728 vue \u4e2d\uff0cdata()\u8fd4\u56de\u7684\u5bf9\u8c61\u4f1a\u88ab vue \u6240\u4ee3\u7406"}),"\n",(0,s.jsxs)(r.li,{children:["vue \u4ee3\u7406\u540e\uff0c\u5f53\u6211\u4eec\u901a\u8fc7\u4ee3\u7406\u53bb\u8bfb\u53d6\u5c5e\u6027\u65f6\uff0c\u8fd4\u56de\u503c\u4e4b\u524d\uff0c\u5b83\u4f1a\u5148\u505a\u4e00\u4e2a\u8ddf\u8e2a\u7684\u64cd\u4f5c","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"track() \u8ffd\u8e2a\u8c01\u7528\u4e86\u6211\u8fd9\u4e2a\u5c5e\u6027"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5f53\u6211\u4eec\u901a\u8fc7\u4ee3\u7406\u53bb\u4fee\u6539\u5c5e\u6027\u65f6\uff0c\u4fee\u6539\u540e\uff0c\u4f1a\u901a\u77e5\u4e4b\u524d\u6240\u6709\u7528\u5230\u8be5\u503c\u7684\u4f4d\u7f6e\u8fdb\u884c\u66f4\u65b0","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"trigger() \u89e6\u53d1\u6240\u6709\u7684\u4f7f\u7528\u8be5\u503c\u7684\u4f4d\u7f6e\u8fdb\u884c\u66f4\u65b0"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"set \u4f1a\u5728\u901a\u8fc7\u4ee3\u7406\u4fee\u6539\u5bf9\u8c61\u65f6\u8c03\u7528"}),"\n",(0,s.jsx)(r.li,{children:"\u53ea\u6709\u901a\u8fc7\u4ee3\u7406\u53bb\u4fee\u6539\u5c5e\u6027\u65f6\uff0c\u8fd9\u4e2a\u5c5e\u6027\u624d\u662f\u54cd\u5e94\u5f0f\u7684"}),"\n",(0,s.jsxs)(r.li,{children:["vm.$data \u662f\u5b9e\u9645\u7684\u4ee3\u7406\u5bf9\u8c61","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7 vm \u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5230$data \u4e2d\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(r.li,{children:"vm.$data.msg \u7b49\u4ef7\u4e8e vm.msg"}),"\n",(0,s.jsx)(r.li,{children:"\u53ef\u4ee5\u901a\u8fc7 vm.$data \u52a8\u6001\u7684\u5411\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"proxy.js"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const obj = {\r\n  name: '\u5b59\u609f\u7a7a',\r\n  age: 18,\r\n}\r\n\r\n// handler \u7528\u6765\u6307\u5b9a\u4ee3\u7406\u7684\u884c\u4e3a\r\nconst handler = {\r\n  /* \r\n    \u4e09\u4e2a\u53c2\u6570\uff1a\r\n      target \u88ab\u4ee3\u7406\u7684\u5bf9\u8c61\r\n      prop \u8bfb\u53d6\u7684\u5c5e\u6027\r\n      receiver \u4ee3\u7406\u5bf9\u8c61\r\n  */\r\n  get(target, prop, receiver) {\r\n    return target[prop]\r\n  },\r\n  // value \u8bbe\u7f6e\u7684\u503c\r\n  set(target, prop, value, receiver) {\r\n    target[prop] = value\r\n  },\r\n}\r\n\r\n// \u521b\u5efa\u4ee3\u7406\r\nconst proxy = new Proxy(obj, handler)\r\n\r\nproxy.age = 28\r\nconsole.log(proxy.age)\r\nconsole.log(obj.age)\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"App.vue"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script>\r\nexport default {\r\n  data(vm) {\r\n    // console.log('data', this)\r\n\r\n    // \u76f4\u63a5\u5411\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u6dfb\u52a0\u7684\u5c5e\u6027\u4e0d\u4f1a\u88abvue\u6240\u4ee3\u7406\uff0c\u4e0d\u662f\u54cd\u5e94\u6570\u636e\uff0c\u4fee\u6539\u540e\u9875\u9762\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\r\n    // this.name = '\u5b59\u609f\u7a7a'\r\n\r\n    return {\r\n      msg: 'Hello',\r\n    }\r\n  },\r\n\r\n  // data: (vm) => {\r\n  //   console.log('data', vm) // vm\u662f\u5f53\u524d\u7684\u7ec4\u4ef6\u5b9e\u4f8b\r\n  //   return {\r\n  //     msg: 'Hello',\r\n  //   }\r\n  // },\r\n\r\n  created() {\r\n    // \u4f1a\u5728\u7ec4\u4ef6\u521b\u5efa\u5b8c\u6bd5\u540e\u8c03\u7528\r\n    // \u53ef\u4ee5\u901a\u8fc7vm.$data\u52a8\u6001\u7684\u5411\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\r\n    this.$data.name = '\u5b59\u609f\u7a7a'\r\n  },\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ name }}</h2>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"data"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"data \u8fd4\u56de\u7684\u5bf9\u8c61\u6700\u7ec8\u4f1a\u88ab Vue \u6240\u4ee3\u7406"}),"\n",(0,s.jsx)(r.li,{children:'this.$data.xxx = "xxx" \u52a8\u6001\u6dfb\u52a0\u54cd\u5e94\u6570\u636e(\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a)'}),"\n",(0,s.jsx)(r.li,{children:"\u5efa\u8bae\u5c06\u90a3\u4e9b\u6682\u65f6\u6ca1\u6709\u4f7f\u7528\u5230\u7684\u5c5e\u6027\uff0c\u4e5f\u6dfb\u52a0\u5230 data \u8fd4\u56de\u7684\u5bf9\u8c61\u4e2d\uff0c\u503c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a null"}),"\n",(0,s.jsx)(r.li,{children:"vue \u5728\u6784\u5efa\u54cd\u5e94\u5f0f\u5bf9\u8c61\u65f6\uff0c\u4f1a\u540c\u65f6\u5c06\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u4e5f\u505a\u6210\u54cd\u5e94\u5f0f\u5c5e\u6027(\u6df1\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61)"}),"\n",(0,s.jsx)(r.li,{children:"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7 shallowReactive()\u6765\u521b\u5efa\u4e00\u4e2a\u6d45\u5c42\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u53ea\u6709\u7b2c\u4e00\u5c42\u4e2d\u7684\u5bf9\u8c61\u6216\u5c5e\u6027\u662f\u54cd\u5e94\u5f0f\u7684"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script>\r\nimport { shallowReactive } from 'vue'\r\nimport MyButton from './components/MyButton.vue'\r\n\r\nexport default {\r\n  data() {\r\n    // vue\u5728\u6784\u5efa\u54cd\u5e94\u5f0f\u5bf9\u8c61\u65f6\uff0c\u4f1a\u540c\u65f6\u5c06\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u4e5f\u505a\u6210\u54cd\u5e94\u5f0f\u5c5e\u6027\r\n    // \u6df1\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61\r\n    return {\r\n      msg: '\u4eca\u5929\u5929\u6c14\u771f\u4e0d\u9519',\r\n      stu: {\r\n        name: '\u5b59\u609f\u7a7a',\r\n        age: 18,\r\n        gender: '\u7537',\r\n        friend: {\r\n          name: '\u732a\u516b\u6212',\r\n        },\r\n      },\r\n      hello: null,\r\n    }\r\n  },\r\n\r\n  // data() {\r\n  //   // \u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7shallowReactive()\u6765\u521b\u5efa\u4e00\u4e2a\u6d45\u5c42\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61\r\n  //   return shallowReactive({\r\n  //     msg: '\u4eca\u5929\u5929\u6c14\u771f\u4e0d\u9519',\r\n  //     stu: {\r\n  //       name: '\u5b59\u609f\u7a7a',\r\n  //       age: 18,\r\n  //       gender: '\u7537',\r\n  //       friend: {\r\n  //         name: '\u732a\u516b\u6212',\r\n  //       },\r\n  //     },\r\n  //   })\r\n  // },\r\n  components: { MyButton },\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ stu.name }} - {{ stu.age }} - {{ stu.gender }}</h2>\r\n  <h2>{{ stu.friend.name }}</h2>\r\n  <MyButton></MyButton>\r\n  <MyButton></MyButton>\r\n  <MyButton></MyButton>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["methods \u7528\u6765\u6307\u5b9a\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684\u65b9\u6cd5","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5b83\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5728\u5b83\u91cc\u8fb9\u5b9a\u4e49\u591a\u4e2a\u65b9\u6cd5"}),"\n",(0,s.jsx)(r.li,{children:"\u8fd9\u4e9b\u65b9\u6cd5\u6700\u7ec8\u5c06\u4f1a\u88ab\u6302\u8f7d\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a"}),"\n",(0,s.jsx)(r.li,{children:"\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7ec4\u4ef6\u5b9e\u4f8b\u6765\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5"}),"\n",(0,s.jsx)(r.li,{children:"\u6240\u6709\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u5728\u6a21\u677f\u4e2d\u76f4\u63a5\u8bbf\u95ee"}),"\n",(0,s.jsx)(r.li,{children:"methods \u4e2d\u51fd\u6570\u7684 this \u4f1a\u88ab\u81ea\u52a8\u7ed1\u5b9a\u4e3a\u7ec4\u4ef6\u5b9e\u4f8b"}),"\n",(0,s.jsx)(r.li,{children:"methods \u4e2d\u7684\u65b9\u6cd5\u6bcf\u6b21\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u90fd\u4f1a\u8c03\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      msg: 'Hello',\r\n    }\r\n  },\r\n  methods: {\r\n    sum(a, b) {\r\n      console.log(this) // \u7ec4\u4ef6\u5b9e\u4f8b vm\r\n      return a + b\r\n    },\r\n    changeMsg() {\r\n      this.msg = '\u4fee\u6539\u6d88\u606f'\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ sum(1, 2) }}</h2>\r\n  <button @click=\"changeMsg\">\u70b9\u6211\u4e00\u4e0b</button>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u8ba1\u7b97\u5c5e\u6027",children:"\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"computed \u7528\u6765\u6307\u5b9a\u8ba1\u7b97\u5c5e\u6027"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"{\r\n  \u5c5e\u6027\u540d: getter\r\n}\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8ba1\u7b97\u5c5e\u6027\uff0c\u53ea\u5728\u5176\u4f9d\u8d56\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u6267\u884c"}),"\n",(0,s.jsx)(r.li,{children:"\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u7f13\u5b58"}),"\n",(0,s.jsx)(r.li,{children:"\u5728\u8ba1\u7b97\u5c5e\u6027\u7684 getter \u4e2d\uff0c\u5c3d\u91cf\u53ea\u505a\u8bfb\u53d6\u76f8\u5173\u7684\u903b\u8f91"}),"\n",(0,s.jsx)(r.li,{children:"\u4e0d\u8981\u6267\u884c\u90a3\u4e9b\u4f1a\u4ea7\u751f(\u526f)\u4f5c\u7528\u7684\u4ee3\u7801"}),"\n",(0,s.jsx)(r.li,{children:"\u53ef\u4ee5\u4e3a\u8ba1\u7b97\u5c5e\u6027\u8bbe\u7f6e setter\uff0c\u4f7f\u5f97\u8ba1\u7b97\u5c5e\u6027\u53ef\u5199\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a"}),"\n",(0,s.jsx)(r.li,{children:"set \u5728\u8ba1\u7b97\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\u8c03\u7528"}),"\n",(0,s.jsx)(r.li,{children:"\u6570\u7ec4\u4e5f\u662f\u54cd\u5e94\u5f0f\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      msg: 'Hello',\r\n      stu: {\r\n        name: '\u5b59\u609f\u7a7a',\r\n        age: 18,\r\n        gender: '\u7537',\r\n      },\r\n      firstName: '\u609f\u7a7a',\r\n      lastName: '\u5b59',\r\n      // \u6570\u7ec4\u4e5f\u662f\u54cd\u5e94\u5f0f\u6570\u636e\r\n      arr: ['\u5b59\u609f\u7a7a', '\u732a\u516b\u6212', '\u6c99\u548c\u5c1a'],\r\n    }\r\n  },\r\n  methods: {\r\n    updateAge() {\r\n      if (this.stu.age >= 18) {\r\n        this.stu.age = 17\r\n      } else {\r\n        this.stu.age = 18\r\n      }\r\n    },\r\n    updateMsg() {\r\n      this.msg = '\u4fee\u6539\u6d88\u606f'\r\n    },\r\n    getInfo() {\r\n      console.log('getInfo\u8c03\u7528\u4e86')\r\n      return this.stu.age >= 18 ? '\u4f60\u5df2\u7ecf\u662f\u4e00\u4e2a\u6210\u5e74\u4eba\u4e86' : '\u4f60\u8fd8\u662f\u4e00\u4e2a\u672a\u6210\u5e74\u4eba'\r\n    },\r\n  },\r\n  computed: {\r\n    // \u5728\u8ba1\u7b97\u5c5e\u6027\u7684getter\u4e2d\uff0c\u5c3d\u91cf\u53ea\u505a\u8bfb\u53d6\u76f8\u5173\u7684\u903b\u8f91\r\n    // \u4e0d\u8981\u6267\u884c\u90a3\u4e9b\u4f1a\u4ea7\u751f(\u526f)\u4f5c\u7528\u7684\u4ee3\u7801\r\n    info() {\r\n      console.log('-> info\u8c03\u7528\u4e86')\r\n      return this.stu.age >= 18 ? '\u4f60\u5df2\u7ecf\u662f\u4e00\u4e2a\u6210\u5e74\u4eba\u4e86' : '\u4f60\u8fd8\u662f\u4e00\u4e2a\u672a\u6210\u5e74\u4eba'\r\n    },\r\n\r\n    // \u8ba1\u7b97\u5c5e\u6027\u7684\u7b80\u5199(\u53ea\u6709getter\u65f6)\r\n    // name() {\r\n    //   return this.lastName + this.firstName\r\n    // },\r\n\r\n    // \u53ef\u4ee5\u4e3a\u8ba1\u7b97\u5c5e\u6027\u8bbe\u7f6esetter\uff0c\u4f7f\u5f97\u8ba1\u7b97\u5c5e\u6027\u53ef\u5199\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\r\n    name: {\r\n      get() {\r\n        return this.lastName + this.firstName\r\n      },\r\n      // set\u5728\u8ba1\u7b97\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\u8c03\u7528\r\n      set(value) {\r\n        this.firstName = value.slice(1)\r\n        this.lastName = value[0]\r\n      },\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ stu.name }} - {{ stu.age }} - {{ stu.gender }}</h2>\r\n  <h2>\u8bc4\u8bed: {{ info }}</h2>\r\n  <h2>methods: {{ getInfo() }}</h2>\r\n  <h2>{{ name }}</h2>\r\n  <h2>{{ arr[0] }} - {{ arr[1] }} - {{ arr[2] }}</h2>\r\n  <button @click=\"updateAge\">\u70b9\u6211\u4e00\u4e0b\u4fee\u6539\u5e74\u9f84</button>\r\n  <button @click=\"updateMsg\">\u70b9\u6211\u4e00\u4e0b\u4fee\u6539msg</button>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u7ec4\u5408\u5f0f-api-\u7b80\u4ecb",children:"\u7ec4\u5408\u5f0f API \u7b80\u4ecb"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u7ec4\u5408\u5f0f api \u4e2d\u76f4\u63a5\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684\u53d8\u91cf\uff0c\u4e0d\u662f\u54cd\u5e94\u5f0f\u5c5e\u6027"}),"\n",(0,s.jsx)(r.li,{children:"\u4fee\u6539\u8fd9\u4e9b\u5c5e\u6027\u65f6\uff0c\u4e0d\u4f1a\u5728\u89c6\u56fe\u4e2d\u4ea7\u751f\u6548\u679c"}),"\n",(0,s.jsx)(r.li,{children:"\u53ef\u4ee5\u901a\u8fc7 reactive()\u6765\u521b\u5efa\u4e00\u4e2a\u54cd\u5e94\u5f0f\u7684\u5bf9\u8c61"}),"\n",(0,s.jsx)(r.li,{children:"\u5728 setup()\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de\u503c\u6765\u6307\u5b9a\u90a3\u4e9b\u5185\u5bb9\u8981\u66b4\u9732\u7ed9\u5916\u90e8"}),"\n",(0,s.jsx)(r.li,{children:"\u66b4\u9732\u540e\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5728\u6a21\u677f\u4e2d\u76f4\u63a5\u4f7f\u7528"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script>\r\nimport { reactive } from 'vue'\r\n\r\nexport default {\r\n  setup() {\r\n    const msg = 'Hello'\r\n    const count = 0\r\n\r\n    const stu = reactive({\r\n      name: '\u5b59\u609f\u7a7a',\r\n      age: 18,\r\n      gender: '\u7537',\r\n    })\r\n\r\n    const changeAge = () => {\r\n      stu.age++\r\n    }\r\n\r\n    return {\r\n      msg,\r\n      count,\r\n      stu,\r\n      changeAge,\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ count }}</h2>\r\n  <h2>{{ stu.name }} - {{ stu.age }} - {{ stu.gender }}</h2>\r\n  <button @click=\"changeAge\">\u70b9\u6211\u4e00\u4e0b</button>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script setup>\r\nimport { reactive } from 'vue'\r\n\r\nconst msg = 'Hello'\r\nconst count = 0\r\n\r\nconst stu = reactive({\r\n  name: '\u5b59\u609f\u7a7a',\r\n  age: 18,\r\n  gender: '\u7537',\r\n})\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ count }}</h2>\r\n  <h2>{{ stu.name }} - {{ stu.age }} - {{ stu.gender }}</h2>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u54cd\u5e94\u5f0f\u5bf9\u8c61",children:"\u54cd\u5e94\u5f0f\u5bf9\u8c61"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["reactive()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u7684\u54cd\u5e94\u5f0f\u4ee3\u7406"}),"\n",(0,s.jsx)(r.li,{children:"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u6df1\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61"}),"\n",(0,s.jsx)(r.li,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528 shallowReactive()\u521b\u5efa\u4e00\u4e2a\u6d45\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61"}),"\n",(0,s.jsxs)(r.li,{children:["\u7f3a\u70b9\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u53ea\u80fd\u8fd4\u56de\u5bf9\u8c61\u7684\u54cd\u5e94\u5f0f\u4ee3\u7406\uff01\u4e0d\u80fd\u5904\u7406\u539f\u59cb\u503c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["ref()","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u63a5\u6536\u4e00\u4e2a\u4efb\u610f\u503c\uff0c\u5e76\u8fd4\u56de\u5b83\u7684\u54cd\u5e94\u5f0f\u4ee3\u7406"}),"\n",(0,s.jsxs)(r.li,{children:["ref \u5728\u751f\u6210\u54cd\u5e94\u5f0f\u4ee3\u7406\u65f6\uff0c\u5b83\u662f\u5c06\u503c\u5305\u88c5\u4e3a\u4e86\u4e00\u4e2a\u5bf9\u8c61 0 --\x3e ",(0,s.jsx)(r.code,{children:"{value:0}"})]}),"\n",(0,s.jsx)(r.li,{children:"\u8bbf\u95ee ref \u5bf9\u8c61\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7 \u5bf9\u8c61.value \u6765\u8bbf\u95ee\u5176\u4e2d\u7684\u503c"}),"\n",(0,s.jsx)(r.li,{children:"\u5728\u6a21\u677f\u4e2d\uff0cref \u5bf9\u8c61\u4f1a\u88ab\u81ea\u52a8\u89e3\u5305"}),"\n",(0,s.jsx)(r.li,{children:"vue \u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u4f7f\u5f97 ref \u5bf9\u8c61\u5728 script \u6807\u7b7e\u4e2d\u4e5f\u53ef\u4ee5\u81ea\u52a8\u89e3\u5305"}),"\n",(0,s.jsx)(r.li,{children:"$\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\uff0c\u9700\u8981\u5728 vite \u63d2\u4ef6\u4e2d\u505a\u4e00\u4e9b\u914d\u7f6e reactivityTransform: true\uff0c\u5df2\u7ecf\u88ab\u5e9f\u5f03\u4e86"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"vite.config.js"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { defineConfig } from 'vite'\r\nimport vue from '@vitejs/plugin-vue'\r\n\r\n// https://vitejs.dev/config/\r\nexport default defineConfig({\r\n  plugins: [\r\n    vue({\r\n      reactivityTransform: true,\r\n    }),\r\n  ],\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"App.vue"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script setup>\r\nimport { reactive, ref } from 'vue'\r\n\r\nconst stu = reactive({\r\n  name: '\u5b59\u609f\u7a7a',\r\n  age: 18,\r\n  gender: '\u7537',\r\n})\r\n\r\n// count = 10\r\n// \u6539\u53d8\u91cf\u53ea\u4f1a\u5f71\u54cd\u5230\u53d8\u91cf\u81ea\u5df1\uff0c\u5728js\u4e2d\uff0c\u65e0\u6cd5\u5b9e\u73b0\u5bf9\u4e00\u4e2a\u53d8\u91cf\u7684\u4ee3\u7406\r\n\r\nconst count = ref(0)\r\nlet count2 = $ref(100)\r\n\r\nconsole.log(count.value)\r\n\r\nconst addHandler = () => {\r\n  count.value++\r\n  count2++\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ stu.name }} - {{ stu.age }} - {{ stu.gender }}</h2>\r\n  <button @click=\"addHandler\">\u70b9\u6211\u4e00\u4e0b {{ count }} {{ count2 }}</button>\r\n</template>\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"reactive.mjs"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { reactive, ref } from 'vue'\r\n\r\nconst stu = reactive({ name: '\u5b59\u609f\u7a7a' })\r\n\r\nconst count = ref(0) // { value: 0 }\r\n\r\nconst person = ref({\r\n  name: '\u732a\u516b\u6212',\r\n  age: 28,\r\n  gender: '\u7537',\r\n})\r\n\r\n/* \r\n  {\r\n    value: {\r\n      name: '\u732a\u516b\u6212',\r\n      age: 28,\r\n      gender: '\u7537',\r\n    }\r\n  }\r\n*/\r\n\r\nconsole.log(stu)\r\nconsole.log(person)\r\nconsole.log(count)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u7ec4\u5408\u5f0f-api-\u8865\u5145",children:"\u7ec4\u5408\u5f0f API \u8865\u5145"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4fee\u6539 ref \u5bf9\u8c61\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7 value"}),"\n",(0,s.jsx)(r.li,{children:"computed \u7528\u6765\u751f\u6210\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,s.jsx)(r.li,{children:"ref \u5bf9\u8c61\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u81ea\u52a8\u89e3\u5305(\u8981\u6c42 ref \u5bf9\u8c61\u5fc5\u987b\u662f\u9876\u5c42\u5bf9\u8c61)"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"<script setup>\r\nimport { computed, ref } from 'vue'\r\n\r\nconst msg = ref('Hello')\r\n\r\n// {value: obj}\r\n// obj.value.name\r\nconst obj = ref({\r\n  name: '\u5b59\u609f\u7a7a',\r\n  age: 18,\r\n})\r\n\r\n// obj2.name.value\r\nconst obj2 = {\r\n  name: ref('\u5b59\u609f\u7a7a'), // {value: \"\u5b59\u609f\u7a7a\"}\r\n  age: ref(18), // {value: 18}\r\n}\r\n\r\n// console.log(obj2.name.value)\r\n\r\n// \u89e3\u6784\u4e4b\u540e\u4f9d\u7136\u5177\u6709\u54cd\u5e94\u5f0f\r\nconst { name, age } = obj2\r\n\r\nconst changeAgeHandler = () => {\r\n  // \u4fee\u6539ref\u5bf9\u8c61\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7value\r\n  msg.value = '\u54c8\u54c8\u54c8'\r\n  obj2.age.value = 28\r\n}\r\n\r\nconst newMsg = computed(() => {\r\n  return msg.value + '\u563b\u563b\u563b'\r\n})\r\n<\/script>\r\n\r\n<template>\r\n  <h2>{{ msg }}</h2>\r\n  <h2>{{ newMsg }}</h2>\r\n  <h2>{{ obj.name }} - {{ obj.age + 1 }}</h2>\r\n\r\n  \x3c!-- name\u4e0d\u662f\u9876\u5c42\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u6240\u4ee5\u4e0d\u80fd\u81ea\u52a8\u89e3\u5305 --\x3e\r\n  <h2>{{ obj2.name.value }} - {{ obj2.age.value + 1 }}</h2>\r\n\r\n  <h2>{{ name }} - {{ age }}</h2>\r\n  <button @click=\"changeAgeHandler\">\u70b9\u6211\u4e00\u4e0b</button>\r\n</template>\n"})})]})}function h(n={}){const{wrapper:r}={...(0,l.a)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>a,a:()=>i});var s=e(7294);const l={},t=s.createContext(l);function i(n){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(t.Provider,{value:r},n.children)}}}]);