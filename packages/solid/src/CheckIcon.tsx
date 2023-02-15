import * as React from 'react';
import { IconProps } from './types';

export const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.6897 7.77586C18.0896 8.15675 18.105 8.78973 17.7241 9.18966L10.3333 16.95L6.27586 12.6897C5.89498 12.2897 5.91042 11.6567 6.31035 11.2759C6.71028 10.895 7.34325 10.9104 7.72414 11.3103L10.3333 14.05L16.2759 7.81035C16.6568 7.41042 17.2897 7.39498 17.6897 7.77586Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CheckIcon;
