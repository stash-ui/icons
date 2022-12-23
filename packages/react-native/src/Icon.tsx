import * as React from 'react';
import { IIconProps } from './types';

import * as regularIcons from './icons/regular';

export const Icon = ({ name, style, color = 'currentColor', ...props }: IIconProps) => {
  const renderIcon = () => {
    if (style === 'regular') {
      const RegularIcon = regularIcons[name];
      return <RegularIcon color={color} {...props} />;
    }
  };

  return renderIcon();
};
