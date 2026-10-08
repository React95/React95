import{F as n,j as e,r as c}from"./iframe-BP1fKKyq.js";import"./preload-helper-C1FmrZbK.js";const K={title:"Frame",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
Frame is a versatile container component that supports responsive design through breakpoint-based props.

## Basic Usage

Frame supports design tokens and standard CSS values:

\`\`\`tsx
<Frame w="$20" h="$10" padding="$4">
  Using design tokens
</Frame>

<Frame w="200px" h="100px" padding="16px">
  Using CSS values
</Frame>
\`\`\`

## Responsive Usage

Pass objects with breakpoint keys to make props responsive:

\`\`\`tsx
<Frame w={{ mobile: '100%', tablet: '50%', desktop: '$20' }}>
  Responsive content with mixed tokens and CSS values
</Frame>
\`\`\`

**Breakpoints:** mobile (0px+), tablet (768px+), desktop (1024px+)

**Responsive Props:** All layout and spacing props support responsive values including \`w\`, \`h\`, \`padding\`, \`margin\`, \`display\`, etc.

**Value Types:** Both design tokens (\`$4\`, \`$20\`) and CSS values (\`100%\`, \`200px\`) work in both single and responsive formats.
        `}}}},i={render:r=>e.jsx(n,{...r}),args:{bgColor:"$material",w:"200px",h:"100px",boxShadow:"$out"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},s={render:()=>e.jsx(n,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$in"}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},a={render:()=>e.jsx(n,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:e.jsx(n,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},t={render:()=>e.jsx(n,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:e.jsx(n,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},l=()=>{const[r,P]=c.useState(typeof window<"u"?window.innerWidth:0);c.useEffect(()=>{const o=()=>P(window.innerWidth);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const T=o=>o>=1024?"desktop":o>=768?"tablet":"mobile";return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsxs("strong",{children:["Current: ",r,"px (",T(r),")"]})}),e.jsx("p",{style:{marginTop:"4px",fontSize:"12px"},children:"mobile: <768px | tablet: 768-1023px | desktop: ≥1024px"})]})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx(n,{w:{mobile:"100%",tablet:"70%",desktop:"400px"},h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:"Resize window to see responsive width: 100% → 70% → 400px"})]}),parameters:{docs:{description:{story:"Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop"}}}},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx(n,{w:"300px",bgColor:"$material",boxShadow:"$out",padding:{mobile:"$2",tablet:"$8",desktop:"$16"},children:e.jsx(n,{bgColor:"white",boxShadow:"$in",padding:{mobile:"$2",tablet:"$8",desktop:"$16"},children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:e.jsx("div",{children:"Padding increases with screen size"})})})})]}),parameters:{docs:{description:{story:"Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time."}}}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsxs(n,{display:{mobile:"block",tablet:"flex"},w:"100%",bgColor:"$material",boxShadow:"$out",padding:"$4",gap:"$4",children:[e.jsx(n,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2",mb:{mobile:"$4",tablet:"$0"},children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:"Panel 1"})}),e.jsx(n,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2",children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:"Panel 2"})})]})]}),parameters:{docs:{description:{story:"Layout changes from stacked on mobile to side-by-side on tablet+"}}}},N=["Simple","WithBoxShadowIn","WithBoxShadowInOut","WithBackgroundColor","ResponsiveWidth","ResponsivePadding","ResponsiveLayout"];var g,x,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Frame {...args} />,
  args: {
    bgColor: '$material',
    w: '200px',
    h: '100px',
    boxShadow: '$out'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,w,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(u=(w=s.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var $,S,v;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,j,F;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(F=(j=t.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var k,y,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <ResponsiveDimmensions />
      <Frame w={{
      mobile: '100%',
      tablet: '70%',
      desktop: '400px'
    }} h="100px" bgColor="$material" boxShadow="$out" padding="$4">
        Resize window to see responsive width: 100% → 70% → 400px
      </Frame>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop'
      }
    }
  }
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var R,D,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ResponsiveDimmensions />
        <Frame w="300px" bgColor="$material" boxShadow="$out" padding={{
        mobile: '$2',
        tablet: '$8',
        desktop: '$16'
      }}>
          <Frame bgColor="white" boxShadow="$in" padding={{
          mobile: '$2',
          tablet: '$8',
          desktop: '$16'
        }}>
            <div style={{
            color: 'black',
            fontSize: '14px'
          }}>
              <div>Padding increases with screen size</div>
            </div>
          </Frame>
        </Frame>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time.'
      }
    }
  }
}`,...(B=(D=p.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var z,W,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <ResponsiveDimmensions />
      <Frame display={{
      mobile: 'block',
      tablet: 'flex'
    }} w="100%" bgColor="$material" boxShadow="$out" padding="$4" gap="$4">
        <Frame w={{
        mobile: '100%',
        tablet: '50%'
      }} h="80px" bgColor="white" boxShadow="$in" padding="$2" mb={{
        mobile: '$4',
        tablet: '$0'
      }}>
          <div style={{
          color: 'black',
          fontSize: '14px'
        }}>Panel 1</div>
        </Frame>
        <Frame w={{
        mobile: '100%',
        tablet: '50%'
      }} h="80px" bgColor="white" boxShadow="$in" padding="$2">
          <div style={{
          color: 'black',
          fontSize: '14px'
        }}>Panel 2</div>
        </Frame>
      </Frame>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Layout changes from stacked on mobile to side-by-side on tablet+'
      }
    }
  }
}`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};export{m as ResponsiveLayout,p as ResponsivePadding,d as ResponsiveWidth,i as Simple,t as WithBackgroundColor,s as WithBoxShadowIn,a as WithBoxShadowInOut,N as __namedExportsOrder,K as default};
