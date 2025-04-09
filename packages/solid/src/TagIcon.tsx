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
          d="M5.3892 10.8982C5.3221 11.502 5.53314 12.1037 5.96275 12.5333L13.0612 19.6317C13.8423 20.4128 15.1086 20.4128 15.8896 19.6317L20.1323 15.3891C20.9133 14.6081 20.9133 13.3417 20.1323 12.5607L13.0338 5.4622C12.6042 5.03259 12.0026 4.82156 11.3987 4.88865L7.58037 5.31291C6.65067 5.41621 5.91676 6.15012 5.81346 7.07982L5.3892 10.8982ZM7.75792 9.37864C7.17213 8.79286 7.17213 7.84311 7.75792 7.25732C8.3437 6.67154 9.29345 6.67154 9.87924 7.25732C10.465 7.84311 10.465 8.79286 9.87924 9.37864C9.29345 9.96443 8.3437 9.96443 7.75792 9.37864Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TagIcon;
