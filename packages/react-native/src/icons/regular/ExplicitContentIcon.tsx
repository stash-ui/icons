import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ExplicitContentIcon = (
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
          d="M5.43597 7.18404C5 8.03968 5 9.15979 5 11.4V12.6C5 14.8402 5 15.9603 5.43597 16.816C5.81947 17.5686 6.43139 18.1805 7.18404 18.564C8.03968 19 9.15979 19 11.4 19H12.6C14.8402 19 15.9603 19 16.816 18.564C17.5686 18.1805 18.1805 17.5686 18.564 16.816C19 15.9603 19 14.8402 19 12.6V11.4C19 9.15979 19 8.03968 18.564 7.18404C18.1805 6.43139 17.5686 5.81947 16.816 5.43597C15.9603 5 14.8402 5 12.6 5H11.4C9.15979 5 8.03968 5 7.18404 5.43597C6.43139 5.81947 5.81947 6.43139 5.43597 7.18404ZM13.5 7.75C13.9142 7.75 14.25 8.08579 14.25 8.5C14.25 8.91422 13.9142 9.25 13.5 9.25C12.6739 9.25 11.0043 9.26114 11.0043 9.26114C10.8516 9.27361 10.7745 9.34059 10.7611 9.50428C10.7282 9.90728 10.7358 10.3169 10.7434 10.7244C10.7467 10.9003 10.75 11.0757 10.75 11.25H12.5C12.9142 11.25 13.25 11.5858 13.25 12C13.25 12.4142 12.9142 12.75 12.5 12.75H10.75C10.75 12.9243 10.7467 13.0998 10.7434 13.2756C10.7358 13.6831 10.7282 14.0927 10.7611 14.4957C10.7745 14.6594 10.8516 14.7264 11.0043 14.7389C11.0043 14.7389 12.6739 14.75 13.5 14.75C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 13.9142 16.25 13.5 16.25L11.5738 16.25C11.3163 16.25 11.0798 16.25 10.8821 16.2339C10.2672 16.1836 9.72578 15.8539 9.44074 15.2945C9.24579 14.9119 9.24776 14.4696 9.24964 14.0476C9.24982 14.0069 9.25 13.9664 9.25 13.9262V10.0738C9.24998 9.8163 9.24996 9.57982 9.26612 9.38213C9.33721 8.512 9.99613 7.83851 10.8821 7.76612C11.0798 7.74997 11.3163 7.74998 11.5738 7.75L13.5 7.75Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ExplicitContentIcon;