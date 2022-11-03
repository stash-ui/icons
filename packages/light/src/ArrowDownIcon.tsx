import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5.5C12.2761 5.5 12.5 5.72386 12.5 6V16.7929L16.6464 12.6464C16.8417 12.4512 17.1583 12.4512 17.3536 12.6464C17.5488 12.8417 17.5488 13.1583 17.3536 13.3536L12.3536 18.3536C12.1583 18.5488 11.8417 18.5488 11.6464 18.3536L6.64645 13.3536C6.45118 13.1583 6.45118 12.8417 6.64645 12.6464C6.84171 12.4512 7.15829 12.4512 7.35355 12.6464L11.5 16.7929V6C11.5 5.72386 11.7239 5.5 12 5.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowDownIcon;
