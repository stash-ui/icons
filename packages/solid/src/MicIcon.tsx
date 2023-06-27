import * as React from 'react';
import { IconProps } from './types';

export const MicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.25C10.2051 3.25 8.75 4.70508 8.75 6.5V12.5C8.75 14.2949 10.2051 15.75 12 15.75C13.7949 15.75 15.25 14.2949 15.25 12.5V6.5C15.25 4.70507 13.7949 3.25 12 3.25Z"
          fill={color}
        />
        <path
          d="M7.75 12.5C7.75 12.0858 7.41421 11.75 7 11.75C6.58579 11.75 6.25 12.0858 6.25 12.5C6.25 15.4214 8.42873 17.834 11.25 18.2015V19.25H9C8.58579 19.25 8.25 19.5858 8.25 20C8.25 20.4142 8.58579 20.75 9 20.75H15C15.4142 20.75 15.75 20.4142 15.75 20C15.75 19.5858 15.4142 19.25 15 19.25H12.75V18.2015C15.5713 17.834 17.75 15.4214 17.75 12.5C17.75 12.0858 17.4142 11.75 17 11.75C16.5858 11.75 16.25 12.0858 16.25 12.5C16.25 14.8472 14.3472 16.75 12 16.75C9.65279 16.75 7.75 14.8472 7.75 12.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default MicIcon;
