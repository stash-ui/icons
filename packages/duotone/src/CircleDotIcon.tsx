import * as React from 'react';
import { IconProps } from './types';

export const CircleDotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 12C4.25 7.71979 7.71979 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71979 19.75 4.25 16.2802 4.25 12Z"
          fill={color}
        />
        <path
          d="M8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CircleDotIcon;
