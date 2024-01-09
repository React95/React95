import{d as E}from"./index-356e4a49.js";const{useMemo:f,useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:B}=M,S=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,x=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(t=>t.value===r))return r;let n=e.find(t=>t.name===a);if(n)return n.value;if(a){let t=e.map(o=>o.name).join(", ");h.warn(E`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${t}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{var a;let e=s.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},A=(r,e,a)=>{var t;let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let o=s.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,d=s.getElementById(i);d?(t=d.parentElement)==null||t.insertBefore(o,d):s.head.appendChild(o)}},L=(r,e)=>{var c;let{globals:a,parameters:n}=e,t=(c=a[p])==null?void 0:c.value,o=n[p],i=f(()=>o.disable?"transparent":x(t,o.values,o.default),[o,t]),d=f(()=>i&&i!=="transparent",[i]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${i} !important;
        ${S()?"":l}
      }
    `},[i,g]);return v(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){k(l);return}A(l,u,e.viewMode==="docs"?e.id:null)},[d,u,e]),r()},T=(r,e)=>{var y;let{globals:a,parameters:n}=e,t=n[p].grid,o=((y=a[p])==null?void 0:y.grid)===!0&&t.disable!==!0,{cellAmount:i,cellSize:d,opacity:g}=t,u=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=t.offsetX??(u?20:c),m=t.offsetY??(u?20:c),$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${b} {
        background-size: ${_} !important;
        background-position: ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return v(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){k(b);return}w(b,$)},[o,$,e]),r()},I=[T,L],R={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[p]:null};export{I as decorators,G as globals,R as parameters};
