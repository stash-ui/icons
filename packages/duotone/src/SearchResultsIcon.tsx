import * as React from 'react';
import { IconProps } from './types';

export const SearchResultsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.4999 7.5H3.5C3.50077 6.51165 3.51333 5.99359 3.71794 5.59202C3.90968 5.21569 4.21564 4.90973 4.59197 4.71799C5.01979 4.5 5.57984 4.5 6.69995 4.5H16.2999C17.4201 4.5 17.9801 4.5 18.4079 4.71799C18.7843 4.90973 19.0902 5.21569 19.282 5.59202C19.4866 5.99359 19.4991 6.51165 19.4999 7.5Z"
          fill={color}
        />
        <path
          d="M16.3304 3.75H6.66957C6.13542 3.74999 5.68956 3.74998 5.32533 3.77974C3.91393 3.89506 2.8926 4.94401 2.77974 6.32533C2.74997 6.68967 2.74999 7.1368 2.75 7.66955V16.3304C2.74999 16.8646 2.74998 17.3104 2.77974 17.6747C2.81078 18.0546 2.87789 18.4112 3.04973 18.7485C3.31338 19.2659 3.73408 19.6866 4.25153 19.9503C4.58879 20.1221 4.94545 20.1892 5.32533 20.2203C5.68954 20.25 6.13536 20.25 6.66946 20.25H16.3305C16.8646 20.25 17.3105 20.25 17.6747 20.2203C18.0546 20.1892 18.4112 20.1221 18.7485 19.9503C19.1175 19.7622 19.2643 19.3106 19.0762 18.9415C18.8882 18.5725 18.4366 18.4257 18.0675 18.6138C17.9769 18.6599 17.8396 18.7018 17.5525 18.7252C17.2566 18.7494 16.8724 18.75 16.3 18.75H6.7C6.12757 18.75 5.74336 18.7494 5.44748 18.7252C5.16036 18.7018 5.02307 18.6599 4.93251 18.6138C4.69731 18.4939 4.50608 18.3027 4.38624 18.0675C4.3401 17.9769 4.29822 17.8396 4.27476 17.5525C4.25058 17.2566 4.25 16.8724 4.25 16.3V8.25H18.7359C18.7444 8.66662 18.7488 9.08331 18.75 9.50001C18.75 9.91422 19.0858 10.25 19.5 10.25C19.9142 10.25 20.25 9.9134 20.25 9.49918C20.2497 9.31341 20.2485 9.12763 20.2466 8.94187C20.2397 8.27157 20.2201 7.13518 20.1557 6.32382C20.0427 4.89963 19.0837 3.89486 17.6747 3.77974C17.3104 3.74998 16.8646 3.74999 16.3304 3.75ZM18.6815 6.75C18.6338 5.95282 18.4042 5.34434 17.5525 5.27476C17.2566 5.25058 16.8724 5.25 16.3 5.25H6.7C6.12757 5.25 5.74336 5.25058 5.44748 5.27476C4.62853 5.34167 4.28445 5.95543 4.25843 6.75H18.6815Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.5 9.25C6.08579 9.25 5.75 9.58579 5.75 10C5.75 10.4142 6.08579 10.75 6.5 10.75H12.5C12.9142 10.75 13.25 10.4142 13.25 10C13.25 9.58579 12.9142 9.25 12.5 9.25H6.5Z"
          fill={color}
        />
        <path
          d="M17 10.25C15.2051 10.25 13.75 11.7051 13.75 13.5C13.75 15.2949 15.2051 16.75 17 16.75C17.6257 16.75 18.2102 16.5732 18.7061 16.2667L19.9697 17.5303C20.2626 17.8232 20.7374 17.8232 21.0303 17.5303C21.3232 17.2374 21.3232 16.7626 21.0303 16.4697L19.7667 15.2061C20.0732 14.7102 20.25 14.1257 20.25 13.5C20.25 11.7051 18.7949 10.25 17 10.25ZM15.25 13.5C15.25 12.5335 16.0335 11.75 17 11.75C17.9665 11.75 18.75 12.5335 18.75 13.5C18.75 14.4665 17.9665 15.25 17 15.25C16.0335 15.25 15.25 14.4665 15.25 13.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.5 11.25C6.08579 11.25 5.75 11.5858 5.75 12 5.75 12.4142 6.08579 12.75 6.5 12.75H9.5C9.91422 12.75 10.25 12.4142 10.25 12 10.25 11.5858 9.91422 11.25 9.5 11.25H6.5zM6.5 14.25C6.08579 14.25 5.75 14.5858 5.75 15 5.75 15.4142 6.08579 15.75 6.5 15.75H11.5C11.9142 15.75 12.25 15.4142 12.25 15 12.25 14.5858 11.9142 14.25 11.5 14.25H6.5zM6.5 16.25C6.08579 16.25 5.75 16.5858 5.75 17 5.75 17.4142 6.08579 17.75 6.5 17.75H9.5C9.91422 17.75 10.25 17.4142 10.25 17 10.25 16.5858 9.91422 16.25 9.5 16.25H6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SearchResultsIcon;
