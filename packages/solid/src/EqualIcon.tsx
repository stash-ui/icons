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
          d="M6.5 10C6.5 9.72386 6.72386 9.5 7 9.5H17C17.2761 9.5 17.5 9.72386 17.5 10C17.5 10.2761 17.2761 10.5 17 10.5H7C6.72386 10.5 6.5 10.2761 6.5 10ZM6.5 14C6.5 13.7239 6.72386 13.5 7 13.5H17C17.2761 13.5 17.5 13.7239 17.5 14C17.5 14.2761 17.2761 14.5 17 14.5H7C6.72386 14.5 6.5 14.2761 6.5 14Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EqualIcon;
