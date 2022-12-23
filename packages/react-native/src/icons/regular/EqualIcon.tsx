import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EqualIcon = (
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
          d="M6 10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default EqualIcon;
