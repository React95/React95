import{j as e}from"./jsx-runtime-e5910377.js";import{r as b}from"./index-66a3a5c2.js";import{c}from"./index-626ba1ae.js";import{ne as x,fz as M,bk as f,fm as I,t as _,fx as g,fB as A,bm as H,k as j,fY as C}from"./Write1-229e0d0c.js";import{c as F}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{F as p}from"./Frame-ad175eaa.js";var L="r95_z2881c0",E="r95_z2881c1",q="r95_z2881c2",N="r95_z2881c3",h="r95_z2881c4",O="r95_z2881c5",u=F({defaultClassName:"r95_z2881c6",variantClassNames:{hasChildren:{true:"r95_z2881c7",false:"r95_z2881c8"}},defaultVariants:{},compoundVariants:[]});const R={FILE_MEDIA:x,FILE_TEXT:M,FILE_UNKNOWN:f,FILE_FONT:I,FILE_PEN:_,FILE_SETTINGS:g,FILE_TEXT_SETTINGS:A,FILE_EXECUTABLE:H},T=({hasChildren:r,isOpen:n})=>r?n?e.jsx(j,{variant:"16x16_4","data-testid":"react95-default-icon-folder-open"}):e.jsx(C,{variant:"16x16_4","data-testid":"react95-default-icon-folder"}):e.jsx(f,{variant:"16x16_4","data-testid":"react95-default-icon-bat"}),K=[],v=({children:r=K,id:n,icon:a,label:l,onClick:o=()=>{},...m})=>{const[t,i]=b.useState(!1),d=r.length>0,y=s=>{o(s,{id:n,icon:a,label:l,children:r})},P=s=>{s.key===" "&&(i(!t),y(s))};return e.jsxs(p,{as:"li",...m,className:c(E,m.className),children:[e.jsxs("div",{className:N,children:[d&&e.jsx("div",{className:O,onClick:()=>i(!t),children:t?"-":"+"}),e.jsx("div",{className:u({hasChildren:d}),children:a||e.jsx(T,{hasChildren:d,isOpen:t})}),e.jsx("label",{className:h,tabIndex:0,onDoubleClick:()=>i(!t),onClick:y,onKeyDown:P,children:l})]}),d&&t&&e.jsx("ul",{className:L,children:r==null?void 0:r.map(s=>e.jsx(v,{...s},s.id))})]})},w=({id:r,icon:n,label:a,onClick:l=()=>{},...o})=>{const m=i=>{l(i,{id:r,icon:n,label:a})},t=i=>{i.key===" "&&m(i)};return e.jsx(p,{...o,className:c(E,q),children:e.jsxs("div",{className:N,children:[e.jsx("div",{className:c(u.classNames.base,u.classNames.variants.hasChildren.true),children:n||e.jsx(T,{hasChildren:!1,isOpen:!0})}),e.jsx("label",{className:h,tabIndex:0,onClick:m,onKeyDown:t,children:a})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Node",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},id:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`NodeBaseProps & {
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
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"LiHTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"LiHTMLAttributes<HTMLLIElement>"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>"}]}],raw:"Array<NodeProps>"},description:"",defaultValue:{value:"[]",computed:!1}},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"NodeRoot",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},id:{required:!0,tsType:{name:"number"},description:""},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const k=b.forwardRef(({data:r=[],root:n,...a},l)=>e.jsxs(e.Fragment,{children:[n&&e.jsx(w,{...n}),e.jsx(p,{...a,className:c(L,a.className),as:"ul",ref:l,children:r.map(o=>e.jsx(v,{...o},o.id))})]}));k.icons=R;k.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`NodeBaseProps & {
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
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"LiHTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"LiHTMLAttributes<HTMLLIElement>"},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LiHTMLAttributes<HTMLLIElement>, 'id' | 'children'>"}]},{name:"literal",value:"'children'"}],raw:"Omit<NodeProps, 'children'>"},description:""}}};export{k as T};
