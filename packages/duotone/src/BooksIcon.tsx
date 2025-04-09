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
        <g opacity="0.5">
          <path
            d="M5 8.5C5 7.67892 9 7.58949 9 8.5C9 7.67892 13 7.58949 13 8.5V15.5C13 16.3288 9 16.4089 9 15.5C9 16.3211 5 16.4105 5 15.5V8.5Z"
            fill={color}
          />
          <path
            d="M18.0235 8.59644C17.7998 7.76139 13.9577 8.87729 14.1598 9.63171L15.8717 16.0207C16.0739 16.7751 19.9592 15.8205 19.7354 14.9854L18.0235 8.59644Z"
            fill={color}
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.75 10.487V19C13.75 19.9665 12.9665 20.75 12 20.75H10C9.57162 20.75 9.1792 20.5961 8.87501 20.3405C8.57081 20.5961 8.17838 20.75 7.75 20.75H5.75C4.7835 20.75 4 19.9665 4 19V5C4 4.0335 4.7835 3.25 5.75 3.25H7.75C8.17838 3.25 8.57081 3.40392 8.875 3.65947C9.17919 3.40392 9.57162 3.25 10 3.25H12C12.5736 3.25 13.0828 3.52597 13.4019 3.95239C13.5169 3.89126 13.6406 3.8421 13.7718 3.80695L15.7037 3.28931C16.6372 3.03916 17.5968 3.59318 17.847 4.52675L21.4704 18.0497C21.7206 18.9833 21.1666 19.9429 20.233 20.193L18.3011 20.7107C17.3676 20.9608 16.408 20.4068 16.1578 19.4732L13.75 10.487ZM13.9833 5.56203C13.9475 5.42866 14.0267 5.29157 14.16 5.25584L16.0919 4.7382C16.2253 4.70247 16.3623 4.78161 16.3981 4.91498L16.9804 7.08834L14.5656 7.73538L13.9833 5.56203ZM14.9538 9.18427L16.6362 15.4628L19.051 14.8158L17.3687 8.53723L14.9538 9.18427ZM17.6067 19.085L17.0244 16.9117L19.4392 16.2646L20.0215 18.4379C20.0573 18.5713 19.9781 18.7084 19.8448 18.7441L17.9129 19.2618C17.7795 19.2975 17.6425 19.2184 17.6067 19.085ZM5.75 4.75C5.61193 4.75 5.5 4.86193 5.5 5V7.25H8V5C8 4.86193 7.88807 4.75 7.75 4.75H5.75ZM5.5 15.25V8.75H8V15.25H5.5ZM5.5 16.75V19C5.5 19.1381 5.61193 19.25 5.75 19.25H7.75C7.88807 19.25 8 19.1381 8 19V16.75H5.5ZM10 4.75C9.86193 4.75 9.75 4.86193 9.75 5V7.25H12.25V5C12.25 4.86193 12.1381 4.75 12 4.75H10ZM9.75 15.25V8.75H12.25V15.25H9.75ZM9.75 16.75V19C9.75 19.1381 9.86193 19.25 10 19.25H12C12.1381 19.25 12.25 19.1381 12.25 19V16.75H9.75Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BooksIcon;
