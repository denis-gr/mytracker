if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>r(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mytracker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.c4f5d54c.css",revision:null},{url:"/index.html",revision:"b7945c3383979a875ab976c39751b6e7"},{url:"/js/app.93f3ab93.js",revision:null},{url:"/js/chunk-vendors.7e3a4c01.js",revision:null},{url:"/manifest.json",revision:"b5d6ac39064b56c2a8053b051b942c67"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
