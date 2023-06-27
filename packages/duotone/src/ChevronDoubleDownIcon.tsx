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
          d="M16.7074 5.87868C17.0979 6.2692 17.0979 6.90237 16.7074 7.29289L12.0002 12L7.29314 7.29289C6.90261 6.90237 6.90261 6.2692 7.29314 5.87868C7.68366 5.48815 8.31683 5.48815 8.70735 5.87868L12.0002 9.17157L15.2931 5.87868C15.6837 5.48815 16.3168 5.48815 16.7074 5.87868Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16.7074 12.2929C17.0979 12.6834 17.0979 13.3166 16.7074 13.7071L12.0002 18.4142L7.29314 13.7071C6.90261 13.3166 6.90261 12.6834 7.29314 12.2929C7.68366 11.9024 8.31683 11.9024 8.70735 12.2929L12.0002 15.5858L15.2931 12.2929C15.6837 11.9024 16.3168 11.9024 16.7074 12.2929Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleDownIcon;
