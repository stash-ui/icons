import * as React from 'react';
import { IconProps } from './types';

export const CornerDownRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V5.42308C3.5 7.08373 3.5 8.36063 3.58341 9.3815C3.66768 10.4129 3.83958 11.227 4.20846 11.9509C4.83163 13.174 5.82601 14.1684 7.04906 14.7915C7.77303 15.1604 8.58706 15.3323 9.6185 15.4166C10.6394 15.5 11.9163 15.5 13.5769 15.5H18.7929L14.6464 19.6464C14.4512 19.8417 14.4512 20.1583 14.6464 20.3536C14.8417 20.5488 15.1583 20.5488 15.3536 20.3536L20.3536 15.3536C20.5488 15.1583 20.5488 14.8417 20.3536 14.6464L15.3536 9.64645C15.1583 9.45118 14.8417 9.45118 14.6464 9.64645C14.4512 9.84171 14.4512 10.1583 14.6464 10.3536L18.7929 14.5H13.6C11.9116 14.5 10.6754 14.4996 9.69993 14.4199C8.73034 14.3407 8.06255 14.1856 7.50305 13.9005C6.46816 13.3732 5.62677 12.5318 5.09946 11.4969C4.81438 10.9374 4.6593 10.2697 4.58008 9.30007C4.50039 8.32464 4.5 7.08841 4.5 5.4V4C4.5 3.72386 4.27614 3.5 4 3.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CornerDownRightIcon;
