import{r as b,j as a,F as s,c as y}from"./iframe-BP1fKKyq.js";/* empty css                                   */var _="r95_1drc6y70",f="r95_1drc6y71",B="r95_1drc6y72",h="r95_1drc6y73";const o=b.forwardRef(({width:e="150px",percent:r=0,...t},c)=>a.jsxs(s,{...t,width:e,className:y(_,t.className),ref:c,children:[a.jsx(s,{className:f,width:e,children:`${r}%`}),a.jsx(s,{className:B,width:`${r}%`,children:a.jsx(s,{className:h,width:e,children:`${r}%`})})]}));try{o.displayName="ProgressBar",o.__docgenInfo={description:"",displayName:"ProgressBar",filePath:"/home/runner/work/React95/React95/packages/core/components/ProgressBar/ProgressBar.tsx",methods:[],props:{percent:{defaultValue:null,declarations:[{fileName:"core/components/ProgressBar/ProgressBar.tsx",name:"TypeLiteral"}],description:"",name:"percent",required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}const{expect:p}=__STORYBOOK_MODULE_TEST__,x={title:"ProgressBar",component:o,tags:["autodocs"]},n={render:e=>a.jsx(o,{...e}),args:{width:"200px",percent:49},play:async({args:e,canvas:r})=>{const t=e.percent??0,[c,i]=r.getAllByText(`${t}%`),l=c.parentElement.getBoundingClientRect(),u=i.parentElement.getBoundingClientRect();await p(getComputedStyle(i).backgroundColor).not.toBe("rgba(0, 0, 0, 0)"),await p((u.right-l.left)/l.width).toBeCloseTo(t/100)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13"}}},w=["Simple"];var d,g,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ProgressBar {...args} />,
  args: {
    width: '200px',
    percent: 49
  },
  play: async ({
    args,
    canvas
  }) => {
    const percent = args.percent ?? 0;

    // the label is drawn twice: over the empty bar and over the blue part
    const [emptyLabel, filledLabel] = canvas.getAllByText(\`\${percent}%\`);
    const bar = emptyLabel.parentElement!.getBoundingClientRect();
    // the blue part is clipped by its container, so the blue ends at the
    // container's right edge
    const filled = filledLabel.parentElement!.getBoundingClientRect();
    await expect(getComputedStyle(filledLabel).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    await expect((filled.right - bar.left) / bar.width).toBeCloseTo(percent / 100);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13'
    }
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const R=Object.freeze(Object.defineProperty({__proto__:null,Simple:n,__namedExportsOrder:w,default:x},Symbol.toStringTag,{value:"Module"}));export{R as P};
