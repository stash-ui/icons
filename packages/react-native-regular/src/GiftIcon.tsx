import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const GiftIcon = ({ color = 'currentColor', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6385 5.10442C9.84894 3.92013 8.26845 3.56473 7.04795 4.29704C5.61904 5.15438 5.44513 6.83567 6.15481 8H5.80078C4.97235 8 4.30078 8.67157 4.30078 9.5V11.5C4.30078 12.0128 4.55815 12.4656 4.95078 12.7361V18.1C4.95078 19.3426 5.95814 20.35 7.20078 20.35H16.9008C18.1434 20.35 19.1508 19.3426 19.1508 18.1V12.7361C19.5434 12.4656 19.8008 12.0128 19.8008 11.5V9.5C19.8008 8.67157 19.1292 8 18.3008 8H17.8467C18.5564 6.83567 18.3825 5.15438 16.9536 4.29704C15.7331 3.56473 14.1526 3.92013 13.3631 5.10442L12.0008 7.1479L10.6385 5.10442ZM11.0008 9.5H5.80078V11.5H11.0008V9.5ZM13.0008 11.5V9.5H18.3008V11.5H13.0008ZM11.0008 13H6.45078V18.1C6.45078 18.5142 6.78657 18.85 7.20078 18.85H11.0008V13ZM13.0008 18.85V13H17.6508V18.1C17.6508 18.5142 17.315 18.85 16.9008 18.85H13.0008ZM7.81969 5.58328C8.35361 5.26293 9.04501 5.4184 9.39039 5.93647L10.5994 7.74998H8.41983C7.23678 7.74998 6.80523 6.19195 7.81969 5.58328ZM16.1819 5.58328C15.648 5.26293 14.9566 5.4184 14.6112 5.93647L13.4022 7.74998H15.5817C16.7648 7.74998 17.1963 6.19195 16.1819 5.58328Z"
      fill={color}
    />
  </Svg>
);

export default GiftIcon;