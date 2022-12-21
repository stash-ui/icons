import * as React from 'react';
import { IconProps } from './types';

export const SquareMinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.70928 7.1567C4.25 8.15297 4.25 9.43531 4.25 12C4.25 14.5647 4.25 15.847 4.70928 16.8433C5.20771 17.9245 6.07554 18.7923 7.1567 19.2907C8.15297 19.75 9.43531 19.75 12 19.75C14.5647 19.75 15.847 19.75 16.8433 19.2907C17.9245 18.7923 18.7923 17.9245 19.2907 16.8433C19.75 15.847 19.75 14.5647 19.75 12C19.75 9.43531 19.75 8.15297 19.2907 7.1567C18.7923 6.07554 17.9245 5.20771 16.8433 4.70928C15.847 4.25 14.5647 4.25 12 4.25C9.43531 4.25 8.15297 4.25 7.1567 4.70928C6.07554 5.20771 5.20771 6.07554 4.70928 7.1567Z"
          fill={color}
        />
        <path
          d="M9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H14.7812C15.3335 13 15.7812 12.5523 15.7812 12C15.7812 11.4477 15.3335 11 14.7812 11H9Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SquareMinusIcon;
