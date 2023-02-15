import * as React from 'react';
import { IconProps } from './types';

export const BrowserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7.5C7 6.94772 7.44772 6.5 8 6.5 8.55228 6.5 9 6.94772 9 7.5 9 8.05228 8.55228 8.5 8 8.5 7.44772 8.5 7 8.05228 7 7.5zM10 7.5C10 6.94772 10.4477 6.5 11 6.5H16C16.5523 6.5 17 6.94772 17 7.5 17 8.05228 16.5523 8.5 16 8.5H11C10.4477 8.5 10 8.05228 10 7.5z"
          fill={color}
        />
        <path
          d="M10.367 3.25H13.633C14.7251 3.24999 15.5906 3.24999 16.2883 3.30699C17.0017 3.36527 17.6053 3.48688 18.1565 3.76772C19.0502 4.22312 19.7769 4.94978 20.2323 5.84355C20.5131 6.39472 20.6347 6.99834 20.693 7.71173C20.75 8.40935 20.75 9.27484 20.75 10.367V13.633C20.75 14.7252 20.75 15.5906 20.693 16.2883C20.6347 17.0017 20.5131 17.6053 20.2323 18.1565C19.7769 19.0502 19.0502 19.7769 18.1565 20.2323C17.6053 20.5131 17.0017 20.6347 16.2883 20.693C15.5906 20.75 14.7252 20.75 13.633 20.75H10.367C9.27484 20.75 8.40935 20.75 7.71173 20.693C6.99834 20.6347 6.39472 20.5131 5.84355 20.2323C4.94978 19.7769 4.22312 19.0502 3.76772 18.1565C3.48688 17.6053 3.36527 17.0017 3.30699 16.2883C3.24999 15.5906 3.24999 14.7251 3.25 13.633V10.367C3.24999 9.27485 3.24999 8.40935 3.30699 7.71173C3.36527 6.99834 3.48688 6.39472 3.76772 5.84355C4.22312 4.94978 4.94978 4.22312 5.84355 3.76772C6.39472 3.48688 6.99834 3.36527 7.71173 3.30699C8.40935 3.24999 9.27486 3.24999 10.367 3.25ZM7.83388 4.80201C7.21325 4.85271 6.829 4.94909 6.52453 5.10423C5.913 5.41582 5.41582 5.913 5.10423 6.52453C4.94909 6.829 4.85271 7.21325 4.80201 7.83388C4.75686 8.3865 4.7509 9.07394 4.75012 10H19.2499C19.2491 9.07394 19.2431 8.3865 19.198 7.83388C19.1473 7.21325 19.0509 6.829 18.8958 6.52453C18.5842 5.913 18.087 5.41582 17.4755 5.10423C17.171 4.94909 16.7867 4.85271 16.1661 4.80201C15.5367 4.75058 14.7325 4.75 13.6 4.75H10.4C9.26752 4.75 8.46326 4.75058 7.83388 4.80201ZM4.75 13.6L4.75 11.5H19.25V13.6C19.25 14.7325 19.2494 15.5367 19.198 16.1661C19.1473 16.7867 19.0509 17.171 18.8958 17.4755C18.5842 18.087 18.087 18.5842 17.4755 18.8958C17.171 19.0509 16.7867 19.1473 16.1661 19.198C15.5367 19.2494 14.7325 19.25 13.6 19.25H10.4C9.26752 19.25 8.46327 19.2494 7.83388 19.198C7.21325 19.1473 6.829 19.0509 6.52453 18.8958C5.913 18.5842 5.41582 18.087 5.10423 17.4755C4.94909 17.171 4.85271 16.7867 4.80201 16.1661C4.75058 15.5367 4.75 14.7325 4.75 13.6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default BrowserIcon;
