import{j as t,r as c,F as _,c as k}from"./iframe-BP1fKKyq.js";import{oI as ae,n as re}from"./Write1-CE8UsuL2.js";/* empty css                             */import{c as ne}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import{B as P}from"./Button-CYWwPWGC.js";import{R as se}from"./Range-Gvi9FpaP.js";import{T as oe}from"./TitleBar-B13jGq_-.js";var ie=ne({defaultClassName:"r95_13gnpv00",variantClassNames:{visible:{true:"r95_13gnpv01",false:"r95_13gnpv02"}},defaultVariants:{},compoundVariants:[]}),ce="r95_13gnpv03",le="r95_13gnpv04",b="r95_13gnpv05",de="r95_13gnpv06",pe="r95_13gnpv07",ue="r95_13gnpv08",me="r95_13gnpv09",ge="r95_13gnpv0a",ve="r95_13gnpv0b",E="r95_13gnpv0c",he="r95_13gnpv0d";const j=e=>t.jsx("svg",{height:"6",viewBox:"0 0 494.942 494.942",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"play",...e,children:t.jsx("path",{d:"M35.353 0l424.236 247.471L35.353 494.942z"})});try{j.displayName="Play",j.__docgenInfo={description:"",displayName:"Play",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Play.tsx",methods:[],props:{},tags:{}}}catch{}const V=e=>t.jsx("svg",{height:"6",viewBox:"0 0 424.236 424.236",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"pause",...e,children:t.jsx("path",{d:"M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z"})});try{V.displayName="Pause",V.__docgenInfo={description:"",displayName:"Pause",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Pause.tsx",methods:[],props:{},tags:{}}}catch{}const N=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6","aria-label":"stop",...e,children:t.jsx("path",{d:"M0 0h306v306H0z"})});try{N.displayName="Stop",N.__docgenInfo={description:"",displayName:"Stop",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Stop.tsx",methods:[],props:{},tags:{}}}catch{}const T=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",viewBox:"0 0 24 24",height:"6","aria-label":"fullscreen",...e,children:t.jsx("path",{d:"M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z",style:{width:1e3}})});try{T.displayName="Fullscreen",T.__docgenInfo={description:"",displayName:"Fullscreen",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Fullscreen.tsx",methods:[],props:{},tags:{}}}catch{}const we=({src:e})=>t.jsx("source",{src:e,type:`video/${e.substring(e.length-3)}`}),ye=({playing:e})=>e?t.jsx(V,{}):t.jsx(j,{}),xe=e=>[].concat(e);function fe(e,r){const u=Math.floor(100/e.duration*e.currentTime);r(u)}function D(e){if(!e)return"00:00";const r=parseInt(e.toString(),10),u=Math.floor(r/3600),l=Math.floor(r/60)%60,s=r%60;return[u,l,s].map(i=>i<10?`0${i}`:i).filter((i,d)=>i!=="00"||d>0).join(":")}const _e=({name:e,src:r,videoProps:u,...l},s)=>{const[i,d]=c.useState(!1),[p,G]=c.useState(!1),[J,R]=c.useState(0),a=c.useRef(null),B=c.useRef(null),H=c.useRef(null),S=c.useRef(null),F=c.useRef(null),L=c.useRef(null),M=xe(r),[ee]=M,te=`${e||ee.replace(/^.*[\\/]/,"")}${p?"":" (Opening)"}`;return c.useImperativeHandle(s,()=>({get video(){return a},get progress(){return B},get wrapper(){return H},get playpause(){return S},get stop(){return F},get fullScreen(){return L}})),c.useEffect(()=>{var o,m,v,f,O;(o=a.current)==null||o.addEventListener("ended",()=>{d(!1),R(0)},!1),(m=a.current)==null||m.addEventListener("timeupdate",()=>{a.current&&fe(a.current,R)},!1),(v=a.current)==null||v.addEventListener("loadeddata",()=>{G(!0)},!1),(f=a.current)==null||f.addEventListener("playing",()=>{d(!0)},!1),(O=a.current)==null||O.addEventListener("pause",()=>{d(!1)},!1)},[a.current]),t.jsxs(_,{...l,padding:"$2",boxShadow:"$out",backgroundColor:"$material",ref:H,children:[t.jsx(oe,{icon:t.jsx(ae,{variant:"16x16_4"}),title:te}),t.jsx("video",{className:ie({visible:p}),...u,ref:a,children:M.map(o=>t.jsx(we,{src:o},o))}),p&&t.jsx("span",{className:ve}),t.jsxs(_,{maxWidth:"250px",mx:"auto",mb:"$4",children:[t.jsxs("div",{className:le,children:[t.jsxs(_,{display:"flex",flexDirection:"column",w:"40%",children:[t.jsx("div",{className:k(b,de),children:a.current&&D(a.current.duration)}),t.jsx("div",{className:k(b,ue),children:!p&&"Openning"})]}),t.jsxs(_,{display:"flex",flexDirection:"column",w:"40%",children:[t.jsx("div",{className:k(b,pe),children:a.current&&D(a.current.currentTime)}),t.jsx("div",{className:k(b,me),children:"time"})]})]}),t.jsxs("div",{className:ce,children:[t.jsx(P,{className:E,disabled:!p,onClick:()=>{var o,m;(o=a.current)!=null&&o.paused?a.current.play().catch(()=>{console.warn("[React95] Video: the browser blocked playback. Browsers only play videos with sound after the user has interacted with the page.")}):(m=a.current)==null||m.pause()},ref:S,children:p?t.jsx(ye,{playing:i}):t.jsx(re,{className:ge,variant:"32x32_4"})}),t.jsx(P,{className:E,disabled:!p,onClick:()=>{a.current&&(a.current.pause(),a.current.currentTime=0),d(!1)},ref:F,children:t.jsx(N,{})}),t.jsx(P,{className:E,disabled:!p,onClick:()=>{var o;(o=a==null?void 0:a.current)==null||o.requestFullscreen()},ref:L,children:t.jsx(T,{})}),t.jsx(se,{className:he,ref:B,min:"0",max:"100",step:"1",value:J,onChange:({target:o})=>{const{current:m}=a;if(m){const v=parseInt(o.value),f=v/100;m.currentTime=f*m.duration,R(v)}}})]})]})]})},g=c.forwardRef(_e);try{g.displayName="Video",g.__docgenInfo={description:"",displayName:"Video",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/Video.tsx",methods:[],props:{name:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"name",required:!1,tags:{},type:{name:"string"}},src:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"src",required:!0,tags:{},type:{name:"string"}},videoProps:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"videoProps",required:!1,tags:{},type:{name:"HTMLProps<HTMLVideoElement>"}}},tags:{}}}catch{}const Q=""+new URL("EXPLORER-QBhXDSFm.mp4",import.meta.url).href,{expect:n,fireEvent:I,mocked:ke,spyOn:C,waitFor:h}=__STORYBOOK_MODULE_TEST__,be={title:"Video",component:g,tags:["autodocs"]},Y=(e,r)=>h(()=>n(e.getByText(r)).toHaveTextContent(/^\S+$/),{timeout:5e3}),w={args:{src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"},render:e=>t.jsx(g,{w:"320px",marginBottom:"$4",...e}),play:async({canvas:e})=>{await n(e.getByText(/^trailer_hd\.mp4/)).toBeVisible()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},y={args:{src:Q,name:"Explorer"},render:e=>t.jsx(g,{w:"320px",...e}),play:async({args:e,canvas:r,canvasElement:u,userEvent:l})=>{await Y(r,e.name),await n(r.getByText("00:21")).toBeVisible();const s=u.querySelector("video");await l.click(r.getAllByRole("button")[0]),await n(console.warn).toHaveBeenCalledWith(n.stringContaining("blocked playback")),await n(s).toHaveProperty("paused",!0),ke(HTMLMediaElement.prototype.play).mockRestore()},beforeEach:()=>{const e=C(HTMLMediaElement.prototype,"play").mockName("video.play").mockRejectedValue(new DOMException("Blocked","NotAllowedError")),r=C(console,"warn").mockName("console.warn");return()=>{e.mockRestore(),r.mockRestore()}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},x={args:{src:Q,name:"Explorer",videoProps:{muted:!0}},render:e=>t.jsx(g,{w:"320px",...e}),play:async({args:e,canvas:r,canvasElement:u,userEvent:l})=>{await Y(r,e.name);const s=u.querySelector("video"),i=r.getByRole("slider"),[d,p]=r.getAllByRole("button");await l.click(d),await h(()=>n(s).toHaveProperty("paused",!1)),await h(()=>n(i).not.toHaveValue("0"),{timeout:3e3}),await l.click(d),await n(s).toHaveProperty("paused",!0),await l.click(d),await h(()=>n(s).toHaveProperty("paused",!1)),await l.click(p),await n(s).toHaveProperty("paused",!0),await n(s).toHaveProperty("currentTime",0),await I.change(i,{target:{value:"50"}}),await n(s).toHaveProperty("currentTime",s.duration/2),await I.change(i,{target:{value:"99"}}),await l.click(d),await h(()=>n(s).toHaveProperty("ended",!0),{timeout:3e3}),await n(i).toHaveValue("0")}},Re=["FromURL","FromFile","Playback"];var q,z,$;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  },
  render: args => <Video w="320px" marginBottom="$4" {...args} />,
  play: async ({
    canvas
  }) => {
    // with no \`name\`, the title is the file name from \`src\`
    await expect(canvas.getByText(/^trailer_hd\\.mp4/)).toBeVisible();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21'
    }
  }
}`,...($=(z=w.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var A,K,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    src: EXPLORER_VIDEO,
    name: 'Explorer'
  },
  render: args => <Video w="320px" {...args} />,
  play: async ({
    args,
    canvas,
    canvasElement,
    userEvent
  }) => {
    // "Explorer (Opening)" until the video loads, then just its name
    await waitForVideo(canvas, args.name!);

    // and its length, 21 seconds
    await expect(canvas.getByText('00:21')).toBeVisible();

    // when the browser blocks playing it (it has sound, and the user hasn't
    // clicked the page yet), the video stays paused and Video only warns
    const video = canvasElement.querySelector('video')!;
    await userEvent.click(canvas.getAllByRole('button')[0]);
    await expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('blocked playback'));
    await expect(video).toHaveProperty('paused', true);

    // playing works again, for whoever clicks it
    mocked(HTMLMediaElement.prototype.play).mockRestore();
  },
  // the browser only blocks playback until the user's first click on the
  // page, so it's simulated, for the story to behave the same every time
  beforeEach: () => {
    const play = spyOn(HTMLMediaElement.prototype, 'play').mockName('video.play').mockRejectedValue(new DOMException('Blocked', 'NotAllowedError'));
    const warn = spyOn(console, 'warn').mockName('console.warn');
    return () => {
      play.mockRestore();
      warn.mockRestore();
    };
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21'
    }
  }
}`,...(U=(K=y.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Z,W;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: EXPLORER_VIDEO,
    name: 'Explorer',
    videoProps: {
      muted: true
    }
  },
  render: args => <Video w="320px" {...args} />,
  play: async ({
    args,
    canvas,
    canvasElement,
    userEvent
  }) => {
    await waitForVideo(canvas, args.name!);
    const video = canvasElement.querySelector('video')!;
    const progress = canvas.getByRole('slider');
    // the controls have no accessible name yet (#554), so they go by order
    const [playPause, stop] = canvas.getAllByRole('button');

    // Play plays it, and the bar follows it
    await userEvent.click(playPause);
    await waitFor(() => expect(video).toHaveProperty('paused', false));
    await waitFor(() => expect(progress).not.toHaveValue('0'), {
      timeout: 3000
    });

    // the same button pauses it
    await userEvent.click(playPause);
    await expect(video).toHaveProperty('paused', true);

    // Stop pauses it and goes back to the start
    await userEvent.click(playPause);
    await waitFor(() => expect(video).toHaveProperty('paused', false));
    await userEvent.click(stop);
    await expect(video).toHaveProperty('paused', true);
    await expect(video).toHaveProperty('currentTime', 0);

    // moving the bar seeks the video (fireEvent, since userEvent can't drag
    // a slider)
    await fireEvent.change(progress, {
      target: {
        value: '50'
      }
    });
    await expect(video).toHaveProperty('currentTime', video.duration / 2);

    // at the end, it stops and the bar goes back to the start
    await fireEvent.change(progress, {
      target: {
        value: '99'
      }
    });
    await userEvent.click(playPause);
    await waitFor(() => expect(video).toHaveProperty('ended', true), {
      timeout: 3000
    });
    await expect(progress).toHaveValue('0');
  }
}`,...(W=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};const Se=Object.freeze(Object.defineProperty({__proto__:null,FromFile:y,FromURL:w,Playback:x,__namedExportsOrder:Re,default:be},Symbol.toStringTag,{value:"Module"}));export{Se as V};
