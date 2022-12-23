import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CheckIcon = (
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
          d="M17.3448 8.13793C17.5448 8.32838 17.5525 8.64486 17.3621 8.84483L10.6954 15.8448C10.601 15.9439 10.4702 16 10.3333 16C10.1965 16 10.0656 15.9439 9.97127 15.8448L6.63793 12.3448C6.44749 12.1449 6.45521 11.8284 6.65517 11.6379C6.85514 11.4475 7.17163 11.4552 7.36207 11.6552L10.3333 14.775L16.6379 8.15517C16.8284 7.95521 17.1449 7.94749 17.3448 8.13793Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default CheckIcon;
