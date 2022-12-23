import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CaretUpIcon = (
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
          d="M11.3602 9.77273L8.16139 13.4091C7.766 13.8586 8.14216 14.5 8.80116 14.5H15.1988C15.8578 14.5 16.234 13.8586 15.8386 13.4091L12.6398 9.77273C12.3199 9.40909 11.6801 9.40909 11.3602 9.77273Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default CaretUpIcon;
