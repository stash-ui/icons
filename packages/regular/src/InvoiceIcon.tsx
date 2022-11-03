import * as React from 'react';
import { IconProps } from './types';

export const InvoiceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 5C3.25 3.48122 4.48122 2.25 6 2.25H16C17.5188 2.25 18.75 3.48122 18.75 5V10.5C18.75 10.9142 18.4142 11.25 18 11.25C17.5858 11.25 17.25 10.9142 17.25 10.5V5C17.25 4.30964 16.6904 3.75 16 3.75H6C5.30964 3.75 4.75 4.30964 4.75 5V19.382C4.75 19.5678 4.94558 19.6887 5.1118 19.6056L6.1118 19.1056C6.70468 18.8091 7.41415 18.8731 7.94443 19.2708L8.85 19.95C8.93889 20.0167 9.06111 20.0167 9.15 19.95L10.0121 19.3034C10.5813 18.8765 11.3523 18.8368 11.9624 19.2028L12.6359 19.6069C12.9911 19.82 13.1062 20.2807 12.8931 20.6359C12.68 20.9911 12.2193 21.1062 11.8641 20.8931L11.1907 20.4891C11.1035 20.4368 10.9934 20.4425 10.9121 20.5034L10.05 21.15C9.42778 21.6167 8.57222 21.6167 7.95 21.15L7.04443 20.4708C6.96867 20.414 6.86732 20.4049 6.78262 20.4472L5.78262 20.9472C4.61905 21.529 3.25 20.6829 3.25 19.382V5Z"
          fill={color}
        />
        <path
          d="M17.5 14.75C15.9812 14.75 14.75 15.9812 14.75 17.5 14.75 19.0188 15.9812 20.25 17.5 20.25 19.0188 20.25 20.25 19.0188 20.25 17.5 20.25 15.9812 19.0188 14.75 17.5 14.75zM13.25 17.5C13.25 15.1528 15.1528 13.25 17.5 13.25 19.8472 13.25 21.75 15.1528 21.75 17.5 21.75 19.8472 19.8472 21.75 17.5 21.75 15.1528 21.75 13.25 19.8472 13.25 17.5zM19.3428 16.0947C19.6357 16.3876 19.6357 16.8624 19.3428 17.1553L17.0625 19.4357 15.6572 18.0303C15.3643 17.7374 15.3643 17.2626 15.6572 16.9697 15.9501 16.6768 16.4249 16.6768 16.7178 16.9697L17.0625 17.3143 18.2822 16.0947C18.5751 15.8018 19.0499 15.8018 19.3428 16.0947zM6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H13.5C13.9142 6.25 14.25 6.58579 14.25 7 14.25 7.41421 13.9142 7.75 13.5 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7zM6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H15C15.4142 9.25 15.75 9.58579 15.75 10 15.75 10.4142 15.4142 10.75 15 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10zM6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13 11.25 13.4142 10.9142 13.75 10.5 13.75H7C6.58579 13.75 6.25 13.4142 6.25 13zM6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H10.5C10.9142 15.25 11.25 15.5858 11.25 16 11.25 16.4142 10.9142 16.75 10.5 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16z"
          fill={color}
        />
      </svg>
    );
  }
);

export default InvoiceIcon;
