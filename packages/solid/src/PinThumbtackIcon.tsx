import * as React from 'react';
import { IconProps } from './types';

export const PinThumbtackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.25016 4.5C7.25016 3.5335 8.03366 2.75 9.00016 2.75H15.0002C15.9667 2.75 16.7502 3.5335 16.7502 4.5 16.7502 5.56267 15.8609 6.25 14.8594 6.25L15.4223 10.378C17.257 10.8989 18.3735 12.5426 18.7356 14.3529 18.827 14.8098 18.4661 15.25 18.0002 15.25H6.00016C5.53417 15.25 5.17333 14.8098 5.26472 14.3529 5.62678 12.5426 6.74327 10.8989 8.57804 10.378L9.14094 6.25C8.13942 6.25 7.25016 5.56267 7.25016 4.5zM12.7502 16.5C12.7502 16.0858 12.4144 15.75 12.0002 15.75 11.5859 15.75 11.2502 16.0858 11.2502 16.5V20.5C11.2502 20.9142 11.5859 21.25 12.0002 21.25 12.4144 21.25 12.7502 20.9142 12.7502 20.5V16.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PinThumbtackIcon;
