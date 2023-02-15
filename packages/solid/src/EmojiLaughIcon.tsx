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
          d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11 10.7719C11 10.4113 10.7883 10.1154 10.5875 9.91431C10.3731 9.69982 10.0923 9.51297 9.79414 9.36687C9.21639 9.08379 8.43649 8.88956 7.778 9.06945C7.11169 9.25147 6.94609 9.90966 6.79799 10.4983C6.78722 10.5411 6.77654 10.5836 6.76576 10.6254C6.70846 10.8481 6.81042 11.0812 7.01286 11.1902C7.21529 11.2993 7.466 11.2562 7.62043 11.0858C7.85287 10.8294 8.20563 10.7205 8.69855 10.7593C9.19502 10.7984 9.75935 10.9849 10.2934 11.2273C10.4481 11.2975 10.628 11.2843 10.7708 11.1922C10.9137 11.1002 11 10.9419 11 10.7719ZM16.9871 11.1902C17.1896 11.0812 17.2915 10.8481 17.2342 10.6254C17.2235 10.5836 17.2128 10.5412 17.202 10.4984C17.0539 9.9098 16.8882 9.25146 16.222 9.06945C15.5635 8.88956 14.7836 9.08379 14.2058 9.36687C13.9076 9.51297 13.6268 9.69982 13.4125 9.91431C13.2116 10.1154 13 10.4113 13 10.7719C13 10.9419 13.0863 11.1002 13.2292 11.1922C13.372 11.2843 13.5518 11.2975 13.7066 11.2273C14.2406 10.9849 14.805 10.7984 15.3014 10.7593C15.7943 10.7205 16.1471 10.8294 16.3795 11.0858C16.534 11.2562 16.7847 11.2993 16.9871 11.1902ZM7.13969 13.2631C6.79692 13.1981 6.45461 13.3781 6.3138 13.6973C6.17298 14.0165 6.27088 14.3907 6.55 14.6C6.91359 14.8727 6.96121 15.0658 6.97134 15.1873C6.9875 15.3813 6.92433 15.6053 6.78848 16.0128C6.70466 16.2643 6.75981 16.5414 6.93356 16.7416C7.49033 17.3831 8.30968 17.8793 9.18173 18.2146C10.0613 18.5528 11.0519 18.7498 12 18.7498C12.9481 18.7498 13.9387 18.5528 14.8183 18.2146C15.6903 17.8793 16.5097 17.3831 17.0664 16.7416C17.2402 16.5414 17.2953 16.2643 17.2115 16.0128C17.0757 15.6053 17.0125 15.3813 17.0287 15.1873C17.0388 15.0658 17.0864 14.8727 17.45 14.6C17.7291 14.3907 17.827 14.0165 17.6862 13.6973C17.5454 13.3781 17.2031 13.1981 16.8603 13.2631L16.853 13.2645L16.8288 13.269L16.733 13.2866C16.6489 13.3018 16.526 13.3237 16.3719 13.35C16.0636 13.4027 15.6318 13.473 15.1393 13.5432C14.1447 13.685 12.9381 13.8214 12 13.8214C11.0619 13.8214 9.85532 13.685 8.86067 13.5432C8.36816 13.473 7.93645 13.4027 7.62811 13.35C7.47404 13.3237 7.35105 13.3018 7.26699 13.2866L7.17116 13.269L7.14702 13.2645L7.13969 13.2631Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EmojiLaughIcon;
