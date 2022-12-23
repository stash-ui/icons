import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CalendarStarIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M10.367 2.75H13.633C14.7251 2.74999 15.5906 2.74999 16.2883 2.80699C17.0017 2.86527 17.6053 2.98688 18.1565 3.26772C19.0502 3.72312 19.7769 4.44978 20.2323 5.34355C20.5131 5.89472 20.6347 6.49834 20.693 7.21173C20.75 7.90935 20.75 8.77484 20.75 9.86698V14.133C20.75 15.2252 20.75 16.0906 20.693 16.7883C20.6347 17.5017 20.5131 18.1053 20.2323 18.6565C19.7769 19.5502 19.0502 20.2769 18.1565 20.7323C17.6053 21.0131 17.0017 21.1347 16.2883 21.193C15.5906 21.25 14.7252 21.25 13.633 21.25H10.367C9.27484 21.25 8.40935 21.25 7.71173 21.193C6.99834 21.1347 6.39472 21.0131 5.84355 20.7323C4.94978 20.2769 4.22312 19.5502 3.76772 18.6565C3.48688 18.1053 3.36527 17.5017 3.30699 16.7883C3.24999 16.0906 3.24999 15.2251 3.25 14.133V9.867C3.24999 8.77485 3.24999 7.90936 3.30699 7.21173C3.36527 6.49834 3.48688 5.89472 3.76772 5.34355C4.22312 4.44978 4.94978 3.72312 5.84355 3.26772C6.39472 2.98688 6.99834 2.86527 7.71173 2.80699C8.40936 2.74999 9.27486 2.74999 10.367 2.75ZM7.83388 4.30201C7.21325 4.35271 6.829 4.44909 6.52453 4.60423C5.913 4.91582 5.41582 5.413 5.10423 6.02453C4.94909 6.329 4.85271 6.71325 4.80201 7.33388C4.75058 7.96327 4.75 8.76752 4.75 9.9V14.1C4.75 15.2325 4.75058 16.0367 4.80201 16.6661C4.85271 17.2867 4.94909 17.671 5.10423 17.9755C5.41582 18.587 5.913 19.0842 6.52453 19.3958C6.829 19.5509 7.21325 19.6473 7.83388 19.698C8.46327 19.7494 9.26752 19.75 10.4 19.75H13.6C14.7325 19.75 15.5367 19.7494 16.1661 19.698C16.7867 19.6473 17.171 19.5509 17.4755 19.3958C18.087 19.0842 18.5842 18.587 18.8958 17.9755C19.0509 17.671 19.1473 17.2867 19.198 16.6661C19.2494 16.0367 19.25 15.2325 19.25 14.1V9.9C19.25 8.76752 19.2494 7.96326 19.198 7.33388C19.1473 6.71325 19.0509 6.329 18.8958 6.02453C18.5842 5.413 18.087 4.91582 17.4755 4.60423C17.171 4.44909 16.7867 4.35271 16.1661 4.30201C15.5367 4.25058 14.7325 4.25 13.6 4.25H10.4C9.26752 4.25 8.46326 4.25058 7.83388 4.30201Z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <Path
            d="M6.52441 4.60423C6.82889 4.44909 7.21314 4.35271 7.83376 4.30201C8.46315 4.25058 9.2674 4.25 10.3999 4.25H13.5999C14.7324 4.25 15.5366 4.25058 16.166 4.30201C16.7866 4.35271 17.1709 4.44909 17.4754 4.60423C18.0869 4.91582 18.5841 5.413 18.8957 6.02453C19.0508 6.329 19.1472 6.71325 19.1979 7.33388C19.243 7.8865 19.249 8.57394 19.2498 9.5H4.75C4.75078 8.57394 4.75674 7.8865 4.80189 7.33388C4.8526 6.71325 4.94898 6.329 5.10411 6.02453C5.4157 5.413 5.91289 4.91582 6.52441 4.60423ZM9.49988 7.75C8.9476 7.75 8.49988 7.30228 8.49988 6.75C8.49988 6.19772 8.9476 5.75 9.49988 5.75H14.4999C15.0522 5.75 15.4999 6.19772 15.4999 6.75C15.4999 7.30228 15.0522 7.75 14.4999 7.75H9.49988Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path d="M11.2613 12.2759C11.4931 11.7186 11.609 11.4399 11.7732 11.3563C11.9156 11.2839 12.0842 11.2839 12.2266 11.3563C12.3908 11.4399 12.5067 11.7186 12.7386 12.2759L12.9364 12.7516C13.0046 12.9155 13.0386 12.9974 13.0936 13.0596C13.1421 13.1147 13.2022 13.1583 13.2696 13.1875C13.3457 13.2205 13.4342 13.2276 13.6111 13.2418L14.1246 13.283C14.7264 13.3312 15.0272 13.3553 15.1574 13.4857C15.2704 13.5988 15.3224 13.759 15.2975 13.9169C15.2688 14.0989 15.0396 14.2953 14.5811 14.688L14.1899 15.0231C14.0551 15.1386 13.9877 15.1963 13.9455 15.2678C13.9082 15.331 13.8852 15.4016 13.8783 15.4747C13.8704 15.5573 13.891 15.6436 13.9322 15.8163L14.0517 16.3174C14.1918 16.9046 14.2618 17.1982 14.1781 17.3622C14.1054 17.5046 13.9691 17.6037 13.8112 17.6288C13.6293 17.6577 13.3717 17.5004 12.8565 17.1857L12.4169 16.9172C12.2654 16.8247 12.1897 16.7784 12.1087 16.7604C12.0371 16.7444 11.9628 16.7444 11.8911 16.7604C11.8101 16.7784 11.7344 16.8247 11.5829 16.9172L11.1433 17.1857C10.6281 17.5004 10.3705 17.6577 10.1886 17.6288C10.0307 17.6037 9.89439 17.5046 9.82174 17.3622C9.73801 17.1982 9.80805 16.9046 9.94811 16.3174L10.0676 15.8163C10.1088 15.6436 10.1294 15.5573 10.1216 15.4747C10.1146 15.4016 10.0916 15.331 10.0543 15.2678C10.0121 15.1963 9.94471 15.1386 9.80992 15.0231L9.41869 14.688C8.96023 14.2953 8.731 14.0989 8.70229 13.9169C8.67737 13.759 8.72945 13.5988 8.84242 13.4857C8.9726 13.3553 9.27347 13.3312 9.8752 13.283L10.3887 13.2418C10.5656 13.2276 10.6541 13.2205 10.7302 13.1875C10.7976 13.1583 10.8577 13.1147 10.9063 13.0596C10.9612 12.9974 10.9953 12.9155 11.0634 12.7516L11.2613 12.2759Z" />
        </g>
      </Svg>
    );
  }
);

export default CalendarStarIcon;