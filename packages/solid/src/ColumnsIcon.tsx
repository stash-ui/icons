import * as React from 'react';
import { IconProps } from './types';

export const ColumnsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 19.25H13.5L13.5 4.75H16C17.2426 4.75 18.25 5.75736 18.25 7V17C18.25 18.2426 17.2426 19.25 16 19.25ZM8 4.75H10.5L10.5 19.25H8C6.75736 19.25 5.75 18.2426 5.75 17V7C5.75 5.75736 6.75736 4.75 8 4.75Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  }
);

export default ColumnsIcon;
