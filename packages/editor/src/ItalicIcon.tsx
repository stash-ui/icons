import * as React from 'react';
import { IconProps } from './types';

export const ItalicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.25 18C8.11193 18 8 17.8881 8 17.75V16.5357C8 16.3976 8.11193 16.2857 8.25 16.2857H9.9695L12.1481 7.71429H10.4286C10.2906 7.71429 10.1786 7.60236 10.1786 7.46429V6.25C10.1786 6.11193 10.2906 6 10.4286 6H15.75C15.8881 6 16 6.11193 16 6.25V7.46429C16 7.60236 15.8881 7.71429 15.75 7.71429H14.0305L11.8519 16.2857H13.5714C13.7094 16.2857 13.8214 16.3976 13.8214 16.5357V17.75C13.8214 17.8881 13.7094 18 13.5714 18H8.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ItalicIcon;
