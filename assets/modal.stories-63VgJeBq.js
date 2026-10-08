import{j as e,r as b,F as x,a as C}from"./iframe-BP1fKKyq.js";import{M as d,u as K}from"./Modal-Co99nBD4.js";import{B as m}from"./Button-CYWwPWGC.js";/* empty css                              */import{L as c}from"./List-BIao8j5n.js";import{T as D}from"./TaskBar-DCQnLYcw.js";import{T as u}from"./TitleBar-B13jGq_-.js";import{t as $}from"./theme-color-Bor3p02p.js";import{R as j,W as v,M as f,u as M,C as P}from"./Write1-CE8UsuL2.js";import"./preload-helper-C1FmrZbK.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BsRdtlNK.js";import"./Button.css-ChH4GoWp.js";/* empty css                            */import"./Tooltip-B-ebvjti.js";/* empty css                               *//* empty css                               */var g="r95_1pmeodb0";const{expect:o,spyOn:L,within:l}=__STORYBOOK_MODULE_TEST__,he={title:"Modal",component:d,tags:["autodocs"],args:{title:"Browse",hasWindowButton:!0,buttonsAlignment:"flex-end"},argTypes:{title:{control:"text"},buttonsAlignment:{control:"select",options:["flex-start","center","flex-end","space-between"]}}},Z=a=>{const[i,n]=b.useState(!0),t=()=>n(!0),s=()=>n(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:t,children:"Trigger Modal"}),i&&e.jsx(d,{...a,icon:e.jsx(P,{variant:"16x16_4"}),dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.jsx(u.Help,{onClick:()=>console.log("Help")},"help"),e.jsx(u.Close,{onClick:s},"close")],buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:s,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(d.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white",children:"Simple modal"})})]})},w={render:a=>e.jsx(Z,{...a}),beforeEach:()=>{const a=L(console,"log").mockName("console.log");return()=>a.mockRestore()},play:async({args:a,canvas:i,userEvent:n})=>{const t=i.getByRole("dialog");await o(t).toHaveTextContent(a.title),await o(t).toHaveTextContent("Simple modal"),await n.click(l(t).getByRole("button",{name:"Ok"})),await o(console.log).toHaveBeenLastCalledWith("Ok"),await n.click(l(t).getByRole("button",{name:"Cancel"})),await o(console.log).toHaveBeenLastCalledWith("Cancel"),await n.click(l(t).getByRole("button",{name:"help"})),await o(console.log).toHaveBeenLastCalledWith("Help"),await o(t).not.toHaveTextContent("Exit"),await n.click(l(t).getByText("File")),await o(t).toHaveTextContent("Exit"),await n.click(l(t).getByText("Edit")),await o(t).toHaveTextContent("Copy"),await o(t).not.toHaveTextContent("Exit"),await n.click(l(t).getByText("Simple modal")),await o(t).not.toHaveTextContent("Copy"),await n.click(l(t).getByText("File")),await n.click(l(t).getByText("Exit")),await o(i.queryAllByRole("dialog")).toHaveLength(0),await n.click(i.getByRole("button",{name:"Trigger Modal"})),await n.click(l(i.getByRole("dialog")).getByRole("button",{name:"close"})),await o(i.queryAllByRole("dialog")).toHaveLength(0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},r={first:"first-modal",second:"second-modal"},Y=()=>{const{remove:a,minimize:i,restore:n,focus:t,add:s}=K(),p=()=>{i(r.first),a(r.first)},k=()=>{i(r.second),a(r.second)},I=()=>{i(r.first),t("no-id")},W=()=>{s({id:r.first,title:"First Modal",icon:e.jsx(f,{variant:"32x32_4"}),hasButton:!0}),n(r.first),t(r.first)},_=()=>t(r.first),V=()=>{i(r.second),t("no-id")},N=()=>{s({id:r.second,title:"Second Modal",icon:e.jsx(M,{variant:"32x32_4"}),hasButton:!0}),n(r.second),t(r.second)},q=()=>t(r.second);return e.jsxs(x,{children:[e.jsx(D,{}),e.jsxs(x,{display:"flex",flexDirection:"column",gap:"8px",children:[e.jsxs(x,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(m,{onClick:I,children:"Minimize First"}),e.jsx(m,{onClick:W,children:"Restore First"}),e.jsx(m,{onClick:p,children:"Close First"}),e.jsx(m,{onClick:_,children:"Focus First"})]}),e.jsxs(x,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(m,{onClick:V,children:"Minimize Second"}),e.jsx(m,{onClick:N,children:"Restore Second"}),e.jsx(m,{onClick:k,children:"Close Second"}),e.jsx(m,{onClick:q,children:"Focus Second"})]})]}),e.jsx(d,{id:"first-modal",icon:e.jsx(f,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:e.jsx(d.Minimize,{}),buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:p,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(d.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(x,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Modal Control"}),e.jsxs("p",{children:["This modal is controlled entirely using the"," ",e.jsx("code",{children:"useModal()"})," hook:"]}),e.jsxs("ul",{style:{fontSize:"14px",margin:"8px 0"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"minimize(id)"})," - Minimize modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"restore(id)"})," - Restore modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"focus(id)"})," - Bring to focus"]})]}),e.jsx("p",{children:"Try the control buttons above or use the TaskBar below."})]})})}),e.jsx(d,{id:"second-modal",icon:e.jsx(M,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:e.jsx(u.Close,{onClick:k}),buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:k,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(d.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(x,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Complete Modal Management"}),e.jsx("p",{children:"Key features demonstrated:"}),e.jsxs(x,{as:"ul",marginY:"$8",children:[e.jsx("li",{children:"No React state management needed"}),e.jsx("li",{children:"Modals controlled by ID"}),e.jsx("li",{children:"Automatic TaskBar integration"}),e.jsx("li",{children:"Event-driven architecture"})]}),e.jsx("p",{children:"Both modals can be controlled independently using their IDs."})]})})})]})},h=async(a,i)=>{i?await o(a).toHaveAttribute("aria-current","true"):await o(a).not.toHaveAttribute("aria-current"),await o(a.querySelector(".draggable")).toHaveStyle({backgroundColor:$(i?C.colors.headerBackground:C.colors.headerNotActiveBackground)})},B={render:()=>e.jsx(Y,{}),play:async({canvas:a,userEvent:i})=>{const[n,t]=a.getAllByRole("dialog"),s=p=>a.getByRole("button",{name:p});await o(s("First Modal")).toBeVisible(),await o(s("Second Modal")).toBeVisible(),await h(n,!1),await h(t,!0),await i.click(l(n).getByText("Modal Control")),await h(n,!0),await h(t,!1),await i.click(l(n).getByRole("button",{name:"minimize"})),await o(n).not.toBeVisible(),await i.click(s("First Modal")),await o(n).toBeVisible(),await h(n,!0),await i.click(l(t).getByText("Complete Modal Management")),await h(t,!0),await i.click(l(t).getByRole("button",{name:"close"})),await o(t).not.toBeVisible(),await o(a.queryAllByRole("button",{name:"Second Modal"})).toHaveLength(0),await h(n,!0),await i.click(s("First Modal")),await o(n).not.toBeVisible()},parameters:{controls:{disable:!0}}},U=()=>{const[a,i]=b.useState(!0),[n,t]=b.useState(!0),s=()=>i(!1),p=()=>t(!1);return e.jsxs(e.Fragment,{children:[e.jsx(D,{list:e.jsxs(c,{children:[e.jsx(c.Item,{icon:e.jsx(j,{variant:"32x32_4"}),onClick:()=>t(!0),children:"Local Disk (C:)"}),e.jsx(c.Item,{icon:e.jsx(v,{variant:"32x32_4"}),onClick:()=>{i(!0)},children:"Windows Explorer"})]})}),a&&e.jsx(d,{icon:e.jsx(v,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.jsx(u.Minimize,{onClick:()=>console.log("I'm in control")},"minimize"),e.jsx(u.Close,{onClick:s},"close")],width:"300px",height:"220px",children:e.jsx(d.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(x,{as:"p",lineHeight:"1.1rem",children:["You can still use the"," ",e.jsx("code",{className:g,children:"<TitleBar.Minimize />"})," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."]})})}),n&&e.jsx(d,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.jsx(j,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.jsx(d.Minimize,{},"minimize"),e.jsx(u.Close,{onClick:p},"close")],children:e.jsx(d.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(x,{as:"p",lineHeight:"1.1rem",children:["The ",e.jsx("code",{className:g,children:"Modal.Minimize"})," component is a utility component provided by the"," ",e.jsx("code",{className:g,children:"Modal"})," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.jsx("code",{className:g,children:"<Modal.Minimize />"})," to the"," ",e.jsx("code",{className:g,children:"titleBarOptions"})," prop of the"," ",e.jsx("code",{className:g,children:"Modal"})," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."]})})})]})},y={render:()=>e.jsx(U,{}),beforeEach:()=>{const a=L(console,"log").mockName("console.log");return()=>a.mockRestore()},play:async({canvas:a,userEvent:i})=>{const[n,t]=a.getAllByRole("dialog"),s=p=>a.queryAllByRole("button",{name:p});await i.click(l(t).getByRole("button",{name:"minimize"})),await o(t).not.toBeVisible(),await i.click(a.getByRole("button",{name:"Local Disk (C:)"})),await o(t).toBeVisible(),await i.click(l(n).getByRole("button",{name:"minimize"})),await o(console.log).toHaveBeenLastCalledWith("I'm in control"),await o(n).toBeVisible(),await i.click(l(n).getByRole("button",{name:"close"})),await o(n).not.toBeInTheDocument(),await o(s("Windows Explorer")).toHaveLength(0),await i.click(a.getByRole("button",{name:"Start"})),await i.click(a.getByText("Windows Explorer")),await o(a.getAllByRole("dialog")).toHaveLength(2),await o(s("Windows Explorer")).toHaveLength(1)},parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},ge=["Simple","Multiple","Minimize"];var T,R,S;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <SimpleDemo {...args} />,
  // the demo's buttons log what was clicked; the spy still prints it
  beforeEach: () => {
    const log = spyOn(console, 'log').mockName('console.log');
    return () => log.mockRestore();
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const modal = canvas.getByRole('dialog');

    // the modal starts open, with its title and content
    await expect(modal).toHaveTextContent(args.title as string);
    await expect(modal).toHaveTextContent('Simple modal');

    // its buttons and title bar options call their onClick
    await userEvent.click(within(modal).getByRole('button', {
      name: 'Ok'
    }));
    await expect(console.log).toHaveBeenLastCalledWith('Ok');
    await userEvent.click(within(modal).getByRole('button', {
      name: 'Cancel'
    }));
    await expect(console.log).toHaveBeenLastCalledWith('Cancel');
    await userEvent.click(within(modal).getByRole('button', {
      name: 'help'
    }));
    await expect(console.log).toHaveBeenLastCalledWith('Help');

    // a menu opens its list when pressed, one menu at a time
    await expect(modal).not.toHaveTextContent('Exit');
    await userEvent.click(within(modal).getByText('File'));
    await expect(modal).toHaveTextContent('Exit');
    await userEvent.click(within(modal).getByText('Edit'));
    await expect(modal).toHaveTextContent('Copy');
    await expect(modal).not.toHaveTextContent('Exit');

    // and closes it when the press is outside the menu
    await userEvent.click(within(modal).getByText('Simple modal'));
    await expect(modal).not.toHaveTextContent('Copy');

    // the menu's Exit closes the modal, and so does the title bar's close
    await userEvent.click(within(modal).getByText('File'));
    await userEvent.click(within(modal).getByText('Exit'));
    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Trigger Modal'
    }));
    await userEvent.click(within(canvas.getByRole('dialog')).getByRole('button', {
      name: 'close'
    }));
    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(S=(R=w.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var H,E,z;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <MultipleDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const [first, second] = canvas.getAllByRole('dialog');
    const taskBarButton = (title: string) => canvas.getByRole('button', {
      name: title
    });

    // each modal gets a TaskBar button, and the last one to open is active
    await expect(taskBarButton('First Modal')).toBeVisible();
    await expect(taskBarButton('Second Modal')).toBeVisible();
    await expectActive(first, false);
    await expectActive(second, true);

    // clicking a modal makes it the active one
    await userEvent.click(within(first).getByText('Modal Control'));
    await expectActive(first, true);
    await expectActive(second, false);

    // minimizing hides it, and its TaskBar button brings it back, active
    await userEvent.click(within(first).getByRole('button', {
      name: 'minimize'
    }));
    await expect(first).not.toBeVisible();
    await userEvent.click(taskBarButton('First Modal'));
    await expect(first).toBeVisible();
    await expectActive(first, true);

    // closing the active modal removes its TaskBar button, and the last one
    // left becomes active
    await userEvent.click(within(second).getByText('Complete Modal Management'));
    await expectActive(second, true);
    await userEvent.click(within(second).getByRole('button', {
      name: 'close'
    }));
    await expect(second).not.toBeVisible();
    await expect(canvas.queryAllByRole('button', {
      name: 'Second Modal'
    })).toHaveLength(0);
    await expectActive(first, true);

    // the active modal's TaskBar button minimizes it
    await userEvent.click(taskBarButton('First Modal'));
    await expect(first).not.toBeVisible();
  },
  parameters: {
    // a demo of several modals at once; the controls are on Simple
    controls: {
      disable: true
    }
  }
}`,...(z=(E=B.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var A,F,O;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <MinimizeDemo />,
  // the custom minimize logs; the spy still prints it
  beforeEach: () => {
    const log = spyOn(console, 'log').mockName('console.log');
    return () => log.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const [explorer, disk] = canvas.getAllByRole('dialog');
    const taskBarButtons = (title: string) => canvas.queryAllByRole('button', {
      name: title
    });

    // Modal.Minimize minimizes the modal to its TaskBar button
    await userEvent.click(within(disk).getByRole('button', {
      name: 'minimize'
    }));
    await expect(disk).not.toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Local Disk (C:)'
    }));
    await expect(disk).toBeVisible();

    // TitleBar.Minimize only calls its own onClick
    await userEvent.click(within(explorer).getByRole('button', {
      name: 'minimize'
    }));
    await expect(console.log).toHaveBeenLastCalledWith("I'm in control");
    await expect(explorer).toBeVisible();

    // closing removes the modal, and its TaskBar button with it
    await userEvent.click(within(explorer).getByRole('button', {
      name: 'close'
    }));
    await expect(explorer).not.toBeInTheDocument();
    await expect(taskBarButtons('Windows Explorer')).toHaveLength(0);

    // the Start menu opens it again
    await userEvent.click(canvas.getByRole('button', {
      name: 'Start'
    }));
    await userEvent.click(canvas.getByText('Windows Explorer'));
    await expect(canvas.getAllByRole('dialog')).toHaveLength(2);
    await expect(taskBarButtons('Windows Explorer')).toHaveLength(1);
  },
  parameters: {
    // a demo of minimizing to the TaskBar; the controls are on Simple
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(O=(F=y.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};export{y as Minimize,B as Multiple,w as Simple,ge as __namedExportsOrder,he as default};
