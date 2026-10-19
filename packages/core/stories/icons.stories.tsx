import type { Meta, StoryObj } from '@storybook/react-vite';
import copy from 'copy-to-clipboard';
import * as React from 'react';

import { Frame, Button } from '../components';

import type * as Icons from '@react95/icons';
import { icons } from '@react95/icons/src/iconDemos';

import * as styles from './icons.stories.css';

export default {
  title: 'Icon',
  // the icons come from @react95/icons, which has its own tests
  tags: ['!test'],
  // axe takes seconds on ~1800 buttons and freezes the UI, so it runs on demand
  globals: { a11y: { manual: true } },
} satisfies Meta;

type Story = StoryObj<unknown>;

type Icon = (typeof icons)[number];

const IconGrid = ({
  icons,
  speak,
}: {
  icons: Icon[];
  speak: (message: string) => void;
}) => {
  const copyToClipboard = (componentName: string, variantName: string) => {
    const text = `<${componentName} variant="${variantName}"/>`;
    copy(text);

    speak('Copied to clipboard!');
  };

  return (
    <div>
      <p>We have, currently, {icons.length} icons</p>
      <Frame
        p="$12"
        display="flex"
        flexWrap="wrap"
        gap="4px"
        boxShadow="$out"
        backgroundColor="$material"
      >
        {icons.map(({ component: Component, componentName, variants }) => {
          return (
            <React.Fragment key={componentName}>
              {Object.entries(variants).map(([variantName]) => {
                const [size] = variantName.split('x');

                return (
                  <Button
                    key={variantName}
                    className={styles.btn}
                    onClick={() => copyToClipboard(componentName, variantName)}
                  >
                    <Component
                      key={variantName}
                      style={{
                        display: 'inline-block',
                        marginRight: 4,
                        width: size,
                        height: size,
                      }}
                      // eslint-disable-next-line
                      variant={variantName as any}
                    />
                    {componentName}
                    <br />
                    {variantName}
                  </Button>
                );
              })}
            </React.Fragment>
          );
        })}
      </Frame>
    </div>
  );
};

const parameters: Story['parameters'] = {
  // the JSX generated from ~1500 rendered icons is huge and freezes the UI
  docs: { codePanel: false },
  controls: { disable: true },
  interactions: { disable: true },
  clippy: {
    phrases: ['Click any icon to copy its JSX to your clipboard.'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=4%3A35',
  },
};

export const All: Story = {
  render: (_, { speak }) => <IconGrid icons={icons} speak={speak} />,
  parameters,
};

// typed with the package exports, so a renamed or removed icon fails tsc
type IconName = keyof typeof Icons;

const groupStory = (name: string, names: IconName[]): Story => ({
  name,
  render: (_, { speak }) => (
    <IconGrid
      icons={icons.filter(({ componentName }) =>
        names.includes(componentName as IconName),
      )}
      speak={speak}
    />
  ),
  parameters,
});

const internetExplorer4: IconName[] = [
  'Icwconn1200',
  'Icwconn1202',
  'Ie',
  'Iexplore32528',
  'Iexplore32529',
  'Iexplore32537',
  'Iexplore32542',
  'Iexplore32548',
  'Iexplore32549',
  'Iexplore32550',
  'Iexplore32554',
  'Runonce106',
  'SetupPhoneicon',
];

export const InternetExplorer4 = groupStory(
  'Internet Explorer 4',
  internetExplorer4,
);

const office95: IconName[] = [
  'Artgalry128',
  'Artgalry170',
  'Artgalry171',
  'Artgalry172',
  'Artgalry173',
  'Binder1263',
  'Binder1264',
  'Binder1265',
  'Binder1266',
  'Binder1267',
  'Excel257',
  'Excel258',
  'Excel259',
  'Excel260',
  'Excel261',
  'Excel262',
  'Excel263',
  'Excel264',
  'Excel265',
  'Excel266',
  'Excel267',
  'Excel268',
  'Excel269',
  'Fastboot101',
  'Graph5257',
  'Graph5Iconchart',
  'Msoffice10',
  'Msoffice11',
  'Msoffice12',
  'Msoffice13',
  'Msoffice14',
  'Msoffice15',
  'Msoffice16',
  'Msow0',
  'Msow1',
  'Msow10',
  'Msow11',
  'Msow12',
  'Msow13',
  'Msow2',
  'Msow3',
  'Msow4',
  'Msow5',
  'Msow6',
  'Msow8',
  'Msow9',
  'Powerpnt1',
  'Powerpnt2',
  'Powerpnt3',
  'Powerpnt4',
  'Ppintl17925',
  'Ppintl17926',
  'Ppintl17933',
  'Ppintl17934',
  'Ppintl17939',
  'Ppintl18176',
  'Ppintl18177',
  'Ppintl18178',
  'Ppintl18179',
  'Ppintl18181',
  'Pptview98',
  'Winword1',
  'Winword2',
  'Winword3',
  'Winword4',
  'Winword5',
  'Winword6',
  'Winword7',
  'Wrdart32100',
  'Wrdart321200',
  'Wrdart321201',
  'Wrdart321202',
  'Wrdart321203',
  'Wrdart321204',
  'Wrdart321205',
  'Wrdart321206',
  'Wrdart321207',
  'Wrdart321208',
  'Wrdart321209',
  'Wrdart321210',
  'Wrdart321211',
  'Wrdart321212',
  'Wrdart321213',
  'Wrdart321214',
  'Wrdart321215',
  'Wrdart321216',
  'Wrdart321217',
  'Wrdart321218',
  'Wrdart321219',
  'Wrdart321220',
  'Wrdart321221',
  'Wrdart321222',
  'Wrdart321223',
  'Wrdart321224',
  'Wrdart321225',
  'Wrdart321226',
  'Wrdart321227',
  'Wrdart321228',
  'Wrdart321229',
  'Wrdart321230',
  'Wrdart321231',
  'Wrdart321232',
  'Wrdart321233',
  'Wrdart321234',
  'Wrdart321235',
  'Wrdart321240',
  'Wrdart321241',
  'Wrdart321242',
  'Wrdart321243',
  'Wrdart321244',
  'Wrdart321245',
  'Wrdart321246',
  'Wrdart321247',
];

export const Office95 = groupStory('Office 95', office95);

const netMeeting: IconName[] = [
  'Cb32102',
  'Cb32104',
  'Cb32106',
  'Cb32107',
  'Cb32108',
  'Conf100',
  'Conf135',
  'Conf150',
  'Conf153',
  'Conf155',
  'Conf156',
  'Conf157',
  'Conf603',
  'Conf604',
  'Conf605',
  'Conf606',
  'Conf607',
  'Conf608',
  'Conf609',
  'Conf610',
  'Conf611',
  'Conf612',
  'Conf613',
  'Conf614',
  'Conf615',
  'Conf8500',
  'Mnmshco1202',
  'Wb32105',
  'Wb32108',
  'Wb32109',
  'Wb32110',
  'Wb32111',
  'Wb32112',
  'Wb32113',
];

export const NetMeeting = groupStory('NetMeeting', netMeeting);
