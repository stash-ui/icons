import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.8841 5.34836C17.3723 5.83651 17.3723 6.62797 16.8841 7.11612L12.0002 12L7.11636 7.11612C6.62821 6.62797 6.62821 5.83651 7.11636 5.34836C7.60452 4.8602 8.39597 4.8602 8.88413 5.34836L12.0002 8.46447L15.1164 5.34836C15.6045 4.8602 16.396 4.8602 16.8841 5.34836Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16.8841 12.3661C17.3723 12.8543 17.3723 13.6457 16.8841 14.1339L12.0002 19.0178L7.11636 14.1339C6.62821 13.6457 6.62821 12.8543 7.11636 12.3661C7.60452 11.878 8.39597 11.878 8.88413 12.3661L12.0002 15.4822L15.1164 12.3661C15.6045 11.878 16.396 11.878 16.8841 12.3661Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleDownIcon;
