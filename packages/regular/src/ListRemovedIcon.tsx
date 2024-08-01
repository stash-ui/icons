import * as React from 'react';
import { IconProps } from './types';

export const ListRemovedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7Z"
          fill={color}
        />
        <path
          d="M6.5 7C6.5 6.44772 6.94772 6 7.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7C18.5 7.55228 18.0523 8 17.5 8H7.5C6.94771 8 6.5 7.55228 6.5 7Z"
          fill={color}
        />
        <path
          d="M7.6 11C6.99249 11 6.5 11.4925 6.5 12.1C6.5 12.7075 6.99249 13.2 7.6 13.2H13.4C14.0075 13.2 14.5 12.7075 14.5 12.1C14.5 11.4925 14.0075 11 13.4 11H7.6Z"
          fill={color}
        />
        <path
          d="M7.5 16C6.94772 16 6.5 16.4477 6.5 17C6.5 17.5523 6.94772 18 7.5 18H10.5C11.0523 18 11.5 17.5523 11.5 17C11.5 16.4477 11.0523 16 10.5 16H7.5Z"
          fill={color}
        />
        <path
          d="M3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12Z"
          fill={color}
        />
        <path
          d="M3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17Z"
          fill={color}
        />
        <path
          d="M15.5 15.55C14.9477 15.55 14.5 15.9977 14.5 16.55C14.5 17.1023 14.9477 17.55 15.5 17.55H21.5C22.0523 17.55 22.5 17.1023 22.5 16.55C22.5 15.9977 22.0523 15.55 21.5 15.55H15.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ListRemovedIcon;
