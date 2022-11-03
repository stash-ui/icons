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
          d="M12 4.25C10.7574 4.25 9.75 5.25736 9.75 6.5 9.75 7.74264 10.7574 8.75 12 8.75 13.2426 8.75 14.25 7.74264 14.25 6.5 14.25 5.25736 13.2426 4.25 12 4.25zM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12 9.75 13.2426 10.7574 14.25 12 14.25 13.2426 14.25 14.25 13.2426 14.25 12 14.25 10.7574 13.2426 9.75 12 9.75zM12 15.25C10.7574 15.25 9.75 16.2574 9.75 17.5 9.75 18.7426 10.7574 19.75 12 19.75 13.2426 19.75 14.25 18.7426 14.25 17.5 14.25 16.2574 13.2426 15.25 12 15.25z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EllipsisVIcon;
