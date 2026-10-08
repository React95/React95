import{j as e,r as h}from"./iframe-BP1fKKyq.js";import{W as k,R as D}from"./Write1-CE8UsuL2.js";import{M as T}from"./Modal-Co99nBD4.js";/* empty css                              */import{L as p}from"./List-BIao8j5n.js";import{T as g}from"./TaskBar-DCQnLYcw.js";import{T as B}from"./TitleBar-B13jGq_-.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CYWwPWGC.js";import"./Button.css-ChH4GoWp.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BsRdtlNK.js";/* empty css                            */import"./Tooltip-B-ebvjti.js";/* empty css                               *//* empty css                               */const{expect:s,waitFor:u,within:r}=__STORYBOOK_MODULE_TEST__,P={title:"TaskBar",component:g,tags:["autodocs"]},L=()=>{const[n,t]=h.useState(!1),[a,o]=h.useState(!1),i=()=>t(!1),c=()=>o(!1);return e.jsxs(e.Fragment,{children:[n&&e.jsx(T,{icon:e.jsx(k,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.jsx(B.Close,{onClick:i},"close")],width:"300px",height:"200px"}),a&&e.jsx(T,{dragOptions:{defaultPosition:{x:50,y:50}},width:"300px",height:"200px",icon:e.jsx(D,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.jsx(B.Close,{onClick:c},"close")]}),e.jsx(g,{list:e.jsxs(p,{children:[e.jsx(p.Item,{icon:e.jsx(D,{variant:"32x32_4"}),onClick:()=>o(!0),children:"Local Disk (C:)"}),e.jsx(p.Item,{icon:e.jsx(k,{variant:"32x32_4"}),onClick:()=>{t(!0)},children:"Windows Explorer"})]})})]})},y=n=>[n.getHours(),n.getMinutes()].map(t=>String(t).padStart(2,"0")).join(":"),R=n=>`${String(n.getDate()).padStart(2,"0")} ${n.toLocaleString("en-US",{month:"long"})} ${n.getFullYear()}`,l={render:()=>e.jsx(L,{}),play:async({canvas:n,userEvent:t})=>{const a=n.getByRole("button",{name:"Start"}),o=a.parentElement,i=()=>r(o).queryAllByRole("list"),c=()=>r(o).getAllByRole("button").filter(w=>w!==a).map(w=>w.textContent);await s(i()).toHaveLength(0),await t.click(a),await s(i()).toHaveLength(1),await t.click(a),await s(i()).toHaveLength(0),await t.click(a),await t.click(r(i()[0]).getByText("Local Disk (C:)")),await s(i()).toHaveLength(0),await s(c()).toEqual(["Local Disk (C:)"]),await t.click(a),await t.click(r(i()[0]).getByText("Windows Explorer")),await s(c()).toEqual(["Local Disk (C:)","Windows Explorer"]);const x=new Date,d=await u(()=>r(o).getByText(/^\d{2}:\d{2}$/));await s([y(x),y(new Date)]).toContain(d.textContent),await t.hover(d),await u(()=>s(o).toHaveTextContent(R(x)),{timeout:2e3})},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},f=new Date(2026,0,5,9,7),m={render:()=>e.jsx(g,{}),beforeEach:()=>{const n=Date;class t extends n{constructor(...o){o.length?super(...o):super(f.getTime())}static now(){return f.getTime()}}return globalThis.Date=t,()=>{globalThis.Date=n}},play:async({canvas:n,userEvent:t})=>{const a=n.getByText("09:07");await t.hover(a),await u(()=>s(a.parentElement).toHaveTextContent("05 January 2026"),{timeout:2e3})}},G=["Simple","Clock"];var v,C,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const start = canvas.getByRole('button', {
      name: 'Start'
    });
    const taskBar = start.parentElement!;
    const menus = () => within(taskBar).queryAllByRole('list');
    const windowButtons = () => within(taskBar).getAllByRole('button').filter(button => button !== start).map(button => button.textContent);

    // Start opens and closes its menu
    await expect(menus()).toHaveLength(0);
    await userEvent.click(start);
    await expect(menus()).toHaveLength(1);
    await userEvent.click(start);
    await expect(menus()).toHaveLength(0);

    // choosing an item closes the menu, and the window it opens gets a button
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Local Disk (C:)'));
    await expect(menus()).toHaveLength(0);
    await expect(windowButtons()).toEqual(['Local Disk (C:)']);

    // the buttons follow the order the windows opened in
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Windows Explorer'));
    await expect(windowButtons()).toEqual(['Local Disk (C:)', 'Windows Explorer']);

    // the clock shows the time (either side of a minute change)...
    const before = new Date();
    const clock = await waitFor(() => within(taskBar).getByText(/^\\d{2}:\\d{2}$/));
    await expect([clockTime(before), clockTime(new Date())]).toContain(clock.textContent);

    // ...and hovering it shows the date
    await userEvent.hover(clock);
    await waitFor(() => expect(taskBar).toHaveTextContent(clockDate(before)), {
      timeout: 2000
    });
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var b,S,j;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <TaskBar />,
  // freezes "now" while the story is open, so the clock always shows it
  beforeEach: () => {
    const RealDate = Date;
    class FrozenDate extends RealDate {
      constructor(...args: unknown[]) {
        if (args.length) {
          super(...(args as [number]));
        } else {
          super(morning.getTime());
        }
      }
      static now() {
        return morning.getTime();
      }
    }
    globalThis.Date = FrozenDate as DateConstructor;
    return () => {
      globalThis.Date = RealDate;
    };
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // hours, minutes and the day get a leading zero
    const clock = canvas.getByText('09:07');
    await userEvent.hover(clock);
    await waitFor(() => expect(clock.parentElement).toHaveTextContent('05 January 2026'), {
      timeout: 2000
    });
  }
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};export{m as Clock,l as Simple,G as __namedExportsOrder,P as default};
