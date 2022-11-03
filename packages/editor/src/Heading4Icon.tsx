import * as React from 'react';
import { IconProps } from './types';

export const Heading4Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.49536 5.45453V12H6.07739V9.36966H8.65658V12H10.2354V5.45453H8.65658V8.08166H6.07739V5.45453H4.49536zM11.6751 9.67967V10.9133H14.836V12H16.3157V10.9133H17.1307V9.66689H16.3157V7.90907H14.8871V9.66689H13.2443V9.61575L15.5742 5.45453H14.0593L11.6751 9.67967zM5 14.5C4.58579 14.5 4.25 14.8358 4.25 15.25 4.25 15.6642 4.58579 16 5 16H19C19.4142 16 19.75 15.6642 19.75 15.25 19.75 14.8358 19.4142 14.5 19 14.5H5zM5 17.5C4.58579 17.5 4.25 17.8358 4.25 18.25 4.25 18.6642 4.58579 19 5 19H14.45C14.8642 19 15.2 18.6642 15.2 18.25 15.2 17.8358 14.8642 17.5 14.45 17.5H5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Heading4Icon;
