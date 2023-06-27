import * as React from 'react';
import { IconProps } from './types';

export const SaveRibbonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 6.2C6 5.0799 6 4.51984 6.21799 4.09202C6.40973 3.71569 6.71569 3.40973 7.09202 3.21799C7.51984 3 8.0799 3 9.2 3H14.8C15.9201 3 16.4802 3 16.908 3.21799C17.2843 3.40973 17.5903 3.71569 17.782 4.09202C18 4.51984 18 5.0799 18 6.2V19.5052C18 19.9908 18 20.2336 17.8988 20.3674C17.8106 20.484 17.6757 20.5561 17.5298 20.5649C17.3623 20.5749 17.1603 20.4402 16.7562 20.1708L12 17L7.24376 20.1708C6.83973 20.4402 6.63772 20.5749 6.4702 20.5649C6.32426 20.5561 6.18945 20.484 6.10125 20.3674C6 20.2336 6 19.9908 6 19.5052V6.2Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default SaveRibbonIcon;
