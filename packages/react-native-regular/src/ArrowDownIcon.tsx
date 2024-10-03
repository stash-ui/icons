import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowDownIcon = ({ color = 'currentColor', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V16.1893L16.4697 12.4697C16.7626 12.1768 17.2374 12.1768 17.5303 12.4697C17.8232 12.7626 17.8232 13.2374 17.5303 13.5303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L6.46967 13.5303C6.17678 13.2374 6.17678 12.7626 6.46967 12.4697C6.76256 12.1768 7.23744 12.1768 7.53033 12.4697L11.25 16.1893V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
      fill={color}
    />
  </Svg>
);

export default ArrowDownIcon;
