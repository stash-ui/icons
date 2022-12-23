import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const AngleRightIcon = (
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
          d="M10.1635 8.9636C10.515 8.61213 11.0848 8.61213 11.4363 8.9636L13.8363 11.3636C14.1878 11.7151 14.1878 12.2849 13.8363 12.6364L11.4363 15.0364C11.0848 15.3879 10.515 15.3879 10.1635 15.0364C9.81203 14.6849 9.81203 14.1151 10.1635 13.7636L11.9271 12L10.1635 10.2364C9.81203 9.88492 9.81203 9.31507 10.1635 8.9636Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default AngleRightIcon;
