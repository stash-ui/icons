import * as React from 'react';
import { IconProps } from './types';

export const AngleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.6245 9.17574C13.8588 9.41005 13.8588 9.78995 13.6245 10.0243L11.6487 12L13.6245 13.9757C13.8588 14.2101 13.8588 14.5899 13.6245 14.8243C13.3901 15.0586 13.0102 15.0586 12.7759 14.8243L10.3759 12.4243C10.1416 12.1899 10.1416 11.8101 10.3759 11.5757L12.7759 9.17574C13.0102 8.94142 13.3901 8.94142 13.6245 9.17574Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleLeftIcon;
