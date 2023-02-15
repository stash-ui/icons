import * as React from 'react';
import { IconProps } from './types';

export const ListUlIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 6C4.44772 6 4 6.44772 4 7 4 7.55228 4.44772 8 5 8 5.55228 8 6 7.55228 6 7 6 6.44772 5.55228 6 5 6zM4 12C4 11.4477 4.44772 11 5 11 5.55228 11 6 11.4477 6 12 6 12.5523 5.55228 13 5 13 4.44772 13 4 12.5523 4 12zM5 16C4.44772 16 4 16.4477 4 17 4 17.5523 4.44772 18 5 18 5.55228 18 6 17.5523 6 17 6 16.4477 5.55228 16 5 16z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <path d="M8.5 6C7.94772 6 7.5 6.44772 7.5 7 7.5 7.55228 7.94772 8 8.5 8H18.5C19.0523 8 19.5 7.55228 19.5 7 19.5 6.44772 19.0523 6 18.5 6H8.5zM8.6 11C7.99249 11 7.5 11.4925 7.5 12.1 7.5 12.7075 7.99249 13.2 8.6 13.2H18.4C19.0075 13.2 19.5 12.7075 19.5 12.1 19.5 11.4925 19.0075 11 18.4 11H8.6zM7.5 17C7.5 16.4477 7.94772 16 8.5 16H18.5C19.0523 16 19.5 16.4477 19.5 17 19.5 17.5523 19.0523 18 18.5 18H8.5C7.94772 18 7.5 17.5523 7.5 17z" />
        </g>
      </svg>
    );
  }
);

export default ListUlIcon;
