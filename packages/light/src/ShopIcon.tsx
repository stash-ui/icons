import * as React from 'react';
import { IconProps } from './types';

export const ShopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.0655 5.5C5.88987 5.5 5.72711 5.59215 5.63675 5.74275L3.3824 9.5L20.6162 9.5L18.3619 5.74275C18.2715 5.59215 18.1088 5.5 17.9331 5.5H6.0655ZM3.3824 10.5H4V18.5C4 19.3284 4.67157 20 5.5 20H6C6.82843 20 7.5 19.3284 7.5 18.5V13.5H10V18.5C10 19.3284 10.6716 20 11.5 20H18.5C19.3284 20 20 19.3284 20 18.5V10.5H20.6162C21.3935 10.5 21.8736 9.65203 21.4737 8.9855L19.2194 5.22826C18.9483 4.77645 18.46 4.5 17.9331 4.5H6.0655C5.5386 4.5 5.05034 4.77645 4.77926 5.22826L2.52491 8.9855C2.125 9.65203 2.60511 10.5 3.3824 10.5ZM5 18.5V10.5H19V18.5C19 18.7761 18.7761 19 18.5 19H11.5C11.2239 19 11 18.7761 11 18.5V13.2C11 12.8134 10.6866 12.5 10.3 12.5H7.2C6.8134 12.5 6.5 12.8134 6.5 13.2V18.5C6.5 18.7761 6.27614 19 6 19H5.5C5.22386 19 5 18.7761 5 18.5ZM13 16V13.25H17V16H13ZM12.9167 12.25C12.4104 12.25 12 12.6604 12 13.1667V16.0833C12 16.5896 12.4104 17 12.9167 17H17.0833C17.5896 17 18 16.5896 18 16.0833V13.1667C18 12.6604 17.5896 12.25 17.0833 12.25H12.9167Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ShopIcon;
