import{D as l}from"./Dropdown-BMU1Hee0.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,m={title:"Dropdown",component:l,tags:["autodocs"],args:{options:["","C:\\Documents and Settings","C:\\Documents and Settings\\Documents","iexplorer.exe"],disabled:!1}},t={args:{name:"path"},play:async({args:a,canvas:s,userEvent:c})=>{const e=s.getByRole("combobox"),n=a.options.map(String);await o(s.getAllByRole("option").map(d=>d.textContent)).toEqual(n),await o(e).toHaveAttribute("name",a.name),await o(e).toBeEnabled(),await c.selectOptions(e,n[2]),await o(e).toHaveValue(n[2])},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6"}}},g=["Simple"];var i,r,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'path'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const dropdown = canvas.getByRole('combobox');
    const options = args.options!.map(String);

    // one option per value, in order
    await expect(canvas.getAllByRole('option').map(option => option.textContent)).toEqual(options);

    // the other props reach the select
    await expect(dropdown).toHaveAttribute('name', args.name);
    await expect(dropdown).toBeEnabled();
    await userEvent.selectOptions(dropdown, options[2]);
    await expect(dropdown).toHaveValue(options[2]);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6'
    }
  }
}`,...(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Simple:t,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{u as D};
