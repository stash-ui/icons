import * as React from 'react';
import { IconProps } from './types';

export const CrownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.0002 6.5C12.2047 6.5 12.3885 6.62448 12.4645 6.8143C12.8318 7.73271 13.2946 8.3304 13.7803 8.71537C14.2652 9.09968 14.7975 9.29145 15.3351 9.36111C16.4293 9.5029 17.534 9.13648 18.1989 8.8429L18.213 8.83671C18.3089 8.79435 18.405 8.75189 18.4852 8.72343C18.5489 8.70084 18.7149 8.64191 18.9005 8.68395C19.1006 8.72929 19.2635 8.85272 19.3613 9.03312C19.4506 9.19798 19.4407 9.36893 19.4362 9.43828C19.4309 9.52145 19.4164 9.62247 19.4023 9.72114L18.626 15.155C18.6235 15.1725 18.6211 15.1899 18.6186 15.2071C18.5801 15.4794 18.5455 15.7236 18.4227 15.9561C18.3212 16.1481 18.1508 16.344 17.9747 16.4712C17.7619 16.6249 17.5437 16.6876 17.3032 16.7568C17.2894 16.7607 17.2756 16.7647 17.2617 16.7687C16.2076 17.0732 14.3178 17.5 12.0002 17.5C9.68271 17.5 7.79282 17.0732 6.73877 16.7687C6.72486 16.7647 6.71103 16.7607 6.69727 16.7568C6.45676 16.6876 6.23858 16.6249 6.02575 16.4712C5.8497 16.344 5.67929 16.1481 5.57782 15.9561C5.45495 15.7236 5.42038 15.4794 5.38185 15.2071C5.3794 15.1899 5.37694 15.1725 5.37444 15.155L4.60034 9.73626C4.59962 9.73121 4.59889 9.72616 4.59817 9.72109C4.58406 9.62243 4.56961 9.52144 4.56427 9.43828C4.55982 9.36893 4.54987 9.19798 4.63921 9.03312C4.73698 8.85272 4.89985 8.72929 5.09998 8.68395C5.28553 8.64191 5.45138 8.70077 5.51506 8.72337C5.59525 8.75182 5.69159 8.79435 5.7875 8.83671C5.79217 8.83878 5.79685 8.84084 5.80152 8.8429C6.46651 9.13648 7.57121 9.5029 8.66542 9.36111C9.20297 9.29145 9.73523 9.09968 10.2201 8.71537C10.7059 8.3304 11.1686 7.73271 11.536 6.8143C11.6119 6.62448 11.7958 6.5 12.0002 6.5ZM5.62746 9.85505L6.36439 15.0136C6.41475 15.3661 6.43009 15.4285 6.46193 15.4888C6.49157 15.5449 6.5598 15.6233 6.61123 15.6605C6.66814 15.7016 6.71587 15.7212 7.01624 15.808C8.00776 16.0944 9.80157 16.5 12.0002 16.5C14.1989 16.5 15.9927 16.0944 16.9842 15.808C17.2846 15.7212 17.3323 15.7016 17.3892 15.6605C17.4407 15.6233 17.5089 15.5449 17.5385 15.4888C17.5704 15.4285 17.5857 15.3661 17.6361 15.0136L18.373 9.85505C17.6219 10.1599 16.4375 10.5123 15.2065 10.3528C14.5144 10.2631 13.8052 10.0111 13.1592 9.49908C12.7291 9.15817 12.3378 8.71068 12.0002 8.13882C11.6626 8.71068 11.2714 9.15817 10.8413 9.49908C10.1952 10.0111 9.48608 10.2631 8.79392 10.3528C7.56297 10.5123 6.37861 10.1599 5.62746 9.85505Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CrownIcon;