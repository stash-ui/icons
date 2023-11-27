import * as React from 'react';
import { IconProps } from './types';

export const EmojiWinkPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5 1.75C18.9142 1.75 19.25 2.08579 19.25 2.5V4.25L21 4.25C21.4142 4.25 21.75 4.58579 21.75 5C21.75 5.41421 21.4142 5.75 21 5.75H19.25V7.5C19.25 7.91421 18.9142 8.25 18.5 8.25C18.0858 8.25 17.75 7.91421 17.75 7.5V5.75H16C15.5858 5.75 15.25 5.41421 15.25 5C15.25 4.58579 15.5858 4.25 16 4.25H17.75V2.5C17.75 2.08579 18.0858 1.75 18.5 1.75Z"
          fill={color}
        />
        <path
          d="M11.5 3.75C6.94365 3.75 3.25 7.44365 3.25 12C3.25 16.5563 6.94365 20.25 11.5 20.25C16.0563 20.25 19.75 16.5563 19.75 12C19.75 11.3688 19.6793 10.7551 19.5456 10.166C19.4539 9.76202 19.7071 9.36025 20.111 9.26859C20.515 9.17693 20.9167 9.43009 21.0084 9.83403C21.1666 10.5313 21.25 11.2564 21.25 12C21.25 17.3848 16.8848 21.75 11.5 21.75C6.11522 21.75 1.75 17.3848 1.75 12C1.75 6.61522 6.11522 2.25 11.5 2.25C12.4385 2.25 13.3473 2.38282 14.2079 2.63117C14.6059 2.74601 14.8354 3.16173 14.7206 3.5597C14.6058 3.95768 14.19 4.18721 13.7921 4.07237C13.0652 3.86263 12.2964 3.75 11.5 3.75Z"
          fill={color}
        />
        <path
          d="M16.8487 9.59502L16.9852 10.1255C17.0425 10.3482 16.9405 10.5812 16.7381 10.6903 16.5357 10.7993 16.285 10.7563 16.1305 10.5859 15.8981 10.3295 15.5453 10.2206 15.0524 10.2594 14.5559 10.2984 13.9916 10.485 13.4576 10.7273 13.3028 10.7975 13.123 10.7844 12.9802 10.6923 12.8373 10.6003 12.751 10.4419 12.751 10.272 12.751 9.91135 12.9626 9.61544 13.1635 9.41437 13.3778 9.19988 13.6586 9.01303 13.9568 8.86693 14.5346 8.58385 15.3145 8.38962 15.973 8.56951 16.5406 8.72458 16.7643 9.25851 16.8487 9.59502zM8.75098 11.5001C9.5794 11.5001 10.251 10.8285 10.251 10.0001 10.251 9.17163 9.5794 8.50006 8.75098 8.50006 7.92255 8.50006 7.25098 9.17163 7.25098 10.0001 7.25098 10.8285 7.92255 11.5001 8.75098 11.5001z"
          fill={color}
        />
        <path
          d="M17.0017 14.2216C17.1561 13.7509 16.9875 13.2996 16.6708 13.0266C16.3738 12.7707 15.9624 12.6762 15.5726 12.7716C15.3384 12.8289 15.0936 12.899 14.8358 12.9727C12.8448 13.5421 10.9469 13.5193 8.89746 13.4036C8.38378 13.3746 7.87031 13.3417 7.35719 13.3042C7.07354 13.2828 6.8022 13.4237 6.65655 13.668C6.5109 13.9124 6.51602 14.2181 6.66977 14.4574C6.92772 14.8589 7.31768 15.2033 7.58707 15.4412C7.80615 15.6346 7.93175 15.7535 7.99907 15.8395C7.99237 15.9882 7.96347 16.1344 7.93458 16.2805C7.8985 16.463 7.86246 16.6454 7.86975 16.8323C7.87741 17.0288 7.9353 17.2752 8.12755 17.4918C8.30311 17.6897 8.52487 17.7867 8.7036 17.8411C8.88544 17.8964 9.09258 17.9281 9.31205 17.9492C9.75159 17.9914 10.3801 18.0028 11.251 18.0028C13.1255 18.0028 14.4408 17.543 15.3666 16.7839C16.2842 16.0316 16.727 15.059 17.0017 14.2216ZM11.751 15.0028C13.2054 15.0028 14.4689 14.6425 15.3292 14.3945C15.1153 14.8612 14.8311 15.2833 14.4155 15.624C13.8249 16.1083 12.8765 16.5028 11.251 16.5028C10.3514 16.5028 9.78074 16.4893 9.43115 16.4537C9.46505 16.2714 9.50101 16.0285 9.501 15.7528C9.50098 15.3853 9.32378 15.0997 9.1854 14.9215C10.0057 14.9645 10.9583 15.0028 11.751 15.0028Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EmojiWinkPlusIcon;