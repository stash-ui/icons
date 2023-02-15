import * as React from 'react';
import { IconProps } from './types';

export const CamVideoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 6.5C4.39543 6.5 3.5 7.39543 3.5 8.5V15.5C3.5 16.6046 4.39543 17.5 5.5 17.5H13.5C14.6046 17.5 15.5 16.6046 15.5 15.5V14.309L19.0528 16.0854C19.7177 16.4179 20.5 15.9344 20.5 15.191V8.80903C20.5 8.06565 19.7177 7.58215 19.0528 7.9146L15.5 9.691V8.5C15.5 7.39543 14.6046 6.5 13.5 6.5H5.5ZM15.5 10.809V13.191L19.5 15.191V8.80903L15.5 10.809ZM14.5 8.5C14.5 7.94772 14.0523 7.5 13.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H13.5C14.0523 16.5 14.5 16.0523 14.5 15.5V8.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CamVideoIcon;
