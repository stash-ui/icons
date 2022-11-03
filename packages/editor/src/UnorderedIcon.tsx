import * as React from 'react';
import { IconProps } from './types';

export const UnorderedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.75 5.5C4.7835 5.5 4 6.2835 4 7.25C4 8.2165 4.7835 9 5.75 9C6.7165 9 7.5 8.2165 7.5 7.25C7.5 6.2835 6.7165 5.5 5.75 5.5ZM5 7.25C5 6.83579 5.33579 6.5 5.75 6.5C6.16421 6.5 6.5 6.83579 6.5 7.25C6.5 7.66421 6.16421 8 5.75 8C5.33579 8 5 7.66421 5 7.25ZM5.75 14.5C4.7835 14.5 4 15.2835 4 16.25C4 17.2165 4.7835 18 5.75 18C6.7165 18 7.5 17.2165 7.5 16.25C7.5 15.2835 6.7165 14.5 5.75 14.5ZM5 16.25C5 15.8358 5.33579 15.5 5.75 15.5C6.16421 15.5 6.5 15.8358 6.5 16.25C6.5 16.6642 6.16421 17 5.75 17C5.33579 17 5 16.6642 5 16.25ZM5.75 10C4.7835 10 4 10.7835 4 11.75C4 12.7165 4.7835 13.5 5.75 13.5C6.7165 13.5 7.5 12.7165 7.5 11.75C7.5 10.7835 6.7165 10 5.75 10ZM5 11.75C5 11.3358 5.33579 11 5.75 11C6.16421 11 6.5 11.3358 6.5 11.75C6.5 12.1642 6.16421 12.5 5.75 12.5C5.33579 12.5 5 12.1642 5 11.75ZM10.75 7C10.3358 7 10 7.33579 10 7.75C10 8.16421 10.3358 8.5 10.75 8.5H19.25C19.6642 8.5 20 8.16421 20 7.75C20 7.33579 19.6642 7 19.25 7H10.75ZM10.75 11.25C10.3358 11.25 10 11.5858 10 12C10 12.4142 10.3358 12.75 10.75 12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H10.75ZM10.75 15.5C10.3358 15.5 10 15.8358 10 16.25C10 16.6642 10.3358 17 10.75 17H19.25C19.6642 17 20 16.6642 20 16.25C20 15.8358 19.6642 15.5 19.25 15.5H10.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default UnorderedIcon;
