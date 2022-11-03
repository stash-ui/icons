import * as React from 'react';
import { IconProps } from './types';

export const FeedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.96669 5.25282C6.21336 5.088 6.50337 5.00003 6.80003 5.00003 6.99736 4.9988 7.19296 5.03676 7.37551 5.1117 7.55805 5.18665 7.72389 5.29709 7.86343 5.43662 8.00296 5.57616 8.1134 5.742 8.18834 5.92454 8.26329 6.10708 8.30125 6.30269 8.30002 6.50001 8.30002 6.79668 8.21205 7.08669 8.04723 7.33336 7.88241 7.58003 7.64814 7.77229 7.37405 7.88582 7.09997 7.99935 6.79837 8.02905 6.5074 7.97118 6.21643 7.9133 5.94916 7.77044 5.73938 7.56066 5.52961 7.35089 5.38675 7.08362 5.32887 6.79265 5.27099 6.50168 5.3007 6.20008 5.41423 5.92599 5.52776 5.65191 5.72002 5.41764 5.96669 5.25282zM10.55 5.75C10.1358 5.75 9.80005 6.08579 9.80005 6.5 9.80005 6.91421 10.1358 7.25 10.55 7.25H17.41C17.8243 7.25 18.16 6.91421 18.16 6.5 18.16 6.08579 17.8243 5.75 17.41 5.75H10.55zM5.30005 12.75C5.30005 12.3358 5.63584 12 6.05005 12H17.4137C17.8279 12 18.1637 12.3358 18.1637 12.75 18.1637 13.1642 17.8279 13.5 17.4137 13.5H6.05005C5.63584 13.5 5.30005 13.1642 5.30005 12.75zM6.05005 15C5.63584 15 5.30005 15.3358 5.30005 15.75 5.30005 16.1642 5.63584 16.5 6.05005 16.5H13.41C13.8243 16.5 14.16 16.1642 14.16 15.75 14.16 15.3358 13.8243 15 13.41 15H6.05005z"
          fill={color}
        />
        <path
          d="M2.74047 4.45704C2.25 5.41965 2.25 6.67976 2.25 9.2V12.8C2.25 15.3202 2.25 16.5804 2.74047 17.543C3.1719 18.3897 3.86031 19.0781 4.70704 19.5095C5.66965 20 6.92976 20 9.45 20H14.5501C17.0703 20 18.3304 20 19.293 19.5095C20.1397 19.0781 20.8282 18.3897 21.2596 17.543C21.7501 16.5804 21.7501 15.3202 21.7501 12.8V9.2C21.7501 6.67976 21.7501 5.41965 21.2596 4.45704C20.8282 3.61031 20.1397 2.9219 19.293 2.49047C18.3304 2 17.0703 2 14.5501 2H9.45C6.92976 2 5.66965 2 4.70704 2.49047C3.86031 2.9219 3.1719 3.61031 2.74047 4.45704ZM4.10429 5.27453C4.41588 4.663 4.91307 4.16582 5.52459 3.85423C6.21981 3.5 7.12989 3.5 8.95006 3.5H15.0501C16.8703 3.5 17.7804 3.5 18.4756 3.85423C19.0871 4.16582 19.5843 4.663 19.8959 5.27453C20.2501 5.96974 20.2501 6.87983 20.2501 8.7V9H3.75006V8.7C3.75006 6.87983 3.75006 5.96974 4.10429 5.27453ZM3.75006 13.3V10.5H20.2501V13.3C20.2501 15.1202 20.2501 16.0303 19.8959 16.7255C19.5843 17.337 19.0871 17.8342 18.4756 18.1458C17.7804 18.5 16.8703 18.5 15.0501 18.5H8.95006C7.12989 18.5 6.21981 18.5 5.52459 18.1458C4.91307 17.8342 4.41588 17.337 4.10429 16.7255C3.75006 16.0303 3.75006 15.1202 3.75006 13.3Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M4.62163 19.4649C3.81401 19.0313 3.1573 18.361 2.74047 17.543C2.25 16.5804 2.25 15.3202 2.25 12.8V14.8C2.25 17.3202 2.25 18.5804 2.74047 19.543C3.1719 20.3897 3.86031 21.0781 4.70704 21.5095C5.66965 22 6.92976 22 9.45 22H14.5501C17.0703 22 18.3304 22 19.293 21.5095C20.1397 21.0781 20.8282 20.3897 21.2596 19.543C21.7501 18.5804 21.7501 17.3202 21.7501 14.8V12.8C21.7501 15.3202 21.7501 16.5804 21.2596 17.543C20.8428 18.361 20.1862 19.0312 19.3787 19.4647C19.1213 19.7411 18.8162 19.9722 18.4756 20.1458C17.7804 20.5 16.8703 20.5 15.0501 20.5H8.95006C7.12989 20.5 6.21981 20.5 5.52459 20.1458C5.18404 19.9723 4.87895 19.7412 4.62163 19.4649Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default FeedIcon;
