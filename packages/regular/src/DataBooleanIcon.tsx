import * as React from 'react';
import { IconProps } from './types';

export const DataBooleanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 12.25C4.25 10.1789 5.92893 8.5 8 8.5C10.0711 8.5 11.75 10.1789 11.75 12.25C11.75 14.3211 10.0711 16 8 16C5.92893 16 4.25 14.3211 4.25 12.25ZM8 9.5C6.48122 9.5 5.25 10.7312 5.25 12.25C5.25 13.7688 6.48122 15 8 15C9.51878 15 10.75 13.7688 10.75 12.25C10.75 10.7312 9.51878 9.5 8 9.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DataBooleanIcon;
