import{r as R,j as e}from"./iframe-CUQ9NVYA.js";/* empty css                              */import{c as _}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import{F as x}from"./Frame-CPG3G6Fk.js";import{c as z}from"./index-BMynro7A.js";/* empty css                              */import"./preload-helper-C1FmrZbK.js";var I=_({defaultClassName:"r95_vljy2n0",variantClassNames:{circle:{true:"r95_vljy2n1"}},defaultVariants:{},compoundVariants:[]}),E="r95_vljy2n2";const r=R.forwardRef(({src:a,srcSet:i,alt:v,circle:f,children:b,size:y="48px",className:A,...S},j)=>e.jsx(x,{...S,ref:j,size:y,className:z(I({circle:f}),A),children:a||i?e.jsx("img",{className:E,src:a,srcSet:i,alt:v}):b}));r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{circle:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'48px'",computed:!1},required:!1}}};const H={title:"Avatar",component:r,tags:["autodocs"],argTypes:{circle:{control:"boolean"},srcSet:{control:"text",description:"A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)"},src:{control:"text",description:"Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)"},alt:{control:"text",description:"fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)"},size:{control:"text",description:"Avatar's width and height",defaultValue:"48px"}}},t={render:a=>e.jsx(r,{...a}),args:{src:"https://github.com/React95.png",alt:"Reac95 logo",size:"48px"},parameters:{design:{disable:!0}}},s={render:()=>e.jsx(r,{src:"https://github.com/React95.png",alt:"photo",circle:!0}),parameters:{design:{disable:!0}}},n={render:()=>e.jsxs(x,{display:"inline-flex",gap:"8px",children:[e.jsx(r,{children:"SQ"}),e.jsx(r,{circle:!0,children:"RO"})]}),parameters:{design:{disable:!0}}},M=["Simple","Circle","Letters"];var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{s as Circle,n as Letters,t as Simple,M as __namedExportsOrder,H as default};
