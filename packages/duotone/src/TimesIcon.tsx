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
          d="M7.05022 7.05026C7.44074 6.65973 8.07391 6.65973 8.46443 7.05026L12 10.5858L15.5355 7.05026C15.926 6.65973 16.5592 6.65973 16.9497 7.05026C17.3402 7.44078 17.3402 8.07394 16.9497 8.46447L13.4142 12L16.9497 15.5355C17.3402 15.9261 17.3402 16.5592 16.9497 16.9497C16.5592 17.3403 15.926 17.3403 15.5355 16.9497L12 13.4142L8.46443 16.9497C8.07391 17.3403 7.44074 17.3403 7.05022 16.9497C6.65969 16.5592 6.65969 15.9261 7.05022 15.5355L10.5858 12L7.05022 8.46447C6.65969 8.07394 6.65969 7.44078 7.05022 7.05026Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
