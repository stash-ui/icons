import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L12 8.93934L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronUpIcon;
