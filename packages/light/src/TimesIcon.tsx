import * as React from 'react';
import { IconProps } from './types';

export const TimesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.40377 7.4038C7.59903 7.20854 7.91562 7.20854 8.11088 7.4038L12 11.2929L15.8891 7.4038C16.0843 7.20854 16.4009 7.20854 16.5962 7.4038C16.7914 7.59906 16.7914 7.91565 16.5962 8.11091L12.7071 12L16.5962 15.8891C16.7914 16.0843 16.7914 16.4009 16.5962 16.5962C16.4009 16.7915 16.0843 16.7915 15.8891 16.5962L12 12.7071L8.11088 16.5962C7.91562 16.7915 7.59903 16.7915 7.40377 16.5962C7.20851 16.4009 7.20851 16.0843 7.40377 15.8891L11.2929 12L7.40377 8.11091C7.20851 7.91565 7.20851 7.59906 7.40377 7.4038Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
