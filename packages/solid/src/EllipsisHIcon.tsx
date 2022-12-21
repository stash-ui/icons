import * as React from 'react';
import { IconProps } from './types';

export const EllipsisHIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 14C5.39543 14 4.5 13.1046 4.5 12C4.5 10.8954 5.39543 10 6.5 10C7.60457 10 8.5 10.8954 8.5 12C8.5 13.1046 7.60457 14 6.5 14ZM5.5 12C5.5 12.5523 5.94772 13 6.5 13C7.05228 13 7.5 12.5523 7.5 12C7.5 11.4477 7.05228 11 6.5 11C5.94772 11 5.5 11.4477 5.5 12ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12ZM16.5 12C16.5 12.5523 16.9477 13 17.5 13C18.0523 13 18.5 12.5523 18.5 12C18.5 11.4477 18.0523 11 17.5 11C16.9477 11 16.5 11.4477 16.5 12ZM17.5 14C16.3954 14 15.5 13.1046 15.5 12C15.5 10.8954 16.3954 10 17.5 10C18.6046 10 19.5 10.8954 19.5 12C19.5 13.1046 18.6046 14 17.5 14Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EllipsisHIcon;
