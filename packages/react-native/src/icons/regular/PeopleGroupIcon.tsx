import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PeopleGroupIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <g opacity=".5" fill={color}>
          <Path d="M15.1521 9.03227C15.6286 9.49839 16.2808 9.78571 17 9.78571 18.4596 9.78571 19.6429 8.60247 19.6429 7.14286 19.6429 5.68325 18.4596 4.5 17 4.5 16.3351 4.5 15.7276 4.74552 15.2631 5.15085 15.4447 5.47062 15.5807 5.8197 15.6621 6.18923 15.96 5.772 16.4483 5.5 17 5.5 17.9074 5.5 18.6429 6.23553 18.6429 7.14286 18.6429 8.05018 17.9074 8.78571 17 8.78571 16.4147 8.78571 15.9009 8.47964 15.6099 8.01883 15.5077 8.38198 15.352 8.72279 15.1521 9.03227zM8.73688 5.15082C8.27241 4.74551 7.66489 4.5 7.00003 4.5 5.54042 4.5 4.35717 5.68325 4.35717 7.14286 4.35717 8.60247 5.54042 9.78571 7.00003 9.78571 7.71926 9.78571 8.37139 9.49841 8.84792 9.0323 8.64797 8.72283 8.49237 8.38203 8.39008 8.0189 8.09907 8.47967 7.58529 8.78571 7.00003 8.78571 6.0927 8.78571 5.35717 8.05018 5.35717 7.14286 5.35717 6.23553 6.0927 5.5 7.00003 5.5 7.55176 5.5 8.03996 5.77197 8.33789 6.18917 8.41934 5.81965 8.55529 5.47058 8.73688 5.15082zM4.70114 10.2973C4.40043 10.3775 4.10486 10.4763 3.80957 10.5749 3.72517 10.6031 3.64076 10.6314 3.55629 10.6591 2.70112 10.94 2.04684 11.6337 1.82645 12.5025L1.52823 14.6346C1.41518 15.4513 1.8535 16.3091 2.7476 16.522 2.9963 16.5812 3.29038 16.6413 3.63278 16.6965 3.90541 16.7405 4.16204 16.5551 4.20598 16.2825 4.24992 16.0099 4.06454 15.7532 3.79192 15.7093 3.47334 15.6579 3.20345 15.6026 2.97923 15.5492 2.67551 15.4769 2.46302 15.1746 2.51879 14.7717L2.80232 12.7234C2.94344 12.2027 3.34189 11.673 3.86841 11.5 4.18153 11.3971 4.96173 11.25 4.96173 11.25 5.38207 11.5 5.5324 11.6014 5.5324 11.6014 5.78105 11.7215 6.07999 11.6173 6.2001 11.3686 6.32021 11.12 6.21601 10.821 5.96736 10.7009 5.86456 10.6513 5.76727 10.5937 5.67147 10.537 5.37399 10.361 5.0908 10.1934 4.70114 10.2973zM20.1904 10.575C19.8951 10.4763 19.5996 10.3775 19.2988 10.2973 18.9092 10.1934 18.626 10.361 18.3285 10.537 18.2327 10.5937 18.1354 10.6513 18.0326 10.7009 17.784 10.821 17.6798 11.12 17.7999 11.3686 17.92 11.6173 18.2189 11.7215 18.4676 11.6014 18.4676 11.6014 18.6179 11.5 19.0383 11.25 19.0383 11.25 19.8185 11.3971 20.1316 11.5 20.6581 11.673 21.0565 12.2027 21.1977 12.7234L21.4812 14.7717C21.537 15.1746 21.3245 15.4769 21.0208 15.5492 20.7965 15.6026 20.5266 15.6579 20.2081 15.7093 19.9354 15.7532 19.7501 16.0099 19.794 16.2825 19.8379 16.5551 20.0946 16.7405 20.3672 16.6965 20.7096 16.6413 21.0037 16.5812 21.2524 16.522 22.1465 16.3091 22.5848 15.4513 22.4718 14.6346L22.1735 12.5025C21.9531 11.6337 21.2989 10.94 20.4437 10.6591 20.3592 10.6313 20.2748 10.6032 20.1904 10.575z" />
        </g>
        <Path
          d="M12 3.25C9.92893 3.25 8.25 4.92893 8.25 7 8.25 9.07107 9.92893 10.75 12 10.75 14.0711 10.75 15.75 9.07107 15.75 7 15.75 4.92893 14.0711 3.25 12 3.25zM9.75 7C9.75 5.75736 10.7574 4.75 12 4.75 13.2426 4.75 14.25 5.75736 14.25 7 14.25 8.24264 13.2426 9.25 12 9.25 10.7574 9.25 9.75 8.24264 9.75 7zM15.2359 11.4145C14.6257 11.2421 14.0486 11.4491 13.653 11.7117 13.294 11.95 12.7116 12.2356 12.0001 12.2356 11.2885 12.2356 10.7062 11.95 10.3471 11.7117 9.95155 11.4491 9.37445 11.2421 8.76429 11.4145 8.60459 11.4596 8.44562 11.5082 8.28749 11.5601L7.32832 11.8752C6.11507 12.2738 5.1865 13.258 4.87368 14.4912L4.86345 14.5316 4.45511 17.4815C4.29403 18.6453 4.91779 19.874 6.1994 20.1793 7.36965 20.458 9.25177 20.75 12.0001 20.75 14.7484 20.75 16.6305 20.458 17.8008 20.1793 19.0824 19.874 19.7061 18.6453 19.545 17.4815L19.1367 14.5316 19.1265 14.4912C18.8137 13.258 17.8851 12.2738 16.6718 11.8752L15.7127 11.5601C15.5545 11.5082 15.3956 11.4596 15.2359 11.4145zM14.4825 12.9614C14.6568 12.8458 14.78 12.8444 14.8279 12.858 14.9675 12.8974 15.1063 12.9398 15.2445 12.9852L16.2037 13.3003C16.924 13.5369 17.4689 14.1117 17.6627 14.8228L18.0592 17.6872C18.1345 18.231 17.8486 18.6259 17.4532 18.7201 16.4066 18.9694 14.6418 19.25 12.0001 19.25 9.35836 19.25 7.5936 18.9694 6.54692 18.7201 6.15159 18.6259 5.86567 18.231 5.94094 17.6872L6.33744 14.8228C6.53129 14.1117 7.07616 13.5369 7.79649 13.3003L8.75565 12.9852C8.8938 12.9398 9.03269 12.8974 9.17222 12.858 9.22019 12.8444 9.34336 12.8458 9.51762 12.9614 10.0188 13.2941 10.8896 13.7356 12.0001 13.7356 13.1105 13.7356 13.9813 13.2941 14.4825 12.9614z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PeopleGroupIcon;
