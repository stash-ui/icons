import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.7556 9.40011C10.6868 8.64895 11.2636 8 12 8 12.7364 8 13.3132 8.64895 13.2444 9.40011L12.7503 13.5499C12.714 13.9467 12.389 14.25 12 14.25 11.611 14.25 11.286 13.9467 11.2497 13.5499L10.7556 9.40011zM13.25 16.75C13.25 17.4404 12.6904 18 12 18 11.3096 18 10.75 17.4404 10.75 16.75 10.75 16.0596 11.3096 15.5 12 15.5 12.6904 15.5 13.25 16.0596 13.25 16.75z"
          fill={color}
        />
        <path
          d="M13.0642 3.72132C12.3874 3.42623 11.6126 3.42623 10.9358 3.72132C10.4933 3.91428 10.151 4.28184 9.81773 4.75198C9.48639 5.21942 9.11828 5.85696 8.65158 6.66528L3.84853 14.9839C3.40508 15.7519 3.05431 16.3594 2.82685 16.8553C2.5982 17.3538 2.45609 17.8163 2.51228 18.2791C2.59829 18.9877 2.98957 19.6226 3.58163 20.0322C3.96475 20.2973 4.44283 20.4012 5.00396 20.4507C5.56277 20.5 6.28327 20.5 7.19832 20.5H16.8016C17.7167 20.5 18.4372 20.5 18.996 20.4507C19.5571 20.4012 20.0352 20.2973 20.4183 20.0322C21.0104 19.6226 21.4017 18.9877 21.4877 18.2791C21.5439 17.8163 21.4018 17.3538 21.1731 16.8553C20.9457 16.3594 20.5949 15.752 20.1515 14.984L15.3484 6.66531C14.8817 5.85698 14.5136 5.21942 14.1822 4.75198C13.849 4.28184 13.5067 3.91428 13.0642 3.72132ZM11.3355 4.63797C11.7574 4.45401 12.2426 4.45401 12.6645 4.63797C12.8521 4.71979 13.064 4.90366 13.3664 5.33027C13.6676 5.75511 14.0127 6.35189 14.4958 7.18863L19.2719 15.4606C19.7319 16.2571 20.0586 16.8241 20.2642 17.2722C20.4709 17.7228 20.5171 17.9767 20.495 18.1586C20.4444 18.5752 20.2132 18.9581 19.8494 19.2098C19.6847 19.3238 19.4206 19.4093 18.9081 19.4546C18.3985 19.4995 17.7222 19.5 16.7761 19.5H7.22389C6.27776 19.5 5.60147 19.4995 5.09186 19.4546C4.57938 19.4093 4.31523 19.3238 4.15057 19.2098C3.78674 18.9581 3.55556 18.5752 3.50499 18.1586C3.48291 17.9767 3.52911 17.7228 3.73579 17.2722C3.94134 16.8241 4.2681 16.2571 4.72804 15.4606L9.50413 7.18862C9.98725 6.35189 10.3324 5.75511 10.6336 5.33027C10.936 4.90366 11.1478 4.71979 11.3355 4.63797Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ExclamationTriangleIcon;
