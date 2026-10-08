import{j as e,r as w,F as c}from"./iframe-BP1fKKyq.js";import{u as T,M as p,a as v}from"./Modal-Co99nBD4.js";import{B as m}from"./Button-CYWwPWGC.js";/* empty css                              */import{T as E}from"./TaskBar-DCQnLYcw.js";import{T as M}from"./TitleBar-B13jGq_-.js";import{C as z,M as A,W as K,R as Y,F as J}from"./Write1-CE8UsuL2.js";import"./preload-helper-C1FmrZbK.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BsRdtlNK.js";import"./Button.css-ChH4GoWp.js";import"./Tooltip-B-ebvjti.js";/* empty css                               *//* empty css                               */const{expect:a,within:Q}=__STORYBOOK_MODULE_TEST__,we={title:"Hooks/useModal",parameters:{controls:{disable:!0},design:{disable:!0},clippy:{phrases:["Try minimizing a modal: it waits for you in the TaskBar.","useModal controls your modals without any React state."]},docs:{codePanel:!1,description:{component:`
The \`useModal\` hook provides a programmatic API for controlling existing Modal components.
It allows you to manage modal visibility, focus, and lifecycle without managing React state.

## How It Works

1. **Modal Registration**: When a Modal component mounts, it automatically registers with the TaskBar
2. **Programmatic Control**: Use the hook methods to control registered modals
3. **Event System**: All communication happens through a centralized event system

## Basic Usage

\`\`\`tsx
import { useModal, Modal } from '@react95/core';

function MyComponent() {
  const { minimize, restore, focus } = useModal();

  return (
    <>
      <button onClick={() => minimize('my-modal')}>Minimize</button>
      <button onClick={() => restore('my-modal')}>Restore</button>

      <Modal id="my-modal" title="My Modal">
        Modal content here
      </Modal>
    </>
  );
}
\`\`\`

## API Reference

- \`add(modal)\` - Register a modal with the system
- \`remove(id)\` - Remove a modal from TaskBar (modal component still exists)
- \`minimize(id)\` - Minimize a modal (hides content, shows in TaskBar)
- \`restore(id)\` - Restore a minimized modal
- \`focus(id)\` - Bring a modal to the front
- \`toggle(id)\` - Toggle modal visibility
- \`subscribe(event, callback)\` - Listen to modal events

**Note**: \`add()\` is primarily used internally by Modal components during mounting to register with the TaskBar.
        `}}},tags:["autodocs"]},u=(t,l)=>t.queryAllByRole("button",{name:l}),g=async(t,l)=>{l?await a(t).toHaveAttribute("aria-current","true"):await a(t).not.toHaveAttribute("aria-current")},X=()=>{const{add:t,remove:l}=T(),[o,i]=w.useState("Basic Modal"),r=()=>{l("basic-modal")},d=()=>{t({id:"basic-modal",title:o,icon:e.jsx(z,{variant:"16x16_4"}),hasButton:!0})},s=()=>i(n=>n==="Basic Modal"?"Renamed Modal":"Basic Modal");return e.jsxs(c,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(E,{}),e.jsxs(c,{display:"flex",gap:"10px",children:[e.jsx(m,{onClick:r,children:"Remove from TaskBar"}),e.jsx(m,{onClick:d,children:"Add to TaskBar"}),e.jsx(m,{onClick:s,children:"Rename"})]}),e.jsx(p,{id:"basic-modal",icon:e.jsx(z,{variant:"16x16_4"}),title:o,titleBarOptions:e.jsx(M.Close,{onClick:r}),dragOptions:{defaultPosition:{x:0,y:50}},children:e.jsx(p.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"useModal Hook"}),e.jsx("p",{children:"This modal automatically registered with the TaskBar when it mounted."}),e.jsx("p",{children:"The Modal component handles its own rendering - the useModal hook provides programmatic control."})]})})})]})},j={render:()=>e.jsx(X,{}),play:async({canvas:t,userEvent:l})=>{const o=t.getByRole("dialog");await a(u(t,"Basic Modal")).toHaveLength(1),await l.click(t.getByRole("button",{name:"Remove from TaskBar"})),await a(u(t,"Basic Modal")).toHaveLength(0),await a(o).toBeVisible(),await l.click(t.getByRole("button",{name:"Add to TaskBar"})),await a(u(t,"Basic Modal")).toHaveLength(1),await l.click(t.getByRole("button",{name:"Rename"})),await a(o).toHaveTextContent("Renamed Modal"),await a(u(t,"Basic Modal")).toHaveLength(0),await a(u(t,"Renamed Modal")).toHaveLength(1)},parameters:{docs:{description:{story:"Basic example showing modal registration and programmatic control using the useModal hook."}}}},Z=()=>{const{remove:t,minimize:l,restore:o,focus:i,add:r,toggle:d,subscribe:s}=T(),[n,h]=w.useState(!0);w.useEffect(()=>{const G=[s(v.MinimizeModal,({id:b})=>{b==="minimize-modal"&&h(!1)}),s(v.RestoreModal,({id:b})=>{b==="minimize-modal"&&h(!0)})];return()=>G.forEach(b=>b())},[s]);const H=()=>d("minimize-modal",n),f=()=>t("minimize-modal"),x=()=>{l("minimize-modal"),i("no-id")},B=()=>{o("minimize-modal"),i("minimize-modal")},q=()=>{r({id:"minimize-modal",title:"Minimize Example",icon:e.jsx(A,{variant:"16x16_4"}),hasButton:!0})},N=()=>{i("no-id")};return e.jsxs(c,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(E,{}),e.jsxs(c,{display:"flex",gap:"10px",flexWrap:"wrap",children:[e.jsx(m,{onClick:x,children:"Minimize"}),e.jsx(m,{onClick:B,children:"Restore"}),e.jsx(m,{onClick:H,children:"Toggle"}),e.jsx(m,{onClick:f,children:"Remove from TaskBar"}),e.jsx(m,{onClick:q,children:"Add to TaskBar"}),e.jsx(m,{onClick:N,children:"Remove Focus"})]}),e.jsx(p,{id:"minimize-modal",icon:e.jsx(A,{variant:"16x16_4"}),title:"Minimize Example",titleBarOptions:[e.jsx(p.Minimize,{},"minimize"),e.jsx(M.Close,{onClick:f},"close")],dragOptions:{defaultPosition:{x:0,y:50}},children:e.jsx(p.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Minimize & Restore"}),e.jsx("p",{children:"This modal demonstrates minimize/restore functionality:"}),e.jsxs(c,{as:"ul",my:"$8",children:[e.jsxs("li",{children:[e.jsx("code",{children:"minimize(id)"})," - Hide modal, show in TaskBar"]}),e.jsxs("li",{children:[e.jsx("code",{children:"restore(id)"})," - Show modal again"]}),e.jsxs("li",{children:[e.jsx("code",{children:"focus(id)"})," - Bring modal to front"]})]}),e.jsx("p",{children:"Try minimizing this modal and restoring it from the TaskBar or control buttons."})]})})})]})},y={render:()=>e.jsx(Z,{}),play:async({canvas:t,userEvent:l})=>{const o=t.getByRole("dialog"),i=r=>l.click(t.getByRole("button",{name:r}));await g(o,!0),await i("Minimize"),await a(o).not.toBeVisible(),await g(o,!1),await i("Restore"),await a(o).toBeVisible(),await g(o,!0),await i("Toggle"),await a(o).not.toBeVisible(),await i("Remove Focus"),await i("Toggle"),await a(o).toBeVisible(),await g(o,!0),await i("Remove Focus"),await g(o,!1),await i("Remove from TaskBar"),await a(u(t,"Minimize Example")).toHaveLength(0),await i("Add to TaskBar"),await a(u(t,"Minimize Example")).toHaveLength(1)},parameters:{docs:{description:{story:"Example showing minimize and restore functionality with programmatic control."}}}},k={"first-modal":e.jsx(J,{variant:"16x16_4"}),"second-modal":e.jsx(Y,{variant:"16x16_4"}),"third-modal":e.jsx(K,{variant:"16x16_4"})},ee=()=>{const{add:t,remove:l,minimize:o,restore:i,focus:r}=T(),d=n=>{l(n),o(n),r("no-id")},s=(n,h)=>()=>{switch(h){case"add":t({id:n,title:n,icon:k[n],hasButton:!0}),r(n),i(n);break;case"focus":r(n);break;case"minimize":o(n),r("no-id");break;case"restore":i(n),r(n);break;case"close":d(n);break}};return e.jsxs(c,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(E,{}),e.jsx(c,{display:"flex",flexDirection:"column",gap:"8px",children:["first-modal","second-modal","third-modal"].map((n,h)=>e.jsxs(c,{display:"flex",gap:"8px",alignItems:"center",children:[e.jsxs("span",{style:{minWidth:"80px",fontSize:"14px"},children:["Modal ",h+1,":"]}),e.jsx(m,{onClick:s(n,"focus"),children:"Focus"}),e.jsx(m,{onClick:s(n,"minimize"),children:"Minimize"}),e.jsx(m,{onClick:s(n,"restore"),children:"Restore"}),e.jsx(m,{onClick:s(n,"close"),children:"Remove"}),e.jsx(m,{onClick:s(n,"add"),children:"Add"})]},n))}),e.jsx(p,{id:"first-modal",icon:k["first-modal"],title:"first-modal",dragOptions:{defaultPosition:{x:0,y:130}},titleBarOptions:[e.jsx(p.Minimize,{},"minimize"),e.jsx(M.Close,{onClick:()=>d("first-modal")},"close")],children:e.jsx(p.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"First Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"first-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Each modal has a unique ID for programmatic control."})]})})}),e.jsx(p,{id:"second-modal",icon:k["second-modal"],title:"second-modal",dragOptions:{defaultPosition:{x:320,y:130}},titleBarOptions:[e.jsx(p.Minimize,{},"minimize"),e.jsx(M.Close,{onClick:()=>d("second-modal")},"close")],children:e.jsx(p.Content,{width:"340px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Second Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"second-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Multiple modals can coexist and be controlled independently."})]})})}),e.jsx(p,{id:"third-modal",icon:k["third-modal"],title:"third-modal",dragOptions:{defaultPosition:{x:160,y:330}},titleBarOptions:[e.jsx(p.Minimize,{},"minimize"),e.jsx(M.Close,{onClick:()=>d("third-modal")},"close")],children:e.jsx(p.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Third Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"third-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Focus management ensures proper z-index ordering."})]})})})]})},R={render:()=>e.jsx(ee,{}),play:async({canvas:t,userEvent:l})=>{const[o,i,r]=t.getAllByRole("dialog"),d=(s,n)=>l.click(Q(t.getByText(`Modal ${s}:`).parentElement).getByRole("button",{name:n}));await d(2,"Focus"),await g(o,!1),await g(i,!0),await g(r,!1),await d(1,"Minimize"),await a(o).not.toBeVisible(),await a(i).toBeVisible(),await a(r).toBeVisible(),await d(1,"Restore"),await a(o).toBeVisible(),await g(o,!0),await g(i,!1),await d(3,"Remove"),await a(r).not.toBeVisible(),await a(u(t,"third-modal")).toHaveLength(0),await a(u(t,"first-modal")).toHaveLength(1),await d(3,"Add"),await a(r).toBeVisible(),await a(u(t,"third-modal")).toHaveLength(1)},parameters:{docs:{description:{story:"Example showing multiple modals with independent programmatic control."}}}},te=()=>{const{remove:t,minimize:l,restore:o,subscribe:i,add:r,focus:d}=T(),s=w.useRef(null),n=w.useRef(0),h=w.useCallback(f=>{if(s.current){const x=document.createElement("div");if(x.style.cssText=`
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        `,n.current+=1,x.textContent=`${n.current}. ${f}`,s.current.appendChild(x),s.current.scrollTop=s.current.scrollHeight,s.current.children.length>20){const B=s.current.firstChild;B&&s.current.removeChild(B)}}},[]),H=w.useCallback(()=>{s.current&&(s.current.innerHTML="",n.current=0)},[]);return w.useEffect(()=>{const f=[i(v.AddModal,({id:x,title:B})=>{h(`➕ Added: ${B} (${x})`)}),i(v.RemoveModal,({id:x})=>{h(`❌ Removed: ${x}`)}),i(v.MinimizeModal,({id:x})=>{h(`➖ Minimized: ${x}`)}),i(v.RestoreModal,({id:x})=>{h(`⬆️ Restored: ${x}`)}),i(v.ModalVisibilityChanged,({id:x})=>{h(`👁️ Focus changed: ${x}`)})];return()=>{f.forEach(x=>x())}},[i,h]),e.jsxs(c,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(E,{}),e.jsxs(c,{display:"flex",gap:"10px",flexWrap:"wrap",children:[e.jsx(m,{onClick:()=>{l("event-modal"),d("no-id")},children:"Minimize"}),e.jsx(m,{onClick:()=>{o("event-modal"),d("event-modal")},children:"Restore"}),e.jsx(m,{onClick:()=>{l("event-modal"),t("event-modal"),d("no-id")},children:"Remove"}),e.jsx(m,{onClick:()=>r({id:"event-modal",title:"Event Modal",icon:e.jsx(z,{variant:"16x16_4"}),hasButton:!0}),children:"Add"}),e.jsx(m,{onClick:()=>{d("no-id")},children:"Remove focus"}),e.jsx(m,{onClick:H,children:"Clear Log"})]}),e.jsxs(c,{display:"flex",gap:"16px",children:[e.jsx(p,{id:"event-modal",icon:e.jsx(z,{variant:"16x16_4"}),title:"Event Modal",titleBarOptions:[e.jsx(p.Minimize,{},"minimize"),e.jsx(M.Close,{onClick:()=>{console.log("Closing event modal"),l("event-modal"),t("event-modal"),d("no-id")}},"close")],dragOptions:{defaultPosition:{x:0,y:290}},children:e.jsx(p.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(c,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Event Subscription"}),e.jsx("p",{children:"This example demonstrates event subscription:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"AddModal"})," - Modal created"]}),e.jsxs("li",{children:[e.jsx("code",{children:"RemoveModal"})," - Modal removed"]}),e.jsxs("li",{children:[e.jsx("code",{children:"MinimizeModal"})," - Modal minimized"]}),e.jsxs("li",{children:[e.jsx("code",{children:"RestoreModal"})," - Modal restored"]}),e.jsxs("li",{children:[e.jsx("code",{children:"ModalVisibilityChanged"})," - Focus changed"]})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Events are logged in real-time using DOM manipulation to avoid re-render loops."})]})})}),e.jsxs(c,{display:"flex",flexDirection:"column",width:"320px",height:"200px",boxShadow:"$out",bgColor:"$material",p:"$8",children:[e.jsx(c,{as:"h4",fontSize:"14px",m:"$0",mb:"$8",children:"Event Log"}),e.jsx(c,{boxShadow:"$in",bgColor:"white",p:"$8",ref:s,overflow:"auto",backgroundColor:"#fafafa",flexGrow:1})]})]})]})},C={render:()=>e.jsx(te,{}),play:async({canvas:t,userEvent:l})=>{const o=t.getByText("Event Log").nextElementSibling,i=r=>l.click(t.getByRole("button",{name:r}));await i("Minimize"),await a(o).toHaveTextContent("Minimized: event-modal"),await a(o).toHaveTextContent("Focus changed: no-id"),await i("Restore"),await a(o).toHaveTextContent("Restored: event-modal"),await a(o).toHaveTextContent("Focus changed: event-modal"),await i("Remove"),await a(o).toHaveTextContent("Removed: event-modal"),await i("Add"),await a(o).toHaveTextContent("Added: Event Modal (event-modal)"),await i("Restore"),await a(t.getByRole("dialog")).toBeVisible()},parameters:{docs:{description:{story:"Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state."}}}},ve=["BasicUsage","MinimizeRestore","MultipleModals","EventSubscription"];var S,L,D;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <BasicUsageDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const modal = canvas.getByRole('dialog');

    // a modal registers with the TaskBar when it mounts
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(1);

    // remove(id) takes it off the TaskBar, but the modal stays
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove from TaskBar'
    }));
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(0);
    await expect(modal).toBeVisible();

    // and add(modal) puts it back
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add to TaskBar'
    }));
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(1);

    // a new title renames its TaskBar button
    await userEvent.click(canvas.getByRole('button', {
      name: 'Rename'
    }));
    await expect(modal).toHaveTextContent('Renamed Modal');
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(0);
    await expect(taskBarButtons(canvas, 'Renamed Modal')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example showing modal registration and programmatic control using the useModal hook.'
      }
    }
  }
}`,...(D=(L=j.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var V,$,O;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <MinimizeRestoreDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const modal = canvas.getByRole('dialog');
    const control = (name: string) => userEvent.click(canvas.getByRole('button', {
      name
    }));
    await expectActive(modal, true);

    // minimize(id) hides the modal, restore(id) brings it back
    await control('Minimize');
    await expect(modal).not.toBeVisible();
    // a minimized modal isn't the active one, even though the demo
    // re-renders when it's minimized
    await expectActive(modal, false);
    await control('Restore');
    await expect(modal).toBeVisible();
    await expectActive(modal, true);

    // toggle(id, isActive) minimizes an open modal, and restores and focuses a
    // minimized one
    await control('Toggle');
    await expect(modal).not.toBeVisible();

    // with no modal active, so the focus can only come from toggle
    await control('Remove Focus');
    await control('Toggle');
    await expect(modal).toBeVisible();
    await expectActive(modal, true);

    // focus('no-id') leaves no modal active
    await control('Remove Focus');
    await expectActive(modal, false);

    // remove(id) and add(modal) take it off and put it back on the TaskBar
    await control('Remove from TaskBar');
    await expect(taskBarButtons(canvas, 'Minimize Example')).toHaveLength(0);
    await control('Add to TaskBar');
    await expect(taskBarButtons(canvas, 'Minimize Example')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing minimize and restore functionality with programmatic control.'
      }
    }
  }
}`,...(O=($=y.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var F,_,I;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <MultipleModalsDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const [first, second, third] = canvas.getAllByRole('dialog');
    // each modal has a row of controls, labelled "Modal 1:", "Modal 2:"…
    const control = (modal: number, name: string) => userEvent.click(within(canvas.getByText(\`Modal \${modal}:\`).parentElement!).getByRole('button', {
      name
    }));

    // focusing one modal leaves the others inactive
    await control(2, 'Focus');
    await expectActive(first, false);
    await expectActive(second, true);
    await expectActive(third, false);

    // minimizing one doesn't touch the others
    await control(1, 'Minimize');
    await expect(first).not.toBeVisible();
    await expect(second).toBeVisible();
    await expect(third).toBeVisible();
    await control(1, 'Restore');
    await expect(first).toBeVisible();
    await expectActive(first, true);
    await expectActive(second, false);

    // removing one takes it off the TaskBar; adding it back returns it
    await control(3, 'Remove');
    await expect(third).not.toBeVisible();
    await expect(taskBarButtons(canvas, 'third-modal')).toHaveLength(0);
    await expect(taskBarButtons(canvas, 'first-modal')).toHaveLength(1);
    await control(3, 'Add');
    await expect(third).toBeVisible();
    await expect(taskBarButtons(canvas, 'third-modal')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple modals with independent programmatic control.'
      }
    }
  }
}`,...(I=(_=R.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var P,U,W;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <EventSubscriptionDemo />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const log = canvas.getByText('Event Log').nextElementSibling;
    const control = (name: string) => userEvent.click(canvas.getByRole('button', {
      name
    }));

    // each call emits its events, which subscribers receive
    await control('Minimize');
    await expect(log).toHaveTextContent('Minimized: event-modal');
    await expect(log).toHaveTextContent('Focus changed: no-id');
    await control('Restore');
    await expect(log).toHaveTextContent('Restored: event-modal');
    await expect(log).toHaveTextContent('Focus changed: event-modal');
    await control('Remove');
    await expect(log).toHaveTextContent('Removed: event-modal');
    await control('Add');
    await expect(log).toHaveTextContent('Added: Event Modal (event-modal)');

    // and back on screen, for whoever opens the story
    await control('Restore');
    await expect(canvas.getByRole('dialog')).toBeVisible();
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state.'
      }
    }
  }
}`,...(W=(U=C.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};export{j as BasicUsage,C as EventSubscription,y as MinimizeRestore,R as MultipleModals,ve as __namedExportsOrder,we as default};
