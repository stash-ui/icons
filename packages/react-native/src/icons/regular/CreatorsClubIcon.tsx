import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CreatorsClubIcon = (
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
          d="M12.9202 3.89575C12.3221 3.70142 11.6779 3.70142 11.0798 3.89575C10.6562 4.03337 10.2189 4.34699 9.43406 5.09683L9.2238 5.2977L8.93309 5.30434C7.84789 5.32912 7.31693 5.41656 6.92013 5.61874C6.3598 5.90424 5.90423 6.35981 5.61873 6.92014C5.41655 7.31694 5.32911 7.8479 5.30433 8.9331L5.29769 9.22381L5.09682 9.43407C4.34698 10.2189 4.03337 10.6562 3.89575 11.0798C3.70142 11.6779 3.70142 12.3221 3.89575 12.9202C4.03337 13.3438 4.34699 13.7811 5.09682 14.5659L5.29769 14.7762L5.30433 15.0669C5.32911 16.1521 5.41655 16.6831 5.61873 17.0799C5.90423 17.6402 6.3598 18.0958 6.92013 18.3813C7.31693 18.5835 7.8479 18.6709 8.93311 18.6957L9.22382 18.7023L9.43408 18.9032C10.2189 19.653 10.6562 19.9666 11.0798 20.1042C11.6779 20.2986 12.3221 20.2986 12.9202 20.1042C13.3438 19.9666 13.7811 19.653 14.5659 18.9032L14.7762 18.7023L15.0669 18.6957C16.1521 18.6709 16.6831 18.5835 17.0799 18.3813C17.6402 18.0958 18.0958 17.6402 18.3813 17.0799C18.5835 16.6831 18.6709 16.1521 18.6957 15.0669L18.7023 14.7762L18.9032 14.5659C19.653 13.7811 19.9666 13.3438 20.1042 12.9202C20.2986 12.3221 20.2986 11.6779 20.1042 11.0798C19.9666 10.6562 19.653 10.2189 18.9032 9.43407L18.7023 9.22381L18.6957 8.9331C18.6709 7.8479 18.5834 7.31694 18.3813 6.92014C18.0958 6.35981 17.6402 5.90424 17.0799 5.61874C16.6831 5.41656 16.1521 5.32912 15.0669 5.30434L14.7762 5.2977L14.5659 5.09683C13.7811 4.34699 13.3438 4.03337 12.9202 3.89575ZM10.6162 2.46917C11.5156 2.17694 12.4844 2.17694 13.3838 2.46917C14.0911 2.699 14.694 3.16349 15.3912 3.81305C16.3435 3.84674 17.0982 3.94458 17.7609 4.28223C18.6034 4.71154 19.2885 5.39658 19.7178 6.23915C20.0554 6.90183 20.1533 7.65656 20.187 8.60885C20.8365 9.30604 21.301 9.9089 21.5308 10.6162C21.8231 11.5156 21.8231 12.4844 21.5308 13.3838C21.301 14.0911 20.8365 14.694 20.187 15.3912C20.1533 16.3435 20.0554 17.0982 19.7178 17.7609C19.2885 18.6034 18.6034 19.2885 17.7609 19.7178C17.0982 20.0554 16.3434 20.1533 15.3911 20.187C14.6939 20.8365 14.0911 21.301 13.3838 21.5308C12.4844 21.8231 11.5156 21.8231 10.6162 21.5308C9.9089 21.301 9.30605 20.8365 8.60886 20.187C7.65656 20.1533 6.90183 20.0554 6.23914 19.7178C5.39657 19.2885 4.71153 18.6034 4.28222 17.7609C3.94457 17.0982 3.84672 16.3435 3.81304 15.3912C3.16348 14.694 2.699 14.0911 2.46917 13.3838C2.17695 12.4844 2.17694 11.5156 2.46917 10.6162C2.69899 9.9089 3.16348 9.30604 3.81304 8.60885C3.84672 7.65656 3.94457 6.90183 4.28222 6.23915C4.71153 5.39658 5.39657 4.71154 6.23914 4.28223C6.90182 3.94458 7.65654 3.84673 8.60884 3.81305C9.30604 3.16349 9.9089 2.699 10.6162 2.46917Z"
          fill={color}
        />
        <Path
          opacity=".5"
          d="M14.3017 9.8874C13.0888 8.7042 11.1122 8.7042 9.89929 9.8874C8.70024 11.0571 8.70024 12.9429 9.89929 14.1126C11.1122 15.2958 13.0888 15.2958 14.3017 14.1126C14.6971 13.727 15.3302 13.7348 15.7158 14.1301C16.1015 14.5255 16.0936 15.1586 15.6983 15.5443C13.7085 17.4852 10.4925 17.4852 8.50273 15.5443C6.49909 13.5897 6.49909 10.4103 8.50273 8.45575C10.4925 6.51475 13.7085 6.51475 15.6983 8.45575C16.0936 8.8414 16.1015 9.47451 15.7158 9.86985C15.3302 10.2652 14.6971 10.273 14.3017 9.8874Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default CreatorsClubIcon;
