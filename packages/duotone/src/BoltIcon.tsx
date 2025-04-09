import * as React from 'react';
import { IconProps } from './types';

export const BoltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7 11.5L15.5 4L13.5 11H18L8 19.5L11.5 11.5H7Z" fill={color} fillOpacity="0.5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9004 3.36579C16.182 3.54357 16.3127 3.8858 16.2212 4.20605L14.4943 10.25H18C18.3145 10.25 18.5955 10.4461 18.704 10.7413C18.8125 11.0364 18.7253 11.3678 18.4858 11.5715L8.48577 20.0715C8.2197 20.2976 7.83275 20.3102 7.55252 20.1019C7.2723 19.8935 7.17295 19.5193 7.31292 19.1994L10.3533 12.25H7.00003C6.68815 12.25 6.40881 12.057 6.2985 11.7653C6.1882 11.4735 6.26995 11.144 6.50382 10.9376L15.0038 3.43763C15.2536 3.21726 15.6187 3.188 15.9004 3.36579ZM8.98361 10.75H11.5C11.7531 10.75 11.9892 10.8777 12.1277 11.0895C12.2662 11.3013 12.2886 11.5687 12.1872 11.8006L9.98894 16.8251L15.9596 11.75H13.5C13.2647 11.75 13.043 11.6395 12.9013 11.4517C12.7595 11.2638 12.7142 11.0203 12.7789 10.794L14.075 6.25761L8.98361 10.75Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoltIcon;
