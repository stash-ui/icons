import * as React from 'react';
import { IconProps } from './types';

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3973 3C6.31187 3 3 6.31187 3 10.3973C3 14.4827 6.31187 17.7945 10.3973 17.7945C14.4827 17.7945 17.7945 14.4827 17.7945 10.3973C17.7945 6.31187 14.4827 3 10.3973 3ZM3.9863 10.3973C3.9863 6.85659 6.85659 3.9863 10.3973 3.9863C13.9379 3.9863 16.8082 6.85659 16.8082 10.3973C16.8082 13.9379 13.9379 16.8082 10.3973 16.8082C6.85659 16.8082 3.9863 13.9379 3.9863 10.3973Z"
          fill={color}
        />
        <path
          d="M16.8381 15.792C16.5493 15.5031 16.0809 15.5031 15.792 15.792C15.5031 16.0809 15.5031 16.5493 15.792 16.8381L19.7372 20.7833C20.0261 21.0722 20.4945 21.0722 20.7833 20.7833C21.0722 20.4945 21.0722 20.0261 20.7833 19.7372L16.8381 15.792Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SearchIcon;
