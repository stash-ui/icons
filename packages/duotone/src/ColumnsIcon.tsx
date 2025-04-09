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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5.5H8C7.17157 5.5 6.5 6.17157 6.5 7V17C6.5 17.8284 7.17157 18.5 8 18.5H16C16.8284 18.5 17.5 17.8284 17.5 17V7C17.5 6.17157 16.8284 5.5 16 5.5ZM8 4C6.34315 4 5 5.34315 5 7V17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17V7C19 5.34315 17.6569 4 16 4H8Z"
          fill={color}
        />
        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M11.25 19V5H12.75V19H11.25Z" fill={color} />
      </svg>
    );
  }
);

export default ColumnsIcon;
