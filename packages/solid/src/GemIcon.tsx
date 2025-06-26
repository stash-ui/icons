import * as React from 'react';
import { IconProps } from './types';

export const GemIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.5451 10.8111C20.4487 11.0922 20.294 11.3574 20.0811 11.5868L13.5984 18.5675C12.7891 19.4388 11.445 19.4942 10.5689 18.7319L10.4009 18.5675L3.91814 11.5868C3.70542 11.3575 3.55182 11.0921 3.45544 10.8111H20.5451Z"
          fill="#71717A"
        />
        <path
          d="M20.2273 8.79349L20.3381 8.95544C20.4567 9.14723 20.5413 9.35302 20.595 9.56426H13.3427L17.7408 5.47785L20.2273 8.79349Z"
          fill="#71717A"
        />
        <path
          d="M10.6566 9.56426H3.4043C3.47348 9.29222 3.59498 9.02963 3.77203 8.79349L6.25724 5.47785L10.6566 9.56426Z"
          fill="#71717A"
        />
        <path
          d="M15.7402 4.26508C16.1447 4.26518 16.5344 4.37944 16.8714 4.5841L11.9996 9.10886L7.12542 4.5841C7.46288 4.3791 7.85399 4.26517 8.25904 4.26508H15.7402Z"
          fill="#71717A"
        />
      </svg>
    );
  }
);

export default GemIcon;
