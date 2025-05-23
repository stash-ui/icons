import * as React from 'react';
import { IconProps } from './types';

export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.15 6.34998C12.0789 6.34998 10.4 8.02891 10.4 10.1C10.4 10.5086 10.4651 10.9006 10.5849 11.2669C10.6715 11.5317 10.6042 11.8228 10.41 12.0226L6.25 16.3043V17.75H8.25V17C8.25 16.5858 8.58579 16.25 9 16.25H10.25V15C10.25 14.5858 10.5858 14.25 11 14.25H11.7223L12.2434 13.8028C12.4432 13.6314 12.7182 13.5772 12.968 13.6601C13.3387 13.7831 13.7358 13.85 14.15 13.85C16.2211 13.85 17.9 12.171 17.9 10.1C17.9 8.02891 16.2211 6.34998 14.15 6.34998ZM9.75 17.75V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V16C4.75 15.8048 4.82608 15.6174 4.96208 15.4774L9.03462 11.2856C8.94648 10.9041 8.9 10.5071 8.9 10.1C8.9 7.20048 11.2505 4.84998 14.15 4.84998C17.0495 4.84998 19.4 7.20048 19.4 10.1C19.4 12.9995 17.0495 15.35 14.15 15.35C13.7251 15.35 13.3112 15.2994 12.9144 15.2036L12.4884 15.5691C12.3525 15.6858 12.1792 15.75 12 15.75H11.75V17C11.75 17.4142 11.4142 17.75 11 17.75H9.75Z"
          fill={color}
        />
        <circle opacity="0.5" cx="15" cy="9" r="1" fill={color} />
      </svg>
    );
  }
);

export default KeyIcon;
