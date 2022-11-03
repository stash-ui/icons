import * as React from 'react';
import { IconProps } from './types';

export const PauseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7.25C7 6.2835 7.7835 5.5 8.75 5.5 9.7165 5.5 10.5 6.2835 10.5 7.25V16.75C10.5 17.7165 9.7165 18.5 8.75 18.5 7.7835 18.5 7 17.7165 7 16.75V7.25zM8.75 6.5C8.33579 6.5 8 6.83579 8 7.25V16.75C8 17.1642 8.33579 17.5 8.75 17.5 9.16421 17.5 9.5 17.1642 9.5 16.75V7.25C9.5 6.83579 9.16421 6.5 8.75 6.5zM13.5 7.25C13.5 6.2835 14.2835 5.5 15.25 5.5 16.2165 5.5 17 6.2835 17 7.25V16.75C17 17.7165 16.2165 18.5 15.25 18.5 14.2835 18.5 13.5 17.7165 13.5 16.75V7.25zM15.25 6.5C14.8358 6.5 14.5 6.83579 14.5 7.25V16.75C14.5 17.1642 14.8358 17.5 15.25 17.5 15.6642 17.5 16 17.1642 16 16.75V7.25C16 6.83579 15.6642 6.5 15.25 6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PauseIcon;
