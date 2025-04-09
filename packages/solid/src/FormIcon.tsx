import * as React from 'react';
import { IconProps } from './types';

export const FormIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 7.25H16.5C16.7761 7.25 17 7.47386 17 7.75C17 8.02614 16.7761 8.25 16.5 8.25H7.5C7.22386 8.25 7 8.02614 7 7.75C7 7.47386 7.22386 7.25 7.5 7.25Z"
          fill={color}
        />
        <path
          d="M16.5 11.5H7.5C7.22386 11.5 7 11.7239 7 12C7 12.2761 7.22386 12.5 7.5 12.5H16.5C16.7761 12.5 17 12.2761 17 12C17 11.7239 16.7761 11.5 16.5 11.5Z"
          fill={color}
        />
        <path
          d="M9 16.25C9 15.9739 9.22386 15.75 9.5 15.75H14.5C14.7761 15.75 15 15.9739 15 16.25C15 16.5261 14.7761 16.75 14.5 16.75H9.5C9.22386 16.75 9 16.5261 9 16.25Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 2.5H17C19.4853 2.5 21.5 4.51472 21.5 7V17C21.5 19.4853 19.4853 21.5 17 21.5H7C4.51472 21.5 2.5 19.4853 2.5 17V7C2.5 4.51472 4.51472 2.5 7 2.5ZM6 7.75C6 6.92157 6.67157 6.25 7.5 6.25H16.5C17.3284 6.25 18 6.92157 18 7.75C18 8.57843 17.3284 9.25 16.5 9.25H7.5C6.67157 9.25 6 8.57843 6 7.75ZM7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5H16.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5H7.5ZM6 16.25C6 15.4216 6.67157 14.75 7.5 14.75H16.5C17.3284 14.75 18 15.4216 18 16.25C18 17.0784 17.3284 17.75 16.5 17.75H7.5C6.67157 17.75 6 17.0784 6 16.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default FormIcon;
