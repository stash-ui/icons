import * as React from 'react';
import { IconProps } from './types';

export const MoonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5669 4.12801C8.98939 5.58841 8 7.67848 8 10C8 14.4183 11.5817 18 16 18C16.4889 18 16.9681 17.956 17.4337 17.8717C16.0062 19.1935 14.0973 20 12 20C7.58172 20 4 16.4183 4 12C4 8.07093 6.83247 4.80342 10.5669 4.12801ZM12.1782 4.13443C12.6597 3.82001 12.5751 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.0253 21 17.702 19.5073 19.3337 17.2181C19.6331 16.7982 19.0887 16.3047 18.6103 16.4971C17.8037 16.8215 16.9227 17 16 17C12.134 17 9 13.866 9 10C9 7.54421 10.2646 5.38379 12.1782 4.13443Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default MoonIcon;
