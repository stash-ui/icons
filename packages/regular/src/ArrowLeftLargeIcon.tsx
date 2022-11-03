import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.18391 4.4569C9.48386 4.74256 9.49543 5.2173 9.20977 5.51724L3.75 11.25L22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75L3.75 12.75L9.20977 18.4828C9.49543 18.7827 9.48386 19.2574 9.18391 19.5431C8.88396 19.8288 8.40923 19.8172 8.12356 19.5172L1.4569 12.5172C1.18103 12.2276 1.18103 11.7724 1.4569 11.4828L8.12356 4.48276C8.40923 4.18281 8.88396 4.17123 9.18391 4.4569Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowLeftLargeIcon;
