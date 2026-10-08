import{r as y,j as n,c as w,F as k}from"./iframe-BP1fKKyq.js";/* empty css                                   *//* empty css                              */var B="r95_1rnz0nz0",x="r95_1rnz0nz1",b="r95_1rnz0nz2",C="r95_1rnz0nz3";const s=y.forwardRef(({children:e,disabled:o,className:a,...i},d)=>n.jsxs("label",{className:w(b,a),children:[n.jsx("input",{type:"radio",disabled:o,className:C,ref:d,...i}),n.jsx("span",{className:B}),n.jsx("span",{className:x,children:e})]}));try{s.displayName="RadioButton",s.__docgenInfo={description:"",displayName:"RadioButton",filePath:"/home/runner/work/React95/React95/packages/core/components/RadioButton/RadioButton.tsx",methods:[],props:{},tags:{}}}catch{}const{expect:t}=__STORYBOOK_MODULE_TEST__,v={title:"RadioButton",component:s,tags:["autodocs"]},f=()=>{const[e,o]=y.useState("one"),a=i=>o(i.target.value);return n.jsxs(k,{display:"flex",flexDirection:"column",children:[n.jsx(s,{name:"working",value:"one",checked:e==="one",onChange:a,children:"Working"}),n.jsx(s,{name:"working",value:"two",checked:e==="two",onChange:a,children:"Working"}),n.jsx(s,{readOnly:!0,checked:!0,value:"three",children:"Checked"}),n.jsx(s,{readOnly:!0,disabled:!0,value:"four",children:"Disabled"}),n.jsx(s,{readOnly:!0,checked:!0,disabled:!0,value:"five",children:"Checked & Disabled"})]})},r={render:()=>n.jsx(f,{}),play:async({canvas:e,userEvent:o})=>{const[a,i]=e.getAllByRole("radio",{name:"Working"});await t(a).toBeChecked(),await t(i).not.toBeChecked(),await o.click(i),await t(a).not.toBeChecked(),await t(i).toBeChecked();const d=e.getByRole("radio",{name:"Disabled"});await t(e.getByRole("radio",{name:"Checked"})).toBeChecked(),await t(d).toBeDisabled(),await t(e.getByRole("radio",{name:"Checked & Disabled"})).toBeChecked(),await o.click(e.getByText("Disabled")),await t(d).not.toBeChecked()},parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}},c={args:{children:"Option",checked:!1,disabled:!1,readOnly:!0,name:"option",className:"option"},play:async({args:e,canvas:o})=>{const a=o.getByRole("radio",{name:e.children});await t(a).not.toBeChecked(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("name",e.name),await t(a.closest("label")).toHaveClass(e.className),await t(a).not.toHaveClass(e.className),await t(a).toHaveStyle({opacity:"0"})},argTypes:{children:{control:"text"}}},R=["Simple","Playground"];var l,h,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    // the two "Working" ones share a name, so checking one unchecks the other.
    // The story keeps the state, so they only change if onChange is called
    const [first, second] = canvas.getAllByRole('radio', {
      name: 'Working'
    });
    await expect(first).toBeChecked();
    await expect(second).not.toBeChecked();
    await userEvent.click(second);
    await expect(first).not.toBeChecked();
    await expect(second).toBeChecked();
    const disabled = canvas.getByRole('radio', {
      name: 'Disabled'
    });
    await expect(canvas.getByRole('radio', {
      name: 'Checked'
    })).toBeChecked();
    await expect(disabled).toBeDisabled();
    await expect(canvas.getByRole('radio', {
      name: 'Checked & Disabled'
    })).toBeChecked();
    await userEvent.click(canvas.getByText('Disabled'));
    await expect(disabled).not.toBeChecked();
  },
  parameters: {
    // a demo of every state; the controls are on Playground
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,g,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Option',
    checked: false,
    disabled: false,
    readOnly: true,
    name: 'option',
    className: 'option'
  },
  play: async ({
    args,
    canvas
  }) => {
    // the children name the radio button, and the other props reach the input
    const radio = canvas.getByRole('radio', {
      name: args.children as string
    });
    await expect(radio).not.toBeChecked();
    await expect(radio).toBeEnabled();
    await expect(radio).toHaveAttribute('name', args.name);

    // \`className\` goes to the label only. On the input, it would replace the
    // class that hides the native radio behind the Win95 one
    await expect(radio.closest('label')).toHaveClass(args.className!);
    await expect(radio).not.toHaveClass(args.className!);
    await expect(radio).toHaveStyle({
      opacity: '0'
    });
  },
  argTypes: {
    children: {
      control: 'text'
    }
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=Object.freeze(Object.defineProperty({__proto__:null,Playground:c,Simple:r,__namedExportsOrder:R,default:v},Symbol.toStringTag,{value:"Module"}));export{O as R};
