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
          d="M7.05025 7.05025C7.44077 6.65972 8.07394 6.65972 8.46446 7.05025L12 10.5858L15.5355 7.05025C15.9261 6.65972 16.5592 6.65972 16.9497 7.05025C17.3403 7.44077 17.3403 8.07394 16.9497 8.46446L13.4142 12L16.9497 15.5355C17.3403 15.9261 17.3403 16.5592 16.9497 16.9497C16.5592 17.3403 15.9261 17.3403 15.5355 16.9497L12 13.4142L8.46446 16.9497C8.07394 17.3403 7.44077 17.3403 7.05025 16.9497C6.65972 16.5592 6.65972 15.9261 7.05025 15.5355L10.5858 12L7.05025 8.46446C6.65972 8.07394 6.65972 7.44077 7.05025 7.05025Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
