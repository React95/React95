import{j as e,r as b}from"./iframe-D3pw_3fI.js";import{c}from"./index-D7zGhaRM.js";import{bl as f,k as M,fZ as x,bn as A,fC as I,fy as g,p as C,fn as H,fA as j,nf as _}from"./Write1-CHA4btsI.js";import{c as F}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import{F as p}from"./Frame-CnwaD4vI.js";var L="r95_z2881c0",E="r95_z2881c1",q="r95_z2881c2",N="r95_z2881c3",h="r95_z2881c4",O="r95_z2881c5",u=F({defaultClassName:"r95_z2881c6",variantClassNames:{hasChildren:{true:"r95_z2881c7",false:"r95_z2881c8"}},defaultVariants:{},compoundVariants:[]});const R={FILE_MEDIA:_,FILE_TEXT:j,FILE_UNKNOWN:f,FILE_FONT:H,FILE_PEN:C,FILE_SETTINGS:g,FILE_TEXT_SETTINGS:I,FILE_EXECUTABLE:A},T=({hasChildren:n,isOpen:r})=>n?r?e.jsx(M,{variant:"16x16_4","data-testid":"react95-default-icon-folder-open"}):e.jsx(x,{variant:"16x16_4","data-testid":"react95-default-icon-folder"}):e.jsx(f,{variant:"16x16_4","data-testid":"react95-default-icon-bat"}),K=[],v=({children:n=K,id:r,icon:a,label:l,onClick:o=()=>{},...d})=>{const[t,i]=b.useState(!1),m=n.length>0,y=s=>{o(s,{id:r,icon:a,label:l,children:n})},k=s=>{s.key===" "&&(i(!t),y(s))};return e.jsxs(p,{as:"li",...d,className:c(E,d.className),children:[e.jsxs("div",{className:N,children:[m&&e.jsx("div",{className:O,onClick:()=>i(!t),children:t?"-":"+"}),e.jsx("div",{className:u({hasChildren:m}),children:a||e.jsx(T,{hasChildren:m,isOpen:t})}),e.jsx("label",{className:h,tabIndex:0,onDoubleClick:()=>i(!t),onClick:y,onKeyDown:k,children:l})]}),m&&t&&e.jsx("ul",{className:L,children:n==null?void 0:n.map(s=>e.jsx(v,{...s},s.id))})]})},w=({id:n,icon:r,label:a,onClick:l=()=>{},...o})=>{const d=i=>{l(i,{id:n,icon:r,label:a})},t=i=>{i.key===" "&&d(i)};return e.jsx(p,{...o,className:c(E,q),children:e.jsxs("div",{className:N,children:[e.jsx("div",{className:c(u.classNames.base,u.classNames.variants.hasChildren.true),children:r||e.jsx(T,{hasChildren:!1,isOpen:!0})}),e.jsx("label",{className:h,tabIndex:0,onClick:d,onKeyDown:t,children:a})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Node",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},id:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`NodeBaseProps & {
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>`,elements:[{name:"intersection",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
} & Omit<FrameProps, 'id' | 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"id",value:{name:"number",required:!0}}]}},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<FrameProps, 'id' | 'children'>"}]},{name:"signature",type:"object",raw:`{
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"LiHTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"LiHTMLAttributes<HTMLLIElement>"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>"}]}],raw:"Array<NodeProps>"},description:"",defaultValue:{value:"[]",computed:!1}},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"NodeRoot",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},id:{required:!0,tsType:{name:"number"},description:""},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const P=b.forwardRef(({data:n=[],root:r,...a},l)=>e.jsxs(e.Fragment,{children:[r&&e.jsx(w,{...r}),e.jsx(p,{...a,className:c(L,a.className),as:"ul",ref:l,children:n.map(o=>e.jsx(v,{...o},o.id))})]}));P.icons=R;P.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`NodeBaseProps & {
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>`,elements:[{name:"intersection",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
} & Omit<FrameProps, 'id' | 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"id",value:{name:"number",required:!0}}]}},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<FrameProps, 'id' | 'children'>"}]},{name:"signature",type:"object",raw:`{
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"LiHTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"LiHTMLAttributes<HTMLLIElement>"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>"}]}],raw:"Array<NodeProps>"},description:"",defaultValue:{value:"[]",computed:!1}},root:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`NodeBaseProps & {
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>`,elements:[{name:"intersection",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
} & Omit<FrameProps, 'id' | 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"id",value:{name:"number",required:!0}}]}},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<FrameProps, 'id' | 'children'>"}]},{name:"signature",type:"object",raw:`{
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"LiHTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"LiHTMLAttributes<HTMLLIElement>"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>"}]},{name:"literal",value:"'children'"}],raw:"Omit<NodeProps, 'children'>"},description:""}}};export{P as T};
