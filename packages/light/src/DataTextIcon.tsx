import * as React from 'react';
import { IconProps } from './types';

export const DataTextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.52579 7.34189C7.59385 7.13772 7.78492 7 8.00014 7H8.75014C8.96535 7 9.15642 7.13772 9.22448 7.34189L12.2245 16.3419C12.3118 16.6039 12.1702 16.887 11.9082 16.9743 11.6463 17.0617 11.3631 16.9201 11.2758 16.6581L10.6398 14.75H6.11052L5.47448 16.6581C5.38715 16.9201 5.10399 17.0617 4.84202 16.9743 4.58005 16.887 4.43847 16.6039 4.52579 16.3419L7.52579 7.34189zM6.44385 13.75H10.3064L8.38976 8H8.36052L6.44385 13.75zM16.3751 11C15.2622 11 14.2501 12.0545 14.2501 13.5 14.2501 14.9455 15.2622 16 16.3751 16 17.4881 16 18.5001 14.9455 18.5001 13.5 18.5001 12.0545 17.4881 11 16.3751 11zM18.5001 10.9317C17.9513 10.3584 17.2124 10 16.3751 10 14.5886 10 13.2501 11.6318 13.2501 13.5 13.2501 15.3682 14.5886 17 16.3751 17 17.2124 17 17.9513 16.6416 18.5001 16.0683V16.5C18.5001 16.7761 18.724 17 19.0001 17 19.2763 17 19.5001 16.7761 19.5001 16.5V10.5C19.5001 10.2239 19.2763 10 19.0001 10 18.724 10 18.5001 10.2239 18.5001 10.5V10.9317z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DataTextIcon;
