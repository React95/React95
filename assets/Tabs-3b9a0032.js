import{j as a}from"./jsx-runtime-e5910377.js";import{r as t}from"./index-66a3a5c2.js";import{c as d}from"./index-626ba1ae.js";import{c as f}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{F as m}from"./Frame-ad175eaa.js";var y="r95_fyllcd0",g="r95_fyllcd1",w=f({defaultClassName:"r95_fyllcd2",variantClassNames:{active:{true:"r95_fyllcd3"}},defaultVariants:{},compoundVariants:[]});const c=t.forwardRef(({activeTab:r,title:i,...n},e)=>a.jsx(m,{...n,className:d(w({active:r===i}),n.className),ref:e,as:"li",children:i}));c.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{activeTab:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const E=t.forwardRef(({children:r,defaultActiveTab:i,onChange:n,...e},p)=>{const[u]=t.Children.toArray(r),[o,b]=t.useState(i||u.props.title);return a.jsxs(a.Fragment,{children:[a.jsx(m,{...e,className:d(y,e.className),as:"ol",ref:p,children:t.Children.map(r,s=>{const{title:l,disabled:v}=s.props;return a.jsx(c,{...s.props,activeTab:o,onClick:T=>{v||(n&&n(l,T),b(l))}},l)})}),a.jsx(m,{className:g,width:e.width||e.w,children:t.Children.map(r,s=>s.props.title===o&&s.props.children)})]})});E.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultActiveTab:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement<TabProps> | Array<ReactElement<TabProps>>",elements:[{name:"ReactElement",elements:[{name:"intersection",raw:`{
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
} & HTMLAttributes<HTMLLIElement> &
  Omit<FrameProps, 'as'>`,elements:[{name:"signature",type:"object",raw:`{
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
}`,signature:{properties:[{key:"activeTab",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"HTMLAttributes<HTMLLIElement>"},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"literal",value:"'as'"}],raw:"Omit<FrameProps, 'as'>"}]}],raw:"ReactElement<TabProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"intersection",raw:`{
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
} & HTMLAttributes<HTMLLIElement> &
  Omit<FrameProps, 'as'>`,elements:[{name:"signature",type:"object",raw:`{
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
}`,signature:{properties:[{key:"activeTab",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"HTMLAttributes<HTMLLIElement>"},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"literal",value:"'as'"}],raw:"Omit<FrameProps, 'as'>"}]}],raw:"ReactElement<TabProps>"}],raw:"Array<ReactElement<TabProps>>"}]},description:""}}};export{E as T,c as a};
