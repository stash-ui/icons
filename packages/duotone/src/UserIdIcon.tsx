import * as React from 'react';
import { IconProps } from './types';

export const UserIdIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9999 8.75C10.6952 8.75 9.67098 9.7756 9.67098 11C9.67098 12.2244 10.6952 13.25 11.9999 13.25C13.3046 13.25 14.3288 12.2244 14.3288 11C14.3288 9.7756 13.3046 8.75 11.9999 8.75ZM8.17098 11C8.17098 8.91069 9.90373 7.25 11.9999 7.25C14.0961 7.25 15.8288 8.91069 15.8288 11C15.8288 13.0893 14.0961 14.75 11.9999 14.75C9.90373 14.75 8.17098 13.0893 8.17098 11ZM9.44974 16.9528C9.28026 16.842 9.15943 16.8396 9.11053 16.853C8.95908 16.8943 8.80838 16.939 8.65853 16.9869L7.67412 17.3021C6.91256 17.5458 6.34967 18.1388 6.15986 18.8572L5.72973 20.6729C5.63424 21.0759 5.2301 21.3253 4.82704 21.2298C4.42398 21.1343 4.17464 20.7302 4.27012 20.3271L4.70422 18.4947L4.70631 18.4867C5.02905 17.2469 5.98367 16.2682 7.21683 15.8735L8.20123 15.5583C8.37175 15.5038 8.54321 15.453 8.71549 15.4059C9.31363 15.2426 9.87879 15.4411 10.2707 15.6974C10.6388 15.9381 11.2491 16.2356 11.9999 16.2356C12.7507 16.2356 13.361 15.9381 13.7292 15.6974C14.121 15.4411 14.6862 15.2426 15.2843 15.4059C15.4566 15.453 15.6281 15.5038 15.7986 15.5583L16.783 15.8735C18.0162 16.2682 18.9708 17.2469 19.2935 18.4867L19.2956 18.4947L19.7297 20.3271C19.8252 20.7302 19.5759 21.1343 19.1728 21.2298C18.7698 21.3253 18.3656 21.076 18.2701 20.6729L17.84 18.8572C17.6502 18.1388 17.0873 17.5458 16.3257 17.3021L15.3413 16.9869C15.1914 16.939 15.0407 16.8943 14.8893 16.853C14.8404 16.8396 14.7196 16.842 14.5501 16.9528C14.04 17.2863 13.1441 17.7356 11.9999 17.7356C10.8557 17.7356 9.95978 17.2863 9.44974 16.9528Z"
          fill={color}
        />
        <path
          d="M10.367 1.25H13.633C14.7251 1.24999 15.5906 1.24999 16.2883 1.30699C17.0017 1.36527 17.6053 1.48688 18.1565 1.76772C19.0502 2.22312 19.7769 2.94978 20.2323 3.84355C20.5131 4.39472 20.6347 4.99834 20.693 5.71173C20.75 6.40935 20.75 7.27484 20.75 8.36698V15.633C20.75 16.7252 20.75 17.5906 20.693 18.2883C20.6347 19.0017 20.5131 19.6053 20.2323 20.1565C19.7769 21.0502 19.0502 21.7769 18.1565 22.2323C17.6053 22.5131 17.0017 22.6347 16.2883 22.693C15.5906 22.75 14.7252 22.75 13.633 22.75H10.367C9.27484 22.75 8.40935 22.75 7.71173 22.693C6.99834 22.6347 6.39472 22.5131 5.84355 22.2323C4.94978 21.7769 4.22312 21.0502 3.76772 20.1565C3.48688 19.6053 3.36527 19.0017 3.30699 18.2883C3.24999 17.5906 3.24999 16.7251 3.25 15.633V8.367C3.24999 7.27485 3.24999 6.40936 3.30699 5.71173C3.36527 4.99834 3.48688 4.39472 3.76772 3.84355C4.22312 2.94978 4.94978 2.22312 5.84355 1.76772C6.39472 1.48688 6.99834 1.36527 7.71173 1.30699C8.40936 1.24999 9.27486 1.24999 10.367 1.25ZM7.83388 2.80201C7.21325 2.85271 6.829 2.94909 6.52453 3.10423C5.913 3.41582 5.41582 3.913 5.10423 4.52453C4.94909 4.829 4.85271 5.21325 4.80201 5.83388C4.75058 6.46326 4.75 7.26752 4.75 8.4V15.6C4.75 16.7325 4.75058 17.5367 4.80201 18.1661C4.85271 18.7867 4.94909 19.171 5.10423 19.4755C5.41582 20.087 5.913 20.5842 6.52453 20.8958C6.829 21.0509 7.21325 21.1473 7.83388 21.198C8.46327 21.2494 9.26752 21.25 10.4 21.25H13.6C14.7325 21.25 15.5367 21.2494 16.1661 21.198C16.7867 21.1473 17.171 21.0509 17.4755 20.8958C18.087 20.5842 18.5842 20.087 18.8958 19.4755C19.0509 19.171 19.1473 18.7867 19.198 18.1661C19.2494 17.5367 19.25 16.7325 19.25 15.6V8.4C19.25 7.26752 19.2494 6.46326 19.198 5.83388C19.1473 5.21325 19.0509 4.829 18.8958 4.52453C18.5842 3.913 18.087 3.41582 17.4755 3.10423C17.171 2.94909 16.7867 2.85271 16.1661 2.80201C15.5367 2.75058 14.7325 2.75 13.6 2.75H10.4C9.26752 2.75 8.46326 2.75058 7.83388 2.80201Z"
          fill={color}
        />
        <path
          d="M10.25 4.5C10.25 4.08579 10.5858 3.75 11 3.75H13C13.4142 3.75 13.75 4.08579 13.75 4.5C13.75 4.91421 13.4142 5.25 13 5.25H11C10.5858 5.25 10.25 4.91421 10.25 4.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserIdIcon;
