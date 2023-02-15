import * as React from 'react';
import { IconProps } from './types';

export const SubscriptionListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75887 4.5C3.5339 4.5 2.5 5.54957 2.5 6.89593V7.07692C2.5 8.56478 3.4766 9.65385 4.75887 9.65385H6.80916C7.0853 9.65385 7.30916 9.8777 7.30916 10.1538 7.30916 10.43 7.0853 10.6538 6.80916 10.6538H4.75887C2.80331 10.6538 1.5 8.98774 1.5 7.07692V6.89593C1.5 5.04353 2.93648 3.5 4.75887 3.5H5.80521C7.40774 3.5 8.5 4.75133 8.5 6.05128V7.70192C8.5 8.45944 7.9091 9.11538 7.12977 9.11538 6.71503 9.11538 6.35366 8.92961 6.1063 8.64162 5.79735 8.9332 5.39432 9.11538 4.9313 9.11538 3.85516 9.11538 3.10305 8.13126 3.10305 7.07692 3.10305 6.02259 3.85516 5.03846 4.9313 5.03846 5.26388 5.03846 5.56552 5.13246 5.82357 5.29348 5.90928 5.14127 6.07241 5.03846 6.25954 5.03846 6.53568 5.03846 6.75954 5.26232 6.75954 5.53846V7.70192C6.75954 7.95339 6.94787 8.11538 7.12977 8.11538 7.31168 8.11538 7.5 7.95339 7.5 7.70192V6.05128C7.5 5.29995 6.8518 4.5 5.80521 4.5H4.75887zM5.75954 7.07692C5.75954 6.43192 5.3223 6.03846 4.9313 6.03846 4.5403 6.03846 4.10305 6.43192 4.10305 7.07692 4.10305 7.72193 4.5403 8.11538 4.9313 8.11538 5.3223 8.11538 5.75954 7.72193 5.75954 7.07692zM4.75887 14.3462C3.5339 14.3462 2.5 15.3957 2.5 16.7421V16.9231C2.5 18.4109 3.4766 19.5 4.75887 19.5H6.80916C7.0853 19.5 7.30916 19.7239 7.30916 20 7.30916 20.2761 7.0853 20.5 6.80916 20.5H4.75887C2.80331 20.5 1.5 18.8339 1.5 16.9231V16.7421C1.5 14.8897 2.93648 13.3462 4.75887 13.3462H5.80521C7.40774 13.3462 8.5 14.5975 8.5 15.8974V17.5481C8.5 18.3056 7.9091 18.9615 7.12977 18.9615 6.71503 18.9615 6.35366 18.7758 6.10631 18.4878 5.79736 18.7794 5.39432 18.9615 4.9313 18.9615 3.85516 18.9615 3.10305 17.9774 3.10305 16.9231 3.10305 15.8687 3.85516 14.8846 4.9313 14.8846 5.26389 14.8846 5.56552 14.9786 5.82358 15.1396 5.90929 14.9874 6.07241 14.8846 6.25954 14.8846 6.53568 14.8846 6.75954 15.1085 6.75954 15.3846V17.5481C6.75954 17.7995 6.94787 17.9615 7.12977 17.9615 7.31168 17.9615 7.5 17.7995 7.5 17.5481V15.8974C7.5 15.1461 6.8518 14.3462 5.80521 14.3462H4.75887zM5.75954 16.9231C5.75954 16.2781 5.3223 15.8846 4.9313 15.8846 4.5403 15.8846 4.10305 16.2781 4.10305 16.9231 4.10305 17.5681 4.5403 17.9615 4.9313 17.9615 5.3223 17.9615 5.75954 17.5681 5.75954 16.9231zM10.5 5.5C10.5 5.22386 10.7239 5 11 5H22C22.2761 5 22.5 5.22386 22.5 5.5 22.5 5.77614 22.2761 6 22 6H11C10.7239 6 10.5 5.77614 10.5 5.5zM10.5 8.5C10.5 8.22386 10.7239 8 11 8H17C17.2761 8 17.5 8.22386 17.5 8.5 17.5 8.77614 17.2761 9 17 9H11C10.7239 9 10.5 8.77614 10.5 8.5zM10.5 15.5C10.5 15.2239 10.7239 15 11 15H22C22.2761 15 22.5 15.2239 22.5 15.5 22.5 15.7761 22.2761 16 22 16H11C10.7239 16 10.5 15.7761 10.5 15.5zM10.5 18.5C10.5 18.2239 10.7239 18 11 18H17C17.2761 18 17.5 18.2239 17.5 18.5 17.5 18.7761 17.2761 19 17 19H11C10.7239 19 10.5 18.7761 10.5 18.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SubscriptionListIcon;
