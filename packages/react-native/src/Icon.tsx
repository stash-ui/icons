import * as React from 'react';
import { IIconProps } from './types';
import { toTitleCase } from './utils/toTitleCase';

import * as regularIcons from './icons/regular';

export const Icon = ({ name, style, color = 'currentColor', ...props }: IIconProps) => {
  const renderIcon = () => {
    const iconName = `${toTitleCase(name)}Icon`;

    if (style === 'regular') {
      const RegularIcon = regularIcons[iconName];
      return <RegularIcon color={color} {...props} />;
    }
  };

  return renderIcon();
};
