import * as React from 'react';
import { IconProps } from './types';

export const CaretLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.77273 12.6398L13.4091 15.8386C13.8586 16.234 14.5 15.8578 14.5 15.1988V8.80116C14.5 8.14216 13.8586 7.766 13.4091 8.16139L9.77273 11.3602C9.40909 11.6801 9.40909 12.3199 9.77273 12.6398Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CaretLeftIcon;
