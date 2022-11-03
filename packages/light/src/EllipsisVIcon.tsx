import * as React from 'react';
import { IconProps } from './types';

export const EllipsisVIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 6.5C10 5.39543 10.8954 4.5 12 4.5C13.1046 4.5 14 5.39543 14 6.5C14 7.60457 13.1046 8.5 12 8.5C10.8954 8.5 10 7.60457 10 6.5ZM12 5.5C11.4477 5.5 11 5.94772 11 6.5C11 7.05228 11.4477 7.5 12 7.5C12.5523 7.5 13 7.05228 13 6.5C13 5.94772 12.5523 5.5 12 5.5ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5ZM10 17.5C10 16.3954 10.8954 15.5 12 15.5C13.1046 15.5 14 16.3954 14 17.5C14 18.6046 13.1046 19.5 12 19.5C10.8954 19.5 10 18.6046 10 17.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EllipsisVIcon;
