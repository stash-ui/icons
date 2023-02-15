import * as React from 'react';
import { IconProps } from './types';

export const PlanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 5C3.25 3.48122 4.48122 2.25 6 2.25H16C17.5188 2.25 18.75 3.48122 18.75 5V10.5C18.75 10.9142 18.4142 11.25 18 11.25C17.5858 11.25 17.25 10.9142 17.25 10.5V5C17.25 4.30964 16.6904 3.75 16 3.75H6C5.30964 3.75 4.75 4.30964 4.75 5V19C4.75 19.6904 5.30964 20.25 6 20.25H13.5C13.9142 20.25 14.25 20.5858 14.25 21C14.25 21.4142 13.9142 21.75 13.5 21.75H6C4.48122 21.75 3.25 20.5188 3.25 19V5Z"
          fill={color}
        />
        <path
          d="M18 13.25C18.4142 13.25 18.75 13.5858 18.75 14V14.4182C19.7767 14.4563 20.75 15.213 20.75 16.3333 20.75 16.7475 20.4142 17.0833 20 17.0833 19.5858 17.0833 19.25 16.7475 19.25 16.3333 19.25 16.1914 19.088 15.9167 18.6687 15.9167H17.1634C17.019 15.9167 16.9048 15.968 16.8345 16.0294 16.7656 16.0896 16.75 16.1459 16.75 16.1831 16.75 16.2719 16.7616 16.3147 16.7664 16.3284 16.7668 16.3298 16.7672 16.3309 16.7676 16.3317 16.7727 16.3359 16.7853 16.3451 16.8103 16.3579 16.8503 16.3784 16.9106 16.4025 17.0026 16.4298L19.4212 17.1313C19.6965 17.2128 20.0513 17.3485 20.3286 17.6438 20.6298 17.9646 20.75 18.3731 20.75 18.8169 20.75 19.8839 19.794 20.5833 18.8366 20.5833H18.75V21C18.75 21.4142 18.4142 21.75 18 21.75 17.5858 21.75 17.25 21.4142 17.25 21V20.5818C16.2233 20.5437 15.25 19.787 15.25 18.6667 15.25 18.2525 15.5858 17.9167 16 17.9167 16.4142 17.9167 16.75 18.2525 16.75 18.6667 16.75 18.8086 16.912 19.0833 17.3313 19.0833H18.8366C18.981 19.0833 19.0952 19.032 19.1655 18.9706 19.2344 18.9104 19.25 18.8541 19.25 18.8169 19.25 18.7281 19.2384 18.6853 19.2336 18.6716 19.2332 18.6702 19.2328 18.6691 19.2324 18.6683 19.2273 18.6641 19.2147 18.6549 19.1897 18.6421 19.1497 18.6216 19.0894 18.5975 18.9973 18.5702L16.5788 17.8687C16.3035 17.7872 15.9487 17.6515 15.6714 17.3562 15.3702 17.0354 15.25 16.6269 15.25 16.1831 15.25 15.1161 16.2059 14.4167 17.1634 14.4167H17.25V14C17.25 13.5858 17.5858 13.25 18 13.25zM6.25 11C6.25 10.5858 6.58579 10.25 7 10.25H7.5C7.91421 10.25 8.25 10.5858 8.25 11 8.25 11.4142 7.91421 11.75 7.5 11.75H7C6.58579 11.75 6.25 11.4142 6.25 11zM9.25 11C9.25 10.5858 9.58579 10.25 10 10.25H15C15.4142 10.25 15.75 10.5858 15.75 11 15.75 11.4142 15.4142 11.75 15 11.75H10C9.58579 11.75 9.25 11.4142 9.25 11zM6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H7.5C7.91421 13.25 8.25 13.5858 8.25 14 8.25 14.4142 7.91421 14.75 7.5 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14zM9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H13.5C13.9142 13.25 14.25 13.5858 14.25 14 14.25 14.4142 13.9142 14.75 13.5 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14zM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H7.5C7.91421 16.25 8.25 16.5858 8.25 17 8.25 17.4142 7.91421 17.75 7.5 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17zM9.25 17C9.25 16.5858 9.58579 16.25 10 16.25H12C12.4142 16.25 12.75 16.5858 12.75 17 12.75 17.4142 12.4142 17.75 12 17.75H10C9.58579 17.75 9.25 17.4142 9.25 17zM6 6.5C6 6.03406 6 5.80109 6.07612 5.61732 6.17761 5.37229 6.37229 5.17761 6.61732 5.07612 6.80109 5 7.03406 5 7.5 5H14.5C14.9659 5 15.1989 5 15.3827 5.07612 15.6277 5.17761 15.8224 5.37229 15.9239 5.61732 16 5.80109 16 6.03406 16 6.5 16 6.96594 16 7.19891 15.9239 7.38268 15.8224 7.62771 15.6277 7.82239 15.3827 7.92388 15.1989 8 14.9659 8 14.5 8H7.5C7.03406 8 6.80109 8 6.61732 7.92388 6.37229 7.82239 6.17761 7.62771 6.07612 7.38268 6 7.19891 6 6.96594 6 6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PlanIcon;
