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
          d="M17.1265 6.87348C17.6146 7.36163 17.6146 8.15309 17.1265 8.64124L13.7677 12L17.1265 15.3588C17.6146 15.8469 17.6146 16.6384 17.1265 17.1265C16.6383 17.6147 15.8469 17.6147 15.3587 17.1265L12 13.7678L8.64121 17.1265C8.15305 17.6147 7.3616 17.6147 6.87344 17.1265C6.38529 16.6384 6.38529 15.8469 6.87344 15.3588L10.2322 12L6.87344 8.64124C6.38529 8.15309 6.38529 7.36163 6.87344 6.87348C7.3616 6.38532 8.15305 6.38532 8.64121 6.87348L12 10.2322L15.3587 6.87348C15.8469 6.38532 16.6383 6.38532 17.1265 6.87348Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
