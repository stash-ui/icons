import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const AngleUpIcon = (
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
          d="M11.5757 10.3757C11.8101 10.1414 12.1899 10.1414 12.4243 10.3757L14.8243 12.7757C15.0586 13.01 15.0586 13.3899 14.8243 13.6243C14.5899 13.8586 14.2101 13.8586 13.9757 13.6243L12 11.6485L10.0243 13.6243C9.78995 13.8586 9.41005 13.8586 9.17574 13.6243C8.94142 13.3899 8.94142 13.01 9.17574 12.7757L11.5757 10.3757Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default AngleUpIcon;
