import React from 'react';
import ProgressBar from '../components/ProgressBar';

import { storiesOf } from '@storybook/react';

storiesOf('ProgressBar', module).add('default', () => <ProgressBar width={200} percent={49} />);
