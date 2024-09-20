import{r as e,R as a}from"./index-9fa1aa67.js";import{lC as F,W as y,ui as M}from"./Write1-c92272e3.js";import{m as n,a as c,M as b}from"./Modal-4e7d4003.js";import{L as w}from"./List-64200f45.js";import{F as x}from"./Frame-8a2a37ef.js";import{T as N}from"./Tooltip-61eba74b.js";import{c as D}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{T as B}from"./TitleBar-83565a4b.js";import"./Button-9c3a5d19.js";import"./index-923230fa.js";import"./Button.css-afb77755.js";var V="r95_1ct83mo0",O="r95_1ct83mo1",A=D({defaultClassName:"r95_1ct83mo2",variantClassNames:{small:{true:"r95_1ct83mo3",false:"r95_1ct83mo4"},active:{true:"r95_1ct83mo5",false:"r95_1ct83mo6"}},defaultVariants:{},compoundVariants:[[{active:!0,small:!0},"r95_1ct83mo7"],[{active:!0,small:!1},"r95_1ct83mo8"]]}),j="r95_1ct83mo9";const R=()=>{const[d,r]=e.useState("");return e.useEffect(()=>{function o(t){return t<10?`0${t}`:t}const s=setInterval(()=>{const t=new Date,l=t.getHours(),E=t.getMinutes();r(`${o(l)}:${o(E)}`)});return()=>clearInterval(s)},[]),a.createElement(x,{boxShadow:"$in",px:"$6",py:"$2",display:"flex",justifyContent:"center",alignItems:"center"},a.createElement(N,{className:O},d))};R.__docgenInfo={description:"",methods:[],displayName:"Clock"};const C=e.forwardRef(({children:d,small:r=!1,icon:o,active:s=!1,...t},l)=>a.createElement("button",{className:A({active:s,small:r}),...t,ref:l},a.createElement("div",{className:j},o),d));C.__docgenInfo={description:"",methods:[],displayName:"WindowButton",props:{small:{defaultValue:{value:"false",computed:!1},required:!1},active:{defaultValue:{value:"false",computed:!1},required:!1}}};const k=e.forwardRef(({list:d},r)=>{const[o,s]=e.useState(!1),[t,l]=e.useState(!1),[E,_]=a.useState([]),[h,W]=e.useState();return e.useEffect(()=>{const m=i=>{_(v=>[...v,i])},p=i=>{_(v=>{const S=v.filter($=>$.id!==i.id),u=S.at(-1);return!h&&u&&n.emit(c.ModalVisibilityChanged,{id:u==null?void 0:u.id}),S})},f=({id:i})=>{W(i)};return n.on(c.AddModal,m),n.on(c.RemoveModal,p),n.on(c.ModalVisibilityChanged,f),()=>{n.off(c.AddModal,m),n.off(c.RemoveModal,p),n.off(c.ModalVisibilityChanged,f)}},[]),a.createElement(x,{position:"fixed",bottom:"0px",left:"0px",right:"0px",display:"flex",justifyContent:"space-between",h:"28px",w:"100%",padding:"$2",zIndex:"$taskbar",backgroundColor:"$material",boxShadow:"$out",ref:r},o&&a.createElement(x,{position:"absolute",bottom:"28px",onClick:()=>{l(!1),s(!1)}},d),a.createElement(C,{small:!0,icon:a.createElement(F,{variant:"32x32_4"}),active:t,onClick:()=>{l(!t),s(!o)}},"Start"),a.createElement(x,{w:"100%",paddingLeft:"$0",ml:"$2",display:"flex"},E.map(({icon:m,title:p,hasButton:f,id:i})=>f&&a.createElement(C,{key:i,icon:m,active:i===h,onClick:()=>{n.emit(c.ModalVisibilityChanged,{id:i})},small:!1},a.createElement("div",{className:V},p)))),a.createElement(R,null))});k.__docgenInfo={description:"",methods:[],displayName:"TaskBar"};const Y={title:"TaskBar",component:k,tags:["autodocs"]},g={render:()=>{const[d,r]=e.useState(!1),[o,s]=e.useState(!1),t=()=>r(!1),l=()=>s(!1);return e.createElement(e.Fragment,null,d&&e.createElement(b,{icon:e.createElement(y,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:e.createElement(B.Close,{key:"close",onClick:t}),width:"300px",height:"200px"}),o&&e.createElement(b,{dragOptions:{defaultPosition:{x:50,y:50}},width:"300px",height:"200px",icon:e.createElement(M,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:e.createElement(B.Close,{key:"close",onClick:l})}),e.createElement(k,{list:e.createElement(w,null,e.createElement(w.Item,{icon:e.createElement(M,{variant:"32x32_4"}),onClick:()=>s(!0)},"Local Disk (C:)"),e.createElement(w.Item,{icon:e.createElement(y,{variant:"32x32_4"}),onClick:()=>{r(!0)}},"Windows Explorer"))}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};var L,I,T;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [first, toggleFirst] = React.useState(false);
    const [second, toggleSecond] = React.useState(false);
    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);
    return <>
        {first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" titleBarOptions={<TitleBar.Close key="close" onClick={closeFirst} />} width="300px" height="200px" />}

        {second && <Modal dragOptions={{
        defaultPosition: {
          x: 50,
          y: 50
        }
      }} width="300px" height="200px" icon={<ReaderClosed variant="16x16_4" />} title="Local Disk (C:)" titleBarOptions={<TitleBar.Close key="close" onClick={closeSecond} />} />}

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
}`,...(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ee=["Simple"];export{g as Simple,ee as __namedExportsOrder,Y as default};
