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
          d="M5.87859 7.29289C6.26911 6.90237 6.90228 6.90237 7.2928 7.29289L11.9999 12L7.2928 16.7071C6.90228 17.0976 6.26911 17.0976 5.87859 16.7071C5.48806 16.3166 5.48806 15.6834 5.87859 15.2929L9.17148 12L5.87859 8.70711C5.48806 8.31658 5.48806 7.68342 5.87859 7.29289Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.2928 7.29289C12.6833 6.90237 13.3165 6.90237 13.707 7.29289L18.4141 12L13.707 16.7071C13.3165 17.0976 12.6833 17.0976 12.2928 16.7071C11.9023 16.3166 11.9023 15.6834 12.2928 15.2929L15.5857 12L12.2928 8.70711C11.9023 8.31658 11.9023 7.68342 12.2928 7.29289Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleRightIcon;
