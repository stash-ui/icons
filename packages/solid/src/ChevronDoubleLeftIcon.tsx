import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.6518 16.8839C18.1637 17.372 17.3722 17.372 16.8841 16.8839L12.0002 12L16.8841 7.11612C17.3722 6.62796 18.1637 6.62796 18.6518 7.11612C19.14 7.60427 19.14 8.39573 18.6518 8.88388L15.5357 12L18.6518 15.1161C19.14 15.6043 19.14 16.3957 18.6518 16.8839Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.6341 16.8839C11.1459 17.372 10.3545 17.372 9.86631 16.8839L4.98242 12L9.86631 7.11612C10.3545 6.62796 11.1459 6.62796 11.6341 7.11612C12.1222 7.60427 12.1222 8.39573 11.6341 8.88388L8.51796 12L11.6341 15.1161C12.1222 15.6043 12.1222 16.3957 11.6341 16.8839Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleLeftIcon;
