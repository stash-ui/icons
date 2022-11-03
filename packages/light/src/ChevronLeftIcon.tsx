import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.3536 16.3536C14.1583 16.5488 13.8417 16.5488 13.6464 16.3536L9.29289 12L13.6464 7.64645C13.8417 7.45118 14.1583 7.45118 14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L10.7071 12L14.3536 15.6464C14.5488 15.8417 14.5488 16.1583 14.3536 16.3536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronLeftIcon;
