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
          d="M21 7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V7ZM6 5.5H18C18.8284 5.5 19.5 6.17157 19.5 7V8.5H4.5V7C4.5 6.17157 5.17157 5.5 6 5.5ZM19.5 13.5V10H12.75V13.5H19.5ZM11.25 13.5V10H4.5V13.5H11.25ZM4.5 15H11.25V18.5H6C5.17157 18.5 4.5 17.8284 4.5 17V15ZM12.75 15H19.5V17C19.5 17.8284 18.8284 18.5 18 18.5H12.75V15Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TableIcon;
