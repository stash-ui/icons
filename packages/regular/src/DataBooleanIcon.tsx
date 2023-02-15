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
          d="M4 12.25C4 10.0409 5.79086 8.25 8 8.25C10.2091 8.25 12 10.0409 12 12.25C12 14.4591 10.2091 16.25 8 16.25C5.79086 16.25 4 14.4591 4 12.25ZM8 9.75C6.61929 9.75 5.5 10.8693 5.5 12.25C5.5 13.6307 6.61929 14.75 8 14.75C9.38071 14.75 10.5 13.6307 10.5 12.25C10.5 10.8693 9.38071 9.75 8 9.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 12.25C12 10.0409 13.7909 8.25 16 8.25C18.2091 8.25 20 10.0409 20 12.25C20 14.4591 18.2091 16.25 16 16.25C13.7909 16.25 12 14.4591 12 12.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DataBooleanIcon;
