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
          d="M7.64645 14.3536C7.45118 14.1583 7.45118 13.8417 7.64645 13.6464L12 9.29289L16.3536 13.6464C16.5488 13.8417 16.5488 14.1583 16.3536 14.3536C16.1583 14.5488 15.8417 14.5488 15.6464 14.3536L12 10.7071L8.35355 14.3536C8.15829 14.5488 7.84171 14.5488 7.64645 14.3536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronUpIcon;
