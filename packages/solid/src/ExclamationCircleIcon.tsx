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
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.7556 8.40011C10.6868 7.64895 11.2636 7 12 7C12.7364 7 13.3132 7.64895 13.2444 8.40011L12.7503 12.5499C12.714 12.9467 12.389 13.25 12 13.25C11.611 13.25 11.286 12.9467 11.2497 12.5499L10.7556 8.40011ZM13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ExclamationCircleIcon;
