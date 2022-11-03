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
          d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L15 10.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L12 10.4142L8.41421 14H9.5C10.0523 14 10.5 14.4477 10.5 15C10.5 15.5523 10.0523 16 9.5 16H6C5.44772 16 5 15.5523 5 15V11.5C5 10.9477 5.44772 10.5 6 10.5C6.55228 10.5 7 10.9477 7 11.5V12.5858L11.2929 8.29289Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendDownIcon;
