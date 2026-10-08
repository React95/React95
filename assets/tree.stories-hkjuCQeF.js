import{j as e,r as T,F as d}from"./iframe-BP1fKKyq.js";import{T as r}from"./Tree-DKBb-vY2.js";/* empty css                              */import{E as u}from"./Write1-CE8UsuL2.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,{icons:l}=r,v={data:[{id:0,label:"Applications",children:[{id:1,label:"virus.exe",icon:e.jsx(l.FILE_EXECUTABLE,{variant:"16x16_4"})}]},{id:2,label:"Music",children:[{id:3,label:"Indie",children:[{id:4,label:"Weezer",icon:e.jsx(l.FILE_MEDIA,{variant:"16x16_4"})},{id:5,label:"Supergrass",icon:e.jsx(l.FILE_MEDIA,{variant:"16x16_4"})}]}]},{id:3,label:"Other",children:[{id:0,label:"Fira Code.ttf",icon:e.jsx(l.FILE_FONT,{variant:"16x16_4"})},{id:1,label:"Journal.txt",icon:e.jsx(l.FILE_TEXT,{variant:"16x16_4"})}]},{id:4,label:"config.cfg",icon:e.jsx(l.FILE_SETTINGS,{variant:"16x16_4"})},{id:5,label:"random_file",icon:e.jsx(l.FILE_UNKNOWN,{variant:"16x16_4"})}]},h={id:6,label:"My Computer",icon:e.jsx(u,{variant:"16x16_4"})},C={title:"Tree",component:r,tags:["autodocs"]},g=(n,a)=>n.map(o=>({...o,onClick:a,children:o.children&&g(o.children,a)})),f=()=>{const[n,a]=T.useState(),o=(i,s)=>a(s==null?void 0:s.label);return e.jsxs(e.Fragment,{children:[e.jsx(r,{data:g(v.data,o),root:{...h,onClick:o}}),e.jsx(d,{role:"status",boxShadow:"$out",mt:"$12",p:"$3",bgColor:"$material",w:"180px",children:e.jsx(d,{boxShadow:"$in",px:"$4",py:"$2",children:n?`Selected: ${n}`:"Click a file or folder"})})]})},c={render:()=>e.jsx(f,{}),play:async({canvas:n,userEvent:a})=>{const o=n.getByText("Music"),i=o.closest("li"),s=()=>m(i).getAllByText(/^[+-]$/)[0];await t(s()).toHaveTextContent("+"),await t(i).not.toHaveTextContent("Indie"),await a.dblClick(o),await t(s()).toHaveTextContent("-"),await t(i).toHaveTextContent("Indie"),await t(i).not.toHaveTextContent("Weezer"),await a.dblClick(n.getByText("Indie")),await t(i).toHaveTextContent("Weezer"),await a.click(n.getByText("Weezer")),await t(n.getByRole("status")).toHaveTextContent("Selected: Weezer"),await a.click(s()),await t(s()).toHaveTextContent("+"),await t(i).not.toHaveTextContent("Indie"),o.focus(),await a.keyboard(" "),await t(i).toHaveTextContent("Indie"),await t(n.getByRole("status")).toHaveTextContent("Selected: Music")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20"}}},b=["Simple"];var x,p,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20'
    }
  }
}`,...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const S=Object.freeze(Object.defineProperty({__proto__:null,Simple:c,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{S as T};
