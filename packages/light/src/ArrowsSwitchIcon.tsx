import * as React from 'react';
import { IconProps } from './types';

export const ArrowsSwitchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.694 5.5H13.7143C13.9904 5.5 14.2143 5.72386 14.2143 6C14.2143 6.27614 13.9904 6.5 13.7143 6.5C12.4266 6.5 11.4323 6.50036 10.6373 6.56381C9.84098 6.62736 9.30127 6.75114 8.90333 6.96404C8.13903 7.37294 7.51316 8.02791 7.11951 8.83913C6.90922 9.27249 6.79221 9.79481 6.73219 10.5662C6.67177 11.3427 6.67142 12.328 6.67142 13.68V14.3929L8.21788 12.8464C8.41314 12.6512 8.72973 12.6512 8.92499 12.8464C9.12025 13.0417 9.12025 13.3583 8.92498 13.5536L6.52497 15.9536C6.42814 16.0504 6.29583 16.1033 6.15893 16.0998C6.02203 16.0964 5.89253 16.037 5.80065 15.9355L3.62923 13.5355C3.44397 13.3307 3.45978 13.0145 3.66455 12.8292C3.86932 12.644 4.18551 12.6598 4.37077 12.8645L5.67142 14.3021V13.6582C5.67142 12.3325 5.67141 11.3084 5.73521 10.4886C5.79975 9.65911 5.93187 8.99598 6.21984 8.40256C6.70274 7.40743 7.47555 6.59378 8.43159 6.0823C9.01154 5.77203 9.71512 5.63422 10.5577 5.56698C11.3971 5.5 12.4307 5.5 13.694 5.5ZM17.8411 7.90016C17.978 7.90358 18.1075 7.963 18.1994 8.06454L20.3708 10.4645C20.556 10.6693 20.5402 10.9855 20.3355 11.1708C20.1307 11.356 19.8145 11.3402 19.6292 11.1355L18.3286 9.69789V10.3418C18.3286 11.6675 18.3286 12.6916 18.2648 13.5114C18.2003 14.3409 18.0681 15.004 17.7802 15.5974C17.2973 16.5926 16.5245 17.4062 15.5684 17.9177C14.9885 18.228 14.2849 18.3658 13.4423 18.433C12.603 18.5 11.5693 18.5 10.306 18.5H10.2857C10.0096 18.5 9.78572 18.2761 9.78572 18C9.78572 17.7239 10.0096 17.5 10.2857 17.5C11.5734 17.5 12.5677 17.4996 13.3627 17.4362C14.159 17.3726 14.6987 17.2489 15.0967 17.036C15.861 16.6271 16.4868 15.9721 16.8805 15.1609C17.0908 14.7275 17.2078 14.2052 17.2678 13.4338C17.3282 12.6573 17.3286 11.672 17.3286 10.32V9.6071L15.7821 11.1536C15.5869 11.3488 15.2703 11.3488 15.075 11.1536C14.8798 10.9583 14.8798 10.6417 15.075 10.4464L17.475 8.04645C17.5719 7.94961 17.7042 7.89674 17.8411 7.90016Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowsSwitchIcon;
