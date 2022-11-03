import * as React from 'react';
import { IconProps } from './types';

export const AngleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1636 8.9636C10.5151 8.61213 11.0849 8.61213 11.4364 8.9636L13.8364 11.3636C14.1879 11.7151 14.1879 12.2849 13.8364 12.6364L11.4364 15.0364C11.0849 15.3879 10.5151 15.3879 10.1636 15.0364C9.81216 14.6849 9.81216 14.1151 10.1636 13.7636L11.9272 12L10.1636 10.2364C9.81216 9.88492 9.81216 9.31507 10.1636 8.9636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleRightIcon;
