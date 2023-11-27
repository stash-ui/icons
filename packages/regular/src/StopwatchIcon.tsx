import * as React from 'react';
import { IconProps } from './types';

export const StopwatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.5 9.16988C9.85872 8.96277 9.98163 8.50408 9.77452 8.14536C9.56741 7.78664 9.10872 7.66373 8.75 7.87084C7.76188 8.44133 6.94133 9.26188 6.37083 10.25C5.80034 11.2381 5.5 12.359 5.5 13.5C5.5 14.641 5.80034 15.7619 6.37084 16.75C6.94133 17.7381 7.76188 18.5587 8.75 19.1292C9.73813 19.6997 10.859 20 12 20C13.141 20 14.2619 19.6997 15.25 19.1292C15.6087 18.9221 15.7316 18.4634 15.5245 18.1046C15.3174 17.7459 14.8587 17.623 14.5 17.8301C13.7399 18.269 12.8777 18.5 12 18.5C11.1223 18.5 10.2601 18.269 9.5 17.8301C8.7399 17.3913 8.10872 16.7601 7.66987 16C7.23103 15.2399 7 14.3777 7 13.5C7 12.6223 7.23103 11.7601 7.66987 11C8.10871 10.2399 8.7399 9.60872 9.5 9.16988Z"
          fill={color}
        />
        <path
          d="M12.75 8.52036C12.75 8.10614 12.4142 7.77036 12 7.77036C11.5858 7.77036 11.25 8.10614 11.25 8.52036V13.5C11.25 13.768 11.3929 14.0155 11.625 14.1495L15.5523 16.417C15.911 16.6241 16.3697 16.5012 16.5768 16.1424C16.7839 15.7837 16.661 15.325 16.3023 15.1179L12.75 13.067V8.52036Z"
          fill={color}
        />
        <path
          d="M10.5 1.75C10.0858 1.75 9.75 2.08579 9.75 2.5C9.75 2.91421 10.0858 3.25 10.5 3.25H11.25V4.78169C6.7686 5.16212 3.25 8.92015 3.25 13.5C3.25 18.3325 7.16751 22.25 12 22.25C16.8325 22.25 20.75 18.3325 20.75 13.5C20.75 11.3538 19.9773 9.38806 18.6949 7.86582L19.5304 7.03055C19.8233 6.7377 19.8234 6.26282 19.5305 5.96989C19.2377 5.67696 18.7628 5.67691 18.4699 5.96976L17.6343 6.80515C16.2912 5.67369 14.6029 4.93898 12.75 4.78169V3.25H13.5C13.9142 3.25 14.25 2.91421 14.25 2.5C14.25 2.08579 13.9142 1.75 13.5 1.75H10.5ZM4.75 13.5C4.75 9.49594 7.99594 6.25 12 6.25C16.0041 6.25 19.25 9.49594 19.25 13.5C19.25 17.5041 16.0041 20.75 12 20.75C7.99594 20.75 4.75 17.5041 4.75 13.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default StopwatchIcon;