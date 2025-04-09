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
          d="M5 7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7ZM12.75 5.5H16C16.8284 5.5 17.5 6.17157 17.5 7V17C17.5 17.8284 16.8284 18.5 16 18.5H12.75V5.5ZM11.25 5.5H8C7.17157 5.5 6.5 6.17157 6.5 7V17C6.5 17.8284 7.17157 18.5 8 18.5H11.25V5.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ColumnsIcon;
