import * as React from 'react';
import { IconProps } from './types';

export const SocialTwitterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.3127 6.6732C16.2034 5.49378 14.3473 5.43677 13.1671 6.54624C12.406 7.26146 12.0833 8.32781 12.3195 9.34565C12.3549 9.49846 12.3166 9.65904 12.216 9.77939C12.1154 9.89973 11.9641 9.96588 11.8074 9.95805C9.1785 9.82663 6.71273 8.6886 4.9109 6.79835C4.57013 7.99601 5.02349 9.31747 6.10344 10.0392C6.51101 10.3116 6.30069 10.9693 5.8107 10.9547C5.48899 10.9451 5.17099 10.8958 4.86368 10.8089C5.14073 11.8712 6.00175 12.715 7.1192 12.9407C7.62279 13.0425 7.64756 13.7777 7.15196 13.9131C6.86896 13.9905 6.57905 14.0355 6.28771 14.0481C6.81019 14.8443 7.70011 15.353 8.68535 15.3717C9.14496 15.3804 9.34622 15.9809 8.98469 16.2648C7.99898 17.0389 6.83818 17.5455 5.61419 17.7457C6.64617 18.1322 7.74405 18.3321 8.85646 18.3305C8.87379 18.3305 8.89102 18.3313 8.90809 18.3331C14.8506 18.3051 18.1154 13.3795 18.1154 9.07497C18.1154 8.92334 18.1152 8.79326 18.1064 8.66598C18.0945 8.49379 18.1723 8.32764 18.3121 8.22645C18.4823 8.10326 18.6462 7.97209 18.8032 7.83344C18.6714 7.85637 18.5388 7.8757 18.4057 7.89139C18.1716 7.919 17.9499 7.77927 17.8739 7.55609C17.7979 7.33291 17.8881 7.08694 18.0903 6.96583C18.2567 6.86623 18.4117 6.75107 18.5537 6.62254C18.2979 6.7028 18.0375 6.76917 17.7736 6.82121C17.6047 6.85451 17.4306 6.79859 17.3127 6.6732ZM8.80415 19.3304C6.86333 19.323 4.96456 18.7624 3.33016 17.7138C3.13396 17.5879 3.05077 17.3432 3.12962 17.1238C3.20847 16.9045 3.42844 16.7687 3.65987 16.7965C3.91099 16.8268 4.16378 16.8419 4.41769 16.8425C4.41735 16.9809 4.41681 17.1968 4.41681 17.1968M4.41681 17.1968C4.41681 17.1968 4.41735 16.9809 4.41769 16.8425C5.44944 16.8434 6.45919 16.5943 7.36492 16.124C6.25911 15.711 5.37182 14.8114 4.99584 13.6431C4.93031 13.4395 5.00959 13.207 5.17901 13.0846C4.3094 12.3573 3.76908 11.2665 3.76908 10.0692C3.76908 9.76833 3.99128 9.50549 4.30335 9.52691C3.64296 8.34929 3.61043 6.86699 4.33175 5.6246C4.41425 5.4825 4.56129 5.39001 4.72509 5.37717C4.8889 5.36434 5.04855 5.4328 5.15218 5.56031C6.67542 7.43466 8.86647 8.63131 11.2499 8.90881C11.1835 7.75826 11.6258 6.62236 12.4822 5.81758C13.9936 4.39685 16.332 4.40257 17.8351 5.78437C18.4551 5.63544 19.0498 5.39396 19.5999 5.06794C19.7787 4.96196 20.0044 4.97764 20.1668 5.10734C20.3292 5.23704 20.3945 5.4537 20.3307 5.65152C20.2387 5.93673 20.1152 6.20846 19.9637 6.46227C20.0139 6.44149 20.0639 6.42006 20.1137 6.39797C20.317 6.30765 20.5556 6.3626 20.699 6.53277C20.8424 6.70294 20.856 6.94738 20.7325 7.13247C20.289 7.79703 19.7423 8.3844 19.1145 8.87412C19.1154 8.94106 19.1154 9.00802 19.1154 9.07497C19.1154 13.8217 15.4991 19.3332 8.85719 19.3332C8.83928 19.3332 8.82158 19.3323 8.80415 19.3304"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SocialTwitterIcon;
