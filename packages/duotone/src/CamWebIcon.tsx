import * as React from 'react';
import { IconProps } from './types';

export const CamWebIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="12"
          cy="10"
          r="6.5"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle opacity=".5" cx="12" cy="10" r="4" fill={color} />
        <circle
          cx="12"
          cy="10"
          r="4"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.13134 16.9683C6.5523 17.7389 5.78474 18.4853 5.1545 19.0447C4.79514 19.3637 5.0196 20 5.5001 20H18.5001C18.9806 20 19.2051 19.3637 18.8457 19.0447C18.2155 18.4853 17.4479 17.7389 16.8689 16.9683"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default CamWebIcon;
