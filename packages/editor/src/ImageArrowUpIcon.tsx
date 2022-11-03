import * as React from 'react';
import { IconProps } from './types';

export const ImageArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6329 3.25H9.36685C8.27471 3.24999 7.4092 3.24999 6.71159 3.30699C5.9982 3.36527 5.39457 3.48688 4.8434 3.76772C3.94963 4.22312 3.22297 4.94978 2.76757 5.84355C2.48673 6.39472 2.36513 6.99834 2.30684 7.71173C2.24984 8.40935 2.24985 9.27485 2.24985 10.367V13.633C2.24985 14.5173 2.23476 15.4061 2.30684 16.2883C2.36513 17.0017 2.48673 17.6053 2.76757 18.1565C2.99527 18.6033 3.29078 19.0084 3.64109 19.3588C3.99141 19.7091 4.39651 20.0046 4.8434 20.2323C4.91228 20.2674 4.98203 20.3 5.05266 20.3303C5.15805 20.3755 5.26552 20.4156 5.37543 20.4513C5.78127 20.5827 6.22043 20.6529 6.71163 20.693C7.40921 20.75 8.27466 20.75 9.36672 20.75H13.9999C14.4141 20.75 14.7499 20.4142 14.7499 20C14.7499 19.7411 14.6187 19.5129 14.4192 19.3781C14.3543 19.3343 14.2823 19.3004 14.2052 19.2785C14.1399 19.2599 14.071 19.25 13.9999 19.25H9.39985C8.26737 19.25 7.46312 19.2494 6.83373 19.198C6.21311 19.1473 5.82886 19.0509 5.52438 18.8958C5.28541 18.774 5.0639 18.6239 4.8641 18.4497C4.55264 18.1782 4.29394 17.848 4.10413 17.4755C3.94385 17.1609 3.84651 16.7618 3.79715 16.1055C3.77759 15.8454 3.88797 15.6804 4.0463 15.4904C4.47701 14.9736 4.76956 14.6236 5.01543 14.3758C5.25654 14.1328 5.39639 14.048 5.49932 14.0104C5.77644 13.9091 6.08045 13.9091 6.35756 14.0104C6.4605 14.048 6.60034 14.1328 6.84145 14.3758C7.08732 14.6236 7.37987 14.9736 7.81058 15.4904C8.41278 16.2131 9.50893 16.2532 10.1623 15.5764L13.1659 12.4656C13.5762 12.0407 13.8525 11.7553 14.0827 11.5533C14.3066 11.3568 14.4358 11.2862 14.5338 11.2536C14.79 11.1684 15.0669 11.1684 15.323 11.2536C15.4536 11.2971 15.6246 11.4016 15.9798 11.7434C16.2783 12.0307 16.7531 12.0215 17.0403 11.7231C17.3275 11.4246 17.3184 10.9499 17.02 10.6626C16.6377 10.2947 16.264 9.98582 15.7966 9.83032C15.233 9.64282 14.6239 9.64282 14.0603 9.83032C13.6922 9.9528 13.3875 10.1677 13.0933 10.4258C12.8108 10.6738 12.4915 11.0045 12.1084 11.4013L9.08321 14.5345C9.04979 14.5692 8.99372 14.5671 8.96291 14.5301L8.94147 14.5044C8.53761 14.0198 8.20354 13.6189 7.9062 13.3192C7.59885 13.0095 7.27495 12.7486 6.8725 12.6015C6.26285 12.3787 5.59403 12.3787 4.98438 12.6015C4.58194 12.7486 4.25803 13.0095 3.95068 13.3192C3.88561 13.3848 3.81878 13.4552 3.74985 13.5303V10.4C3.74985 9.26752 3.75044 8.46327 3.80186 7.83388C3.85257 7.21325 3.94894 6.829 4.10408 6.52453C4.41567 5.913 4.91286 5.41582 5.52438 5.10423C5.82886 4.94909 6.21311 4.85271 6.83373 4.80201C7.46312 4.75058 8.26737 4.75 9.39985 4.75H12.5999C13.7323 4.75 14.5366 4.75058 15.166 4.80201C15.7866 4.85271 16.1708 4.94909 16.4753 5.10423C17.0868 5.41582 17.584 5.913 17.8956 6.52453C18.0508 6.829 18.1471 7.21325 18.1978 7.83388C18.2493 8.46326 18.2499 9.26752 18.2499 10.4C18.2499 10.8142 18.5856 11.15 18.9999 11.15C19.4141 11.15 19.7499 10.8142 19.7499 10.4V10.367C19.7499 9.27484 19.7499 8.40935 19.6929 7.71173C19.6346 6.99834 19.513 6.39472 19.2321 5.84355C18.7767 4.94978 18.0501 4.22312 17.1563 3.76772C16.6051 3.48688 16.0015 3.36527 15.2881 3.30699C14.5905 3.24999 13.725 3.24999 12.6329 3.25Z"
          fill={color}
        />
        <path
          d="M8.99985 6.25C7.48107 6.25 6.24985 7.48122 6.24985 9 6.24985 10.5188 7.48107 11.75 8.99985 11.75 10.5186 11.75 11.7499 10.5188 11.7499 9 11.7499 7.48122 10.5186 6.25 8.99985 6.25zM7.74985 9C7.74985 8.30964 8.3095 7.75 8.99985 7.75 9.69021 7.75 10.2499 8.30964 10.2499 9 10.2499 9.69036 9.69021 10.25 8.99985 10.25 8.3095 10.25 7.74985 9.69036 7.74985 9zM19.2499 20C19.2499 20.4142 18.9141 20.75 18.4999 20.75 18.0856 20.75 17.7499 20.4142 17.7499 20V15.8107L16.5302 17.0303C16.2373 17.3232 15.7624 17.3232 15.4695 17.0303 15.1766 16.7374 15.1766 16.2626 15.4695 15.9697L17.9695 13.4697C18.2624 13.1768 18.7373 13.1768 19.0302 13.4697L21.5302 15.9697C21.8231 16.2626 21.8231 16.7374 21.5302 17.0303 21.2373 17.3232 20.7624 17.3232 20.4695 17.0303L19.2499 15.8107V20z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ImageArrowUpIcon;
