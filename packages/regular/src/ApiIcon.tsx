import * as React from 'react';
import { IconProps } from './types';

export const ApiIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1 2C7.78619 2 5.90425 3.84901 5.85115 6.15005C4.46128 6.81309 3.5 8.23101 3.5 9.875C3.5 11.9356 5.01019 13.6421 6.98426 13.9504C7.02143 13.9562 7.05899 13.9592 7.09662 13.9594L7.1 13.9594L7.1 16.1478C6.59708 16.39 6.25 16.9044 6.25 17.5C6.25 18.3284 6.92157 19 7.75 19C8.57843 19 9.25 18.3284 9.25 17.5C9.25 16.9872 8.99263 16.5344 8.6 16.2639V13.9662L11.35 13.9786L11.35 19.2007C10.9016 19.46 10.6 19.9448 10.6 20.5C10.6 21.3284 11.2716 22 12.1 22C12.9284 22 13.6 21.3284 13.6 20.5C13.6 19.9448 13.2983 19.46 12.85 19.2007V13.9853L16.0966 14L16.1 14V16.2309C15.6794 16.4966 15.4 16.9657 15.4 17.5C15.4 18.3284 16.0716 19 16.9 19C17.7284 19 18.4 18.3284 18.4 17.5C18.4 16.9244 18.0758 16.4245 17.6 16.173V13.688C18.9244 13.1093 19.85 11.7877 19.85 10.25C19.85 8.70581 18.9172 7.3807 17.5846 6.80558C17.5948 6.70499 17.6 6.60304 17.6 6.5C17.6 4.84315 16.2569 3.5 14.6 3.5C14.214 3.5 13.8444 3.57318 13.5049 3.70637C12.7305 2.67132 11.4941 2 10.1 2ZM7.35 6.25C7.35 4.73122 8.58122 3.5 10.1 3.5C11.1822 3.5 12.1199 4.12506 12.569 5.03726C12.6679 5.23811 12.8514 5.38429 13.0692 5.43582C13.2871 5.48736 13.5166 5.43887 13.695 5.3036C13.9466 5.11286 14.259 5 14.6 5C15.4284 5 16.1 5.67157 16.1 6.5C16.1 6.69172 16.0644 6.87336 16.0001 7.0399C15.9206 7.24594 15.9359 7.47656 16.042 7.67027C16.1481 7.86398 16.3342 8.00107 16.5506 8.04499C17.5774 8.25334 18.35 9.16229 18.35 10.25C18.35 11.4921 17.3435 12.4992 16.1016 12.5L16.1 12.5L7.16348 12.4597C5.93399 12.242 5 11.1669 5 9.875C5 8.69782 5.77544 7.69979 6.84519 7.36756C7.1893 7.2607 7.40878 6.92424 7.36792 6.56625C7.3561 6.46274 7.35 6.35723 7.35 6.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ApiIcon;
