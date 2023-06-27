import * as React from 'react';
import { IconProps } from './types';

export const ChevronDoubleLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.1215 16.7071C17.7309 17.0976 17.0978 17.0976 16.7073 16.7071L12.0002 12L16.7073 7.29289C17.0978 6.90237 17.7309 6.90237 18.1215 7.29289C18.512 7.68342 18.512 8.31658 18.1215 8.70711L14.8286 12L18.1215 15.2929C18.512 15.6834 18.512 16.3166 18.1215 16.7071Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.7073 16.7071C11.3167 17.0976 10.6836 17.0976 10.293 16.7071L5.58594 12L10.293 7.29289C10.6836 6.90237 11.3167 6.90237 11.7073 7.29289C12.0978 7.68342 12.0978 8.31658 11.7073 8.70711L8.41436 12L11.7073 15.2929C12.0978 15.6834 12.0978 16.3166 11.7073 16.7071Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ChevronDoubleLeftIcon;
