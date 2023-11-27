import * as React from 'react';
import { IconProps } from './types';

export const CornerUpLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 20.875C20.4832 20.875 20.875 20.4832 20.875 20V18.5608C20.875 16.9138 20.875 15.6242 20.7903 14.588C20.7042 13.5333 20.526 12.6645 20.1257 11.8788C19.4665 10.5852 18.4148 9.53346 17.1212 8.87433C16.3355 8.47402 15.4667 8.29582 14.412 8.20965C13.3758 8.12499 12.0862 8.12499 10.4392 8.125H6.11244L9.61872 4.61872C9.96043 4.27701 9.96043 3.72299 9.61872 3.38128C9.27701 3.03957 8.72299 3.03957 8.38128 3.38128L3.38128 8.38128C3.03957 8.72299 3.03957 9.27701 3.38128 9.61872L8.38128 14.6187C8.72299 14.9604 9.27701 14.9604 9.61872 14.6187C9.96043 14.277 9.96043 13.723 9.61872 13.3813L6.11244 9.875H10.4C12.0946 9.875 13.3129 9.87568 14.2695 9.95384C15.2159 10.0312 15.8289 10.1799 16.3267 10.4336C17.291 10.9249 18.0751 11.709 18.5664 12.6733C18.8201 13.1711 18.9688 13.7841 19.0462 14.7305C19.1243 15.6871 19.125 16.9054 19.125 18.6V20C19.125 20.4832 19.5168 20.875 20 20.875Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CornerUpLeftIcon;