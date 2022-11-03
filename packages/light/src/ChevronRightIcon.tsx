import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.64645 7.64645C9.84171 7.45118 10.1583 7.45118 10.3536 7.64645L14.7071 12L10.3536 16.3536C10.1583 16.5488 9.84171 16.5488 9.64645 16.3536C9.45118 16.1583 9.45118 15.8417 9.64645 15.6464L13.2929 12L9.64645 8.35355C9.45118 8.15829 9.45118 7.84171 9.64645 7.64645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronRightIcon;
