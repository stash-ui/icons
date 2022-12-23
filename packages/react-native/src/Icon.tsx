import * as React from 'react';
import { IIconProps } from './types';
import { toTitleCase } from './utils/toTitleCase';

import * as regularIcons from './icons/regular';

export const Icon = ({ name, variant, size, color = 'currentColor', ...props }: IIconProps) => {
  const variants = {
    regular: regularIcons,
  };

  const renderIcon = () => {
    const iconName = `${toTitleCase(name)}Icon`;

    variants.regular.ArrowLeftLargeIcon

    return React.cloneElement(variants[variant][iconName], {
      size,
      color,
    });
  };

  return renderIcon();
};
