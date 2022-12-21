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
          d="M7.22748 7.22702C7.52038 6.93413 7.99525 6.93413 8.28814 7.22702L12.0005 10.9393L15.7128 7.22702C16.0057 6.93413 16.4805 6.93413 16.7734 7.22702C17.0663 7.51992 17.0663 7.99479 16.7734 8.28768L13.0611 12L16.7734 15.7123C17.0663 16.0052 17.0663 16.4801 16.7734 16.773C16.4805 17.0659 16.0057 17.0659 15.7128 16.773L12.0005 13.0607L8.28814 16.773C7.99525 17.0659 7.52038 17.0659 7.22748 16.773C6.93459 16.4801 6.93459 16.0052 7.22748 15.7123L10.9398 12L7.22748 8.28768C6.93459 7.99479 6.93459 7.51992 7.22748 7.22702Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
