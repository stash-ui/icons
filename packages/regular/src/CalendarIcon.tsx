import * as React from 'react';
import { IconProps } from './types';

export const CalendarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.25 11.5C7.55964 11.5 7 12.0596 7 12.75 7 13.4404 7.55964 14 8.25 14 8.94036 14 9.5 13.4404 9.5 12.75 9.5 12.0596 8.94036 11.5 8.25 11.5zM15.75 11.5C15.0596 11.5 14.5 12.0596 14.5 12.75 14.5 13.4404 15.0596 14 15.75 14 16.4404 14 17 13.4404 17 12.75 17 12.0596 16.4404 11.5 15.75 11.5zM10.75 12.75C10.75 12.0596 11.3096 11.5 12 11.5 12.6904 11.5 13.25 12.0596 13.25 12.75 13.25 13.4404 12.6904 14 12 14 11.3096 14 10.75 13.4404 10.75 12.75zM8.25 15.5C7.55964 15.5 7 16.0596 7 16.75 7 17.4404 7.55964 18 8.25 18 8.94036 18 9.5 17.4404 9.5 16.75 9.5 16.0596 8.94036 15.5 8.25 15.5zM10.75 16.75C10.75 16.0596 11.3096 15.5 12 15.5 12.6904 15.5 13.25 16.0596 13.25 16.75 13.25 17.4404 12.6904 18 12 18 11.3096 18 10.75 17.4404 10.75 16.75z"
          fill={color}
        />
        <path
          d="M10.367 2.75H13.633C14.7251 2.74999 15.5906 2.74999 16.2883 2.80699C17.0017 2.86527 17.6053 2.98688 18.1565 3.26772C19.0502 3.72312 19.7769 4.44978 20.2323 5.34355C20.5131 5.89472 20.6347 6.49834 20.693 7.21173C20.75 7.90935 20.75 8.77484 20.75 9.86698V14.133C20.75 15.2252 20.75 16.0906 20.693 16.7883C20.6347 17.5017 20.5131 18.1053 20.2323 18.6565C19.7769 19.5502 19.0502 20.2769 18.1565 20.7323C17.6053 21.0131 17.0017 21.1347 16.2883 21.193C15.5906 21.25 14.7252 21.25 13.633 21.25H10.367C9.27484 21.25 8.40935 21.25 7.71173 21.193C6.99834 21.1347 6.39472 21.0131 5.84355 20.7323C4.94978 20.2769 4.22312 19.5502 3.76772 18.6565C3.48688 18.1053 3.36527 17.5017 3.30699 16.7883C3.24999 16.0906 3.24999 15.2252 3.25 14.133V9.867C3.24999 8.77486 3.24999 7.90935 3.30699 7.21173C3.36527 6.49834 3.48688 5.89472 3.76772 5.34355C4.22312 4.44978 4.94978 3.72312 5.84355 3.26772C6.39472 2.98688 6.99834 2.86527 7.71173 2.80699C8.40935 2.74999 9.27486 2.74999 10.367 2.75ZM4.75012 9.5L4.75 14.1C4.75 15.2325 4.75058 16.0367 4.80201 16.6661C4.85271 17.2867 4.94909 17.671 5.10423 17.9755C5.41582 18.587 5.913 19.0842 6.52453 19.3958C6.829 19.5509 7.21325 19.6473 7.83388 19.698C8.46327 19.7494 9.26752 19.75 10.4 19.75H13.6C14.7325 19.75 15.5367 19.7494 16.1661 19.698C16.7867 19.6473 17.171 19.5509 17.4755 19.3958C18.087 19.0842 18.5842 18.587 18.8958 17.9755C19.0509 17.671 19.1473 17.2867 19.198 16.6661C19.2494 16.0367 19.25 15.2325 19.25 14.1L19.2499 9.5H4.75012ZM9.5 5.75C8.94772 5.75 8.5 6.19772 8.5 6.75C8.5 7.30228 8.94771 7.75 9.5 7.75H14.5C15.0523 7.75 15.5 7.30228 15.5 6.75C15.5 6.19772 15.0523 5.75 14.5 5.75H9.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CalendarIcon;
