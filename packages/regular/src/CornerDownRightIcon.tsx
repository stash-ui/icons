import * as React from 'react';
import { IconProps } from './types';

export const CornerDownRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3.25C3.58579 3.25 3.25 3.58579 3.25 4V5.43396C3.25 7.08539 3.24999 8.37078 3.33424 9.40186C3.41977 10.4488 3.59587 11.2993 3.98571 12.0644C4.63285 13.3345 5.66547 14.3671 6.93556 15.0143C7.70065 15.4041 8.55124 15.5802 9.59814 15.6658C10.6292 15.75 11.9146 15.75 13.566 15.75H18.1893L14.4697 19.4697C14.1768 19.7626 14.1768 20.2374 14.4697 20.5303C14.7626 20.8232 15.2374 20.8232 15.5303 20.5303L20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L15.5303 9.46967C15.2374 9.17678 14.7626 9.17678 14.4697 9.46967C14.1768 9.76256 14.1768 10.2374 14.4697 10.5303L18.1893 14.25H13.6C11.9075 14.25 10.6832 14.2494 9.72029 14.1707C8.76615 14.0928 8.13493 13.9419 7.61655 13.6778C6.6287 13.1744 5.82555 12.3713 5.32222 11.3834C5.05809 10.8651 4.90721 10.2338 4.82925 9.27971C4.75058 8.31683 4.75 7.09253 4.75 5.4V4C4.75 3.58579 4.41421 3.25 4 3.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CornerDownRightIcon;
