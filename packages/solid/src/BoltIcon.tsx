import * as React from 'react';
import { IconProps } from './types';

export const BoltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9808 4.13736C16.0418 3.92386 15.9547 3.69571 15.7669 3.57719C15.5791 3.45867 15.3357 3.47818 15.1692 3.62509L6.66921 11.1251C6.5133 11.2627 6.4588 11.4824 6.53234 11.6768C6.60587 11.8713 6.7921 12 7.00002 12H10.7355L7.54194 19.2996C7.44863 19.5129 7.51486 19.7623 7.70168 19.9012C7.8885 20.0402 8.14647 20.0317 8.32385 19.881L18.3238 11.381C18.4836 11.2452 18.5416 11.0242 18.4693 10.8275C18.397 10.6308 18.2096 10.5 18 10.5H14.1629L15.9808 4.13736Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoltIcon;
