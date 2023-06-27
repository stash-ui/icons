import * as React from 'react';
import { IconProps } from './types';

export const AngleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1635 8.96362C10.515 8.61214 11.0848 8.61214 11.4363 8.96362L13.8363 11.3636C14.1878 11.7151 14.1878 12.2849 13.8363 12.6364L11.4363 15.0364C11.0848 15.3879 10.515 15.3879 10.1635 15.0364C9.81203 14.6849 9.81203 14.1151 10.1635 13.7636L11.9271 12L10.1635 10.2364C9.81203 9.88494 9.81203 9.31509 10.1635 8.96362Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleRightIcon;
