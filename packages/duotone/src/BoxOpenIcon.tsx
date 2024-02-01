import * as React from 'react';
import { IconProps } from './types';

export const BoxOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.90039 9.89494L7.84799 10.9716C8.29922 11.0946 8.77935 10.9236 9.0512 10.543L12.0018 6.41222L14.9524 10.543C15.2242 10.9236 15.7043 11.0946 16.1556 10.9716L20.1019 9.89529V16.2677C20.1019 16.7582 19.782 17.1914 19.3131 17.3356L12.2864 19.4977L4.71078 17.3333C4.2311 17.1962 3.90039 16.7578 3.90039 16.2589V9.89494Z"
          fill={color}
        />
        <path
          opacity="0.5"
          d="M4.90608 5.01524C4.47238 4.94296 4.0366 5.13175 3.79271 5.49759L2.18835 7.90413C1.76531 8.53869 2.08826 9.40122 2.82404 9.60189L7.84621 10.9716C8.29744 11.0946 8.77757 10.9236 9.04942 10.543L12 6.41223L14.9506 10.543C15.2224 10.9236 15.7026 11.0946 16.1538 10.9716L21.176 9.60189C21.9117 9.40122 22.2347 8.53869 21.8117 7.90413L20.2073 5.49759C19.9634 5.13175 19.5276 4.94296 19.0939 5.01524L12 6.19756L4.90608 5.01524Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BoxOpenIcon;
