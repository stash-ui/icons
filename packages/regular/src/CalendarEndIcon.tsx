import * as React from 'react';
import { IconProps } from './types';

export const CalendarEndIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.82888 12.5237C8.93914 12.3899 9.21986 12.25 9.50001 12.25 9.91422 12.25 10.25 12.5858 10.25 13 10.25 13.2647 10.1729 13.4245 10.0729 13.521 9.97143 13.619 9.74439 13.75 9.25002 13.75 8.83581 13.75 8.50002 14.0858 8.50002 14.5 8.50002 14.9142 8.83581 15.25 9.25002 15.25 9.74439 15.25 9.97143 15.381 10.0729 15.479 10.1729 15.5755 10.25 15.7353 10.25 16 10.25 16.4142 9.91422 16.75 9.50001 16.75 9.21986 16.75 8.93914 16.6101 8.82888 16.4763 8.5655 16.1566 8.09282 16.1109 7.77313 16.3743 7.45344 16.6377 7.40779 17.1104 7.67117 17.4301 8.11114 17.9641 8.84726 18.25 9.50001 18.25 10.7426 18.25 11.75 17.2426 11.75 16 11.75 15.4776 11.6015 14.9324 11.2116 14.5 11.6015 14.0676 11.75 13.5224 11.75 13 11.75 11.7574 10.7426 10.75 9.50001 10.75 8.84726 10.75 8.11114 11.0359 7.67117 11.5699 7.40779 11.8896 7.45344 12.3623 7.77313 12.6257 8.09282 12.8891 8.5655 12.8434 8.82888 12.5237zM14.5 17.5V12.7486L14.1023 12.9602C13.7366 13.1548 13.2825 13.016 13.0879 12.6504 12.8933 12.2847 13.0321 11.8305 13.3977 11.636L14.6156 10.988 14.6249 10.983C14.6611 10.9637 14.7254 10.9293 14.7869 10.9035 14.8521 10.8761 15.0233 10.8086 15.2419 10.837 15.4823 10.8682 15.6987 10.9982 15.8391 11.1957 15.9668 11.3754 15.9877 11.5582 15.9941 11.6286 16.0002 11.6951 16.0001 11.768 16 11.8091L16 11.8196V17.5C16 17.9142 15.6642 18.25 15.25 18.25 14.8358 18.25 14.5 17.9142 14.5 17.5z"
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

export default CalendarEndIcon;
