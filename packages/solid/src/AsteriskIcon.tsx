import * as React from 'react';
import { IconProps } from './types';

export const AsteriskIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7C12.5523 7 13 7.44772 13 8V10.2678L14.9639 9.13397C15.4422 8.85783 16.0538 9.02171 16.3299 9.5C16.6061 9.97829 16.4422 10.5899 15.9639 10.866L14 11.9999L15.9644 13.134C16.4427 13.4101 16.6065 14.0217 16.3304 14.5C16.0542 14.9783 15.4427 15.1422 14.9644 14.866L13 13.7319V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13.7319L9.03569 14.866C8.5574 15.1422 7.94581 14.9783 7.66966 14.5C7.39352 14.0217 7.5574 13.4101 8.03569 13.134L10 11.9999L8.03616 10.866C7.55787 10.5899 7.39399 9.97829 7.67013 9.5C7.94628 9.02171 8.55787 8.85783 9.03616 9.13397L11 10.2678V8C11 7.44772 11.4477 7 12 7Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default AsteriskIcon;
