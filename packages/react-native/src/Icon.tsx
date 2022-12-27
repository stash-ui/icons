import * as React from 'react';
import { IIconProps } from './types';
import { toTitleCase } from './utils/toTitleCase';

import * as regularIcons from './icons/regular';

const Icon = ({ name, variant, size, color }: IIconProps) => {
  const variants = {
    regular: regularIcons,
  };

  const renderIcon = () => {
    const iconName = `${toTitleCase(name)}Icon`;
    const Icon_ = variants[variant][iconName];

    return <Icon_ color={color} size={size} />;
  };

  return renderIcon();
};

Icon.defaultProps = {
  size: 24,
  variant: 'regular',
  color: 'currentColor',
};

export default Icon;
