import * as React from 'react';
import { IconProps } from './types';

export const TableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7C3 5.34315 4.34315 4 6 4H18C19.6569 4 21 5.34315 21 7V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V7ZM6 5.5H18C18.8284 5.5 19.5 6.17157 19.5 7V8.5H4.5V7C4.5 6.17157 5.17157 5.5 6 5.5ZM19.5 10V17C19.5 17.8284 18.8284 18.5 18 18.5H6C5.17157 18.5 4.5 17.8284 4.5 17V10H19.5Z"
          fill={color}
        />
        <path opacity="0.5" d="M11.25 15V20H12.75V15H21V13.5H12.75V9H11.25V13.5H3V15H11.25Z" fill={color} />
      </svg>
    );
  }
);

export default TableIcon;
