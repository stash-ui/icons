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
          d="M7.4038 7.4038C7.59906 7.20854 7.91565 7.20854 8.11091 7.4038L12 11.2929L15.8891 7.4038C16.0843 7.20854 16.4009 7.20854 16.5962 7.4038C16.7915 7.59906 16.7915 7.91565 16.5962 8.11091L12.7071 12L16.5962 15.8891C16.7915 16.0843 16.7915 16.4009 16.5962 16.5962C16.4009 16.7915 16.0843 16.7915 15.8891 16.5962L12 12.7071L8.11091 16.5962C7.91565 16.7915 7.59906 16.7915 7.4038 16.5962C7.20854 16.4009 7.20854 16.0843 7.4038 15.8891L11.2929 12L7.4038 8.11091C7.20854 7.91565 7.20854 7.59906 7.4038 7.4038Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
