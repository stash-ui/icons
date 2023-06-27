import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5303 6.409C16.8232 6.70189 16.8232 7.17677 16.5303 7.46966L12 12L7.46967 7.46966C7.17678 7.17677 7.17678 6.70189 7.46967 6.409C7.76256 6.11611 8.23744 6.11611 8.53033 6.409L12 9.87867L15.4697 6.409C15.7626 6.11611 16.2374 6.11611 16.5303 6.409Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16.5303 12.2197C16.8232 12.5126 16.8232 12.9874 16.5303 13.2803L12 17.8107L7.46967 13.2803C7.17678 12.9874 7.17678 12.5126 7.46967 12.2197C7.76256 11.9268 8.23744 11.9268 8.53033 12.2197L12 15.6893L15.4697 12.2197C15.7626 11.9268 16.2374 11.9268 16.5303 12.2197Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleDownIcon;
