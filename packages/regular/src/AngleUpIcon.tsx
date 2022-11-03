import * as React from 'react';
import { IconProps } from './types';

export const AngleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3636 10.1636C11.7151 9.81213 12.2849 9.81213 12.6364 10.1636L15.0364 12.5636C15.3879 12.9151 15.3879 13.4849 15.0364 13.8364C14.6849 14.1879 14.1151 14.1879 13.7636 13.8364L12 12.0728L10.2364 13.8364C9.88494 14.1879 9.31509 14.1879 8.96362 13.8364C8.61214 13.4849 8.61214 12.9151 8.96362 12.5636L11.3636 10.1636Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleUpIcon;
