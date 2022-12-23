import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PaginationIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path d="M4 10L2 12 4 14M20 10L22 12 20 14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="7" width="10" height="10" rx="3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="7" width="10" height="10" rx="3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  }
);

export default PaginationIcon;
