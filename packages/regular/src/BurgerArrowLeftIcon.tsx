import * as React from 'react';
import { IconProps } from './types';

export const BurgerArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 5.5C7.72386 5.5 7.5 5.72386 7.5 6 7.5 6.27614 7.72386 6.5 8 6.5H20C20.2761 6.5 20.5 6.27614 20.5 6 20.5 5.72386 20.2761 5.5 20 5.5H8zM3.20711 12.5L4.85355 14.1464C5.04882 14.3417 5.04882 14.6583 4.85355 14.8536 4.65829 15.0488 4.34171 15.0488 4.14645 14.8536L1.64645 12.3536C1.45118 12.1583 1.45118 11.8417 1.64645 11.6464L4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645 5.04882 9.34171 5.04882 9.65829 4.85355 9.85355L3.20711 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12 19.5 12.2761 19.2761 12.5 19 12.5H3.20711zM7.5 18C7.5 17.7239 7.72386 17.5 8 17.5H20C20.2761 17.5 20.5 17.7239 20.5 18 20.5 18.2761 20.2761 18.5 20 18.5H8C7.72386 18.5 7.5 18.2761 7.5 18z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerArrowLeftIcon;
