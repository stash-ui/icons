import * as React from 'react';
import { IconProps } from './types';

export const DivideIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5C10.6193 5 9.5 6.11929 9.5 7.5 9.5 8.88071 10.6193 10 12 10 13.3807 10 14.5 8.88071 14.5 7.5 14.5 6.11929 13.3807 5 12 5zM11.5 7.5C11.5 7.22386 11.7239 7 12 7 12.2761 7 12.5 7.22386 12.5 7.5 12.5 7.77614 12.2761 8 12 8 11.7239 8 11.5 7.77614 11.5 7.5zM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12 19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12zM9.5 16.5C9.5 15.1193 10.6193 14 12 14 13.3807 14 14.5 15.1193 14.5 16.5 14.5 17.8807 13.3807 19 12 19 10.6193 19 9.5 17.8807 9.5 16.5zM12 16C11.7239 16 11.5 16.2239 11.5 16.5 11.5 16.7761 11.7239 17 12 17 12.2761 17 12.5 16.7761 12.5 16.5 12.5 16.2239 12.2761 16 12 16z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DivideIcon;
