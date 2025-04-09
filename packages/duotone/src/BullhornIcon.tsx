import * as React from 'react';
import { IconProps } from './types';

export const BullhornIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 17V7.51915C9.52565 7.63427 8.43436 7.66542 7.17725 7.62457C5.74661 7.57808 4.5 8.69719 4.5 10.1627V11.8918C4.5 13.1146 5.37072 14.1052 6.5 14.357V17C6.5 17.8284 7.17157 18.5 8 18.5H9C9.82843 18.5 10.5 17.8284 10.5 17Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 12.7604C19.1253 12.4223 19.55 11.7608 19.55 11C19.55 10.2393 19.1253 9.57776 18.5 9.23962V12.7604Z"
          fill={color}
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7652 4.53463C17.388 3.94618 18.5 4.33776 18.5 5.26448V16.7083C18.5 17.6458 17.3722 18.0254 16.7527 17.4376C15.4071 16.1607 14.0958 15.3929 12.5912 14.9486C11.075 14.5009 9.33586 14.3734 7.11817 14.4186C5.70487 14.4473 4.5 13.3302 4.5 11.8918V10.1627C4.5 8.69719 5.74661 7.57809 7.17725 7.62457C9.47689 7.6993 11.2216 7.5331 12.7107 7.05264C14.1914 6.57488 15.4516 5.7758 16.7652 4.53463Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BullhornIcon;
