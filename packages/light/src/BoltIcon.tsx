import * as React from 'react';
import { IconProps } from './types';

export const BoltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7669 3.57718C15.9547 3.6957 16.0418 3.92386 15.9808 4.13736L14.1629 10.5H18C18.2096 10.5 18.397 10.6307 18.4693 10.8275C18.5416 11.0242 18.4836 11.2452 18.3238 11.381L8.32385 19.881C8.14647 20.0317 7.8885 20.0401 7.70168 19.9012C7.51486 19.7623 7.44863 19.5129 7.54194 19.2996L10.7355 12H7.00002C6.7921 12 6.60587 11.8713 6.53234 11.6768C6.4588 11.4823 6.5133 11.2626 6.66921 11.1251L15.1692 3.62508C15.3357 3.47817 15.5791 3.45866 15.7669 3.57718ZM8.32241 11H11.5C11.6688 11 11.8261 11.0851 11.9185 11.2263C12.0108 11.3675 12.0257 11.5458 11.9581 11.7004L9.32596 17.7167L16.6398 11.5H13.5C13.3431 11.5 13.1953 11.4264 13.1008 11.3011C13.0064 11.1758 12.9762 11.0135 13.0193 10.8626L14.55 5.50507L8.32241 11Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoltIcon;
