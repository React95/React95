import{j as e}from"./jsx-runtime-e5910377.js";import{r as u}from"./index-66a3a5c2.js";import{u as b,M as s,a as j}from"./Modal-9f9e7f41.js";import{B as t}from"./Button-ab59f6ae.js";import{F as i}from"./Frame-ad175eaa.js";import{T as w}from"./TaskBar-1571ac3f.js";import{T as h}from"./TitleBar-41e014c0.js";import{i as R,j as B,k as W,R as H,W as U}from"./Write1-229e0d0c.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-626ba1ae.js";import"./index-a3deabcc.js";import"./Button.css-afb77755.js";import"./Tooltip-bea1db0a.js";/* empty css                               *//* empty css                               */const ce={title:"Hooks/useModal",parameters:{docs:{description:{component:`
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
        `}}},tags:["autodocs"]},N=()=>{const{remove:p}=b(),c=()=>{p("basic-modal")};return e.jsxs(i,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(w,{}),e.jsx(i,{display:"flex",gap:"10px",children:e.jsx(t,{onClick:c,children:"Remove from TaskBar"})}),e.jsx(s,{id:"basic-modal",icon:e.jsx(R,{variant:"16x16_4"}),title:"Basic Modal",titleBarOptions:e.jsx(h.Close,{onClick:c}),dragOptions:{defaultPosition:{x:0,y:50}},children:e.jsx(s.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"useModal Hook"}),e.jsx("p",{children:"This modal automatically registered with the TaskBar when it mounted."}),e.jsx("p",{children:"The Modal component handles its own rendering - the useModal hook provides programmatic control."})]})})})]})},f={render:()=>e.jsx(N,{}),parameters:{docs:{description:{story:"Basic example showing modal registration and programmatic control using the useModal hook."}}}},V=()=>{const{remove:p,minimize:c,restore:x,focus:a,add:m}=b(),l=()=>p("minimize-modal"),n=()=>{c("minimize-modal"),a("no-id")},o=()=>{x("minimize-modal"),a("minimize-modal")},d=()=>{m({id:"minimize-modal",title:"Minimize Example",icon:e.jsx(B,{variant:"16x16_4"}),hasButton:!0})},z=()=>{a("no-id")};return e.jsxs(i,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(w,{}),e.jsxs(i,{display:"flex",gap:"10px",flexWrap:"wrap",children:[e.jsx(t,{onClick:n,children:"Minimize"}),e.jsx(t,{onClick:o,children:"Restore"}),e.jsx(t,{onClick:l,children:"Remove from TaskBar"}),e.jsx(t,{onClick:d,children:"Add to TaskBar"}),e.jsx(t,{onClick:z,children:"Remove Focus"})]}),e.jsx(s,{id:"minimize-modal",icon:e.jsx(B,{variant:"16x16_4"}),title:"Minimize Example",titleBarOptions:[e.jsx(s.Minimize,{},"minimize"),e.jsx(h.Close,{onClick:l},"close")],dragOptions:{defaultPosition:{x:0,y:50}},children:e.jsx(s.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Minimize & Restore"}),e.jsx("p",{children:"This modal demonstrates minimize/restore functionality:"}),e.jsxs(i,{as:"ul",my:"$8",children:[e.jsxs("li",{children:[e.jsx("code",{children:"minimize(id)"})," - Hide modal, show in TaskBar"]}),e.jsxs("li",{children:[e.jsx("code",{children:"restore(id)"})," - Show modal again"]}),e.jsxs("li",{children:[e.jsx("code",{children:"focus(id)"})," - Bring modal to front"]})]}),e.jsx("p",{children:"Try minimizing this modal and restoring it from the TaskBar or control buttons."})]})})})]})},M={render:()=>e.jsx(V,{}),parameters:{docs:{description:{story:"Example showing minimize and restore functionality with programmatic control."}}}},v={"first-modal":e.jsx(W,{variant:"16x16_4"}),"second-modal":e.jsx(H,{variant:"16x16_4"}),"third-modal":e.jsx(U,{variant:"16x16_4"})},q=()=>{const{add:p,remove:c,minimize:x,restore:a,focus:m}=b(),l=o=>{c(o),x(o),m("no-id")},n=(o,d)=>()=>{switch(d){case"add":p({id:o,title:o,icon:v[o],hasButton:!0}),m(o),a(o);break;case"focus":m(o);break;case"minimize":x(o),m("no-id");break;case"restore":a(o),m(o);break;case"close":l(o);break}};return e.jsxs(i,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(w,{}),e.jsx(i,{display:"flex",flexDirection:"column",gap:"8px",children:["first-modal","second-modal","third-modal"].map((o,d)=>e.jsxs(i,{display:"flex",gap:"8px",alignItems:"center",children:[e.jsxs("span",{style:{minWidth:"80px",fontSize:"14px"},children:["Modal ",d+1,":"]}),e.jsx(t,{onClick:n(o,"focus"),children:"Focus"}),e.jsx(t,{onClick:n(o,"minimize"),children:"Minimize"}),e.jsx(t,{onClick:n(o,"restore"),children:"Restore"}),e.jsx(t,{onClick:n(o,"close"),children:"Remove"}),e.jsx(t,{onClick:n(o,"add"),children:"Add"})]},o))}),e.jsx(s,{id:"first-modal",icon:v["first-modal"],title:"first-modal",dragOptions:{defaultPosition:{x:0,y:130}},titleBarOptions:[e.jsx(s.Minimize,{},"minimize"),e.jsx(h.Close,{onClick:()=>l("first-modal")},"close")],children:e.jsx(s.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"First Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"first-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Each modal has a unique ID for programmatic control."})]})})}),e.jsx(s,{id:"second-modal",icon:v["second-modal"],title:"second-modal",dragOptions:{defaultPosition:{x:320,y:130}},titleBarOptions:[e.jsx(s.Minimize,{},"minimize"),e.jsx(h.Close,{onClick:()=>l("second-modal")},"close")],children:e.jsx(s.Content,{width:"340px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Second Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"second-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Multiple modals can coexist and be controlled independently."})]})})}),e.jsx(s,{id:"third-modal",icon:v["third-modal"],title:"third-modal",dragOptions:{defaultPosition:{x:160,y:330}},titleBarOptions:[e.jsx(s.Minimize,{},"minimize"),e.jsx(h.Close,{onClick:()=>l("third-modal")},"close")],children:e.jsx(s.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Third Modal"}),e.jsxs("p",{children:["ID: ",e.jsx("code",{children:"third-modal"})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Focus management ensures proper z-index ordering."})]})})})]})},y={render:()=>e.jsx(q,{}),parameters:{docs:{description:{story:"Example showing multiple modals with independent programmatic control."}}}},G=()=>{const{remove:p,minimize:c,restore:x,subscribe:a,add:m,focus:l}=b(),n=u.useRef(null),o=u.useRef(0),d=u.useCallback(k=>{if(n.current){const r=document.createElement("div");if(r.style.cssText=`
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        `,o.current+=1,r.textContent=`${o.current}. ${k}`,n.current.appendChild(r),n.current.scrollTop=n.current.scrollHeight,n.current.children.length>20){const g=n.current.firstChild;g&&n.current.removeChild(g)}}},[]),z=u.useCallback(()=>{n.current&&(n.current.innerHTML="",o.current=0)},[]);return u.useEffect(()=>{const k=[a(j.AddModal,({id:r,title:g})=>{d(`➕ Added: ${g} (${r})`)}),a(j.RemoveModal,({id:r})=>{d(`❌ Removed: ${r}`)}),a(j.MinimizeModal,({id:r})=>{d(`➖ Minimized: ${r}`)}),a(j.RestoreModal,({id:r})=>{d(`⬆️ Restored: ${r}`)}),a(j.ModalVisibilityChanged,({id:r})=>{d(`👁️ Focus changed: ${r}`)})];return()=>{k.forEach(r=>r())}},[a,d]),e.jsxs(i,{display:"flex",flexDirection:"column",gap:"16px",p:"20px",children:[e.jsx(w,{}),e.jsxs(i,{display:"flex",gap:"10px",flexWrap:"wrap",children:[e.jsx(t,{onClick:()=>{c("event-modal"),l("no-id")},children:"Minimize"}),e.jsx(t,{onClick:()=>{x("event-modal"),l("event-modal")},children:"Restore"}),e.jsx(t,{onClick:()=>{c("event-modal"),p("event-modal"),l("no-id")},children:"Remove"}),e.jsx(t,{onClick:()=>m({id:"event-modal",title:"Event Modal",icon:e.jsx(R,{variant:"16x16_4"}),hasButton:!0}),children:"Add"}),e.jsx(t,{onClick:()=>{l("no-id")},children:"Remove focus"}),e.jsx(t,{onClick:z,children:"Clear Log"})]}),e.jsxs(i,{display:"flex",gap:"16px",children:[e.jsx(s,{id:"event-modal",icon:e.jsx(R,{variant:"16x16_4"}),title:"Event Modal",titleBarOptions:[e.jsx(s.Minimize,{},"minimize"),e.jsx(h.Close,{onClick:()=>{console.log("Closing event modal"),c("event-modal"),p("event-modal"),l("no-id")}},"close")],dragOptions:{defaultPosition:{x:0,y:290}},children:e.jsx(s.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(i,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Event Subscription"}),e.jsx("p",{children:"This example demonstrates event subscription:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"AddModal"})," - Modal created"]}),e.jsxs("li",{children:[e.jsx("code",{children:"RemoveModal"})," - Modal removed"]}),e.jsxs("li",{children:[e.jsx("code",{children:"MinimizeModal"})," - Modal minimized"]}),e.jsxs("li",{children:[e.jsx("code",{children:"RestoreModal"})," - Modal restored"]}),e.jsxs("li",{children:[e.jsx("code",{children:"ModalVisibilityChanged"})," - Focus changed"]})]}),e.jsx("p",{style:{fontSize:"12px"},children:"Events are logged in real-time using DOM manipulation to avoid re-render loops."})]})})}),e.jsxs(i,{display:"flex",flexDirection:"column",width:"320px",height:"200px",boxShadow:"$out",bgColor:"$material",p:"$8",children:[e.jsx(i,{as:"h4",fontSize:"14px",m:"$0",mb:"$8",children:"Event Log"}),e.jsx(i,{boxShadow:"$in",bgColor:"white",p:"$8",ref:n,overflow:"auto",backgroundColor:"#fafafa",flexGrow:1})]})]})]})},C={render:()=>e.jsx(G,{}),parameters:{docs:{description:{story:"Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state."}}}};var E,D,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <BasicUsageDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Basic example showing modal registration and programmatic control using the useModal hook.'
      }
    }
  }
}`,...(T=(D=f.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var S,$,O;M.parameters={...M.parameters,docs:{...(S=M.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <MinimizeRestoreDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing minimize and restore functionality with programmatic control.'
      }
    }
  }
}`,...(O=($=M.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var I,_,A;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <MultipleModalsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple modals with independent programmatic control.'
      }
    }
  }
}`,...(A=(_=y.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var F,P,L;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EventSubscriptionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state.'
      }
    }
  }
}`,...(L=(P=C.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const me=["BasicUsage","MinimizeRestore","MultipleModals","EventSubscription"];export{f as BasicUsage,C as EventSubscription,M as MinimizeRestore,y as MultipleModals,me as __namedExportsOrder,ce as default};
