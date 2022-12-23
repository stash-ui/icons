import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IntegrationsIcon = (
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
          d="M7.5 4.5C6.94772 4.5 6.5 4.94772 6.5 5.5C6.5 6.05228 6.94772 6.5 7.5 6.5C8.05228 6.5 8.5 6.05228 8.5 5.5C8.5 4.94772 8.05228 4.5 7.5 4.5ZM5.5 5.5C5.5 4.39543 6.39543 3.5 7.5 3.5C8.60457 3.5 9.5 4.39543 9.5 5.5C9.5 6.43192 8.86261 7.21497 8 7.43699V12.0706C8.19588 11.872 8.41403 11.7049 8.64842 11.5638C9.55173 11.0201 10.7196 10.8592 11.7671 10.7149C11.8222 10.7073 11.8769 10.6998 11.9312 10.6923C13.0804 10.5326 14.083 10.3688 14.8138 9.87482C15.4245 9.46198 15.9031 8.77232 15.9869 7.43358C15.131 7.20705 14.5 6.42721 14.5 5.5C14.5 4.39543 15.3954 3.5 16.5 3.5C17.6046 3.5 18.5 4.39543 18.5 5.5C18.5 6.4362 17.8567 7.22216 16.9881 7.44001C16.8984 9.05455 16.3057 10.0733 15.3737 10.7033C14.417 11.35 13.1696 11.5299 12.0688 11.6827C12.0469 11.6858 12.025 11.6888 12.0032 11.6918C10.869 11.8493 9.88691 11.9856 9.16408 12.4206C8.81352 12.6316 8.53171 12.9107 8.33267 13.3033C8.13097 13.7011 8 14.2438 8 15V16.563C8.86261 16.785 9.5 17.5681 9.5 18.5C9.5 19.6046 8.60457 20.5 7.5 20.5C6.39543 20.5 5.5 19.6046 5.5 18.5C5.5 17.5681 6.13739 16.785 7 16.563V7.43699C6.13739 7.21497 5.5 6.43192 5.5 5.5ZM16.5 4.5C15.9477 4.5 15.5 4.94772 15.5 5.5C15.5 6.05228 15.9477 6.5 16.5 6.5C17.0523 6.5 17.5 6.05228 17.5 5.5C17.5 4.94772 17.0523 4.5 16.5 4.5ZM7.5 17.5C6.94772 17.5 6.5 17.9477 6.5 18.5C6.5 19.0523 6.94772 19.5 7.5 19.5C8.05228 19.5 8.5 19.0523 8.5 18.5C8.5 17.9477 8.05228 17.5 7.5 17.5Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default IntegrationsIcon;
