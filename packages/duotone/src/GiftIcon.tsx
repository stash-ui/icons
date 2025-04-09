import * as React from 'react';
import { IconProps } from './types';

export const GiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.19922 9.5C4.19922 8.94772 4.64693 8.5 5.19922 8.5H18.6992C19.2515 8.5 19.6992 8.94772 19.6992 9.5V12C19.6992 12.5523 19.2515 13 18.6992 13H5.19922C4.64693 13 4.19922 12.5523 4.19922 12V9.5ZM5.24922 14H18.7492V18.5C18.7492 19.7426 17.7419 20.75 16.4992 20.75H7.49922C6.25658 20.75 5.24922 19.7426 5.24922 18.5V14Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.04724 4.29704C8.26775 3.56473 9.84823 3.92013 10.6378 5.10442L12.0001 7.1479L13.3624 5.10442C14.1519 3.92013 15.7324 3.56473 16.9529 4.29704C19.2719 5.68844 18.2854 9.24998 15.581 9.24998H13.0001V20.75H11.0001V9.24998H8.41913C5.71474 9.24998 4.72824 5.68844 7.04724 4.29704ZM9.38969 5.93647C9.0443 5.4184 8.3529 5.26293 7.81898 5.58328C6.80452 6.19195 7.23607 7.74998 8.41913 7.74998H10.5987L9.38969 5.93647ZM14.6105 5.93647C14.9559 5.4184 15.6472 5.26293 16.1812 5.58328C17.1956 6.19195 16.7641 7.74998 15.581 7.74998H13.4015L14.6105 5.93647Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default GiftIcon;
