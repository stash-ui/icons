import * as React from 'react';
import { IconProps } from './types';

export const ParagraphIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 5.75C8.79086 5.75 7 7.54086 7 9.75C7 11.9591 8.79086 13.75 11 13.75H12V17.5C12 17.9142 12.3358 18.25 12.75 18.25C13.1642 18.25 13.5 17.9142 13.5 17.5V7.25H14.25V17.5C14.25 17.9142 14.5858 18.25 15 18.25C15.4142 18.25 15.75 17.9142 15.75 17.5V7.25H16.25C16.6642 7.25 17 6.91421 17 6.5C17 6.08579 16.6642 5.75 16.25 5.75H11Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ParagraphIcon;
