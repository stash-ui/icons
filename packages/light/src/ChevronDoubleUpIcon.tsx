import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.64645 17.0607C7.45118 16.8654 7.45118 16.5488 7.64645 16.3536L12 12L16.3536 16.3536C16.5488 16.5488 16.5488 16.8654 16.3536 17.0607C16.1583 17.2559 15.8417 17.2559 15.6464 17.0607L12 13.4142L8.35355 17.0607C8.15829 17.2559 7.84171 17.2559 7.64645 17.0607Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.64645 11.8536C7.45118 11.6583 7.45118 11.3417 7.64645 11.1464L12 6.79289L16.3536 11.1464C16.5488 11.3417 16.5488 11.6583 16.3536 11.8536C16.1583 12.0488 15.8417 12.0488 15.6464 11.8536L12 8.20711L8.35355 11.8536C8.15829 12.0488 7.84171 12.0488 7.64645 11.8536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleUpIcon;
