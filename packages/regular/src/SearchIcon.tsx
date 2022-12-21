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
          opacity=".5"
          d="M15.7929 15.7929C16.1834 15.4024 16.8166 15.4024 17.2071 15.7929L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L15.7929 17.2071C15.4024 16.8166 15.4024 16.1834 15.7929 15.7929Z"
          fill={color}
        />
        <path
          d="M2.75 10.5C2.75 6.21979 6.21979 2.75 10.5 2.75C14.7802 2.75 18.25 6.21979 18.25 10.5C18.25 14.7802 14.7802 18.25 10.5 18.25C6.21979 18.25 2.75 14.7802 2.75 10.5ZM10.5 4.25C7.04822 4.25 4.25 7.04822 4.25 10.5C4.25 13.9518 7.04822 16.75 10.5 16.75C13.9518 16.75 16.75 13.9518 16.75 10.5C16.75 7.04822 13.9518 4.25 10.5 4.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SearchIcon;
