import * as React from 'react';
import { IconProps } from './types';

export const ChartTrendUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 9C14 8.72386 14.2239 8.5 14.5 8.5H18C18.2761 8.5 18.5 8.72386 18.5 9V12.5C18.5 12.7761 18.2761 13 18 13C17.7239 13 17.5 12.7761 17.5 12.5V10.2071L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L9 12.7071L6.35355 15.3536C6.15829 15.5488 5.84171 15.5488 5.64645 15.3536C5.45118 15.1583 5.45118 14.8417 5.64645 14.6464L8.64645 11.6464C8.84171 11.4512 9.15829 11.4512 9.35355 11.6464L12 14.2929L16.7929 9.5H14.5C14.2239 9.5 14 9.27614 14 9Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendUpIcon;
