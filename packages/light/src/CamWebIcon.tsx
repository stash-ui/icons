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
        <circle cx="12" cy="10" r="6.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5V14.5C14.4853 14.5 16.5 12.4853 16.5 10H15.5ZM12 13.5C10.067 13.5 8.5 11.933 8.5 10H7.5C7.5 12.4853 9.51472 14.5 12 14.5V13.5ZM8.5 10C8.5 8.067 10.067 6.5 12 6.5V5.5C9.51472 5.5 7.5 7.51472 7.5 10H8.5ZM12 6.5C13.933 6.5 15.5 8.067 15.5 10H16.5C16.5 7.51472 14.4853 5.5 12 5.5V6.5Z"
          fill={color}
        />
        <path
          d="M7.13134 16.9683C6.5523 17.7389 5.78474 18.4853 5.1545 19.0447C4.79514 19.3637 5.0196 20 5.5001 20H18.5001C18.9806 20 19.2051 19.3637 18.8457 19.0447C18.2155 18.4853 17.4479 17.7389 16.8689 16.9683"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default CamWebIcon;
