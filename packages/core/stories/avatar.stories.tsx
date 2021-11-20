import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Avatar from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

export const Simple = () => <Avatar src="https://github.com/React95.png" alt="photo" />;

Simple.parameters = {
    design: { disable: true },
};
  
export const WithCircle = () => <Avatar src="https://github.com/React95.png" alt="photo" circle />

WithCircle.parameters = {
    design: { disable: true },
};

export const WithLettersAvatar = () => <Avatar circle> <p>GG</p> </Avatar>

WithLettersAvatar.parameters = {
    design: { disable: true },
};
