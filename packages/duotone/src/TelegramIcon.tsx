import * as React from 'react';
import { IconProps } from './types';

export const TelegramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625ZM1.375 12C1.375 6.13197 6.13197 1.375 12 1.375C17.868 1.375 22.625 6.13197 22.625 12C22.625 17.868 17.868 22.625 12 22.625C6.13197 22.625 1.375 17.868 1.375 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7424 8.64866L15.5838 16.0637C15.5145 16.507 15.0146 16.7351 14.6345 16.4969L10.7557 14.0668C10.4107 13.8506 10.3612 13.3676 10.6551 13.0859L13.875 9.99999C13.9101 9.96626 13.8675 9.91036 13.8257 9.93538L9.15921 12.7282C8.8815 12.8944 8.55224 12.9524 8.23449 12.8909L6.5443 12.5638C5.93566 12.446 5.85135 11.6095 6.42424 11.3726L15.4579 7.63757C16.1339 7.35808 16.8553 7.92594 16.7424 8.64866Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default TelegramIcon;
