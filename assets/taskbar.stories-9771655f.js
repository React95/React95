import{r as e,R as a}from"./index-ff614419.js";import{lB as b,W as g,uh as x}from"./Write1-f730c4ea.js";import{M as E}from"./Modal-a4c7e6c0.js";import{L as p}from"./List-e7819dce.js";import{M as I}from"./ModalContext-84fff0fd.js";import{F as c}from"./Frame-43ccd6dd.js";import{T as R}from"./Tooltip-65e0b881.js";import{c as W}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-a1ecae5a.js";import"./index-0c06dfaf.js";import"./Button-2ad9a764.js";import"./index-a20f67f3.js";import"./Button.css-afb77755.js";import"./TitleBar-dbb9a1f2.js";import"./help-4ccdb1ed.js";var $="r95_1ct83mo0",B="r95_1ct83mo1",F=W({defaultClassName:"r95_1ct83mo2",variantClassNames:{small:{true:"r95_1ct83mo3",false:"r95_1ct83mo4"},active:{true:"r95_1ct83mo5",false:"r95_1ct83mo6"}},defaultVariants:{},compoundVariants:[[{active:!0,small:!0},"r95_1ct83mo7"],[{active:!0,small:!1},"r95_1ct83mo8"]]}),N="r95_1ct83mo9";const C=()=>{const[n,r]=e.useState("");return e.useEffect(()=>{function o(t){return t<10?`0${t}`:t}const s=setInterval(()=>{const t=new Date,i=t.getHours(),m=t.getMinutes();r(`${o(i)}:${o(m)}`)});return()=>clearInterval(s)},[]),a.createElement(c,{boxShadow:"$in",px:"$6",py:"$2",display:"flex",justifyContent:"center",alignItems:"center"},a.createElement(R,{className:B},n))};C.__docgenInfo={description:"",methods:[],displayName:"Clock"};const u=e.forwardRef(({children:n,small:r=!1,icon:o,active:s=!1,...t},i)=>a.createElement("button",{className:F({active:s,small:r}),...t,ref:i},a.createElement("div",{className:N},o),n));u.__docgenInfo={description:"",methods:[],displayName:"WindowButton",props:{small:{defaultValue:{value:"false",computed:!1},required:!1},active:{defaultValue:{value:"false",computed:!1},required:!1}}};const f=e.forwardRef(({list:n},r)=>{const[o,s]=e.useState(!1),[t,i]=e.useState(!1),{windows:m,activeWindow:h,setActiveWindow:k}=e.useContext(I);return a.createElement(c,{position:"fixed",bottom:"0px",left:"0px",right:"0px",display:"flex",justifyContent:"space-between",h:"28px",w:"100%",padding:"$2",zIndex:"$taskbar",backgroundColor:"$material",boxShadow:"$out",ref:r},o&&a.createElement(c,{position:"absolute",bottom:"28px",onClick:()=>{i(!1),s(!1)}},n),a.createElement(u,{small:!0,icon:a.createElement(b,{variant:"32x32_4"}),active:t,onClick:()=>{i(!t),s(!o)}},"Start"),a.createElement(c,{w:"100%",paddingLeft:"$0",ml:"$2",display:"flex"},Object.entries(m).map(([d,{icon:S,title:L,hasButton:y}])=>y&&a.createElement(u,{key:d,icon:S,active:d===h,onClick:()=>k(d),small:!1},a.createElement("div",{className:$},L)))),a.createElement(C,null))});f.__docgenInfo={description:"",methods:[],displayName:"TaskBar"};const Q={title:"TaskBar",component:f,tags:["autodocs"]},l={render:()=>{const[n,r]=e.useState(!1),[o,s]=e.useState(!1),t=()=>r(!1),i=()=>s(!1);return e.createElement(e.Fragment,null,n&&e.createElement(E,{icon:e.createElement(g,{variant:"16x16_4"}),title:"Windows Explorer",onClose:t,width:"300px",height:"200px"}),o&&e.createElement(E,{defaultPosition:{x:50,y:50},width:"300px",height:"200px",icon:e.createElement(x,{variant:"16x16_4"}),title:"Local Disk (C:)",onClose:i}),e.createElement(f,{list:e.createElement(p,null,e.createElement(p.Item,{icon:e.createElement(x,{variant:"32x32_4"}),onClick:()=>s(!0)},"Local Disk (C:)"),e.createElement(p.Item,{icon:e.createElement(g,{variant:"32x32_4"}),onClick:()=>{r(!0)}},"Windows Explorer"))}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};var v,w,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const U=["Simple"];export{l as Simple,U as __namedExportsOrder,Q as default};
