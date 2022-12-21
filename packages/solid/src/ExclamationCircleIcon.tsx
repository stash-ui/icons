import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7C11.2636 7 10.6868 7.64895 10.7556 8.40011L11.2497 12.5499C11.286 12.9467 11.611 13.25 12 13.25 12.389 13.25 12.714 12.9467 12.7503 12.5499L13.2444 8.40011C13.3132 7.64895 12.7364 7 12 7zM12 17C12.6904 17 13.25 16.4404 13.25 15.75 13.25 15.0596 12.6904 14.5 12 14.5 11.3096 14.5 10.75 15.0596 10.75 15.75 10.75 16.4404 11.3096 17 12 17z"
          fill={color}
        />
        <path
          d="M12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ExclamationCircleIcon;
