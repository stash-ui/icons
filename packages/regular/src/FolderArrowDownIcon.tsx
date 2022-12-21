import * as React from 'react';
import { IconProps } from './types';

export const FolderArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M10.8425 5.27197C10.9642 5.42835 11.0595 5.6189 11.25 5.99999C11.4405 6.38108 11.5358 6.57163 11.6575 6.72802C11.9521 7.10677 12.3731 7.36696 12.8436 7.46111C13.0379 7.49999 13.251 7.49999 13.677 7.49999H17.8C18.9201 7.49999 19.4802 7.49999 19.908 7.71797C20.2843 7.90972 20.5903 8.21568 20.782 8.59201C21 9.01983 21 9.57988 21 10.7V16.3C21 17.4201 21 17.9801 20.782 18.408C20.5903 18.7843 20.2843 19.0903 19.908 19.282C19.4802 19.5 18.9201 19.5 17.8 19.5H6.2C5.0799 19.5 4.51984 19.5 4.09202 19.282C3.71569 19.0903 3.40973 18.7843 3.21799 18.408C3 17.9801 3 17.4201 3 16.3V7.7C3 6.57989 3 6.01984 3.21799 5.59202C3.40973 5.21569 3.71569 4.90973 4.09202 4.71799C4.51984 4.5 5.0799 4.5 6.2 4.5H8.82296C9.24903 4.5 9.46207 4.5 9.65635 4.53888C10.1269 4.63303 10.5479 4.89322 10.8425 5.27197ZM12 9.5C12.4142 9.5 12.75 9.83579 12.75 10.25V14.4393L13.9697 13.2197C14.2626 12.9268 14.7374 12.9268 15.0303 13.2197C15.3232 13.5126 15.3232 13.9874 15.0303 14.2803L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L8.96967 14.2803C8.67678 13.9874 8.67678 13.5126 8.96967 13.2197C9.26256 12.9268 9.73744 12.9268 10.0303 13.2197L11.25 14.4393V10.25C11.25 9.83579 11.5858 9.5 12 9.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.5092 5.27429C9.40516 5.25348 9.28074 5.25 8.82296 5.25H6.2C5.62757 5.25 5.24336 5.25058 4.94748 5.27475C4.66036 5.29821 4.52307 5.34009 4.43251 5.38624C4.19731 5.50608 4.00608 5.6973 3.88624 5.93251C3.8401 6.02307 3.79822 6.16035 3.77476 6.44747C3.75058 6.74335 3.75 7.12757 3.75 7.69999V16.3C3.75 16.8724 3.75058 17.2566 3.77476 17.5525C3.79822 17.8396 3.8401 17.9769 3.88624 18.0675C4.00608 18.3027 4.19731 18.4939 4.43251 18.6137C4.52307 18.6599 4.66036 18.7018 4.94748 18.7252C5.24336 18.7494 5.62757 18.75 6.2 18.75H17.8C18.3724 18.75 18.7566 18.7494 19.0525 18.7252C19.3396 18.7018 19.4769 18.6599 19.5675 18.6137C19.8027 18.4939 19.9939 18.3027 20.1138 18.0675C20.1599 17.9769 20.2018 17.8396 20.2252 17.5525C20.2494 17.2566 20.25 16.8724 20.25 16.3V10.7C20.25 10.1276 20.2494 9.74334 20.2252 9.44746C20.2018 9.16034 20.1599 9.02306 20.1138 8.93249C19.9939 8.69729 19.8027 8.50607 19.5675 8.38622C19.4769 8.34008 19.3396 8.2982 19.0525 8.27474C18.7566 8.25057 18.3724 8.24998 17.8 8.24998H13.677C13.6553 8.24998 13.6338 8.24999 13.6126 8.25C13.2494 8.25018 12.9653 8.25032 12.6965 8.19653C12.0495 8.06707 11.4706 7.70931 11.0655 7.18853C10.8972 6.97213 10.7702 6.71794 10.608 6.39303C10.5985 6.37406 10.5889 6.35486 10.5792 6.3354C10.3745 5.92595 10.3157 5.81622 10.2505 5.73248C10.0664 5.49576 9.80328 5.33314 9.5092 5.27429ZM8.88738 3.74997C9.25055 3.7498 9.53467 3.74966 9.80351 3.80345C10.4505 3.93291 11.0294 4.29067 11.4345 4.81145C11.6028 5.02785 11.7298 5.28203 11.892 5.60694C11.9015 5.62591 11.9111 5.64512 11.9208 5.66458C12.1255 6.07403 12.1843 6.18376 12.2494 6.2675C12.4336 6.50422 12.6967 6.66684 12.9908 6.72568C13.0948 6.7465 13.2193 6.74998 13.677 6.74998L17.8304 6.74998C18.3646 6.74997 18.8104 6.74996 19.1747 6.77972C19.5546 6.81076 19.9112 6.87787 20.2485 7.04971C20.7659 7.31337 21.1866 7.73406 21.4503 8.25151C21.6221 8.58877 21.6892 8.94543 21.7203 9.32531C21.75 9.68954 21.75 10.1354 21.75 10.6695V16.3304C21.75 16.8646 21.75 17.3104 21.7203 17.6747C21.6892 18.0545 21.6221 18.4112 21.4503 18.7485C21.1866 19.2659 20.7659 19.6866 20.2485 19.9503C19.9112 20.1221 19.5546 20.1892 19.1747 20.2202C18.8104 20.25 18.3646 20.25 17.8305 20.25H6.16955C5.6354 20.25 5.18956 20.25 4.82533 20.2202C4.44545 20.1892 4.08879 20.1221 3.75153 19.9503C3.23408 19.6866 2.81338 19.2659 2.54973 18.7485C2.37789 18.4112 2.31078 18.0545 2.27974 17.6747C2.24998 17.3104 2.24999 16.8646 2.25 16.3304V7.66956C2.24999 7.1354 2.24998 6.68956 2.27974 6.32532C2.31078 5.94544 2.37789 5.58878 2.54973 5.25152C2.81338 4.73408 3.23408 4.31338 3.75153 4.04973C4.08879 3.87788 4.44545 3.81077 4.82533 3.77973C5.18956 3.74998 5.63541 3.74998 6.16957 3.75L8.82296 3.75C8.84471 3.75 8.86618 3.74998 8.88738 3.74997Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default FolderArrowDownIcon;
