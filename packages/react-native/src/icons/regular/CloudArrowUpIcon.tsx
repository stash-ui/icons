import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CloudArrowUpIcon = (
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
          d="M5.54379 10.3022C5.88631 7.59432 8.19897 5.5 11 5.5C13.7365 5.5 16.007 7.49897 16.4295 10.1163L16.5066 10.594L16.9865 10.5326C17.1545 10.5111 17.3258 10.5 17.5 10.5C19.7091 10.5 21.5 12.2909 21.5 14.5C21.5 15.7564 20.9214 16.8772 20.0141 17.6113C19.327 18.1673 18.453 18.5 17.5 18.5C17.2239 18.5 17 18.7239 17 19C17 19.2761 17.2239 19.5 17.5 19.5C18.6902 19.5 19.7846 19.0835 20.6432 18.3887C21.775 17.4729 22.5 16.0709 22.5 14.5C22.5 11.7386 20.2614 9.5 17.5 9.5C17.442 9.5 17.3842 9.50099 17.3267 9.50296C16.6503 6.63468 14.0749 4.5 11 4.5C7.79366 4.5 5.13017 6.82115 4.59708 9.875C2.78004 10.6234 1.5 12.4116 1.5 14.5C1.5 16.0709 2.22504 17.4729 3.35681 18.3887C4.21543 19.0835 5.30975 19.5 6.5 19.5C6.77614 19.5 7 19.2761 7 19C7 18.7239 6.77614 18.5 6.5 18.5C5.54695 18.5 4.67296 18.1673 3.98586 17.6113C3.07863 16.8772 2.5 15.7564 2.5 14.5C2.5 12.7433 3.6327 11.2499 5.20902 10.7128L5.5046 10.612L5.54379 10.3022Z"
          fill={color}
        />
        <Path
          d="M14.8536 15.1464L12.3536 12.6464C12.1583 12.4512 11.8417 12.4512 11.6464 12.6464L9.14645 15.1464C8.95118 15.3417 8.95118 15.6583 9.14645 15.8536C9.34171 16.0488 9.65829 16.0488 9.85355 15.8536L11.5 14.2071V21C11.5 21.2761 11.7239 21.5 12 21.5C12.2761 21.5 12.5 21.2761 12.5 21V14.2071L14.1464 15.8536C14.3417 16.0488 14.6583 16.0488 14.8536 15.8536C15.0488 15.6583 15.0488 15.3417 14.8536 15.1464Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default CloudArrowUpIcon;
