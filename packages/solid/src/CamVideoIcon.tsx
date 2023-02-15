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
          d="M3.25 8.5C3.25 7.25736 4.25736 6.25 5.5 6.25H12.75C13.9926 6.25 15 7.25736 15 8.5V15.5C15 16.7426 13.9926 17.75 12.75 17.75H5.5C4.25736 17.75 3.25 16.7426 3.25 15.5V8.5zM18.941 7.69095C19.7721 7.27539 20.75 7.87976 20.75 8.80899V15.191C20.75 16.1202 19.7721 16.7245 18.941 16.309L16.1646 14.9208C15.9105 14.7937 15.75 14.534 15.75 14.25V9.74997C15.75 9.46589 15.9105 9.20619 16.1646 9.07915L18.941 7.69095z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CamVideoIcon;
