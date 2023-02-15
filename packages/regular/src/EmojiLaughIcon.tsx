import * as React from 'react';
import { IconProps } from './types';

export const EmojiLaughIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5875 9.91431C10.7883 10.1154 11 10.4113 11 10.7719 11 10.9419 10.9137 11.1002 10.7708 11.1922 10.628 11.2843 10.4481 11.2975 10.2934 11.2273 9.75935 10.9849 9.19502 10.7984 8.69855 10.7593 8.20563 10.7205 7.85287 10.8294 7.62043 11.0858 7.466 11.2562 7.21529 11.2993 7.01286 11.1902 6.81042 11.0812 6.70846 10.8481 6.76576 10.6254L6.90226 10.0949C6.9867 9.75842 7.21038 9.22451 7.778 9.06945 8.43649 8.88956 9.21639 9.08379 9.79414 9.36687 10.0923 9.51297 10.3731 9.69982 10.5875 9.91431zM17.0982 10.0967L17.2342 10.6254C17.2915 10.8481 17.1896 11.0812 16.9871 11.1902 16.7847 11.2993 16.534 11.2562 16.3795 11.0858 16.1471 10.8294 15.7943 10.7205 15.3014 10.7593 14.805 10.7984 14.2406 10.9849 13.7066 11.2273 13.5518 11.2975 13.372 11.2843 13.2292 11.1922 13.0863 11.1002 13 10.9419 13 10.7719 13 10.4113 13.2116 10.1154 13.4125 9.91431 13.6268 9.69982 13.9076 9.51297 14.2058 9.36687 14.7836 9.08379 15.5635 8.88956 16.222 9.06945 16.7896 9.22451 17.0133 9.75845 17.0977 10.095L17.0982 10.0967z"
          fill={color}
        />
        <path
          d="M6.3138 13.6973C6.17298 14.0165 6.27088 14.3907 6.55 14.6C6.91359 14.8727 6.96121 15.0658 6.97134 15.1873C6.9875 15.3813 6.92433 15.6053 6.78848 16.0128C6.70466 16.2643 6.75981 16.5414 6.93356 16.7416C7.49033 17.3831 8.30968 17.8793 9.18173 18.2146C10.0613 18.5528 11.0519 18.7498 12 18.7498C12.9481 18.7498 13.9387 18.5528 14.8183 18.2146C15.6903 17.8793 16.5097 17.3831 17.0664 16.7416C17.2402 16.5414 17.2953 16.2643 17.2115 16.0128C17.0757 15.6053 17.0125 15.3813 17.0287 15.1873C17.0388 15.0658 17.0864 14.8727 17.45 14.6C17.7291 14.3907 17.827 14.0165 17.6862 13.6973C17.5454 13.3781 17.2031 13.1981 16.8603 13.2631C16.2887 13.3683 15.7147 13.4611 15.1393 13.5432C14.1447 13.685 12.9381 13.8214 12 13.8214C11.0619 13.8214 9.85532 13.685 8.86067 13.5432C8.29583 13.4626 7.73238 13.3718 7.17116 13.269C6.82243 13.204 6.46076 13.3642 6.3138 13.6973ZM15.5399 15.0008C15.4781 15.0099 15.4151 15.019 15.3511 15.0282C14.3426 15.172 13.0492 15.3214 12 15.3214C10.9508 15.3214 9.65743 15.172 8.64889 15.0282C8.58491 15.019 8.52193 15.0099 8.46008 15.0008C8.50169 15.3688 8.43677 15.7339 8.35272 16.0389C8.69729 16.3313 9.16616 16.6016 9.72006 16.8145C10.4401 17.0914 11.2486 17.2498 12 17.2498C12.7514 17.2498 13.5599 17.0914 14.2799 16.8146C14.8338 16.6016 15.3027 16.3313 15.6473 16.0389C15.5632 15.7339 15.4983 15.3688 15.5399 15.0008Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EmojiLaughIcon;
