import * as React from 'react';
import { IconProps } from './types';

export const PauseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 5.5C7.7835 5.5 7 6.2835 7 7.25V16.75C7 17.7165 7.7835 18.5 8.75 18.5 9.7165 18.5 10.5 17.7165 10.5 16.75V7.25C10.5 6.2835 9.7165 5.5 8.75 5.5zM15.25 5.5C14.2835 5.5 13.5 6.2835 13.5 7.25V16.75C13.5 17.7165 14.2835 18.5 15.25 18.5 16.2165 18.5 17 17.7165 17 16.75V7.25C17 6.2835 16.2165 5.5 15.25 5.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PauseIcon;
