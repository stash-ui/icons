import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CaretDownIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M11.3602 14.2273L8.16139 10.5909C7.766 10.1414 8.14216 9.5 8.80116 9.5H15.1988C15.8578 9.5 16.234 10.1414 15.8386 10.5909L12.6398 14.2273C12.3199 14.5909 11.6801 14.5909 11.3602 14.2273Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default CaretDownIcon;
