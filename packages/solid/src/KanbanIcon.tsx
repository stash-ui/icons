import * as React from 'react';
import { IconProps } from './types';

export const KanbanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.14286 3C5.30254 3 3 5.30254 3 8.14286V15.8571C3 18.6975 5.30254 21 8.14286 21H15.8571C18.6975 21 21 18.6975 21 15.8571V8.14286C21 5.30254 18.6975 3 15.8571 3H8.14286ZM7.82143 6.85714C7.28887 6.85714 6.85714 7.28887 6.85714 7.82143V16.1786C6.85714 16.7111 7.28887 17.1429 7.82143 17.1429C8.35399 17.1429 8.78571 16.7111 8.78571 16.1786V7.82143C8.78571 7.28887 8.35399 6.85714 7.82143 6.85714ZM11.0357 7.82143C11.0357 7.28887 11.4674 6.85714 12 6.85714C12.5326 6.85714 12.9643 7.28887 12.9643 7.82143V13.6071C12.9643 14.1397 12.5326 14.5714 12 14.5714C11.4674 14.5714 11.0357 14.1397 11.0357 13.6071V7.82143ZM16.1786 6.85714C15.646 6.85714 15.2143 7.28887 15.2143 7.82143V11.0357C15.2143 11.5683 15.646 12 16.1786 12C16.7111 12 17.1429 11.5683 17.1429 11.0357V7.82143C17.1429 7.28887 16.7111 6.85714 16.1786 6.85714Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default KanbanIcon;