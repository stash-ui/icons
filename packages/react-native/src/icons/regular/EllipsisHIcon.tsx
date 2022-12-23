import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EllipsisHIcon = (
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
          d="M4.25 12C4.25 13.2426 5.25736 14.25 6.5 14.25 7.74264 14.25 8.75 13.2426 8.75 12 8.75 10.7574 7.74264 9.75 6.5 9.75 5.25736 9.75 4.25 10.7574 4.25 12zM9.75 12C9.75 13.2426 10.7574 14.25 12 14.25 13.2426 14.25 14.25 13.2426 14.25 12 14.25 10.7574 13.2426 9.75 12 9.75 10.7574 9.75 9.75 10.7574 9.75 12zM15.25 12C15.25 13.2426 16.2574 14.25 17.5 14.25 18.7426 14.25 19.75 13.2426 19.75 12 19.75 10.7574 18.7426 9.75 17.5 9.75 16.2574 9.75 15.25 10.7574 15.25 12z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default EllipsisHIcon;
