import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowRightIcon = (
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
          d="M12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L13.3536 17.3536C13.1583 17.5488 12.8417 17.5488 12.6464 17.3536C12.4512 17.1583 12.4512 16.8417 12.6464 16.6464L16.7929 12.5L6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5L16.7929 11.5L12.6464 7.35355C12.4512 7.15829 12.4512 6.84171 12.6464 6.64645Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArrowRightIcon;
