import * as React from 'react';
import { IconProps } from './types';

export const BillingInfoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.1786 3.5H12.8214C13.3633 3.5 13.8004 3.49999 14.1543 3.52891C14.5187 3.55868 14.8388 3.62159 15.135 3.77248C15.6054 4.01217 15.9878 4.39462 16.2275 4.86502C16.3784 5.16117 16.4413 5.48126 16.4711 5.84569C16.5 6.19961 16.5 6.63667 16.5 7.17853V10.25C16.5 10.5261 16.2761 10.75 16 10.75C15.7239 10.75 15.5 10.5261 15.5 10.25V7.2C15.5 6.6317 15.4996 6.23554 15.4744 5.92712C15.4497 5.62454 15.4036 5.45069 15.3365 5.31901C15.1927 5.03677 14.9632 4.8073 14.681 4.66349C14.5493 4.5964 14.3755 4.55031 14.0729 4.52559C13.7645 4.50039 13.3683 4.5 12.8 4.5H7.2C6.6317 4.5 6.23554 4.50039 5.92712 4.52559C5.62454 4.55031 5.45069 4.5964 5.31901 4.66349C5.03677 4.8073 4.8073 5.03677 4.66349 5.31901C4.5964 5.45069 4.55031 5.62454 4.52559 5.92712C4.50039 6.23554 4.5 6.6317 4.5 7.2V16.8C4.5 17.3683 4.50039 17.7645 4.52559 18.0729C4.55031 18.3755 4.5964 18.5493 4.66349 18.681C4.80552 18.9597 5.03109 19.187 5.30854 19.3311C5.30854 19.3311 5.31191 19.3315 5.31896 19.3331C5.33731 19.3373 5.38143 19.3472 5.4633 19.3593C5.58803 19.3776 5.755 19.3945 5.95766 19.4094C6.36169 19.4392 6.8786 19.4594 7.42383 19.4729C8.51278 19.5 9.68947 19.5 10.25 19.5C10.5261 19.5 10.75 19.7239 10.75 20C10.75 20.2761 10.5261 20.5 10.25 20.5H10.2487C9.68862 20.5 8.50119 20.5 7.39898 20.4726C6.8482 20.4589 6.31238 20.4382 5.88419 20.4067C5.67074 20.391 5.47674 20.372 5.31779 20.3486C5.18329 20.3289 5.00154 20.2971 4.86502 20.2275C4.39462 19.9878 4.01217 19.6054 3.77248 19.135C3.62159 18.8388 3.55868 18.5187 3.52891 18.1543C3.49999 17.8004 3.5 17.3633 3.5 16.8214V7.1786C3.5 6.6367 3.49999 6.19963 3.52891 5.84569C3.55868 5.48126 3.62159 5.16117 3.77248 4.86502C4.01217 4.39462 4.39462 4.01217 4.86502 3.77248C5.16117 3.62159 5.48126 3.55868 5.84569 3.52891C6.19963 3.49999 6.6367 3.5 7.1786 3.5Z"
          fill={color}
        />
        <path
          d="M18.6207 12.5C19.0232 12.5 19.3553 12.5 19.6259 12.5221 19.907 12.5451 20.1653 12.5943 20.408 12.718 20.7843 12.9097 21.0903 13.2157 21.282 13.592 21.4057 13.8347 21.4549 14.093 21.4779 14.3741 21.5 14.6447 21.5 14.9769 21.5 15.3793V17.6207C21.5 18.0231 21.5 18.3553 21.4779 18.6259 21.4549 18.907 21.4057 19.1653 21.282 19.408 21.0903 19.7843 20.7843 20.0903 20.408 20.282 20.1653 20.4057 19.907 20.4549 19.6259 20.4779 19.3553 20.5 19.0231 20.5 18.6206 20.5H14.3794C13.9769 20.5 13.6447 20.5 13.3741 20.4779 13.093 20.4549 12.8347 20.4057 12.592 20.282 12.2157 20.0903 11.9097 19.7843 11.718 19.408 11.5943 19.1653 11.5451 18.907 11.5221 18.6259 11.5 18.3553 11.5 18.0231 11.5 17.6206V15.3794C11.5 14.9769 11.5 14.6447 11.5221 14.3741 11.5451 14.093 11.5943 13.8347 11.718 13.592 11.9097 13.2157 12.2157 12.9097 12.592 12.718 12.8347 12.5943 13.093 12.5451 13.3741 12.5221 13.6447 12.5 13.9768 12.5 14.3793 12.5H18.6207zM13.4555 13.5188C13.2363 13.5367 13.1242 13.5691 13.046 13.609 12.8578 13.7049 12.7049 13.8578 12.609 14.046 12.5691 14.1242 12.5367 14.2363 12.5188 14.4555 12.5176 14.4701 12.5165 14.4849 12.5154 14.5H20.4846C20.4835 14.4849 20.4824 14.4701 20.4812 14.4555 20.4633 14.2363 20.4309 14.1242 20.391 14.046 20.2951 13.8578 20.1422 13.7049 19.954 13.609 19.8758 13.5691 19.7637 13.5367 19.5445 13.5188 19.3194 13.5004 19.0283 13.5 18.6 13.5H14.4C13.9717 13.5 13.6806 13.5004 13.4555 13.5188zM20.5 16.5H12.5V17.6C12.5 18.0283 12.5004 18.3194 12.5188 18.5445 12.5367 18.7637 12.5691 18.8758 12.609 18.954 12.7049 19.1422 12.8578 19.2951 13.046 19.391 13.1242 19.4309 13.2363 19.4633 13.4555 19.4812 13.6806 19.4996 13.9717 19.5 14.4 19.5H18.6C19.0283 19.5 19.3194 19.4996 19.5445 19.4812 19.7637 19.4633 19.8758 19.4309 19.954 19.391 20.1422 19.2951 20.2951 19.1422 20.391 18.954 20.4309 18.8758 20.4633 18.7637 20.4812 18.5445 20.4996 18.3194 20.5 18.0283 20.5 17.6V16.5zM6.5 6.5C6.22386 6.5 6 6.72386 6 7 6 7.27614 6.22386 7.5 6.5 7.5H10.5C10.7761 7.5 11 7.27614 11 7 11 6.72386 10.7761 6.5 10.5 6.5H6.5zM6 10C6 9.72386 6.22386 9.5 6.5 9.5H13.5C13.7761 9.5 14 9.72386 14 10 14 10.2761 13.7761 10.5 13.5 10.5H6.5C6.22386 10.5 6 10.2761 6 10zM6.5 12.5C6.22386 12.5 6 12.7239 6 13 6 13.2761 6.22386 13.5 6.5 13.5H10C10.2761 13.5 10.5 13.2761 10.5 13 10.5 12.7239 10.2761 12.5 10 12.5H6.5zM6 17C6 16.7239 6.22386 16.5 6.5 16.5H8.5C8.77614 16.5 9 16.7239 9 17 9 17.2761 8.77614 17.5 8.5 17.5H6.5C6.22386 17.5 6 17.2761 6 17z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BillingInfoIcon;
