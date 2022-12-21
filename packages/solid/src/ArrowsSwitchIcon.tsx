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
          d="M13.6846 5.25L13.7143 5.25C14.1285 5.25 14.4643 5.58579 14.4643 6C14.4643 6.41421 14.1285 6.75 13.7143 6.75C12.4228 6.75 11.44 6.75054 10.6572 6.81302C9.87245 6.87564 9.3737 6.99592 9.02126 7.18448C8.3049 7.56773 7.71577 8.18303 7.34443 8.94828C7.15356 9.34161 7.04033 9.82873 6.98144 10.5856C6.92195 11.3501 6.92142 12.3241 6.92142 13.68V13.7893L8.04111 12.6697C8.334 12.3768 8.80887 12.3768 9.10177 12.6697C9.39466 12.9626 9.39466 13.4374 9.10176 13.7303L6.70175 16.1303C6.5565 16.2756 6.35803 16.3549 6.15269 16.3498C5.94734 16.3446 5.75308 16.2555 5.61527 16.1032L3.44385 13.7032C3.16595 13.396 3.18967 12.9217 3.49682 12.6438C3.80398 12.3659 4.27826 12.3897 4.55616 12.6968L5.42142 13.6532V13.648C5.42142 12.331 5.42141 11.2987 5.48596 10.4692C5.55164 9.62519 5.68754 8.92685 5.99493 8.29341C6.50014 7.25231 7.30969 6.39899 8.31366 5.86186C8.93911 5.52725 9.68366 5.38594 10.5378 5.31777C11.3872 5.24999 12.4291 5.25 13.6846 5.25Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M17.8477 7.65026C18.0531 7.65539 18.2473 7.74452 18.3852 7.89684L20.5566 10.2968C20.8345 10.604 20.8108 11.0783 20.5036 11.3562C20.1964 11.6341 19.7222 11.6104 19.4443 11.3032L18.579 10.3469V10.352C18.579 11.669 18.579 12.7013 18.5145 13.5308C18.4488 14.3748 18.3129 15.0732 18.0055 15.7066C17.5003 16.7477 16.6907 17.601 15.6868 18.1382C15.0613 18.4728 14.3168 18.6141 13.4626 18.6823C12.6133 18.75 11.5714 18.75 10.3159 18.75H10.2861C9.87192 18.75 9.53613 18.4142 9.53613 18C9.53613 17.5858 9.87192 17.25 10.2861 17.25C11.5776 17.25 12.5604 17.2495 13.3433 17.187C14.128 17.1244 14.6267 17.0041 14.9792 16.8155C15.6955 16.4323 16.2847 15.817 16.656 15.0517C16.8469 14.6584 16.9601 14.1713 17.019 13.4145C17.0785 12.6499 17.079 11.6759 17.079 10.32V10.2107L15.9593 11.3304C15.6664 11.6232 15.1916 11.6232 14.8987 11.3304C14.6058 11.0375 14.6058 10.5626 14.8987 10.2697L17.2987 7.86969C17.4439 7.72445 17.6424 7.64513 17.8477 7.65026Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowsSwitchIcon;
