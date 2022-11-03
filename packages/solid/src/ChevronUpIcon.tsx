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
          d="M7.11612 14.8839C6.62796 14.3957 6.62796 13.6043 7.11612 13.1161L12 8.23223L16.8839 13.1161C17.372 13.6043 17.372 14.3957 16.8839 14.8839C16.3957 15.372 15.6043 15.372 15.1161 14.8839L12 11.7678L8.88388 14.8839C8.39573 15.372 7.60427 15.372 7.11612 14.8839Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronUpIcon;
