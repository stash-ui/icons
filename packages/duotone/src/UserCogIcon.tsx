import * as React from 'react';
import { IconProps } from './types';

export const UserCogIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99997 3.75C8.69525 3.75 7.67103 4.7756 7.67103 6C7.67103 7.2244 8.69525 8.25 9.99997 8.25C11.3047 8.25 12.3289 7.2244 12.3289 6C12.3289 4.7756 11.3047 3.75 9.99997 3.75ZM6.17103 6C6.17103 3.91069 7.90379 2.25 9.99997 2.25C12.0961 2.25 13.8289 3.91069 13.8289 6C13.8289 8.08931 12.0961 9.75 9.99997 9.75C7.90379 9.75 6.17103 8.08931 6.17103 6ZM7.47057 11.9663C7.28901 11.8489 7.15145 11.8417 7.08748 11.8593C6.94381 11.8989 6.80082 11.9414 6.65858 11.9869L5.67418 12.3021C4.96692 12.5284 4.43044 13.0566 4.206 13.7059C4.18417 13.769 4.16763 13.8527 4.15442 13.9777L3.76338 17.6766L3.76149 17.6898C3.68665 18.2167 3.96754 18.62 4.39454 18.7191C5.47176 18.9691 7.28594 19.25 9.99997 19.25C10.4142 19.25 10.75 19.5858 10.75 20C10.75 20.4142 10.4142 20.75 9.99997 20.75C7.18215 20.75 5.2535 20.4583 4.05546 20.1803C2.76666 19.8812 2.11399 18.6695 2.2744 17.4933L2.66273 13.82C2.68094 13.6478 2.71251 13.4351 2.78832 13.2158C3.17235 12.1048 4.07488 11.239 5.21689 10.8735L6.20129 10.5583C6.36314 10.5065 6.52583 10.4581 6.68927 10.4131C7.30076 10.2448 7.88188 10.446 8.28514 10.7068C8.65516 10.9461 9.25926 11.2356 9.99997 11.2356C10.7407 11.2356 11.3448 10.9461 11.7148 10.7068C12.1181 10.446 12.6992 10.2448 13.3107 10.4131C13.4741 10.4581 13.6368 10.5065 13.7986 10.5583L14.783 10.8735C15.1775 10.9997 15.395 11.4219 15.2687 11.8164C15.1424 12.2109 14.7203 12.4283 14.3258 12.3021L13.3414 11.9869C13.1991 11.9414 13.0561 11.8989 12.9125 11.8593C12.8485 11.8417 12.7109 11.8489 12.5294 11.9663C12.0165 12.298 11.1292 12.7356 9.99997 12.7356C8.87074 12.7356 7.98346 12.298 7.47057 11.9663Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M16.1381 13.2038C16.1483 13.0886 16.2498 13 16.3718 13H17.6282C17.7502 13 17.8517 13.0886 17.8619 13.2038L17.925 13.9216C18.4678 14.0679 18.9549 14.3397 19.3491 14.7018L20.0373 14.3944C20.1476 14.3451 20.2794 14.3842 20.3403 14.4843L20.9686 15.5157C21.0295 15.6158 20.9994 15.7435 20.8992 15.8094L20.2749 16.2202C20.3408 16.4698 20.3758 16.731 20.3758 17C20.3758 17.269 20.3408 17.5302 20.2749 17.7798L20.8992 18.1906C20.9994 18.2565 21.0295 18.3842 20.9686 18.4843L20.3403 19.5157C20.2794 19.6158 20.1476 19.6549 20.0373 19.6056L19.3491 19.2982C18.9549 19.6603 18.4678 19.9321 17.925 20.0784L17.8619 20.7962C17.8517 20.9114 17.7502 21 17.6282 21H16.3718C16.2498 21 16.1483 20.9114 16.1381 20.7962L16.075 20.0784C15.5322 19.9321 15.0451 19.6603 14.6509 19.2982L13.9627 19.6056C13.8524 19.6549 13.7206 19.6158 13.6597 19.5157L13.0314 18.4843C12.9705 18.3842 13.0006 18.2565 13.1008 18.1906L13.7251 17.7798C13.6592 17.5302 13.6242 17.269 13.6242 17C13.6242 16.731 13.6592 16.4698 13.7251 16.2202L13.1008 15.8094C13.0006 15.7435 12.9705 15.6158 13.0314 15.5157L13.6597 14.4843C13.7206 14.3842 13.8524 14.3451 13.9627 14.3944L14.6509 14.7018C15.0451 14.3397 15.5322 14.0679 16.075 13.9216L16.1381 13.2038ZM17 18.25C17.6904 18.25 18.25 17.6904 18.25 17C18.25 16.3096 17.6904 15.75 17 15.75C16.3096 15.75 15.75 16.3096 15.75 17C15.75 17.6904 16.3096 18.25 17 18.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserCogIcon;
