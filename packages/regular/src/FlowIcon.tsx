import * as React from 'react';
import { IconProps } from './types';

export const FlowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1254 3.75C9.366 3.75 8.75039 4.36561 8.75039 5.125V8.875C8.75039 9.63439 9.366 10.25 10.1254 10.25H13.8754C14.6348 10.25 15.2504 9.63439 15.2504 8.875V5.125C15.2504 4.36561 14.6348 3.75 13.8754 3.75H10.1254ZM10.2504 8.75V5.25H13.7504V8.75H10.2504Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.52539 13.5C4.766 13.5 4.15039 14.1156 4.15039 14.875V18.625C4.15039 19.3844 4.766 20 5.52539 20H9.27539C10.0348 20 10.6504 19.3844 10.6504 18.625V14.875C10.6504 14.1156 10.0348 13.5 9.27539 13.5H5.52539ZM5.65039 18.5V15H9.15039V18.5H5.65039Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2504 14.875C13.2504 14.1156 13.866 13.5 14.6254 13.5H18.3754C19.1348 13.5 19.7504 14.1156 19.7504 14.875V18.625C19.7504 19.3844 19.1348 20 18.3754 20H14.6254C13.866 20 13.2504 19.3844 13.2504 18.625V14.875ZM14.7504 15V18.5H18.2504V15H14.7504Z"
          fill={color}
        />
        <path
          d="M15.5004 11.05H12.7504V10.5H11.2504V11.05H8.50039C7.53389 11.05 6.75039 11.8335 6.75039 12.8V13.3H8.25039V12.8C8.25039 12.6619 8.36232 12.55 8.50039 12.55H15.5004C15.6385 12.55 15.7504 12.6619 15.7504 12.8V13.3H17.2504V12.8C17.2504 11.8335 16.4669 11.05 15.5004 11.05Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default FlowIcon;
