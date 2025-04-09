import * as React from 'react';
import { IconProps } from './types';

export const PuzzleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5409 5.95454C10.5409 6.27371 10.6437 6.56888 10.818 6.80872C11.0612 7.14341 10.7698 7.5 10.3561 7.5H8C7.17157 7.5 6.5 8.17157 6.5 9V11.677C6.5 11.9232 6.69957 12.1228 6.94575 12.1228C7.22023 12.1228 7.46924 11.9794 7.69128 11.818C7.93112 11.6437 8.22629 11.5409 8.54546 11.5409C9.34878 11.5409 10 12.1922 10 12.9955C10 13.7988 9.34878 14.45 8.54546 14.45C8.22629 14.45 7.93113 14.3472 7.69128 14.1729C7.46924 14.0116 7.22023 13.8682 6.94576 13.8682C6.69957 13.8682 6.5 14.0678 6.5 14.314V17C6.5 17.8284 7.17157 18.5 8 18.5H10.3561C10.7698 18.5 11.0612 18.1434 10.818 17.8087C10.6437 17.5689 10.5409 17.2737 10.5409 16.9545C10.5409 16.1512 11.1921 15.5 11.9955 15.5C12.7988 15.5 13.45 16.1512 13.45 16.9545C13.45 17.2737 13.3472 17.5689 13.1729 17.8087C12.9297 18.1434 13.2211 18.5 13.6349 18.5H16C16.8284 18.5 17.5 17.8284 17.5 17V14.6439C17.5 14.2302 17.8566 13.9387 18.1913 14.182C18.4311 14.3563 18.7263 14.4591 19.0455 14.4591C19.8488 14.4591 20.5 13.8078 20.5 13.0045C20.5 12.2012 19.8488 11.55 19.0455 11.55C18.7263 11.55 18.4311 11.6528 18.1913 11.8271C17.8566 12.0703 17.5 11.7788 17.5 11.3651V9C17.5 8.17157 16.8284 7.5 16 7.5H13.6349C13.2211 7.5 12.9297 7.14341 13.1729 6.80872C13.3472 6.56887 13.45 6.27371 13.45 5.95454C13.45 5.15122 12.7988 4.5 11.9955 4.5C11.1921 4.5 10.5409 5.15122 10.5409 5.95454Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default PuzzleIcon;
