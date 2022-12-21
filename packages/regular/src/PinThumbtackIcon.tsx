import * as React from 'react';
import { IconProps } from './types';

export const PinThumbtackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.24967 4.5C7.24967 3.5335 8.03317 2.75 8.99967 2.75H14.9997C15.9662 2.75 16.7497 3.5335 16.7497 4.5 16.7497 5.56267 15.8604 6.25 14.8589 6.25L15.4218 10.378C17.2566 10.8989 18.373 12.5426 18.7351 14.3529 18.8265 14.8098 18.4657 15.25 17.9997 15.25H5.99967C5.53368 15.25 5.17284 14.8098 5.26423 14.3529 5.62629 12.5426 6.74278 10.8989 8.57755 10.378L9.14045 6.25C8.13893 6.25 7.24967 5.56267 7.24967 4.5zM12.7497 16.5C12.7497 16.0858 12.4139 15.75 11.9997 15.75 11.5855 15.75 11.2497 16.0858 11.2497 16.5V20.5C11.2497 20.9142 11.5855 21.25 11.9997 21.25 12.4139 21.25 12.7497 20.9142 12.7497 20.5V16.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PinThumbtackIcon;
