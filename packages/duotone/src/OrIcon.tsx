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
        <path d="M10.7216 5V19.3523H9V5H10.7216Z" fill={color} />
        <path opacity="0.5" d="M15.2099 5V19.3523H13.4883V5H15.2099Z" fill={color} />
      </svg>
    );
  }
);

export default OrIcon;
