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
          d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5H19C19.2761 6.5 19.5 6.27614 19.5 6Z"
          fill={color}
        />
        <path
          d="M19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H9C8.72386 11.5 8.5 11.7239 8.5 12C8.5 12.2761 8.72386 12.5 9 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12Z"
          fill={color}
        />
        <path
          d="M19 17.5C19.2761 17.5 19.5 17.7239 19.5 18C19.5 18.2761 19.2761 18.5 19 18.5H9C8.72386 18.5 8.5 18.2761 8.5 18C8.5 17.7239 8.72386 17.5 9 17.5H19Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default RightAlignmentIcon;
