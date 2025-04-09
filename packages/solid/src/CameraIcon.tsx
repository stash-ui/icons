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
          d="M7.54967 5.66349L7.3125 6.375H6.375C4.51104 6.375 3 7.88604 3 9.75V16.5C3 18.364 4.51104 19.875 6.375 19.875H17.625C19.489 19.875 21 18.364 21 16.5V9.75C21 7.88604 19.489 6.375 17.625 6.375H16.6875L16.4503 5.66349C16.1441 4.74472 15.2843 4.125 14.3158 4.125H9.68421C8.71574 4.125 7.85593 4.74472 7.54967 5.66349ZM12 16.5C13.864 16.5 15.375 14.989 15.375 13.125C15.375 11.261 13.864 9.75 12 9.75C10.136 9.75 8.625 11.261 8.625 13.125C8.625 14.989 10.136 16.5 12 16.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CameraIcon;
