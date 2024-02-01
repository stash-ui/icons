import * as React from 'react';
import { IconProps } from './types';

export const BoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.5448 7.99671L16.9958 3.40838C16.8729 3.1872 16.6397 3.05002 16.3867 3.05002H13.6086H6.91133C6.6583 3.05002 6.42517 3.1872 6.30229 3.40838L3.7532 7.99671H9.65385L9.96665 3.05004L13.6086 3.05002C13.6086 3.05002 13.7249 5.48011 13.8738 7.99671H19.5448Z"
          fill={color}
        />
        <path
          d="M9.56574 9.39015L9.34985 12.8041C9.34985 13.5737 9.97372 14.1976 10.7433 14.1976H12.8335C13.603 14.1976 14.2269 13.5737 14.2269 12.8041C14.1422 12.0526 14.0481 10.7762 13.9594 9.39015H19.8703V16.5664C19.8703 18.4904 18.3107 20.05 16.3867 20.05H6.91134C4.9874 20.05 3.42773 18.4904 3.42773 16.5664V9.39015H9.56574Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoxIcon;
