import * as React from 'react';
import { IIconProps } from './types';
import { toTitleCase } from './utils/toTitleCase';

import * as regularIcons from './icons/regular';

export const Icon = ({ name, variant, size, color = 'currentColor', ...props }: IIconProps) => {
  const renderIcon = () => {
    const iconName = `${toTitleCase(name)}Icon`;

    if (variant === 'regular') {
      const RegularIcon = regularIcons[iconName];
      return <RegularIcon color={color} size={size} {...props} />;
    }
  };

  return renderIcon();
};
