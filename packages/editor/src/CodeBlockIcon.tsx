import * as React from 'react';
import { IconProps } from './types';

export const CodeBlockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0706 6.4783C14.4585 6.62374 14.655 7.05605 14.5095 7.44389L10.895 17.0828C10.7495 17.4706 10.3172 17.6671 9.92937 17.5217C9.54152 17.3762 9.34502 16.9439 9.49046 16.5561L13.105 6.9172C13.2505 6.52936 13.6828 6.33286 14.0706 6.4783ZM8.39328 8.55191C8.63404 8.88897 8.55597 9.35738 8.21891 9.59814L4.85632 12L8.21891 14.4018C8.55597 14.6426 8.63404 15.111 8.39328 15.4481C8.15253 15.7851 7.68412 15.8632 7.34706 15.6224L3.81635 13.1005C3.06122 12.5611 3.06122 11.4389 3.81635 10.8995L7.34706 8.37754C7.68412 8.13678 8.15253 8.21485 8.39328 8.55191ZM15.6067 8.55191C15.8475 8.21485 16.3159 8.13678 16.6529 8.37754L20.1837 10.8995C20.9388 11.4388 20.9388 12.5611 20.1837 13.1005L16.6529 15.6224C16.3159 15.8632 15.8475 15.7851 15.6067 15.4481C15.366 15.111 15.444 14.6426 15.7811 14.4018L19.1437 12L15.7811 9.59814C15.444 9.35738 15.366 8.88897 15.6067 8.55191Z"
        />
      </svg>
    );
  }
);

export default CodeBlockIcon;