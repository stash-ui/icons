import * as React from 'react';
import { IconProps } from './types';

export const MicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 6.5C9 4.84315 10.3431 3.5 12 3.5C13.6569 3.5 15 4.84315 15 6.5V12.5C15 14.1569 13.6569 15.5 12 15.5C10.3431 15.5 9 14.1569 9 12.5V6.5ZM12 4.5C10.8954 4.5 10 5.39543 10 6.5V12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5V6.5C14 5.39543 13.1046 4.5 12 4.5ZM7 12C7.27614 12 7.5 12.2239 7.5 12.5C7.5 14.9853 9.51472 17 12 17C14.4853 17 16.5 14.9853 16.5 12.5C16.5 12.2239 16.7239 12 17 12C17.2761 12 17.5 12.2239 17.5 12.5C17.5 15.369 15.3033 17.725 12.5 17.9776V19.5H15C15.2761 19.5 15.5 19.7239 15.5 20C15.5 20.2761 15.2761 20.5 15 20.5H9C8.72386 20.5 8.5 20.2761 8.5 20C8.5 19.7239 8.72386 19.5 9 19.5H11.5V17.9776C8.69675 17.725 6.5 15.369 6.5 12.5C6.5 12.2239 6.72386 12 7 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default MicIcon;
