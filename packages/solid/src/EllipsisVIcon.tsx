import * as React from 'react';
import { IconProps } from './types';

export const EllipsisVIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 19.25C12.9665 19.25 13.75 18.4665 13.75 17.5 13.75 16.5335 12.9665 15.75 12 15.75 11.0335 15.75 10.25 16.5335 10.25 17.5 10.25 18.4665 11.0335 19.25 12 19.25zM12 13.75C12.9665 13.75 13.75 12.9665 13.75 12 13.75 11.0335 12.9665 10.25 12 10.25 11.0335 10.25 10.25 11.0335 10.25 12 10.25 12.9665 11.0335 13.75 12 13.75zM13.75 6.5C13.75 7.4665 12.9665 8.25 12 8.25 11.0335 8.25 10.25 7.4665 10.25 6.5 10.25 5.5335 11.0335 4.75 12 4.75 12.9665 4.75 13.75 5.5335 13.75 6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EllipsisVIcon;
