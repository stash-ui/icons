import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowLeftIcon = (
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
          d="M11.8839 6.11612C11.3957 5.62796 10.6043 5.62796 10.1161 6.11612L5.11612 11.1161C4.62796 11.6043 4.62796 12.3957 5.11612 12.8839L10.1161 17.8839C10.6043 18.372 11.3957 18.372 11.8839 17.8839C12.372 17.3957 12.372 16.6043 11.8839 16.1161L9.01777 13.25L18 13.25C18.6904 13.25 19.25 12.6904 19.25 12C19.25 11.3096 18.6904 10.75 18 10.75L9.01777 10.75L11.8839 7.88388C12.372 7.39573 12.372 6.60427 11.8839 6.11612Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArrowLeftIcon;
