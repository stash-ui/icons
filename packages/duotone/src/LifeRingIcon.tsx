import * as React from 'react';
import { IconProps } from './types';

export const LifeRingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12Z"
          fill={color}
        />
        <path
          d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M6.69648 4.57537C6.89174 4.38011 7.20832 4.38011 7.40358 4.57537L10.5856 7.75735C10.7808 7.95261 10.7808 8.2692 10.5856 8.46446C10.3903 8.65972 10.0737 8.65972 9.87846 8.46446L6.69648 5.28248C6.50122 5.08722 6.50122 4.77063 6.69648 4.57537ZM17.3031 4.57537C17.4983 4.77063 17.4983 5.08722 17.3031 5.28248L14.1211 8.46446C13.9258 8.65972 13.6093 8.65972 13.414 8.46446C13.2187 8.2692 13.2187 7.95261 13.414 7.75735L16.596 4.57537C16.7912 4.38011 17.1078 4.38011 17.3031 4.57537ZM4.57516 6.69669C4.77042 6.50143 5.087 6.50143 5.28226 6.69669L8.46424 9.87867C8.65951 10.0739 8.65951 10.3905 8.46424 10.5858C8.26898 10.781 7.9524 10.781 7.75714 10.5858L4.57516 7.4038C4.3799 7.20854 4.3799 6.89195 4.57516 6.69669ZM19.4244 6.69669C19.6197 6.89195 19.6197 7.20854 19.4244 7.4038L16.2424 10.5858C16.0472 10.781 15.7306 10.781 15.5353 10.5858C15.34 10.3905 15.34 10.0739 15.5353 9.87867L18.7173 6.69669C18.9126 6.50143 19.2291 6.50143 19.4244 6.69669ZM8.46424 13.4142C8.65951 13.6095 8.65951 13.9261 8.46424 14.1213L5.28226 17.3033C5.087 17.4986 4.77042 17.4986 4.57516 17.3033C4.3799 17.108 4.3799 16.7914 4.57516 16.5962L7.75714 13.4142C7.9524 13.2189 8.26898 13.2189 8.46424 13.4142ZM15.5353 13.4142C15.7306 13.2189 16.0472 13.2189 16.2424 13.4142L19.4244 16.5962C19.6197 16.7914 19.6197 17.108 19.4244 17.3033C19.2291 17.4986 18.9126 17.4986 18.7173 17.3033L15.5353 14.1213C15.34 13.9261 15.34 13.6095 15.5353 13.4142ZM10.5856 15.5355C10.7808 15.7308 10.7808 16.0474 10.5856 16.2426L7.40358 19.4246C7.20832 19.6199 6.89174 19.6199 6.69648 19.4246C6.50122 19.2294 6.50122 18.9128 6.69648 18.7175L9.87846 15.5355C10.0737 15.3403 10.3903 15.3403 10.5856 15.5355ZM13.414 15.5355C13.6093 15.3403 13.9258 15.3403 14.1211 15.5355L17.3031 18.7175C17.4983 18.9128 17.4983 19.2294 17.3031 19.4246C17.1078 19.6199 16.7912 19.6199 16.596 19.4246L13.414 16.2426C13.2187 16.0474 13.2187 15.7308 13.414 15.5355Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LifeRingIcon;
