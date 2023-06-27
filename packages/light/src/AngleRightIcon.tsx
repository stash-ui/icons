import * as React from 'react';
import { IconProps } from './types';

export const AngleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3759 9.17574C10.6102 8.94142 10.9901 8.94142 11.2245 9.17574L13.6245 11.5757C13.8588 11.8101 13.8588 12.1899 13.6245 12.4243L11.2245 14.8243C10.9901 15.0586 10.6102 15.0586 10.3759 14.8243C10.1416 14.5899 10.1416 14.2101 10.3759 13.9757L12.3517 12L10.3759 10.0243C10.1416 9.78995 10.1416 9.41005 10.3759 9.17574Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleRightIcon;
