import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const AngleLeftIcon = (
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
          d="M13.8363 8.9636C14.1878 9.31507 14.1878 9.88492 13.8363 10.2364L12.0727 12L13.8363 13.7636C14.1878 14.1151 14.1878 14.6849 13.8363 15.0364C13.4848 15.3879 12.915 15.3879 12.5635 15.0364L10.1635 12.6364C9.81203 12.2849 9.81203 11.7151 10.1635 11.3636L12.5635 8.9636C12.915 8.61213 13.4848 8.61213 13.8363 8.9636Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default AngleLeftIcon;
