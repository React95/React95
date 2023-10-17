import{s as o,j as E,a as e,b as C}from"./index-828bd9af.js";import{r as h}from"./index-ebeaab24.js";import{p as F,q as x,B as T,r as w,s as L,t as k,u as B,v as S,w as U,x as D}from"./Write1-7fc0a614.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAKUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070aBoYDYHREBgNgdEQAAMAX+QV66ALHKgAAAAASUVORK5CYII=",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070KBgFo2AUjAIwAAA2ZRDwnJ3nLQAAAABJRU5ErkJggg==",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJ0lEQVR42mNgGITgP8NIB6MhMBoCoyEwGgKjITAaAqMhMBoCdA0BAHdXCfcDKEZUAAAAAElFTkSuQmCC",v={FILE_MEDIA:F,FILE_TEXT:x,FILE_UNKNOWN:T,FILE_FONT:w,FILE_PEN:L,FILE_SETTINGS:k,FILE_TEXT_SETTINGS:B,FILE_EXECUTABLE:S},R=o.div`
  list-style-type: none;
  background-repeat: no-repeat;
  background-image: url(${f});

  &:last-child {
    background-image: url(${({isOpen:n})=>n?f:K});
  }
`,O=o.div`
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,V=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border: 1;
  border-color: borderDarkest;
  background-color: inputBackground;
  font-size: 11px;
`,P=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 6;
  margin-left: ${({hasChildren:n})=>n?8:18}px;

  > img {
    width: 14px;
    height: 14px;
  }
`,G=o.ul`
  padding: 0 0 0 22;
  background-image: url(${M});
  background-repeat: repeat-y;
`,j=o.span`
  outline: none;
  padding: 1;

  :focus {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }
`,q=({hasChildren:n,isOpen:r})=>n?r?e(U,{variant:"32x32_4","data-testid":"react95-default-icon-folder-open"}):e(D,{variant:"32x32_4","data-testid":"react95-default-icon-folder"}):e(T,{variant:"32x32_4","data-testid":"react95-default-icon-bat"}),A=({children:n=[],id:r,icon:d,label:s,onClick:y=()=>{},..._})=>{const[t,p]=h.useState(!1),l=n.length>0,m=a=>{y(a,{id:r,icon:d,label:s,children:n})};return E(R,{isOpen:t,..._,children:[E(O,{children:[l&&e(V,{onClick:()=>p(!t),children:t?"-":"+"}),e(P,{hasChildren:l,children:d||e(q,{hasChildren:l,isOpen:t})}),e(j,{tabIndex:0,onDoubleClick:()=>p(!t),onClick:m,onKeyDown:a=>{a.key===" "&&(p(!t),m(a))},children:s})]}),l&&t&&e(G,{children:n==null?void 0:n.map(a=>e(A,{...a},a.id))})]})},H=A;try{A.displayName="Node",A.__docgenInfo={description:"",displayName:"Node",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>, props: NodeProps) => void)"}}}}}catch{}const X=C.ul`
  padding: 0;
`,g=h.forwardRef(({data:n,...r},d)=>e(X,{...r,ref:d,children:n.map(s=>e(H,{...s},s.id))}));g.defaultProps={data:[]};g.icons=v;const u=g,{icons:i}=u,$={data:[{id:0,label:"Applications",children:[{id:1,label:"virus.exe",icon:e(i.FILE_EXECUTABLE,{})}]},{id:2,label:"Music",children:[{id:3,label:"Indie",children:[{id:4,label:"Weezer",icon:e(i.FILE_MEDIA,{}),onClick:()=>alert("nice!")},{id:5,label:"Supergrass",icon:e(i.FILE_MEDIA,{})}]}]},{id:3,label:"Other",children:[{id:0,label:"Fira Code.ttf",icon:e(i.FILE_FONT,{})},{id:1,label:"Journal.txt",icon:e(i.FILE_TEXT,{})}]},{id:4,label:"config.cfg",icon:e(i.FILE_SETTINGS,{})},{id:5,label:"random_file",icon:e(i.FILE_UNKNOWN,{})}]},z={title:"Tree",component:u,tags:["autodocs"]},c={render:()=>e(u,{...$}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20"}}};var I,b,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Tree {...treeNodes} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20'
    }
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const W=["Simple"];export{c as Simple,W as __namedExportsOrder,z as default};
//# sourceMappingURL=tree.stories-2212cae8.js.map
