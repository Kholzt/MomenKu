import{r as n,j as e,U as p}from"./app-B1ljN0tO.js";import{z as u}from"./transition-Cz_d6m2J.js";const l=n.createContext(),c=({children:t})=>{const[o,r]=n.useState(!1),s=()=>{r(i=>!i)};return e.jsx(l.Provider,{value:{open:o,setOpen:r,toggleOpen:s},children:e.jsx("div",{className:"relative",children:t})})},x=({children:t})=>{const{open:o,setOpen:r,toggleOpen:s}=n.useContext(l);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:s,children:t}),o&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},f=({align:t="right",width:o="48",contentClasses:r="py-1 bg-white ",children:s})=>{const{open:i,setOpen:d}=n.useContext(l);let a="origin-top";t==="left"?a="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(a="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return o==="48"&&(g="w-48"),e.jsx(e.Fragment,{children:e.jsx(u,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${a} ${g}`,onClick:()=>d(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:s})})})})},m=({className:t="",children:o,...r})=>e.jsx(p,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  "+t,children:o});c.Trigger=x;c.Content=f;c.Link=m;function h({active:t=!1,className:o="",children:r,...s}){return e.jsx(p,{...s,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${t?"border-[--primary-color] bg-indigo-50 text-[--primary-color] focus:border-[--primary-color] focus:bg-indigo-100 focus:text-[--primary-color] ":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${o}`,children:r})}export{c as D,h as R};
