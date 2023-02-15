import * as React from 'react';
import { IconProps } from './types';

export const FolderSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.2206 9.25C9.44191 9.25 8 10.6919 8 12.4706C8 14.2493 9.44191 15.6912 11.2206 15.6912C11.8382 15.6912 12.4152 15.5173 12.9053 15.2159L14.2197 16.5303C14.5126 16.8232 14.9874 16.8232 15.2803 16.5303C15.5732 16.2374 15.5732 15.7626 15.2803 15.4697L13.9659 14.1553C14.2673 13.6652 14.4412 13.0882 14.4412 12.4706C14.4412 10.6919 12.9993 9.25 11.2206 9.25ZM9.5 12.4706C9.5 11.5203 10.2703 10.75 11.2206 10.75C12.1708 10.75 12.9412 11.5203 12.9412 12.4706C12.9412 13.4208 12.1708 14.1912 11.2206 14.1912C10.2703 14.1912 9.5 13.4208 9.5 12.4706Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.80351 3.80344C9.53467 3.74964 9.25055 3.74978 8.88738 3.74996L6.16957 3.74998C5.63541 3.74997 5.18956 3.74996 4.82533 3.77972C4.44545 3.81076 4.08879 3.87787 3.75153 4.04971C3.23408 4.31336 2.81338 4.73406 2.54973 5.25151C2.37789 5.58877 2.31078 5.94542 2.27974 6.32531C2.24998 6.68954 2.24999 7.13538 2.25 7.66953V16.3304C2.24999 16.8645 2.24998 17.3104 2.27974 17.6746C2.31078 18.0545 2.37789 18.4112 2.54973 18.7484C2.81338 19.2659 3.23408 19.6866 3.75153 19.9502C4.08879 20.1221 4.44545 20.1892 4.82533 20.2202C5.18954 20.25 5.63536 20.25 6.16946 20.25H17.8305C18.3646 20.25 18.8105 20.25 19.1747 20.2202C19.5546 20.1892 19.9112 20.1221 20.2485 19.9502C20.7659 19.6866 21.1866 19.2659 21.4503 18.7484C21.6221 18.4112 21.6892 18.0545 21.7203 17.6746C21.75 17.3104 21.75 16.8646 21.75 16.3304V10.6695C21.75 10.1354 21.75 9.68953 21.7203 9.3253C21.6892 8.94541 21.6221 8.58876 21.4503 8.25149C21.1866 7.73405 20.7659 7.31335 20.2485 7.0497C19.9112 6.87786 19.5546 6.81074 19.1747 6.77971C18.8104 6.74995 18.3646 6.74996 17.8304 6.74997L13.677 6.74997C13.2193 6.74997 13.0948 6.74649 12.9908 6.72567C12.6967 6.66682 12.4336 6.50421 12.2494 6.26749C12.1843 6.18375 12.1255 6.07402 11.9208 5.66456L11.892 5.60692C11.7298 5.28202 11.6028 5.02783 11.4345 4.81144C11.0294 4.29066 10.4505 3.9329 9.80351 3.80344ZM8.82296 5.24998C9.28074 5.24998 9.40516 5.25346 9.5092 5.27428C9.80328 5.33312 10.0664 5.49574 10.2505 5.73246C10.3157 5.8162 10.3745 5.92593 10.5792 6.33538L10.608 6.39302C10.7702 6.71792 10.8972 6.97211 11.0655 7.18851C11.4706 7.70929 12.0495 8.06705 12.6965 8.19651C12.9653 8.25031 13.2494 8.25017 13.6126 8.24999L17.8 8.24997C18.3724 8.24997 18.7566 8.25055 19.0525 8.27472C19.3396 8.29818 19.4769 8.34007 19.5675 8.38621C19.8027 8.50605 19.9939 8.69728 20.1138 8.93248C20.1599 9.02304 20.2018 9.16032 20.2252 9.44745C20.2494 9.74332 20.25 10.1275 20.25 10.7V16.3C20.25 16.8724 20.2494 17.2566 20.2252 17.5525C20.2018 17.8396 20.1599 17.9769 20.1138 18.0675C19.9939 18.3027 19.8027 18.4939 19.5675 18.6137C19.4769 18.6599 19.3396 18.7017 19.0525 18.7252C18.7566 18.7494 18.3724 18.75 17.8 18.75H6.2C5.62757 18.75 5.24336 18.7494 4.94748 18.7252C4.66036 18.7017 4.52307 18.6599 4.43251 18.6137C4.19731 18.4939 4.00608 18.3027 3.88624 18.0675C3.8401 17.9769 3.79822 17.8396 3.77476 17.5525C3.75058 17.2566 3.75 16.8724 3.75 16.3V7.69998C3.75 7.12755 3.75058 6.74334 3.77476 6.44746C3.79822 6.16033 3.8401 6.02305 3.88624 5.93249C4.00608 5.69729 4.19731 5.50606 4.43251 5.38622C4.52307 5.34008 4.66036 5.2982 4.94748 5.27474C5.24336 5.25056 5.62757 5.24998 6.2 5.24998H8.82296Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default FolderSearchIcon;
