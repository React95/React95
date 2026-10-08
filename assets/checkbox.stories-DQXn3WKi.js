import{j as s,r as S,F as q}from"./iframe-BP1fKKyq.js";import{C as r}from"./Checkbox-BvhHgisT.js";/* empty css                              */const{expect:t}=__STORYBOOK_MODULE_TEST__,I={title:"Checkbox",component:r,tags:["autodocs"],argTypes:{children:{control:"text"}}},Z=()=>{const[e,n]=S.useState(!0);return s.jsxs(q,{display:"flex",flexDirection:"column",children:[s.jsx(r,{checked:e,onChange:()=>{n(!e)},children:"Working"}),s.jsx(r,{readOnly:!0,checked:!0,children:"Checked"}),s.jsx(r,{readOnly:!0,checked:!1,children:"Unchecked"}),s.jsx(r,{readOnly:!0,disabled:!0,children:"Disabled"}),s.jsx(r,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"})]})},i={render:()=>s.jsx(Z,{}),tags:["!test"],parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},o={args:{children:"Checked",checked:!0,readOnly:!0},play:async({args:e,canvas:n})=>{const a=n.getByRole("checkbox",{name:e.children});await t(a).toBeChecked(),await t(a).toBeEnabled()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},d={args:{label:"Unchecked",checked:!1,readOnly:!0},play:async({args:e,canvas:n})=>{const a=n.getByRole("checkbox",{name:e.label});await t(a).not.toBeChecked()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},l={args:{children:"Disabled",disabled:!0},play:async({args:e,canvas:n,userEvent:a})=>{const c=n.getByRole("checkbox",{name:e.children});await t(c).toBeDisabled(),await a.click(n.getByText(e.children)),await t(c).not.toBeChecked()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},h={args:{children:"Checked and Disabled",checked:!0,disabled:!0,readOnly:!0},play:async({args:e,canvas:n})=>{const a=n.getByRole("checkbox",{name:e.children});await t(a).toBeChecked(),await t(a).toBeDisabled()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},_=e=>{const[n,a]=S.useState(!0);return s.jsx(r,{...e,checked:n,onChange:()=>a(!n)})},g={args:{children:"Working",disabled:!1,name:"working",className:"working",style:{cursor:"pointer"}},render:e=>s.jsx(_,{...e}),play:async({args:e,canvas:n,userEvent:a})=>{var m;const c=n.getByRole("checkbox",{name:e.children}),K=n.getByText(e.children);await t(c.closest("label")).toHaveClass(e.className),await t(c.closest("label")).toHaveStyle({cursor:(m=e.style)==null?void 0:m.cursor}),await t(c).toHaveAttribute("name",e.name),await t(c).toBeChecked(),await a.click(K),await t(c).not.toBeChecked(),await a.click(c),await t(c).toBeChecked()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},E=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];var p,k,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <AllDemo />,
  // each state is tested in its own story
  tags: ['!test'],
  parameters: {
    // a demo of every state; each one also has its own story with controls
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var u,x,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Checked',
    checked: true,
    readOnly: true
  },
  play: async ({
    args,
    canvas
  }) => {
    // the children name the checkbox
    const checkbox = canvas.getByRole('checkbox', {
      name: args.children
    });
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeEnabled();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,B,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  // \`label\` also names the checkbox, when there are no children
  args: {
    label: 'Unchecked',
    checked: false,
    readOnly: true
  },
  play: async ({
    args,
    canvas
  }) => {
    const checkbox = canvas.getByRole('checkbox', {
      name: args.label
    });
    await expect(checkbox).not.toBeChecked();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var f,C,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByRole('checkbox', {
      name: args.children
    });
    await expect(checkbox).toBeDisabled();
    await userEvent.click(canvas.getByText(args.children!));
    await expect(checkbox).not.toBeChecked();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,v,T;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Checked and Disabled',
    checked: true,
    disabled: true,
    readOnly: true
  },
  play: async ({
    args,
    canvas
  }) => {
    const checkbox = canvas.getByRole('checkbox', {
      name: args.children
    });
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(T=(v=h.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var A,N,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Working',
    disabled: false,
    name: 'working',
    className: 'working',
    style: {
      cursor: 'pointer'
    }
  },
  render: args => <WorkingDemo {...args} />,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const checkbox = canvas.getByRole('checkbox', {
      name: args.children
    });
    const label = canvas.getByText(args.children!);

    // \`style\` and \`className\` go to the label, the other props to the input
    await expect(checkbox.closest('label')).toHaveClass(args.className!);
    await expect(checkbox.closest('label')).toHaveStyle({
      cursor: args.style?.cursor
    });
    await expect(checkbox).toHaveAttribute('name', args.name);

    // the story keeps the state, so it only changes if onChange is called.
    // Clicking the text works too, since the input is inside the label
    await expect(checkbox).toBeChecked();
    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const F=Object.freeze(Object.defineProperty({__proto__:null,All:i,Checked:o,CheckedAndDisabled:h,Disabled:l,Unchecked:d,Working:g,__namedExportsOrder:E,default:I},Symbol.toStringTag,{value:"Module"}));export{F as C};
