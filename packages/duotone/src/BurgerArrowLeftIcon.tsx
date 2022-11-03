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
        <g opacity=".5" fill={color}>
          <path d="M8 5C7.44772 5 7 5.44772 7 6 7 6.55228 7.44772 7 8 7H20C20.5523 7 21 6.55228 21 6 21 5.44772 20.5523 5 20 5H8zM8 17C7.44772 17 7 17.4477 7 18 7 18.5523 7.44772 19 8 19H20C20.5523 19 21 18.5523 21 18 21 17.4477 20.5523 17 20 17H8z" />
        </g>
        <path
          d="M5.03033 8.96967C5.32322 9.26256 5.32322 9.73744 5.03033 10.0303L3.81066 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H3.81066L5.03033 13.9697C5.32322 14.2626 5.32322 14.7374 5.03033 15.0303C4.73744 15.3232 4.26256 15.3232 3.96967 15.0303L1.46967 12.5303C1.17678 12.2374 1.17678 11.7626 1.46967 11.4697L3.96967 8.96967C4.26256 8.67678 4.73744 8.67678 5.03033 8.96967Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerArrowLeftIcon;
