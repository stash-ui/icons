import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.4697 5.46968C11.7626 5.17679 12.24 5.18002 12.5303 5.46968L17.5303 10.4697C17.8232 10.7626 17.8232 11.2374 17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303L12.75 7.81067V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V7.81067L7.53033 11.5303C7.23744 11.8232 6.76256 11.8232 6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697L11.4697 5.46968Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowUpIcon;
