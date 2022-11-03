import * as React from 'react';
import { IconProps } from './types';

export const HeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.72203 6.80055C4.799 7.97606 4.46612 9.08116 4.5027 10.1106C4.53983 11.1554 4.95975 12.1784 5.63815 13.1692C7.00527 15.1658 9.33169 16.9065 11.2468 18.2603C11.6988 18.5798 12.2969 18.5799 12.7495 18.2606C14.6782 16.9001 17.0048 15.1592 18.3685 13.1646C19.0451 12.1749 19.4625 11.1534 19.4976 10.1097C19.5322 9.08117 19.1974 7.97649 18.2735 6.80049C16.6532 5.08904 14.3196 5.14066 12.7318 6.52224C12.3142 6.88558 11.6813 6.88554 11.2637 6.52234C9.67528 5.14074 7.34445 5.08888 5.72203 6.80055ZM4.97864 6.13129C6.99462 3.98558 9.94948 4.05391 11.92 5.76781C11.9381 5.78352 11.965 5.79475 11.9977 5.79474C12.0304 5.79474 12.0574 5.78352 12.0754 5.76783C14.0451 4.05397 17.0031 3.98546 19.0171 6.1315L19.0316 6.14701L19.0448 6.1637C20.1038 7.50417 20.5408 8.84074 20.497 10.1433C20.4536 11.4357 19.9389 12.6394 19.194 13.7289C17.7146 15.8928 15.2408 17.727 13.326 19.0778C12.5277 19.6409 11.4675 19.6409 10.6695 19.0768C8.76865 17.7331 6.2955 15.8992 4.81304 13.7341C4.06666 12.6441 3.54929 11.4394 3.50333 10.1461C3.457 8.84246 3.89183 7.50469 4.95062 6.1638L4.96393 6.14695L4.97864 6.13129Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default HeartIcon;
