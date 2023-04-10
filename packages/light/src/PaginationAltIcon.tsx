import * as React from 'react';
import { IconProps } from './types';

export const PaginationAltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 15.1304V10.5652C8.75 10.205 8.47018 9.91302 8.125 9.91302H7.5M7.3 17.7391H16.7C18.3802 17.7391 19.2202 17.7391 19.862 17.3979C20.4265 17.0978 20.8854 16.6189 21.173 16.0299C21.5 15.3602 21.5 14.4836 21.5 12.7304V12.313C21.5 10.5598 21.5 9.68321 21.173 9.01357C20.8854 8.42454 20.4265 7.94564 19.862 7.64552C19.2202 7.30432 18.3802 7.30432 16.7 7.30432H7.3C5.61984 7.30432 4.77976 7.30432 4.13803 7.64552C3.57354 7.94564 3.1146 8.42454 2.82698 9.01357C2.5 9.68321 2.5 10.5598 2.5 12.313V12.7304C2.5 14.4836 2.5 15.3602 2.82698 16.0299C3.1146 16.6189 3.57354 17.0978 4.13803 17.3979C4.77976 17.7391 5.61984 17.7391 7.3 17.7391ZM17 12L16 13.0435L15 12H17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default PaginationAltIcon;