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
          d="M12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75Z"
          fill={color}
        />
        <path
          d="M12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25ZM5.75 12C5.75 8.54822 8.54822 5.75 12 5.75C15.4518 5.75 18.25 8.54822 18.25 12C18.25 15.4518 15.4518 18.25 12 18.25C8.54822 18.25 5.75 15.4518 5.75 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CircleDotIcon;
