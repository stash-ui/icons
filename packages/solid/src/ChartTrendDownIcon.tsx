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
          d="M11.1161 8.11612C11.6043 7.62796 12.3957 7.62796 12.8839 8.11612L15 10.2322L17.1161 8.11612C17.6043 7.62796 18.3957 7.62796 18.8839 8.11612C19.372 8.60427 19.372 9.39573 18.8839 9.88388L15.8839 12.8839C15.3957 13.372 14.6043 13.372 14.1161 12.8839L12 10.7678L9.01777 13.75H9.5C10.1904 13.75 10.75 14.3096 10.75 15C10.75 15.6904 10.1904 16.25 9.5 16.25H6C5.30964 16.25 4.75 15.6904 4.75 15V11.5C4.75 10.8096 5.30964 10.25 6 10.25C6.69036 10.25 7.25 10.8096 7.25 11.5V11.9822L11.1161 8.11612Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendDownIcon;
