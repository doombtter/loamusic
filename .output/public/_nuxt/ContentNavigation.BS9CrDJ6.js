import{u as f}from"./asyncData.ypRaZIWa.js";import{k as v,ab as c,_ as g,d,ac as l,G as h,l as _,a8 as y,aa as r,A as C}from"./entry.5jZPTCiw.js";import{q as w,w as m,e as P,s as $,j as N,u as j}from"./query.DG_VdOiS.js";import{u as T}from"./preview.Bnuv130o.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if($())return(await g(()=>import("./client-db.DO6DBL4s.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await f(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),O=E;export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.DO6DBL4s.js","./entry.5jZPTCiw.js","./entry.CBCPIfrS.css","./query.DG_VdOiS.js","./preview.Bnuv130o.js","./index.C-v3KzvZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}