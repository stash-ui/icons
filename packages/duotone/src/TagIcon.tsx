import * as React from 'react';
import { IconProps } from './types';

export const TagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.96275 12.5333C5.53314 12.1037 5.3221 11.502 5.3892 10.8982L5.81346 7.07982C5.91676 6.15012 6.65067 5.41621 7.58037 5.31291L11.3987 4.88865C12.0026 4.82156 12.6042 5.03259 13.0338 5.4622L20.1323 12.5607C20.9133 13.3417 20.9133 14.6081 20.1323 15.3891L15.8896 19.6317C15.1086 20.4128 13.8423 20.4128 13.0612 19.6317L5.96275 12.5333ZM7.75792 9.37865C7.17213 8.79287 7.17213 7.84312 7.75792 7.25733C8.3437 6.67155 9.29345 6.67155 9.87924 7.25733C10.465 7.84312 10.465 8.79287 9.87924 9.37865C9.29345 9.96444 8.3437 9.96444 7.75792 9.37865Z"
          fill={color}
        />
        <path
          opacity="0.5"
          d="M7.7577 7.25733C7.17191 7.84312 7.17191 8.79287 7.7577 9.37865C8.34349 9.96444 9.29323 9.96444 9.87902 9.37865C10.4648 8.79287 10.4648 7.84312 9.87902 7.25733C9.29323 6.67155 8.34349 6.67155 7.7577 7.25733Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TagIcon;
