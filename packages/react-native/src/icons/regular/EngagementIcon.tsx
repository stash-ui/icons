import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EngagementIcon = (
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
          d="M2.5 7.56969C2.5 4.80417 4.92674 2.5 8 2.5 10.2748 2.5 12.2076 3.76991 13.0477 5.55331 13.1654 5.80312 13.4633 5.91023 13.7131 5.79255 13.9629 5.67487 14.07 5.37696 13.9523 5.12715 12.9399 2.97802 10.6447 1.5 8 1.5 4.44584 1.5 1.5 4.1831 1.5 7.56969 1.5 8.86911 1.9375 10.0711 2.67731 11.0548L1.92349 13.2708C1.63985 14.1046 2.56764 14.827 3.30656 14.3496L5.2712 13.0803C5.6261 13.2337 5.99815 13.3581 6.38381 13.4502 6.65239 13.5144 6.92214 13.3487 6.98631 13.0801 7.05048 12.8115 6.88477 12.5418 6.61619 12.4776 6.20591 12.3796 5.81455 12.239 5.44783 12.0615L5.1948 11.9391 2.93645 13.3981 3.80149 10.8553 3.62344 10.64C2.91601 9.78475 2.5 8.72083 2.5 7.56969zM14.9898 11.87C15.5349 11.4666 16.255 11.4247 16.805 11.5916 18.2329 12.0279 18.6637 13.6065 18.2747 14.7764 17.9745 15.6987 17.3093 16.373 16.6814 16.8094 16.3643 17.0298 16.0454 17.1976 15.7655 17.3119 15.5017 17.4196 15.2234 17.5001 14.9998 17.5001 14.7767 17.5001 14.5 17.4206 14.2371 17.3134 13.9584 17.1998 13.6413 17.0328 13.3254 16.813 12.6988 16.3769 12.0357 15.7033 11.7257 14.7791 11.3345 13.6053 11.7681 12.0407 13.1896 11.5932L13.1945 11.5916C13.7576 11.4207 14.4512 11.4856 14.9898 11.87zM16.5141 12.5484C16.0949 12.4213 15.6317 12.5351 15.4111 12.8543L15.0177 13.4238 14.6007 12.8713C14.3511 12.5406 13.8865 12.4277 13.4874 12.5478 12.7508 12.7814 12.4058 13.6564 12.674 14.4615 12.894 15.1171 13.3809 15.6333 13.8966 15.9922 14.152 16.1699 14.4042 16.3016 14.6146 16.3874 14.7197 16.4302 14.8103 16.4599 14.8819 16.4783 14.9176 16.4874 14.9462 16.4932 14.9678 16.4965 14.9888 16.4998 14.9989 16.5 14.9997 16.5001 15.0008 16.5 15.0109 16.4997 15.0313 16.4965 15.0531 16.4931 15.0819 16.4873 15.1179 16.478 15.1901 16.4594 15.2815 16.4294 15.3875 16.3861 15.5997 16.2994 15.854 16.1667 16.1107 15.9882 16.6299 15.6274 17.1141 15.1124 17.3242 14.4656L17.3254 14.462C17.5954 13.6522 17.2452 12.7721 16.5141 12.5484z"
          fill={color}
        />
        <Path
          d="M15 7.5C10.8934 7.5 7.5 10.5998 7.5 14.5 7.5 18.4002 10.8934 21.5 15 21.5 16.1395 21.5 17.2216 21.2626 18.1913 20.8366L20.5208 22.3421C21.3171 22.8567 22.3156 22.0779 22.0104 21.1803L21.1166 18.5522C21.9857 17.4112 22.5 16.0127 22.5 14.5 22.5 10.5998 19.1066 7.5 15 7.5zM8.5 14.5C8.5 11.2205 11.3746 8.5 15 8.5 18.6254 8.5 21.5 11.2205 21.5 14.5 21.5 15.8642 21.007 17.1244 20.1702 18.1364L19.9922 18.3517 21.0636 21.5023 18.2669 19.6948 18.0138 19.8173C17.1144 20.2528 16.0897 20.5 15 20.5 11.3746 20.5 8.5 17.7795 8.5 14.5zM5.5 5.5C5.22386 5.5 5 5.72386 5 6 5 6.27614 5.22386 6.5 5.5 6.5H10.5C10.7761 6.5 11 6.27614 11 6 11 5.72386 10.7761 5.5 10.5 5.5H5.5zM5 10C5 9.72386 5.22386 9.5 5.5 9.5H6.5C6.77614 9.5 7 9.72386 7 10 7 10.2761 6.77614 10.5 6.5 10.5H5.5C5.22386 10.5 5 10.2761 5 10zM5.5 7.5C5.22386 7.5 5 7.72386 5 8 5 8.27614 5.22386 8.5 5.5 8.5H8.5C8.77614 8.5 9 8.27614 9 8 9 7.72386 8.77614 7.5 8.5 7.5H5.5z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default EngagementIcon;
