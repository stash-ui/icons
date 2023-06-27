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
          d="M16.3536 6.93934C16.5488 7.1346 16.5488 7.45118 16.3536 7.64645L12 12L7.64645 7.64645C7.45118 7.45118 7.45118 7.1346 7.64645 6.93934C7.84171 6.74408 8.15829 6.74408 8.35355 6.93934L12 10.5858L15.6464 6.93934C15.8417 6.74408 16.1583 6.74408 16.3536 6.93934Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16.3536 12.1464C16.5488 12.3417 16.5488 12.6583 16.3536 12.8536L12 17.2071L7.64645 12.8536C7.45118 12.6583 7.45118 12.3417 7.64645 12.1464C7.84171 11.9512 8.15829 11.9512 8.35355 12.1464L12 15.7929L15.6464 12.1464C15.8417 11.9512 16.1583 11.9512 16.3536 12.1464Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleDownIcon;
