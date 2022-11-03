import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.9885 4.63793C15.1885 4.44749 15.505 4.45521 15.6954 4.65517L22.3621 11.6552C22.546 11.8483 22.546 12.1517 22.3621 12.3448L15.6954 19.3448C15.505 19.5448 15.1885 19.5525 14.9885 19.3621C14.7885 19.1716 14.7808 18.8551 14.9713 18.6552L20.8333 12.5H2C1.72386 12.5 1.5 12.2761 1.5 12C1.5 11.7239 1.72386 11.5 2 11.5L20.8333 11.5L14.9713 5.34483C14.7808 5.14486 14.7885 4.82837 14.9885 4.63793Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowRightLargeIcon;
