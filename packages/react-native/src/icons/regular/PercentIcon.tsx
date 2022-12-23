import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PercentIcon = (
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
          d="M8.5 6C7.11929 6 6 7.11929 6 8.5 6 9.88071 7.11929 11 8.5 11 9.88071 11 11 9.88071 11 8.5 11 7.11929 9.88071 6 8.5 6zM8 8.5C8 8.22386 8.22386 8 8.5 8 8.77614 8 9 8.22386 9 8.5 9 8.77614 8.77614 9 8.5 9 8.22386 9 8 8.77614 8 8.5zM6.87345 17.1265C6.38529 16.6383 6.38529 15.8469 6.87345 15.3587L15.3587 6.87345C15.8469 6.38529 16.6383 6.38529 17.1265 6.87345 17.6146 7.36161 17.6146 8.15306 17.1265 8.64122L8.64121 17.1265C8.15306 17.6147 7.3616 17.6147 6.87345 17.1265zM13 15.5C13 14.1193 14.1193 13 15.5 13 16.8807 13 18 14.1193 18 15.5 18 16.8807 16.8807 18 15.5 18 14.1193 18 13 16.8807 13 15.5zM15.5 15C15.2239 15 15 15.2239 15 15.5 15 15.7761 15.2239 16 15.5 16 15.7761 16 16 15.7761 16 15.5 16 15.2239 15.7761 15 15.5 15z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PercentIcon;
