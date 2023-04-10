import * as React from 'react';
import { IconProps } from './types';

export const ListUlIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75 6C4.33579 6 4 6.33579 4 6.75 4 7.16421 4.33579 7.5 4.75 7.5 5.16421 7.5 5.5 7.16421 5.5 6.75 5.5 6.33579 5.16421 6 4.75 6zM7.75 6C7.33579 6 7 6.33579 7 6.75 7 7.16421 7.33579 7.5 7.75 7.5H18.25C18.6642 7.5 19 7.16421 19 6.75 19 6.33579 18.6642 6 18.25 6H7.75zM7.75 11C7.33579 11 7 11.3358 7 11.75 7 12.1642 7.33579 12.5 7.75 12.5H18.25C18.6642 12.5 19 12.1642 19 11.75 19 11.3358 18.6642 11 18.25 11H7.75zM7 16.75C7 16.3358 7.33579 16 7.75 16H18.25C18.6642 16 19 16.3358 19 16.75 19 17.1642 18.6642 17.5 18.25 17.5H7.75C7.33579 17.5 7 17.1642 7 16.75zM4 11.75C4 11.3358 4.33579 11 4.75 11 5.16421 11 5.5 11.3358 5.5 11.75 5.5 12.1642 5.16421 12.5 4.75 12.5 4.33579 12.5 4 12.1642 4 11.75zM4.75 16C4.33579 16 4 16.3358 4 16.75 4 17.1642 4.33579 17.5 4.75 17.5 5.16421 17.5 5.5 17.1642 5.5 16.75 5.5 16.3358 5.16421 16 4.75 16z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ListUlIcon;