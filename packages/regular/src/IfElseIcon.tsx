import * as React from 'react';
import { IconProps } from './types';

export const IfElseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.0006 4C13.0006 3.44772 12.5529 3 12.0006 3C11.4484 3 11.0006 3.44772 11.0006 4V8.08296C8.16293 8.55904 6.00064 11.027 6.00064 14V16.25H5.16632C4.84359 16.25 4.65373 16.6125 4.83752 16.8778L6.67184 19.5254C6.83092 19.755 7.17037 19.755 7.32944 19.5254L9.16377 16.8778C9.34756 16.6125 9.1577 16.25 8.83497 16.25H8.00064V14C8.00064 11.7909 9.79151 10 12.0006 10C14.2098 10 16.0006 11.7909 16.0006 14V16.25H15.1663C14.8436 16.25 14.6537 16.6125 14.8375 16.8778L16.6718 19.5254C16.8309 19.755 17.1704 19.755 17.3294 19.5254L19.1638 16.8778C19.3476 16.6125 19.1577 16.25 18.835 16.25H18.0006V14C18.0006 11.027 15.8384 8.55904 13.0006 8.08296V4Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default IfElseIcon;
