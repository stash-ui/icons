import * as React from 'react';
import { IconProps } from './types';

export const CenterAlignmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5H19C19.2761 6.5 19.5 6.27614 19.5 6Z"
          fill={color}
        />
        <path
          d="M17.5 12C17.5 11.7239 17.2761 11.5 17 11.5H7C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5H17C17.2761 12.5 17.5 12.2761 17.5 12Z"
          fill={color}
        />
        <path
          d="M19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CenterAlignmentIcon;
