import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SmartphoneIcon = (
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
          d="M7 6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.07989 3 10.2 3H13.8C14.9201 3 15.4802 3 15.908 3.21799C16.2843 3.40973 16.5903 3.71569 16.782 4.09202C17 4.51984 17 5.0799 17 6.2V17.8C17 18.9201 17 19.4802 16.782 19.908C16.5903 20.2843 16.2843 20.5903 15.908 20.782C15.4802 21 14.9201 21 13.8 21H10.2C9.07989 21 8.51984 21 8.09202 20.782C7.71569 20.5903 7.40973 20.2843 7.21799 19.908C7 19.4802 7 18.9201 7 17.8V6.2Z"
          fill={color}
        />
        <Path
          d="M9.75 19C9.75 18.7239 9.97386 18.5 10.25 18.5H13.75C14.0261 18.5 14.25 18.7239 14.25 19C14.25 19.2761 14.0261 19.5 13.75 19.5H10.25C9.97386 19.5 9.75 19.2761 9.75 19Z"
          fill={color}
        />
        <Path
          d="M10.1696 2.25H13.8304C14.3646 2.24999 14.8104 2.24998 15.1747 2.27974C15.5546 2.31078 15.9112 2.37789 16.2485 2.54973C16.7659 2.81338 17.1866 3.23408 17.4503 3.75153C17.6221 4.08879 17.6892 4.44545 17.7203 4.82533C17.75 5.18955 17.75 5.63538 17.75 6.16951V17.8305C17.75 18.3646 17.75 18.8104 17.7203 19.1747C17.6892 19.5546 17.6221 19.9112 17.4503 20.2485C17.1866 20.7659 16.7659 21.1866 16.2485 21.4503C15.9112 21.6221 15.5546 21.6892 15.1747 21.7203C14.8104 21.75 14.3646 21.75 13.8305 21.75H10.1695C9.6354 21.75 9.18956 21.75 8.82533 21.7203C8.44545 21.6892 8.08879 21.6221 7.75153 21.4503C7.23408 21.1866 6.81338 20.7659 6.54973 20.2485C6.37789 19.9112 6.31078 19.5546 6.27974 19.1747C6.24998 18.8104 6.24999 18.3646 6.25 17.8304V6.16957C6.24999 5.63542 6.24998 5.18956 6.27974 4.82533C6.31078 4.44545 6.37789 4.08879 6.54973 3.75153C6.81338 3.23408 7.23408 2.81338 7.75153 2.54973C8.08879 2.37789 8.44545 2.31078 8.82533 2.27974C9.18956 2.24998 9.63542 2.24999 10.1696 2.25ZM8.94748 3.77476C8.66036 3.79822 8.52307 3.8401 8.43251 3.88624C8.19731 4.00608 8.00608 4.19731 7.88624 4.43251C7.8401 4.52307 7.79822 4.66036 7.77476 4.94748C7.75058 5.24336 7.75 5.62757 7.75 6.2V17.8C7.75 18.3724 7.75058 18.7566 7.77476 19.0525C7.79822 19.3396 7.8401 19.4769 7.88624 19.5675C8.00608 19.8027 8.19731 19.9939 8.43251 20.1138C8.52307 20.1599 8.66036 20.2018 8.94748 20.2252C9.24336 20.2494 9.62757 20.25 10.2 20.25H13.8C14.3724 20.25 14.7566 20.2494 15.0525 20.2252C15.3396 20.2018 15.4769 20.1599 15.5675 20.1138C15.8027 19.9939 15.9939 19.8027 16.1138 19.5675C16.1599 19.4769 16.2018 19.3396 16.2252 19.0525C16.2494 18.7566 16.25 18.3724 16.25 17.8V6.2C16.25 5.62757 16.2494 5.24336 16.2252 4.94748C16.2018 4.66036 16.1599 4.52307 16.1138 4.43251C15.9939 4.19731 15.8027 4.00608 15.5675 3.88624C15.4769 3.8401 15.3396 3.79822 15.0525 3.77476C14.878 3.7605 14.6726 3.75444 14.416 3.75188L14.2917 4.12477C14.1868 4.4395 14.1344 4.59686 14.0371 4.71321C13.9512 4.81595 13.8408 4.89547 13.7162 4.94449C13.5751 5 13.4092 5 13.0774 5H10.9226C10.5908 5 10.4249 5 10.2838 4.94449C10.1592 4.89547 10.0488 4.81595 9.96292 4.71321C9.86562 4.59686 9.81317 4.4395 9.70826 4.12478L9.58396 3.75188C9.32737 3.75444 9.12205 3.7605 8.94748 3.77476Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SmartphoneIcon;
