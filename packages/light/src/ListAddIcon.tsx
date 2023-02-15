import * as React from 'react';
import { IconProps } from './types';

export const ListAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.75 6C3.33579 6 3 6.33579 3 6.75 3 7.16421 3.33579 7.5 3.75 7.5 4.16421 7.5 4.5 7.16421 4.5 6.75 4.5 6.33579 4.16421 6 3.75 6zM6.75 6C6.33579 6 6 6.33579 6 6.75 6 7.16421 6.33579 7.5 6.75 7.5H17.25C17.6642 7.5 18 7.16421 18 6.75 18 6.33579 17.6642 6 17.25 6H6.75zM6.75 11C6.33579 11 6 11.3358 6 11.75 6 12.1642 6.33579 12.5 6.75 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75 14 11.3358 13.6642 11 13.25 11H6.75zM6 16.75C6 16.3358 6.33579 16 6.75 16H10.25C10.6642 16 11 16.3358 11 16.75 11 17.1642 10.6642 17.5 10.25 17.5H6.75C6.33579 17.5 6 17.1642 6 16.75zM3 11.75C3 11.3358 3.33579 11 3.75 11 4.16421 11 4.5 11.3358 4.5 11.75 4.5 12.1642 4.16421 12.5 3.75 12.5 3.33579 12.5 3 12.1642 3 11.75zM3.75 16C3.33579 16 3 16.3358 3 16.75 3 17.1642 3.33579 17.5 3.75 17.5 4.16421 17.5 4.5 17.1642 4.5 16.75 4.5 16.3358 4.16421 16 3.75 16zM14.5 16.45C14.5 16.0358 14.8358 15.7 15.25 15.7H17.8V13.25C17.8 12.8358 18.1358 12.5 18.55 12.5 18.9642 12.5 19.3 12.8358 19.3 13.25V15.7H21.75C22.1642 15.7 22.5 16.0358 22.5 16.45 22.5 16.8642 22.1642 17.2 21.75 17.2H19.3V19.75C19.3 20.1642 18.9642 20.5 18.55 20.5 18.1358 20.5 17.8 20.1642 17.8 19.75V17.2H15.25C14.8358 17.2 14.5 16.8642 14.5 16.45z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ListAddIcon;
