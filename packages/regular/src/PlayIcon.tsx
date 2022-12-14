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
          d="M6.25 8.04681C6.25 6.11733 8.34304 4.91516 10.0097 5.88736L16.7866 9.84055C18.4403 10.8052 18.4403 13.1947 16.7866 14.1594L10.0097 18.1126C8.34303 19.0848 6.25 17.8827 6.25 15.9532V8.04681ZM9.25387 7.18303C8.58721 6.79415 7.75 7.27502 7.75 8.04681V15.9532C7.75 16.725 8.58721 17.2058 9.25387 16.817L16.0308 12.8638C16.6923 12.4779 16.6923 11.5221 16.0308 11.1362L9.25387 7.18303Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M7.75 8.04679C7.75 7.275 8.58721 6.79413 9.25387 7.18302L16.0308 11.1362C16.6923 11.5221 16.6923 12.4779 16.0308 12.8638L9.25387 16.8169C8.58721 17.2058 7.75 16.725 7.75 15.9532V8.04679Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlayIcon;
