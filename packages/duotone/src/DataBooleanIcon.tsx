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
          opacity=".5"
          d="M19.25 12.25C19.25 14.0449 17.7949 15.5 16 15.5C14.2051 15.5 12.75 14.0449 12.75 12.25C12.75 10.4551 14.2051 9 16 9C17.7949 9 19.25 10.4551 19.25 12.25Z"
          fill={color}
        />
        <path
          d="M8 8.25C5.79086 8.25 4 10.0409 4 12.25C4 14.4591 5.79086 16.25 8 16.25C10.2091 16.25 12 14.4591 12 12.25C12 14.4591 13.7909 16.25 16 16.25C18.2091 16.25 20 14.4591 20 12.25C20 10.0409 18.2091 8.25 16 8.25C13.7909 8.25 12 10.0409 12 12.25C12 10.0409 10.2091 8.25 8 8.25ZM5.5 12.25C5.5 10.8693 6.61929 9.75 8 9.75C9.38071 9.75 10.5 10.8693 10.5 12.25C10.5 13.6307 9.38071 14.75 8 14.75C6.61929 14.75 5.5 13.6307 5.5 12.25ZM13.5 12.25C13.5 10.8693 14.6193 9.75 16 9.75C17.3807 9.75 18.5 10.8693 18.5 12.25C18.5 13.6307 17.3807 14.75 16 14.75C14.6193 14.75 13.5 13.6307 13.5 12.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DataBooleanIcon;
