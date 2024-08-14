import * as React from 'react';
import { IconProps } from './types';

export const KanbanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.8 7.2C7.46863 7.2 7.2 7.46863 7.2 7.8V16.2C7.2 16.5314 7.46863 16.8 7.8 16.8C8.13137 16.8 8.4 16.5314 8.4 16.2V7.8C8.4 7.46863 8.13137 7.2 7.8 7.2Z"
          fill={color}
        />
        <path
          d="M11.4 7.8C11.4 7.46863 11.6686 7.2 12 7.2C12.3314 7.2 12.6 7.46863 12.6 7.8V13.8C12.6 14.1314 12.3314 14.4 12 14.4C11.6686 14.4 11.4 14.1314 11.4 13.8V7.8Z"
          fill={color}
        />
        <path
          d="M16.2 7.2C15.8686 7.2 15.6 7.46863 15.6 7.8V11.4C15.6 11.7314 15.8686 12 16.2 12C16.5314 12 16.8 11.7314 16.8 11.4V7.8C16.8 7.46863 16.5314 7.2 16.2 7.2Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.4 3C5.41766 3 3 5.41766 3 8.4V15.6C3 18.5823 5.41766 21 8.4 21H15.6C18.5823 21 21 18.5823 21 15.6V8.4C21 5.41766 18.5823 3 15.6 3H8.4ZM4.2 8.4C4.2 6.0804 6.0804 4.2 8.4 4.2H15.6C17.9196 4.2 19.8 6.0804 19.8 8.4V15.6C19.8 17.9196 17.9196 19.8 15.6 19.8H8.4C6.0804 19.8 4.2 17.9196 4.2 15.6V8.4Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default KanbanIcon;
