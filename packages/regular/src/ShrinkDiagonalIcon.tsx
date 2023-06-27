import * as React from 'react';
import { IconProps } from './types';

export const ShrinkDiagonalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.7678 5.94669C14.182 5.94669 14.5178 6.28247 14.5178 6.69669V9.43222C14.5178 9.44986 14.5178 9.46647 14.5178 9.48221C14.5335 9.48222 14.5501 9.48222 14.5678 9.48222L17.3033 9.48222C17.7175 9.48222 18.0533 9.81801 18.0533 10.2322C18.0533 10.6464 17.7175 10.9822 17.3033 10.9822L14.5678 10.9822C14.5611 10.9822 14.5543 10.9822 14.5476 10.9822C14.4254 10.9823 14.293 10.9823 14.1783 10.9729C14.0486 10.9623 13.8771 10.9361 13.7003 10.846C13.4651 10.7261 13.2739 10.5349 13.154 10.2997C13.0639 10.1229 13.0377 9.95145 13.0271 9.82169C13.0177 9.70705 13.0178 9.57459 13.0178 9.45243C13.0178 9.44566 13.0178 9.43892 13.0178 9.43222V6.69669C13.0178 6.28247 13.3536 5.94669 13.7678 5.94669ZM9.48224 14.5178C9.4665 14.5178 9.44989 14.5178 9.43225 14.5178H6.69672C6.2825 14.5178 5.94672 14.182 5.94672 13.7678C5.94672 13.3535 6.2825 13.0178 6.69672 13.0178H9.43225C9.43895 13.0178 9.44569 13.0178 9.45246 13.0178C9.57463 13.0177 9.70708 13.0177 9.82172 13.0271C9.95148 13.0377 10.1229 13.0639 10.2997 13.154C10.5349 13.2738 10.7262 13.4651 10.846 13.7003C10.9361 13.8771 10.9623 14.0485 10.9729 14.1783C10.9823 14.2929 10.9823 14.4254 10.9823 14.5475C10.9823 14.5543 10.9823 14.5611 10.9823 14.5678V17.3033C10.9823 17.7175 10.6465 18.0533 10.2323 18.0533C9.81804 18.0533 9.48225 17.7175 9.48225 17.3033V14.5678C9.48225 14.5501 9.48225 14.5335 9.48224 14.5178Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ShrinkDiagonalIcon;
