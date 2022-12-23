import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TrendArrowUpIcon = (
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
          d="M6.85355 5.64645C6.65829 5.45118 6.34171 5.45118 6.14645 5.64645L3.64645 8.14645C3.45118 8.34171 3.45118 8.65829 3.64645 8.85355 3.84171 9.04882 4.15829 9.04882 4.35355 8.85355L6 7.20711 6 18C6 18.2761 6.22386 18.5 6.5 18.5 6.77615 18.5 7 18.2761 7 18L7 7.20711 8.64645 8.85355C8.84171 9.04882 9.15829 9.04882 9.35355 8.85355 9.54882 8.65829 9.54882 8.34171 9.35355 8.14645L6.85355 5.64645zM13 6.5C12.7239 6.5 12.5 6.72386 12.5 7 12.5 7.27614 12.7239 7.5 13 7.5H20C20.2761 7.5 20.5 7.27614 20.5 7 20.5 6.72386 20.2761 6.5 20 6.5H13zM12 10C11.7239 10 11.5 10.2239 11.5 10.5 11.5 10.7761 11.7239 11 12 11H17C17.2761 11 17.5 10.7761 17.5 10.5 17.5 10.2239 17.2761 10 17 10H12zM12 13.5C11.7239 13.5 11.5 13.7239 11.5 14 11.5 14.2761 11.7239 14.5 12 14.5H15C15.2761 14.5 15.5 14.2761 15.5 14 15.5 13.7239 15.2761 13.5 15 13.5H12zM12 16.5C11.7239 16.5 11.5 16.7239 11.5 17 11.5 17.2761 11.7239 17.5 12 17.5H13C13.2761 17.5 13.5 17.2761 13.5 17 13.5 16.7239 13.2761 16.5 13 16.5H12z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default TrendArrowUpIcon;
