import{r as a,j as t}from"./iframe-D3pw_3fI.js";import{c as d}from"./index-D7zGhaRM.js";import{c as f}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import{F as m}from"./Frame-CnwaD4vI.js";var y="r95_fyllcd0",g="r95_fyllcd1",w=f({defaultClassName:"r95_fyllcd2",variantClassNames:{active:{true:"r95_fyllcd3"}},defaultVariants:{},compoundVariants:[]});const c=a.forwardRef(({activeTab:r,title:i,...n},e)=>t.jsx(m,{...n,className:d(w({active:r===i}),n.className),ref:e,as:"li",children:i}));c.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{activeTab:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const E=a.forwardRef(({children:r,defaultActiveTab:i,onChange:n,...e},p)=>{const[u]=a.Children.toArray(r),[o,b]=a.useState(i||u.props.title);return t.jsxs(t.Fragment,{children:[t.jsx(m,{...e,className:d(y,e.className),as:"ol",ref:p,children:a.Children.map(r,s=>{const{title:l,disabled:v}=s.props;return t.jsx(c,{...s.props,activeTab:o,onClick:T=>{v||(n&&n(l,T),b(l))}},l)})}),t.jsx(m,{className:g,width:e.width||e.w,children:a.Children.map(r,s=>s.props.title===o&&s.props.children)})]})});E.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultActiveTab:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement<TabProps> | Array<ReactElement<TabProps>>",elements:[{name:"ReactElement",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"activeTab",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLLIElement"}],raw:"HTMLAttributes<HTMLLIElement>"},{name:"Omit",elements:[{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"},{name:"literal",value:"'as'"}],raw:"Omit<FrameProps, 'as'>"}]}],raw:"ReactElement<TabProps>"}],raw:"Array<ReactElement<TabProps>>"}]},description:""}}};export{c as T,E as a};
