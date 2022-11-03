import * as React from 'react';
import { IconProps } from './types';

export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 8.04683C6.5 6.3103 8.38373 5.22834 9.88371 6.10333L16.6606 10.0565C18.149 10.9247 18.149 13.0753 16.6606 13.9435L9.88371 17.8967C8.38373 18.7717 6.5 17.6897 6.5 15.9532V8.04683ZM9.37984 6.96711C8.54652 6.481 7.5 7.08209 7.5 8.04683V15.9532C7.5 16.9179 8.54652 17.519 9.37984 17.0329L16.1567 13.0797C16.9836 12.5974 16.9836 11.4026 16.1567 10.9203L9.37984 6.96711Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlayIcon;
