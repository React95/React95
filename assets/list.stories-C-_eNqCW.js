import{j as t}from"./iframe-BP1fKKyq.js";import{a as x,b as w,c as _,d as y,W as D,e as b,f,g as S,h as B,i as P,j as R,H as F,L as E,k as C}from"./Write1-CE8UsuL2.js";import{L as e}from"./List-BIao8j5n.js";const I=async(i,n)=>{{await n.hover(i);return}},{expect:m,within:c}=__STORYBOOK_MODULE_TEST__,M={title:"List",component:e,subcomponents:{"List.Item":e.Item,"List.Divider":e.Divider},tags:["autodocs"],args:{width:"200px"}},s={render:i=>t.jsxs(e,{...i,children:[t.jsxs(e.Item,{icon:t.jsx(b,{variant:"32x32_4"}),children:[t.jsxs(e,{width:"200px",children:[t.jsx(e.Item,{icon:t.jsx(x,{variant:"16x16_4"}),children:"Accessories"}),t.jsx(e.Item,{icon:t.jsx(x,{variant:"16x16_4"}),children:"StartUp"}),t.jsx(e.Item,{icon:t.jsx(w,{variant:"16x16_4"}),children:"Microsoft Exchange"}),t.jsx(e.Item,{icon:t.jsx(_,{variant:"16x16_32"}),children:"MS-DOS Prompt"}),t.jsx(e.Item,{icon:t.jsx(y,{variant:"16x16_4"}),children:"The Microsoft Network"}),t.jsx(e.Item,{icon:t.jsx(D,{variant:"16x16_4"}),children:"Windows Explorer"})]}),"Programs"]}),t.jsx(e.Item,{icon:t.jsx(f,{variant:"32x32_4"}),children:"Documents"}),t.jsxs(e.Item,{icon:t.jsx(P,{variant:"32x32_4"}),children:[t.jsxs(e,{width:"200px",children:[t.jsx(e.Item,{icon:t.jsx(S,{variant:"16x16_4"}),children:"Control Panel"}),t.jsx(e.Item,{icon:t.jsx(B,{variant:"16x16_4"}),children:"Printers"})]}),"Settings"]}),t.jsx(e.Item,{icon:t.jsx(R,{variant:"32x32_4"}),children:"Find"}),t.jsx(e.Item,{icon:t.jsx(F,{variant:"32x32_4"}),children:"Help"}),t.jsx(e.Item,{icon:t.jsx(E,{variant:"32x32_4"}),children:"Run..."}),t.jsx(e.Divider,{}),t.jsx(e.Item,{icon:t.jsx(C,{variant:"32x32_4"}),children:"Shut Down..."})]}),play:async({canvas:i,userEvent:n})=>{const a=i.getByRole("list"),[o,,l]=c(a).getAllByRole("listitem"),d=j=>c(j).getByRole("list",{hidden:!0});await m(d(o)).not.toBeVisible(),await m(d(l)).not.toBeVisible(),await I(o,n),await I(l,n)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11"}}},r={render:i=>t.jsxs(e,{...i,children:[t.jsx(e.Item,{children:"View"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Customize this Folder..."}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Arrange Icons"}),t.jsx(e.Item,{children:"Line Up Icons"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Refresh"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Paste"}),t.jsx(e.Item,{children:"Paste Shortcut"}),t.jsx(e.Item,{children:"Undo Copy"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"New"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Properties"})]}),play:async({canvas:i})=>{const n=i.getByRole("list"),a=c(n).getAllByRole("listitem");await m(a.map(o=>o.textContent)).toEqual(["View","","Customize this Folder...","","Arrange Icons","Line Up Icons","","Refresh","","Paste","Paste Shortcut","Undo Copy","","New","","Properties"])},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11"}}},A=["WithIcons","Simple"];var p,h,L;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    const menu = canvas.getByRole('list');
    const [programs,, settings] = within(menu).getAllByRole('listitem');
    // submenus are hidden, so their lists aren't in the accessibility tree
    const submenu = (item: HTMLElement) => within(item).getByRole('list', {
      hidden: true
    });
    await expect(submenu(programs)).not.toBeVisible();
    await expect(submenu(settings)).not.toBeVisible();

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
}`,...(L=(h=s.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var g,u,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  play: async ({
    canvas
  }) => {
    const menu = canvas.getByRole('list');
    const items = within(menu).getAllByRole('listitem');

    // the items in order, with the dividers (empty items) between the groups
    await expect(items.map(item => item.textContent)).toEqual(['View', '', 'Customize this Folder...', '', 'Arrange Icons', 'Line Up Icons', '', 'Refresh', '', 'Paste', 'Paste Shortcut', 'Undo Copy', '', 'New', '', 'Properties']);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11'
    }
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const U=Object.freeze(Object.defineProperty({__proto__:null,Simple:r,WithIcons:s,__namedExportsOrder:A,default:M},Symbol.toStringTag,{value:"Module"}));export{U as L};
