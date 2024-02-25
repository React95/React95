import React from 'react';

import * as themes from '../../../../components/ThemeProvider/theme.css';
// import { Button, Frame } from '../../../../components';

console.log({ themes });

// const ThemeWindow = ({ name, changeTheme }) => (
//   <Frame width="auto" m="$10">
//     <Frame p="$4" m="$2" bg="$headerBackground" color="$headerText">
//       {name}
//     </Frame>
//     <Frame p="$10">
//       <Button
//         onClick={() => {
//           changeTheme({ selectedTheme: name });
//         }}
//       >
//         {name}
//       </Button>
//     </Frame>
//   </Frame>
// );

export const ThemePanel = ({ api }) => (
  <div style={{ padding: '12px' }}>
    <h1 style={{ marginBottom: '12px' }}>Pick a theme below</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* {Object.keys(themes).map(name => (
        <div className={name} key={name}>
          <ThemeWindow name={name} changeTheme={api.updateGlobals} />
        </div>
      ))} */}
    </div>
  </div>
);
