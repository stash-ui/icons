import * as React from 'react';
import { IconProps } from './types';

export const ArrowRetryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6459 18C11.6459 18.2761 11.422 18.5 11.1459 18.5C7.48686 18.5 4.5 15.6011 4.5 12C4.5 8.39889 7.48686 5.5 11.1459 5.5C14.3515 5.5 17.0413 7.72501 17.6586 10.6979L18.5696 9.15746C18.7102 8.91977 19.0168 8.84104 19.2545 8.98161C19.4922 9.12217 19.5709 9.42881 19.4304 9.6665L17.8007 12.4222C17.6622 12.6564 17.3618 12.7368 17.1248 12.6032L14.3021 11.0122C14.0616 10.8766 13.9765 10.5717 14.1121 10.3312C14.2477 10.0906 14.5526 10.0055 14.7931 10.1411L16.7378 11.2372C16.3571 8.56883 14.0079 6.5 11.1459 6.5C8.01636 6.5 5.5 8.97369 5.5 12C5.5 15.0263 8.01636 17.5 11.1459 17.5C11.422 17.5 11.6459 17.7239 11.6459 18Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowRetryIcon;
