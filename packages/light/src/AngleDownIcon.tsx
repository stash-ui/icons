import * as React from 'react';
import { IconProps } from './types';

export const AngleDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.17574 10.3757C9.41005 10.1414 9.78995 10.1414 10.0243 10.3757L12 12.3515L13.9757 10.3757C14.2101 10.1414 14.5899 10.1414 14.8243 10.3757C15.0586 10.61 15.0586 10.9899 14.8243 11.2243L12.4243 13.6243C12.1899 13.8586 11.8101 13.8586 11.5757 13.6243L9.17574 11.2243C8.94142 10.9899 8.94142 10.61 9.17574 10.3757Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleDownIcon;
