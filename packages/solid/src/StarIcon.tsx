import * as React from 'react';
import { IconProps } from './types';

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.8459 3.82193C11.2729 2.79532 12.7272 2.79532 13.1542 3.82193L14.8971 8.01248L19.4212 8.37517C20.5295 8.46402 20.9789 9.84716 20.1345 10.5705L16.6876 13.5231L17.7407 17.9378C17.9987 19.0193 16.8221 19.8741 15.8732 19.2946L12 16.9288L8.12681 19.2946C7.17793 19.8741 6.00137 19.0193 6.25935 17.9378L7.31242 13.5231L3.86558 10.5705C3.02115 9.84716 3.47056 8.46402 4.57888 8.37517L9.10293 8.01248L10.8459 3.82193Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default StarIcon;
