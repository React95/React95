import{r as e}from"./index-9fa1aa67.js";import{u as k,M as a,a as x}from"./Modal-7dfc58ec.js";import{B as l}from"./Button-a9a82e5e.js";import{F as o}from"./Frame-f7ea70b0.js";import{T as C}from"./TaskBar-043dabe9.js";import{T as E}from"./TitleBar-c81c9dc6.js";import{i as z,j as R,k as W,R as H,W as U}from"./Write1-c0dab693.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-923230fa.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";import"./Tooltip-210aa1f5.js";/* empty css                               *//* empty css                               */const me={title:"Hooks/useModal",parameters:{docs:{description:{component:`
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
        `}}},tags:["autodocs"]},N=()=>{const{remove:p}=k(),c=()=>{p("basic-modal")};return e.createElement(o,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(C,null),e.createElement(o,{display:"flex",gap:"10px"},e.createElement(l,{onClick:c},"Remove from TaskBar")),e.createElement(a,{id:"basic-modal",icon:e.createElement(z,{variant:"16x16_4"}),title:"Basic Modal",titleBarOptions:e.createElement(E.Close,{onClick:c}),dragOptions:{defaultPosition:{x:0,y:50}}},e.createElement(a.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"useModal Hook"),e.createElement("p",null,"This modal automatically registered with the TaskBar when it mounted."),e.createElement("p",null,"The Modal component handles its own rendering - the useModal hook provides programmatic control.")))))},h={render:()=>e.createElement(N,null),parameters:{docs:{description:{story:"Basic example showing modal registration and programmatic control using the useModal hook."}}}},V=()=>{const{remove:p,minimize:c,restore:u,focus:r,add:d}=k(),m=()=>p("minimize-modal"),n=()=>{c("minimize-modal"),r("no-id")},t=()=>{u("minimize-modal"),r("minimize-modal")},s=()=>{d({id:"minimize-modal",title:"Minimize Example",icon:e.createElement(R,{variant:"16x16_4"}),hasButton:!0})},b=()=>{r("no-id")};return e.createElement(o,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(C,null),e.createElement(o,{display:"flex",gap:"10px",flexWrap:"wrap"},e.createElement(l,{onClick:n},"Minimize"),e.createElement(l,{onClick:t},"Restore"),e.createElement(l,{onClick:m},"Remove from TaskBar"),e.createElement(l,{onClick:s},"Add to TaskBar"),e.createElement(l,{onClick:b},"Remove Focus")),e.createElement(a,{id:"minimize-modal",icon:e.createElement(R,{variant:"16x16_4"}),title:"Minimize Example",titleBarOptions:[e.createElement(a.Minimize,{key:"minimize"}),e.createElement(E.Close,{key:"close",onClick:m})],dragOptions:{defaultPosition:{x:0,y:50}}},e.createElement(a.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Minimize & Restore"),e.createElement("p",null,"This modal demonstrates minimize/restore functionality:"),e.createElement(o,{as:"ul",my:"$8"},e.createElement("li",null,e.createElement("code",null,"minimize(id)")," - Hide modal, show in TaskBar"),e.createElement("li",null,e.createElement("code",null,"restore(id)")," - Show modal again"),e.createElement("li",null,e.createElement("code",null,"focus(id)")," - Bring modal to front")),e.createElement("p",null,"Try minimizing this modal and restoring it from the TaskBar or control buttons.")))))},f={render:()=>e.createElement(V,null),parameters:{docs:{description:{story:"Example showing minimize and restore functionality with programmatic control."}}}},M={"first-modal":e.createElement(W,{variant:"16x16_4"}),"second-modal":e.createElement(H,{variant:"16x16_4"}),"third-modal":e.createElement(U,{variant:"16x16_4"})},j=()=>{const{add:p,remove:c,minimize:u,restore:r,focus:d}=k(),m=t=>{c(t),u(t),d("no-id")},n=(t,s)=>()=>{switch(s){case"add":p({id:t,title:t,icon:M[t],hasButton:!0}),d(t),r(t);break;case"focus":d(t);break;case"minimize":u(t),d("no-id");break;case"restore":r(t),d(t);break;case"close":m(t);break}};return e.createElement(o,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(C,null),e.createElement(o,{display:"flex",flexDirection:"column",gap:"8px"},["first-modal","second-modal","third-modal"].map((t,s)=>e.createElement(o,{key:t,display:"flex",gap:"8px",alignItems:"center"},e.createElement("span",{style:{minWidth:"80px",fontSize:"14px"}},"Modal ",s+1,":"),e.createElement(l,{onClick:n(t,"focus")},"Focus"),e.createElement(l,{onClick:n(t,"minimize")},"Minimize"),e.createElement(l,{onClick:n(t,"restore")},"Restore"),e.createElement(l,{onClick:n(t,"close")},"Remove"),e.createElement(l,{onClick:n(t,"add")},"Add")))),e.createElement(a,{id:"first-modal",icon:M["first-modal"],title:"first-modal",dragOptions:{defaultPosition:{x:0,y:130}},titleBarOptions:[e.createElement(a.Minimize,{key:"minimize"}),e.createElement(E.Close,{key:"close",onClick:()=>m("first-modal")})]},e.createElement(a.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"First Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"first-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Each modal has a unique ID for programmatic control.")))),e.createElement(a,{id:"second-modal",icon:M["second-modal"],title:"second-modal",dragOptions:{defaultPosition:{x:320,y:130}},titleBarOptions:[e.createElement(a.Minimize,{key:"minimize"}),e.createElement(E.Close,{key:"close",onClick:()=>m("second-modal")})]},e.createElement(a.Content,{width:"340px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Second Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"second-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Multiple modals can coexist and be controlled independently.")))),e.createElement(a,{id:"third-modal",icon:M["third-modal"],title:"third-modal",dragOptions:{defaultPosition:{x:160,y:330}},titleBarOptions:[e.createElement(a.Minimize,{key:"minimize"}),e.createElement(E.Close,{key:"close",onClick:()=>m("third-modal")})]},e.createElement(a.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Third Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"third-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Focus management ensures proper z-index ordering.")))))},y={render:()=>e.createElement(j,null),parameters:{docs:{description:{story:"Example showing multiple modals with independent programmatic control."}}}},q=()=>{const{remove:p,minimize:c,restore:u,subscribe:r,add:d,focus:m}=k(),n=e.useRef(null),t=e.useRef(0),s=e.useCallback(w=>{if(n.current){const i=document.createElement("div");if(i.style.cssText=`
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        `,t.current+=1,i.textContent=`${t.current}. ${w}`,n.current.appendChild(i),n.current.scrollTop=n.current.scrollHeight,n.current.children.length>20){const g=n.current.firstChild;g&&n.current.removeChild(g)}}},[]),b=e.useCallback(()=>{n.current&&(n.current.innerHTML="",t.current=0)},[]);return e.useEffect(()=>{const w=[r(x.AddModal,({id:i,title:g})=>{s(`➕ Added: ${g} (${i})`)}),r(x.RemoveModal,({id:i})=>{s(`❌ Removed: ${i}`)}),r(x.MinimizeModal,({id:i})=>{s(`➖ Minimized: ${i}`)}),r(x.RestoreModal,({id:i})=>{s(`⬆️ Restored: ${i}`)}),r(x.ModalVisibilityChanged,({id:i})=>{s(`👁️ Focus changed: ${i}`)})];return()=>{w.forEach(i=>i())}},[r,s]),e.createElement(o,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(C,null),e.createElement(o,{display:"flex",gap:"10px",flexWrap:"wrap"},e.createElement(l,{onClick:()=>{c("event-modal"),m("no-id")}},"Minimize"),e.createElement(l,{onClick:()=>{u("event-modal"),m("event-modal")}},"Restore"),e.createElement(l,{onClick:()=>{c("event-modal"),p("event-modal"),m("no-id")}},"Remove"),e.createElement(l,{onClick:()=>d({id:"event-modal",title:"Event Modal",icon:e.createElement(z,{variant:"16x16_4"}),hasButton:!0})},"Add"),e.createElement(l,{onClick:()=>{m("no-id")}},"Remove focus"),e.createElement(l,{onClick:b},"Clear Log")),e.createElement(o,{display:"flex",gap:"16px"},e.createElement(a,{id:"event-modal",icon:e.createElement(z,{variant:"16x16_4"}),title:"Event Modal",titleBarOptions:[e.createElement(a.Minimize,{key:"minimize"}),e.createElement(E.Close,{key:"close",onClick:()=>{console.log("Closing event modal"),c("event-modal"),p("event-modal"),m("no-id")}})],dragOptions:{defaultPosition:{x:0,y:290}}},e.createElement(a.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(o,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Event Subscription"),e.createElement("p",null,"This example demonstrates event subscription:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"AddModal")," - Modal created"),e.createElement("li",null,e.createElement("code",null,"RemoveModal")," - Modal removed"),e.createElement("li",null,e.createElement("code",null,"MinimizeModal")," - Modal minimized"),e.createElement("li",null,e.createElement("code",null,"RestoreModal")," - Modal restored"),e.createElement("li",null,e.createElement("code",null,"ModalVisibilityChanged")," - Focus changed")),e.createElement("p",{style:{fontSize:"12px"}},"Events are logged in real-time using DOM manipulation to avoid re-render loops.")))),e.createElement(o,{display:"flex",flexDirection:"column",width:"320px",height:"200px",boxShadow:"$out",bgColor:"$material",p:"$8"},e.createElement(o,{as:"h4",fontSize:"14px",m:"$0",mb:"$8"},"Event Log"),e.createElement(o,{boxShadow:"$in",bgColor:"white",p:"$8",ref:n,overflow:"auto",backgroundColor:"#fafafa",flexGrow:1}))))},v={render:()=>e.createElement(q,null),parameters:{docs:{description:{story:"Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state."}}}};var B,D,T;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <BasicUsageDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Basic example showing modal registration and programmatic control using the useModal hook.'
      }
    }
  }
}`,...(T=(D=h.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var S,$,O;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <MinimizeRestoreDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing minimize and restore functionality with programmatic control.'
      }
    }
  }
}`,...(O=($=f.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var I,_,A;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <MultipleModalsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple modals with independent programmatic control.'
      }
    }
  }
}`,...(A=(_=y.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var F,P,L;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EventSubscriptionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state.'
      }
    }
  }
}`,...(L=(P=v.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const se=["BasicUsage","MinimizeRestore","MultipleModals","EventSubscription"];export{h as BasicUsage,v as EventSubscription,f as MinimizeRestore,y as MultipleModals,se as __namedExportsOrder,me as default};
