import{j as e}from"./iframe-SLDWywKp.js";import{a as g,b as f,c as F,d as H,W as A,e as E,f as B,g as D,h as _,i as C,j as S,H as R,L as P,k as T}from"./Write1-DYf1la9W.js";import{L as t}from"./List-DUJm_Ij4.js";const v=async(s,i)=>{{await i.hover(s);return}},{expect:n,fn:V,within:h}=__STORYBOOK_MODULE_TEST__,M={title:"List",component:t,subcomponents:{"List.Item":t.Item,"List.Divider":t.Divider},tags:["autodocs"],args:{width:"200px"}},p={render:s=>e.jsxs(t,{...s,children:[e.jsxs(t.Item,{icon:e.jsx(E,{variant:"32x32_4"}),children:[e.jsxs(t,{width:"200px",children:[e.jsx(t.Item,{icon:e.jsx(g,{variant:"16x16_4"}),children:"Accessories"}),e.jsx(t.Item,{icon:e.jsx(g,{variant:"16x16_4"}),children:"StartUp"}),e.jsx(t.Item,{icon:e.jsx(f,{variant:"16x16_4"}),children:"Microsoft Exchange"}),e.jsx(t.Item,{icon:e.jsx(F,{variant:"16x16_32"}),children:"MS-DOS Prompt"}),e.jsx(t.Item,{icon:e.jsx(H,{variant:"16x16_4"}),children:"The Microsoft Network"}),e.jsx(t.Item,{icon:e.jsx(A,{variant:"16x16_4"}),children:"Windows Explorer"})]}),"Programs"]}),e.jsx(t.Item,{icon:e.jsx(B,{variant:"32x32_4"}),children:"Documents"}),e.jsxs(t.Item,{icon:e.jsx(C,{variant:"32x32_4"}),children:[e.jsxs(t,{width:"200px",children:[e.jsx(t.Item,{icon:e.jsx(D,{variant:"16x16_4"}),children:"Control Panel"}),e.jsx(t.Item,{icon:e.jsx(_,{variant:"16x16_4"}),children:"Printers"})]}),"Settings"]}),e.jsx(t.Item,{icon:e.jsx(S,{variant:"32x32_4"}),children:"Find"}),e.jsx(t.Item,{icon:e.jsx(R,{variant:"32x32_4"}),children:"Help"}),e.jsx(t.Item,{icon:e.jsx(P,{variant:"32x32_4"}),children:"Run..."}),e.jsx(t.Divider,{}),e.jsx(t.Item,{icon:e.jsx(T,{variant:"32x32_4"}),children:"Shut Down..."})]}),play:async({canvas:s,userEvent:i})=>{const r=s.getByRole("menu"),m=h(r).getAllByRole("menuitem"),[a,c,w]=m,o=m[m.length-1],l=d=>h(d).getByRole("menu",{hidden:!0});await n(l(a)).not.toBeVisible(),await n(l(w)).not.toBeVisible(),await n(a).toHaveAttribute("aria-haspopup","menu"),await n(a).toHaveAttribute("aria-expanded","false"),await n(c).not.toHaveAttribute("aria-haspopup"),await i.tab(),await n(a).toHaveFocus(),await n(m.filter(d=>d.tabIndex===0)).toEqual([a]),await i.keyboard("{ArrowDown}"),await n(c).toHaveFocus(),await i.keyboard("{ArrowUp}{ArrowUp}"),await n(o).toHaveFocus(),await i.keyboard("{Home}"),await n(a).toHaveFocus(),await i.keyboard("{End}"),await n(o).toHaveFocus(),await i.keyboard("{Home}"),await i.keyboard("{ArrowRight}"),await n(a).toHaveAttribute("aria-expanded","true"),await n(l(a)).toBeVisible();const u=h(l(a)).getAllByRole("menuitem");await n(u[0]).toHaveFocus(),await n(u.every(d=>d.tabIndex===-1)).toBe(!0),await i.keyboard("{ArrowUp}"),await n(u[u.length-1]).toHaveFocus(),await i.keyboard("{ArrowLeft}"),await n(a).toHaveFocus(),await n(a).toHaveAttribute("aria-expanded","false"),await n(l(a)).not.toBeVisible(),await i.keyboard("{Enter}"),await n(u[0]).toHaveFocus(),await i.keyboard("{Escape}"),await n(a).toHaveFocus(),await n(l(a)).not.toBeVisible(),await i.keyboard("{ArrowDown}"),await n(m.filter(d=>d.tabIndex===0)).toEqual([c]),await i.tab(),await n(r).not.toContainElement(document.activeElement),await v(a,i),await v(w,i)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11"}}},x={render:s=>e.jsxs(t,{...s,children:[e.jsx(t.Item,{children:"View"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Customize this Folder..."}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Arrange Icons"}),e.jsx(t.Item,{children:"Line Up Icons"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Refresh"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Paste"}),e.jsx(t.Item,{children:"Paste Shortcut"}),e.jsx(t.Item,{children:"Undo Copy"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"New"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Properties"})]}),args:{onClick:V()},play:async({args:s,canvas:i,userEvent:r})=>{const m=i.getByRole("menu"),a=Array.from(m.children).map(o=>o.getAttribute("role")==="separator"?"---":o.textContent);await n(a).toEqual(["View","---","Customize this Folder...","---","Arrange Icons","Line Up Icons","---","Refresh","---","Paste","Paste Shortcut","Undo Copy","---","New","---","Properties"]),await r.tab(),await r.keyboard("{ArrowDown}"),await n(i.getByRole("menuitem",{name:"Customize this Folder..."})).toHaveFocus();const c=s.onClick,w=()=>{var o;return((o=c.mock.lastCall)==null?void 0:o[0].target).textContent};await r.keyboard("{Enter}"),await n(c).toHaveBeenCalledTimes(1),await n(w()).toBe("Customize this Folder..."),await r.keyboard("{ArrowDown} "),await n(c).toHaveBeenCalledTimes(2),await n(w()).toBe("Arrange Icons")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11"}}},U=["WithIcons","Simple"];var I,b,L;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <List.Item icon={<FolderExe2 variant="32x32_4" />}>
        <List width={'200px'}>
          <List.Item icon={<FolderExe variant="16x16_4" />}>
            Accessories
          </List.Item>
          <List.Item icon={<FolderExe variant="16x16_4" />}>StartUp</List.Item>
          <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
            Microsoft Exchange
          </List.Item>
          <List.Item icon={<MsDos variant="16x16_32" />}>
            MS-DOS Prompt
          </List.Item>
          <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
            The Microsoft Network
          </List.Item>
          <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
            Windows Explorer
          </List.Item>
        </List>
        Programs
      </List.Item>
      <List.Item icon={<FolderFile variant="32x32_4" />}>Documents</List.Item>
      <List.Item icon={<Settings variant="32x32_4" />}>
        <List width={'200px'}>
          <List.Item icon={<FolderSettings variant="16x16_4" />}>
            Control Panel
          </List.Item>
          <List.Item icon={<FolderPrint variant="16x16_4" />}>
            Printers
          </List.Item>
        </List>
        Settings
      </List.Item>
      <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item>
      <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>
      <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item>
      <List.Divider />
      <List.Item icon={<Computer3 variant="32x32_4" />}>Shut Down...</List.Item>
    </List>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const menu = canvas.getByRole('menu');
    const items = within(menu).getAllByRole('menuitem');
    const [programs, documents, settings] = items;
    const shutDown = items[items.length - 1];
    // submenus are hidden, so their menus aren't in the accessibility tree
    const submenu = (item: HTMLElement) => within(item).getByRole('menu', {
      hidden: true
    });
    await expect(submenu(programs)).not.toBeVisible();
    await expect(submenu(settings)).not.toBeVisible();

    // the items that open a submenu say so
    await expect(programs).toHaveAttribute('aria-haspopup', 'menu');
    await expect(programs).toHaveAttribute('aria-expanded', 'false');
    await expect(documents).not.toHaveAttribute('aria-haspopup');

    // the whole menu is a single tab stop, on its first item
    await userEvent.tab();
    await expect(programs).toHaveFocus();
    await expect(items.filter(item => item.tabIndex === 0)).toEqual([programs]);

    // ↑/↓ move between the items, wrapping around; Home/End jump to the ends
    await userEvent.keyboard('{ArrowDown}');
    await expect(documents).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await expect(shutDown).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(programs).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(shutDown).toHaveFocus();
    await userEvent.keyboard('{Home}');

    // → opens the submenu and moves into it
    await userEvent.keyboard('{ArrowRight}');
    await expect(programs).toHaveAttribute('aria-expanded', 'true');
    await expect(submenu(programs)).toBeVisible();
    const programItems = within(submenu(programs)).getAllByRole('menuitem');
    await expect(programItems[0]).toHaveFocus();

    // the submenu's items are reached with the arrows, not with Tab
    await expect(programItems.every(item => item.tabIndex === -1)).toBe(true);
    await userEvent.keyboard('{ArrowUp}');
    await expect(programItems[programItems.length - 1]).toHaveFocus();

    // ← closes it and goes back to its item
    await userEvent.keyboard('{ArrowLeft}');
    await expect(programs).toHaveFocus();
    await expect(programs).toHaveAttribute('aria-expanded', 'false');
    await expect(submenu(programs)).not.toBeVisible();

    // Enter opens it too, and Esc closes it
    await userEvent.keyboard('{Enter}');
    await expect(programItems[0]).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(programs).toHaveFocus();
    await expect(submenu(programs)).not.toBeVisible();

    // the tab stop follows the focus, so Tab leaves the menu in one step
    await userEvent.keyboard('{ArrowDown}');
    await expect(items.filter(item => item.tabIndex === 0)).toEqual([documents]);
    await userEvent.tab();
    await expect(menu).not.toContainElement(document.activeElement as HTMLElement);

    // hovering an item opens its submenu. That's CSS \`:hover\`, which only a
    // real pointer triggers (see .storybook/pointer.ts)
    await hover(programs, userEvent);
    if (isRealPointer) {
      await expect(submenu(programs)).toBeVisible();
      await expect(submenu(settings)).not.toBeVisible();
    }

    // moving to another item closes the first submenu and opens its own
    await hover(settings, userEvent);
    if (isRealPointer) {
      await expect(submenu(programs)).not.toBeVisible();
      await expect(submenu(settings)).toBeVisible();
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11'
    }
  }
}`,...(L=(b=p.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var y,j,k;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <List.Item>View</List.Item>
      <List.Divider />
      <List.Item>Customize this Folder...</List.Item>
      <List.Divider />
      <List.Item>Arrange Icons</List.Item>
      <List.Item>Line Up Icons</List.Item>
      <List.Divider />
      <List.Item>Refresh</List.Item>
      <List.Divider />
      <List.Item>Paste</List.Item>
      <List.Item>Paste Shortcut</List.Item>
      <List.Item>Undo Copy</List.Item>
      <List.Divider />
      <List.Item>New</List.Item>
      <List.Divider />
      <List.Item>Properties</List.Item>
    </List>,
  args: {
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const menu = canvas.getByRole('menu');
    const entries = Array.from(menu.children).map(entry => entry.getAttribute('role') === 'separator' ? '---' : entry.textContent);

    // the items in order, with the dividers between the groups
    await expect(entries).toEqual(['View', '---', 'Customize this Folder...', '---', 'Arrange Icons', 'Line Up Icons', '---', 'Refresh', '---', 'Paste', 'Paste Shortcut', 'Undo Copy', '---', 'New', '---', 'Properties']);

    // ↓ skips the dividers
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('menuitem', {
      name: 'Customize this Folder...'
    })).toHaveFocus();

    // Enter and Space click the focused item, like the mouse does
    const onClick = args.onClick as unknown as ReturnType<typeof fn>;
    const clicked = () => (onClick.mock.lastCall?.[0].target as HTMLElement).textContent;
    await userEvent.keyboard('{Enter}');
    await expect(onClick).toHaveBeenCalledTimes(1);
    await expect(clicked()).toBe('Customize this Folder...');
    await userEvent.keyboard('{ArrowDown} ');
    await expect(onClick).toHaveBeenCalledTimes(2);
    await expect(clicked()).toBe('Arrange Icons');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11'
    }
  }
}`,...(k=(j=x.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const O=Object.freeze(Object.defineProperty({__proto__:null,Simple:x,WithIcons:p,__namedExportsOrder:U,default:M},Symbol.toStringTag,{value:"Module"}));export{O as L};
