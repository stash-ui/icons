import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLargeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.5C12.2761 1.5 12.5 1.72386 12.5 2L12.5 20.8333L18.6552 14.9713C18.8551 14.7808 19.1716 14.7885 19.3621 14.9885C19.5525 15.1885 19.5448 15.505 19.3448 15.6954L12.3448 22.3621C12.1517 22.546 11.8483 22.546 11.6552 22.3621L4.65517 15.6954C4.45521 15.505 4.44749 15.1885 4.63793 14.9885C4.82837 14.7885 5.14486 14.7808 5.34483 14.9713L11.5 20.8333L11.5 2C11.5 1.72386 11.7239 1.5 12 1.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowDownLargeIcon;
