import * as React from 'react';
import { IconProps } from './types';

export const NumberedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.53403 9.37168H5.94554V6C5.94554 5.86193 5.83361 5.75 5.69554 5.75H5.24794L4.13893 6.30012C4.03797 6.3502 3.98299 6.46164 4.0047 6.57222L4.09795 7.04737C4.12937 7.20749 4.30328 7.29508 4.45064 7.22499L4.87034 7.02539V9.37168H4.30763C4.16956 9.37168 4.05763 9.48361 4.05763 9.62168V10.1C4.05763 10.2381 4.16956 10.35 4.30763 10.35H6.53403C6.6721 10.35 6.78403 10.2381 6.78403 10.1V9.62168C6.78403 9.48361 6.6721 9.37168 6.53403 9.37168zM4.02288 17.8277C3.98919 17.7411 4.00629 17.643 4.0673 17.5729L5.26358 16.1987C5.34093 16.1138 5.42257 16.0177 5.50851 15.9105 5.59444 15.8032 5.67608 15.6937 5.75343 15.582 5.83507 15.4658 5.89952 15.3541 5.94679 15.2468 5.99835 15.1396 6.02413 15.0435 6.02413 14.9586 6.02413 14.8692 6.0048 14.791 5.96612 14.7239 5.93175 14.6569 5.87804 14.6055 5.80499 14.5698 5.73624 14.5295 5.64601 14.5094 5.53429 14.5094 5.43976 14.5094 5.34737 14.5362 5.25714 14.5899 5.1669 14.6435 5.08097 14.7239 4.99933 14.8312 4.96723 14.8738 4.93588 14.9215 4.90526 14.9742 4.8299 15.1038 4.66586 15.1606 4.53603 15.0856L4.14707 14.8609C4.0432 14.8009 3.9952 14.6748 4.04421 14.5653 4.12531 14.3841 4.22669 14.2202 4.34835 14.0737 4.51593 13.8771 4.71144 13.7229 4.93487 13.6111 5.15831 13.4994 5.39679 13.4458 5.6503 13.4503 5.91671 13.4503 6.15519 13.5084 6.36573 13.6246 6.58058 13.7407 6.7503 13.9016 6.87491 14.1072 7.00382 14.3083 7.06827 14.5452 7.06827 14.8178 7.06827 14.9384 7.05108 15.0636 7.01671 15.1932 6.98663 15.3228 6.93507 15.4613 6.86202 15.6088 6.79327 15.7518 6.70089 15.906 6.58487 16.0713 6.46886 16.2367 6.32706 16.4155 6.15948 16.6076L5.60381 17.2378H7.01808C7.15615 17.2378 7.26808 17.3497 7.26808 17.4878V18C7.26808 18.1381 7.15615 18.25 7.01808 18.25H4.35819C4.25511 18.25 4.16259 18.1867 4.12521 18.0907L4.02288 17.8277zM10.75 7C10.3358 7 10 7.33579 10 7.75 10 8.16421 10.3358 8.5 10.75 8.5H19.25C19.6642 8.5 20 8.16421 20 7.75 20 7.33579 19.6642 7 19.25 7H10.75zM10.75 11.25C10.3358 11.25 10 11.5858 10 12 10 12.4142 10.3358 12.75 10.75 12.75H19.25C19.6642 12.75 20 12.4142 20 12 20 11.5858 19.6642 11.25 19.25 11.25H10.75zM10.75 15.5C10.3358 15.5 10 15.8358 10 16.25 10 16.6642 10.3358 17 10.75 17H19.25C19.6642 17 20 16.6642 20 16.25 20 15.8358 19.6642 15.5 19.25 15.5H10.75z"
          fill={color}
        />
      </svg>
    );
  }
);

export default NumberedIcon;
