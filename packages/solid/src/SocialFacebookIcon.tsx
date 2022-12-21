import * as React from 'react';
import { IconProps } from './types';

export const SocialFacebookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.79999C7.44365 3.79999 3.75 7.49364 3.75 12.05C3.75 15.8817 6.36286 19.1044 9.90394 20.0315V15.4248H8.76202C8.1 15.4248 7.56333 14.8882 7.56333 14.2261V12.5249C7.56333 11.8629 8.1 11.3262 8.76202 11.3262H9.87553C9.86263 10.9792 9.83725 10.6301 9.83725 10.2829C9.83725 9.39422 9.98618 7.62533 11.3904 6.62082C11.8246 6.31015 12.2339 6.10472 12.6844 5.98435C13.1251 5.86659 13.5667 5.84106 14.0391 5.84108C14.873 5.8411 15.4503 5.9241 15.8168 5.97678C15.8814 5.98607 15.9346 5.99371 15.9816 5.99989C16.4471 6.06113 16.7882 6.45813 16.7882 6.92027V8.8035C16.7882 9.33903 16.3404 9.75496 15.8186 9.73213C15.6646 9.73856 15.143 9.7589 14.6922 9.7589C14.3816 9.7589 14.2905 9.83015 14.258 9.86491C14.213 9.91288 14.0961 10.0895 14.0961 10.6294V11.3262H15.3691C16.1075 11.3262 16.6698 11.9872 16.5526 12.7151L16.2944 14.4232C16.1981 15.0012 15.6979 15.4248 15.1119 15.4248H14.0961V20.0315C17.6371 19.1043 20.25 15.8817 20.25 12.05C20.25 7.49364 16.5563 3.79999 12 3.79999ZM2.25 12.05C2.25 6.66521 6.61522 2.29999 12 2.29999C17.3848 2.29999 21.75 6.66521 21.75 12.05C21.75 16.9398 18.151 20.9878 13.4573 21.6917C13.2414 21.7241 13.0221 21.6608 12.8567 21.5183C12.6912 21.3758 12.5961 21.1683 12.5961 20.95V14.6748C12.5961 14.2606 12.9319 13.9248 13.3461 13.9248H14.8527L15.0188 12.8262H13.3461C12.9319 12.8262 12.5961 12.4904 12.5961 12.0762V10.6294C12.5961 9.92397 12.7408 9.29037 13.1633 8.83942C13.5981 8.37526 14.18 8.2589 14.6922 8.2589C14.8885 8.2589 15.1017 8.25467 15.2882 8.24954V7.41831C14.9738 7.37874 14.5681 7.34109 14.0391 7.34108C13.6122 7.34107 13.324 7.36606 13.0716 7.4335C12.829 7.49833 12.5818 7.61278 12.2631 7.8408C11.5156 8.3755 11.3391 9.42137 11.3373 10.2694L11.4034 12.0483C11.411 12.252 11.3354 12.4499 11.194 12.5966C11.0527 12.7433 10.8577 12.8262 10.6539 12.8262H9.06333V13.9248H10.6539C11.0682 13.9248 11.4039 14.2606 11.4039 14.6748V20.95C11.4039 21.1683 11.3088 21.3758 11.1434 21.5183C10.9779 21.6608 10.7586 21.7241 10.5427 21.6917C5.84897 20.9878 2.25 16.9399 2.25 12.05Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SocialFacebookIcon;
