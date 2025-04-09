import * as React from 'react';
import { IconProps } from './types';

export const BooksIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 8.58808V19C13.5 19.8284 12.8284 20.5 12 20.5H10C9.55199 20.5 9.14986 20.3036 8.875 19.9922C8.60015 20.3036 8.19801 20.5 7.75 20.5H5.75C4.92157 20.5 4.25 19.8284 4.25 19V5C4.25 4.17157 4.92157 3.5 5.75 3.5H7.75C8.19801 3.5 8.60015 3.69641 8.875 4.00781C9.14985 3.69641 9.55199 3.5 10 3.5H12C12.5742 3.5 13.073 3.82264 13.3251 4.29651C13.4739 4.18501 13.646 4.09947 13.8365 4.04842L15.7684 3.53078C16.5686 3.31636 17.3911 3.79124 17.6055 4.59144L21.229 18.1144C21.4434 18.9146 20.9685 19.7371 20.1683 19.9515L18.2364 20.4692C17.4362 20.6836 16.6137 20.2087 16.3993 19.4085L13.5 8.58808ZM13.7418 5.62671C13.6703 5.35998 13.8286 5.08581 14.0953 5.01434L16.0272 4.4967C16.2939 4.42523 16.5681 4.58352 16.6396 4.85026L17.2866 7.26509L14.3888 8.04155L13.7418 5.62671ZM14.6477 9.00747L17.5454 8.23102L19.3572 14.9925L16.4594 15.769L14.6477 9.00747ZM16.7182 16.7349L17.3652 19.1497C17.4367 19.4164 17.7109 19.5747 17.9776 19.5032L19.9095 18.9856C20.1762 18.9141 20.3345 18.64 20.263 18.3732L19.616 15.9584L16.7182 16.7349ZM5.75 4.5C5.47386 4.5 5.25 4.72386 5.25 5V7.5H8.25V5C8.25 4.72386 8.02614 4.5 7.75 4.5H5.75ZM8.25 8.5H5.25V15.5H8.25V8.5ZM8.25 16.5H5.25V19C5.25 19.2761 5.47386 19.5 5.75 19.5H7.75C8.02614 19.5 8.25 19.2761 8.25 19V16.5ZM10 4.5C9.72386 4.5 9.5 4.72386 9.5 5V7.5H12.5V5C12.5 4.72386 12.2761 4.5 12 4.5H10ZM9.5 19V16.5H12.5V19C12.5 19.2761 12.2761 19.5 12 19.5H10C9.72386 19.5 9.5 19.2761 9.5 19ZM12.5 15.5H9.5V8.5H12.5V15.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BooksIcon;
