import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.29314 18.1213C6.90261 17.7308 6.90261 17.0976 7.29314 16.7071L12.0002 12L16.7074 16.7071C17.0979 17.0976 17.0979 17.7308 16.7074 18.1213C16.3168 18.5118 15.6837 18.5118 15.2931 18.1213L12.0002 14.8284L8.70735 18.1213C8.31683 18.5118 7.68366 18.5118 7.29314 18.1213Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.29314 11.7071C6.90261 11.3166 6.90261 10.6834 7.29314 10.2929L12.0002 5.58578L16.7074 10.2929C17.0979 10.6834 17.0979 11.3166 16.7074 11.7071C16.3168 12.0976 15.6837 12.0976 15.2931 11.7071L12.0002 8.41421L8.70735 11.7071C8.31683 12.0976 7.68366 12.0976 7.29314 11.7071Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleUpIcon;
