import * as React from 'react';
import { IconProps } from './types';

export const UnderlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.67808 14.9292C8.99542 14.5452 8.45675 14.0225 8.06208 13.3612C7.67808 12.6892 7.48608 11.9318 7.48608 11.0892V6H9.21408V10.9452C9.21408 11.4892 9.34208 11.9798 9.59808 12.4172C9.85408 12.8438 10.1901 13.1852 10.6061 13.4412C11.46 13.9535 12.5833 13.9541 13.4381 13.4412C13.8754 13.1852 14.2221 12.8438 14.4781 12.4172C14.7341 11.9798 14.8621 11.4892 14.8621 10.9452V6H16.5101V11.0892C16.5101 11.9318 16.3128 12.6892 15.9181 13.3612C15.5341 14.0225 15.0008 14.5452 14.3181 14.9292C13.6228 15.3094 12.8114 15.4997 12 15.5C11.1873 15.5003 10.3745 15.31 9.67808 14.9292Z"
          fill={color}
        />
        <path
          d="M7.25 17.75C7.25 17.3358 7.58579 17 8 17H16C16.4142 17 16.75 17.3358 16.75 17.75C16.75 18.1642 16.4142 18.5 16 18.5H8C7.58579 18.5 7.25 18.1642 7.25 17.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default UnderlineIcon;
