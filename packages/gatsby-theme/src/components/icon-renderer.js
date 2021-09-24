import React from 'react';
import * as R95Icons from '@react95/icons';

const IconRenderer = ({ name, variant, fallback = R95Icons.BatExec }) => {
  const Icon = R95Icons[name] || fallback;

  return <Icon variant={variant} />;
};

export default IconRenderer;
