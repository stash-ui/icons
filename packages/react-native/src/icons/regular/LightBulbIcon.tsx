import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LightBulbIcon = (
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
          opacity=".5"
          d="M2.42383 3.01985C2.68901 2.70164 3.16193 2.65865 3.48014 2.92382L4.98014 4.17382C5.29835 4.439 5.34134 4.91192 5.07617 5.23013C4.81099 5.54833 4.33807 5.59133 4.01986 5.32615L2.51986 4.07615C2.20165 3.81098 2.15866 3.33806 2.42383 3.01985ZM21.5762 3.01985C21.8413 3.33806 21.7983 3.81098 21.4801 4.07615L19.9801 5.32615C19.6619 5.59133 19.189 5.54833 18.9238 5.23013C18.6587 4.91192 18.7017 4.439 19.0199 4.17382L20.5199 2.92382C20.8381 2.65865 21.311 2.70164 21.5762 3.01985ZM1.25 8.24999C1.25 7.83577 1.58579 7.49999 2 7.49999H4C4.41421 7.49999 4.75 7.83577 4.75 8.24999C4.75 8.6642 4.41421 8.99999 4 8.99999H2C1.58579 8.99999 1.25 8.6642 1.25 8.24999ZM19.25 8.24999C19.25 7.83577 19.5858 7.49999 20 7.49999H22C22.4142 7.49999 22.75 7.83577 22.75 8.24999C22.75 8.6642 22.4142 8.99999 22 8.99999H20C19.5858 8.99999 19.25 8.6642 19.25 8.24999ZM5.17082 11.9146C5.35606 12.2851 5.20589 12.7356 4.83541 12.9208L3.33541 13.6708C2.96493 13.8561 2.51442 13.7059 2.32918 13.3354C2.14394 12.9649 2.29411 12.5144 2.66459 12.3292L4.16459 11.5792C4.53507 11.3939 4.98558 11.5441 5.17082 11.9146ZM18.8292 11.9146C19.0144 11.5441 19.4649 11.3939 19.8354 11.5792L21.3354 12.3292C21.7059 12.5144 21.8561 12.9649 21.6708 13.3354C21.4856 13.7059 21.0351 13.8561 20.6646 13.6708L19.1646 12.9208C18.7941 12.7356 18.6439 12.2851 18.8292 11.9146Z"
          fill={color}
        />
        <Path
          d="M12 3.75C14.9275 3.75 17.25 6.02464 17.25 8.76923C17.25 10.4803 16.8093 11.3512 16.2522 12.1427C16.1263 12.3215 15.985 12.5064 15.835 12.7026C15.3108 13.3883 14.6809 14.2123 14.234 15.4016C14.1389 15.6547 14.0197 15.889 13.8811 16.0998L13.8253 16.1792C13.6975 16.361 13.5568 16.5228 13.4056 16.6621C12.999 17.0338 12.5108 17.25 12 17.25C11.4893 17.25 11.001 17.0338 10.5944 16.6621C10.4432 16.5228 10.3025 16.361 10.1747 16.1792L10.1189 16.0998C9.98026 15.889 9.86108 15.6547 9.76596 15.4016C9.31907 14.2123 8.68919 13.3883 8.165 12.7026C8.01504 12.5064 7.87373 12.3215 7.74783 12.1427C7.1907 11.3512 6.75 10.4803 6.75 8.76923C6.75 6.02464 9.07251 3.75 12 3.75ZM15.1669 16.8688C15.3589 16.5694 15.517 16.2516 15.6382 15.9292C16 14.9662 16.4563 14.3674 16.9558 13.7118C17.1258 13.4886 17.3008 13.2589 17.4788 13.0061C18.1886 11.9976 18.75 10.8305 18.75 8.76923C18.75 5.14131 15.6999 2.25 12 2.25C8.30007 2.25 5.25 5.14131 5.25 8.76923C5.25 10.8305 5.81137 11.9976 6.52124 13.0061C6.69924 13.2589 6.87423 13.4886 7.04422 13.7118C7.54372 14.3674 7.99996 14.9662 8.36183 15.9292C8.483 16.2516 8.64108 16.5694 8.83314 16.8688L9.05471 19.0846C9.20603 20.5977 10.4793 21.75 12 21.75C13.5207 21.75 14.794 20.5977 14.9453 19.0846L15.1669 16.8688ZM13.5064 18.3989L13.4527 18.9353C13.3781 19.6816 12.7501 20.25 12 20.25C11.2499 20.25 10.6219 19.6816 10.5473 18.9353L10.4936 18.3989C10.9445 18.6206 11.4493 18.75 12 18.75C12.5507 18.75 13.0555 18.6206 13.5064 18.3989Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default LightBulbIcon;
