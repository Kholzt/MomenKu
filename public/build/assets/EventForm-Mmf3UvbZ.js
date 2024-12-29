import{b as p,r as s,c as _e,a as Ie,j as d}from"./app-B1ljN0tO.js";import{B as O}from"./Button-wawFTDgb.js";import{C as Be}from"./Checkbox-BbMZBqhE.js";import{I as F}from"./InputLabel-BgVNvm9X.js";import{u as Ae,f as ae,s as oe,a as se,U as Oe,H as We,w as Ke,o as ne,M as Re}from"./Modal-C10LfZ-7.js";import{T as _}from"./TextInput-CZyV8Kdr.js";import{p as G,o as x,m as Ue,K as ie,y as le,n as Ve,L as J,_ as Ge}from"./transition-Cz_d6m2J.js";const ue=typeof document<"u"?p.useLayoutEffect:()=>{};function Je(e){const n=s.useRef(null);return ue(()=>{n.current=e},[e]),s.useCallback((...t)=>{const r=n.current;return r==null?void 0:r(...t)},[])}const H=e=>{var n;return(n=e==null?void 0:e.ownerDocument)!==null&&n!==void 0?n:document},w=e=>e&&"window"in e&&e.window===e?e:H(e).defaultView||window;function Ye(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function ze(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function ce(e){let n=null;return()=>(n==null&&(n=e()),n)}const Xe=ce(function(){return ze(/^Mac/i)}),qe=ce(function(){return Ye(/Android/i)});function Qe(e){return e.mozInputSource===0&&e.isTrusted?!0:qe()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class Ze{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function de(e){let n=s.useRef({isFocused:!1,observer:null});ue(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=Je(r=>{e==null||e(r)});return s.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let a=r.target,i=u=>{n.current.isFocused=!1,a.disabled&&t(new Ze("blur",u)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};a.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&a.disabled){var u;(u=n.current.observer)===null||u===void 0||u.disconnect();let o=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:o})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:o}))}}),n.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function et(e){let{isDisabled:n,onFocus:t,onBlur:r,onFocusChange:a}=e;const i=s.useCallback(c=>{if(c.target===c.currentTarget)return r&&r(c),a&&a(!1),!0},[r,a]),u=de(i),o=s.useCallback(c=>{const l=H(c.target);c.target===c.currentTarget&&l.activeElement===c.target&&(t&&t(c),a&&a(!0),u(c))},[a,t,u]);return{focusProps:{onFocus:!n&&(t||a||r)?o:void 0,onBlur:!n&&(r||a)?i:void 0}}}let M=null,K=new Set,P=new Map,T=!1,R=!1;const tt={Tab:!0,Escape:!0};function Y(e,n){for(let t of K)t(e,n)}function nt(e){return!(e.metaKey||!Xe()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function I(e){T=!0,nt(e)&&(M="keyboard",Y("keyboard",e))}function $(e){M="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(T=!0,Y("pointer",e))}function fe(e){Qe(e)&&(T=!0,M="virtual")}function me(e){e.target===window||e.target===document||(!T&&!R&&(M="virtual",Y("virtual",e)),T=!1,R=!1)}function pe(){T=!1,R=!0}function U(e){if(typeof window>"u"||P.get(w(e)))return;const n=w(e),t=H(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){T=!0,r.apply(this,arguments)},t.addEventListener("keydown",I,!0),t.addEventListener("keyup",I,!0),t.addEventListener("click",fe,!0),n.addEventListener("focus",me,!0),n.addEventListener("blur",pe,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",$,!0),t.addEventListener("pointermove",$,!0),t.addEventListener("pointerup",$,!0)):(t.addEventListener("mousedown",$,!0),t.addEventListener("mousemove",$,!0),t.addEventListener("mouseup",$,!0)),n.addEventListener("beforeunload",()=>{ve(e)},{once:!0}),P.set(n,{focus:r})}const ve=(e,n)=>{const t=w(e),r=H(e);n&&r.removeEventListener("DOMContentLoaded",n),P.has(t)&&(t.HTMLElement.prototype.focus=P.get(t).focus,r.removeEventListener("keydown",I,!0),r.removeEventListener("keyup",I,!0),r.removeEventListener("click",fe,!0),t.removeEventListener("focus",me,!0),t.removeEventListener("blur",pe,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",$,!0),r.removeEventListener("pointermove",$,!0),r.removeEventListener("pointerup",$,!0)):(r.removeEventListener("mousedown",$,!0),r.removeEventListener("mousemove",$,!0),r.removeEventListener("mouseup",$,!0)),P.delete(t))};function rt(e){const n=H(e);let t;return n.readyState!=="loading"?U(e):(t=()=>{U(e)},n.addEventListener("DOMContentLoaded",t)),()=>ve(e,t)}typeof document<"u"&&rt();function be(){return M!=="pointer"}const at=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ot(e,n,t){var r;const a=typeof window<"u"?w(t==null?void 0:t.target).HTMLInputElement:HTMLInputElement,i=typeof window<"u"?w(t==null?void 0:t.target).HTMLTextAreaElement:HTMLTextAreaElement,u=typeof window<"u"?w(t==null?void 0:t.target).HTMLElement:HTMLElement,o=typeof window<"u"?w(t==null?void 0:t.target).KeyboardEvent:KeyboardEvent;return e=e||(t==null?void 0:t.target)instanceof a&&!at.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||(t==null?void 0:t.target)instanceof i||(t==null?void 0:t.target)instanceof u&&(t==null?void 0:t.target.isContentEditable),!(e&&n==="keyboard"&&t instanceof o&&!tt[t.key])}function st(e,n,t){U(),s.useEffect(()=>{let r=(a,i)=>{ot(!!(t!=null&&t.isTextInput),a,i)&&e(be())};return K.add(r),()=>{K.delete(r)}},n)}function it(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:a}=e,i=s.useRef({isFocusWithin:!1}),u=s.useCallback(l=>{i.current.isFocusWithin&&!l.currentTarget.contains(l.relatedTarget)&&(i.current.isFocusWithin=!1,t&&t(l),a&&a(!1))},[t,a,i]),o=de(u),c=s.useCallback(l=>{!i.current.isFocusWithin&&document.activeElement===l.target&&(r&&r(l),a&&a(!0),i.current.isFocusWithin=!0,o(l))},[r,a,o]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:u}}}let B=!1,W=0;function V(){B=!0,setTimeout(()=>{B=!1},50)}function re(e){e.pointerType==="touch"&&V()}function lt(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",re):document.addEventListener("touchend",V),W++,()=>{W--,!(W>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",re):document.removeEventListener("touchend",V))}}function ut(e){let{onHoverStart:n,onHoverChange:t,onHoverEnd:r,isDisabled:a}=e,[i,u]=s.useState(!1),o=s.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;s.useEffect(lt,[]);let{hoverProps:c,triggerHoverEnd:l}=s.useMemo(()=>{let m=(f,h)=>{if(o.pointerType=h,a||h==="touch"||o.isHovered||!f.currentTarget.contains(f.target))return;o.isHovered=!0;let E=f.currentTarget;o.target=E,n&&n({type:"hoverstart",target:E,pointerType:h}),t&&t(!0),u(!0)},v=(f,h)=>{if(o.pointerType="",o.target=null,h==="touch"||!o.isHovered)return;o.isHovered=!1;let E=f.currentTarget;r&&r({type:"hoverend",target:E,pointerType:h}),t&&t(!1),u(!1)},b={};return typeof PointerEvent<"u"?(b.onPointerEnter=f=>{B&&f.pointerType==="mouse"||m(f,f.pointerType)},b.onPointerLeave=f=>{!a&&f.currentTarget.contains(f.target)&&v(f,f.pointerType)}):(b.onTouchStart=()=>{o.ignoreEmulatedMouseEvents=!0},b.onMouseEnter=f=>{!o.ignoreEmulatedMouseEvents&&!B&&m(f,"mouse"),o.ignoreEmulatedMouseEvents=!1},b.onMouseLeave=f=>{!a&&f.currentTarget.contains(f.target)&&v(f,"mouse")}),{hoverProps:b,triggerHoverEnd:v}},[n,t,r,a,o]);return s.useEffect(()=>{a&&l({currentTarget:o.target},o.pointerType)},[a]),{hoverProps:c,isHovered:i}}function ct(e={}){let{autoFocus:n=!1,isTextInput:t,within:r}=e,a=s.useRef({isFocused:!1,isFocusVisible:n||be()}),[i,u]=s.useState(!1),[o,c]=s.useState(()=>a.current.isFocused&&a.current.isFocusVisible),l=s.useCallback(()=>c(a.current.isFocused&&a.current.isFocusVisible),[]),m=s.useCallback(f=>{a.current.isFocused=f,u(f),l()},[l]);st(f=>{a.current.isFocusVisible=f,l()},[],{isTextInput:t});let{focusProps:v}=et({isDisabled:r,onFocusChange:m}),{focusWithinProps:b}=it({isDisabled:!r,onFocusWithinChange:m});return{isFocused:i,isFocusVisible:o,focusProps:r?b:v}}function dt(e){let n=e.width/2,t=e.height/2;return{top:e.clientY-t,right:e.clientX+n,bottom:e.clientY+t,left:e.clientX-n}}function ft(e,n){return!(!e||!n||e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)}function mt({disabled:e=!1}={}){let n=s.useRef(null),[t,r]=s.useState(!1),a=G(),i=x(()=>{n.current=null,r(!1),a.dispose()}),u=x(o=>{if(a.dispose(),n.current===null){n.current=o.currentTarget,r(!0);{let c=Ae(o.currentTarget);a.addEventListener(c,"pointerup",i,!1),a.addEventListener(c,"pointermove",l=>{if(n.current){let m=dt(l);r(ft(m,n.current.getBoundingClientRect()))}},!1),a.addEventListener(c,"pointercancel",i,!1)}}});return{pressed:t,pressProps:e?{}:{onPointerDown:u,onPointerUp:i,onClick:i}}}function pt(e,n,t){let[r,a]=s.useState(t),i=e!==void 0,u=s.useRef(i),o=s.useRef(!1),c=s.useRef(!1);return i&&!u.current&&!o.current?(o.current=!0,u.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&u.current&&!c.current&&(c.current=!0,u.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:r,x(l=>(i||a(l),n==null?void 0:n(l)))]}function vt(e){let[n]=s.useState(e);return n}function he(e={},n=null,t=[]){for(let[r,a]of Object.entries(e))$e(t,ge(n,r),a);return t}function ge(e,n){return e?e+"["+n+"]":n}function $e(e,n,t){if(Array.isArray(t))for(let[r,a]of t.entries())$e(e,ge(n,r.toString()),a);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):he(t,n,e)}function bt(e){var n,t;let r=(n=e==null?void 0:e.form)!=null?n:e.closest("form");if(r){for(let a of r.elements)if(a!==e&&(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image")){a.click();return}(t=r.requestSubmit)==null||t.call(r)}}let ht=s.createContext(null);function gt({children:e}){let n=s.useContext(ht);if(!n)return p.createElement(p.Fragment,null,e);let{target:t}=n;return t?_e.createPortal(p.createElement(p.Fragment,null,e),t):null}function $t({data:e,form:n,disabled:t,onReset:r,overrides:a}){let[i,u]=s.useState(null),o=G();return s.useEffect(()=>{if(r&&i)return o.addEventListener(i,"reset",r)},[i,n,r]),p.createElement(gt,null,p.createElement(Et,{setForm:u,formId:n}),he(e).map(([c,l])=>p.createElement(ae,{features:oe.Hidden,...Ue({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:t,name:c,value:l,...a})})))}function Et({setForm:e,formId:n}){return s.useEffect(()=>{if(n){let t=document.getElementById(n);t&&e(t)}},[e,n]),n?null:p.createElement(ae,{features:oe.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:t=>{if(!t)return;let r=t.closest("form");r&&e(r)}})}let yt=s.createContext(void 0);function Ee(){return s.useContext(yt)}function xt(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return r&&wt(t)?!1:r}function wt(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let A=s.createContext(null);A.displayName="LabelContext";function ye(){let e=s.useContext(A);if(e===null){let n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,ye),n}return e}function xe(e){var n,t,r;let a=(t=(n=s.useContext(A))==null?void 0:n.value)!=null?t:void 0;return((r=void 0)!=null?r:0)>0?[a,...e].filter(Boolean).join(" "):a}function Tt({inherit:e=!1}={}){let n=xe(),[t,r]=s.useState([]),a=e?[n,...t].filter(Boolean):t;return[a.length>0?a.join(" "):void 0,s.useMemo(()=>function(i){let u=x(c=>(r(l=>[...l,c]),()=>r(l=>{let m=l.slice(),v=m.indexOf(c);return v!==-1&&m.splice(v,1),m}))),o=s.useMemo(()=>({register:u,slot:i.slot,name:i.name,props:i.props,value:i.value}),[u,i.slot,i.name,i.props,i.value]);return p.createElement(A.Provider,{value:o},i.children)},[r])]}let jt="label";function Ft(e,n){var t;let r=s.useId(),a=ye(),i=Ee(),u=se(),{id:o=`headlessui-label-${r}`,htmlFor:c=i??((t=a.props)==null?void 0:t.htmlFor),passive:l=!1,...m}=e,v=le(n);Ve(()=>a.register(o),[o,a.register]);let b=x(j=>{let L=j.currentTarget;if(L instanceof HTMLLabelElement&&j.preventDefault(),a.props&&"onClick"in a.props&&typeof a.props.onClick=="function"&&a.props.onClick(j),L instanceof HTMLLabelElement){let g=document.getElementById(L.htmlFor);if(g){let N=g.getAttribute("disabled");if(N==="true"||N==="")return;let D=g.getAttribute("aria-disabled");if(D==="true"||D==="")return;(g instanceof HTMLInputElement&&(g.type==="radio"||g.type==="checkbox")||g.role==="radio"||g.role==="checkbox"||g.role==="switch")&&g.click(),g.focus({preventScroll:!0})}}}),f=u||!1,h=s.useMemo(()=>({...a.slot,disabled:f}),[a.slot,f]),E={ref:v,...a.props,id:o,htmlFor:c,onClick:b};return l&&("onClick"in E&&(delete E.htmlFor,delete E.onClick),"onClick"in m&&delete m.onClick),J()({ourProps:E,theirProps:m,slot:h,defaultTag:c?jt:"div",name:a.name||"Label"})}let Lt=ie(Ft),kt=Object.assign(Lt,{});function Ct(e,n){return s.useMemo(()=>{var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||(n==null?void 0:n.tagName)==="BUTTON"&&!n.hasAttribute("type"))return"button"},[e.type,e.as,n])}let z=s.createContext(null);z.displayName="GroupContext";let St=s.Fragment;function Pt(e){var n;let[t,r]=s.useState(null),[a,i]=Tt(),[u,o]=Ke(),c=s.useMemo(()=>({switch:t,setSwitch:r}),[t,r]),l={},m=e,v=J();return p.createElement(o,{name:"Switch.Description",value:u},p.createElement(i,{name:"Switch.Label",value:a,props:{htmlFor:(n=c.switch)==null?void 0:n.id,onClick(b){t&&(b.currentTarget instanceof HTMLLabelElement&&b.preventDefault(),t.click(),t.focus({preventScroll:!0}))}}},p.createElement(z.Provider,{value:c},v({ourProps:l,theirProps:m,slot:{},defaultTag:St,name:"Switch.Group"}))))}let Ht="button";function Mt(e,n){var t;let r=s.useId(),a=Ee(),i=se(),{id:u=a||`headlessui-switch-${r}`,disabled:o=i||!1,checked:c,defaultChecked:l,onChange:m,name:v,value:b,form:f,autoFocus:h=!1,...E}=e,j=s.useContext(z),[L,g]=s.useState(null),N=s.useRef(null),D=le(N,n,j===null?null:j.setSwitch,g),k=vt(l),[C,S]=pt(c,m,k??!1),we=G(),[X,q]=s.useState(!1),Q=x(()=>{q(!0),S==null||S(!C),we.nextFrame(()=>{q(!1)})}),Te=x(y=>{if(xt(y.currentTarget))return y.preventDefault();y.preventDefault(),Q()}),je=x(y=>{y.key===ne.Space?(y.preventDefault(),Q()):y.key===ne.Enter&&bt(y.currentTarget)}),Fe=x(y=>y.preventDefault()),Le=xe(),ke=Oe(),{isFocusVisible:Z,focusProps:Ce}=ct({autoFocus:h}),{isHovered:ee,hoverProps:Se}=ut({isDisabled:o}),{pressed:te,pressProps:Pe}=mt({disabled:o}),He=s.useMemo(()=>({checked:C,disabled:o,hover:ee,focus:Z,active:te,autofocus:h,changing:X}),[C,ee,Z,te,o,X,h]),Me=Ge({id:u,ref:D,role:"switch",type:Ct(e,L),tabIndex:e.tabIndex===-1?0:(t=e.tabIndex)!=null?t:0,"aria-checked":C,"aria-labelledby":Le,"aria-describedby":ke,disabled:o||void 0,autoFocus:h,onClick:Te,onKeyUp:je,onKeyPress:Fe},Ce,Se,Pe),Ne=s.useCallback(()=>{if(k!==void 0)return S==null?void 0:S(k)},[S,k]),De=J();return p.createElement(p.Fragment,null,v!=null&&p.createElement($t,{disabled:o,data:{[v]:b||"on"},overrides:{type:"checkbox",checked:C},form:f,onReset:Ne}),De({ourProps:Me,theirProps:E,slot:He,defaultTag:Ht,name:"Switch"}))}let Nt=ie(Mt),Dt=Pt,_t=kt,It=We,Bt=Object.assign(Nt,{Group:Dt,Label:_t,Description:It});const Gt=({idInvitation:e})=>{const[n,t]=s.useState(!1);s.useState(!1);const{data:r,setData:a,post:i,processing:u,errors:o}=Ie({judul:"",tanggal:new Date().toISOString().split("T")[0],jam_mulai:"09:00",jam_selesai:"12:00",jam_sampai_selesai:!1,alamat:"",acara_utama:!1}),c=l=>{l.preventDefault(),i(route("invitation.storeEvent",e),{onSuccess:()=>t(!1)})};return d.jsxs("div",{className:"flex items-center",children:[d.jsx("h1",{className:" font-bold text-xl",children:"Acara"}),d.jsx(O,{onClick:()=>t(!0),type:"button",variant:"primary",className:"ms-auto",children:"Tambah"}),d.jsx(Re,{show:n,closeable:!0,onClose:()=>t(!1),children:d.jsxs("form",{onSubmit:c,children:[d.jsxs("div",{className:"grid md:grid-cols-2 mb-4 gap-6 p-6",children:[d.jsxs("div",{children:[d.jsx(F,{htmlFor:"judul",className:" mb-2",children:"Judul"}),d.jsx(_,{type:"text",placeholder:"Resepsi",className:"block w-full",name:"judul",id:"judul",value:r.judul,onChange:l=>a("judul",l.target.value)}),o.judul&&d.jsx("span",{className:"text-red-500",children:o.judul})]}),d.jsxs("div",{children:[d.jsx(F,{htmlFor:"tanggal",className:" mb-2",children:"Tanggal"}),d.jsx(_,{type:"date",className:"block w-full",name:"tanggal",id:"tanggal",value:r.tanggal,onChange:l=>a("tanggal",l.target.value)}),o.tanggal&&d.jsx("span",{className:"text-red-500",children:o.tanggal})]}),d.jsxs("div",{children:[d.jsx(F,{htmlFor:"jam_mulai",className:" mb-2",children:"Jam Mulai"}),d.jsx(_,{type:"time",className:"block w-full",name:"jam_mulai",id:"jam_mulai",value:r.jam_mulai,onChange:l=>a("jam_mulai",l.target.value)}),o.jam_mulai&&d.jsx("span",{className:"text-red-500",children:o.jam_mulai})]}),d.jsxs("div",{children:[d.jsx(F,{htmlFor:"jam_selesai",className:" mb-2",children:"Jam Selesai"}),d.jsx(_,{type:"time",className:"block w-full",name:"jam_selesai",id:"jam_selesai",value:r.jam_selesai,onChange:l=>a("jam_selesai",l.target.value),disabled:r.jam_sampai_selesai}),o.jam_selesai&&d.jsx("span",{className:"text-red-500",children:o.jam_selesai}),d.jsxs("label",{className:"mt-2 inline-block select-none",children:[d.jsx(Be,{name:"jam_sampai_selesai",className:"me-2",checked:r.jam_sampai_selesai,onChange:l=>a("jam_sampai_selesai",l.target.checked)}),"Sampai selesai"]})]}),d.jsxs("div",{className:"col-span-2",children:[d.jsx(F,{htmlFor:"alamat",className:" mb-2",children:"Alamat"}),d.jsx("textarea",{name:"alamat",rows:4,className:"rounded-md border-gray-300 shadow-sm focus:border-[--primary-color] focus:ring-[--primary-color] w-full resize-none",id:"alamat",placeholder:"Jl. Pakisan , Kab Bondowoso, Kec Tenggarang, Desa Bataan",value:r.alamat,onChange:l=>a("alamat",l.target.value)}),o.alamat&&d.jsx("span",{className:"text-red-500",children:o.alamat})]}),d.jsxs("div",{className:"col-span-2 flex justify-between",children:[d.jsxs("div",{className:"flex flex-col",children:[d.jsx(F,{htmlFor:"acara_utama",className:"inline",children:"Jadikan Acara Utama"}),d.jsx("small",{className:"text-slate-500",children:"Countdown mengacu pada acara utama"})]}),d.jsx(Bt,{checked:r.acara_utama,onChange:l=>a("acara_utama",l),className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600",children:d.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]}),d.jsxs("div",{className:"p-6 border-t flex gap-2 justify-end",children:[d.jsx(O,{onClick:()=>t(!1),type:"button",variant:"primary-outline",children:"Batal"}),d.jsx(O,{type:"submit",variant:"primary",disabled:u,children:u?"Loading...":"Tambah"})]})]})})]})};export{Gt as default};
