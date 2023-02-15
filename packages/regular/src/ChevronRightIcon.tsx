import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967L15.0607 12L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303C9.17678 16.2374 9.17678 15.7626 9.46967 15.4697L12.9393 12L9.46967 8.53033C9.17678 8.23744 9.17678 7.76256 9.46967 7.46967Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronRightIcon;
