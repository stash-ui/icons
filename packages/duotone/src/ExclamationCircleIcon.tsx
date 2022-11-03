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
        <g opacity=".5" fill={color}>
          <path d="M12 7C11.2636 7 10.6868 7.64895 10.7556 8.40011L11.2497 12.5499C11.286 12.9467 11.611 13.25 12 13.25 12.389 13.25 12.714 12.9467 12.7503 12.5499L13.2444 8.40011C13.3132 7.64895 12.7364 7 12 7zM12 17C12.6904 17 13.25 16.4404 13.25 15.75 13.25 15.0596 12.6904 14.5 12 14.5 11.3096 14.5 10.75 15.0596 10.75 15.75 10.75 16.4404 11.3096 17 12 17z" />
        </g>
        <path
          d="M12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ExclamationCircleIcon;
