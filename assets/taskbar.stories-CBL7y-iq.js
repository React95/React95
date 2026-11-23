import{j as n,r as k}from"./iframe-DtovAZdS.js";import{W as y,R as v}from"./Wscript102-BusYrofc.js";import{M as B}from"./Modal-CzIRnPD1.js";/* empty css                              */import{L as m}from"./List-Z63-a-JS.js";import{T as x}from"./TaskBar-BoYR7yAM.js";import{T as b}from"./TitleBar-CUy35k-z.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CRM8jmiY.js";import"./Button.css-BQGZBg8x.js";/* empty css                             */import"./index-BEsQiDiN.js";/* empty css                            */import"./ListNav-B3omH_2n.js";import"./Tooltip-CLyra8hm.js";/* empty css                               *//* empty css                               */const{expect:t,waitFor:d,within:r}=__STORYBOOK_MODULE_TEST__,G={title:"TaskBar",component:x,tags:["autodocs"]},L=()=>{const[o,a]=k.useState(!1),[e,s]=k.useState(!1),i=()=>a(!1),c=()=>s(!1);return n.jsxs(n.Fragment,{children:[o&&n.jsx(B,{icon:n.jsx(y,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[n.jsx(b.Close,{onClick:i},"close")],width:"300px",height:"200px"}),e&&n.jsx(B,{dragOptions:{defaultPosition:{x:50,y:50}},width:"300px",height:"200px",icon:n.jsx(v,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[n.jsx(b.Close,{onClick:c},"close")]}),n.jsx(x,{list:n.jsxs(m,{children:[n.jsx(m.Item,{icon:n.jsx(v,{variant:"32x32_4"}),onClick:()=>s(!0),children:"Local Disk (C:)"}),n.jsx(m.Item,{icon:n.jsx(y,{variant:"32x32_4"}),onClick:()=>{a(!0)},children:"Windows Explorer"})]})})]})},f=o=>[o.getHours(),o.getMinutes()].map(a=>String(a).padStart(2,"0")).join(":"),R=o=>`${String(o.getDate()).padStart(2,"0")} ${o.toLocaleString("en-US",{month:"long"})} ${o.getFullYear()}`,u={render:()=>n.jsx(L,{}),play:async({canvas:o,userEvent:a})=>{const e=o.getByRole("button",{name:"Start"}),s=e.parentElement,i=()=>r(s).queryAllByRole("menu"),c=()=>r(s).getAllByRole("button").filter(p=>p!==e).map(p=>p.textContent);e.focus(),await t(e).toHaveFocus(),await t(getComputedStyle(e).outlineStyle).toBe("dotted"),await t(getComputedStyle(e).outlineWidth).toBe("1px"),await t(i()).toHaveLength(0),await a.click(e),await t(i()).toHaveLength(1),await a.click(e),await t(i()).toHaveLength(0),await t(e).toHaveAttribute("aria-haspopup","menu"),await t(e).toHaveAttribute("aria-expanded","false"),e.focus(),await a.keyboard("{Enter}"),await t(e).toHaveAttribute("aria-expanded","true"),await t(r(i()[0]).getAllByRole("menuitem")[0]).toHaveFocus(),await a.keyboard("{Escape}"),await t(i()).toHaveLength(0),await t(e).toHaveAttribute("aria-expanded","false"),await t(e).toHaveFocus(),await a.keyboard("{ArrowDown}"),await t(r(i()[0]).getAllByRole("menuitem")[0]).toHaveFocus(),await a.keyboard("{Escape}{ArrowUp}"),await t(r(i()[0]).getAllByRole("menuitem").at(-1)).toHaveFocus(),await a.tab(),await t(i()).toHaveLength(0),await t(e).toHaveAttribute("aria-expanded","false"),await a.click(e),await a.click(r(i()[0]).getByText("Local Disk (C:)")),await t(i()).toHaveLength(0),await t(c()).toEqual(["Local Disk (C:)"]),await a.click(e),await a.click(r(i()[0]).getByText("Windows Explorer")),await t(c()).toEqual(["Local Disk (C:)","Windows Explorer"]);const l=r(s).getByRole("button",{name:"Windows Explorer"});l.focus(),await t(l).toHaveFocus(),await t(getComputedStyle(l).outlineStyle).toBe("dotted"),await t(getComputedStyle(l).outlineWidth).toBe("1px");const g=new Date,h=await d(()=>r(s).getByText(/^\d{2}:\d{2}$/));await t([f(g),f(new Date)]).toContain(h.textContent),await a.hover(h),await d(()=>t(s).toHaveTextContent(R(g)),{timeout:2e3})},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},D=new Date(2026,0,5,9,7),w={render:()=>n.jsx(x,{}),beforeEach:()=>{const o=Date;class a extends o{constructor(...s){s.length?super(...s):super(D.getTime())}static now(){return D.getTime()}}return globalThis.Date=a,()=>{globalThis.Date=o}},play:async({canvas:o,userEvent:a})=>{const e=o.getByText("09:07");await a.hover(e),await d(()=>t(e.parentElement).toHaveTextContent("05 January 2026"),{timeout:2e3})}},Q=["Simple","Clock"];var H,C,E;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const start = canvas.getByRole('button', {
      name: 'Start'
    });
    const taskBar = start.parentElement!;
    const menus = () => within(taskBar).queryAllByRole('menu');
    const windowButtons = () => within(taskBar).getAllByRole('button').filter(button => button !== start).map(button => button.textContent);

    // A focused Start button has the same dotted outline as the active one.
    start.focus();
    await expect(start).toHaveFocus();
    await expect(getComputedStyle(start).outlineStyle).toBe('dotted');
    await expect(getComputedStyle(start).outlineWidth).toBe('1px');

    // Start opens and closes its menu
    await expect(menus()).toHaveLength(0);
    await userEvent.click(start);
    await expect(menus()).toHaveLength(1);
    await userEvent.click(start);
    await expect(menus()).toHaveLength(0);

    // Start is a menu button: Enter opens the menu on its first item, and Esc
    // closes it and gives the focus back to Start
    await expect(start).toHaveAttribute('aria-haspopup', 'menu');
    await expect(start).toHaveAttribute('aria-expanded', 'false');
    start.focus();
    await userEvent.keyboard('{Enter}');
    await expect(start).toHaveAttribute('aria-expanded', 'true');
    await expect(within(menus()[0]).getAllByRole('menuitem')[0]).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(menus()).toHaveLength(0);
    await expect(start).toHaveAttribute('aria-expanded', 'false');
    await expect(start).toHaveFocus();

    // ↓ opens it on its first item, ↑ on its last
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(menus()[0]).getAllByRole('menuitem')[0]).toHaveFocus();
    await userEvent.keyboard('{Escape}{ArrowUp}');
    await expect(within(menus()[0]).getAllByRole('menuitem').at(-1)).toHaveFocus();

    // Tab leaves the menu and closes it
    await userEvent.tab();
    await expect(menus()).toHaveLength(0);
    await expect(start).toHaveAttribute('aria-expanded', 'false');

    // choosing an item closes the menu, and the window it opens gets a button
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Local Disk (C:)'));
    await expect(menus()).toHaveLength(0);
    await expect(windowButtons()).toEqual(['Local Disk (C:)']);

    // the buttons follow the order the windows opened in
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Windows Explorer'));
    await expect(windowButtons()).toEqual(['Local Disk (C:)', 'Windows Explorer']);

    // Window buttons also keep a visible focus indicator.
    const windowButton = within(taskBar).getByRole('button', {
      name: 'Windows Explorer'
    });
    windowButton.focus();
    await expect(windowButton).toHaveFocus();
    await expect(getComputedStyle(windowButton).outlineStyle).toBe('dotted');
    await expect(getComputedStyle(windowButton).outlineWidth).toBe('1px');

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
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,T,A;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(T=w.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};export{w as Clock,u as Simple,Q as __namedExportsOrder,G as default};
