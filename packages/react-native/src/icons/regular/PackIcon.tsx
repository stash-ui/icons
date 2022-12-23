import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PackIcon = (
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
          d="M7.24485 3.35574C7.61733 3.24936 8.01142 3.24963 8.51247 3.24998H15.4876C15.9887 3.24963 16.3827 3.24936 16.7552 3.35574C17.0831 3.44938 17.3907 3.60318 17.6623 3.8093C17.9709 4.04346 18.2072 4.3589 18.5075 4.75994L19.995 6.74331C20.1987 7.01459 20.3591 7.22827 20.4757 7.46941C20.5786 7.68212 20.6536 7.9072 20.6989 8.13909C20.7503 8.40198 20.7502 8.66918 20.7501 9.00843L20.75 16.8305C20.75 17.3646 20.7501 17.8105 20.7203 18.1747C20.6893 18.5546 20.6221 18.9112 20.4503 19.2485C20.1867 19.7659 19.766 20.1866 19.2485 20.4503C18.9112 20.6221 18.5546 20.6892 18.1747 20.7203C17.8105 20.75 17.3646 20.75 16.8305 20.75H7.16958C6.63544 20.75 6.1896 20.75 5.82537 20.7203C5.44548 20.6892 5.08882 20.6221 4.75156 20.4503C4.23412 20.1866 3.81342 19.7659 3.54977 19.2485C3.37792 18.9112 3.31081 18.5546 3.27978 18.1747C3.25002 17.8105 3.25002 17.3646 3.25004 16.8305L3.25002 9.00841C3.24986 8.66917 3.24973 8.40198 3.30112 8.13909C3.34645 7.9072 3.42148 7.68212 3.52435 7.46941C3.64097 7.22827 3.80139 7.01459 4.00505 6.7433L5.49255 4.75994C5.7929 4.35889 6.02913 4.04346 6.33773 3.8093C6.60937 3.60318 6.91697 3.44938 7.24485 3.35574ZM10.5 12.5C10.5 13.0523 10.9478 13.5 11.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V8.75H19.9989C19.9965 8.54897 19.9885 8.4141 19.9629 8.28296C19.9299 8.11431 19.8754 7.95062 19.8005 7.79592C19.7259 7.64166 19.6244 7.49995 19.4375 7.25H13.4063L13.1241 4.99228C13.0532 4.4254 12.5713 4 12 4C11.4287 4 10.9469 4.4254 10.876 4.99228L10.5938 7.25H4.56261C4.37569 7.49995 4.27414 7.64166 4.19954 7.79592C4.12472 7.95062 4.07016 8.11431 4.03719 8.28296C4.01155 8.4141 4.00361 8.54897 4.00114 8.75H10.5V12.5ZM6.00003 17C6.00003 17.5523 6.44775 18 7.00003 18H10C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16H7.00003C6.44775 16 6.00003 16.4477 6.00003 17Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PackIcon;
