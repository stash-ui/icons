import * as React from 'react';
import { IconProps } from './types';

export const CheckCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967C15.2374 9.17678 14.7626 9.17678 14.4697 9.46967L11 12.9393L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L15.5303 10.5303Z"
          fill={color}
        />
        <path
          d="M12 20.75C7.16751 20.75 3.25 16.8325 3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75ZM4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CheckCircleIcon;
