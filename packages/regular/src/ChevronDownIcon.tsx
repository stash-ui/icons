import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12 15.0607L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDownIcon;
