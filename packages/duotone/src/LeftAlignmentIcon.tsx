import * as React from 'react';
import { IconProps } from './types';

export const LeftAlignmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
          fill={color}
        />
        <path
          d="M4 12C4 11.4477 4.44772 11 5 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5C4.44772 13 4 12.5523 4 12Z"
          fill={color}
          fillOpacity="0.5"
        />
        <path
          d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H15C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17H5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LeftAlignmentIcon;
