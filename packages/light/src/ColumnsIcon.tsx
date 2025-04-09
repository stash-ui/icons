import * as React from 'react';
import { IconProps } from './types';

export const ColumnsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7ZM12.5 5H16C17.1046 5 18 5.89543 18 7V17C18 18.1046 17.1046 19 16 19H12.5V5ZM11.5 5H8C6.89543 5 6 5.89543 6 7V17C6 18.1046 6.89543 19 8 19H11.5V5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ColumnsIcon;
