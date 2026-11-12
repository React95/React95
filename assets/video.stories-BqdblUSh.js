import{n as te,j as a,r as l,F as _,c as b}from"./iframe-B9_iyyAy.js";import{sS as ne,n as re}from"./Write1-3eQp6NPG.js";/* empty css                             */import{B as R}from"./Button-BqHLXCJc.js";import{R as se}from"./Range-Brdyx8zY.js";import{T as oe}from"./TitleBar-pdS9yeYg.js";var ie=te({defaultClassName:"r95_13gnpv00",variantClassNames:{visible:{true:"r95_13gnpv01",false:"r95_13gnpv02"}},defaultVariants:{},compoundVariants:[]}),ce="r95_13gnpv03",le="r95_13gnpv04",P="r95_13gnpv05",pe="r95_13gnpv06",de="r95_13gnpv07",ue="r95_13gnpv08",me="r95_13gnpv09",ge="r95_13gnpv0a",ve="r95_13gnpv0b",E="r95_13gnpv0c",he="r95_13gnpv0d";const j=e=>a.jsx("svg",{height:"6",viewBox:"0 0 494.942 494.942",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"play",...e,children:a.jsx("path",{d:"M35.353 0l424.236 247.471L35.353 494.942z"})});try{j.displayName="Play",j.__docgenInfo={description:"",displayName:"Play",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Play.tsx",methods:[],props:{},tags:{}}}catch{}const V=e=>a.jsx("svg",{height:"6",viewBox:"0 0 424.236 424.236",width:"6",xmlns:"http://www.w3.org/2000/svg","aria-label":"pause",...e,children:a.jsx("path",{d:"M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z"})});try{V.displayName="Pause",V.__docgenInfo={description:"",displayName:"Pause",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Pause.tsx",methods:[],props:{},tags:{}}}catch{}const N=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"6","aria-label":"stop",...e,children:a.jsx("path",{d:"M0 0h306v306H0z"})});try{N.displayName="Stop",N.__docgenInfo={description:"",displayName:"Stop",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Stop.tsx",methods:[],props:{},tags:{}}}catch{}const B=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",viewBox:"0 0 24 24",height:"6","aria-label":"fullscreen",...e,children:a.jsx("path",{d:"M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z",style:{width:1e3}})});try{B.displayName="Fullscreen",B.__docgenInfo={description:"",displayName:"Fullscreen",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/buttons/Fullscreen.tsx",methods:[],props:{},tags:{}}}catch{}const we=({src:e})=>a.jsx("source",{src:e,type:`video/${e.substring(e.length-3)}`}),ye=({playing:e})=>e?a.jsx(V,{}):a.jsx(j,{}),xe=e=>[].concat(e);function fe(e,n){const u=Math.floor(100/e.duration*e.currentTime);n(u)}function D(e){if(!e)return"00:00";const n=parseInt(e.toString(),10),u=Math.floor(n/3600),p=Math.floor(n/60)%60,s=n%60;return[u,p,s].map(o=>o<10?`0${o}`:o).filter((o,i)=>o!=="00"||i>0).join(":")}const _e=({name:e,src:n,videoProps:u,...p},s)=>{const[o,i]=l.useState(!1),[d,G]=l.useState(!1),[J,k]=l.useState(0),t=l.useRef(null),T=l.useRef(null),H=l.useRef(null),S=l.useRef(null),F=l.useRef(null),L=l.useRef(null),M=xe(n),[ee]=M,ae=`${e||ee.replace(/^.*[\\/]/,"")}${d?"":" (Opening)"}`;return l.useImperativeHandle(s,()=>({get video(){return t},get progress(){return T},get wrapper(){return H},get playpause(){return S},get stop(){return F},get fullScreen(){return L}})),l.useEffect(()=>{var c,m,h,f,O;(c=t.current)==null||c.addEventListener("ended",()=>{i(!1),k(0)},!1),(m=t.current)==null||m.addEventListener("timeupdate",()=>{t.current&&fe(t.current,k)},!1),(h=t.current)==null||h.addEventListener("loadeddata",()=>{G(!0)},!1),(f=t.current)==null||f.addEventListener("playing",()=>{i(!0)},!1),(O=t.current)==null||O.addEventListener("pause",()=>{i(!1)},!1)},[t.current]),a.jsxs(_,{...p,padding:"$2",boxShadow:"$out",backgroundColor:"$material",ref:H,children:[a.jsx(oe,{icon:a.jsx(ne,{variant:"16x16_4"}),title:ae}),a.jsx("video",{className:ie({visible:d}),...u,ref:t,children:M.map(c=>a.jsx(we,{src:c},c))}),d&&a.jsx("span",{className:ve}),a.jsxs(_,{maxWidth:"250px",mx:"auto",mb:"$4",children:[a.jsxs("div",{className:le,children:[a.jsxs(_,{display:"flex",flexDirection:"column",w:"40%",children:[a.jsx("div",{className:b(P,pe),children:t.current&&D(t.current.duration)}),a.jsx("div",{className:b(P,ue),children:!d&&"Openning"})]}),a.jsxs(_,{display:"flex",flexDirection:"column",w:"40%",children:[a.jsx("div",{className:b(P,de),children:t.current&&D(t.current.currentTime)}),a.jsx("div",{className:b(P,me),children:"time"})]})]}),a.jsxs("div",{className:ce,children:[a.jsx(R,{className:E,disabled:!d,"aria-label":o?"Pause":"Play",onClick:()=>{var c,m;(c=t.current)!=null&&c.paused?t.current.play().catch(()=>{console.warn("[React95] Video: the browser blocked playback. Browsers only play videos with sound after the user has interacted with the page.")}):(m=t.current)==null||m.pause()},ref:S,children:d?a.jsx(ye,{playing:o}):a.jsx(re,{className:ge,variant:"32x32_4"})}),a.jsx(R,{className:E,disabled:!d,"aria-label":"Stop",onClick:()=>{t.current&&(t.current.pause(),t.current.currentTime=0),i(!1)},ref:F,children:a.jsx(N,{})}),a.jsx(R,{className:E,disabled:!d,"aria-label":"Fullscreen",onClick:()=>{var c;(c=t==null?void 0:t.current)==null||c.requestFullscreen()},ref:L,children:a.jsx(B,{})}),a.jsx(se,{className:he,ref:T,min:"0",max:"100",step:"1",value:J,"aria-label":"Progress",onChange:({target:c})=>{const{current:m}=t;if(m){const h=parseInt(c.value),f=h/100;m.currentTime=f*m.duration,k(h)}}})]})]})]})},v=l.forwardRef(_e);try{v.displayName="Video",v.__docgenInfo={description:"",displayName:"Video",filePath:"/home/runner/work/React95/React95/packages/core/components/Video/Video.tsx",methods:[],props:{name:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"name",required:!1,tags:{},type:{name:"string"}},src:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"src",required:!0,tags:{},type:{name:"string"}},videoProps:{defaultValue:null,declarations:[{fileName:"core/components/Video/Video.tsx",name:"TypeLiteral"}],description:"",name:"videoProps",required:!1,tags:{},type:{name:"HTMLProps<HTMLVideoElement>"}}},tags:{}}}catch{}const Q=""+new URL("EXPLORER-QBhXDSFm.mp4",import.meta.url).href,{expect:r,fireEvent:I,mocked:be,spyOn:C,waitFor:g}=__STORYBOOK_MODULE_TEST__,Pe={title:"Video",component:v,tags:["autodocs"]},Y=(e,n)=>g(()=>r(e.getByText(n)).toHaveTextContent(/^\S+$/),{timeout:5e3}),w={args:{src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"},render:e=>a.jsx(v,{w:"320px",marginBottom:"$4",...e}),play:async({canvas:e})=>{await r(e.getByText(/^trailer_hd\.mp4/)).toBeVisible()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},y={args:{src:Q,name:"Explorer"},render:e=>a.jsx(v,{w:"320px",...e}),play:async({args:e,canvas:n,canvasElement:u,userEvent:p})=>{await Y(n,e.name),await r(n.getByText("00:21")).toBeVisible();const s=u.querySelector("video");await p.click(n.getAllByRole("button")[0]),await r(console.warn).toHaveBeenCalledWith(r.stringContaining("blocked playback")),await r(s).toHaveProperty("paused",!0),be(HTMLMediaElement.prototype.play).mockRestore()},beforeEach:()=>{const e=C(HTMLMediaElement.prototype,"play").mockName("video.play").mockRejectedValue(new DOMException("Blocked","NotAllowedError")),n=C(console,"warn").mockName("console.warn");return()=>{e.mockRestore(),n.mockRestore()}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21"}}},x={args:{src:Q,name:"Explorer",videoProps:{muted:!0}},render:e=>a.jsx(v,{w:"320px",...e}),play:async({args:e,canvas:n,canvasElement:u,userEvent:p})=>{await Y(n,e.name);const s=u.querySelector("video"),o=n.getByRole("slider"),i=n.getByRole("button",{name:"Play"}),d=n.getByRole("button",{name:"Stop"});await r(i).toHaveStyle({padding:"7px"}),await p.click(i),await g(()=>r(s).toHaveProperty("paused",!1)),await g(()=>r(i).toHaveAccessibleName("Pause")),await g(()=>r(o).not.toHaveValue("0"),{timeout:3e3}),await p.click(i),await r(s).toHaveProperty("paused",!0),await p.click(i),await g(()=>r(s).toHaveProperty("paused",!1)),await p.click(d),await r(s).toHaveProperty("paused",!0),await r(s).toHaveProperty("currentTime",0),await I.change(o,{target:{value:"50"}}),await r(s).toHaveProperty("currentTime",s.duration/2),await I.change(o,{target:{value:"99"}}),await p.click(i),await g(()=>r(s).toHaveProperty("ended",!0),{timeout:3e3}),await r(o).toHaveValue("0")}},ke=["FromURL","FromFile","Playback"];var q,z,$;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    const playPause = canvas.getByRole('button', {
      name: 'Play'
    });
    const stop = canvas.getByRole('button', {
      name: 'Stop'
    });

    // they're Buttons, with Video's padding over Button's
    await expect(playPause).toHaveStyle({
      padding: '7px'
    });

    // Play plays it, and the bar follows it
    await userEvent.click(playPause);
    await waitFor(() => expect(video).toHaveProperty('paused', false));
    // while it plays, the button is labeled Pause
    await waitFor(() => expect(playPause).toHaveAccessibleName('Pause'));
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
}`,...(W=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};const He=Object.freeze(Object.defineProperty({__proto__:null,FromFile:y,FromURL:w,Playback:x,__namedExportsOrder:ke,default:Pe},Symbol.toStringTag,{value:"Module"}));export{He as V};
