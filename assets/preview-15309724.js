import{d as E}from"./index-356e4a49.js";const{global:M}=__STORYBOOK_MODULE_GLOBAL__,{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:B}=M,S=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,x=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(i=>i.name).join(", ");h.warn(E`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},v=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},w=(r,e)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},A=(r,e,t)=>{let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=s.getElementById(i);d?d.parentElement.insertBefore(a,d):s.head.appendChild(a)}};const{useMemo:f,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__;var L=(r,e)=>{var c;let{globals:t,parameters:n}=e,a=(c=t[p])==null?void 0:c.value,i=n[p],d=f(()=>i.disable?"transparent":x(a,i.values,i.default),[i,a]),o=f(()=>d&&d!=="transparent",[d]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${d} !important;
        ${S()?"":l}
      }
    `},[d,g]);return k(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){v(l);return}A(l,u,e.viewMode==="docs"?e.id:null)},[o,u,e]),r()},T=(r,e)=>{var y;let{globals:t,parameters:n}=e,a=n[p].grid,i=((y=t[p])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:o,opacity:g}=a,u=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=a.offsetX??(u?20:c),m=a.offsetY??(u?20:c),$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${o*d}px ${o*d}px`,`${o*d}px ${o*d}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${_} !important;
        background-position: ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return k(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){v(b);return}w(b,$)},[i,$,e]),r()},I=[T,L],R={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[p]:null};export{I as decorators,G as globals,R as parameters};
//# sourceMappingURL=preview-15309724.js.map
