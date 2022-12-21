import * as React from 'react';
import { IconProps } from './types';

export const TimesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.05071 7.05025C7.44123 6.65972 8.0744 6.65972 8.46492 7.05025L12.0005 10.5858L15.536 7.05025C15.9265 6.65972 16.5597 6.65972 16.9502 7.05025C17.3407 7.44077 17.3407 8.07394 16.9502 8.46446L13.4147 12L16.9502 15.5355C17.3407 15.9261 17.3407 16.5592 16.9502 16.9497C16.5597 17.3403 15.9265 17.3403 15.536 16.9497L12.0005 13.4142L8.46492 16.9497C8.0744 17.3403 7.44123 17.3403 7.05071 16.9497C6.66018 16.5592 6.66018 15.9261 7.05071 15.5355L10.5862 12L7.05071 8.46446C6.66018 8.07394 6.66018 7.44077 7.05071 7.05025Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TimesIcon;
