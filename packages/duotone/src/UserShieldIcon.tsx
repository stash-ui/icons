import * as React from 'react';
import { IconProps } from './types';

export const UserShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M14.0049 14.7123C14.0098 14.5428 14.0122 14.4581 14.0472 14.3734C14.0764 14.3027 14.1302 14.2294 14.1889 14.1804C14.2592 14.1217 14.3457 14.0917 14.5185 14.0319L17.2383 13.0906C17.3354 13.057 17.3839 13.0402 17.4336 13.0335C17.4777 13.0276 17.5223 13.0276 17.5664 13.0335C17.6161 13.0402 17.6646 13.057 17.7617 13.0906L20.4815 14.0319C20.6543 14.0917 20.7408 14.1217 20.8111 14.1804C20.8698 14.2294 20.9236 14.3027 20.9528 14.3734C20.9878 14.4581 20.9902 14.5428 20.9951 14.7123C21.0175 15.4866 20.9821 16.9817 20.4719 18.0857C19.9294 19.2593 18.5729 20.2856 17.8965 20.7446C17.7694 20.8307 17.7059 20.8738 17.6181 20.8952C17.5487 20.9121 17.4513 20.9121 17.3819 20.8952C17.2941 20.8738 17.2306 20.8307 17.1035 20.7446C16.4271 20.2856 15.0706 19.2593 14.5281 18.0857C14.0179 16.9817 13.9825 15.4866 14.0049 14.7123Z"
          fill={color}
        />
        <path
          d="M9.99948 3.75C8.69476 3.75 7.67054 4.7756 7.67054 6C7.67054 7.2244 8.69476 8.25 9.99948 8.25C11.3042 8.25 12.3284 7.2244 12.3284 6C12.3284 4.7756 11.3042 3.75 9.99948 3.75ZM6.17054 6C6.17054 3.91069 7.9033 2.25 9.99948 2.25C12.0957 2.25 13.8284 3.91069 13.8284 6C13.8284 8.08931 12.0957 9.75 9.99948 9.75C7.9033 9.75 6.17054 8.08931 6.17054 6ZM7.47008 11.9663C7.28853 11.8489 7.15096 11.8417 7.087 11.8593C6.94333 11.8989 6.80033 11.9414 6.6581 11.9869L5.67369 12.3021C4.96643 12.5284 4.42995 13.0566 4.20551 13.7059C4.18368 13.769 4.16715 13.8527 4.15393 13.9777L3.76289 17.6766L3.761 17.6898C3.68616 18.2167 3.96706 18.62 4.39405 18.7191C5.47127 18.9691 7.28546 19.25 9.99948 19.25C10.4137 19.25 10.7495 19.5858 10.7495 20C10.7495 20.4142 10.4137 20.75 9.99948 20.75C7.18166 20.75 5.25301 20.4583 4.05497 20.1803C2.76617 19.8812 2.1135 18.6695 2.27391 17.4933L2.66224 13.82C2.68045 13.6478 2.71202 13.4351 2.78783 13.2158C3.17186 12.1048 4.07439 11.239 5.2164 10.8735L6.2008 10.5583C6.36265 10.5065 6.52534 10.4581 6.68878 10.4131C7.30027 10.2448 7.88139 10.446 8.28465 10.7068C8.65467 10.9461 9.25877 11.2356 9.99948 11.2356C10.7402 11.2356 11.3443 10.9461 11.7143 10.7068C12.1176 10.446 12.6987 10.2448 13.3102 10.4131C13.4736 10.4581 13.6363 10.5065 13.7982 10.5583L14.7826 10.8735C15.1771 10.9997 15.3945 11.4219 15.2682 11.8164C15.1419 12.2109 14.7198 12.4283 14.3253 12.3021L13.3409 11.9869C13.1986 11.9414 13.0556 11.8989 12.912 11.8593C12.848 11.8417 12.7104 11.8489 12.5289 11.9663C12.016 12.298 11.1287 12.7356 9.99948 12.7356C8.87025 12.7356 7.98297 12.298 7.47008 11.9663Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserShieldIcon;
