import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowUpIcon = (
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
          d="M12.3536 5.64645L17.3536 10.6464C17.5488 10.8417 17.5488 11.1583 17.3536 11.3536C17.1583 11.5488 16.8417 11.5488 16.6464 11.3536L12.5 7.20711V18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18V7.20711L7.35355 11.3536C7.15829 11.5488 6.84171 11.5488 6.64645 11.3536C6.45118 11.1583 6.45118 10.8417 6.64645 10.6464L11.6464 5.64645C11.8417 5.45118 12.1583 5.45118 12.3536 5.64645Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArrowUpIcon;
