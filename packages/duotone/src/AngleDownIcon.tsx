import * as React from 'react';
import { IconProps } from './types';

export const AngleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.96362 10.1636C9.31509 9.81213 9.88494 9.81213 10.2364 10.1636L12 11.9272L13.7636 10.1636C14.1151 9.81213 14.6849 9.81213 15.0364 10.1636C15.3879 10.5151 15.3879 11.0849 15.0364 11.4364L12.6364 13.8364C12.2849 14.1879 11.7151 14.1879 11.3636 13.8364L8.96362 11.4364C8.61214 11.0849 8.61214 10.5151 8.96362 10.1636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleDownIcon;
