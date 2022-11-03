import * as React from 'react';
import { IconProps } from './types';

export const SquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3572 4H12.6428C13.7266 3.99999 14.6007 3.99998 15.3086 4.05782C16.0375 4.11737 16.6777 4.24318 17.27 4.54497C18.2108 5.02433 18.9757 5.78924 19.455 6.73005C19.7568 7.32234 19.8826 7.96253 19.9422 8.69138C20 9.39926 20 10.2734 20 11.3572V12.6428C20 13.7266 20 14.6007 19.9422 15.3086C19.8826 16.0375 19.7568 16.6777 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.6777 19.7568 16.0375 19.8826 15.3086 19.9422C14.6007 20 13.7266 20 12.6428 20H11.3572C10.2734 20 9.39926 20 8.69138 19.9422C7.96253 19.8826 7.32234 19.7568 6.73005 19.455C5.78924 18.9757 5.02433 18.2108 4.54497 17.27C4.24318 16.6777 4.11737 16.0375 4.05782 15.3086C3.99998 14.6007 3.99999 13.7266 4 12.6428V11.3572C3.99999 10.2734 3.99998 9.39926 4.05782 8.69138C4.11737 7.96253 4.24318 7.32234 4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.32234 4.24318 7.96253 4.11737 8.69138 4.05782C9.39926 3.99998 10.2734 3.99999 11.3572 4ZM8.85424 6.05118C8.24907 6.10062 7.90138 6.19279 7.63803 6.32698C7.07354 6.6146 6.6146 7.07354 6.32698 7.63803C6.19279 7.90138 6.10062 8.24907 6.05118 8.85424C6.00078 9.47108 6 10.2634 6 11.4V12.6C6 13.7366 6.00078 14.5289 6.05118 15.1458C6.10062 15.7509 6.19279 16.0986 6.32698 16.362C6.6146 16.9265 7.07354 17.3854 7.63803 17.673C7.90138 17.8072 8.24907 17.8994 8.85424 17.9488C9.47108 17.9992 10.2634 18 11.4 18H12.6C13.7366 18 14.5289 17.9992 15.1458 17.9488C15.7509 17.8994 16.0986 17.8072 16.362 17.673C16.9265 17.3854 17.3854 16.9265 17.673 16.362C17.8072 16.0986 17.8994 15.7509 17.9488 15.1458C17.9992 14.5289 18 13.7366 18 12.6V11.4C18 10.2634 17.9992 9.47108 17.9488 8.85424C17.8994 8.24907 17.8072 7.90138 17.673 7.63803C17.3854 7.07354 16.9265 6.6146 16.362 6.32698C16.0986 6.19279 15.7509 6.10062 15.1458 6.05118C14.5289 6.00078 13.7366 6 12.6 6H11.4C10.2634 6 9.47108 6.00078 8.85424 6.05118Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SquareIcon;
