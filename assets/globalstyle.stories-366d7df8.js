import{j as e}from"./jsx-runtime-e5910377.js";import{r as F}from"./index-66a3a5c2.js";import{B as c}from"./Button-ab59f6ae.js";import{D as v}from"./Dropdown-448d8450.js";import{F as a}from"./Fieldset-8c79e49f.js";import{F as t}from"./Frame-ad175eaa.js";import{I as m}from"./Input-1747b4bf.js";import{T as C}from"./TextArea-25f673bf.js";import{c as T}from"./contract.css-24916a0d.js";import{u as G}from"./index-a3deabcc.js";import{t as q}from"./all-636aa7d5.js";import"./index-626ba1ae.js";import"./Button.css-afb77755.js";/* empty css                                */import"./Input.css-d0a177e5.js";/* empty css                              */const k=Object.keys(q),H={title:"GlobalStyle",tags:["autodocs"],parameters:{docs:{description:{component:`
The GlobalStyle component provides essential styling for React95 applications, including:

- **Fonts**: MS Sans Serif font family and React95 Video Numbers for authentic Windows 95 look
- **Scrollbars**: Custom styled scrollbars that match the Windows 95 aesthetic
- **Links**: Styled anchor tags with proper visited and hover states
- **CSS Reset**: Box-sizing and margin/padding normalization

## Installation & Usage

To use GlobalStyle in your project, import it in your main application file:

\`\`\`js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css'; // Choose your preferred theme
\`\`\`

**Note**: GlobalStyle should be imported **before** any theme to ensure proper styling cascade.

## What GlobalStyle Provides

### 1. Typography
- Sets MS Sans Serif as the default font family
- Normalizes font sizes and weights

### 2. Scrollbars
- Custom webkit scrollbar styling
- Windows 95-style scrollbar tracks and thumbs
- Directional arrow buttons with proper styling

### 3. Base Styles
- CSS reset for consistent rendering
- Proper box-sizing for all elements
- Link styling that matches the Windows 95 theme

### 4. Global Normalization
- Removes default margins and padding
- Sets consistent font rendering
- Establishes proper color inheritance

## Theme Integration

GlobalStyle works with all React95 themes. The styles automatically adapt to the selected theme's color scheme through CSS custom properties defined in the theme contract.
        `}}}},W=({speak:s})=>{const[l,p]=G(),[o,j]=F.useState("win95");return e.jsxs(t,{p:"$20",maxWidth:"800px",children:[e.jsx("h1",{children:"How to Use GlobalStyle"}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"1. Installation"}),e.jsx("p",{children:"GlobalStyle is included with @react95/core. No separate installation needed."})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"2. Import in Your App"}),e.jsx("p",{children:"Add this import to your main application file (usually App.js or index.js):"}),e.jsxs(t,{display:"flex",gap:"$4",children:[e.jsx(m,{w:"100%",fontFamily:"monospace",maxWidth:"300px",value:"import '@react95/core/GlobalStyle';"}),e.jsx(c,{onClick:()=>{p("import '@react95/core/GlobalStyle';"),s("Copied GlobalStyle import to clipboard!")},children:"Copy"})]})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"3. Choose a Theme"}),e.jsx("p",{children:"Import a theme after GlobalStyle to complete the setup:"}),e.jsx(t,{children:e.jsxs(a,{legend:"Select Theme",children:[e.jsx("p",{children:"Choose a theme from the dropdown below. This will apply the selected theme's styles globally."}),e.jsx(v,{value:o,onChange:$=>{const w=$.target.value;j(w)},options:k}),e.jsx("p",{children:"After selecting a theme, import it in your main file to apply the styles."}),e.jsxs(t,{mt:"$8",display:"flex",gap:"$4",children:[e.jsx(m,{fontFamily:"monospace",w:"100%",maxWidth:"300px",value:`import '@react95/core/themes/${o}.css';`}),e.jsx(c,{onClick:()=>{p(`import '@react95/core/themes/${o}.css';`),s(`Copied ${o} theme import to clipboard!`)},children:"Copy"})]})]})})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"4. Complete Example"}),e.jsx(C,{whiteSpace:"pre-line",rows:16,cols:50,fontFamily:"monospace",children:`// App.js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Button, Frame } from '@react95/core';

function App() {
  return (
    <Frame>
      <h1>My React95 App</h1>
      <Button>Click me!</Button>
    </Frame>
  );
}

export default App;`})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"5. Important Notes"}),e.jsxs(t,{as:"ul",pl:"$20",children:[e.jsx("li",{children:"Always import GlobalStyle before any theme"}),e.jsx("li",{children:"Only import GlobalStyle once in your application"}),e.jsx("li",{children:"GlobalStyle affects the entire document, not just React95 components"}),e.jsx("li",{children:"You can override specific styles if needed using CSS specificity"})]})]})]})},n={render:(s,{speak:l})=>e.jsx(W,{speak:l}),parameters:{docs:{description:{story:`
This story provides step-by-step instructions for implementing GlobalStyle in your React95 application.
Follow these steps to ensure proper styling and the authentic Windows 95 experience.
        `}}}},i={render:()=>e.jsxs(t,{maxWidth:"600px",children:[e.jsx(t,{mb:"$16",children:e.jsx("p",{children:"This demo shows how GlobalStyle affects various elements throughout your application. The styles are automatically applied globally when you import GlobalStyle."})}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$20",children:[e.jsxs(a,{legend:"Typography",children:[e.jsx(t,{as:"p",mb:"$12",children:"This text uses the MS Sans Serif font family provided by GlobalStyle. It includes proper font weights and spacing."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bold text"})," and ",e.jsx("em",{children:"italic text"})," are also properly styled."]})]}),e.jsxs(a,{legend:"Links",mt:"$18",children:[e.jsx("p",{children:e.jsx("a",{href:"https://react95.io",children:"This is a normal link"})}),e.jsx(t,{as:"p",mt:"$8",children:e.jsx("a",{href:"https://react95.io",style:{color:T.colors.anchorVisited},children:"This simulates a visited link"})})]}),e.jsx(a,{legend:"Scrollable Content",mt:"$18",children:e.jsxs(t,{h:"150px",overflow:"auto",bgColor:"$inputBackground",p:"$8",boxShadow:"$in",children:[e.jsx("p",{children:"This container demonstrates the custom scrollbar styling provided by GlobalStyle. The scrollbars have a Windows 95 aesthetic with proper track, thumb, and button styling."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."})]})})]})]})},r={render:()=>e.jsxs(t,{p:"$20",maxWidth:"800px",children:[e.jsx("h1",{children:"Font Families in GlobalStyle"}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"MS Sans Serif (Default)"}),e.jsx("p",{children:"This is the main font family used throughout React95 components. It provides the authentic Windows 95 look and feel."}),e.jsxs(t,{mt:"$12",display:"flex",flexDirection:"column",gap:"$8",children:[e.jsx(t,{fontSize:"16px",children:e.jsx("p",{children:"Larger text (16px)"})}),e.jsx(t,{fontSize:"12px",children:e.jsx("p",{children:"Standard text (12px)"})}),e.jsx(t,{fontSize:"10px",children:e.jsx("p",{children:"Small text (10px)"})})]})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"React95Video-Numbers"}),e.jsx("p",{children:"The React95Video-Numbers font was specifically designed for use in the Video component but feel free to use it anywhere you want."}),e.jsx(t,{mt:"$12",fontFamily:"React95Video-Numbers, monospace",fontSize:"24px",bgColor:"$canvas",color:"$canvasText",p:"$8",textAlign:"center",boxShadow:"$in",children:"01234567890"}),e.jsx(t,{mt:"$8",fontSize:"12px",children:e.jsx("p",{children:"Perfect for creating retro digital displays, counters, and terminal-like interfaces."})})]}),e.jsxs(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16",children:[e.jsx("h2",{children:"Font Weights"}),e.jsxs(t,{children:[e.jsx(t,{fontWeight:"normal",children:e.jsx("p",{children:"Normal weight text"})}),e.jsx(t,{fontWeight:"bold",children:e.jsx("p",{children:"Bold weight text"})}),e.jsx("p",{children:e.jsx("strong",{children:"Strong element (bold)"})}),e.jsx("p",{children:e.jsx("em",{children:"Emphasized element (italic)"})})]})]})]})};var d,h,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (_, {
    speak
  }) => <UsageInstructionsDemo speak={speak} />,
  parameters: {
    docs: {
      description: {
        story: \`
This story provides step-by-step instructions for implementing GlobalStyle in your React95 application.
Follow these steps to ensure proper styling and the authentic Windows 95 experience.
        \`
      }
    }
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <Frame maxWidth="600px">
        <Frame mb="$16">
          <p>
            This demo shows how GlobalStyle affects various elements throughout
            your application. The styles are automatically applied globally when
            you import GlobalStyle.
          </p>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$20">
          <Fieldset legend="Typography">
            <Frame as="p" mb="$12">
              This text uses the MS Sans Serif font family provided by
              GlobalStyle. It includes proper font weights and spacing.
            </Frame>
            <p>
              <strong>Bold text</strong> and <em>italic text</em> are also
              properly styled.
            </p>
          </Fieldset>

          <Fieldset legend="Links" mt="$18">
            <p>
              <a href="https://react95.io">This is a normal link</a>
            </p>
            <Frame as="p" mt="$8">
              <a href="https://react95.io" style={{
              color: contract.colors.anchorVisited
            }}>
                This simulates a visited link
              </a>
            </Frame>
          </Fieldset>

          <Fieldset legend="Scrollable Content" mt="$18">
            <Frame h="150px" overflow="auto" bgColor="$inputBackground" p="$8" boxShadow="$in">
              <p>
                This container demonstrates the custom scrollbar styling
                provided by GlobalStyle. The scrollbars have a Windows 95
                aesthetic with proper track, thumb, and button styling.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </Frame>
          </Fieldset>
        </Frame>
      </Frame>;
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,g,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Frame p="$20" maxWidth="800px">
        <h1>Font Families in GlobalStyle</h1>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>MS Sans Serif (Default)</h2>
          <p>
            This is the main font family used throughout React95 components. It
            provides the authentic Windows 95 look and feel.
          </p>
          <Frame mt="$12" display="flex" flexDirection="column" gap="$8">
            <Frame fontSize="16px">
              <p>Larger text (16px)</p>
            </Frame>
            <Frame fontSize="12px">
              <p>Standard text (12px)</p>
            </Frame>
            <Frame fontSize="10px">
              <p>Small text (10px)</p>
            </Frame>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>React95Video-Numbers</h2>
          <p>
            The React95Video-Numbers font was specifically designed for use in
            the Video component but feel free to use it anywhere you want.
          </p>
          <Frame mt="$12" fontFamily="React95Video-Numbers, monospace" fontSize="24px" bgColor="$canvas" color="$canvasText" p="$8" textAlign="center" boxShadow="$in">
            01234567890
          </Frame>
          <Frame mt="$8" fontSize="12px">
            <p>
              Perfect for creating retro digital displays, counters, and
              terminal-like interfaces.
            </p>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>Font Weights</h2>
          <Frame>
            <Frame fontWeight="normal">
              <p>Normal weight text</p>
            </Frame>
            <Frame fontWeight="bold">
              <p>Bold weight text</p>
            </Frame>
            <p>
              <strong>Strong element (bold)</strong>
            </p>
            <p>
              <em>Emphasized element (italic)</em>
            </p>
          </Frame>
        </Frame>
      </Frame>;
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const J=["UsageInstructions","Overview","FontsDemo"];export{r as FontsDemo,i as Overview,n as UsageInstructions,J as __namedExportsOrder,H as default};
