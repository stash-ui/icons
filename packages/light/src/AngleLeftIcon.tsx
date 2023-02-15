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
          d="M13.6242 9.17574C13.8585 9.41005 13.8585 9.78995 13.6242 10.0243L11.6485 12L13.6242 13.9757C13.8585 14.2101 13.8585 14.5899 13.6242 14.8243C13.3899 15.0586 13.01 15.0586 12.7757 14.8243L10.3757 12.4243C10.1414 12.1899 10.1414 11.8101 10.3757 11.5757L12.7757 9.17574C13.01 8.94142 13.3899 8.94142 13.6242 9.17574Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleLeftIcon;
