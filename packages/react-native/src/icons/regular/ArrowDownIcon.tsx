import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowDownIcon = (
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
          d="M12 4.75C11.3096 4.75 10.75 5.30964 10.75 6V14.9822L7.88388 12.1161C7.39573 11.628 6.60427 11.628 6.11612 12.1161C5.62796 12.6043 5.62796 13.3957 6.11612 13.8839L11.1161 18.8839C11.6043 19.372 12.3957 19.372 12.8839 18.8839L17.8839 13.8839C18.372 13.3957 18.372 12.6043 17.8839 12.1161C17.3957 11.628 16.6043 11.628 16.1161 12.1161L13.25 14.9822V6C13.25 5.30964 12.6904 4.75 12 4.75Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArrowDownIcon;
