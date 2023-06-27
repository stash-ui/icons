import * as React from 'react';
import { IconProps } from './types';

export const PeaceSymbolIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 3.51446C7.03831 3.77327 3.5 7.47343 3.5 12C3.5 13.822 4.07324 15.51 5.04919 16.8937L11.5 10.4429V3.51446ZM12.5 3.51446V10.4429L18.9508 16.8937C19.9268 15.51 20.5 13.822 20.5 12C20.5 7.47343 16.9617 3.77327 12.5 3.51446ZM18.3233 17.6804L12.5 11.8571V20.4855C14.8093 20.3516 16.8713 19.2957 18.3233 17.6804ZM11.5 20.4855V11.8571L5.67669 17.6804C7.12868 19.2957 9.19065 20.3516 11.5 20.4855ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PeaceSymbolIcon;
