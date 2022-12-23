import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowRightLargeIcon = (
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
          d="M14.8161 4.4569C15.116 4.17123 15.5908 4.18281 15.8764 4.48276L22.5431 11.4828C22.819 11.7724 22.819 12.2276 22.5431 12.5172L15.8764 19.5172C15.5908 19.8172 15.116 19.8288 14.8161 19.5431C14.5161 19.2574 14.5046 18.7827 14.7902 18.4828L20.25 12.75L2 12.75C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25L20.25 11.25L14.7902 5.51724C14.5046 5.2173 14.5161 4.74256 14.8161 4.4569Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default ArrowRightLargeIcon;
