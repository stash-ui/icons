import * as React from 'react';
import { IconProps } from './types';

export const SpinnerIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M12 2.5C11.1716 2.5 10.5 3.17157 10.5 4C10.5 4.82843 11.1716 5.5 12 5.5C12.8284 5.5 13.5 4.82843 13.5 4C13.5 3.17157 12.8284 2.5 12 2.5Z"
          fill={color}
        />
        <path
          d="M5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12Z"
          fill={color}
        />
        <path
          d="M7.40381 7.4038C7.98959 6.81801 7.98959 5.86827 7.40381 5.28248C6.81802 4.69669 5.86827 4.69669 5.28249 5.28248C4.6967 5.86827 4.6967 6.81801 5.28249 7.4038C5.86827 7.98959 6.81802 7.98959 7.40381 7.4038Z"
          fill={color}
        />
        <g opacity="0.5">
          <path
            d="M21.5006 12C21.5006 11.1716 20.829 10.5 20.0006 10.5C19.1722 10.5 18.5006 11.1716 18.5006 12C18.5006 12.8284 19.1722 13.5 20.0006 13.5C20.829 13.5 21.5006 12.8284 21.5006 12Z"
            fill={color}
          />
          <path
            d="M12.0006 18.5C11.1722 18.5 10.5006 19.1716 10.5006 20C10.5006 20.8284 11.1722 21.5 12.0006 21.5C12.829 21.5 13.5006 20.8284 13.5006 20C13.5006 19.1716 12.829 18.5 12.0006 18.5Z"
            fill={color}
          />
          <path
            d="M18.7181 18.7175C19.3039 18.1317 19.3039 17.182 18.7181 16.5962C18.1323 16.0104 17.1826 16.0104 16.5968 16.5962C16.011 17.182 16.011 18.1317 16.5968 18.7175C17.1826 19.3033 18.1323 19.3033 18.7181 18.7175Z"
            fill={color}
          />
          <path
            d="M5.28309 18.7175C5.86888 19.3033 6.81862 19.3033 7.40441 18.7175C7.9902 18.1317 7.9902 17.1819 7.40441 16.5962C6.81862 16.0104 5.86888 16.0104 5.28309 16.5962C4.6973 17.1819 4.6973 18.1317 5.28309 18.7175Z"
            fill={color}
          />
        </g>
      </svg>
    );
  }
);

export default SpinnerIcon;