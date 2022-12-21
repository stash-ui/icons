import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7.75C11.8619 7.75 11.75 7.86193 11.75 8C11.75 8.13807 11.8619 8.25 12 8.25C12.1381 8.25 12.25 8.13807 12.25 8C12.25 7.86193 12.1381 7.75 12 7.75ZM10.25 8C10.25 7.0335 11.0335 6.25 12 6.25C12.9665 6.25 13.75 7.0335 13.75 8C13.75 8.9665 12.9665 9.75 12 9.75C11.0335 9.75 10.25 8.9665 10.25 8ZM11.75 12.4014L11.416 12.624C11.0714 12.8538 10.6057 12.7607 10.376 12.416C10.1462 12.0714 10.2393 11.6057 10.584 11.376L11.3066 10.8942C12.1373 10.3404 13.25 10.9359 13.25 11.9343V15.75H14C14.4142 15.75 14.75 16.0858 14.75 16.5C14.75 16.9142 14.4142 17.25 14 17.25H11C10.5858 17.25 10.25 16.9142 10.25 16.5C10.25 16.0858 10.5858 15.75 11 15.75H11.75V12.4014Z"
          fill={color}
        />
        <path
          d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default InfoCircleIcon;
