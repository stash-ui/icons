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
          d="M12 6.5C12.2044 6.5 12.3883 6.62448 12.4642 6.8143C12.8316 7.73271 13.2944 8.3304 13.7801 8.71537C14.265 9.09968 14.7973 9.29145 15.3348 9.36111C16.429 9.5029 17.5337 9.13648 18.1987 8.8429L18.2127 8.83671C18.3086 8.79435 18.4048 8.75189 18.485 8.72343C18.5487 8.70084 18.7147 8.64191 18.9002 8.68395C19.1004 8.72929 19.2632 8.85272 19.361 9.03312C19.4504 9.19798 19.4404 9.36893 19.436 9.43828C19.4306 9.52145 19.4162 9.62247 19.402 9.72114L18.6258 15.155C18.6233 15.1725 18.6208 15.1899 18.6184 15.2071C18.5798 15.4794 18.5453 15.7236 18.4224 15.9561C18.3209 16.1481 18.1505 16.344 17.9745 16.4712C17.7616 16.6249 17.5435 16.6876 17.303 16.7568C17.2892 16.7607 17.2754 16.7647 17.2615 16.7687C16.2074 17.0732 14.3175 17.5 12 17.5C9.68246 17.5 7.79258 17.0732 6.73853 16.7687C6.72462 16.7647 6.71078 16.7607 6.69703 16.7568C6.45652 16.6876 6.23834 16.6249 6.0255 16.4712C5.84946 16.344 5.67905 16.1481 5.57757 15.9561C5.4547 15.7236 5.42014 15.4794 5.3816 15.2071C5.37916 15.1899 5.3767 15.1725 5.3742 15.155L4.60009 9.73626C4.59937 9.73121 4.59865 9.72616 4.59793 9.72109C4.58381 9.62243 4.56937 9.52144 4.56403 9.43828C4.55957 9.36893 4.54962 9.19798 4.63897 9.03312C4.73674 8.85272 4.89961 8.72929 5.09973 8.68395C5.28529 8.64191 5.45114 8.70077 5.51482 8.72337C5.59501 8.75182 5.69134 8.79435 5.78725 8.83671C5.79193 8.83878 5.7966 8.84084 5.80128 8.8429C6.46627 9.13648 7.57096 9.5029 8.66517 9.36111C9.20273 9.29145 9.73499 9.09968 10.2199 8.71537C10.7056 8.3304 11.1684 7.73271 11.5358 6.8143C11.6117 6.62448 11.7955 6.5 12 6.5ZM5.62722 9.85505L6.36415 15.0136C6.4145 15.3661 6.42984 15.4285 6.46168 15.4888C6.49133 15.5449 6.55955 15.6233 6.61099 15.6605C6.6679 15.7016 6.71562 15.7212 7.016 15.808C8.00752 16.0944 9.80133 16.5 12 16.5C14.1987 16.5 15.9925 16.0944 16.984 15.808C17.2844 15.7212 17.3321 15.7016 17.389 15.6605C17.4404 15.6233 17.5087 15.5449 17.5383 15.4888C17.5701 15.4285 17.5855 15.3661 17.6358 15.0136L18.3728 9.85505C17.6216 10.1599 16.4373 10.5123 15.2063 10.3528C14.5141 10.2631 13.805 10.0111 13.159 9.49908C12.7288 9.15817 12.3376 8.71068 12 8.13882C11.6624 8.71068 11.2712 9.15817 10.841 9.49908C10.195 10.0111 9.48583 10.2631 8.79368 10.3528C7.56272 10.5123 6.37836 10.1599 5.62722 9.85505Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CrownIcon;
