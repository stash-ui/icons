import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.34829 7.11612C5.83645 6.62796 6.62791 6.62796 7.11606 7.11612L11.9999 12L7.11606 16.8839C6.62791 17.372 5.83645 17.372 5.34829 16.8839C4.86014 16.3957 4.86014 15.6043 5.34829 15.1161L8.46441 12L5.34829 8.88388C4.86014 8.39573 4.86014 7.60427 5.34829 7.11612Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.3661 7.11612C12.8542 6.62796 13.6457 6.62796 14.1338 7.11612L19.0177 12L14.1338 16.8839C13.6457 17.372 12.8542 17.372 12.3661 16.8839C11.8779 16.3957 11.8779 15.6043 12.3661 15.1161L15.4822 12L12.3661 8.88388C11.8779 8.39573 11.8779 7.60427 12.3661 7.11612Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleRightIcon;
