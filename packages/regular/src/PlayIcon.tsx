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
          d="M6.25 8.04683C6.25 6.11735 8.34304 4.91517 10.0097 5.88738L16.7866 9.84056C18.4403 10.8053 18.4403 13.1948 16.7866 14.1595L10.0097 18.1126C8.34303 19.0849 6.25 17.8827 6.25 15.9532V8.04683ZM9.25387 7.18305C8.58721 6.79416 7.75 7.27503 7.75 8.04683V15.9532C7.75 16.725 8.58721 17.2059 9.25387 16.817L16.0308 12.8638C16.6923 12.4779 16.6923 11.5221 16.0308 11.1362L9.25387 7.18305Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlayIcon;
