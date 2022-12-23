import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M12 4.36656L21.307 11.6053C21.525 11.7749 21.5642 12.089 21.3947 12.307C21.2252 12.5249 20.911 12.5642 20.6931 12.3947L19.5 11.4668V20C19.5 20.2761 19.2762 20.5 19 20.5C18.7239 20.5 18.5 20.2761 18.5 20V10.689L12 5.63342L5.50002 10.689V20C5.50002 20.2761 5.27617 20.5 5.00002 20.5C4.72388 20.5 4.50002 20.2761 4.50002 20V11.4668L3.30699 12.3947C3.08902 12.5642 2.77488 12.5249 2.60535 12.307C2.43581 12.089 2.47508 11.7749 2.69305 11.6053L4.50002 10.1999V7.49999C4.50002 6.94771 4.94774 6.49999 5.50002 6.49999H6.50002C7.05231 6.49999 7.50002 6.94771 7.50002 7.49999V7.86656L12 4.36656ZM6.50002 8.54999V7.49999L5.50002 7.49999V9.29999L6.50002 8.54999Z"
          fill={color}
        />
        <Path
          d="M10.5 14.5C10.2239 14.5 10 14.7239 10 15V20C10 20.2761 9.77617 20.5 9.50002 20.5C9.22388 20.5 9.00002 20.2761 9.00002 20V15C9.00002 14.1716 9.6716 13.5 10.5 13.5H13.5C14.3285 13.5 15 14.1716 15 15V20C15 20.2761 14.7762 20.5 14.5 20.5C14.2239 20.5 14 20.2761 14 20V15C14 14.7239 13.7762 14.5 13.5 14.5H10.5Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default HomeIcon;
