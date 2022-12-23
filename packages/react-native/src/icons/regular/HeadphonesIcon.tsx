import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HeadphonesIcon = (
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
          d="M6.76361 11.6217C7.2893 11.8279 7.71356 12.2724 7.87092 12.8597L8.85914 16.5477C9.12228 17.5298 8.53948 18.5392 7.55742 18.8024C5.60542 19.3254 3.599 18.167 3.07597 16.215L3.02891 16.0394C2.53874 14.21 3.52534 12.3329 5.25793 11.6737C5.42815 8.09733 8.38165 5.25 12.0002 5.25C15.574 5.25 18.4991 8.02737 18.7349 11.5414C18.757 11.5465 18.7791 11.552 18.8012 11.5579C20.7532 12.0809 21.9116 14.0874 21.3885 16.0394L21.3415 16.215C20.8184 18.167 18.812 19.3254 16.86 18.8023C15.878 18.5392 15.2952 17.5298 15.5583 16.5477L16.5465 12.8596C16.6608 12.4333 16.9156 12.0822 17.2479 11.8429C17.1648 9.01607 14.8471 6.75 12.0002 6.75C9.22791 6.75 6.9575 8.89877 6.76361 11.6217ZM18.4129 13.0068C18.2311 12.9581 18.0441 13.066 17.9954 13.2478L17.0072 16.9359C16.9585 17.1178 17.0664 17.3047 17.2482 17.3535C18.4001 17.6621 19.584 16.9786 19.8926 15.8267L19.9396 15.6511C20.2483 14.4993 19.5647 13.3154 18.4129 13.0068ZM6.42203 13.2479C6.3733 13.066 6.18637 12.9581 6.00451 13.0068C4.8527 13.3154 4.16917 14.4994 4.4778 15.6512L4.52486 15.8268C4.83348 16.9786 6.01739 17.6621 7.16919 17.3535C7.35105 17.3048 7.45898 17.1178 7.41025 16.936L6.42203 13.2479Z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <Path d="M17.995 13.2478C18.0438 13.066 18.2307 12.9581 18.4126 13.0068 19.5644 13.3154 20.2479 14.4993 19.9393 15.6511L19.8922 15.8267C19.5836 16.9785 18.3997 17.6621 17.2479 17.3535 17.066 17.3047 16.9581 17.1178 17.0068 16.9359L17.995 13.2478zM6.00413 13.0068C6.186 12.9581 6.37293 13.066 6.42166 13.2479L7.40988 16.936C7.45861 17.1178 7.35068 17.3048 7.16882 17.3535 6.01702 17.6621 4.83311 16.9786 4.52448 15.8268L4.47743 15.6512C4.1688 14.4994 4.85233 13.3154 6.00413 13.0068z" />
        </g>
      </Svg>
    );
  }
);

export default HeadphonesIcon;
