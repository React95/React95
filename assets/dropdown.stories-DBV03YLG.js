import{D as l}from"./Dropdown-BdsJ-pBC.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,m={title:"Dropdown",component:l,tags:["autodocs"],args:{options:["","C:\\Documents and Settings","C:\\Documents and Settings\\Documents","iexplorer.exe"],disabled:!1}},o={args:{name:"path","aria-label":"Sample dropdown",width:"250px"},play:async({args:n,canvas:i,userEvent:d})=>{const t=i.getByRole("combobox"),a=n.options.map(String);await e(i.getAllByRole("option").map(c=>c.textContent)).toEqual(a),await e(t.parentElement).toHaveStyle({width:n.width}),await e(t).toHaveAttribute("name",n.name),await e(t).toBeEnabled(),await d.selectOptions(t,a[2]),await e(t).toHaveValue(a[2])},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6"}}},w=["Simple"];var p,r,s;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'path',
    'aria-label': 'Sample dropdown',
    width: '250px'
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

    // style props size the wrapper, the other props reach the select
    await expect(dropdown.parentElement).toHaveStyle({
      width: args.width
    });
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
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Simple:o,__namedExportsOrder:w,default:m},Symbol.toStringTag,{value:"Module"}));export{u as D};
