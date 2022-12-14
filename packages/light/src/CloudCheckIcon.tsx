import * as React from 'react';
import { IconProps } from './types';

export const CloudCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 5.5C8.19897 5.5 5.88631 7.59432 5.54379 10.3022L5.5046 10.612L5.20902 10.7128C3.6327 11.2499 2.5 12.7433 2.5 14.5C2.5 16.7091 4.29086 18.5 6.5 18.5H17.5C19.7091 18.5 21.5 16.7091 21.5 14.5C21.5 12.2909 19.7091 10.5 17.5 10.5C17.3258 10.5 17.1545 10.5111 16.9865 10.5326L16.5066 10.594L16.4295 10.1163C16.007 7.49897 13.7365 5.5 11 5.5ZM4.59708 9.875C5.13017 6.82115 7.79366 4.5 11 4.5C14.0749 4.5 16.6503 6.63468 17.3267 9.50296C17.3842 9.50099 17.442 9.5 17.5 9.5C20.2614 9.5 22.5 11.7386 22.5 14.5C22.5 17.2614 20.2614 19.5 17.5 19.5H6.5C3.73858 19.5 1.5 17.2614 1.5 14.5C1.5 12.4116 2.78004 10.6234 4.59708 9.875Z"
          fill={color}
        />
        <path
          d="M14.3536 10.6464C14.5488 10.8417 14.5488 11.1583 14.3536 11.3536L10.3536 15.3536C10.1583 15.5488 9.84171 15.5488 9.64645 15.3536L7.64645 13.3536C7.45118 13.1583 7.45118 12.8417 7.64645 12.6464C7.84171 12.4512 8.15829 12.4512 8.35355 12.6464L10 14.2929L13.6464 10.6464C13.8417 10.4512 14.1583 10.4512 14.3536 10.6464Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CloudCheckIcon;
