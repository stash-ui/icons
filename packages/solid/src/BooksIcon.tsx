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
          d="M17.4238 5.94403L15.5 6.58493V5.09776L16.8419 4.7382C16.9753 4.70246 17.1123 4.78161 17.1481 4.91497L17.4238 5.94403ZM17.1367 14.5318L15.8256 9.63856L18.2017 8.847L19.5429 13.8526L17.1367 14.5318ZM18.3567 19.085L17.9132 17.4298L20.3194 16.7507L20.7715 18.4379L21.496 18.2438L20.7715 18.4379C20.8073 18.5713 20.7281 18.7084 20.5948 18.7441L18.6629 19.2618C18.5295 19.2975 18.3925 19.2184 18.3567 19.085ZM5.5 5C5.5 4.86193 5.61193 4.75 5.75 4.75H7.75C7.88807 4.75 8 4.86193 8 5V6.5H5.5V5ZM5.5 14.5V9.5H8V14.5H5.5ZM5.5 19V17.5H8V19C8 19.1381 7.88807 19.25 7.75 19.25H5.75C5.61193 19.25 5.5 19.1381 5.5 19ZM10.5 5C10.5 4.86193 10.6119 4.75 10.75 4.75H12.75C12.8881 4.75 13 4.86193 13 5V6.5H10.5V5ZM10.5 14.5V9.5H13V14.5H10.5ZM10.5 19V17.5H13V19C13 19.1381 12.8881 19.25 12.75 19.25H10.75C10.6119 19.25 10.5 19.1381 10.5 19Z"
          fill={color}
          stroke={color}
          stroke-width="1.5"
        />
      </svg>
    );
  }
);

export default BooksIcon;
