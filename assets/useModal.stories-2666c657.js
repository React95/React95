import{r as e}from"./index-9fa1aa67.js";import{u as y,M as n,a as f}from"./Modal-70b2fd91.js";import{B as a}from"./Button-e77e23f5.js";import{F as t}from"./Frame-d1abb87e.js";import{T as k}from"./TaskBar-d37b1dcb.js";import{T as x}from"./TitleBar-cd22ff01.js";import{i as B,j as w,k as H,R as W,W as N}from"./Write1-9f388b9d.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-923230fa.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";import"./Tooltip-210aa1f5.js";/* empty css                               *//* empty css                               */const ne={title:"Hooks/useModal",parameters:{docs:{description:{component:`
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
        `}}},tags:["autodocs"]},g={render:()=>{const{remove:p}=y(),m=()=>{p("basic-modal")};return e.createElement(t,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(k,null),e.createElement(t,{display:"flex",gap:"10px"},e.createElement(a,{onClick:m},"Remove from TaskBar")),e.createElement(n,{id:"basic-modal",icon:e.createElement(B,{variant:"16x16_4"}),title:"Basic Modal",titleBarOptions:e.createElement(x.Close,{onClick:m}),dragOptions:{defaultPosition:{x:0,y:50}}},e.createElement(n.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"useModal Hook"),e.createElement("p",null,"This modal automatically registered with the TaskBar when it mounted."),e.createElement("p",null,"The Modal component handles its own rendering - the useModal hook provides programmatic control.")))))},parameters:{docs:{description:{story:"Basic example showing modal registration and programmatic control using the useModal hook."}}}},M={render:()=>{const{remove:p,minimize:m,restore:u,focus:r,add:c}=y(),d=()=>p("minimize-modal"),i=()=>{m("minimize-modal"),r("no-id")},o=()=>{u("minimize-modal"),r("minimize-modal")},s=()=>{c({id:"minimize-modal",title:"Minimize Example",icon:e.createElement(w,{variant:"16x16_4"}),hasButton:!0})},b=()=>{r("no-id")};return e.createElement(t,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(k,null),e.createElement(t,{display:"flex",gap:"10px",flexWrap:"wrap"},e.createElement(a,{onClick:i},"Minimize"),e.createElement(a,{onClick:o},"Restore"),e.createElement(a,{onClick:d},"Remove from TaskBar"),e.createElement(a,{onClick:s},"Add to TaskBar"),e.createElement(a,{onClick:b},"Remove Focus")),e.createElement(n,{id:"minimize-modal",icon:e.createElement(w,{variant:"16x16_4"}),title:"Minimize Example",titleBarOptions:[e.createElement(n.Minimize,{key:"minimize"}),e.createElement(x.Close,{key:"close",onClick:d})],dragOptions:{defaultPosition:{x:0,y:50}}},e.createElement(n.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Minimize & Restore"),e.createElement("p",null,"This modal demonstrates minimize/restore functionality:"),e.createElement(t,{as:"ul",my:"$8"},e.createElement("li",null,e.createElement("code",null,"minimize(id)")," - Hide modal, show in TaskBar"),e.createElement("li",null,e.createElement("code",null,"restore(id)")," - Show modal again"),e.createElement("li",null,e.createElement("code",null,"focus(id)")," - Bring modal to front")),e.createElement("p",null,"Try minimizing this modal and restoring it from the TaskBar or control buttons.")))))},parameters:{docs:{description:{story:"Example showing minimize and restore functionality with programmatic control."}}}},v={"first-modal":e.createElement(H,{variant:"16x16_4"}),"second-modal":e.createElement(W,{variant:"16x16_4"}),"third-modal":e.createElement(N,{variant:"16x16_4"})},E={render:()=>{const{add:p,remove:m,minimize:u,restore:r,focus:c}=y(),d=o=>{m(o),u(o),c("no-id")},i=(o,s)=>()=>{switch(s){case"add":p({id:o,title:o,icon:v[o],hasButton:!0}),c(o),r(o);break;case"focus":c(o);break;case"minimize":u(o),c("no-id");break;case"restore":r(o),c(o);break;case"close":d(o);break}};return e.createElement(t,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(k,null),e.createElement(t,{display:"flex",flexDirection:"column",gap:"8px"},["first-modal","second-modal","third-modal"].map((o,s)=>e.createElement(t,{key:o,display:"flex",gap:"8px",alignItems:"center"},e.createElement("span",{style:{minWidth:"80px",fontSize:"14px"}},"Modal ",s+1,":"),e.createElement(a,{onClick:i(o,"focus")},"Focus"),e.createElement(a,{onClick:i(o,"minimize")},"Minimize"),e.createElement(a,{onClick:i(o,"restore")},"Restore"),e.createElement(a,{onClick:i(o,"close")},"Remove"),e.createElement(a,{onClick:i(o,"add")},"Add")))),e.createElement(n,{id:"first-modal",icon:v["first-modal"],title:"first-modal",dragOptions:{defaultPosition:{x:0,y:130}},titleBarOptions:[e.createElement(n.Minimize,{key:"minimize"}),e.createElement(x.Close,{key:"close",onClick:()=>d("first-modal")})]},e.createElement(n.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"First Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"first-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Each modal has a unique ID for programmatic control.")))),e.createElement(n,{id:"second-modal",icon:v["second-modal"],title:"second-modal",dragOptions:{defaultPosition:{x:320,y:130}},titleBarOptions:[e.createElement(n.Minimize,{key:"minimize"}),e.createElement(x.Close,{key:"close",onClick:()=>d("second-modal")})]},e.createElement(n.Content,{width:"340px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Second Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"second-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Multiple modals can coexist and be controlled independently.")))),e.createElement(n,{id:"third-modal",icon:v["third-modal"],title:"third-modal",dragOptions:{defaultPosition:{x:160,y:330}},titleBarOptions:[e.createElement(n.Minimize,{key:"minimize"}),e.createElement(x.Close,{key:"close",onClick:()=>d("third-modal")})]},e.createElement(n.Content,{width:"300px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Third Modal"),e.createElement("p",null,"ID: ",e.createElement("code",null,"third-modal")),e.createElement("p",{style:{fontSize:"12px"}},"Focus management ensures proper z-index ordering.")))))},parameters:{docs:{description:{story:"Example showing multiple modals with independent programmatic control."}}}},C={render:()=>{const{remove:p,minimize:m,restore:u,subscribe:r,add:c,focus:d}=y(),i=e.useRef(null),o=e.useRef(0),s=e.useCallback(z=>{if(i.current){const l=document.createElement("div");if(l.style.cssText=`
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        `,o.current+=1,l.textContent=`${o.current}. ${z}`,i.current.appendChild(l),i.current.scrollTop=i.current.scrollHeight,i.current.children.length>20){const h=i.current.firstChild;h&&i.current.removeChild(h)}}},[]),b=e.useCallback(()=>{i.current&&(i.current.innerHTML="",o.current=0)},[]);return e.useEffect(()=>{const z=[r(f.AddModal,({id:l,title:h})=>{s(`➕ Added: ${h} (${l})`)}),r(f.RemoveModal,({id:l})=>{s(`❌ Removed: ${l}`)}),r(f.MinimizeModal,({id:l})=>{s(`➖ Minimized: ${l}`)}),r(f.RestoreModal,({id:l})=>{s(`⬆️ Restored: ${l}`)}),r(f.ModalVisibilityChanged,({id:l})=>{s(`👁️ Focus changed: ${l}`)})];return()=>{z.forEach(l=>l())}},[r,s]),e.createElement(t,{display:"flex",flexDirection:"column",gap:"16px",p:"20px"},e.createElement(k,null),e.createElement(t,{display:"flex",gap:"10px",flexWrap:"wrap"},e.createElement(a,{onClick:()=>{m("event-modal"),d("no-id")}},"Minimize"),e.createElement(a,{onClick:()=>{u("event-modal"),d("event-modal")}},"Restore"),e.createElement(a,{onClick:()=>{m("event-modal"),p("event-modal"),d("no-id")}},"Remove"),e.createElement(a,{onClick:()=>c({id:"event-modal",title:"Event Modal",icon:e.createElement(B,{variant:"16x16_4"}),hasButton:!0})},"Add"),e.createElement(a,{onClick:()=>{d("no-id")}},"Remove focus"),e.createElement(a,{onClick:b},"Clear Log")),e.createElement(t,{display:"flex",gap:"16px"},e.createElement(n,{id:"event-modal",icon:e.createElement(B,{variant:"16x16_4"}),title:"Event Modal",titleBarOptions:[e.createElement(n.Minimize,{key:"minimize"}),e.createElement(x.Close,{key:"close",onClick:()=>{console.log("Closing event modal"),m("event-modal"),p("event-modal"),d("no-id")}})],dragOptions:{defaultPosition:{x:0,y:290}}},e.createElement(n.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(t,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Event Subscription"),e.createElement("p",null,"This example demonstrates event subscription:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"AddModal")," - Modal created"),e.createElement("li",null,e.createElement("code",null,"RemoveModal")," - Modal removed"),e.createElement("li",null,e.createElement("code",null,"MinimizeModal")," - Modal minimized"),e.createElement("li",null,e.createElement("code",null,"RestoreModal")," - Modal restored"),e.createElement("li",null,e.createElement("code",null,"ModalVisibilityChanged")," - Focus changed")),e.createElement("p",{style:{fontSize:"12px"}},"Events are logged in real-time using DOM manipulation to avoid re-render loops.")))),e.createElement(t,{display:"flex",flexDirection:"column",width:"320px",height:"200px",boxShadow:"$out",bgColor:"$material",p:"$8"},e.createElement(t,{as:"h4",fontSize:"14px",m:"$0",mb:"$8"},"Event Log"),e.createElement(t,{boxShadow:"$in",bgColor:"white",p:"$8",ref:i,overflow:"auto",backgroundColor:"#fafafa",flexGrow:1}))))},parameters:{docs:{description:{story:"Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state."}}}};var R,T,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const {
      remove
    } = useModal();
    const closeModal = () => {
      remove('basic-modal');
    };
    return <Frame display="flex" flexDirection="column" gap="16px" p="20px">
        <TaskBar />

        <Frame display="flex" gap="10px">
          <Button onClick={closeModal}>Remove from TaskBar</Button>
        </Frame>

        <Modal id="basic-modal" icon={<Computer variant="16x16_4" />} title="Basic Modal" titleBarOptions={<TitleBar.Close onClick={closeModal} />} dragOptions={{
        defaultPosition: {
          x: 0,
          y: 50
        }
      }}>
          <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
            <Frame as="div" display="flex" flexDirection="column" gap="8px">
              <h4>useModal Hook</h4>
              <p>
                This modal automatically registered with the TaskBar when it
                mounted.
              </p>
              <p>
                The Modal component handles its own rendering - the useModal
                hook provides programmatic control.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example showing modal registration and programmatic control using the useModal hook.'
      }
    }
  }
}`,...(F=(T=g.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var S,$,D;M.parameters={...M.parameters,docs:{...(S=M.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      remove,
      minimize,
      restore,
      focus,
      add
    } = useModal();
    const closeModal = () => remove('minimize-modal');
    const minimizeModal = () => {
      minimize('minimize-modal');
      focus('no-id');
    };
    const restoreModal = () => {
      restore('minimize-modal');
      focus('minimize-modal');
    };
    const addToTaskBar = () => {
      add({
        id: 'minimize-modal',
        title: 'Minimize Example',
        icon: <Mmsys113 variant="16x16_4" />,
        hasButton: true
      });
    };
    const removeFocus = () => {
      focus('no-id');
    };
    return <Frame display="flex" flexDirection="column" gap="16px" p="20px">
        <TaskBar />

        <Frame display="flex" gap="10px" flexWrap="wrap">
          <Button onClick={minimizeModal}>Minimize</Button>
          <Button onClick={restoreModal}>Restore</Button>
          <Button onClick={closeModal}>Remove from TaskBar</Button>
          <Button onClick={addToTaskBar}>Add to TaskBar</Button>
          <Button onClick={removeFocus}>Remove Focus</Button>
        </Frame>

        <Modal id="minimize-modal" icon={<Mmsys113 variant="16x16_4" />} title="Minimize Example" titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={closeModal} />]} dragOptions={{
        defaultPosition: {
          x: 0,
          y: 50
        }
      }}>
          <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
            <Frame display="flex" flexDirection="column" gap="8px">
              <h4>Minimize & Restore</h4>
              <p>This modal demonstrates minimize/restore functionality:</p>
              <Frame as="ul" my="$8">
                <li>
                  <code>minimize(id)</code> - Hide modal, show in TaskBar
                </li>
                <li>
                  <code>restore(id)</code> - Show modal again
                </li>
                <li>
                  <code>focus(id)</code> - Bring modal to front
                </li>
              </Frame>
              <p>
                Try minimizing this modal and restoring it from the TaskBar or
                control buttons.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing minimize and restore functionality with programmatic control.'
      }
    }
  }
}`,...(D=($=M.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var O,L,I;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const {
      add,
      remove,
      minimize,
      restore,
      focus
    } = useModal();
    const removeModal = (id: string) => {
      remove(id);
      minimize(id);
      focus('no-id');
    };
    const controlModal = (id: keyof typeof MODAL_ICONS, action: 'add' | 'focus' | 'minimize' | 'restore' | 'close') => () => {
      switch (action) {
        case 'add':
          add({
            id,
            title: id,
            icon: MODAL_ICONS[id],
            hasButton: true
          });
          focus(id);
          restore(id);
          break;
        case 'focus':
          focus(id);
          break;
        case 'minimize':
          minimize(id);
          focus('no-id');
          break;
        case 'restore':
          restore(id);
          focus(id);
          break;
        case 'close':
          removeModal(id);
          break;
      }
    };
    return <Frame display="flex" flexDirection="column" gap="16px" p="20px">
        <TaskBar />

        <Frame display="flex" flexDirection="column" gap="8px">
          {(['first-modal', 'second-modal', 'third-modal'] as const).map((id, index) => <Frame key={id} display="flex" gap="8px" alignItems="center">
                <span style={{
            minWidth: '80px',
            fontSize: '14px'
          }}>
                  Modal {index + 1}:
                </span>
                <Button onClick={controlModal(id, 'focus')}>Focus</Button>
                <Button onClick={controlModal(id, 'minimize')}>Minimize</Button>
                <Button onClick={controlModal(id, 'restore')}>Restore</Button>
                <Button onClick={controlModal(id, 'close')}>Remove</Button>
                <Button onClick={controlModal(id, 'add')}>Add</Button>
              </Frame>)}
        </Frame>

        <Modal id="first-modal" icon={MODAL_ICONS['first-modal']} title="first-modal" dragOptions={{
        defaultPosition: {
          x: 0,
          y: 130
        }
      }} titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={() => removeModal('first-modal')} />]}>
          <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
            <Frame as="div" display="flex" flexDirection="column" gap="8px">
              <h4>First Modal</h4>
              <p>
                ID: <code>first-modal</code>
              </p>
              <p style={{
              fontSize: '12px'
            }}>
                Each modal has a unique ID for programmatic control.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>

        <Modal id="second-modal" icon={MODAL_ICONS['second-modal']} title="second-modal" dragOptions={{
        defaultPosition: {
          x: 320,
          y: 130
        }
      }} titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={() => removeModal('second-modal')} />]}>
          <Modal.Content width="340px" boxShadow="$in" bgColor="white" p="16px">
            <Frame as="div" display="flex" flexDirection="column" gap="8px">
              <h4>Second Modal</h4>
              <p>
                ID: <code>second-modal</code>
              </p>
              <p style={{
              fontSize: '12px'
            }}>
                Multiple modals can coexist and be controlled independently.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>

        <Modal id="third-modal" icon={MODAL_ICONS['third-modal']} title="third-modal" dragOptions={{
        defaultPosition: {
          x: 160,
          y: 330
        }
      }} titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={() => removeModal('third-modal')} />]}>
          <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
            <Frame as="div" display="flex" flexDirection="column" gap="8px">
              <h4>Third Modal</h4>
              <p>
                ID: <code>third-modal</code>
              </p>
              <p style={{
              fontSize: '12px'
            }}>
                Focus management ensures proper z-index ordering.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple modals with independent programmatic control.'
      }
    }
  }
}`,...(I=(L=E.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var A,_,P;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const {
      remove,
      minimize,
      restore,
      subscribe,
      add,
      focus
    } = useModal();
    const eventLogRef = React.useRef<HTMLDivElement>(null);
    const eventCountRef = React.useRef(0);

    // Helper function to add events to the display without causing re-renders
    const addEventToLog = React.useCallback((eventText: string) => {
      if (eventLogRef.current) {
        const eventItem = document.createElement('div');
        eventItem.style.cssText = \`
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        \`;
        eventCountRef.current += 1;
        eventItem.textContent = \`\${eventCountRef.current}. \${eventText}\`;
        eventLogRef.current.appendChild(eventItem);

        // Auto-scroll to bottom
        eventLogRef.current.scrollTop = eventLogRef.current.scrollHeight;

        // Keep only last 20 events to prevent memory issues
        if (eventLogRef.current.children.length > 20) {
          const firstChild = eventLogRef.current.firstChild;
          if (firstChild) {
            eventLogRef.current.removeChild(firstChild);
          }
        }
      }
    }, []);
    const clearEventLog = React.useCallback(() => {
      if (eventLogRef.current) {
        eventLogRef.current.innerHTML = '';
        eventCountRef.current = 0;
      }
    }, []);
    React.useEffect(() => {
      const unsubscribes = [subscribe(ModalEvents.AddModal, ({
        id,
        title
      }) => {
        addEventToLog(\`➕ Added: \${title} (\${id})\`);
      }), subscribe(ModalEvents.RemoveModal, ({
        id
      }) => {
        addEventToLog(\`❌ Removed: \${id}\`);
      }), subscribe(ModalEvents.MinimizeModal, ({
        id
      }) => {
        addEventToLog(\`➖ Minimized: \${id}\`);
      }), subscribe(ModalEvents.RestoreModal, ({
        id
      }) => {
        addEventToLog(\`⬆️ Restored: \${id}\`);
      }), subscribe(ModalEvents.ModalVisibilityChanged, ({
        id
      }) => {
        addEventToLog(\`👁️ Focus changed: \${id}\`);
      })];
      return () => {
        unsubscribes.forEach(unsubscribe => unsubscribe());
      };
    }, [subscribe, addEventToLog]);
    return <Frame display="flex" flexDirection="column" gap="16px" p="20px">
        <TaskBar />
        <Frame display="flex" gap="10px" flexWrap="wrap">
          <Button onClick={() => {
          minimize('event-modal');
          focus('no-id');
        }}>
            Minimize
          </Button>
          <Button onClick={() => {
          restore('event-modal');
          focus('event-modal');
        }}>
            Restore
          </Button>
          <Button onClick={() => {
          minimize('event-modal');
          remove('event-modal');
          focus('no-id');
        }}>
            Remove
          </Button>
          <Button onClick={() => add({
          id: 'event-modal',
          title: 'Event Modal',
          icon: <Computer variant="16x16_4" />,
          hasButton: true
        })}>
            Add
          </Button>
          <Button onClick={() => {
          focus('no-id');
        }}>
            Remove focus
          </Button>
          <Button onClick={clearEventLog}>Clear Log</Button>
        </Frame>

        <Frame display="flex" gap="16px">
          <Modal id="event-modal" icon={<Computer variant="16x16_4" />} title="Event Modal" titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={() => {
          console.log('Closing event modal');
          minimize('event-modal');
          remove('event-modal');
          focus('no-id');
        }} />]} dragOptions={{
          defaultPosition: {
            x: 0,
            y: 290
          }
        }}>
            <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
              <Frame as="div" display="flex" flexDirection="column" gap="8px">
                <h4>Event Subscription</h4>
                <p>This example demonstrates event subscription:</p>
                <ul>
                  <li>
                    <code>AddModal</code> - Modal created
                  </li>
                  <li>
                    <code>RemoveModal</code> - Modal removed
                  </li>
                  <li>
                    <code>MinimizeModal</code> - Modal minimized
                  </li>
                  <li>
                    <code>RestoreModal</code> - Modal restored
                  </li>
                  <li>
                    <code>ModalVisibilityChanged</code> - Focus changed
                  </li>
                </ul>
                <p style={{
                fontSize: '12px'
              }}>
                  Events are logged in real-time using DOM manipulation to avoid
                  re-render loops.
                </p>
              </Frame>
            </Modal.Content>
          </Modal>

          <Frame display="flex" flexDirection="column" width="320px" height="200px" boxShadow="$out" bgColor="$material" p="$8">
            <Frame as="h4" fontSize="14px" m="$0" mb="$8">
              Event Log
            </Frame>
            <Frame boxShadow="$in" bgColor="white" p="$8" ref={eventLogRef} overflow="auto" backgroundColor="#fafafa" flexGrow={1} />
          </Frame>
        </Frame>
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state.'
      }
    }
  }
}`,...(P=(_=C.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const ae=["BasicUsage","MinimizeRestore","MultipleModals","EventSubscription"];export{g as BasicUsage,C as EventSubscription,M as MinimizeRestore,E as MultipleModals,ae as __namedExportsOrder,ne as default};
