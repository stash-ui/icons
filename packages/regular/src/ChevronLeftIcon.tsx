import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303L8.93934 12L13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967C14.8232 7.76256 14.8232 8.23744 14.5303 8.53033L11.0607 12L14.5303 15.4697C14.8232 15.7626 14.8232 16.2374 14.5303 16.5303Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronLeftIcon;
