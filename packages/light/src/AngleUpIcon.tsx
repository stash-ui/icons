import * as React from 'react';
import { IconProps } from './types';

export const AngleUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5757 10.3757C11.8101 10.1414 12.1899 10.1414 12.4243 10.3757L14.8243 12.7757C15.0586 13.0101 15.0586 13.39 14.8243 13.6243C14.5899 13.8586 14.2101 13.8586 13.9757 13.6243L12 11.6485L10.0243 13.6243C9.78995 13.8586 9.41005 13.8586 9.17574 13.6243C8.94142 13.39 8.94142 13.0101 9.17574 12.7757L11.5757 10.3757Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleUpIcon;
