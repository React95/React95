import{j as a,r as T,F as p}from"./iframe-BqOgMFm_.js";import{T as d}from"./Tree-MZpkWk9k.js";/* empty css                              */import{E as h}from"./Write1-BMZHqS-T.js";const{expect:e,within:b}=__STORYBOOK_MODULE_TEST__,{icons:l}=d,y={data:[{id:0,label:"Applications",children:[{id:1,label:"virus.exe",icon:a.jsx(l.FILE_EXECUTABLE,{variant:"16x16_4"})}]},{id:2,label:"Music",children:[{id:3,label:"Indie",children:[{id:4,label:"Weezer",icon:a.jsx(l.FILE_MEDIA,{variant:"16x16_4"})},{id:5,label:"Supergrass",icon:a.jsx(l.FILE_MEDIA,{variant:"16x16_4"})}]}]},{id:3,label:"Other",children:[{id:0,label:"Fira Code.ttf",icon:a.jsx(l.FILE_FONT,{variant:"16x16_4"})},{id:1,label:"Journal.txt",icon:a.jsx(l.FILE_TEXT,{variant:"16x16_4"})}]},{id:4,label:"config.cfg",icon:a.jsx(l.FILE_SETTINGS,{variant:"16x16_4"})},{id:5,label:"random_file",icon:a.jsx(l.FILE_UNKNOWN,{variant:"16x16_4"})}]},C={id:6,label:"My Computer",icon:a.jsx(h,{variant:"16x16_4"})},H={title:"Tree",component:d,tags:["autodocs"]},v=(o,t)=>o.map(i=>({...i,onClick:t,children:i.children&&v(i.children,t)})),A=()=>{const[o,t]=T.useState(),i=(n,r)=>t(r==null?void 0:r.label);return a.jsxs(a.Fragment,{children:[a.jsx(d,{data:v(y.data,i),root:{...C,onClick:i}}),a.jsx(p,{role:"status",boxShadow:"$out",mt:"$12",p:"$3",bgColor:"$material",w:"180px",children:a.jsx(p,{boxShadow:"$in",px:"$4",py:"$2",children:o?`Selected: ${o}`:"Click a file or folder"})})]})},s={render:()=>a.jsx(A,{}),play:async({canvas:o,userEvent:t})=>{const i=o.getByText("Music"),n=i.closest("li"),r=()=>b(n).getAllByText(/^[+-]$/)[0];await e(r()).toHaveTextContent("+"),await e(n).not.toHaveTextContent("Indie"),await t.dblClick(i),await e(r()).toHaveTextContent("-"),await e(n).toHaveTextContent("Indie"),await e(n).not.toHaveTextContent("Weezer"),await t.dblClick(o.getByText("Indie")),await e(n).toHaveTextContent("Weezer"),await t.click(o.getByText("Weezer")),await e(o.getByRole("status")).toHaveTextContent("Selected: Weezer"),await t.click(r()),await e(r()).toHaveTextContent("+"),await e(n).not.toHaveTextContent("Indie"),i.focus(),await t.keyboard(" "),await e(n).toHaveTextContent("Indie"),await e(o.getByRole("status")).toHaveTextContent("Selected: Music");const f=o.getByRole("tree"),x=()=>b(f).getAllByRole("treeitem"),w=()=>x().find(c=>c.tabIndex===0);await e(n).toHaveAttribute("role","treeitem"),await e(n).toHaveAttribute("aria-expanded","true"),await e(x().filter(c=>c.tabIndex===0)).toHaveLength(1),n.focus(),await t.keyboard("{ArrowLeft}"),await e(n).toHaveAttribute("aria-expanded","false"),await t.keyboard("{ArrowRight}"),await e(n).toHaveAttribute("aria-expanded","true"),await t.keyboard("{ArrowDown}"),await e(w()).toHaveTextContent("Indie"),await t.keyboard("{ArrowUp}"),await e(w()).toHaveTextContent("Music")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20"}}},I=["Simple"];var u,g,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const music = canvas.getByText('Music');
    const folder = music.closest('li')!;
    // the +/- next to the folder's own name (subfolders have one too)
    const toggle = () => within(folder).getAllByText(/^[+-]$/)[0];

    // folders start closed: their content isn't there
    await expect(toggle()).toHaveTextContent('+');
    await expect(folder).not.toHaveTextContent('Indie');

    // double-clicking the name opens it
    await userEvent.dblClick(music);
    await expect(toggle()).toHaveTextContent('-');
    await expect(folder).toHaveTextContent('Indie');
    await expect(folder).not.toHaveTextContent('Weezer');

    // subfolders open on their own
    await userEvent.dblClick(canvas.getByText('Indie'));
    await expect(folder).toHaveTextContent('Weezer');

    // clicking a node calls its onClick with the node (the story shows its
    // label in the status line)
    await userEvent.click(canvas.getByText('Weezer'));
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected: Weezer');

    // the - closes it
    await userEvent.click(toggle());
    await expect(toggle()).toHaveTextContent('+');
    await expect(folder).not.toHaveTextContent('Indie');

    // and with the keyboard, Space opens the focused folder (and, like a
    // click, calls its onClick)
    music.focus();
    await userEvent.keyboard(' ');
    await expect(folder).toHaveTextContent('Indie');
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected: Music');

    // the tree follows the WAI-ARIA treeview pattern: tree/treeitem roles,
    // aria-expanded on folders, and a single tab stop for the whole tree
    const tree = canvas.getByRole('tree');
    const treeitems = () => within(tree).getAllByRole('treeitem');
    const tabbable = () => treeitems().find(item => item.tabIndex === 0);
    await expect(folder).toHaveAttribute('role', 'treeitem');
    await expect(folder).toHaveAttribute('aria-expanded', 'true');
    await expect(treeitems().filter(item => item.tabIndex === 0)).toHaveLength(1);

    // ArrowLeft closes the focused folder, ArrowRight opens it again
    folder.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(folder).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowRight}');
    await expect(folder).toHaveAttribute('aria-expanded', 'true');

    // ArrowDown moves focus (and the single tab stop) to the next visible
    // node, ArrowUp moves back
    await userEvent.keyboard('{ArrowDown}');
    await expect(tabbable()).toHaveTextContent('Indie');
    await userEvent.keyboard('{ArrowUp}');
    await expect(tabbable()).toHaveTextContent('Music');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20'
    }
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const B=Object.freeze(Object.defineProperty({__proto__:null,Simple:s,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{B as T};
