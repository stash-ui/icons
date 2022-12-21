import * as React from 'react';
import { IconProps } from './types';

export const PrivateContentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g opacity=".5" fill={color}>
          <path d="M18.75 18.5C18.75 18.0858 18.4142 17.75 18 17.75C17.5858 17.75 17.25 18.0858 17.25 18.5V19C17.25 19.4142 17.5858 19.75 18 19.75C18.4142 19.75 18.75 19.4142 18.75 19V18.5Z" />
          <path d="M18 12.25C16.6135 12.25 15.5357 13.4077 15.5357 14.7778V15.5102C15.474 15.5336 15.4126 15.5611 15.3516 15.5933C14.9665 15.7968 14.6585 16.1187 14.467 16.5084C14.3375 16.7719 14.2908 17.0432 14.2698 17.3098C14.25 17.5619 14.25 17.8671 14.25 18.217V18.8941C14.25 19.244 14.25 19.5492 14.2698 19.8013C14.2908 20.0679 14.3375 20.3392 14.467 20.6027C14.6585 20.9924 14.9665 21.3143 15.3516 21.5178C15.6149 21.6569 15.8864 21.7069 16.1494 21.7292C16.3958 21.75 16.693 21.75 17.0284 21.75H18.9716C19.307 21.75 19.6042 21.75 19.8506 21.7292C20.1136 21.7069 20.3851 21.6569 20.6484 21.5178C21.0335 21.3143 21.3415 20.9924 21.533 20.6027C21.6625 20.3392 21.7092 20.0679 21.7302 19.8013C21.75 19.5492 21.75 19.244 21.75 18.8941V18.217C21.75 17.8671 21.75 17.5619 21.7302 17.3098C21.7092 17.0432 21.6625 16.7719 21.533 16.5084C21.3415 16.1187 21.0335 15.7968 20.6484 15.5933C20.5874 15.5611 20.526 15.5336 20.4643 15.5102V14.7778C20.4643 13.4077 19.3865 12.25 18 12.25ZM17.0357 15.3611V14.7778C17.0357 14.1842 17.4929 13.75 18 13.75C18.5071 13.75 18.9643 14.1842 18.9643 14.7778V15.3611H17.0357ZM16.0524 16.9196C16.0642 16.9133 16.1102 16.8906 16.276 16.8766C16.4514 16.8617 16.6843 16.8611 17.0571 16.8611H18.9429C19.3157 16.8611 19.5486 16.8617 19.724 16.8766C19.8898 16.8906 19.9358 16.9133 19.9476 16.9196C20.0463 16.9717 20.1317 17.0578 20.1867 17.1699C20.1974 17.1916 20.2208 17.2496 20.2348 17.4276C20.2495 17.6137 20.25 17.8591 20.25 18.2444V18.8667C20.25 19.252 20.2495 19.4974 20.2348 19.6835C20.2208 19.8615 20.1974 19.9196 20.1867 19.9413C20.1317 20.0533 20.0463 20.1394 19.9476 20.1916C19.9358 20.1978 19.8898 20.2205 19.724 20.2345C19.5486 20.2494 19.3157 20.25 18.9429 20.25H17.0571C16.6843 20.25 16.4514 20.2494 16.276 20.2345C16.1102 20.2205 16.0642 20.1978 16.0524 20.1916C15.9537 20.1394 15.8683 20.0533 15.8133 19.9413C15.8026 19.9196 15.7792 19.8615 15.7652 19.6835C15.7505 19.4974 15.75 19.252 15.75 18.8667V18.2444C15.75 17.8591 15.7505 17.6137 15.7652 17.4276C15.7792 17.2496 15.8026 17.1916 15.8133 17.1699C15.8684 17.0578 15.9537 16.9717 16.0524 16.9196Z" />
        </g>
        <path
          d="M14.633 2.25H9.367C8.27486 2.24999 7.40935 2.24999 6.71173 2.30699C5.99835 2.36527 5.39472 2.48688 4.84355 2.76772C3.94978 3.22312 3.22312 3.94978 2.76772 4.84355C2.48688 5.39472 2.36527 5.99834 2.30699 6.71173C2.24999 7.40935 2.24999 8.27485 2.25 9.36699V14.633C2.24999 15.7251 2.24999 16.5906 2.30699 17.2883C2.36527 18.0017 2.48688 18.6053 2.76772 19.1565C3.22312 20.0502 3.94978 20.7769 4.84355 21.2323C5.39472 21.5131 5.99835 21.6347 6.71173 21.693C7.40935 21.75 8.27484 21.75 9.36698 21.75H12C12.4142 21.75 12.75 21.4142 12.75 21C12.75 20.5858 12.4142 20.25 12 20.25H9.4C8.26752 20.25 7.46326 20.2494 6.83388 20.198C6.21325 20.1473 5.829 20.0509 5.52453 19.8958C4.913 19.5842 4.41582 19.087 4.10423 18.4755C3.94909 18.171 3.85271 17.7867 3.80201 17.1661C3.75058 16.5367 3.75 15.7325 3.75 14.6V9.4C3.75 8.26752 3.75058 7.46327 3.80201 6.83388C3.85271 6.21325 3.94909 5.829 4.10423 5.52453C4.41582 4.913 4.913 4.41582 5.52453 4.10423C5.829 3.94909 6.21325 3.85271 6.83388 3.80201C7.46326 3.75058 8.26752 3.75 9.4 3.75H14.6C15.7325 3.75 16.5367 3.75058 17.1661 3.80201C17.7867 3.85271 18.171 3.94909 18.4755 4.10423C19.087 4.41582 19.5842 4.913 19.8958 5.52453C20.0509 5.829 20.1473 6.21325 20.198 6.83388C20.2494 7.46326 20.25 8.26752 20.25 9.4V10.8C20.25 11.2142 20.5858 11.55 21 11.55C21.4142 11.55 21.75 11.2142 21.75 10.8V9.36698C21.75 8.27484 21.75 7.40935 21.693 6.71173C21.6347 5.99834 21.5131 5.39472 21.2323 4.84355C20.7769 3.94978 20.0502 3.22312 19.1565 2.76772C18.6053 2.48688 18.0017 2.36527 17.2883 2.30699C16.5906 2.24999 15.7251 2.24999 14.633 2.25Z"
          fill={color}
        />
        <path
          d="M6 5.25C5.58579 5.25 5.25 5.58579 5.25 6 5.25 6.41421 5.58579 6.75 6 6.75H18C18.4142 6.75 18.75 6.41421 18.75 6 18.75 5.58579 18.4142 5.25 18 5.25H6zM5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9 15.25 9.41421 14.9142 9.75 14.5 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9zM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12 5.25 12.4142 5.58579 12.75 6 12.75H6.5C6.91421 12.75 7.25 12.4142 7.25 12 7.25 11.5858 6.91421 11.25 6.5 11.25H6zM5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H6.5C6.91421 14.25 7.25 14.5858 7.25 15 7.25 15.4142 6.91421 15.75 6.5 15.75H6C5.58579 15.75 5.25 15.4142 5.25 15zM9 11.25C8.58579 11.25 8.25 11.5858 8.25 12 8.25 12.4142 8.58579 12.75 9 12.75H14.5C14.9142 12.75 15.25 12.4142 15.25 12 15.25 11.5858 14.9142 11.25 14.5 11.25H9zM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H12.5C12.9142 14.25 13.25 14.5858 13.25 15 13.25 15.4142 12.9142 15.75 12.5 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15zM6 17.25C5.58579 17.25 5.25 17.5858 5.25 18 5.25 18.4142 5.58579 18.75 6 18.75H12C12.4142 18.75 12.75 18.4142 12.75 18 12.75 17.5858 12.4142 17.25 12 17.25L6 17.25z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PrivateContentIcon;
