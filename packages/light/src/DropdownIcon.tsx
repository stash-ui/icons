import * as React from 'react';
import { IconProps } from './types';

export const DropdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 6.5C3.5 5.11929 4.61929 4 6 4H18C19.3807 4 20.5 5.11929 20.5 6.5V17.5C20.5 18.8807 19.3807 20 18 20H6C4.61929 20 3.5 18.8807 3.5 17.5V6.5ZM6 5C5.17157 5 4.5 5.67157 4.5 6.5V9.25H19.5V6.5C19.5 5.67157 18.8284 5 18 5H6ZM19.5 10.25H4.5V17.5C4.5 18.3284 5.17157 19 6 19H18C18.8284 19 19.5 18.3284 19.5 17.5V10.25ZM14.584 6.22264C14.7372 5.99288 15.0476 5.93079 15.2773 6.08397L16.5 6.89907L17.7226 6.08397C17.9524 5.93079 18.2628 5.99288 18.416 6.22264C18.5692 6.45241 18.5071 6.76284 18.2773 6.91602L17.0547 7.73112C16.7188 7.95505 16.2812 7.95505 15.9453 7.73112L14.7226 6.91602C14.4929 6.76284 14.4308 6.45241 14.584 6.22264ZM7 12.75C7 12.4739 7.22386 12.25 7.5 12.25H16.5C16.7761 12.25 17 12.4739 17 12.75C17 13.0261 16.7761 13.25 16.5 13.25H7.5C7.22386 13.25 7 13.0261 7 12.75ZM7.5 15.5C7.22386 15.5 7 15.7239 7 16C7 16.2761 7.22386 16.5 7.5 16.5H16.5C16.7761 16.5 17 16.2761 17 16C17 15.7239 16.7761 15.5 16.5 15.5H7.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DropdownIcon;
