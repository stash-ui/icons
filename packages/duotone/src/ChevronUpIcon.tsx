import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L12 8.58579L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronUpIcon;
