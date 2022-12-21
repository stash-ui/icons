import * as React from 'react';
import { IconProps } from './types';

export const CogIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.41446 3.39619C9.46845 2.74833 10.01 2.25 10.6601 2.25H13.34C13.9901 2.25 14.5317 2.74833 14.5857 3.39619L14.6787 4.51278C15.5887 4.83837 16.4215 5.32484 17.1431 5.93745L18.1584 5.45889C18.7465 5.18171 19.4488 5.40157 19.7739 5.96458L21.1138 8.28541C21.4389 8.84842 21.2781 9.56661 20.744 9.9373L19.8229 10.5766C19.9065 11.0389 19.9501 11.5146 19.9501 12C19.9501 12.4854 19.9065 12.9611 19.8229 13.4234L20.744 14.0627C21.2781 14.4334 21.4388 15.1516 21.1138 15.7146L19.7739 18.0354C19.4488 18.5984 18.7464 18.8183 18.1584 18.5411L17.1431 18.0626C16.4215 18.6752 15.5887 19.1616 14.6787 19.4872L14.5857 20.6038C14.5317 21.2517 13.9901 21.75 13.34 21.75H10.6601C10.01 21.75 9.46845 21.2517 9.41446 20.6038L9.32141 19.4872C8.41141 19.1616 7.5786 18.6752 6.85709 18.0626L5.84176 18.5411C5.2537 18.8183 4.55134 18.5984 4.22629 18.0354L2.88636 15.7146C2.5613 15.1516 2.72207 14.4334 3.25615 14.0627L4.17727 13.4234C4.09366 12.9611 4.05007 12.4854 4.05007 12C4.05007 11.5146 4.09366 11.0389 4.17726 10.5766L3.25613 9.9373C2.72206 9.56661 2.56129 8.84842 2.88634 8.28541L4.22628 5.96458C4.55133 5.40156 5.25369 5.1817 5.84175 5.45888L6.85709 5.93745C7.5786 5.32483 8.41141 4.83837 9.32141 4.51278L9.41446 3.39619ZM10.8902 3.75L10.7316 5.65312L10.2324 5.79504C9.1964 6.08954 8.26571 6.63709 7.51179 7.36773L7.13929 7.72873L5.4103 6.91379L4.3004 8.83619L5.86882 9.9248L5.74292 10.4276C5.61708 10.9301 5.55007 11.4567 5.55007 12C5.55007 12.5433 5.61708 13.0699 5.74292 13.5724L5.86882 14.0752L4.30041 15.1638L5.41031 17.0862L7.13929 16.2713L7.51179 16.6323C8.26571 17.3629 9.1964 17.9105 10.2324 18.205L10.7316 18.3469L10.8902 20.25H13.11L13.2686 18.3469L13.7678 18.205C14.8037 17.9105 15.7344 17.3629 16.4884 16.6323L16.8609 16.2713L18.5898 17.0862L19.6997 15.1638L18.1313 14.0752L18.2572 13.5724C18.3831 13.0699 18.4501 12.5433 18.4501 12C18.4501 11.4567 18.3831 10.9301 18.2572 10.4276L18.1313 9.9248L19.6997 8.8362L18.5898 6.9138L16.8609 7.72874L16.4884 7.36774C15.7344 6.63709 14.8037 6.08954 13.7678 5.79504L13.2686 5.65312L13.11 3.75H10.8902Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M10.8751 10.0514C9.79898 10.6727 9.43026 12.0488 10.0516 13.125C10.6729 14.2011 12.049 14.5699 13.1251 13.9485C14.2013 13.3272 14.57 11.9511 13.9487 10.875C13.3274 9.79883 11.9513 9.43011 10.8751 10.0514ZM8.75254 13.875C7.71701 12.0814 8.33154 9.78792 10.1251 8.75239C11.9187 7.71686 14.2122 8.33139 15.2477 10.125C16.2833 11.9186 15.6687 14.212 13.8751 15.2476C12.0815 16.2831 9.78808 15.6686 8.75254 13.875Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CogIcon;
