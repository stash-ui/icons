import * as React from 'react';
import { IconProps } from './types';

export const ImageFitFullIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.25 6C4.25 5.58579 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6C19.75 6.41421 19.4142 6.75 19 6.75H5C4.58579 6.75 4.25 6.41421 4.25 6ZM3.25 9.5C3.25 9.08579 3.58579 8.75 4 8.75H20C20.4142 8.75 20.75 9.08579 20.75 9.5V14.5C20.75 14.9142 20.4142 15.25 20 15.25H4C3.58579 15.25 3.25 14.9142 3.25 14.5V9.5ZM4.75 10.25V13.75H19.25V10.25H4.75ZM4.25 18C4.25 17.5858 4.58579 17.25 5 17.25H19C19.4142 17.25 19.75 17.5858 19.75 18C19.75 18.4142 19.4142 18.75 19 18.75H5C4.58579 18.75 4.25 18.4142 4.25 18Z"
        />
      </svg>
    );
  }
);

export default ImageFitFullIcon;
