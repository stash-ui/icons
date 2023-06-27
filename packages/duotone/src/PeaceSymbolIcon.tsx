import * as React from 'react';
import { IconProps } from './types';

export const PeaceSymbolIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.25 3.78363C7.04513 4.16255 3.75 7.69647 3.75 12C3.75 13.6615 4.24117 15.2083 5.08623 16.5031L11.25 10.3393V3.78363ZM12.75 3.78363V10.3393L18.9138 16.5031C19.7588 15.2083 20.25 13.6615 20.25 12C20.25 7.69647 16.9549 4.16255 12.75 3.78363ZM17.9765 17.6872L12.75 12.4607V20.2164C14.8008 20.0316 16.6353 19.0962 17.9765 17.6872ZM11.25 20.2164V12.4607L6.02348 17.6872C7.36474 19.0962 9.19917 20.0316 11.25 20.2164ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          opacity=".5"
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PeaceSymbolIcon;
