import * as React from 'react';
import { IconProps } from './types';

export const ClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ClockIcon;
