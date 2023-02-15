import * as React from 'react';
import { IconProps } from './types';

export const BurgerArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6C7 5.44772 7.44772 5 8 5H20C20.5523 5 21 5.44772 21 6 21 6.55228 20.5523 7 20 7H8C7.44772 7 7 6.55228 7 6zM5.03033 13.9697L3.86066 12.8H19.0002C19.442 12.8 19.8002 12.4418 19.8002 12 19.8002 11.5582 19.442 11.2 19.0002 11.2H3.86066L5.03033 10.0303C5.32322 9.73744 5.32322 9.26256 5.03033 8.96967 4.73744 8.67678 4.26256 8.67678 3.96967 8.96967L1.46967 11.4697C1.17678 11.7626 1.17678 12.2374 1.46967 12.5303L3.96967 15.0303C4.26256 15.3232 4.73744 15.3232 5.03033 15.0303 5.32322 14.7374 5.32322 14.2626 5.03033 13.9697zM8 17C7.44772 17 7 17.4477 7 18 7 18.5523 7.44772 19 8 19H20C20.5523 19 21 18.5523 21 18 21 17.4477 20.5523 17 20 17H8z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerArrowLeftIcon;
