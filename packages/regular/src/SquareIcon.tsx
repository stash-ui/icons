import * as React from 'react';
import { IconProps } from './types';

export const SquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M4.25 11.85C4.25 9.18975 4.25 7.85963 4.76772 6.84354C5.22312 5.94978 5.94978 5.22312 6.84354 4.76772C7.85963 4.25 9.18975 4.25 11.85 4.25H12.15C14.8102 4.25 16.1404 4.25 17.1565 4.76772C18.0502 5.22312 18.7769 5.94978 19.2323 6.84354C19.75 7.85963 19.75 9.18975 19.75 11.85V12.15C19.75 14.8102 19.75 16.1404 19.2323 17.1565C18.7769 18.0502 18.0502 18.7769 17.1565 19.2323C16.1404 19.75 14.8102 19.75 12.15 19.75H11.85C9.18975 19.75 7.85963 19.75 6.84354 19.2323C5.94978 18.7769 5.22312 18.0502 4.76772 17.1565C4.25 16.1404 4.25 14.8102 4.25 12.15V11.85Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SquareIcon;
