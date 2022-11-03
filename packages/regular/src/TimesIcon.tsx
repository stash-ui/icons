import * as React from 'react';
import { IconProps } from './types';

export const TimesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.22699 7.22702C7.51989 6.93413 7.99476 6.93413 8.28765 7.22702L12 10.9393L15.7123 7.22702C16.0052 6.93413 16.48 6.93413 16.7729 7.22702C17.0658 7.51992 17.0658 7.99479 16.7729 8.28768L13.0606 12L16.7729 15.7123C17.0658 16.0052 17.0658 16.4801 16.7729 16.773C16.48 17.0659 16.0052 17.0659 15.7123 16.773L12 13.0607L8.28765 16.773C7.99476 17.0659 7.51989 17.0659 7.22699 16.773C6.9341 16.4801 6.9341 16.0052 7.22699 15.7123L10.9393 12L7.22699 8.28768C6.9341 7.99479 6.9341 7.51992 7.22699 7.22702Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
