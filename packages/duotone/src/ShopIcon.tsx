import * as React from 'react';
import { IconProps } from './types';

export const ShopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.20723 5.4855C5.38796 5.1843 5.71346 5 6.06473 5L17.9323 5C18.2836 5 18.6091 5.1843 18.7898 5.4855L21.0442 9.24275C21.2441 9.57601 21.0041 10 20.6154 10H3.38163C2.99298 10 2.75293 9.57601 2.95289 9.24275L5.20723 5.4855Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M4.5 10V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H6C6.55228 19.5 7 19.0523 7 18.5V13.2C7 13.0895 7.08954 13 7.2 13H10.3C10.4105 13 10.5 13.0895 10.5 13.2V18.5C10.5 19.0523 10.9477 19.5 11.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V10H4.5ZM12.5 13.1667C12.5 12.9365 12.6865 12.75 12.9167 12.75H17.0833C17.3135 12.75 17.5 12.9365 17.5 13.1667V16.0833C17.5 16.3135 17.3135 16.5 17.0833 16.5H12.9167C12.6865 16.5 12.5 16.3135 12.5 16.0833V13.1667Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ShopIcon;
