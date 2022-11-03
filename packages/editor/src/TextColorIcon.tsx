import * as React from 'react';
import { IconProps } from './types';

export const TextColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3212 4C11.1404 4 10.9788 4.1126 10.9161 4.28216L7.35576 13.9185C7.25158 14.2005 7.46021 14.5 7.76081 14.5H9.11775C9.3 14.5 9.46263 14.3856 9.52419 14.214L10.2469 12.2H13.6876L14.4077 14.2136C14.4692 14.3854 14.6319 14.5 14.8143 14.5H16.2395C16.5396 14.5 16.7482 14.2013 16.6449 13.9195L13.1106 4.28313C13.0482 4.11306 12.8863 4 12.7052 4H11.3212ZM10.994 10.1L11.9738 7.2127C12.0462 7.43465 12.1313 7.69493 12.2232 7.97407C12.4502 8.664 12.7192 9.47127 12.9383 10.1H10.994Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <rect x="5" y="18" width="14" height="2" rx="1" fill={color} />
        <rect x="4.5" y="17.5" width="15" height="3" rx="1.5" stroke={color} strokeOpacity=".12" />
      </svg>
    );
  }
);

export default TextColorIcon;
