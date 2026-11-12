import{j as t,a as o}from"./iframe-DOI3xaEb.js";import{S,D as f}from"./Write1-DMeiaW4j.js";import{T as a}from"./TitleBar-Cjt5OCUf.js";import{t as i}from"./theme-color-Bor3p02p.js";const{expect:s,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"TitleBar",component:a,tags:["autodocs"],args:{active:!0,title:"UNKNOWN.EXE"},argTypes:{title:{control:"text"}}},w=e=>`${i(e)} 1px 0px 0px`,c={render:e=>t.jsx(a,{width:"200px",...e}),play:async({args:e,canvas:n})=>{const r=n.getByText(e.title).parentElement;await s(r).toHaveStyle({backgroundColor:i(o.colors.headerBackground),color:i(o.colors.headerText)}),await s(n.getByText(e.title)).toHaveStyle({color:i(o.colors.headerText),textShadow:w(o.colors.headerText)})},parameters:{design:{disabled:!0}}},l={args:{active:!1},render:e=>t.jsx(a,{width:"200px",...e}),play:async({args:e,canvas:n})=>{const r=n.getByText(e.title).parentElement;await s(r).toHaveStyle({backgroundColor:i(o.colors.headerNotActiveBackground),color:i(o.colors.headerNotActiveText)}),await s(n.getByText(e.title)).toHaveStyle({color:i(o.colors.headerNotActiveText),textShadow:w(o.colors.headerNotActiveText)})}},d={args:{title:"untitled - Paint"},render:e=>t.jsx(a,{...e,icon:t.jsx(f,{variant:"16x16_4"}),width:"300px",children:t.jsxs(a.OptionsBox,{children:[t.jsx(a.Option,{as:"a",href:"https://github.com/React95/React95","aria-label":"React95 on GitHub",children:t.jsx(S,{variant:"16x16_4"})}),t.jsx(a.Help,{}),t.jsx(a.Maximize,{}),t.jsx(a.Minimize,{}),t.jsx(a.Restore,{}),t.jsx(a.Close,{})]})}),play:async({args:e,canvas:n})=>{const r=n.getByText(e.title).parentElement;await s(r.querySelector(":scope > svg")).toBeInTheDocument();for(const b of["help","maximize","minimize","restore","close"])await s(p(r).getByRole("button",{name:b})).toBeEnabled();await s(p(r).getByRole("link",{name:"React95 on GitHub"})).toHaveAttribute("href","https://github.com/React95/React95")}},j=["Simple","Inactive","Complete"];var h,x,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an active title bar uses the theme's header colors
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerBackground),
      color: themeColor(contract.colors.headerText)
    });

    // the title takes the bar's color and draws a 1px shadow in it
    await expect(canvas.getByText(args.title)).toHaveStyle({
      color: themeColor(contract.colors.headerText),
      textShadow: letterShadow(contract.colors.headerText)
    });
  },
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(m=(x=c.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,B,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    active: false
  },
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an inactive one, the theme's colors for a header out of focus
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerNotActiveBackground),
      color: themeColor(contract.colors.headerNotActiveText)
    });

    // same for the inactive token
    await expect(canvas.getByText(args.title)).toHaveStyle({
      color: themeColor(contract.colors.headerNotActiveText),
      textShadow: letterShadow(contract.colors.headerNotActiveText)
    });
  }
}`,...(u=(B=l.parameters)==null?void 0:B.docs)==null?void 0:u.source}}};var T,y,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'untitled - Paint'
  },
  render: args => <TitleBar {...args} icon={<Doc variant="16x16_4" />} width="300px">
      <TitleBar.OptionsBox>
        <TitleBar.Option as="a" href="https://github.com/React95/React95" aria-label="React95 on GitHub">
          <Star variant="16x16_4" />
        </TitleBar.Option>
        <TitleBar.Help />
        <TitleBar.Maximize />
        <TitleBar.Minimize />
        <TitleBar.Restore />
        <TitleBar.Close />
      </TitleBar.OptionsBox>
    </TitleBar>,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement!;

    // the icon is shown next to the title (the options have icons too, so
    // only the bar's own children count)
    await expect(titleBar.querySelector(':scope > svg')).toBeInTheDocument();

    // the ready-made options are buttons named after what they do
    for (const option of ['help', 'maximize', 'minimize', 'restore', 'close']) {
      await expect(within(titleBar).getByRole('button', {
        name: option
      })).toBeEnabled();
    }

    // an option can also be a link (\`as="a"\`), and an icon-only link needs
    // an accessible name
    await expect(within(titleBar).getByRole('link', {
      name: 'React95 on GitHub'
    })).toHaveAttribute('href', 'https://github.com/React95/React95');
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const E=Object.freeze(Object.defineProperty({__proto__:null,Complete:d,Inactive:l,Simple:c,__namedExportsOrder:j,default:R},Symbol.toStringTag,{value:"Module"}));export{E as T};
