import * as React from 'react';
import { IconProps } from './types';

export const ImageFitLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 6C4.25 5.58579 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6C19.75 6.41421 19.4142 6.75 19 6.75H5C4.58579 6.75 4.25 6.41421 4.25 6ZM4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H10C10.4142 9.25 10.75 9.58579 10.75 10V14C10.75 14.4142 10.4142 14.75 10 14.75H5C4.58579 14.75 4.25 14.4142 4.25 14V10ZM5.75 10.75V13.25H9.25V10.75H5.75ZM12.45 10C12.45 9.58579 12.7858 9.25 13.2 9.25H19C19.4142 9.25 19.75 9.58579 19.75 10C19.75 10.4142 19.4142 10.75 19 10.75H13.2C12.7858 10.75 12.45 10.4142 12.45 10ZM12.45 14C12.45 13.5858 12.7858 13.25 13.2 13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H13.2C12.7858 14.75 12.45 14.4142 12.45 14ZM4.25 18C4.25 17.5858 4.58579 17.25 5 17.25H19C19.4142 17.25 19.75 17.5858 19.75 18C19.75 18.4142 19.4142 18.75 19 18.75H5C4.58579 18.75 4.25 18.4142 4.25 18Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ImageFitLeftIcon;
