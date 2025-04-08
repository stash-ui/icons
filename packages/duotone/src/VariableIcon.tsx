import * as React from 'react';
import { IconProps } from './types';

export const VariableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.75699 4.64921C8.11554 4.4418 8.23806 3.983 8.03065 3.62446C7.82324 3.26591 7.36445 3.14339 7.0059 3.3508C4.02317 5.07622 2.01367 8.30299 2.01367 12C2.01367 15.697 4.02317 18.9238 7.0059 20.6492C7.36445 20.8566 7.82324 20.7341 8.03065 20.3755C8.23806 20.017 8.11554 19.5582 7.75699 19.3508C5.2187 17.8825 3.51367 15.1399 3.51367 12C3.51367 8.86009 5.2187 6.11753 7.75699 4.64921Z"
          fill={color}
        />
        <path
          d="M16.2415 4.64921C15.8829 4.4418 15.7604 3.983 15.9678 3.62446C16.1752 3.26591 16.634 3.14339 16.9925 3.3508C19.9753 5.07622 21.9848 8.30299 21.9848 12C21.9848 15.697 19.9753 18.9238 16.9925 20.6492C16.634 20.8566 16.1752 20.7341 15.9678 20.3755C15.7604 20.017 15.8829 19.5582 16.2415 19.3508C18.7797 17.8825 20.4848 15.1399 20.4848 12C20.4848 8.86009 18.7797 6.11753 16.2415 4.64921Z"
          fill={color}
        />
        <path
          opacity="0.5"
          d="M16.6184 6.6322C17.0326 6.6322 17.3684 6.96799 17.3684 7.3822C17.3684 7.79642 17.0326 8.1322 16.6184 8.1322H16.1947C15.8367 8.1322 15.5013 8.30687 15.296 8.60016L12.9161 12L15.296 15.3998C15.5013 15.6931 15.8367 15.8678 16.1947 15.8678H16.6184C17.0326 15.8678 17.3684 16.2035 17.3684 16.6178C17.3684 17.032 17.0326 17.3678 16.6184 17.3678H16.1947C15.3473 17.3678 14.5531 16.9543 14.0671 16.26L12.0006 13.3078L9.93407 16.26C9.44808 16.9543 8.65391 17.3678 7.80644 17.3678H7.38281C6.9686 17.3678 6.63281 17.032 6.63281 16.6178C6.63281 16.2035 6.9686 15.8678 7.38281 15.8678H7.80644C8.16444 15.8678 8.49992 15.6931 8.70522 15.3998L11.0851 12L8.70523 8.60016C8.49993 8.30687 8.16444 8.1322 7.80644 8.1322H7.38281C6.9686 8.1322 6.63281 7.79642 6.63281 7.3822C6.63281 6.96799 6.9686 6.6322 7.38281 6.6322H7.80644C8.65391 6.6322 9.44808 7.04569 9.93407 7.73997L12.0006 10.6921L14.0671 7.73997C14.5531 7.04569 15.3473 6.6322 16.1947 6.6322H16.6184Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default VariableIcon;
