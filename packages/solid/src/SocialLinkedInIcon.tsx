import * as React from 'react';
import { IconProps } from './types';

export const SocialLinkedInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 20H16.7125V14.4007C16.7125 12.8655 16.1292 12.0075 14.9141 12.0075C13.5922 12.0075 12.9016 12.9003 12.9016 14.4007V20H9.73333V9.33333H12.9016V10.7701C12.9016 10.7701 13.8542 9.00745 16.1177 9.00745C18.3802 9.00745 20 10.3891 20 13.2465V20ZM5.95365 7.93662C4.87448 7.93662 4 7.05528 4 5.96831C4 4.88134 4.87448 4 5.95365 4C7.03281 4 7.90677 4.88134 7.90677 5.96831C7.90677 7.05528 7.03281 7.93662 5.95365 7.93662ZM4.31771 20H7.62135V9.33333H4.31771V20Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SocialLinkedInIcon;
