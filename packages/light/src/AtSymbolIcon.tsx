import * as React from 'react';
import { IconProps } from './types';

export const AtSymbolIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 11.4667C3.5 7.0668 7.0668 3.5 11.4667 3.5H13.6C17.4108 3.5 20.5 6.58924 20.5 10.4V13.6667C20.5 15.2315 19.2315 16.5 17.6667 16.5C16.4567 16.5 15.4238 15.7415 15.0176 14.674C14.2654 15.7748 13.057 16.5 11.6667 16.5C9.32542 16.5 7.5 14.4434 7.5 12C7.5 9.55656 9.32542 7.5 11.6667 7.5C12.9485 7.5 14.0757 8.11645 14.8333 9.07533V8C14.8333 7.72386 15.0572 7.5 15.3333 7.5C15.6095 7.5 15.8333 7.72386 15.8333 8V13.6667C15.8333 14.6792 16.6541 15.5 17.6667 15.5C18.6792 15.5 19.5 14.6792 19.5 13.6667V10.4C19.5 7.14152 16.8585 4.5 13.6 4.5H11.4667C7.61908 4.5 4.5 7.61908 4.5 11.4667V12C4.5 16.1421 7.85786 19.5 12 19.5H16.6667C16.9428 19.5 17.1667 19.7239 17.1667 20C17.1667 20.2761 16.9428 20.5 16.6667 20.5H12C7.30558 20.5 3.5 16.6944 3.5 12V11.4667ZM14.8333 12C14.8333 10.0252 13.3755 8.5 11.6667 8.5C9.95783 8.5 8.5 10.0252 8.5 12C8.5 13.9748 9.95783 15.5 11.6667 15.5C13.3755 15.5 14.8333 13.9748 14.8333 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AtSymbolIcon;
