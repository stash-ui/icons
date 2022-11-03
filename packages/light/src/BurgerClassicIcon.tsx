import * as React from 'react';
import { IconProps } from './types';

export const BurgerClassicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 6C4.5 5.72386 4.72386 5.5 5 5.5H19C19.2761 5.5 19.5 5.72386 19.5 6 19.5 6.27614 19.2761 6.5 19 6.5H5C4.72386 6.5 4.5 6.27614 4.5 6zM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12 19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12zM5 17.5C4.72386 17.5 4.5 17.7239 4.5 18 4.5 18.2761 4.72386 18.5 5 18.5H19C19.2761 18.5 19.5 18.2761 19.5 18 19.5 17.7239 19.2761 17.5 19 17.5H5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerClassicIcon;
