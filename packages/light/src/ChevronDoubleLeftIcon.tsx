import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.0607 16.3536C16.8655 16.5488 16.5489 16.5488 16.3536 16.3536L12.0001 12L16.3536 7.64645C16.5489 7.45118 16.8655 7.45118 17.0607 7.64645C17.256 7.84171 17.256 8.15829 17.0607 8.35355L13.4143 12L17.0607 15.6464C17.256 15.8417 17.256 16.1583 17.0607 16.3536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.8536 16.3536C11.6584 16.5488 11.3418 16.5488 11.1465 16.3536L6.79297 12L11.1465 7.64645C11.3418 7.45118 11.6584 7.45118 11.8536 7.64645C12.0489 7.84171 12.0489 8.15829 11.8536 8.35355L8.20718 12L11.8536 15.6464C12.0489 15.8417 12.0489 16.1583 11.8536 16.3536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleLeftIcon;
