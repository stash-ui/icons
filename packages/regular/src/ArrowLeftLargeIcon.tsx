import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.01149 4.63793C9.21146 4.82837 9.21918 5.14486 9.02874 5.34483L3.16667 11.5L22 11.5C22.2761 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.2761 12.5 22 12.5H3.16667L9.02874 18.6552C9.21918 18.8551 9.21146 19.1716 9.01149 19.3621C8.81153 19.5525 8.49504 19.5448 8.3046 19.3448L1.63793 12.3448C1.45402 12.1517 1.45402 11.8483 1.63793 11.6552L8.3046 4.65517C8.49504 4.45521 8.81153 4.44749 9.01149 4.63793Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowLeftLargeIcon;
