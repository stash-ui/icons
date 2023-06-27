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
          d="M6.93942 7.64645C7.13468 7.45118 7.45126 7.45118 7.64652 7.64645L12.0001 12L7.64652 16.3536C7.45126 16.5488 7.13468 16.5488 6.93942 16.3536C6.74415 16.1583 6.74415 15.8417 6.93942 15.6464L10.5859 12L6.93942 8.35355C6.74415 8.15829 6.74415 7.84171 6.93942 7.64645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12.1465 7.64645C12.3418 7.45118 12.6584 7.45118 12.8536 7.64645L17.2072 12L12.8536 16.3536C12.6584 16.5488 12.3418 16.5488 12.1465 16.3536C11.9513 16.1583 11.9513 15.8417 12.1465 15.6464L15.793 12L12.1465 8.35355C11.9513 8.15829 11.9513 7.84171 12.1465 7.64645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleRightIcon;
