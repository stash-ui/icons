import * as React from 'react';
import { IconProps } from './types';

export const AngleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.8364 8.9636C14.1879 9.31507 14.1879 9.88492 13.8364 10.2364L12.0728 12L13.8364 13.7636C14.1879 14.1151 14.1879 14.6849 13.8364 15.0364C13.4849 15.3879 12.9151 15.3879 12.5636 15.0364L10.1636 12.6364C9.81216 12.2849 9.81216 11.7151 10.1636 11.3636L12.5636 8.9636C12.9151 8.61213 13.4849 8.61213 13.8364 8.9636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleLeftIcon;
