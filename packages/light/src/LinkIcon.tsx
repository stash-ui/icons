import * as React from 'react';
import { IconProps } from './types';

export const LinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.4445 5.57614C17.8517 7.00646 17.8517 9.32213 16.4445 10.7525L15.1311 12.0874C15.928 13.4874 15.7369 15.3075 14.5578 16.506L12.6709 18.4238C11.2592 19.8587 8.96706 19.8587 7.5554 18.4238C6.1482 16.9935 6.1482 14.6778 7.5554 13.2475L8.86877 11.9126C8.07189 10.5126 8.263 8.69248 9.44212 7.49399L11.329 5.57614C12.7406 4.14129 15.0328 4.14129 16.4445 5.57614ZM14.5154 11.2873L15.7316 10.0511C16.7559 9.00998 16.7559 7.31861 15.7316 6.27746C14.7118 5.24085 13.0617 5.24085 12.0418 6.27746L10.155 8.19531C9.36514 8.99811 9.18432 10.1875 9.61251 11.1673C11.0179 9.91018 13.1567 9.95019 14.5154 11.2873ZM13.8138 11.9999C12.8022 11.0047 11.1976 11.0047 10.186 12.0001C11.1977 12.9953 12.8022 12.9952 13.8138 11.9999ZM9.48446 12.7127L8.26824 13.9489C7.24392 14.99 7.24392 16.6814 8.26824 17.7225C9.2881 18.7591 10.9382 18.7591 11.9581 17.7225L13.8449 15.8047C14.6347 15.0019 14.8155 13.8125 14.3874 12.8327C12.982 14.0898 10.8431 14.0498 9.48446 12.7127Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LinkIcon;
