import{j as n,r as h}from"./iframe-B9_iyyAy.js";import{W as k,R as v}from"./Write1-3eQp6NPG.js";import{M as b}from"./Modal-udYA7Je0.js";/* empty css                              */import{L as p}from"./List-Doa89MCr.js";import{T as d}from"./TaskBar-BnAM5VW0.js";import{T as y}from"./TitleBar-pdS9yeYg.js";import"./preload-helper-C1FmrZbK.js";import"./Button-BqHLXCJc.js";import"./Button.css-BQGZBg8x.js";/* empty css                             */import"./index-DeQiAqfN.js";/* empty css                            */import"./ListNav-DlDdgcmR.js";import"./Tooltip-D_CzqENB.js";/* empty css                               *//* empty css                               */const{expect:e,waitFor:m,within:r}=__STORYBOOK_MODULE_TEST__,P={title:"TaskBar",component:d,tags:["autodocs"]},L=()=>{const[o,t]=h.useState(!1),[a,s]=h.useState(!1),i=()=>t(!1),c=()=>s(!1);return n.jsxs(n.Fragment,{children:[o&&n.jsx(b,{icon:n.jsx(k,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[n.jsx(y.Close,{onClick:i},"close")],width:"300px",height:"200px"}),a&&n.jsx(b,{dragOptions:{defaultPosition:{x:50,y:50}},width:"300px",height:"200px",icon:n.jsx(v,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[n.jsx(y.Close,{onClick:c},"close")]}),n.jsx(d,{list:n.jsxs(p,{children:[n.jsx(p.Item,{icon:n.jsx(v,{variant:"32x32_4"}),onClick:()=>s(!0),children:"Local Disk (C:)"}),n.jsx(p.Item,{icon:n.jsx(k,{variant:"32x32_4"}),onClick:()=>{t(!0)},children:"Windows Explorer"})]})})]})},f=o=>[o.getHours(),o.getMinutes()].map(t=>String(t).padStart(2,"0")).join(":"),S=o=>`${String(o.getDate()).padStart(2,"0")} ${o.toLocaleString("en-US",{month:"long"})} ${o.getFullYear()}`,l={render:()=>n.jsx(L,{}),play:async({canvas:o,userEvent:t})=>{const a=o.getByRole("button",{name:"Start"}),s=a.parentElement,i=()=>r(s).queryAllByRole("menu"),c=()=>r(s).getAllByRole("button").filter(u=>u!==a).map(u=>u.textContent);await e(i()).toHaveLength(0),await t.click(a),await e(i()).toHaveLength(1),await t.click(a),await e(i()).toHaveLength(0),await e(a).toHaveAttribute("aria-haspopup","menu"),await e(a).toHaveAttribute("aria-expanded","false"),a.focus(),await t.keyboard("{Enter}"),await e(a).toHaveAttribute("aria-expanded","true"),await e(r(i()[0]).getAllByRole("menuitem")[0]).toHaveFocus(),await t.keyboard("{Escape}"),await e(i()).toHaveLength(0),await e(a).toHaveAttribute("aria-expanded","false"),await e(a).toHaveFocus(),await t.keyboard("{ArrowDown}"),await e(r(i()[0]).getAllByRole("menuitem")[0]).toHaveFocus(),await t.keyboard("{Escape}{ArrowUp}"),await e(r(i()[0]).getAllByRole("menuitem").at(-1)).toHaveFocus(),await t.tab(),await e(i()).toHaveLength(0),await e(a).toHaveAttribute("aria-expanded","false"),await t.click(a),await t.click(r(i()[0]).getByText("Local Disk (C:)")),await e(i()).toHaveLength(0),await e(c()).toEqual(["Local Disk (C:)"]),await t.click(a),await t.click(r(i()[0]).getByText("Windows Explorer")),await e(c()).toEqual(["Local Disk (C:)","Windows Explorer"]);const x=new Date,g=await m(()=>r(s).getByText(/^\d{2}:\d{2}$/));await e([f(x),f(new Date)]).toContain(g.textContent),await t.hover(g),await m(()=>e(s).toHaveTextContent(S(x)),{timeout:2e3})},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},B=new Date(2026,0,5,9,7),w={render:()=>n.jsx(d,{}),beforeEach:()=>{const o=Date;class t extends o{constructor(...s){s.length?super(...s):super(B.getTime())}static now(){return B.getTime()}}return globalThis.Date=t,()=>{globalThis.Date=o}},play:async({canvas:o,userEvent:t})=>{const a=o.getByText("09:07");await t.hover(a),await m(()=>e(a.parentElement).toHaveTextContent("05 January 2026"),{timeout:2e3})}},G=["Simple","Clock"];var D,H,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(H=l.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var E,C,A;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(C=w.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};export{w as Clock,l as Simple,G as __namedExportsOrder,P as default};
