import * as React from 'react';
import { IconProps } from './types';

export const EngagementIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 7.56969C2.75 4.95943 5.04697 2.75 8 2.75 10.1823 2.75 12.0245 3.96788 12.8215 5.65985 12.998 6.03456 13.4449 6.19524 13.8196 6.01871 14.1943 5.84219 14.355 5.39533 14.1785 5.02061 13.123 2.78005 10.7371 1.25 8 1.25 4.32562 1.25 1.25 4.02784 1.25 7.56969 1.25 8.87972 1.67606 10.0938 2.39861 11.0979L1.68681 13.1903C1.32675 14.2487 2.50447 15.1654 3.44223 14.5596L5.29595 13.3619C5.62646 13.4973 5.97058 13.6085 6.32571 13.6934 6.72859 13.7896 7.13321 13.5411 7.22947 13.1382 7.32572 12.7353 7.07716 12.3307 6.67429 12.2344 6.2816 12.1406 5.90727 12.0062 5.55674 11.8365L5.17719 11.6528 3.40468 12.798 4.08315 10.8035 3.81608 10.4807C3.14321 9.66719 2.75 8.65883 2.75 7.56969zM12.1997 14.6201C11.8697 13.6301 12.2597 12.4101 13.3397 12.0701 13.8997 11.9001 14.5997 12.0401 14.9997 12.5701 15.3797 12.0201 16.0997 11.9001 16.6597 12.0701 17.7397 12.4001 18.1297 13.6301 17.7997 14.6201 17.2897 16.1901 15.4997 17.0001 14.9997 17.0001 14.4997 17.0001 12.7297 16.2001 12.1997 14.6201z"
          fill={color}
        />
        <path
          d="M15 7.25C10.7731 7.25 7.25 10.4446 7.25 14.5 7.25 18.5554 10.7731 21.75 15 21.75 16.126 21.75 17.1986 21.525 18.1674 21.1189L20.3851 22.5521C21.3804 23.1953 22.6286 22.2217 22.2471 21.0998L21.3957 18.5963C22.2473 17.4345 22.75 16.0236 22.75 14.5 22.75 10.4446 19.2269 7.25 15 7.25zM8.75 14.5C8.75 11.3757 11.4949 8.75 15 8.75 18.5051 8.75 21.25 11.3757 21.25 14.5 21.25 15.8022 20.7798 17.0068 19.9775 17.9771L19.7105 18.2999 20.5954 20.902 18.2845 19.4085 17.9048 19.5923C17.0391 20.0114 16.0516 20.25 15 20.25 11.4949 20.25 8.75 17.6243 8.75 14.5zM5.5 5.5C5.22386 5.5 5 5.72386 5 6 5 6.27614 5.22386 6.5 5.5 6.5H10.5C10.7761 6.5 11 6.27614 11 6 11 5.72386 10.7761 5.5 10.5 5.5H5.5zM5 10C5 9.72386 5.22386 9.5 5.5 9.5H6.5C6.77614 9.5 7 9.72386 7 10 7 10.2761 6.77614 10.5 6.5 10.5H5.5C5.22386 10.5 5 10.2761 5 10zM5.5 7.5C5.22386 7.5 5 7.72386 5 8 5 8.27614 5.22386 8.5 5.5 8.5H8.5C8.77614 8.5 9 8.27614 9 8 9 7.72386 8.77614 7.5 8.5 7.5H5.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EngagementIcon;
