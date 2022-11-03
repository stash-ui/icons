import * as React from 'react';
import { IconProps } from './types';

export const ExpandDiagonalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.5962 8.40379V10.9393C15.5962 11.4916 16.0439 11.9393 16.5962 11.9393C17.1485 11.9393 17.5962 11.4916 17.5962 10.9393V8.20379C17.5962 8.19619 17.5962 8.18847 17.5962 8.18066C17.5963 8.06154 17.5963 7.91928 17.5861 7.79396C17.5742 7.64875 17.5438 7.44075 17.4327 7.2228C17.2889 6.94056 17.0594 6.71109 16.7772 6.56728C16.5592 6.45623 16.3513 6.42579 16.206 6.41392C16.0807 6.40368 15.9385 6.40374 15.8193 6.40378C15.8115 6.40379 15.8038 6.40379 15.7962 6.40379L13.0607 6.40379C12.5084 6.40379 12.0607 6.85151 12.0607 7.40379C12.0607 7.95608 12.5084 8.40379 13.0607 8.40379H15.5962ZM7.40382 12.0606C7.95611 12.0606 8.40382 12.5084 8.40382 13.0606V15.5962H10.9394C11.4916 15.5962 11.9394 16.0439 11.9394 16.5962C11.9394 17.1485 11.4916 17.5962 10.9394 17.5962H8.20382C8.19622 17.5962 8.18851 17.5962 8.18069 17.5962C8.06157 17.5962 7.91931 17.5963 7.79399 17.586C7.64877 17.5742 7.44078 17.5437 7.22283 17.4327C6.94059 17.2889 6.71112 17.0594 6.56731 16.7772C6.45626 16.5592 6.42582 16.3512 6.41395 16.206C6.40371 16.0807 6.40377 15.9384 6.40381 15.8193C6.40382 15.8115 6.40382 15.8038 6.40382 15.7962L6.40382 13.0606C6.40382 12.5084 6.85154 12.0606 7.40382 12.0606Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ExpandDiagonalIcon;
