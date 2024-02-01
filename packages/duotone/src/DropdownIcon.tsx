import * as React from 'react';
import { IconProps } from './types';

export const DropdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3.75C4.48122 3.75 3.25 4.98122 3.25 6.5V17.5C3.25 19.0188 4.48122 20.25 6 20.25H18C19.5188 20.25 20.75 19.0188 20.75 17.5V6.5C20.75 4.98122 19.5188 3.75 18 3.75H6ZM4.75 17.5V10.25H19.25V17.5C19.25 18.1904 18.6904 18.75 18 18.75H6C5.30964 18.75 4.75 18.1904 4.75 17.5ZM15.416 5.87598C15.0714 5.64622 14.6057 5.73935 14.376 6.08399C14.1462 6.42864 14.2393 6.89429 14.584 7.12406L15.8066 7.93916C16.2265 8.21907 16.7735 8.21907 17.1934 7.93916L18.416 7.12406C18.7607 6.89429 18.8538 6.42864 18.624 6.08399C18.3943 5.73935 17.9286 5.64622 17.584 5.87598L16.5 6.59863L15.416 5.87598Z"
          fill={color}
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 12.75C6.75 12.3358 7.08579 12 7.5 12H16.5C16.9142 12 17.25 12.3358 17.25 12.75C17.25 13.1642 16.9142 13.5 16.5 13.5H7.5C7.08579 13.5 6.75 13.1642 6.75 12.75Z"
          fill={color}
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H16.5C16.9142 15.25 17.25 15.5858 17.25 16C17.25 16.4142 16.9142 16.75 16.5 16.75H7.5C7.08579 16.75 6.75 16.4142 6.75 16Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DropdownIcon;
