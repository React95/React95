import{r as e,R as c}from"./index-ff614419.js";import{c as R}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{F as f}from"./Frame-43ccd6dd.js";import"./index-a20f67f3.js";var _=R({defaultClassName:"r95_vljy2n0",variantClassNames:{circle:{true:"r95_vljy2n1"}},defaultVariants:{},compoundVariants:[]}),z="r95_vljy2n2";const r=e.forwardRef(({src:a,srcSet:o,alt:b,circle:x,children:A,size:y="48px",...S},E)=>c.createElement(f,{className:_({circle:x}),ref:E,...S,size:y},a||o?c.createElement("img",{className:z,src:a,srcSet:o,alt:b}):A));r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:"'48px'",computed:!1},required:!1}}};const w={title:"Avatar",component:r,tags:["autodocs"],argTypes:{circle:{control:"boolean"},srcSet:{control:"text",description:"A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)"},src:{control:"text",description:"Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)"},alt:{control:"text",description:"fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)"},size:{control:"text",description:"Avatar's width and height",defaultValue:"48px"}}},t={render:a=>e.createElement(r,{...a}),args:{src:"https://github.com/React95.png",alt:"Reac95 logo",size:"48px"},parameters:{design:{disable:!0}}},s={render:()=>e.createElement(r,{src:"https://github.com/React95.png",alt:"photo",circle:!0}),parameters:{design:{disable:!0}}},n={render:()=>e.createElement(f,{display:"inline-flex",gap:"8px"},e.createElement(r,null,"SQ"),e.createElement(r,{circle:!0},"RO")),parameters:{design:{disable:!0}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Avatar src="https://github.com/React95.png" alt="photo" circle />,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Frame display="inline-flex" gap="8px">
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const C=["Simple","Circle","Letters"];export{s as Circle,n as Letters,t as Simple,C as __namedExportsOrder,w as default};
