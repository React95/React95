import{a as t,s as l,c as Z,j as p}from"./index-9af3809b.js";import{r as s}from"./index-ebeaab24.js";import{y as W,U as G}from"./Write1-4d3cd2cb.js";import{F as D}from"./Frame-b3eb3b92.js";import{B as J}from"./Button-c53c5656.js";import{R as Q}from"./Range-fd9abf26.js";import{T as Y}from"./index-b00b62c0.js";import{D as ee}from"./ListDivider-1ac362e6.js";const E=e=>t("svg",{height:"6",viewBox:"0 0 494.942 494.942",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"play",...e,children:t("path",{d:"M35.353 0l424.236 247.471L35.353 494.942z"})}),te=E;try{E.displayName="Play",E.__docgenInfo={description:"",displayName:"Play",props:{}}}catch{}const V=e=>t("svg",{height:"6",viewBox:"0 0 424.236 424.236",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"pause",...e,children:t("path",{d:"M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z"})}),re=V;try{V.displayName="Pause",V.__docgenInfo={description:"",displayName:"Pause",props:{}}}catch{}const T=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6","aria-label":"stop",...e,children:t("path",{d:"M0 0h306v306H0z"})}),ne=T;try{T.displayName="Stop",T.__docgenInfo={description:"",displayName:"Stop",props:{}}}catch{}const L=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",viewBox:"0 0 24 24",height:"6","aria-label":"fullscreen",...e,children:t("path",{d:"M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z",style:{width:1e3}})}),se=L;try{L.displayName="Fullscreen",L.__docgenInfo={description:"",displayName:"Fullscreen",props:{}}}catch{}const oe=l.video`
  width: 100%;
  padding: 2;

  display: ${({visible:e})=>e?"block":"none"};
`,ae=({src:e})=>t("source",{src:e,type:`video/${e.substring(e.length-3)}`}),R=l(J)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: materialText;
  }

  &&,
  &:active,
  &:focus {
    width: 20px;
    height: 20px;
    padding: 7;

    ${({disabled:e})=>e&&Z`
        padding: 4;
        svg {
          fill: borderDark;
          border-bottom: 1px solid;
          border-bottom-color: borderLightest;
          border-right: 1px solid;
          border-right-color: borderLightest;
        }
      `}
  }
`,ie=l.div`
  display: flex;
  align-items: center;
  padding: 2 0;
`,ce=l(D)`
  display: flex;
  padding: 6;
  margin-bottom: 4;

  box-shadow: in;
  background-color: canvas;
  height: 50px;

  color: canvasText;
`,f=l.span`
  font-family: 'React95Video-Numbers';
  text-transform: uppercase;
`,P=l(D)`
  background-color: transparent;
  box-shadow: none;
`,le=l(Q)`
  &::-webkit-slider-thumb {
    height: 18px;
    margin-top: -7px;
    width: 10px;
  }

  &[value='0']::-webkit-slider-thumb {
    margin-left: -2px;
  }
`,de=({playing:e})=>e?t(re,{}):t(te,{}),pe=e=>[].concat(e);function ue(e,i){const u=Math.floor(100/e.duration*e.currentTime);i(u)}function k(e){if(!e)return"00:00";const i=parseInt(e.toString(),10),u=Math.floor(i/3600),v=Math.floor(i/60)%60,_=i%60;return[u,v,_].map(c=>c<10?`0${c}`:c).filter((c,m)=>c!=="00"||m>0).join(":")}const me=({name:e,src:i,videoProps:u,style:v,..._},c)=>{const[m,h]=s.useState(!1),[o,A]=s.useState(!1),[U,x]=s.useState(0),r=s.useRef(null),b=s.useRef(null),S=s.useRef(null),B=s.useRef(null),I=s.useRef(null),z=s.useRef(null),M=pe(i),[K]=M,X=`${e||K.replace(/^.*[\\/]/,"")}${o?"":" (Opening)"}`;return s.useImperativeHandle(c,()=>({get video(){return r},get progress(){return b},get wrapper(){return S},get playpause(){return B},get stop(){return I},get fullScreen(){return z}})),s.useEffect(()=>{var n,a,d,g;(n=r.current)==null||n.addEventListener("ended",()=>{h(!1),x(0)},!1),(a=r.current)==null||a.addEventListener("timeupdate",()=>{r.current&&ue(r.current,x)},!1),(d=r.current)==null||d.addEventListener("loadeddata",()=>{A(!0)},!1),(g=r.current)==null||g.addEventListener("playing",()=>{h(!0)},!1)},[r.current]),p(D,{p:2,..._,style:{width:o?void 0:260,...v},ref:S,children:[t(Y,{icon:t(W,{variant:"16x16_4"}),title:X}),t(oe,{...u,visible:o,ref:r,children:M.map(n=>t(ae,{src:n},n))}),o&&t(ee,{as:"span",style:{display:"block",marginBottom:2}}),p(P,{maxWidth:"250",mx:"auto",mb:4,children:[p(ce,{children:[p(P,{display:"flex",flexDirection:"column",w:"40%",children:[t(f,{style:{marginTop:"auto"},children:r.current&&k(r.current.duration)}),t(f,{style:{height:12},children:!o&&"Openning"})]}),p(P,{display:"flex",flexDirection:"column",w:"40%",children:[t(f,{style:{marginTop:"auto",fontSize:22},children:r.current&&k(r.current.currentTime)}),t(f,{style:{height:12},children:"time"})]})]}),p(ie,{children:[t(R,{disabled:!o,onClick:()=>{var n,a;m?(a=r.current)==null||a.pause():(n=r.current)==null||n.play(),h(!m)},ref:B,children:o?t(de,{playing:m}):t(G,{variant:"32x32_4"})}),t(R,{disabled:!o,onClick:()=>{r.current&&(r.current.pause(),r.current.currentTime=0),h(!1)},ref:I,children:t(ne,{})}),t(R,{disabled:!o,onClick:()=>{var n;(n=r==null?void 0:r.current)==null||n.requestFullscreen()},ref:z,children:t(se,{})}),t(le,{ref:b,min:"0",max:"100",step:"1",value:U,style:{width:"70%",marginLeft:20},onClick:n=>{const{current:a}=b,{current:d}=r;if(d&&a){const g=n.nativeEvent.offsetX/a.offsetWidth;d.currentTime=g*d.duration,x(Math.floor(g/100))}}})]})]})]})},N=s.forwardRef(me),F=N;try{N.displayName="Video",N.__docgenInfo={description:"",displayName:"Video",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},videoProps:{defaultValue:null,description:"",name:"videoProps",required:!1,type:{name:"HTMLAttributes<HTMLVideoElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ge=""+new URL("EXPLORER-c8a6dc40.mp4",import.meta.url).href,Pe={title:"Video",component:F,tags:["autodocs"]},y={render:()=>t(F,{w:"320",src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",style:{marginBottom:4}}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},w={render:()=>t(F,{w:"320",src:ge,name:"Explorer"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}};var $,C,j;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Video w="320" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" style={{
    marginBottom: 4
  }} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21'
    }
  }
}`,...(j=(C=y.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var q,O,H;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Video w="320" src={EXPLORER_VIDEO} name="Explorer" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21'
    }
  }
}`,...(H=(O=w.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const Ee=["FromURL","FromFile"];export{w as FromFile,y as FromURL,Ee as __namedExportsOrder,Pe as default};
//# sourceMappingURL=video.stories-977f01a4.js.map
