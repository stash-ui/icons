import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6552 1.63793C11.8483 1.45402 12.1517 1.45402 12.3448 1.63793L19.3448 8.3046C19.5448 8.49504 19.5525 8.81153 19.3621 9.01149C19.1716 9.21146 18.8551 9.21918 18.6552 9.02873L12.5 3.16667L12.5 22C12.5 22.2761 12.2761 22.5 12 22.5C11.7239 22.5 11.5 22.2761 11.5 22L11.5 3.16667L5.34483 9.02874C5.14486 9.21918 4.82837 9.21146 4.63793 9.01149C4.44749 8.81153 4.45521 8.49504 4.65517 8.3046L11.6552 1.63793Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowUpLargeIcon;
