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
          opacity=".5"
          d="M12 3C12.5751 3 12.6597 3.82001 12.1782 4.13443C10.2646 5.38379 9 7.54421 9 10C9 13.866 12.134 17 16 17C16.9227 17 17.8037 16.8215 18.6103 16.4971C19.0887 16.3047 19.6331 16.7982 19.3337 17.2181C17.702 19.5073 15.0253 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.1771 3.03712C11.1565 3.03898 11.136 3.04092 11.1154 3.04292C6.56005 3.4873 3 7.3279 3 12C3 16.9706 7.02944 21 12 21C14.6246 21 16.9868 19.8765 18.632 18.0842C18.6722 18.0404 18.7121 17.9961 18.7514 17.9515C18.8544 17.8348 18.9543 17.7154 19.0512 17.5935C19.1486 17.4709 19.2428 17.3458 19.3337 17.2181C19.6331 16.7982 19.0887 16.3047 18.6103 16.4971C18.5484 16.522 18.4861 16.546 18.4233 16.5692C18.2666 16.627 18.1073 16.6794 17.9456 16.7261C17.8935 16.7411 17.8411 16.7556 17.7885 16.7694C17.2176 16.9199 16.6181 17 16 17C12.134 17 9 13.866 9 10C9 7.77343 10.0396 5.78966 11.6598 4.50758C11.6806 4.49114 11.7014 4.47482 11.7224 4.45862C11.8132 4.38843 11.9058 4.32043 12 4.25469C12.0587 4.21372 12.1181 4.17363 12.1782 4.13443C12.6597 3.82001 12.5751 3 12 3C11.8148 3 11.6308 3.0056 11.4484 3.01663C11.3576 3.02212 11.2671 3.02896 11.1771 3.03712ZM9.0532 5.10107C8.07546 6.48513 7.5 8.17521 7.5 10C7.5 14.6111 11.1717 18.3647 15.751 18.4964C14.6472 19.1351 13.3662 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 8.90397 6.37596 6.2461 9.0532 5.10107Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default MoonIcon;
