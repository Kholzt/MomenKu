import{r,j as s}from"./app-DMDxbNaA.js";import{T as i}from"./ThemeCard-BoHiOx59.js";const m=()=>{const[a,o]=r.useState(0),t=[{name:"Test 1",description:"Test Description",price:"0",thumbnail:"https://demo.datengdong.com/themes/one/thumb.png"},{name:"Test 2",description:"Test Description",price:"0",thumbnail:"https://demo.datengdong.com/themes/two/thumb.png"},{name:"Test 3",description:"Test Description",price:"0",thumbnail:"https://demo.datengdong.com/themes/three/thumb.png"}];return r.useEffect(()=>{const n=setInterval(()=>{o(e=>(e+1)%t.length)},3e3);return()=>clearInterval(n)},[t.length]),s.jsx("div",{className:"relative w-full md:h-auto h-80",children:s.jsx("div",{className:"relative flex w-full",children:t.map((n,e)=>s.jsx("div",{className:`absolute -top-10 left-1/2 transform transition-all duration-1000 ease-in-out  ${e===a?"-translate-x-1/2 z-[2] scale-y-110 opacity-100":e===(a+1)%t.length?" z-[1]  opacity-80":"-translate-x-full z-[1] opacity-80"}`,children:s.jsx(i,{theme:n})},e))})})};export{m as default};