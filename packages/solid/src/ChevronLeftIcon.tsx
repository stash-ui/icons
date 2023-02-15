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
          d="M14.8839 16.8839C14.3957 17.372 13.6043 17.372 13.1161 16.8839L8.23223 12L13.1161 7.11612C13.6043 6.62796 14.3957 6.62796 14.8839 7.11612C15.372 7.60427 15.372 8.39573 14.8839 8.88388L11.7678 12L14.8839 15.1161C15.372 15.6043 15.372 16.3957 14.8839 16.8839Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronLeftIcon;
