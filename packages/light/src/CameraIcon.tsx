import * as React from 'react';
import { IconProps } from './types';

export const CameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9375 13.125C15.9375 15.2996 14.1746 17.0625 12 17.0625C9.82538 17.0625 8.0625 15.2996 8.0625 13.125C8.0625 10.9504 9.82538 9.1875 12 9.1875C14.1746 9.1875 15.9375 10.9504 15.9375 13.125ZM14.8125 13.125C14.8125 14.6783 13.5533 15.9375 12 15.9375C10.4467 15.9375 9.1875 14.6783 9.1875 13.125C9.1875 11.5717 10.4467 10.3125 12 10.3125C13.5533 10.3125 14.8125 11.5717 14.8125 13.125Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.54967 5.66349L7.3125 6.375H6.375C4.51104 6.375 3 7.88604 3 9.75V16.5C3 18.364 4.51104 19.875 6.375 19.875H17.625C19.489 19.875 21 18.364 21 16.5V9.75C21 7.88604 19.489 6.375 17.625 6.375H16.6875L16.4503 5.66349C16.1441 4.74472 15.2843 4.125 14.3158 4.125H9.68421C8.71574 4.125 7.85593 4.74472 7.54967 5.66349ZM14.3158 5.25H9.68421C9.19997 5.25 8.77007 5.55986 8.61694 6.01924L8.49835 6.375H15.5016L15.3831 6.01924C15.2299 5.55986 14.8 5.25 14.3158 5.25ZM17.625 7.5C18.8676 7.5 19.875 8.50736 19.875 9.75V16.5C19.875 17.7426 18.8676 18.75 17.625 18.75H6.375C5.13236 18.75 4.125 17.7426 4.125 16.5V9.75C4.125 8.50736 5.13236 7.5 6.375 7.5H17.625Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CameraIcon;
