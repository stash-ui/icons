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
        <circle cx="12" cy="10" r="6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25V14.75C14.6234 14.75 16.75 12.6234 16.75 10H15.25ZM12 13.25C10.2051 13.25 8.75 11.7949 8.75 10H7.25C7.25 12.6234 9.37665 14.75 12 14.75V13.25ZM8.75 10C8.75 8.20507 10.2051 6.75 12 6.75V5.25C9.37665 5.25 7.25 7.37665 7.25 10H8.75ZM12 6.75C13.7949 6.75 15.25 8.20507 15.25 10H16.75C16.75 7.37665 14.6234 5.25 12 5.25V6.75Z"
          fill={color}
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
