import{j as t}from"./iframe-DOI3xaEb.js";import{T as b,a as y}from"./Tabs-CgvTCOlk.js";import{C as n}from"./Checkbox-D0Qev9UL.js";/* empty css                              */import{D as w}from"./Dropdown-BYMu4G0q.js";import{F as m}from"./Fieldset-Rm-vixwv.js";import{I as u}from"./Input-BtsC6F9V.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,f={title:"Tabs, Tab",component:y,tags:["autodocs"],subcomponents:{Tab:b},args:{defaultActiveTab:"Compatibility"},argTypes:{defaultActiveTab:{control:"select",options:["General","Compatibility"]}}},l={render:c=>t.jsxs(y,{width:"350px",...c,children:[t.jsxs(b,{title:"General",children:[t.jsxs(m,{legend:"Logon validation",style:{marginBottom:"1em"},children:[t.jsx(n,{readOnly:!0,checked:!0,children:"Log on to Windows NT domain"}),t.jsx("br",{}),t.jsx("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),t.jsx("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),t.jsx(u,{style:{width:180,marginLeft:22},"aria-label":"Windows NT domain"})]}),t.jsxs(m,{legend:"Network logon options",children:[t.jsx(n,{children:"Quick logon"}),t.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),t.jsx(n,{children:"Logon and restore network connections"}),t.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),t.jsxs(b,{title:"Compatibility",children:[t.jsx("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),t.jsxs(m,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[t.jsx(n,{readOnly:!0,checked:!0,children:"Run this program in compatibility mode for:"}),t.jsx(w,{style:{width:200},options:["Windows 95"],"aria-label":"Run this program in compatibility mode for"})]}),t.jsxs(m,{legend:"Display Settings",children:[t.jsx(n,{children:"Run in 256 colors"}),t.jsx(n,{children:"Run in 640 x 480 screen resolution"}),t.jsx(n,{children:"Disable visual themes"})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("p",{children:["Learn more about"," ",t.jsx("a",{href:"https://react95.io",children:"program compatibility."})]})]})]},c.defaultActiveTab),play:async({args:c,canvas:d,userEvent:p})=>{const o={General:"Logon validation",Compatibility:"Compatibility mode"},a=c.defaultActiveTab,r=a==="General"?"Compatibility":"General",i=d.getByRole("tablist").nextElementSibling;await e(i).toHaveTextContent(o[a]),await e(i).not.toHaveTextContent(o[r]),await p.click(d.getByText(r)),await e(i).toHaveTextContent(o[r]),await e(i).not.toHaveTextContent(o[a]);const s=()=>d.getByRole("tab",{selected:!0});await e(s()).toHaveTextContent(r),await e(s()).toHaveAttribute("tabindex","0"),await e(d.getByRole("tabpanel")).toHaveAttribute("aria-labelledby",s().id),s().focus(),await p.keyboard("{ArrowLeft}"),await e(s()).toHaveTextContent(a),await e(i).toHaveTextContent(o[a]),await e(i).not.toHaveTextContent(o[r])},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}},T=["Simple"];var h,g,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args =>
  // \`defaultActiveTab\` is only read on mount, so a new value remounts Tabs
  <Tabs key={args.defaultActiveTab} width="350px" {...args}>
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{
        marginBottom: '1em'
      }}>
          <Checkbox readOnly checked>
            Log on to Windows NT domain
          </Checkbox>
          <br />
          <p style={{
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log on, your password will be verified in a Windows NT
            domain.
          </p>
          <p style={{
          marginBottom: 4,
          marginLeft: 22
        }}>Windows NT domain:</p>
          <Input style={{
          width: 180,
          marginLeft: 22
        }} aria-label="Windows NT domain" />
        </Fieldset>

        <Fieldset legend="Network logon options">
          <Checkbox>Quick logon</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            Windows logs you onto the network, but network drives are not
            reconnected until you use them.
          </p>
          <Checkbox>Logon and restore network connections</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log onto the network, Windows verifies that each network
            drive is ready to use.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Compatibility">
        <p style={{
        marginTop: 0,
        marginBottom: '1.6em'
      }}>
          If you have problems with this program and it worked correctly on an
          earlier version of Windows, select the compatibility mode that matches
          that earlier version.
        </p>

        <Fieldset legend="Compatibility mode" style={{
        marginBottom: '1.6em'
      }}>
          <Checkbox readOnly checked>
            Run this program in compatibility mode for:
          </Checkbox>
          <Dropdown style={{
          width: 200
        }} options={['Windows 95']} aria-label="Run this program in compatibility mode for" />
        </Fieldset>

        <Fieldset legend="Display Settings">
          <Checkbox>Run in 256 colors</Checkbox>
          <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
          <Checkbox>Disable visual themes</Checkbox>
        </Fieldset>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Learn more about{' '}
          <a href="https://react95.io">program compatibility.</a>
        </p>
      </Tab>
    </Tabs>,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // a fieldset only one of the tabs has, to tell which content is shown
    const contentOf = {
      General: 'Logon validation',
      Compatibility: 'Compatibility mode'
    };
    const first = args.defaultActiveTab as keyof typeof contentOf;
    const other = first === 'General' ? 'Compatibility' : 'General';
    // the tabs are a tablist, and the active tab's content comes right after it
    const content = canvas.getByRole('tablist').nextElementSibling;

    // the tab from \`defaultActiveTab\` starts active, showing only its content
    await expect(content).toHaveTextContent(contentOf[first]);
    await expect(content).not.toHaveTextContent(contentOf[other]);
    await userEvent.click(canvas.getByText(other));

    // clicking another tab shows its content instead
    await expect(content).toHaveTextContent(contentOf[other]);
    await expect(content).not.toHaveTextContent(contentOf[first]);

    // the tablist follows the WAI-ARIA tabs pattern
    const selectedTab = () => canvas.getByRole('tab', {
      selected: true
    });
    await expect(selectedTab()).toHaveTextContent(other);
    await expect(selectedTab()).toHaveAttribute('tabindex', '0');
    await expect(canvas.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', selectedTab().id);

    // keyboard: focusing the selected tab and pressing ArrowLeft moves to
    // (and selects) the previous tab, switching the shown content
    selectedTab().focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(selectedTab()).toHaveTextContent(first);
    await expect(content).toHaveTextContent(contentOf[first]);
    await expect(content).not.toHaveTextContent(contentOf[other]);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16'
    }
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,Simple:l,__namedExportsOrder:T,default:f},Symbol.toStringTag,{value:"Module"}));export{A as T};
