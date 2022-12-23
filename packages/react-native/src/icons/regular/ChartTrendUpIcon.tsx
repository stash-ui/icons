import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChartTrendUpIcon = (
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
          d="M13.5 9C13.5 8.44772 13.9477 8 14.5 8H18C18.5523 8 19 8.44772 19 9V12.5C19 13.0523 18.5523 13.5 18 13.5C17.4477 13.5 17 13.0523 17 12.5V11.4142L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L9 13.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L12 13.5858L15.5858 10H14.5C13.9477 10 13.5 9.55228 13.5 9Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ChartTrendUpIcon;
