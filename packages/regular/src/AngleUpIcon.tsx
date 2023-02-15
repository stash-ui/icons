import * as React from 'react';
import { IconProps } from './types';

export const AngleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3636 10.1636C11.715 9.81213 12.2849 9.81213 12.6363 10.1636L15.0363 12.5636C15.3878 12.9151 15.3878 13.4849 15.0363 13.8364C14.6849 14.1879 14.115 14.1879 13.7636 13.8364L12 12.0728L10.2363 13.8364C9.88488 14.1879 9.31503 14.1879 8.96356 13.8364C8.61208 13.4849 8.61208 12.9151 8.96356 12.5636L11.3636 10.1636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleUpIcon;
