import * as React from 'react';
import { IconProps } from './types';

export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.65 10.1C18.65 12.5853 16.6353 14.6 14.15 14.6C13.7536 14.6 13.3691 14.5487 13.0029 14.4525C12.8332 14.4078 12.6504 14.4419 12.5172 14.5561L12.1405 14.8794C12.0498 14.9572 11.9343 15 11.8149 15H11.5C11.2239 15 11 15.2239 11 15.5V16.5C11 16.7761 10.7761 17 10.5 17H9.5C9.22386 17 9 17.2239 9 17.5V18C9 18.2761 8.77614 18.5 8.5 18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V16.2029C5.5 16.0728 5.55072 15.9478 5.64138 15.8545L9.66152 11.7167C9.79097 11.5834 9.83359 11.39 9.78792 11.2099C9.69786 10.8549 9.65 10.483 9.65 10.1C9.65 7.61469 11.6647 5.59998 14.15 5.59998C16.6353 5.59998 18.65 7.61469 18.65 10.1ZM15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default KeyIcon;
