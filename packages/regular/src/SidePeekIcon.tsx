import * as React from 'react';
import { IconProps } from './types';

export const SidePeekIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.109 6.54601C11 6.75992 11 7.03995 11 7.6V16.4C11 16.9601 11 17.2401 11.109 17.454C11.2049 17.6422 11.3578 17.7951 11.546 17.891C11.7599 18 12.0399 18 12.6 18H16.8C17.9201 18 18.4802 18 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C20 16.4802 20 15.9201 20 14.8V9.2C20 8.0799 20 7.51984 19.782 7.09202C19.5903 6.71569 19.2843 6.40973 18.908 6.21799C18.4802 6 17.9201 6 16.8 6H12.6C12.0399 6 11.7599 6 11.546 6.10899C11.3578 6.20487 11.2049 6.35785 11.109 6.54601Z"
          fill={color}
        />
        <path
          d="M15.633 3.25H8.367C7.27486 3.24999 6.40935 3.24999 5.71173 3.30699C4.99834 3.36527 4.39472 3.48688 3.84355 3.76772C2.94978 4.22312 2.22312 4.94978 1.76772 5.84355C1.48688 6.39472 1.36527 6.99834 1.30699 7.71173C1.24999 8.40935 1.24999 9.27485 1.25 10.367V13.633C1.24999 14.7251 1.24999 15.5906 1.30699 16.2883C1.36527 17.0017 1.48688 17.6053 1.76772 18.1565C2.22312 19.0502 2.94978 19.7769 3.84355 20.2323C4.39472 20.5131 4.99834 20.6347 5.71173 20.693C6.40935 20.75 7.27484 20.75 8.36698 20.75H15.633C16.7252 20.75 17.5906 20.75 18.2883 20.693C19.0017 20.6347 19.6053 20.5131 20.1565 20.2323C21.0502 19.7769 21.7769 19.0502 22.2323 18.1565C22.5131 17.6053 22.6347 17.0017 22.693 16.2883C22.75 15.5906 22.75 14.7252 22.75 13.633V10.367C22.75 9.27484 22.75 8.40935 22.693 7.71173C22.6347 6.99834 22.5131 6.39472 22.2323 5.84355C21.7769 4.94978 21.0502 4.22312 20.1565 3.76772C19.6053 3.48688 19.0017 3.36527 18.2883 3.30699C17.5906 3.24999 16.7251 3.24999 15.633 3.25ZM4.52453 5.10423C4.829 4.94909 5.21325 4.85271 5.83388 4.80201C6.46326 4.75058 7.26752 4.75 8.4 4.75H15.6C16.7325 4.75 17.5367 4.75058 18.1661 4.80201C18.7867 4.85271 19.171 4.94909 19.4755 5.10423C20.087 5.41582 20.5842 5.913 20.8958 6.52453C21.0509 6.829 21.1473 7.21325 21.198 7.83388C21.2494 8.46326 21.25 9.26752 21.25 10.4V13.6C21.25 14.7325 21.2494 15.5367 21.198 16.1661C21.1473 16.7867 21.0509 17.171 20.8958 17.4755C20.5842 18.087 20.087 18.5842 19.4755 18.8958C19.171 19.0509 18.7867 19.1473 18.1661 19.198C17.5367 19.2494 16.7325 19.25 15.6 19.25H8.4C7.26752 19.25 6.46326 19.2494 5.83388 19.198C5.21325 19.1473 4.829 19.0509 4.52453 18.8958C3.913 18.5842 3.41582 18.087 3.10423 17.4755C2.94909 17.171 2.85271 16.7867 2.80201 16.1661C2.75058 15.5367 2.75 14.7325 2.75 13.6V10.4C2.75 9.26752 2.75058 8.46327 2.80201 7.83388C2.85271 7.21325 2.94909 6.829 3.10423 6.52453C3.41582 5.913 3.913 5.41582 4.52453 5.10423Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SidePeekIcon;
