import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.4828 1.4569C11.7724 1.18103 12.2276 1.18103 12.5172 1.4569L19.5172 8.12356C19.8172 8.40923 19.8288 8.88396 19.5431 9.18391C19.2574 9.48386 18.7827 9.49543 18.4828 9.20977L12.75 3.75L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 3.75L5.51724 9.20977C5.2173 9.49543 4.74256 9.48386 4.4569 9.18391C4.17123 8.88396 4.18281 8.40923 4.48276 8.12356L11.4828 1.4569Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowUpLargeIcon;
