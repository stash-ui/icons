import * as React from 'react';
import { IconProps } from './types';

export const LocationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.4999 15.8571C14.4999 13.9803 16.0902 12.5 17.9999 12.5 19.9096 12.5 21.4999 13.9803 21.4999 15.8571 21.4999 17.4547 20.6665 18.8514 19.8889 19.8142 19.4949 20.302 19.1019 20.6949 18.8073 20.9661 18.6597 21.1019 18.536 21.208 18.4481 21.281 18.4042 21.3174 18.3691 21.3457 18.3444 21.3653L18.3154 21.3881 18.307 21.3946 18.3044 21.3966 18.3035 21.3973C18.3034 21.3974 18.3029 21.3977 17.9999 21 17.7226 21.416 17.7224 21.4159 17.7222 21.4158L17.7208 21.4149 17.718 21.413 17.7092 21.407 17.6791 21.3861C17.6537 21.3683 17.6179 21.3427 17.5732 21.3096 17.4838 21.2433 17.3585 21.1466 17.2093 21.021 16.9114 20.7704 16.5146 20.4021 16.1171 19.9288 15.3268 18.9881 14.4999 17.5916 14.4999 15.8571zM17.9999 21L17.7222 21.4158 18.0193 21.6138 18.3035 21.3973 17.9999 21zM17.9831 20.3627C18.028 20.3231 18.0772 20.279 18.13 20.2304 18.3979 19.9837 18.755 19.6266 19.1109 19.1858 19.8333 18.2915 20.4999 17.1167 20.4999 15.8571 20.4999 14.578 19.4039 13.5 17.9999 13.5 16.5959 13.5 15.4999 14.578 15.4999 15.8571 15.4999 17.2656 16.173 18.4406 16.8828 19.2856 17.2352 19.7051 17.5884 20.0332 17.853 20.2558 17.8994 20.2948 17.9429 20.3305 17.9831 20.3627zM16.9999 16C16.9999 15.4477 17.4476 15 17.9999 15 18.5522 15 18.9999 15.4477 18.9999 16 18.9999 16.5523 18.5522 17 17.9999 17 17.4476 17 16.9999 16.5523 16.9999 16zM9.9999 3.5C8.56327 3.5 7.42096 4.63145 7.42096 6 7.42096 7.36855 8.56327 8.5 9.9999 8.5 11.4365 8.5 12.5788 7.36855 12.5788 6 12.5788 4.63145 11.4365 3.5 9.9999 3.5zM6.42096 6C6.42096 4.05484 8.03563 2.5 9.9999 2.5 11.9642 2.5 13.5788 4.05484 13.5788 6 13.5788 7.94516 11.9642 9.5 9.9999 9.5 8.03563 9.5 6.42096 7.94516 6.42096 6zM7.60626 11.7564C7.38775 11.6151 7.17626 11.5755 7.02104 11.6183 6.87408 11.6587 6.7278 11.7023 6.5823 11.7488L5.59789 12.064C4.86421 12.2988 4.29166 12.8303 4.01762 13.4973 4.0121 13.5164 4.00372 13.5444 3.99033 13.5881 3.99034 13.5881 3.98998 13.5893 3.9892 13.592L3.98632 13.6023 3.97774 13.6343C3.9711 13.6596 3.96341 13.6899 3.95576 13.7208 3.94812 13.7517 3.9408 13.7821 3.93488 13.8076L3.92755 13.8399 3.92531 13.8503C3.92473 13.8531 3.9245 13.8543 3.92451 13.8543 3.90531 13.9554 3.90159 13.9906 3.89187 14.0825L3.51516 17.6458 3.51391 17.6547C3.42358 18.2905 3.76645 18.83 4.33795 18.9626 5.43531 19.2173 7.26857 19.5 9.9999 19.5 10.276 19.5 10.4999 19.7239 10.4999 20 10.4999 20.2761 10.276 20.5 9.9999 20.5 7.19938 20.5 5.2898 20.2101 4.1119 19.9367 2.9657 19.6707 2.37504 18.5921 2.52253 17.5234L2.89712 13.9802C2.90838 13.8736 2.91538 13.8083 2.94205 13.6678 2.95661 13.5911 3.01134 13.3698 3.0342 13.2952 3.05068 13.2414 3.05661 13.2208 3.05828 13.2149 3.05998 13.2082 3.06426 13.1917 3.07132 13.1715 3.0742 13.1633 3.0767 13.1568 3.07777 13.1541L3.0791 13.1507 3.07964 13.1493C3.46383 12.1863 4.27503 11.4374 5.29303 11.1116L6.27743 10.7964C6.43601 10.7457 6.59542 10.6983 6.75556 10.6542 7.2758 10.5109 7.783 10.6798 8.14931 10.9167 8.54314 11.1714 9.19443 11.4856 9.9999 11.4856 10.8054 11.4856 11.4567 11.1714 11.8505 10.9167 12.2168 10.6798 12.724 10.5109 13.2442 10.6542 13.4044 10.6983 13.5638 10.7457 13.7224 10.7964L14.7068 11.1116C14.9698 11.1957 15.1147 11.4772 15.0305 11.7402 14.9463 12.0032 14.6649 12.1481 14.4019 12.064L13.4175 11.7488C13.272 11.7023 13.1257 11.6587 12.9787 11.6183 12.8235 11.5755 12.612 11.6151 12.3935 11.7564 11.9045 12.0727 11.0644 12.4856 9.9999 12.4856 8.93542 12.4856 8.09534 12.0727 7.60626 11.7564z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LocationIcon;
