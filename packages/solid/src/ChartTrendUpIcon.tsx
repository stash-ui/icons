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
          d="M13.25 9C13.25 8.30964 13.8096 7.75 14.5 7.75H18C18.6904 7.75 19.25 8.30964 19.25 9V12.5C19.25 13.1904 18.6904 13.75 18 13.75C17.3096 13.75 16.75 13.1904 16.75 12.5V12.0178L12.8839 15.8839C12.3957 16.372 11.6043 16.372 11.1161 15.8839L9 13.7678L6.88388 15.8839C6.39573 16.372 5.60427 16.372 5.11612 15.8839C4.62796 15.3957 4.62796 14.6043 5.11612 14.1161L8.11612 11.1161C8.60427 10.628 9.39573 10.628 9.88388 11.1161L12 13.2322L14.9822 10.25H14.5C13.8096 10.25 13.25 9.69036 13.25 9Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendUpIcon;
