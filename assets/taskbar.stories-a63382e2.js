import{s as f,a as e,c as R,t as h,j as d,F}from"./index-0559674c.js";import{r as l,R as x}from"./index-1b03fe98.js";import{B as M,n as $,W as v,R as y}from"./Write1-0f5c28b2.js";import{L as w}from"./List-87ea133f.js";import{M as _}from"./Modal-a0fc7174.js";import{M as D}from"./ModalContext-69d2d970.js";import{F as r}from"./Frame-f3688d20.js";import{T as j}from"./Tooltip-701ed5c6.js";import"./ListDivider-6693db38.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./Button-1674c104.js";import"./index-5d7a0789.js";const q=f(j)`
  div:first-child {
    right: 0;
  }
`,N=()=>{const[t,n]=l.useState("");return l.useEffect(()=>{function a(o){return o<10?`0${o}`:o}const i=setInterval(()=>{const o=new Date,s=o.getHours(),u=o.getMinutes();n(`${a(s)}:${a(u)}`)});return()=>clearInterval(i)},[]),e(r,{boxShadow:"in",bg:"transparent",px:6,py:2,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(q,{children:t})})},P=N,A=f(r)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2 3;
  margin-right: 2;
  max-width: 150px;
  border: none;
  outline: none;

  ${({small:t})=>t?"":`
    width: 100%;
  `}

  ${({active:t,small:n})=>t&&n?R`
          outline: ${h("space.1")}px dotted ${h("colors.borderDarkest")};
          outline-offset: -${h("space.4")}px;
          padding-top: 4;
          padding-right: 2;
          padding-bottom: 0;
          padding-left: 4;
        `:""}
`,V=f.div`
  svg {
    margin-top: 4;
    margin-right: 4;
    min-width: 20;
    width: 20;
    height: 20;
    shape-rendering: auto;
  }
`,p=({children:t="",small:n,icon:a,active:i,...o})=>d(A,{active:i,small:n,...i?{boxShadow:"in",bg:n?void 0:"borderLighter"}:{boxShadow:"out"},...o,as:"button",children:[e(V,{children:a}),t]});p.defaultProps={small:!1,icon:e(M,{variant:"32x32_4"}),active:!1};const S=p;try{p.displayName="WindowButton",p.__docgenInfo={description:"",displayName:"WindowButton",props:{small:{defaultValue:{value:"false"},description:"",name:"small",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:'<Bat variant="32x32_4" />'},description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const J=f.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
`,m=l.forwardRef(({list:t},n)=>{const[a,i]=x.useState(!1),[o,s]=x.useState(!1),{windows:u,activeWindow:B,setActiveWindow:W}=x.useContext(D);return d(r,{position:"fixed",bottom:0,left:0,right:0,display:"flex",justifyContent:"space-between",h:28,w:"100%",padding:2,zIndex:"taskbar",ref:n,children:[a&&e(r,{position:"absolute",bottom:"28",onClick:()=>{s(!1),i(!1)},children:t}),e(S,{small:!0,icon:e($,{variant:"32x32_4"}),active:o,onClick:()=>{s(!o),i(!a)},children:"Start"}),e(r,{boxShadow:"none",w:"100%",paddingLeft:0,ml:2,display:"flex",children:Object.entries(u).map(([g,{icon:E,title:I,hasButton:T}])=>T&&e(S,{icon:E,active:g===B,onClick:()=>W(g),small:!1,children:e(J,{children:I})},g))}),e(P,{})]})});m.defaultProps={list:void 0};const L=m;try{m.displayName="TaskBar",m.__docgenInfo={description:"",displayName:"TaskBar",props:{list:{defaultValue:{value:"undefined"},description:"",name:"list",required:!1,type:{name:"ReactElement<IListProps, string | JSXElementConstructor<any>>"}}}}}catch{}const ne={title:"TaskBar",component:L,tags:["autodocs"]},c={render:()=>{const[t,n]=l.useState(!1),[a,i]=l.useState(!1);return d(F,{children:[t&&e(_,{icon:e(v,{variant:"16x16_4"}),title:"Windows Explorer",closeModal:()=>n(!1),width:"300",height:"200"}),a&&e(_,{defaultPosition:{x:50,y:50},width:"300",height:"200",icon:e(y,{variant:"16x16_4"}),title:"Local Disk (C:)",closeModal:()=>i(!1)}),e(L,{list:d(w,{children:[e(w.Item,{icon:e(y,{variant:"32x32_4"}),onClick:()=>i(!0),children:"Local Disk (C:)"}),e(w.Item,{icon:e(v,{variant:"32x32_4"}),onClick:()=>{n(!0)},children:"Windows Explorer"})]})})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};var b,k,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [first, toggleFirst] = React.useState(false);
    const [second, toggleSecond] = React.useState(false);
    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);
    return <>
        {first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" closeModal={closeFirst} width="300" height="200" />}

        {second && <Modal defaultPosition={{
        x: 50,
        y: 50
      }} width="300" height="200" icon={<ReaderClosed variant="16x16_4" />} title="Local Disk (C:)" closeModal={closeSecond} />}

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
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const ie=["Simple"];export{c as Simple,ie as __namedExportsOrder,ne as default};
