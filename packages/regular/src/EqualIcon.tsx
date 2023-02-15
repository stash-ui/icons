import * as React from 'react';
import { IconProps } from './types';

export const EqualIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10ZM6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EqualIcon;
