import * as React from 'react';
import { IconProps } from './types';

export const DataNumbersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.43018 8.25C2.43018 7.69772 2.87789 7.25 3.43018 7.25H4.38256C5.44592 7.25 6.33494 8.10266 6.33494 9.1875V15.75C6.33494 16.3023 5.88722 16.75 5.33494 16.75C4.78265 16.75 4.33494 16.3023 4.33494 15.75V9.25H3.43018C2.87789 9.25 2.43018 8.80228 2.43018 8.25ZM8.14446 8.25C8.14446 7.69772 8.59218 7.25 9.14446 7.25H12.0016C13.065 7.25 13.954 8.10266 13.954 9.1875V11.0625C13.954 12.1473 13.065 13 12.0016 13H10.1445V14.75H12.954C13.5063 14.75 13.954 15.1977 13.954 15.75C13.954 16.3023 13.5063 16.75 12.954 16.75H10.0968C9.03348 16.75 8.14446 15.8973 8.14446 14.8125V12.9375C8.14446 11.8527 9.03348 11 10.0968 11H11.954V9.25H9.14446C8.59218 9.25 8.14446 8.80228 8.14446 8.25ZM15.7635 8.25C15.7635 7.69772 16.2112 7.25 16.7635 7.25H19.6207C20.684 7.25 21.573 8.10266 21.573 9.1875V14.8125C21.573 15.8973 20.684 16.75 19.6207 16.75H16.7635C16.2112 16.75 15.7635 16.3023 15.7635 15.75C15.7635 15.1977 16.2112 14.75 16.7635 14.75H19.573V13H16.7635C16.2112 13 15.7635 12.5523 15.7635 12C15.7635 11.4477 16.2112 11 16.7635 11H19.573V9.25H16.7635C16.2112 9.25 15.7635 8.80228 15.7635 8.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DataNumbersIcon;
