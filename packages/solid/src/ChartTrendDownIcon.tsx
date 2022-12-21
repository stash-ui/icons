import * as React from 'react';
import { IconProps } from './types';

export const ChartTrendDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6464 8.64645C11.8417 8.45118 12.1583 8.45118 12.3536 8.64645L15 11.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L15.3536 12.3536C15.1583 12.5488 14.8417 12.5488 14.6464 12.3536L12 9.70711L7.20711 14.5H9.5C9.77614 14.5 10 14.7239 10 15C10 15.2761 9.77614 15.5 9.5 15.5H6C5.72386 15.5 5.5 15.2761 5.5 15V11.5C5.5 11.2239 5.72386 11 6 11C6.27614 11 6.5 11.2239 6.5 11.5V13.7929L11.6464 8.64645Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartTrendDownIcon;
