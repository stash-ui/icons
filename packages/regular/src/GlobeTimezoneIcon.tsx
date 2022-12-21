import * as React from 'react';
import { IconProps } from './types';

export const GlobeTimezoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.5 14C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14ZM13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5ZM17.5 15C17.7761 15 18 15.2239 18 15.5V17.2929L18.8536 18.1464C19.0488 18.3417 19.0488 18.6583 18.8536 18.8536C18.6583 19.0488 18.3417 19.0488 18.1464 18.8536L17.1464 17.8536C17.0527 17.7598 17 17.6326 17 17.5V15.5C17 15.2239 17.2239 15 17.5 15Z"
          fill={color}
        />
        <path
          d="M5.22793 9.15434C5.63831 9.01754 6.08479 8.89391 6.56173 8.7851C6.82324 7.53781 7.23952 6.35936 7.77322 5.35798C8.08893 4.76561 8.45678 4.21668 8.87045 3.75015C6.13209 4.73598 4.04582 7.08784 3.43379 9.9836C3.91781 9.66376 4.53016 9.38693 5.22793 9.15434ZM2.25 11.75C2.25 6.50329 6.50329 2.25 11.75 2.25C16.9967 2.25 21.25 6.50329 21.25 11.75C21.25 11.8952 21.2467 12.0397 21.2403 12.1833C20.9225 11.9593 20.5837 11.7631 20.2275 11.5982C20.1775 11.4249 20.0365 11.2139 19.7332 10.975C19.3404 10.6654 18.7411 10.3648 17.9558 10.103C17.6949 10.016 17.4165 9.93435 17.1223 9.85861C17.1731 10.2385 17.2093 10.6217 17.2299 11.0055C16.8908 11.0194 16.5584 11.0592 16.2346 11.1231C16.2101 10.6208 16.1568 10.1197 16.0776 9.62749C14.9431 9.41388 13.643 9.28053 12.25 9.25464V13.6668C11.8047 14.2756 11.4628 14.9648 11.25 15.7086V15.2455C9.96133 15.2224 8.73796 15.1105 7.63451 14.9258C7.87777 15.9286 8.22717 16.8676 8.65571 17.6717C9.40284 19.0735 10.3222 19.9514 11.25 20.1863V19.2914C11.452 19.9976 11.7705 20.6546 12.1833 21.2403C12.0397 21.2467 11.8952 21.25 11.75 21.25C6.50329 21.25 2.25 16.9967 2.25 11.75ZM8.65571 5.82831C8.22717 6.63238 7.87777 7.57144 7.63451 8.57419C8.73796 8.38951 9.96133 8.27757 11.25 8.25447V3.31366C10.3222 3.54856 9.40284 4.42648 8.65571 5.82831ZM7.42243 9.62748C7.3102 10.3245 7.25 11.0392 7.25 11.75C7.25 12.4608 7.3102 13.1755 7.42243 13.8725C8.55687 14.0861 9.85696 14.2195 11.25 14.2454V9.25464C9.85696 9.28053 8.55687 9.41388 7.42243 9.62748ZM3.43379 13.5164C4.04582 16.4122 6.13209 18.764 8.87046 19.7498C8.45678 19.2833 8.08893 18.7344 7.77322 18.142C7.23952 17.1406 6.82324 15.9622 6.56174 14.7149C6.0848 14.6061 5.63831 14.4825 5.22793 14.3457C4.53016 14.1131 3.91781 13.8362 3.43379 13.5164ZM5.54415 13.397C5.8051 13.484 6.08353 13.5656 6.37769 13.6414C6.29403 13.0159 6.25 12.3812 6.25 11.75C6.25 11.1188 6.29402 10.4841 6.37769 9.85861C6.08352 9.93435 5.8051 10.016 5.54415 10.103C4.75893 10.3648 4.15955 10.6654 3.76675 10.975C3.36831 11.289 3.25 11.5547 3.25 11.75C3.25 11.9453 3.36831 12.211 3.76675 12.525C4.15955 12.8346 4.75893 13.1352 5.54415 13.397ZM15.7268 5.35798C16.2605 6.35936 16.6768 7.53781 16.9383 8.7851C17.4152 8.89391 17.8617 9.01754 18.2721 9.15434C18.9698 9.38693 19.5822 9.66376 20.0662 9.9836C19.4542 7.08784 17.3679 4.73598 14.6295 3.75015C15.0432 4.21668 15.4111 4.76561 15.7268 5.35798ZM12.25 8.25447C13.5387 8.27757 14.762 8.38951 15.8655 8.57419C15.6222 7.57144 15.2728 6.63238 14.8443 5.82831C14.0972 4.42648 13.1778 3.54856 12.25 3.31366V8.25447Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default GlobeTimezoneIcon;
