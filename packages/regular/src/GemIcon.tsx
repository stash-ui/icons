import * as React from 'react';
import { IconProps } from './types';

export const GemIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.7403 4.26514C16.427 4.26514 17.0743 4.5889 17.4864 5.13818L20.2272 8.79351L20.338 8.95545C20.8502 9.78297 20.7539 10.8618 20.0811 11.5868L13.5985 18.5674C12.7891 19.4388 11.445 19.4944 10.569 18.7318L10.401 18.5674L3.91828 11.5868C3.20092 10.8135 3.13941 9.63747 3.77217 8.79351L6.51306 5.13818L6.67866 4.94214C7.08775 4.51246 7.65851 4.26528 8.25914 4.26514H15.7403ZM11.7708 17.295L11.8207 17.3388C11.9452 17.4263 12.1206 17.4111 12.2286 17.295L17.6702 11.4346H6.3292L11.7708 17.295ZM5.53165 9.56427H10.1306L7.50177 6.93662L5.53165 9.56427ZM13.87 9.56427H18.4678L16.4964 6.93662L13.87 9.56427ZM11.9997 8.78864L14.6541 6.13542H9.34649L11.9997 8.78864Z"
          fill="#71717A"
        />
      </svg>
    );
  }
);

export default GemIcon;
