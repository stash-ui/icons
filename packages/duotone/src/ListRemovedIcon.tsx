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
          d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6Z"
          fill={color}
        />
        <path
          d="M7.5 6C6.94772 6 6.5 6.44772 6.5 7C6.5 7.55228 6.94772 8 7.5 8H17.5C18.0523 8 18.5 7.55228 18.5 7C18.5 6.44772 18.0523 6 17.5 6H7.5Z"
          fill={color}
        />
        <path
          d="M7.6 11C6.99249 11 6.5 11.4925 6.5 12.1C6.5 12.7075 6.99249 13.2 7.6 13.2H13.4C14.0075 13.2 14.5 12.7075 14.5 12.1C14.5 11.4925 14.0075 11 13.4 11H7.6Z"
          fill={color}
        />
        <path
          d="M6.5 17C6.5 16.4477 6.94772 16 7.5 16H10.5C11.0523 16 11.5 16.4477 11.5 17C11.5 17.5523 11.0523 18 10.5 18H7.5C6.94772 18 6.5 17.5523 6.5 17Z"
          fill={color}
        />
        <path
          d="M3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12Z"
          fill={color}
        />
        <path
          d="M4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18C4.55228 18 5 17.5523 5 17C5 16.4477 4.55228 16 4 16Z"
          fill={color}
        />
        <path
          opacity="0.5"
          d="M14.5 16.55C14.5 15.9977 14.9477 15.55 15.5 15.55H17.5H19.5H21.5C22.0523 15.55 22.5 15.9977 22.5 16.55C22.5 17.1023 22.0523 17.55 21.5 17.55H19.5H17.5H15.5C14.9477 17.55 14.5 17.1023 14.5 16.55Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ListRemovedIcon;
