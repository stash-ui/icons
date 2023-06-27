import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.40912 7.46967C6.70202 7.17678 7.17689 7.17678 7.46978 7.46967L12.0001 12L7.46978 16.5303C7.17689 16.8232 6.70202 16.8232 6.40912 16.5303C6.11623 16.2374 6.11623 15.7626 6.40912 15.4697L9.87879 12L6.40912 8.53033C6.11623 8.23744 6.11623 7.76256 6.40912 7.46967Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.2198 7.46967C12.5127 7.17678 12.9876 7.17678 13.2804 7.46967L17.8108 12L13.2804 16.5303C12.9876 16.8232 12.5127 16.8232 12.2198 16.5303C11.9269 16.2374 11.9269 15.7626 12.2198 15.4697L15.6895 12L12.2198 8.53033C11.9269 8.23744 11.9269 7.76256 12.2198 7.46967Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleRightIcon;
