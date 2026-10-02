import{r as j,j as e,F as v,c as R}from"./iframe-BJgbW1uk.js";/* empty css                              */import{c as z}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";/* empty css                              */var I=z({defaultClassName:"r95_vljy2n0",variantClassNames:{circle:{true:"r95_vljy2n1"}},defaultVariants:{},compoundVariants:[]}),N="r95_vljy2n2";const r=j.forwardRef(({src:a,srcSet:o,alt:x,circle:b,children:f,size:A="48px",className:y,..._},S)=>e.jsx(v,{..._,ref:S,size:A,className:R(I({circle:b}),y),children:a||o?e.jsx("img",{className:N,src:a,srcSet:o,alt:x}):f}));try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",filePath:"/home/runner/work/React95/React95/packages/core/components/Avatar/Avatar.tsx",methods:[],props:{circle:{defaultValue:null,declarations:[{fileName:"core/components/Avatar/Avatar.tsx",name:"TypeLiteral"}],description:"",name:"circle",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const E={title:"Avatar",component:r,tags:["autodocs"],argTypes:{circle:{control:"boolean"},srcSet:{control:"text",description:"A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)"},src:{control:"text",description:"Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)"},alt:{control:"text",description:"fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)"},size:{control:"text",description:"Avatar's width and height",defaultValue:"48px"}}},t={render:a=>e.jsx(r,{...a}),args:{src:"https://github.com/React95.png",alt:"Reac95 logo",size:"48px"},parameters:{design:{disable:!0}}},s={render:()=>e.jsx(r,{src:"https://github.com/React95.png",alt:"photo",circle:!0}),parameters:{design:{disable:!0}}},n={render:()=>e.jsxs(v,{display:"inline-flex",gap:"8px",children:[e.jsx(r,{children:"SQ"}),e.jsx(r,{circle:!0,children:"RO"})]}),parameters:{design:{disable:!0}}},L=["Simple","Circle","Letters"];var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Story['args']) => <Avatar {...args} />,
  args: {
    src: 'https://github.com/React95.png',
    alt: 'Reac95 logo',
    size: '48px'
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Avatar src="https://github.com/React95.png" alt="photo" circle />,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Frame display="inline-flex" gap="8px">
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const P=Object.freeze(Object.defineProperty({__proto__:null,Circle:s,Letters:n,Simple:t,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{P as A};
