import * as React from 'react';
import { IconProps } from './types';

export const UserEnvelopeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.824 14H18.176C18.6565 14 19.0463 14 19.3625 14.0249C19.6884 14.0506 19.9791 14.1051 20.2498 14.2381C20.6768 14.4479 21.0274 14.7844 21.2483 15.2024C21.3895 15.4696 21.447 15.7564 21.474 16.0747C21.5 16.3818 21.5 16.7596 21.5 17.2212V17.7788C21.5 18.2404 21.5 18.6182 21.474 18.9253C21.447 19.2436 21.3895 19.5304 21.2483 19.7976C21.0274 20.2156 20.6768 20.5521 20.2498 20.7619C19.9791 20.8949 19.6884 20.9494 19.3625 20.9751C19.0463 21 18.6565 21 18.176 21H15.824C15.3435 21 14.9537 21 14.6375 20.9751C14.3116 20.9494 14.0209 20.8949 13.7502 20.7619C13.3232 20.5521 12.9726 20.2156 12.7517 19.7976C12.6105 19.5304 12.553 19.2436 12.526 18.9253C12.5 18.6182 12.5 18.2405 12.5 17.7788V17.2212C12.5 16.7595 12.5 16.3818 12.526 16.0747C12.553 15.7564 12.6105 15.4696 12.7517 15.2024C12.9726 14.7844 13.3232 14.4479 13.7502 14.2381C14.0209 14.1051 14.3116 14.0506 14.6375 14.0249C14.9537 14 15.3435 14 15.824 14ZM14.5079 15.0452L16.7185 17.1768C16.872 17.3248 17.128 17.3248 17.2815 17.1768L19.4921 15.0452C19.4317 15.0359 19.363 15.028 19.2839 15.0218C19.0117 15.0004 18.6613 15 18.1556 15H15.8444C15.3387 15 14.9883 15.0004 14.7161 15.0218C14.637 15.028 14.5683 15.0359 14.5079 15.0452ZM20.3365 15.6201L17.9756 17.8967C17.4348 18.4182 16.5652 18.4182 16.0244 17.8967L13.6635 15.6201C13.6539 15.6364 13.6447 15.6529 13.6358 15.6696C13.5832 15.7692 13.5439 15.9057 13.5224 16.1591C13.5004 16.419 13.5 16.7543 13.5 17.2429V17.7571C13.5 18.2457 13.5004 18.581 13.5224 18.8409C13.5377 19.0211 13.562 19.1422 13.5937 19.2329L14.8752 17.9972C15.0739 17.8055 15.3905 17.8113 15.5821 18.0101C15.7738 18.2089 15.7681 18.5254 15.5693 18.7171L14.326 19.9159C14.421 19.9436 14.5439 19.9646 14.7161 19.9782C14.9883 19.9996 15.3387 20 15.8444 20H18.1556C18.6613 20 19.0117 19.9996 19.2839 19.9782C19.4561 19.9646 19.579 19.9436 19.674 19.9159L18.4307 18.7171C18.2319 18.5254 18.2262 18.2089 18.4179 18.0101C18.6095 17.8113 18.9261 17.8055 19.1248 17.9972L20.4063 19.2329C20.438 19.1422 20.4623 19.0211 20.4776 18.8409C20.4996 18.581 20.5 18.2457 20.5 17.7571V17.2429C20.5 16.7543 20.4996 16.419 20.4776 16.1591C20.4561 15.9057 20.4168 15.7692 20.3642 15.6696C20.3553 15.6529 20.3461 15.6364 20.3365 15.6201Z"
          fill={color}
          opacity=".5"
        />
        <path
          d="M9.99997 3.75C8.69525 3.75 7.67103 4.7756 7.67103 6C7.67103 7.2244 8.69525 8.25 9.99997 8.25C11.3047 8.25 12.3289 7.2244 12.3289 6C12.3289 4.7756 11.3047 3.75 9.99997 3.75ZM6.17103 6C6.17103 3.91069 7.90379 2.25 9.99997 2.25C12.0961 2.25 13.8289 3.91069 13.8289 6C13.8289 8.08931 12.0961 9.75 9.99997 9.75C7.90379 9.75 6.17103 8.08931 6.17103 6ZM7.47057 11.9663C7.28901 11.8489 7.15145 11.8417 7.08748 11.8593C6.94381 11.8989 6.80082 11.9414 6.65858 11.9869L5.67418 12.3021C4.96692 12.5284 4.43044 13.0566 4.206 13.7059C4.18417 13.769 4.16763 13.8527 4.15442 13.9777L3.76338 17.6766L3.76149 17.6898C3.68665 18.2167 3.96754 18.62 4.39454 18.7191C5.47176 18.9691 7.28594 19.25 9.99997 19.25C10.4142 19.25 10.75 19.5858 10.75 20C10.75 20.4142 10.4142 20.75 9.99997 20.75C7.18215 20.75 5.2535 20.4583 4.05546 20.1803C2.76666 19.8812 2.11399 18.6695 2.2744 17.4933L2.66273 13.82C2.68094 13.6478 2.71251 13.4351 2.78832 13.2158C3.17235 12.1048 4.07488 11.239 5.21689 10.8735L6.20129 10.5583C6.36314 10.5065 6.52583 10.4581 6.68927 10.4131C7.30076 10.2448 7.88188 10.446 8.28514 10.7068C8.65516 10.9461 9.25926 11.2356 9.99997 11.2356C10.7407 11.2356 11.3448 10.9461 11.7148 10.7068C12.1181 10.446 12.6992 10.2448 13.3107 10.4131C13.4741 10.4581 13.6368 10.5065 13.7986 10.5583L14.783 10.8735C15.1775 10.9997 15.395 11.4219 15.2687 11.8164C15.1424 12.2109 14.7203 12.4283 14.3258 12.3021L13.3414 11.9869C13.1991 11.9414 13.0561 11.8989 12.9125 11.8593C12.8485 11.8417 12.7109 11.8489 12.5294 11.9663C12.0165 12.298 11.1292 12.7356 9.99997 12.7356C8.87074 12.7356 7.98346 12.298 7.47057 11.9663Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserEnvelopeIcon;
