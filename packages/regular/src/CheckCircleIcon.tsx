import * as React from 'react';
import { IconProps } from './types';

export const CheckCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.3536 10.3536C15.5488 10.1583 15.5488 9.84171 15.3536 9.64645C15.1583 9.45118 14.8417 9.45118 14.6464 9.64645L11 13.2929L9.35355 11.6464C9.15829 11.4512 8.84171 11.4512 8.64645 11.6464C8.45118 11.8417 8.45118 12.1583 8.64645 12.3536L10.6464 14.3536C10.8417 14.5488 11.1583 14.5488 11.3536 14.3536L15.3536 10.3536Z"
          fill={color}
        />
        <path
          d="M12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5ZM4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CheckCircleIcon;
