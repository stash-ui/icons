import * as React from 'react';
import { IconProps } from './types';

export const AsteriskIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9999 7C12.5522 7 12.9999 7.44772 12.9999 8V10.2678L14.9638 9.13397C15.4421 8.85783 16.0537 9.02171 16.3298 9.5C16.6059 9.97829 16.4421 10.5899 15.9638 10.866L13.9999 11.9999L15.9642 13.134C16.4425 13.4101 16.6064 14.0217 16.3303 14.5C16.0541 14.9783 15.4425 15.1422 14.9642 14.866L12.9999 13.7319V16C12.9999 16.5523 12.5522 17 11.9999 17C11.4476 17 10.9999 16.5523 10.9999 16V13.7319L9.03557 14.866C8.55727 15.1422 7.94568 14.9783 7.66954 14.5C7.3934 14.0217 7.55727 13.4101 8.03557 13.134L9.9999 11.9999L8.03604 10.866C7.55774 10.5899 7.39387 9.97829 7.67001 9.5C7.94615 9.02171 8.55774 8.85783 9.03604 9.13397L10.9999 10.2678V8C10.9999 7.44772 11.4476 7 11.9999 7Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AsteriskIcon;
