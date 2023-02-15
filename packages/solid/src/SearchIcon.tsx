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
          d="M10.44 2.75C6.19293 2.75 2.75 6.19293 2.75 10.44C2.75 14.6871 6.19293 18.13 10.44 18.13C12.1714 18.13 13.7696 17.5575 15.055 16.5918C15.1128 16.7612 15.2093 16.9205 15.3444 17.0556L19.1844 20.8956C19.6569 21.3681 20.4231 21.3681 20.8956 20.8956C21.3681 20.4231 21.3681 19.6569 20.8956 19.1844L17.0556 15.3444C16.9205 15.2093 16.7612 15.1128 16.5918 15.055C17.5575 13.7696 18.13 12.1714 18.13 10.44C18.13 6.19293 14.6871 2.75 10.44 2.75ZM4.69 10.44C4.69 7.26436 7.26436 4.69 10.44 4.69C13.6156 4.69 16.19 7.26436 16.19 10.44C16.19 13.6156 13.6156 16.19 10.44 16.19C7.26436 16.19 4.69 13.6156 4.69 10.44Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SearchIcon;
