import * as React from 'react';
import { IconProps } from './types';

export const PercentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 6C7.11929 6 6 7.11929 6 8.5 6 9.88071 7.11929 11 8.5 11 9.88071 11 11 9.88071 11 8.5 11 7.11929 9.88071 6 8.5 6zM8 8.5C8 8.22386 8.22386 8 8.5 8 8.77614 8 9 8.22386 9 8.5 9 8.77614 8.77614 9 8.5 9 8.22386 9 8 8.77614 8 8.5zM7.05025 16.9497C6.65972 16.5592 6.65972 15.926 7.05025 15.5355L15.5355 7.05023C15.9261 6.6597 16.5592 6.6597 16.9497 7.05023 17.3403 7.44075 17.3403 8.07392 16.9497 8.46444L8.46446 16.9497C8.07394 17.3402 7.44077 17.3402 7.05025 16.9497zM13 15.5C13 14.1193 14.1193 13 15.5 13 16.8807 13 18 14.1193 18 15.5 18 16.8807 16.8807 18 15.5 18 14.1193 18 13 16.8807 13 15.5zM15.5 15C15.2239 15 15 15.2239 15 15.5 15 15.7761 15.2239 16 15.5 16 15.7761 16 16 15.7761 16 15.5 16 15.2239 15.7761 15 15.5 15z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PercentIcon;
