import * as React from 'react';
import { IconProps } from './types';

export const BurgerArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44772 17 6 17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6zM4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H20.1893L18.9697 10.0303C18.6768 9.73744 18.6768 9.26256 18.9697 8.96967 19.2626 8.67678 19.7374 8.67678 20.0303 8.96967L22.5303 11.4697C22.8232 11.7626 22.8232 12.2374 22.5303 12.5303L20.0303 15.0303C19.7374 15.3232 19.2626 15.3232 18.9697 15.0303 18.6768 14.7374 18.6768 14.2626 18.9697 13.9697L20.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12zM4 17C3.44772 17 3 17.4477 3 18 3 18.5523 3.44772 19 4 19H16C16.5523 19 17 18.5523 17 18 17 17.4477 16.5523 17 16 17H4z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BurgerArrowRightIcon;
