import{s as y,c as i,a as r,j as R}from"./index-0559674c.js";import{r as $}from"./index-1b03fe98.js";import{F as v}from"./Frame-f3688d20.js";const j=y.img`
  max-width: 100%;
`,F=y(v)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  overflow: hidden;
  margin-right: 1;
  margin-bottom: 1;

  box-shadow: unset;

  ${({circle:e,size:a=48})=>i`
    border-radius: ${e?"50%":0};

    width: ${a};
    height: ${a};
  `}

  ${({circle:e})=>e?i`
          border-style: solid;
          border-width: 1;
          border-top-color: borderDark;
          border-right-color: borderLightest;
          border-bottom-color: borderLightest;
          border-left-color: borderDark;
        `:i`
          box-shadow: in;
          padding-left: 1;
        `}
`,d=$.forwardRef(({src:e,srcSet:a,alt:x,circle:A,children:_,...w},S)=>r(F,{circle:A,ref:S,...w,children:e||a?r(j,{src:e,srcSet:a,alt:x}):_})),t=d;try{d.displayName="Avatar",d.__docgenInfo={description:"",displayName:"Avatar",props:{circle:{defaultValue:null,description:"",name:"circle",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const q={title:"Avatar",component:t,tags:["autodocs"]},s={render:()=>r(t,{src:"https://github.com/React95.png",alt:"photo"}),parameters:{design:{disable:!0}}},o={render:()=>r(t,{src:"https://github.com/React95.png",alt:"photo",circle:!0}),parameters:{design:{disable:!0}}},n={render:()=>R(v,{display:"inline-flex",boxShadow:"none",bg:"transparent",style:{gap:8},children:[r(t,{children:"SQ"}),r(t,{circle:!0,children:"RO"})]}),parameters:{design:{disable:!0}}};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Avatar src="https://github.com/React95.png" alt="photo" />,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Avatar src="https://github.com/React95.png" alt="photo" circle />,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Frame display="inline-flex" boxShadow="none" bg="transparent" style={{
    gap: 8
  }}>
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const C=["Simple","Circle","Letters"];export{o as Circle,n as Letters,s as Simple,C as __namedExportsOrder,q as default};
