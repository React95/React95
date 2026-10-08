import{r as H,j as s,F as b,c as _}from"./iframe-BP1fKKyq.js";/* empty css                              */import{c as j}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";/* empty css                              */var T=j({defaultClassName:"r95_vljy2n0",variantClassNames:{circle:{true:"r95_vljy2n1"}},defaultVariants:{},compoundVariants:[]}),z="r95_vljy2n2";const n=H.forwardRef(({src:e,srcSet:t,alt:r,circle:i,children:w,size:S="48px",className:R,...f},A)=>s.jsx(b,{...f,ref:A,size:S,className:_(T({circle:i}),R),children:e||t?s.jsx("img",{className:z,src:e,srcSet:t,alt:r}):w}));try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",filePath:"/home/runner/work/React95/React95/packages/core/components/Avatar/Avatar.tsx",methods:[],props:{circle:{defaultValue:null,declarations:[{fileName:"core/components/Avatar/Avatar.tsx",name:"TypeLiteral"}],description:"",name:"circle",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const{expect:a}=__STORYBOOK_MODULE_TEST__,E={title:"Avatar",component:n,tags:["autodocs"],argTypes:{circle:{control:"boolean"},srcSet:{control:"text",description:"A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)"},src:{control:"text",description:"Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)"},alt:{control:"text",description:"fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)"},size:{control:"text",description:"Avatar's width and height",defaultValue:"48px"}}},o={render:e=>s.jsx(n,{...e}),args:{src:"https://github.com/React95.png",alt:"React95 logo",size:"48px",id:"profile-picture",className:"profile-picture"},play:async({args:e,canvas:t})=>{const r=t.getByRole("img",{name:e.alt}),i=r.parentElement;await a(r).toHaveAttribute("src",e.src),await a(i).toHaveAttribute("id",e.id),await a(i).toHaveClass(e.className),await a(i).toHaveStyle({width:e.size,height:e.size}),await a(i).not.toHaveStyle({borderRadius:"50%"})},parameters:{design:{disable:!0}}},c={render:()=>s.jsx(n,{srcSet:"https://github.com/React95.png 1x",alt:"photo",circle:!0}),play:async({canvas:e})=>{const t=e.getByRole("img",{name:"photo"});await a(t).toHaveAttribute("srcset","https://github.com/React95.png 1x"),await a(t.parentElement).toHaveStyle({borderRadius:"50%"})},parameters:{design:{disable:!0}}},l={render:()=>s.jsxs(b,{display:"inline-flex",gap:"8px",children:[s.jsx(n,{children:"SQ"}),s.jsx(n,{circle:!0,children:"RO"})]}),play:async({canvas:e})=>{const t=e.getByText("SQ"),r=e.getByText("RO");await a(e.queryAllByRole("img")).toHaveLength(0),await a(t).toHaveStyle({width:"48px",height:"48px"}),await a(t).not.toHaveStyle({borderRadius:"50%"}),await a(r).toHaveStyle({width:"48px",height:"48px"}),await a(r).toHaveStyle({borderRadius:"50%"})},parameters:{design:{disable:!0}}},N=["Simple","Circle","Letters"];var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Avatar {...args} />,
  args: {
    src: 'https://github.com/React95.png',
    alt: 'React95 logo',
    size: '48px',
    id: 'profile-picture',
    className: 'profile-picture'
  },
  play: async ({
    args,
    canvas
  }) => {
    // with \`src\`, the avatar shows an image described by \`alt\`
    const image = canvas.getByRole('img', {
      name: args.alt
    });
    const avatar = image.parentElement!;
    await expect(image).toHaveAttribute('src', args.src);
    // other props reach the avatar, and \`className\` is added to its classes
    // (Circle and Letters fail if it replaces the avatar's own class)
    await expect(avatar).toHaveAttribute('id', args.id);
    await expect(avatar).toHaveClass(args.className!);
    await expect(avatar).toHaveStyle({
      width: args.size,
      height: args.size
    });
    await expect(avatar).not.toHaveStyle({
      borderRadius: '50%'
    });
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,u,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Avatar srcSet="https://github.com/React95.png 1x" alt="photo" circle />,
  play: async ({
    canvas
  }) => {
    // \`srcSet\` alone is enough to show the image
    const image = canvas.getByRole('img', {
      name: 'photo'
    });
    await expect(image).toHaveAttribute('srcset', 'https://github.com/React95.png 1x');
    await expect(image.parentElement).toHaveStyle({
      borderRadius: '50%'
    });
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,y,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Frame display="inline-flex" gap="8px">
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>,
  play: async ({
    canvas
  }) => {
    // without \`src\`, the avatar shows its children, at the default size
    const square = canvas.getByText('SQ');
    const round = canvas.getByText('RO');
    await expect(canvas.queryAllByRole('img')).toHaveLength(0);
    await expect(square).toHaveStyle({
      width: '48px',
      height: '48px'
    });
    await expect(square).not.toHaveStyle({
      borderRadius: '50%'
    });
    await expect(round).toHaveStyle({
      width: '48px',
      height: '48px'
    });
    await expect(round).toHaveStyle({
      borderRadius: '50%'
    });
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const C=Object.freeze(Object.defineProperty({__proto__:null,Circle:c,Letters:l,Simple:o,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{C as A};
