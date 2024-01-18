import{a as r,s as l,c as X,j as d}from"./index-0559674c.js";import{r as o}from"./index-1b03fe98.js";import{x as W,U as G}from"./Write1-0f5c28b2.js";import{F as N}from"./Frame-f3688d20.js";import{B as J}from"./Button-1674c104.js";import{R as Q}from"./Range-f6ea9f25.js";import{T as Y}from"./index-5d7a0789.js";import{D as ee}from"./ListDivider-6693db38.js";const P=e=>r("svg",{height:"6",viewBox:"0 0 494.942 494.942",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"play",...e,children:r("path",{d:"M35.353 0l424.236 247.471L35.353 494.942z"})}),re=P;try{P.displayName="Play",P.__docgenInfo={description:"",displayName:"Play",props:{}}}catch{}const V=e=>r("svg",{height:"6",viewBox:"0 0 424.236 424.236",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"pause",...e,children:r("path",{d:"M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z"})}),te=V;try{V.displayName="Pause",V.__docgenInfo={description:"",displayName:"Pause",props:{}}}catch{}const E=e=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6","aria-label":"stop",...e,children:r("path",{d:"M0 0h306v306H0z"})}),ne=E;try{E.displayName="Stop",E.__docgenInfo={description:"",displayName:"Stop",props:{}}}catch{}const T=e=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",viewBox:"0 0 24 24",height:"6","aria-label":"fullscreen",...e,children:r("path",{d:"M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z",style:{width:1e3}})}),oe=T;try{T.displayName="Fullscreen",T.__docgenInfo={description:"",displayName:"Fullscreen",props:{}}}catch{}const se=l.video`
  width: 100%;
  padding: 2;

  display: ${({visible:e})=>e?"block":"none"};
`,ae=({src:e})=>r("source",{src:e,type:`video/${e.substring(e.length-3)}`}),b=l(J)`
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

    ${({disabled:e})=>e&&X`
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
`,ce=l(N)`
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
`,R=l(N)`
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
`,de=({playing:e})=>e?r(te,{}):r(re,{}),pe=e=>[].concat(e);function ue(e,i){const p=Math.floor(100/e.duration*e.currentTime);i(p)}function $(e){if(!e)return"00:00";const i=parseInt(e.toString(),10),p=Math.floor(i/3600),v=Math.floor(i/60)%60,_=i%60;return[p,v,_].map(c=>c<10?`0${c}`:c).filter((c,u)=>c!=="00"||u>0).join(":")}const me=({name:e,src:i,videoProps:p,style:v,..._},c)=>{const[u,g]=o.useState(!1),[s,A]=o.useState(!1),[U,x]=o.useState(0),t=o.useRef(null),D=o.useRef(null),F=o.useRef(null),S=o.useRef(null),I=o.useRef(null),z=o.useRef(null),M=pe(i),[K]=M,Z=`${e||K.replace(/^.*[\\/]/,"")}${s?"":" (Opening)"}`;return o.useImperativeHandle(c,()=>({get video(){return t},get progress(){return D},get wrapper(){return F},get playpause(){return S},get stop(){return I},get fullScreen(){return z}})),o.useEffect(()=>{var n,a,m,h;(n=t.current)==null||n.addEventListener("ended",()=>{g(!1),x(0)},!1),(a=t.current)==null||a.addEventListener("timeupdate",()=>{t.current&&ue(t.current,x)},!1),(m=t.current)==null||m.addEventListener("loadeddata",()=>{A(!0)},!1),(h=t.current)==null||h.addEventListener("playing",()=>{g(!0)},!1)},[t.current]),d(N,{p:2,..._,style:{width:s?void 0:260,...v},ref:F,children:[r(Y,{icon:r(W,{variant:"16x16_4"}),title:Z}),r(se,{...p,visible:s,ref:t,children:M.map(n=>r(ae,{src:n},n))}),s&&r(ee,{as:"span",style:{display:"block",marginBottom:2}}),d(R,{maxWidth:"250",mx:"auto",mb:4,children:[d(ce,{children:[d(R,{display:"flex",flexDirection:"column",w:"40%",children:[r(f,{style:{marginTop:"auto"},children:t.current&&$(t.current.duration)}),r(f,{style:{height:12},children:!s&&"Openning"})]}),d(R,{display:"flex",flexDirection:"column",w:"40%",children:[r(f,{style:{marginTop:"auto",fontSize:22},children:t.current&&$(t.current.currentTime)}),r(f,{style:{height:12},children:"time"})]})]}),d(ie,{children:[r(b,{disabled:!s,onClick:()=>{var n,a;u?(a=t.current)==null||a.pause():(n=t.current)==null||n.play(),g(!u)},ref:S,children:s?r(de,{playing:u}):r(G,{style:{borderRight:"none",borderBottom:"none"},variant:"32x32_4"})}),r(b,{disabled:!s,onClick:()=>{t.current&&(t.current.pause(),t.current.currentTime=0),g(!1)},ref:I,children:r(ne,{})}),r(b,{disabled:!s,onClick:()=>{var n;(n=t==null?void 0:t.current)==null||n.requestFullscreen()},ref:z,children:r(oe,{})}),r(le,{ref:D,min:"0",max:"100",step:"1",value:U,style:{width:"70%",marginLeft:20},onChange:({target:n})=>{const{current:a}=t;if(a){const m=parseInt(n.value),h=m/100;a.currentTime=h*a.duration,x(m)}}})]})]})]})},L=o.forwardRef(me),B=L;try{L.displayName="Video",L.__docgenInfo={description:"",displayName:"Video",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},videoProps:{defaultValue:null,description:"",name:"videoProps",required:!1,type:{name:"HTMLAttributes<HTMLVideoElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ge=""+new URL("EXPLORER-c8a6dc40.mp4",import.meta.url).href,Pe={title:"Video",component:B,tags:["autodocs"]},y={render:()=>r(B,{w:"320",src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",style:{marginBottom:4}}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},w={render:()=>r(B,{w:"320",src:ge,name:"Explorer"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}};var k,C,j;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(O=w.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const Ve=["FromURL","FromFile"];export{w as FromFile,y as FromURL,Ve as __namedExportsOrder,Pe as default};
