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
          d="M10.3757 9.17574C10.6101 8.94142 10.99 8.94142 11.2243 9.17574L13.6243 11.5757C13.8586 11.8101 13.8586 12.1899 13.6243 12.4243L11.2243 14.8243C10.99 15.0586 10.6101 15.0586 10.3757 14.8243C10.1414 14.5899 10.1414 14.2101 10.3757 13.9757L12.3515 12L10.3757 10.0243C10.1414 9.78995 10.1414 9.41005 10.3757 9.17574Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AngleRightIcon;
