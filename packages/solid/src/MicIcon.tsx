import * as React from 'react';
import { IconProps } from './types';

export const MicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 5.5C8.75 3.70508 10.2051 2.25 12 2.25 13.7949 2.25 15.25 3.70507 15.25 5.5V8.88844C15.25 9.10276 15.1583 9.30685 14.9981 9.44918 14.8378 9.59151 14.6244 9.65849 14.4115 9.63321 13.7434 9.55385 12.9426 9.5 12 9.5 11.0574 9.5 10.2566 9.55385 9.58845 9.63321 9.37563 9.65849 9.16216 9.59151 9.00192 9.44918 8.84169 9.30685 8.75 9.10276 8.75 8.88844V5.5zM9.39965 10.1611C10.0936 10.0674 10.9558 10 12 10 13.0442 10 13.9064 10.0674 14.6003 10.1611 14.9724 10.2114 15.25 10.529 15.25 10.9044V11.3884C15.25 11.6028 15.1583 11.8068 14.9981 11.9492 14.8378 12.0915 14.6244 12.1585 14.4115 12.1332 13.7434 12.0539 12.9426 12 12 12 11.0574 12 10.2566 12.0539 9.58845 12.1332 9.37563 12.1585 9.16216 12.0915 9.00192 11.9492 8.84169 11.8068 8.75 11.6028 8.75 11.3884V10.9044C8.75 10.529 9.02759 10.2114 9.39965 10.1611zM9.39965 12.6611C10.0936 12.5674 10.9558 12.5 12 12.5 13.0442 12.5 13.9064 12.5674 14.6004 12.6611 14.9724 12.7114 15.25 13.029 15.25 13.4044V13.5C15.25 15.2949 13.7949 16.75 12 16.75 10.2051 16.75 8.75 15.2949 8.75 13.5V13.4044C8.75 13.029 9.02759 12.7114 9.39965 12.6611z"
          fill={color}
        />
        <path
          d="M7.75 12C7.75 11.5858 7.41421 11.25 7 11.25C6.58579 11.25 6.25 11.5858 6.25 12V13.5C6.25 14.2437 6.39156 14.9561 6.64988 15.6105C6.94906 16.3684 7.40413 17.0467 7.97497 17.6063C8.84325 18.4575 9.98202 19.0361 11.25 19.2015V20.25H9C8.58579 20.25 8.25 20.5858 8.25 21C8.25 21.4142 8.58579 21.75 9 21.75H15C15.4142 21.75 15.75 21.4142 15.75 21C15.75 20.5858 15.4142 20.25 15 20.25H12.75V19.2015C15.5713 18.834 17.75 16.4214 17.75 13.5V12C17.75 11.5858 17.4142 11.25 17 11.25C16.5858 11.25 16.25 11.5858 16.25 12V13.5C16.25 15.8472 14.3472 17.75 12 17.75C10.8414 17.75 9.7924 17.2874 9.02503 16.5351C8.60203 16.1205 8.26577 15.6187 8.0451 15.0597C7.85488 14.5778 7.75 14.0521 7.75 13.5V12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default MicIcon;
