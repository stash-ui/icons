import * as React from 'react';
import { IconProps } from './types';

export const ChartTrendUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.75 9C13.75 8.58579 14.0858 8.25 14.5 8.25H18C18.4142 8.25 18.75 8.58579 18.75 9V12.5C18.75 12.9142 18.4142 13.25 18 13.25C17.5858 13.25 17.25 12.9142 17.25 12.5V10.8107L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L9 13.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L8.46967 11.4697C8.76256 11.1768 9.23744 11.1768 9.53033 11.4697L12 13.9393L16.1893 9.75H14.5C14.0858 9.75 13.75 9.41421 13.75 9Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendUpIcon;
