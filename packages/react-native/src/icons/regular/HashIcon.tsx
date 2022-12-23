import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HashIcon = (
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
          d="M10.4155 6.5068C10.6879 6.5522 10.8719 6.80982 10.8265 7.0822L10.5069 9L14.4931 9L14.8401 6.9178C14.8855 6.64542 15.1431 6.46141 15.4155 6.5068C15.6879 6.5522 15.8719 6.80982 15.8265 7.0822L15.5069 9L17 9C17.2761 9 17.5 9.22386 17.5 9.5C17.5 9.77614 17.2761 10 17 10L15.3402 10L14.6736 14L16.1667 14C16.4428 14 16.6667 14.2239 16.6667 14.5C16.6667 14.7761 16.4428 15 16.1667 15H14.5069L14.1599 17.0822C14.1145 17.3546 13.8569 17.5386 13.5845 17.4932C13.3121 17.4478 13.1281 17.1902 13.1735 16.9178L13.4931 15L9.5069 15L9.15986 17.0822C9.11447 17.3546 8.85685 17.5386 8.58447 17.4932C8.31208 17.4478 8.12807 17.1902 8.17347 16.9178L8.4931 15H7C6.72386 15 6.5 14.7761 6.5 14.5C6.5 14.2239 6.72386 14 7 14L8.65977 14L9.32644 10L7.83333 10C7.55719 10 7.33333 9.77615 7.33333 9.5C7.33333 9.22386 7.55719 9 7.83333 9L9.4931 9L9.84014 6.9178C9.88553 6.64542 10.1431 6.46141 10.4155 6.5068ZM10.3402 10L9.67356 14L13.6598 14L14.3264 10L10.3402 10Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default HashIcon;
