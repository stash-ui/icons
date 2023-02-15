import * as React from 'react';
import { IconProps } from './types';

export const TrendArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.96967 18.5303C6.26256 18.8232 6.73744 18.8232 7.03033 18.5303L9.53033 16.0303C9.82322 15.7374 9.82322 15.2626 9.53033 14.9697 9.23744 14.6768 8.76256 14.6768 8.46967 14.9697L7.25 16.1893 7.25 6C7.25 5.58579 6.91422 5.25 6.5 5.25 6.08579 5.25 5.75 5.58579 5.75 6L5.75 16.1893 4.53033 14.9697C4.23744 14.6768 3.76256 14.6768 3.46967 14.9697 3.17678 15.2626 3.17678 15.7374 3.46967 16.0303L5.96967 18.5303zM12.25 17C12.25 17.4142 12.5858 17.75 13 17.75H20C20.4142 17.75 20.75 17.4142 20.75 17 20.75 16.5858 20.4142 16.25 20 16.25H13C12.5858 16.25 12.25 16.5858 12.25 17zM11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25H17C17.4142 14.25 17.75 13.9142 17.75 13.5 17.75 13.0858 17.4142 12.75 17 12.75H12C11.5858 12.75 11.25 13.0858 11.25 13.5zM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75H15C15.4142 10.75 15.75 10.4142 15.75 10 15.75 9.58579 15.4142 9.25 15 9.25H12C11.5858 9.25 11.25 9.58579 11.25 10zM11.25 7C11.25 7.41421 11.5858 7.75 12 7.75H13C13.4142 7.75 13.75 7.41421 13.75 7 13.75 6.58579 13.4142 6.25 13 6.25H12C11.5858 6.25 11.25 6.58579 11.25 7z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TrendArrowDownIcon;
