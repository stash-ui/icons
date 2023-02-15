import * as React from 'react';
import { IconProps } from './types';

export const InfinityIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 9.25C6.74026 9.25 6.05448 9.55644 5.55546 10.0555C5.05644 10.5545 4.75 11.2403 4.75 12C4.75 12.7597 5.05644 13.4455 5.55546 13.9445C6.05448 14.4436 6.74026 14.75 7.5 14.75C8.15156 14.75 8.74713 14.525 9.21816 14.1474C9.75681 13.7156 10.5435 13.8022 10.9753 14.3408C11.4071 14.8795 11.3205 15.6662 10.7818 16.098C9.88327 16.8183 8.74034 17.25 7.5 17.25C6.0506 17.25 4.73638 16.661 3.78769 15.7123C2.83899 14.7636 2.25 13.4494 2.25 12C2.25 10.5506 2.83899 9.23638 3.78769 8.28769C4.73638 7.33899 6.0506 6.75 7.5 6.75C8.92021 6.75 10.1215 7.19687 11.2123 8.28769C12.1137 9.18909 12.6153 10.3539 13.0193 11.292C13.5013 12.4113 13.8838 13.2729 14.5555 13.9445C15.0545 14.4436 15.7403 14.75 16.5 14.75C17.2597 14.75 17.9455 14.4436 18.4445 13.9445C18.9436 13.4455 19.25 12.7597 19.25 12C19.25 11.2403 18.9436 10.5545 18.4445 10.0555C17.9455 9.55644 17.2597 9.25 16.5 9.25C15.8484 9.25 15.2529 9.47503 14.7818 9.85262C14.2432 10.2844 13.4565 10.1978 13.0247 9.65915C12.5929 9.1205 12.6795 8.3338 13.2182 7.902C14.1167 7.18169 15.2597 6.75 16.5 6.75C17.9494 6.75 19.2636 7.33899 20.2123 8.28769C21.161 9.23638 21.75 10.5506 21.75 12C21.75 13.4494 21.161 14.7636 20.2123 15.7123C19.2636 16.661 17.9494 17.25 16.5 17.25C15.0506 17.25 13.7364 16.661 12.7877 15.7123C11.8636 14.7883 11.2997 13.6156 10.7881 12.4315C10.3229 11.3551 9.99108 10.602 9.44454 10.0555C8.84456 9.45547 8.28893 9.25 7.5 9.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default InfinityIcon;
