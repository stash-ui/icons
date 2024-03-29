import * as React from 'react';
import { IconProps } from './types';

export const CornerUpLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 20.5C20.2761 20.5 20.5 20.2761 20.5 20V18.5769C20.5 16.9163 20.5 15.6394 20.4166 14.6185C20.3323 13.5871 20.1604 12.773 19.7915 12.0491C19.1684 10.826 18.174 9.83163 16.9509 9.20846C16.227 8.83958 15.4129 8.66768 14.3815 8.58341C13.3606 8.5 12.0837 8.5 10.4231 8.5H5.20711L9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645C9.15829 3.45119 8.84171 3.45119 8.64645 3.64645L3.64645 8.64645C3.45118 8.84171 3.45118 9.15829 3.64645 9.35355L8.64645 14.3536C8.84171 14.5488 9.15829 14.5488 9.35355 14.3536C9.54882 14.1583 9.54882 13.8417 9.35355 13.6464L5.20711 9.5H10.4C12.0884 9.5 13.3246 9.50039 14.3001 9.58008C15.2697 9.6593 15.9374 9.81438 16.4969 10.0995C17.5318 10.6268 18.3732 11.4682 18.9005 12.5031C19.1856 13.0626 19.3407 13.7303 19.4199 14.6999C19.4996 15.6754 19.5 16.9116 19.5 18.6V20C19.5 20.2761 19.7239 20.5 20 20.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CornerUpLeftIcon;
