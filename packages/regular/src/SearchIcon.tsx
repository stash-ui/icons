import * as React from 'react';
import { IconProps } from './types';

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.44 3C6.331 3 3 6.331 3 10.44C3 14.549 6.331 17.88 10.44 17.88C12.2708 17.88 13.9471 17.2187 15.2432 16.122C15.2212 16.393 15.3139 16.6715 15.5212 16.8788L19.3612 20.7188C19.7361 21.0937 20.3439 21.0937 20.7188 20.7188C21.0937 20.3439 21.0937 19.7361 20.7188 19.3612L16.8788 15.5212C16.6715 15.3139 16.393 15.2212 16.122 15.2432C17.2187 13.9471 17.88 12.2708 17.88 10.44C17.88 6.331 14.549 3 10.44 3ZM4.44 10.44C4.44 7.12629 7.12629 4.44 10.44 4.44C13.7537 4.44 16.44 7.12629 16.44 10.44C16.44 13.7537 13.7537 16.44 10.44 16.44C7.12629 16.44 4.44 13.7537 4.44 10.44Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SearchIcon;
