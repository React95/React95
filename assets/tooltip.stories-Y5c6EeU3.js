import{j as r}from"./iframe-DOYjnLPs.js";import{T as w}from"./Tooltip-BB2idZwA.js";const{expect:e,waitFor:c}=__STORYBOOK_MODULE_TEST__,y={title:"Tooltip",component:w,tags:["autodocs"],parameters:{docs:{description:{component:"The wrapper is focusable by default (`tabIndex={0}`), so the tip shows on keyboard focus too. When the Tooltip wraps a focusable child (a Button, say), that adds a second tab stop — pass `tabIndex={-1}` to turn the extra stop off; the child alone still triggers the tip, since focus bubbles."}}},argTypes:{delay:{control:{type:"number",step:100}}}};function h(n){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=n.getDate(),i=n.getMonth(),t=n.getFullYear();return`${a.toString().padStart(2,"0")} ${s[i]} ${t}`}const l={render:n=>r.jsxs(r.Fragment,{children:[r.jsx("br",{}),r.jsx("br",{}),r.jsx("br",{}),r.jsx(w,{...n,children:r.jsx("span",{children:"Hover me"})})]}),args:{delay:1e3,text:h(new Date)},play:async({args:n,canvas:s,userEvent:a})=>{const i=s.getByText("Hover me"),t=i.parentElement,p=n.delay,o=n.text;await e(t).not.toHaveTextContent(o),await a.hover(i),await e(t).not.toHaveTextContent(o),await c(()=>e(t).toHaveTextContent(o),{timeout:p*2}),await a.unhover(i),await e(t).not.toHaveTextContent(o),await a.hover(i),await a.unhover(i),await new Promise(m=>setTimeout(m,p*1.5)),await e(t).not.toHaveTextContent(o),t.focus(),await e(t).not.toHaveTextContent(o),await c(()=>e(s.getByRole("tooltip")).toHaveTextContent(o),{timeout:p*2});const g=s.getByRole("tooltip");await e(t).toHaveAttribute("aria-describedby",g.id),await a.keyboard("{Escape}"),await e(t).not.toHaveTextContent(o),t.blur(),t.focus(),await c(()=>e(s.getByRole("tooltip")).toHaveTextContent(o),{timeout:p*2}),t.blur(),await c(()=>e(t).not.toHaveTextContent(o))},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}},v=["Simple"];var x,d,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    const tooltip = target.parentElement as HTMLElement;
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

    // focusing the target shows the tip too, after the same \`delay\`
    tooltip.focus();
    await expect(tooltip).not.toHaveTextContent(text);
    await waitFor(() => expect(canvas.getByRole('tooltip')).toHaveTextContent(text), {
      timeout: delay * 2
    });

    // the tip has its role, and the target points to it
    const tip = canvas.getByRole('tooltip');
    await expect(tooltip).toHaveAttribute('aria-describedby', tip.id);

    // Esc hides it
    await userEvent.keyboard('{Escape}');
    await expect(tooltip).not.toHaveTextContent(text);

    // blurring hides it too
    tooltip.blur(); // Esc left the focus on the target
    tooltip.focus();
    await waitFor(() => expect(canvas.getByRole('tooltip')).toHaveTextContent(text), {
      timeout: delay * 2
    });
    tooltip.blur();

    // blur hides the tip on the next render, so wait for it to go away
    await waitFor(() => expect(tooltip).not.toHaveTextContent(text));
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19'
    }
  }
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const f=Object.freeze(Object.defineProperty({__proto__:null,Simple:l,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{f as T};
