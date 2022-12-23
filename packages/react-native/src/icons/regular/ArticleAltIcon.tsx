import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const ArticleAltIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <G opacity=".5" fill={color}>
          <Path d="M13.0298 10C12.9076 9.99997 12.7752 9.99994 12.6605 10.0093 12.5308 10.0199 12.3593 10.0461 12.1825 10.1362 11.9473 10.2561 11.7561 10.4473 11.6362 10.6825 11.5461 10.8593 11.5199 11.0308 11.5093 11.1605 11.4999 11.2752 11.5 11.4076 11.5 11.5298V12.7202C11.5 12.8424 11.4999 12.9748 11.5093 13.0895 11.5199 13.2192 11.5461 13.3907 11.6362 13.5675 11.7561 13.8027 11.9473 13.9939 12.1825 14.1138 12.3593 14.2039 12.5308 14.2301 12.6605 14.2407 12.7752 14.2501 12.9076 14.25 13.0298 14.25H14.9702C15.0924 14.25 15.2248 14.2501 15.3395 14.2407 15.4692 14.2301 15.6407 14.2039 15.8175 14.1138 16.0527 13.9939 16.2439 13.8027 16.3638 13.5675 16.4539 13.3907 16.4801 13.2192 16.4907 13.0895 16.5001 12.9748 16.5 12.8424 16.5 12.7203V11.5298C16.5 11.4076 16.5001 11.2752 16.4907 11.1605 16.4801 11.0308 16.4539 10.8593 16.3638 10.6825 16.2439 10.4473 16.0527 10.2561 15.8175 10.1362 15.6407 10.0461 15.4692 10.0199 15.3395 10.0093 15.2248 9.99994 15.0924 9.99997 14.9702 10H13.0298zM8.25 10.25C7.83579 10.25 7.5 10.5858 7.5 11 7.5 11.4142 7.83579 11.75 8.25 11.75H9.75C10.1642 11.75 10.5 11.4142 10.5 11 10.5 10.5858 10.1642 10.25 9.75 10.25H8.25zM8.25 12.5C7.83579 12.5 7.5 12.8358 7.5 13.25 7.5 13.6642 7.83579 14 8.25 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25 10.5 12.8358 10.1642 12.5 9.75 12.5H8.25zM8.25 15.25C7.83579 15.25 7.5 15.5858 7.5 16 7.5 16.4142 7.83579 16.75 8.25 16.75H15.75C16.1642 16.75 16.5 16.4142 16.5 16 16.5 15.5858 16.1642 15.25 15.75 15.25H8.25zM8.25 17.75C7.83579 17.75 7.5 18.0858 7.5 18.5 7.5 18.9142 7.83579 19.25 8.25 19.25H15.75C16.1642 19.25 16.5 18.9142 16.5 18.5 16.5 18.0858 16.1642 17.75 15.75 17.75H8.25z" />
        </G>
        <Path
          d="M17.8304 2.25H6.16957C5.63542 2.24999 5.18956 2.24998 4.82533 2.27974C4.44545 2.31078 4.08879 2.37789 3.75153 2.54973C3.23408 2.81338 2.81338 3.23408 2.54973 3.75153C2.37789 4.08879 2.31078 4.44545 2.27974 4.82533C2.24998 5.18956 2.24999 5.63541 2.25 6.16956V21C2.25 21.4142 2.58579 21.75 3 21.75C3.41421 21.75 3.75 21.4142 3.75 21V6.2C3.75 5.62757 3.75058 5.24336 3.77476 4.94748C3.79822 4.66036 3.8401 4.52307 3.88624 4.43251C4.00608 4.19731 4.19731 4.00608 4.43251 3.88624C4.52307 3.8401 4.66036 3.79822 4.94748 3.77476C5.24336 3.75058 5.62757 3.75 6.2 3.75H17.8C18.3724 3.75 18.7566 3.75058 19.0525 3.77476C19.3396 3.79822 19.4769 3.8401 19.5675 3.88624C19.8027 4.00608 19.9939 4.19731 20.1138 4.43251C20.1599 4.52307 20.2018 4.66036 20.2252 4.94748C20.2494 5.24336 20.25 5.62757 20.25 6.2V21C20.25 21.4142 20.5858 21.75 21 21.75C21.4142 21.75 21.75 21.4142 21.75 21V6.16955C21.75 5.6354 21.75 5.18956 21.7203 4.82533C21.6892 4.44545 21.6221 4.08879 21.4503 3.75153C21.1866 3.23408 20.7659 2.81338 20.2485 2.54973C19.9112 2.37789 19.5546 2.31078 19.1747 2.27974C18.8104 2.24998 18.3646 2.24999 17.8304 2.25Z"
          fill={color}
        />
        <Path
          d="M7.5 6.5C6.94772 6.5 6.5 6.94772 6.5 7.5C6.5 8.05229 6.94772 8.5 7.5 8.5H16.5C17.0523 8.5 17.5 8.05229 17.5 7.5C17.5 6.94772 17.0523 6.5 16.5 6.5H7.5Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArticleAltIcon;
