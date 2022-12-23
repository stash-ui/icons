import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChevronRightIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M9.11612 7.11612C9.60427 6.62796 10.3957 6.62796 10.8839 7.11612L15.7678 12L10.8839 16.8839C10.3957 17.372 9.60427 17.372 9.11612 16.8839C8.62796 16.3957 8.62796 15.6043 9.11612 15.1161L12.2322 12L9.11612 8.88388C8.62796 8.39573 8.62796 7.60427 9.11612 7.11612Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default ChevronRightIcon;
