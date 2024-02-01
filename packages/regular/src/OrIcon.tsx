import * as React from 'react';
import { IconProps } from './types';

export const OrIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7216 19.3523V5H9V19.3523H10.7216ZM15.2099 19.3523V5H13.4883V19.3523H15.2099Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default OrIcon;
