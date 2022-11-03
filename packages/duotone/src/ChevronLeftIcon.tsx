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
          d="M14.7071 16.7071C14.3166 17.0976 13.6834 17.0976 13.2929 16.7071L8.58579 12L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L11.4142 12L14.7071 15.2929C15.0976 15.6834 15.0976 16.3166 14.7071 16.7071Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronLeftIcon;
