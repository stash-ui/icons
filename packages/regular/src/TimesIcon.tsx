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
          d="M7.22702 7.22702C7.51992 6.93413 7.99479 6.93413 8.28768 7.22702L12 10.9393L15.7123 7.22702C16.0052 6.93413 16.4801 6.93413 16.773 7.22702C17.0659 7.51992 17.0659 7.99479 16.773 8.28768L13.0607 12L16.773 15.7123C17.0659 16.0052 17.0659 16.4801 16.773 16.773C16.4801 17.0659 16.0052 17.0659 15.7123 16.773L12 13.0607L8.28768 16.773C7.99479 17.0659 7.51992 17.0659 7.22702 16.773C6.93413 16.4801 6.93413 16.0052 7.22702 15.7123L10.9393 12L7.22702 8.28768C6.93413 7.99479 6.93413 7.51992 7.22702 7.22702Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
