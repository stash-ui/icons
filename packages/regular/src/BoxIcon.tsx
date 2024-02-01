import * as React from 'react';
import { IconProps } from './types';

export const BoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.54431 8.38525C3.4405 8.57211 3.40077 8.78358 3.42473 8.98914C3.42025 9.03901 3.41797 9.08951 3.41797 9.14054V16.3689C3.41797 18.4019 5.06606 20.05 7.09907 20.05H16.2014C18.2344 20.05 19.8825 18.4019 19.8825 16.3689V9.14054C19.8825 9.0895 19.8802 9.03899 19.8757 8.98911C19.8997 8.78356 19.86 8.5721 19.7562 8.38525L17.079 3.5664C16.9019 3.24768 16.566 3.05002 16.2014 3.05002H7.09906C6.73446 3.05002 6.39853 3.24768 6.22147 3.5664L3.54431 8.38525ZM5.42584 16.3689V9.87674H9.10693V12.1523C9.10693 13.0764 9.85606 13.8256 10.7802 13.8256H12.788C13.7121 13.8256 14.4613 13.0764 14.4613 12.1523V9.87674H17.8746V16.3689C17.8746 17.293 17.1255 18.0421 16.2014 18.0421H7.09907C6.17497 18.0421 5.42584 17.293 5.42584 16.3689ZM14.2802 7.46732H16.9493L15.6107 5.05789L13.936 5.05789L14.2802 7.46732ZM9.63217 5.05789L7.68978 5.05789L6.3512 7.46732H9.28797L9.63217 5.05789Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoxIcon;
