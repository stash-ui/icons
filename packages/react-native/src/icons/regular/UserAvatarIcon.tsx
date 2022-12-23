import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const UserAvatarIcon = (
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
          d="M12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM2.5 12C2.5 6.7533 6.7533 2.5 12 2.5C17.2467 2.5 21.5 6.7533 21.5 12C21.5 14.5292 20.5116 16.8275 18.9001 18.5299C18.7084 17.5336 18.2599 16.7511 17.6813 16.1489C16.9382 15.3755 16.0024 14.9209 15.1796 14.6646C14.6534 14.5006 14.1434 14.6875 13.7899 14.9258C13.4071 15.1838 12.777 15.5 12 15.5C11.2229 15.5 10.5929 15.1838 10.2102 14.9258C9.85664 14.6875 9.34664 14.5006 8.82036 14.6646C7.99758 14.9209 7.06182 15.3755 6.31873 16.1489C5.74009 16.7511 5.29157 17.5336 5.09992 18.5299C3.48836 16.8275 2.5 14.5292 2.5 12ZM6.00496 19.3699C6.06143 18.2305 6.48145 17.4229 7.03983 16.8417C7.6308 16.2266 8.39928 15.8432 9.11784 15.6193C9.24564 15.5795 9.43662 15.6103 9.65116 15.755C10.1283 16.0766 10.9527 16.5 12 16.5C13.0473 16.5 13.8717 16.0766 14.3488 15.755C14.5634 15.6103 14.7544 15.5795 14.8822 15.6193C15.6007 15.8432 16.3692 16.2266 16.9602 16.8417C17.5186 17.4229 17.9386 18.2305 17.995 19.3699C16.3599 20.7016 14.2732 21.5 12 21.5C9.7268 21.5 7.64008 20.7016 6.00496 19.3699ZM9.5 10C9.5 8.61452 10.5804 7.5 12 7.5C13.4196 7.5 14.5 8.61452 14.5 10C14.5 11.3855 13.4196 12.5 12 12.5C10.5804 12.5 9.5 11.3855 9.5 10ZM12 6.5C10.0186 6.5 8.5 8.07177 8.5 10C8.5 11.9282 10.0186 13.5 12 13.5C13.9813 13.5 15.5 11.9282 15.5 10C15.5 8.07177 13.9813 6.5 12 6.5Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default UserAvatarIcon;
