import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const UserGroupIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <g opacity=".5" fill={color}>
          <Path d="M16.0003 4.5C14.5407 4.5 13.3574 5.68325 13.3574 7.14286 13.3574 8.60247 14.5407 9.78571 16.0003 9.78571 17.4599 9.78571 18.6431 8.60247 18.6431 7.14286 18.6431 5.68325 17.4599 4.5 16.0003 4.5zM14.3574 7.14286C14.3574 6.23553 15.093 5.5 16.0003 5.5 16.9076 5.5 17.6431 6.23553 17.6431 7.14286 17.6431 8.05018 16.9076 8.78571 16.0003 8.78571 15.093 8.78571 14.3574 8.05018 14.3574 7.14286zM18.1834 10.298C17.8334 10.2045 17.4992 10.3206 17.2689 10.4996 16.9984 10.7099 16.5211 11 16 11 15.7239 11 15.5 11.2239 15.5 11.5 15.5 11.7761 15.7239 12 16 12 16.8582 12 17.5563 11.5428 17.8826 11.2891 17.9004 11.2753 17.9165 11.2686 17.9261 11.2662L17.93 11.2654C18.0637 11.3011 18.1966 11.3407 18.3286 11.3841L19.0137 11.6091C19.5402 11.7821 19.9387 12.2027 20.0798 12.7234L20.3633 14.7717C20.4191 15.1746 20.2066 15.4769 19.9029 15.5492 19.6787 15.6026 19.4088 15.6579 19.0902 15.7093 18.8176 15.7532 18.6322 16.0098 18.6762 16.2825 18.7201 16.5551 18.9767 16.7405 19.2493 16.6965 19.5917 16.6413 19.8858 16.5812 20.1345 16.522 21.0286 16.3091 21.467 15.4513 21.3539 14.6346L21.0625 12.5294 21.0557 12.5025C20.8353 11.6337 20.181 10.94 19.3258 10.6591L18.6407 10.434C18.4893 10.3843 18.3368 10.3389 18.1834 10.298z" />
        </g>
        <Path
          d="M9.99997 4.75C8.69525 4.75 7.67103 5.7756 7.67103 7C7.67103 8.2244 8.69525 9.25 9.99997 9.25C11.3047 9.25 12.3289 8.2244 12.3289 7C12.3289 5.7756 11.3047 4.75 9.99997 4.75ZM6.17103 7C6.17103 4.91069 7.90379 3.25 9.99997 3.25C12.0961 3.25 13.8289 4.91069 13.8289 7C13.8289 9.08931 12.0961 10.75 9.99997 10.75C7.90379 10.75 6.17103 9.08931 6.17103 7ZM7.47057 12.9663C7.28901 12.8489 7.15145 12.8417 7.08748 12.8593C6.94381 12.8989 6.80082 12.9414 6.65858 12.9869L5.67418 13.3021C4.92348 13.5424 4.36581 14.122 4.16826 14.8265L3.76149 17.6898C3.68665 18.2167 3.96754 18.62 4.39454 18.7191C5.47176 18.9691 7.28594 19.25 9.99997 19.25C12.714 19.25 14.5282 18.9691 15.6054 18.7191C16.0324 18.62 16.3133 18.2167 16.2384 17.6898L15.8317 14.8265C15.6341 14.122 15.0765 13.5424 14.3258 13.3021L13.3414 12.9869C13.1991 12.9414 13.0561 12.8989 12.9125 12.8593C12.8485 12.8417 12.7109 12.8489 12.5294 12.9663C12.0165 13.298 11.1292 13.7356 9.99997 13.7356C8.87074 13.7356 7.98346 13.298 7.47057 12.9663ZM6.68927 11.4131C7.30076 11.2448 7.88188 11.446 8.28514 11.7068C8.65516 11.9461 9.25926 12.2356 9.99997 12.2356C10.7407 12.2356 11.3448 11.9461 11.7148 11.7068C12.1181 11.446 12.6992 11.2448 13.3107 11.4131C13.4741 11.4581 13.6368 11.5065 13.7986 11.5583L14.783 11.8735C16.0162 12.2682 16.9708 13.2469 17.2936 14.4867L17.3043 14.5279L17.7235 17.4789C17.8913 18.6596 17.2385 19.88 15.9445 20.1803C14.7464 20.4583 12.8178 20.75 9.99997 20.75C7.18215 20.75 5.2535 20.4583 4.05546 20.1803C2.76139 19.88 2.10866 18.6596 2.2764 17.4789L2.69562 14.5279L2.70636 14.4867C3.02911 13.2469 3.98372 12.2682 5.21689 11.8735L6.20129 11.5583C6.36314 11.5065 6.52583 11.4581 6.68927 11.4131Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default UserGroupIcon;
