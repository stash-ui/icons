import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CheckIcon = ({ color = 'currentColor', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.5172 7.9569C17.8172 8.24256 17.8288 8.7173 17.5431 9.01724L10.8764 16.0172C10.7349 16.1659 10.5386 16.25 10.3333 16.25C10.1281 16.25 9.93179 16.1659 9.79023 16.0172L6.4569 12.5172C6.17123 12.2173 6.18281 11.7426 6.48276 11.4569C6.78271 11.1712 7.25744 11.1828 7.5431 11.4828L10.3333 14.4125L16.4569 7.98276C16.7426 7.68281 17.2173 7.67123 17.5172 7.9569Z"
      fill={color}
    />
  </Svg>
);

export default CheckIcon;
