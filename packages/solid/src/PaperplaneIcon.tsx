import * as React from 'react';
import { IconProps } from './types';

export const PaperplaneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.8442 13.4834C20.052 12.8839 20.052 11.1161 18.8442 10.5166L6.55245 4.41579C5.3243 3.80621 4.09416 4.90866 4.26706 6.13535L4.80685 9.96505C4.89399 10.5833 5.32078 11.1191 5.93527 11.3075C6.0955 11.3566 6.48552 11.4399 6.94735 11.5338C7.58304 11.6631 11.3367 12 11.3367 12C11.3367 12 7.58304 12.3369 6.94735 12.4662C6.48552 12.5601 6.0955 12.6434 5.93527 12.6925C5.32078 12.8809 4.89399 13.4167 4.80686 14.0349L4.26706 17.8647C4.09416 19.0913 5.32429 20.1938 6.55244 19.5842L18.8442 13.4834Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PaperplaneIcon;
