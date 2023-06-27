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
          d="M17.1265 6.87347C17.6147 7.36163 17.6147 8.15308 17.1265 8.64124L13.7678 12L17.1265 15.3588C17.6147 15.8469 17.6147 16.6384 17.1265 17.1265C16.6384 17.6147 15.8469 17.6147 15.3588 17.1265L12 13.7678L8.64124 17.1265C8.15308 17.6147 7.36163 17.6147 6.87347 17.1265C6.38532 16.6384 6.38532 15.8469 6.87347 15.3588L10.2322 12L6.87347 8.64124C6.38532 8.15308 6.38532 7.36163 6.87347 6.87347C7.36163 6.38532 8.15308 6.38532 8.64124 6.87347L12 10.2322L15.3588 6.87347C15.8469 6.38532 16.6384 6.38532 17.1265 6.87347Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
