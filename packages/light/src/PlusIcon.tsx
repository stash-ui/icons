import * as React from 'react';
import { IconProps } from './types';

export const PlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5.5C12.2761 5.5 12.5 5.72386 12.5 6V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12C18.5 12.2761 18.2761 12.5 18 12.5H12.5V18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18V12.5H6C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5H11.5V6C11.5 5.72386 11.7239 5.5 12 5.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlusIcon;
