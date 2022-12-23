import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchBoxIcon = (
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
          d="M18.9449 8.25664C18.7083 8.09783 18.3878 8.16086 18.2289 8.39744C18.0701 8.63401 18.1332 8.95453 18.3697 9.11335C18.8077 9.40738 19.1445 9.85413 19.2917 10.4037C19.3655 10.6789 19.6484 10.8422 19.9236 10.7685C20.1988 10.6947 20.3622 10.4118 20.2884 10.1366C20.0742 9.33694 19.5821 8.68445 18.9449 8.25664Z"
          fill={color}
        />
        <Path
          d="M21.3378 6.66221C19.1215 4.44593 15.5282 4.44593 13.3119 6.66221 11.2677 8.70644 11.109 11.9222 12.8359 14.1483L11.0852 16.3367C10.6402 16.8929 10.7303 17.7046 11.2866 18.1496 11.8428 18.5946 12.6545 18.5044 13.0995 17.9482L14.8362 15.7772C16.953 16.8099 19.579 16.4469 21.3378 14.6881 23.5541 12.4718 23.5541 8.87849 21.3378 6.66221zM14.7712 8.12146C16.1815 6.7111 18.4682 6.7111 19.8785 8.12146 21.2889 9.53182 21.2889 11.8185 19.8785 13.2288 18.4682 14.6392 16.1815 14.6392 14.7712 13.2288 13.3608 11.8185 13.3608 9.53182 14.7712 8.12146zM4.86941 7.08198C2.7324 7.08198 1 8.81437 1 10.9514 1 13.0884 2.73239 14.8208 4.86941 14.8208H8.99679C9.42419 14.8208 9.77067 14.4743 9.77067 14.0469 9.77067 13.6195 9.42419 13.273 8.99679 13.273H4.86941C3.5872 13.273 2.54777 12.2336 2.54777 10.9514 2.54777 9.66918 3.5872 8.62974 4.86941 8.62974H11.0605C11.4879 8.62974 11.8344 8.28326 11.8344 7.85586 11.8344 7.42845 11.4879 7.08198 11.0605 7.08198H4.86941z"
          fill={color}
        />
        <Path
          d="M3.83757 10.9514C3.83757 10.3815 4.29954 9.91955 4.86941 9.91955H9.51271C10.0826 9.91955 10.5446 10.3815 10.5446 10.9514C10.5446 11.5213 10.0826 11.9832 9.51271 11.9832H4.86941C4.29954 11.9832 3.83757 11.5213 3.83757 10.9514Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SearchBoxIcon;
