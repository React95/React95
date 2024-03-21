import{a as e,j as d,F as E}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{w as F,W as x,R as _}from"./Write1-31d87498.js";import{M as h}from"./Modal-32e36ab2.js";import{L as g}from"./List-77cf638e.js";import{M as I}from"./ModalContext-888db322.js";import{F as c}from"./Frame-9c505601.js";import{T as R}from"./Tooltip-35b785ae.js";import{c as W}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./Button-71983f72.js";import"./index-7332eacf.js";import"./Button.css-afb77755.js";import"./TitleBar-4003dbf8.js";import"./help-4ccdb1ed.js";var B="r95_1ct83mo9",N="r95_1ct83mo1",T="r95_1ct83mo0",$=W({defaultClassName:"r95_1ct83mo2",variantClassNames:{small:{true:"r95_1ct83mo3",false:"r95_1ct83mo4"},active:{true:"r95_1ct83mo5",false:"r95_1ct83mo6"}},defaultVariants:{},compoundVariants:[[{active:!0,small:!0},"r95_1ct83mo7"],[{active:!0,small:!1},"r95_1ct83mo8"]]});const D=()=>{const[o,r]=n.useState("");return n.useEffect(()=>{function a(t){return t<10?`0${t}`:t}const s=setInterval(()=>{const t=new Date,i=t.getHours(),u=t.getMinutes();r(`${a(i)}:${a(u)}`)});return()=>clearInterval(s)},[]),e(c,{boxShadow:"$in",px:"$6",py:"$2",display:"flex",justifyContent:"center",alignItems:"center",children:e(R,{className:N,children:o})})},m=n.forwardRef(({children:o,small:r=!1,icon:a,active:s=!1,...t},i)=>d("button",{className:$({active:s,small:r}),...t,ref:i,children:[e("div",{className:B,children:a}),o]}));try{m.displayName="WindowButton",m.__docgenInfo={description:"",displayName:"WindowButton",props:{small:{defaultValue:{value:"false"},description:"",name:"small",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const p=n.forwardRef(({list:o},r)=>{const[a,s]=n.useState(!1),[t,i]=n.useState(!1),{windows:u,activeWindow:y,setActiveWindow:S}=n.useContext(I);return d(c,{position:"fixed",bottom:"0px",left:"0px",right:"0px",display:"flex",justifyContent:"space-between",h:"28px",w:"100%",padding:"$2",zIndex:"$taskbar",backgroundColor:"$material",boxShadow:"$out",ref:r,children:[a&&e(c,{position:"absolute",bottom:"28px",onClick:()=>{i(!1),s(!1)},children:o}),e(m,{small:!0,icon:e(F,{variant:"32x32_4"}),active:t,onClick:()=>{i(!t),s(!a)},children:"Start"}),e(c,{w:"100%",paddingLeft:"$0",ml:"$2",display:"flex",children:Object.entries(u).map(([f,{icon:k,title:L,hasButton:b}])=>b&&e(m,{icon:k,active:f===y,onClick:()=>S(f),small:!1,children:e("div",{className:T,children:L})},f))}),e(D,{})]})});try{p.displayName="TaskBar",p.__docgenInfo={description:"",displayName:"TaskBar",props:{list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"ReactElement<IListProps, string | JSXElementConstructor<any>>"}}}}}catch{}const Y={title:"TaskBar",component:p,tags:["autodocs"]},l={render:()=>{const[o,r]=n.useState(!1),[a,s]=n.useState(!1);return d(E,{children:[o&&e(h,{icon:e(x,{variant:"16x16_4"}),title:"Windows Explorer",onClose:()=>r(!1),width:"300px",height:"200px"}),a&&e(h,{defaultPosition:{x:50,y:50},width:"300px",height:"200px",icon:e(_,{variant:"16x16_4"}),title:"Local Disk (C:)",onClose:()=>s(!1)}),e(p,{list:d(g,{children:[e(g.Item,{icon:e(_,{variant:"32x32_4"}),onClick:()=>s(!0),children:"Local Disk (C:)"}),e(g.Item,{icon:e(x,{variant:"32x32_4"}),onClick:()=>{r(!0)},children:"Windows Explorer"})]})})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};var v,w,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [first, toggleFirst] = React.useState(false);
    const [second, toggleSecond] = React.useState(false);
    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);
    return <>
        {first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" onClose={closeFirst} width="300px" height="200px" />}

        {second && <Modal defaultPosition={{
        x: 50,
        y: 50
      }} width="300px" height="200px" icon={<ReaderClosed variant="16x16_4" />} title="Local Disk (C:)" onClose={closeSecond} />}

        <TaskBar list={<List>
              <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => toggleSecond(true)}>
                Local Disk (C:)
              </List.Item>
              <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={() => {
          toggleFirst(true);
        }}>
                Windows Explorer
              </List.Item>
            </List>} />
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ee=["Simple"];export{l as Simple,ee as __namedExportsOrder,Y as default};
