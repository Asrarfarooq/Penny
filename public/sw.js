if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ee361d2ca7b2e503349b33f002f4f0f4"},{url:"/_next/static/UxWS6VbD1D0tS9ef7A7E-/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/UxWS6VbD1D0tS9ef7A7E-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-c993917cdbaa7521.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/231-32a639d207333520.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/382-fa80401ed665018d.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/_not-found/page-c83c328071fd749e.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/features/page-a0f9bd7bd68efe11.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/help/page-0df5aab7b6cd3a6d.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/historical/page-11d67dcc202f8178.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/layout-d9c5a2f6dc523617.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/page-1d2e6a47e23621ab.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/app/settings/page-8e91f3b918469a99.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/fd9d1056-22ad9d73a551ad1a.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/main-929f3f1ed4469366.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/main-app-af8603a4b5b31ded.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1214e4bd8911037e.js",revision:"UxWS6VbD1D0tS9ef7A7E-"},{url:"/_next/static/css/a5632a7e6d17244d.css",revision:"a5632a7e6d17244d"},{url:"/icon.svg",revision:"be5b14df929a0ab8f77c517c092d3b3c"},{url:"/manifest.json",revision:"d89199bd7ba614bb02c67b3a3f9d063f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
