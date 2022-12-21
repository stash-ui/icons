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
          d="M8.9638 10.1636C9.31527 9.81213 9.88512 9.81213 10.2366 10.1636L12.0002 11.9272L13.7638 10.1636C14.1153 9.81213 14.6851 9.81213 15.0366 10.1636C15.3881 10.5151 15.3881 11.0849 15.0366 11.4364L12.6366 13.8364C12.2851 14.1879 11.7153 14.1879 11.3638 13.8364L8.9638 11.4364C8.61233 11.0849 8.61233 10.5151 8.9638 10.1636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleDownIcon;
