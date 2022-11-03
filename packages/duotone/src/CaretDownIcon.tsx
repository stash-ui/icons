import * as React from 'react';
import { IconProps } from './types';

export const CaretDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3602 14.2273L8.16139 10.5909C7.766 10.1414 8.14216 9.5 8.80116 9.5H15.1988C15.8578 9.5 16.234 10.1414 15.8386 10.5909L12.6398 14.2273C12.3199 14.5909 11.6801 14.5909 11.3602 14.2273Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CaretDownIcon;
