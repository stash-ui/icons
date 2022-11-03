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
          d="M10.0097 5.88735C8.34304 4.91514 6.25 6.11732 6.25 8.04679V15.9532C6.25 17.8826 8.34303 19.0848 10.0097 18.1126L16.7866 14.1594C18.4403 13.1947 18.4403 10.8052 16.7866 9.84053L10.0097 5.88735Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlayIcon;
