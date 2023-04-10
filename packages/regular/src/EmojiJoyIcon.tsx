import * as React from 'react';
import { IconProps } from './types';

export const EmojiJoyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 10.7719C11 10.4113 10.7883 10.1154 10.5875 9.91431 10.3731 9.69982 10.0923 9.51297 9.79414 9.36687 9.21639 9.08379 8.43649 8.88956 7.778 9.06945 7.21038 9.22451 6.9867 9.75842 6.90226 10.0949L6.76576 10.6254C6.70846 10.8481 6.81042 11.0812 7.01286 11.1902 7.21529 11.2993 7.466 11.2562 7.62043 11.0858 7.85287 10.8294 8.20563 10.7205 8.69855 10.7593 9.19502 10.7984 9.75935 10.9849 10.2934 11.2273 10.4481 11.2975 10.628 11.2843 10.7708 11.1922 10.9137 11.1002 11 10.9419 11 10.7719zM17.2342 10.6254L17.0982 10.0967 17.0977 10.095C17.0133 9.75845 16.7896 9.22451 16.222 9.06945 15.5635 8.88956 14.7836 9.08379 14.2058 9.36687 13.9076 9.51297 13.6268 9.69982 13.4125 9.91431 13.2116 10.1154 13 10.4113 13 10.7719 13 10.9419 13.0863 11.1002 13.2292 11.1922 13.372 11.2843 13.5518 11.2975 13.7066 11.2273 14.2406 10.9849 14.805 10.7984 15.3014 10.7593 15.7943 10.7205 16.1471 10.8294 16.3795 11.0858 16.534 11.2562 16.7847 11.2993 16.9871 11.1902 17.1896 11.0812 17.2915 10.8481 17.2342 10.6254z"
          fill={color}
        />
        <path
          d="M17.4394 13.9545C18.0221 15.3142 17.1796 16.5874 16.1553 17.3755C15.0891 18.1959 13.553 18.7498 12 18.7498C10.447 18.7498 8.91096 18.1959 7.84474 17.3755C6.82046 16.5874 5.97793 15.3142 6.56065 13.9546C6.75544 13.5001 7.21352 13.2983 7.68517 13.3042C7.98388 13.3079 8.3549 13.3808 8.70918 13.4503L8.77443 13.4631C9.54698 13.6147 10.6 13.8214 12 13.8214C13.1127 13.8214 14.2019 13.664 15.2908 13.4503C15.6451 13.3807 16.0161 13.3079 16.3148 13.3042C16.7865 13.2983 17.2446 13.5001 17.4394 13.9545ZM15.5033 14.9372C14.7166 15.0917 13.5466 15.3214 12 15.3214C10.4535 15.3214 9.28344 15.0917 8.49678 14.9372L8.44938 14.9279C8.1966 14.8783 8.01397 14.8441 7.87847 14.8244C7.86598 15.1962 8.09678 15.6768 8.75947 16.1867C9.56131 16.8037 10.7752 17.2498 12 17.2498C13.2248 17.2498 14.4387 16.8037 15.2406 16.1867C15.9032 15.6768 16.134 15.1962 16.1215 14.8244C15.9777 14.8453 15.7771 14.8834 15.5033 14.9372Z"
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

export default EmojiJoyIcon;