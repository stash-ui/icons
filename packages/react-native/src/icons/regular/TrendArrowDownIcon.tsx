import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TrendArrowDownIcon = (
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
          d="M6.85355 18.3536C6.65829 18.5488 6.34171 18.5488 6.14645 18.3536L3.64645 15.8536C3.45118 15.6583 3.45118 15.3417 3.64645 15.1464 3.84171 14.9512 4.15829 14.9512 4.35355 15.1464L6 16.7929 6 6C6 5.72386 6.22386 5.5 6.5 5.5 6.77615 5.5 7 5.72386 7 6L7 16.7929 8.64645 15.1464C8.84171 14.9512 9.15829 14.9512 9.35355 15.1464 9.54882 15.3417 9.54882 15.6583 9.35355 15.8536L6.85355 18.3536zM13 17.5C12.7239 17.5 12.5 17.2761 12.5 17 12.5 16.7239 12.7239 16.5 13 16.5H20C20.2761 16.5 20.5 16.7239 20.5 17 20.5 17.2761 20.2761 17.5 20 17.5H13zM12 14C11.7239 14 11.5 13.7761 11.5 13.5 11.5 13.2239 11.7239 13 12 13H17C17.2761 13 17.5 13.2239 17.5 13.5 17.5 13.7761 17.2761 14 17 14H12zM12 10.5C11.7239 10.5 11.5 10.2761 11.5 10 11.5 9.72386 11.7239 9.5 12 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10 15.5 10.2761 15.2761 10.5 15 10.5H12zM12 7.5C11.7239 7.5 11.5 7.27614 11.5 7 11.5 6.72386 11.7239 6.5 12 6.5H13C13.2761 6.5 13.5 6.72386 13.5 7 13.5 7.27614 13.2761 7.5 13 7.5H12z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default TrendArrowDownIcon;