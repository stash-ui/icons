import * as React from 'react';
import { IconProps } from './types';

export const MinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75 12C4.75 11.3096 5.30964 10.75 6 10.75H18C18.6904 10.75 19.25 11.3096 19.25 12C19.25 12.6904 18.6904 13.25 18 13.25H6C5.30964 13.25 4.75 12.6904 4.75 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default MinusIcon;
