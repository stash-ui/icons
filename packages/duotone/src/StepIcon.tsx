import * as React from 'react';
import { IconProps } from './types';

export const StepIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.48433 5.0921C5.73895 0.700927 10.1301 1.32823 10.7574 5.0921C11.1004 7.14983 10.7574 9.48327 9.5028 11.3652C9.17996 11.8495 8.97929 12.9414 8.88169 14.0627H4.79163C3.23666 10.0787 3.80931 7.45466 4.48433 5.0921Z"
          fill={color}
        />
        <path
          d="M19.4188 8.85596C18.1642 4.46479 13.7731 5.09209 13.1457 8.85596C12.8028 10.9137 13.1457 13.2471 14.4004 15.1291C14.7232 15.6133 14.9239 16.7053 15.0215 17.8265H19.1115C20.6665 13.8425 20.0939 11.2185 19.4188 8.85596Z"
          fill={color}
        />
        <g opacity="0.5">
          <path
            d="M4.82031 15.0663H8.87559L8.87559 16.2383C8.87559 17.3581 7.96779 18.2656 6.84795 18.2656C5.72812 18.2656 4.82031 17.3583 4.82031 16.2384V15.0663Z"
            fill={color}
          />
          <path
            d="M19.083 18.8302H15.0278L15.0278 20.0021C15.0278 21.122 15.9356 22.0295 17.0554 22.0295C18.1752 22.0295 19.083 21.1221 19.083 20.0023V18.8302Z"
            fill={color}
          />
        </g>
      </svg>
    );
  }
);

export default StepIcon;
