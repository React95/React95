import{j as o,r as C}from"./iframe-BP1fKKyq.js";import{A as O}from"./Alert-fPMn28bD.js";import{B as D}from"./Button-CYWwPWGC.js";/* empty css                              */import{T as M}from"./TitleBar-B13jGq_-.js";import"./preload-helper-C1FmrZbK.js";import"./Write1-CE8UsuL2.js";/* empty css                             */import"./Modal-Co99nBD4.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BsRdtlNK.js";import"./Button.css-ChH4GoWp.js";const{expect:r,spyOn:L,within:g}=__STORYBOOK_MODULE_TEST__,G={title:"Alert",component:O,tags:["autodocs"],args:{title:"Windows Networking",type:"error",message:"The Windows password you typed is incorrect.",hasSound:!1,buttonsAlignment:"center"},argTypes:{title:{control:"text"},buttonsAlignment:{control:"select",options:["flex-start","center","flex-end","space-between"]}}},W={error:"Error",info:"Information",question:"Question",warning:"Warning"},E=({defaultOpen:e=!0,...a})=>{const[s,n]=C.useState(e),H=()=>n(!0),m=()=>n(!1);return o.jsxs(o.Fragment,{children:[o.jsx(D,{onClick:H,children:"Trigger Alert"}),s&&o.jsx(O,{...a,titleBarOptions:o.jsx(M.Close,{onClick:m},"close"),buttons:[{value:"OK",onClick:m}]})]})},t={args:{hasWindowButton:!1},render:e=>o.jsx(E,{...e}),play:async({args:e,canvas:a,userEvent:s})=>{const n=a.getByRole("dialog");await r(n).toHaveTextContent(e.title),await r(n).toHaveTextContent(e.message),await r(g(n).getByRole("img",{name:W[e.type]})).toBeVisible(),await s.click(g(n).getByRole("button",{name:"OK"})),await r(a.queryAllByRole("dialog")).toHaveLength(0),await s.click(a.getByRole("button",{name:"Trigger Alert"})),await s.click(g(a.getByRole("dialog")).getByRole("button",{name:"close"})),await r(a.queryAllByRole("dialog")).toHaveLength(0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}},i={...t,args:{...t.args,type:"warning",title:"Recycle Bin",message:"Are you sure you want to delete these 3 items?"}},l={...t,args:{...t.args,type:"info",title:"Disk Defragmenter",message:"Defragmentation of drive C is complete."}},c={...t,args:{...t.args,type:"question",title:"Notepad",message:"The text in the Untitled file has changed. Save the changes?"}},p={args:{...t.args,hasSound:!0},render:e=>o.jsx(E,{...e,defaultOpen:!1}),beforeEach:()=>{const e=L(HTMLMediaElement.prototype,"play").mockName("audio.play");return()=>e.mockRestore()},play:async({canvas:e,userEvent:a})=>{await r(HTMLMediaElement.prototype.play).not.toHaveBeenCalled(),await a.click(e.getByRole("button",{name:"Trigger Alert"})),await r(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce(),await a.click(g(e.getByRole("dialog")).getByRole("button",{name:"OK"}))},parameters:{clippy:{phrases:['Click "Trigger Alert" to hear the Windows chord!']}}},J=["Simple","Warning","Info","Question","WithSound"];var d,y,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    hasWindowButton: false
  },
  render: args => <SimpleDemo {...args} />,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // the alert starts open, with its title, message and the icon of its type
    const alert = canvas.getByRole('dialog');
    await expect(alert).toHaveTextContent(args.title as string);
    await expect(alert).toHaveTextContent(args.message);
    await expect(within(alert).getByRole('img', {
      name: iconNames[args.type!]
    })).toBeVisible();

    // OK closes it (the story keeps it open or closed)
    await userEvent.click(within(alert).getByRole('button', {
      name: 'OK'
    }));
    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Trigger Alert'
    }));

    // and so does the title bar's close option
    await userEvent.click(within(canvas.getByRole('dialog')).getByRole('button', {
      name: 'close'
    }));
    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1'
    }
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var h,w,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Simple,
  args: {
    ...Simple.args,
    type: 'warning',
    title: 'Recycle Bin',
    message: 'Are you sure you want to delete these 3 items?'
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var f,x,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Simple,
  args: {
    ...Simple.args,
    type: 'info',
    title: 'Disk Defragmenter',
    message: 'Defragmentation of drive C is complete.'
  }
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,T,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Simple,
  args: {
    ...Simple.args,
    type: 'question',
    title: 'Notepad',
    message: 'The text in the Untitled file has changed. Save the changes?'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var k,A,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    hasSound: true
  },
  render: args => <SimpleDemo {...args} defaultOpen={false} />,
  // watches the chord without silencing it
  beforeEach: () => {
    const play = spyOn(HTMLMediaElement.prototype, 'play').mockName('audio.play');
    return () => play.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();

    // opening the alert plays the chord
    await userEvent.click(canvas.getByRole('button', {
      name: 'Trigger Alert'
    }));
    await expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();

    // closed again, ready for a real click
    await userEvent.click(within(canvas.getByRole('dialog')).getByRole('button', {
      name: 'OK'
    }));
  },
  parameters: {
    clippy: {
      phrases: ['Click "Trigger Alert" to hear the Windows chord!']
    }
  }
}`,...(b=(A=p.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};export{l as Info,c as Question,t as Simple,i as Warning,p as WithSound,J as __namedExportsOrder,G as default};
