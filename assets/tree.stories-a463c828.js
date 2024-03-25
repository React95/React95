import{s as r,j as E,a as e,b as y}from"./index-0559674c.js";import{r as N}from"./index-1b03fe98.js";import{o as C,p as F,B as h,q as w,r as L,s as k,t as B,u as v,v as S,w as U}from"./Write1-0f5c28b2.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAKUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070aBoYDYHREBgNgdEQAAMAX+QV66ALHKgAAAAASUVORK5CYII=",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJUlEQVR42mNgGITgP8NIB6MhMBoCoyHwn070KBgFo2AUjAIwAAA2ZRDwnJ3nLQAAAABJRU5ErkJggg==",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAJ0lEQVR42mNgGITgP8NIB6MhMBoCoyEwGgKjITAaAqMhMBoCdA0BAHdXCfcDKEZUAAAAAElFTkSuQmCC",M={FILE_MEDIA:C,FILE_TEXT:F,FILE_UNKNOWN:h,FILE_FONT:w,FILE_PEN:L,FILE_SETTINGS:k,FILE_TEXT_SETTINGS:B,FILE_EXECUTABLE:v},R=r.div`
  list-style-type: none;
  background-repeat: no-repeat;
  background-image: url(${f});

  &:last-child {
    background-image: url(${({isOpen:n})=>n?f:D});
  }
`,O=r.div`
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,V=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border: 1;
  border-color: borderDarkest;
  background-color: inputBackground;
  font-size: 11px;
`,P=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 6;
  margin-left: ${({hasChildren:n})=>n?8:18}px;

  > svg {
    width: 14px;
    height: 14px;
  }
`,G=r.ul`
  padding: 0 0 0 22;
  background-image: url(${K});
  background-repeat: repeat-y;
`,j=r.span`
  outline: none;
  padding: 1;

  :focus {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }
`,q=({hasChildren:n,isOpen:o})=>n?o?e(S,{variant:"16x16_4","data-testid":"react95-default-icon-folder-open"}):e(U,{variant:"16x16_4","data-testid":"react95-default-icon-folder"}):e(h,{variant:"16x16_4","data-testid":"react95-default-icon-bat"}),A=({children:n=[],id:o,icon:d,label:s,onClick:x=()=>{},...T})=>{const[t,p]=N.useState(!1),l=n.length>0,m=a=>{x(a,{id:o,icon:d,label:s,children:n})};return E(R,{isOpen:t,...T,children:[E(O,{children:[l&&e(V,{onClick:()=>p(!t),children:t?"-":"+"}),e(P,{hasChildren:l,children:d||e(q,{hasChildren:l,isOpen:t})}),e(j,{tabIndex:0,onDoubleClick:()=>p(!t),onClick:m,onKeyDown:a=>{a.key===" "&&(p(!t),m(a))},children:s})]}),l&&t&&e(G,{children:n==null?void 0:n.map(a=>e(A,{...a},a.id))})]})},H=A;try{A.displayName="Node",A.__docgenInfo={description:"",displayName:"Node",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>, props: NodeProps) => void)"}}}}}catch{}const X=y.ul`
  padding: 0;
`,g=N.forwardRef(({data:n,...o},d)=>e(X,{...o,ref:d,children:n.map(s=>e(H,{...s},s.id))}));g.defaultProps={data:[]};g.icons=M;const u=g,{icons:i}=u,$={data:[{id:0,label:"Applications",children:[{id:1,label:"virus.exe",icon:e(i.FILE_EXECUTABLE,{variant:"16x16_4"})}]},{id:2,label:"Music",children:[{id:3,label:"Indie",children:[{id:4,label:"Weezer",icon:e(i.FILE_MEDIA,{variant:"16x16_4"}),onClick:()=>alert("nice!")},{id:5,label:"Supergrass",icon:e(i.FILE_MEDIA,{variant:"16x16_4"})}]}]},{id:3,label:"Other",children:[{id:0,label:"Fira Code.ttf",icon:e(i.FILE_FONT,{variant:"16x16_4"})},{id:1,label:"Journal.txt",icon:e(i.FILE_TEXT,{variant:"16x16_4"})}]},{id:4,label:"config.cfg",icon:e(i.FILE_SETTINGS,{variant:"16x16_4"})},{id:5,label:"random_file",icon:e(i.FILE_UNKNOWN,{variant:"16x16_4"})}]},z={title:"Tree",component:u,tags:["autodocs"]},c={render:()=>e(u,{...$}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20"}}};var I,_,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Tree {...treeNodes} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20'
    }
  }
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const W=["Simple"];export{c as Simple,W as __namedExportsOrder,z as default};
