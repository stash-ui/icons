import * as React from 'react';
import { IconProps } from './types';

export const ChartTrendDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L15 10.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L15.5303 12.5303C15.2374 12.8232 14.7626 12.8232 14.4697 12.5303L12 10.0607L7.81066 14.25H9.5C9.91421 14.25 10.25 14.5858 10.25 15C10.25 15.4142 9.91421 15.75 9.5 15.75H6C5.58579 15.75 5.25 15.4142 5.25 15V11.5C5.25 11.0858 5.58579 10.75 6 10.75C6.41421 10.75 6.75 11.0858 6.75 11.5V13.1893L11.4697 8.46967Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendDownIcon;
