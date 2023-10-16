var i="storybook/highlight",d="storybookHighlight",r=`${i}/add`,s=`${i}/reset`;const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:l}=O,H=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,I=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),_=g.getChannel(),T=e=>{let t=d;n();let o=Array.from(new Set(e.elements)),h=l.createElement("style");h.setAttribute("id",t),h.innerHTML=o.map(a=>`${a}{
          ${H(e.color,e.style)}
         }`).join(" "),l.head.appendChild(h)},n=()=>{var o;let e=d,t=l.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};_.on(E,n);_.on(s,n);_.on(r,T);export{I as highlightObject,H as highlightStyle};
//# sourceMappingURL=preview-b3c37142.js.map
