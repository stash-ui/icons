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
          d="M4.5 6C4.5 5.72386 4.72386 5.5 5 5.5H19C19.2761 5.5 19.5 5.72386 19.5 6C19.5 6.27614 19.2761 6.5 19 6.5H5C4.72386 6.5 4.5 6.27614 4.5 6Z"
          fill={color}
        />
        <path
          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H15C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
          fill={color}
        />
        <path
          d="M5 17.5C4.72386 17.5 4.5 17.7239 4.5 18C4.5 18.2761 4.72386 18.5 5 18.5H15C15.2761 18.5 15.5 18.2761 15.5 18C15.5 17.7239 15.2761 17.5 15 17.5H5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LeftAlignmentIcon;
