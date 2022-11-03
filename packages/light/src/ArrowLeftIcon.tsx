import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L7.20711 11.5L18 11.5C18.2761 11.5 18.5 11.7239 18.5 12C18.5 12.2761 18.2761 12.5 18 12.5L7.20711 12.5L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowLeftIcon;
