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
          d="M21 7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V7ZM6 5H18C19.1046 5 20 5.89543 20 7V9H4V7C4 5.89543 4.89543 5 6 5ZM20 14V10H12.5V14H20ZM11.5 14V10H4V14H11.5ZM4 15H11.5V19H6C4.89543 19 4 18.1046 4 17V15ZM12.5 15H20V17C20 18.1046 19.1046 19 18 19H12.5V15Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TableIcon;
