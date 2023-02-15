import * as React from 'react';
import { IconProps } from './types';

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.569 4.24995C13.6012 4.24997 13.6337 4.24999 13.6668 4.24999C13.7097 4.24999 13.752 4.24998 13.7938 4.24998C14.9118 4.24975 15.624 4.24961 16.2295 4.41184C17.8687 4.85106 19.149 6.13141 19.5882 7.7706C19.7505 8.37605 19.7503 9.08826 19.7501 10.2062C19.7501 10.248 19.7501 10.2904 19.7501 10.3333V11.8304C19.7501 12.3646 19.7501 12.8104 19.7203 13.1747C19.6893 13.5545 19.6222 13.9112 19.4504 14.2485C19.1867 14.7659 18.766 15.1866 18.2486 15.4503C17.9113 15.6221 17.5546 15.6892 17.1748 15.7203C16.8105 15.75 16.3647 15.75 15.8305 15.75H14.1696C13.6355 15.75 13.1896 15.75 12.8254 15.7203C12.4455 15.6892 12.0889 15.6221 11.7516 15.4503C11.2342 15.1866 10.8135 14.7659 10.5498 14.2485C10.378 13.9112 10.3109 13.5545 10.2798 13.1747C10.2501 12.8104 10.2501 12.3646 10.2501 11.8304V7.66666C10.2501 7.63363 10.2501 7.60106 10.25 7.56894C10.2497 7.04513 10.2494 6.64039 10.3438 6.28824C10.5981 5.33924 11.3393 4.59798 12.2883 4.3437C12.6405 4.24934 13.0452 4.2496 13.569 4.24995ZM13.6668 5.74999C12.9985 5.74999 12.8115 5.75643 12.6766 5.79258C12.2452 5.90817 11.9083 6.2451 11.7927 6.67647C11.7565 6.81138 11.7501 6.99839 11.7501 7.66666V11.8C11.7501 12.3724 11.7507 12.7566 11.7748 13.0525C11.7983 13.3396 11.8402 13.4769 11.8863 13.5675C12.0062 13.8027 12.1974 13.9939 12.4326 14.1138C12.5232 14.1599 12.6604 14.2018 12.9476 14.2252C13.2434 14.2494 13.6277 14.25 14.2001 14.25H15.8001C16.3725 14.25 16.7567 14.2494 17.0526 14.2252C17.3397 14.2018 17.477 14.1599 17.5676 14.1138C17.8028 13.9939 17.994 13.8027 18.1138 13.5675C18.16 13.4769 18.2019 13.3396 18.2253 13.0525C18.2495 12.7566 18.2501 12.3724 18.2501 11.8V10.3333C18.2501 9.88655 18.2493 9.53494 18.2439 9.24999H16.5001C15.5339 9.24999 14.7501 8.46708 14.7501 7.50029V5.75613C14.4651 5.75077 14.1135 5.74999 13.6668 5.74999ZM16.2501 5.99993V7.50029C16.2501 7.63807 16.3617 7.74999 16.5001 7.74999H18.0001C17.6707 6.95906 17.041 6.32935 16.2501 5.99993Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M8.4963 8.25H8.5C8.91422 8.25 9.25 8.58579 9.25 9C9.25 9.41421 8.91422 9.75 8.5 9.75C7.8979 9.75 7.28569 9.7453 6.68845 9.83385C6.10145 9.92089 5.81903 10.4056 5.77476 10.9475C5.75058 11.2434 5.75 11.6276 5.75 12.2V15.8C5.75 16.3724 5.75058 16.7566 5.77476 17.0525C5.829 17.7163 6.25597 18.1687 6.94748 18.2252C7.24336 18.2494 7.62757 18.25 8.2 18.25H9.8C10.3252 18.25 11.0755 18.3644 11.5675 18.1138C11.9918 17.8975 12.2356 17.4672 12.2499 16.9986C12.2606 16.5906 12.5844 16.25 13 16.25C13.4151 16.25 13.7535 16.6056 13.7499 17.0165C13.7264 18.0373 13.1667 18.9824 12.2485 19.4503C11.5202 19.8213 10.6219 19.75 9.83045 19.75H8.16955C7.3781 19.75 6.47977 19.8213 5.75153 19.4503C5.23408 19.1866 4.81338 18.7659 4.54973 18.2485C4.37789 17.9112 4.31078 17.5546 4.27974 17.1747C4.24998 16.8104 4.24999 16.3646 4.25 15.8304V12.1696C4.24999 11.6354 4.24998 11.1896 4.27974 10.8253C4.35925 9.85214 4.86217 9.00288 5.75153 8.54973C6.19202 8.32529 6.74286 8.30557 7.22696 8.27842C7.73395 8.25 8.2458 8.25 8.4963 8.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CopyIcon;
