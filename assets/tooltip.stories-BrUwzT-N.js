import{j as a}from"./iframe-BP1fKKyq.js";import{T as g}from"./Tooltip-B-ebvjti.js";const{expect:i,waitFor:w}=__STORYBOOK_MODULE_TEST__,u={title:"Tooltip",component:g,tags:["autodocs"],argTypes:{delay:{control:{type:"number",step:100}}}};function v(t){const c=["January","February","March","April","May","June","July","August","September","October","November","December"],o=t.getDate(),e=t.getMonth(),n=t.getFullYear();return`${o.toString().padStart(2,"0")} ${c[e]} ${n}`}const s={render:t=>a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(g,{...t,children:a.jsx("span",{children:"Hover me"})})]}),args:{delay:1e3,text:v(new Date)},play:async({args:t,canvas:c,userEvent:o})=>{const e=c.getByText("Hover me"),n=e.parentElement,l=t.delay,r=t.text;await i(n).not.toHaveTextContent(r),await o.hover(e),await i(n).not.toHaveTextContent(r),await w(()=>i(n).toHaveTextContent(r),{timeout:l*2}),await o.unhover(e),await i(n).not.toHaveTextContent(r),await o.hover(e),await o.unhover(e),await new Promise(d=>setTimeout(d,l*1.5)),await i(n).not.toHaveTextContent(r)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}},y=["Simple"];var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <>
      <br />
      <br />
      <br />
      <Tooltip {...args}>
        <span>Hover me</span>
      </Tooltip>
    </>,
  args: {
    delay: 1000,
    text: formatDate(new Date())
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const target = canvas.getByText('Hover me');
    const tooltip = target.parentElement;
    const delay = args.delay!;
    const text = args.text!;
    await expect(tooltip).not.toHaveTextContent(text);

    // the tip shows only after \`delay\`, while the pointer stays on it
    await userEvent.hover(target);
    await expect(tooltip).not.toHaveTextContent(text);
    await waitFor(() => expect(tooltip).toHaveTextContent(text), {
      timeout: delay * 2
    });

    // leaving hides it
    await userEvent.unhover(target);
    await expect(tooltip).not.toHaveTextContent(text);

    // and leaving before \`delay\` cancels it
    await userEvent.hover(target);
    await userEvent.unhover(target);
    await new Promise(resolve => setTimeout(resolve, delay * 1.5));
    await expect(tooltip).not.toHaveTextContent(text);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19'
    }
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const b=Object.freeze(Object.defineProperty({__proto__:null,Simple:s,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{b as T};
