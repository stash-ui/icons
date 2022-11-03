import * as React from 'react';
import { IconProps } from './types';

export const CreditCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M13 14.5C13 13.9477 13.4477 13.5 14 13.5L17 13.5C17.5523 13.5 18 13.9477 18 14.5C18 15.0523 17.5523 15.5 17 15.5L14 15.5C13.4477 15.5 13 15.0523 13 14.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16.8304 4.75H7.16957C6.63542 4.74999 6.18956 4.74998 5.82533 4.77974C5.44545 4.81078 5.08879 4.87789 4.75153 5.04973C4.23408 5.31338 3.81338 5.73408 3.54973 6.25153C3.37789 6.58879 3.31078 6.94545 3.27974 7.32533C3.24998 7.68956 3.24999 8.13541 3.25 8.66956V15.3304C3.24999 15.8646 3.24998 16.3104 3.27974 16.6747C3.31078 17.0546 3.37789 17.4112 3.54973 17.7485C3.81338 18.2659 4.23408 18.6866 4.75153 18.9503C5.08879 19.1221 5.44545 19.1892 5.82533 19.2203C6.18955 19.25 6.63538 19.25 7.16951 19.25H16.8305C17.3646 19.25 17.8105 19.25 18.1747 19.2203C18.5546 19.1892 18.9112 19.1221 19.2485 18.9503C19.7659 18.6866 20.1866 18.2659 20.4503 17.7485C20.6221 17.4112 20.6892 17.0546 20.7203 16.6747C20.75 16.3104 20.75 15.8646 20.75 15.3305V8.66955C20.75 8.1354 20.75 7.68956 20.7203 7.32533C20.6892 6.94545 20.6221 6.58879 20.4503 6.25153C20.1866 5.73408 19.7659 5.31338 19.2485 5.04973C18.9112 4.87789 18.5546 4.81078 18.1747 4.77974C17.8104 4.74998 17.3646 4.74999 16.8304 4.75ZM5.43251 6.38624C5.52307 6.3401 5.66036 6.29822 5.94748 6.27476C6.24336 6.25058 6.62757 6.25 7.2 6.25H16.8C17.3724 6.25 17.7566 6.25058 18.0525 6.27476C18.3396 6.29822 18.4769 6.3401 18.5675 6.38624C18.8027 6.50608 18.9939 6.69731 19.1138 6.93251C19.1599 7.02307 19.2018 7.16036 19.2252 7.44748C19.2465 7.7075 19.2495 8.03575 19.2499 8.5H4.75007C4.75049 8.03575 4.75351 7.7075 4.77476 7.44748C4.79822 7.16036 4.8401 7.02307 4.88624 6.93251C5.00608 6.69731 5.19731 6.50608 5.43251 6.38624ZM4.75 10.5H19.25V15.3C19.25 15.8724 19.2494 16.2566 19.2252 16.5525C19.2018 16.8396 19.1599 16.9769 19.1138 17.0675C18.9939 17.3027 18.8027 17.4939 18.5675 17.6138C18.4769 17.6599 18.3396 17.7018 18.0525 17.7252C17.7566 17.7494 17.3724 17.75 16.8 17.75H7.2C6.62757 17.75 6.24336 17.7494 5.94748 17.7252C5.66036 17.7018 5.52307 17.6599 5.43251 17.6138C5.19731 17.4939 5.00608 17.3027 4.88624 17.0675C4.8401 16.9769 4.79822 16.8396 4.77476 16.5525C4.75058 16.2566 4.75 15.8724 4.75 15.3V10.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CreditCardIcon;
