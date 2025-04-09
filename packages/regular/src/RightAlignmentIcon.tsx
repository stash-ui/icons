import * as React from 'react';
import { IconProps } from './types';

export const RightAlignmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6Z"
          fill={color}
        />
        <path
          d="M20 12C20 11.4477 19.5523 11 19 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H19C19.5523 13 20 12.5523 20 12Z"
          fill={color}
        />
        <path
          d="M19 17C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H9C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17H19Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default RightAlignmentIcon;
