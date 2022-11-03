import * as React from 'react';
import { IconProps } from './types';

export const MarkerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.8272 5.44877C21.5823 5.00773 21.1444 4.49816 20.3808 4.05727C19.6171 3.61637 18.9569 3.49192 18.4525 3.5004C18.0494 3.50718 17.5061 3.58086 17.2682 3.9501L11.7102 12.5769C11.3908 13.0727 11.3434 13.6978 11.3149 14.2703C11.2864 14.8445 11.2255 15.4146 10.9322 15.9227C10.7333 16.2672 10.8622 16.7483 11.2067 16.9472L13.8048 18.4472C14.1635 18.6543 14.6222 18.5314 14.8293 18.1727C15.1226 17.6647 15.5859 17.327 16.0689 17.0151C16.5508 16.7039 17.0756 16.3477 17.3412 15.8194L22.0298 6.69921C22.2307 6.30858 22.0228 5.8012 21.8272 5.44877ZM18.372 5.00648L13.3977 12.7273L16.3639 14.4398L20.5631 6.27151C20.4779 6.08 20.26 5.71959 19.6308 5.3563C19.0015 4.99302 18.5805 4.98455 18.372 5.00648Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.4119 17.5919C11.1748 17.455 10.8717 17.5343 10.7319 17.7697L10.5946 18.001H2.63975C2.22883 18.001 1.99262 18.4925 2.24932 18.8134L3.24932 20.0634C3.3442 20.182 3.48786 20.251 3.63975 20.251C6.55043 20.251 9.46112 20.2468 12.3718 20.2468C12.5322 20.2468 12.6829 20.1698 12.7769 20.0398L13.2991 19.318C13.4649 19.0886 13.389 18.7334 13.1439 18.5919L11.4119 17.5919Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default MarkerIcon;
