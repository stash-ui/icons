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
          opacity=".5"
          d="M15 13.5L19.2764 15.6382C19.6088 15.8044 20 15.5627 20 15.191V8.80903C20 8.43733 19.6088 8.19559 19.2764 8.36181L15 10.5V13.5Z"
          fill={color}
        />
        <path
          d="M5.5 6.25C4.25736 6.25 3.25 7.25736 3.25 8.5V15.5C3.25 16.7426 4.25736 17.75 5.5 17.75H13.5C14.7426 17.75 15.75 16.7426 15.75 15.5V14.7135L18.941 16.309C19.7721 16.7245 20.75 16.1202 20.75 15.191V8.80899C20.75 7.87976 19.7721 7.27539 18.941 7.69095L15.75 9.28644V8.5C15.75 7.25736 14.7426 6.25 13.5 6.25H5.5ZM15.75 10.9635V13.0364L19.25 14.7864V9.21349L15.75 10.9635ZM14.25 8.5C14.25 8.08579 13.9142 7.75 13.5 7.75H5.5C5.08579 7.75 4.75 8.08579 4.75 8.5V15.5C4.75 15.9142 5.08579 16.25 5.5 16.25H13.5C13.9142 16.25 14.25 15.9142 14.25 15.5V8.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CamVideoIcon;
