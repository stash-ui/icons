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
        <path d="M6 4C4.34315 4 3 5.34315 3 7V8.5H21V7C21 5.34315 19.6569 4 18 4H6Z" fill={color} />
        <path d="M21 10H12.75V13.5H21V10Z" fill={color} />
        <path d="M21 15H12.75L12.75 20H18C19.6569 20 21 18.6569 21 17V15Z" fill={color} />
        <path d="M11.25 20L11.25 15H3V17C3 18.6569 4.34315 20 6 20H11.25Z" fill={color} />
        <path d="M3 13.5H11.25V10H3V13.5Z" fill={color} />
      </svg>
    );
  }
);

export default TableIcon;
