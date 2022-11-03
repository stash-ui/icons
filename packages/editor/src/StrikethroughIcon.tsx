import * as React from 'react';
import { IconProps } from './types';

export const StrikethroughIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.0352 18C11.0158 18 10.1294 17.8061 9.37594 17.4183 8.74691 17.0897 8.19345 16.6338 7.71557 16.0506 7.56368 15.8653 7.5837 15.5973 7.74854 15.4234L8.4423 14.6914C8.65898 14.4628 9.02904 14.4911 9.23677 14.7279 9.64752 15.1961 10.0485 15.4853 10.4397 15.7064 10.9604 15.9834 11.5477 16.1219 12.2014 16.1219 12.5782 16.1219 12.9216 16.0665 13.2319 15.9557 13.5421 15.8449 13.7859 15.6898 13.9632 15.4903 14.1405 15.2798 14.2291 15.036 14.2291 14.759 14.2291 14.5706 14.1903 14.3989 14.1128 14.2438 14.0463 14.0776 13.941 13.9335 13.797 13.8116 13.664 13.6787 13.4923 13.5568 13.2818 13.446L13.2709 13.44H16.2358C16.3274 13.7127 16.3732 14.0084 16.3732 14.3269 16.3732 15.0803 16.1959 15.7341 15.8413 16.2881 15.4867 16.8421 14.9826 17.2687 14.3288 17.5679 13.6751 17.856 12.9106 18 12.0352 18zM12.7438 11H17.25C17.6642 11 18 11.3358 18 11.75 18 12.1642 17.6642 12.5 17.25 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75 6 11.3358 6.33579 11 6.75 11H8.42118C8.36178 10.8931 8.30884 10.7832 8.26237 10.6704 8.11832 10.2825 8.0463 9.84487 8.0463 9.35734 8.0463 8.7036 8.22913 8.12742 8.59478 7.62881 8.97151 7.11911 9.47012 6.72022 10.0906 6.43213 10.7222 6.14404 11.4147 6 12.1682 6 13.1433 6 13.9687 6.17729 14.6446 6.53186 15.2026 6.81983 15.6619 7.20647 16.0225 7.69179 16.1682 7.88796 16.1199 8.1598 15.9331 8.31738L15.2597 8.88538C15.0301 9.07909 14.6854 9.0216 14.463 8.8196 14.2501 8.62621 14.0175 8.49151 13.7651 8.3454 13.7263 8.32296 13.6871 8.30024 13.6474 8.27701 13.1931 8.01108 12.7 7.87812 12.1682 7.87812 11.7693 7.87812 11.4203 7.93906 11.1211 8.06094 10.833 8.17174 10.6059 8.33241 10.4397 8.54294 10.2734 8.74238 10.1903 8.98615 10.1903 9.27424 10.1903 9.48476 10.2347 9.67867 10.3233 9.85596 10.423 10.0332 10.5671 10.1884 10.7554 10.3213 10.9438 10.4543 11.182 10.5706 11.4701 10.6704 11.7582 10.7701 12.0906 10.8587 12.4674 10.9363 12.5611 10.9567 12.6532 10.978 12.7438 11z"
          fill={color}
        />
      </svg>
    );
  }
);

export default StrikethroughIcon;
