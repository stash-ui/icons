import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.3536 9.64645C16.5488 9.84171 16.5488 10.1583 16.3536 10.3536L12 14.7071L7.64645 10.3536C7.45118 10.1583 7.45118 9.84171 7.64645 9.64645C7.84171 9.45118 8.15829 9.45118 8.35355 9.64645L12 13.2929L15.6464 9.64645C15.8417 9.45118 16.1583 9.45118 16.3536 9.64645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDownIcon;
