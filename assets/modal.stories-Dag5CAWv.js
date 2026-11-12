import{j as e,r as M,F as x,a as R}from"./iframe-B9_iyyAy.js";import{M as r,u as J}from"./Modal-udYA7Je0.js";import{B as p}from"./Button-BqHLXCJc.js";/* empty css                              */import{L as c}from"./List-Doa89MCr.js";import{T as K}from"./TaskBar-BnAM5VW0.js";import{T as u}from"./TitleBar-pdS9yeYg.js";import{t as Q}from"./theme-color-Bor3p02p.js";import{R as T,W as S,M as A,u as E,C as P}from"./Write1-3eQp6NPG.js";import"./preload-helper-C1FmrZbK.js";/* empty css                             */import"./index-DeQiAqfN.js";import"./Button.css-BQGZBg8x.js";/* empty css                            */import"./ListNav-DlDdgcmR.js";import"./Tooltip-D_CzqENB.js";/* empty css                               *//* empty css                               */var w="r95_1pmeodb0";const{expect:a,spyOn:$,within:s}=__STORYBOOK_MODULE_TEST__,Ce={title:"Modal",component:r,tags:["autodocs"],args:{title:"Browse",hasWindowButton:!0,buttonsAlignment:"flex-end"},argTypes:{title:{control:"text"},buttonsAlignment:{control:"select",options:["flex-start","center","flex-end","space-between"]}}},X=i=>{const[o,n]=M.useState(!0),t=()=>n(!0),l=()=>n(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:t,children:"Trigger Modal"}),o&&e.jsx(r,{...i,icon:e.jsx(P,{variant:"16x16_4"}),dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.jsx(u.Help,{onClick:()=>console.log("Help")},"help"),e.jsx(u.Close,{onClick:l},"close")],buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:l,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(r.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white",children:"Simple modal"})})]})},y={render:i=>e.jsx(X,{...i}),beforeEach:()=>{const i=$(console,"log").mockName("console.log");return()=>i.mockRestore()},play:async({args:i,canvas:o,userEvent:n})=>{const t=o.getByRole("dialog");await a(t).toHaveAccessibleName(i.title),await a(t).toHaveTextContent("Simple modal"),await n.click(s(t).getByRole("button",{name:"Ok"})),await a(console.log).toHaveBeenLastCalledWith("Ok"),await n.click(s(t).getByRole("button",{name:"Cancel"})),await a(console.log).toHaveBeenLastCalledWith("Cancel"),await n.click(s(t).getByRole("button",{name:"help"})),await a(console.log).toHaveBeenLastCalledWith("Help"),await a(t).not.toHaveTextContent("Exit"),await n.click(s(t).getByText("File")),await a(t).toHaveTextContent("Exit"),await n.click(s(t).getByText("Edit")),await a(t).toHaveTextContent("Copy"),await a(t).not.toHaveTextContent("Exit"),await n.click(s(t).getByText("Simple modal")),await a(t).not.toHaveTextContent("Copy"),await n.click(s(t).getByText("File")),await n.click(s(t).getByText("Exit")),await a(o.queryAllByRole("dialog")).toHaveLength(0),await n.click(o.getByRole("button",{name:"Trigger Modal"})),await n.click(s(o.getByRole("dialog")).getByRole("button",{name:"close"})),await a(o.queryAllByRole("dialog")).toHaveLength(0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},d={first:"first-modal",second:"second-modal"},ee=()=>{const{remove:i,minimize:o,restore:n,focus:t,add:l}=J(),m=()=>{o(d.first),i(d.first)},h=()=>{o(d.second),i(d.second)},B=()=>{o(d.first),t("no-id")},v=()=>{l({id:d.first,title:"First Modal",icon:e.jsx(A,{variant:"32x32_4"}),hasButton:!0}),n(d.first),t(d.first)},Z=()=>t(d.first),Y=()=>{o(d.second),t("no-id")},G=()=>{l({id:d.second,title:"Second Modal",icon:e.jsx(E,{variant:"32x32_4"}),hasButton:!0}),n(d.second),t(d.second)},U=()=>t(d.second);return e.jsxs(x,{children:[e.jsx(K,{}),e.jsxs(x,{display:"flex",flexDirection:"column",gap:"8px",children:[e.jsxs(x,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(p,{onClick:B,children:"Minimize First"}),e.jsx(p,{onClick:v,children:"Restore First"}),e.jsx(p,{onClick:m,children:"Close First"}),e.jsx(p,{onClick:Z,children:"Focus First"})]}),e.jsxs(x,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(p,{onClick:Y,children:"Minimize Second"}),e.jsx(p,{onClick:G,children:"Restore Second"}),e.jsx(p,{onClick:h,children:"Close Second"}),e.jsx(p,{onClick:U,children:"Focus Second"})]})]}),e.jsx(r,{id:"first-modal",icon:e.jsx(A,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:e.jsx(r.Minimize,{}),buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:m,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(r.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(x,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Modal Control"}),e.jsxs("p",{children:["This modal is controlled entirely using the"," ",e.jsx("code",{children:"useModal()"})," hook:"]}),e.jsxs("ul",{style:{fontSize:"14px",margin:"8px 0"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"minimize(id)"})," - Minimize modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"restore(id)"})," - Restore modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"focus(id)"})," - Bring to focus"]})]}),e.jsx("p",{children:"Try the control buttons above or use the TaskBar below."})]})})}),e.jsx(r,{id:"second-modal",icon:e.jsx(E,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:e.jsx(u.Close,{onClick:h}),buttons:[{value:"Ok",onClick:()=>console.log("Ok")},{value:"Cancel",onClick:()=>console.log("Cancel")}],menu:[{name:"File",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{onClick:h,children:"Exit"})})},{name:"Edit",list:e.jsx(c,{width:"200px",children:e.jsx(c.Item,{children:"Copy"})})}],children:e.jsx(r.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(x,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Complete Modal Management"}),e.jsx("p",{children:"Key features demonstrated:"}),e.jsxs(x,{as:"ul",marginY:"$8",children:[e.jsx("li",{children:"No React state management needed"}),e.jsx("li",{children:"Modals controlled by ID"}),e.jsx("li",{children:"Automatic TaskBar integration"}),e.jsx("li",{children:"Event-driven architecture"})]}),e.jsx("p",{children:"Both modals can be controlled independently using their IDs."})]})})})]})},g=async(i,o)=>{o?await a(i).toHaveAttribute("aria-current","true"):await a(i).not.toHaveAttribute("aria-current"),await a(i.querySelector(".draggable")).toHaveStyle({backgroundColor:Q(o?R.colors.headerBackground:R.colors.headerNotActiveBackground)})},j=async(i,o)=>{const n=t=>Number(getComputedStyle(t).zIndex);await a(n(i)).toBeGreaterThan(n(o))},k={render:()=>e.jsx(ee,{}),play:async({canvas:i,userEvent:o})=>{const[n,t]=i.getAllByRole("dialog"),l=m=>i.getByRole("button",{name:m});await a(l("First Modal")).toBeVisible(),await a(l("Second Modal")).toBeVisible(),await g(n,!1),await g(t,!0),await j(t,n),await o.click(s(n).getByText("Modal Control")),await g(n,!0),await g(t,!1),await j(n,t),await o.click(s(n).getByRole("button",{name:"minimize"})),await a(n).not.toBeVisible(),await j(n,t),await o.click(l("First Modal")),await a(n).toBeVisible(),await g(n,!0),await o.click(s(t).getByText("Complete Modal Management")),await g(t,!0),await o.click(s(t).getByRole("button",{name:"close"})),await a(t).not.toBeVisible(),await a(i.queryAllByRole("button",{name:"Second Modal"})).toHaveLength(0),await g(n,!0),await o.click(l("First Modal")),await a(n).not.toBeVisible()},parameters:{controls:{disable:!0}}},te=["Window A","Window B","Window C"],ne=()=>e.jsx(e.Fragment,{children:te.map((i,o)=>e.jsx(r,{icon:e.jsx(P,{variant:"16x16_4"}),title:i,dragOptions:{defaultPosition:{x:40+o*60,y:o*60}},children:e.jsx(r.Content,{width:"250px",height:"150px",bgColor:"white",children:i})},i))}),f=(i,o)=>{var n;return(n=document.elementFromPoint(i,o))==null?void 0:n.closest('[role="dialog"]')},b={render:()=>e.jsx(ne,{}),play:async({canvas:i,userEvent:o})=>{const[n,t,l]=i.getAllByRole("dialog"),m=v=>v.querySelector(".draggable"),h=l.getBoundingClientRect();await a(f(h.left+5,h.top+5)).toBe(l),await o.click(m(t)),await o.click(m(n)),await a(f(h.left+5,h.top+5)).toBe(n);const B=t.getBoundingClientRect();await a(f(B.right-5,B.bottom-5)).toBe(t)},parameters:{controls:{disable:!0}}},oe=()=>{const[i,o]=M.useState(!0),[n,t]=M.useState(!0),l=()=>o(!1),m=()=>t(!1);return e.jsxs(e.Fragment,{children:[e.jsx(K,{list:e.jsxs(c,{children:[e.jsx(c.Item,{icon:e.jsx(T,{variant:"32x32_4"}),onClick:()=>t(!0),children:"Local Disk (C:)"}),e.jsx(c.Item,{icon:e.jsx(S,{variant:"32x32_4"}),onClick:()=>{o(!0)},children:"Windows Explorer"})]})}),i&&e.jsx(r,{icon:e.jsx(S,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.jsx(u.Minimize,{onClick:()=>console.log("I'm in control")},"minimize"),e.jsx(u.Close,{onClick:l},"close")],width:"300px",height:"220px",children:e.jsx(r.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(x,{as:"p",lineHeight:"1.1rem",children:["You can still use the"," ",e.jsx("code",{className:w,children:"<TitleBar.Minimize />"})," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."]})})}),n&&e.jsx(r,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.jsx(T,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.jsx(r.Minimize,{},"minimize"),e.jsx(u.Close,{onClick:m},"close")],children:e.jsx(r.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(x,{as:"p",lineHeight:"1.1rem",children:["The ",e.jsx("code",{className:w,children:"Modal.Minimize"})," component is a utility component provided by the"," ",e.jsx("code",{className:w,children:"Modal"})," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.jsx("code",{className:w,children:"<Modal.Minimize />"})," to the"," ",e.jsx("code",{className:w,children:"titleBarOptions"})," prop of the"," ",e.jsx("code",{className:w,children:"Modal"})," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."]})})})]})},C={render:()=>e.jsx(oe,{}),beforeEach:()=>{const i=$(console,"log").mockName("console.log");return()=>i.mockRestore()},play:async({canvas:i,userEvent:o})=>{const[n,t]=i.getAllByRole("dialog"),l=m=>i.queryAllByRole("button",{name:m});await o.click(s(t).getByRole("button",{name:"minimize"})),await a(t).not.toBeVisible(),await o.click(i.getByRole("button",{name:"Local Disk (C:)"})),await a(t).toBeVisible(),await o.click(s(n).getByRole("button",{name:"minimize"})),await a(console.log).toHaveBeenLastCalledWith("I'm in control"),await a(n).toBeVisible(),await o.click(s(n).getByRole("button",{name:"close"})),await a(n).not.toBeInTheDocument(),await a(l("Windows Explorer")).toHaveLength(0),await o.click(i.getByRole("button",{name:"Start"})),await o.click(i.getByText("Windows Explorer")),await a(i.getAllByRole("dialog")).toHaveLength(2),await a(l("Windows Explorer")).toHaveLength(1)},parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},ve=["Simple","Multiple","Stacking","Minimize"];var H,O,z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    await expect(modal).toHaveAccessibleName(args.title as string);
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
}`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var F,D,L;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    await expectOnTop(second, first);

    // clicking a modal makes it the active one, on top of the others
    await userEvent.click(within(first).getByText('Modal Control'));
    await expectActive(first, true);
    await expectActive(second, false);
    await expectOnTop(first, second);

    // minimizing hides it, and its TaskBar button brings it back, active
    await userEvent.click(within(first).getByRole('button', {
      name: 'minimize'
    }));
    await expect(first).not.toBeVisible();
    // with no modal active, the one minimized last stays on top
    await expectOnTop(first, second);
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
}`,...(L=(D=k.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,I,_;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <StackingDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const [a, b, c] = canvas.getAllByRole('dialog');
    const titleBar = (modal: HTMLElement) => modal.querySelector('.draggable') as HTMLElement;

    // opened in order, so the last one is on top of the other two
    const allOverlap = c.getBoundingClientRect();
    await expect(modalAt(allOverlap.left + 5, allOverlap.top + 5)).toBe(c);

    // focusing B and then A puts them back on top, in that order: from the
    // back, C, B, A
    await userEvent.click(titleBar(b));
    await userEvent.click(titleBar(a));
    await expect(modalAt(allOverlap.left + 5, allOverlap.top + 5)).toBe(a);

    // where only B and C overlap, B was focused last, so it's drawn over C
    // even though C comes after it in the page
    const onlyBAndC = b.getBoundingClientRect();
    await expect(modalAt(onlyBAndC.right - 5, onlyBAndC.bottom - 5)).toBe(b);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(I=b.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,V,q;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(V=C.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};export{C as Minimize,k as Multiple,y as Simple,b as Stacking,ve as __namedExportsOrder,Ce as default};
