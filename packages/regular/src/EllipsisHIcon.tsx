import * as React from 'react';
import { IconProps } from './types';

export const EllipsisHIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75 7.4665 13.75 8.25 12.9665 8.25 12 8.25 11.0335 7.4665 10.25 6.5 10.25 5.5335 10.25 4.75 11.0335 4.75 12zM10.25 12C10.25 12.9665 11.0335 13.75 12 13.75 12.9665 13.75 13.75 12.9665 13.75 12 13.75 11.0335 12.9665 10.25 12 10.25 11.0335 10.25 10.25 11.0335 10.25 12zM17.5 13.75C16.5335 13.75 15.75 12.9665 15.75 12 15.75 11.0335 16.5335 10.25 17.5 10.25 18.4665 10.25 19.25 11.0335 19.25 12 19.25 12.9665 18.4665 13.75 17.5 13.75z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EllipsisHIcon;
