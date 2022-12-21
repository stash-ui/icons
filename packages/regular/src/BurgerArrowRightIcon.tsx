import * as React from 'react';
import { IconProps } from './types';

export const BurgerArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 5.5C3.72386 5.5 3.5 5.72386 3.5 6 3.5 6.27614 3.72386 6.5 4 6.5H16C16.2761 6.5 16.5 6.27614 16.5 6 16.5 5.72386 16.2761 5.5 16 5.5H4zM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12 4.5 12.2761 4.72386 12.5 5 12.5H20.7929L19.1464 14.1464C18.9512 14.3417 18.9512 14.6583 19.1464 14.8536 19.3417 15.0488 19.6583 15.0488 19.8536 14.8536L22.3536 12.3536C22.5488 12.1583 22.5488 11.8417 22.3536 11.6464L19.8536 9.14645C19.6583 8.95118 19.3417 8.95118 19.1464 9.14645 18.9512 9.34171 18.9512 9.65829 19.1464 9.85355L20.7929 11.5H5zM3.5 18C3.5 17.7239 3.72386 17.5 4 17.5H16C16.2761 17.5 16.5 17.7239 16.5 18 16.5 18.2761 16.2761 18.5 16 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerArrowRightIcon;
