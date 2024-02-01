import * as React from 'react';
import { IconProps } from './types';

export const FlaskIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.69026 5.19626C8.20374 5.19626 7.80934 5.59066 7.80934 6.07718C7.80934 6.55431 8.18868 6.94285 8.66222 6.95766L9.00841 10.9244C9.03247 11.2001 8.97812 11.4769 8.85164 11.7231L5.69858 17.8591C5.02002 19.1796 5.97883 20.7503 7.46349 20.7503H16.5373C18.0219 20.7503 18.9808 19.1796 18.3022 17.8591L15.1491 11.7231C15.0227 11.4769 14.9683 11.2001 14.9924 10.9244L15.3386 6.95766C15.8121 6.94285 16.1914 6.55431 16.1914 6.07718C16.1914 5.59066 15.797 5.19626 15.3105 5.19626H8.69026ZM13.57 6.9581H10.4308L10.7636 10.7712C10.8165 11.3777 10.697 11.9868 10.4187 12.5283L7.26563 18.6644C7.18956 18.8124 7.29705 18.9885 7.46349 18.9885H16.5373C16.7037 18.9885 16.8112 18.8124 16.7351 18.6644L13.5821 12.5283C13.3038 11.9868 13.1843 11.3777 13.2372 10.7712L13.57 6.9581Z"
          fill={color}
        />
        <g opacity="0.5">
          <path
            d="M14.7247 1.6993C14.7247 1.07027 15.2346 0.560333 15.8636 0.560333C16.4927 0.560333 17.0026 1.07027 17.0026 1.6993C17.0026 2.32833 16.4927 2.83827 15.8636 2.83827C15.2346 2.83827 14.7247 2.32833 14.7247 1.6993Z"
            fill={color}
          />
          <path
            d="M11.9662 3.46114C11.9662 2.83211 12.4761 2.32217 13.1052 2.32217C13.7342 2.32217 14.2441 2.83211 14.2441 3.46114C14.2441 4.09017 13.7342 4.60011 13.1052 4.60011C12.4761 4.60011 11.9662 4.09017 11.9662 3.46114Z"
            fill={color}
          />
          <path
            d="M16.2403 20.4566C17.6804 20.4566 18.4611 18.7713 17.53 17.6728L14.6853 14.3169H9.21484L6.42466 17.688C5.51241 18.7902 6.29633 20.4566 7.72708 20.4566H16.2403Z"
            fill={color}
          />
        </g>
      </svg>
    );
  }
);

export default FlaskIcon;
