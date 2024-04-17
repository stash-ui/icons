import * as React from 'react';
import { IconProps } from './types';

export const CodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.0142 5.75307C14.0852 5.44094 13.8897 5.1304 13.5775 5.05946C13.2654 4.98852 12.9548 5.18405 12.8839 5.49618L9.98601 18.2469C9.91507 18.559 10.1106 18.8696 10.4227 18.9405C10.7349 19.0115 11.0454 18.8159 11.1163 18.5038L14.0142 5.75307ZM15.2495 15.1571C15.1064 14.8708 15.2224 14.5226 15.5087 14.3795L20.2677 12L15.5087 9.62048C15.2224 9.47733 15.1064 9.1292 15.2495 8.8429C15.3927 8.5566 15.7408 8.44055 16.0271 8.5837L21.6155 11.3779C22.1282 11.6342 22.1282 12.3658 21.6155 12.6221L16.0271 15.4163C15.7408 15.5594 15.3927 15.4434 15.2495 15.1571ZM8.75048 8.84291C8.89363 9.1292 8.77758 9.47734 8.49128 9.62049L3.73228 12L8.49128 14.3795C8.77758 14.5226 8.89363 14.8708 8.75048 15.1571C8.60733 15.4434 8.25919 15.5594 7.97289 15.4163L2.38446 12.6221C1.87185 12.3658 1.87185 11.6342 2.38446 11.3779L7.97289 8.58371C8.25919 8.44056 8.60733 8.55661 8.75048 8.84291Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CodeIcon;