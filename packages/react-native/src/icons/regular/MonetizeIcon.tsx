import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MonetizeIcon = (
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
          d="M12.5 6.5C12.5 6.22386 12.2761 6 12 6C11.7239 6 11.5 6.22386 11.5 6.5V7.5H11.1634C10.1926 7.5 9.5 8.36588 9.5 9.30687C9.5 9.76438 9.59259 10.1462 9.81434 10.4499C10.035 10.7521 10.3364 10.9112 10.6138 11.0167L13.0321 11.9185C13.2275 11.993 13.3215 12.0624 13.3781 12.1398C13.4337 12.216 13.5 12.3652 13.5 12.6931C13.5 13.1942 13.1491 13.5 12.8366 13.5H11.3313C10.9244 13.5 10.5 13.1122 10.5 12.5C10.5 12.2239 10.2761 12 10 12C9.72386 12 9.5 12.2239 9.5 12.5C9.5 13.5487 10.263 14.5 11.3313 14.5H11.5V15.5C11.5 15.7761 11.7239 16 12 16C12.2761 16 12.5 15.7761 12.5 15.5V14.5H12.8366C13.8074 14.5 14.5 13.6341 14.5 12.6931C14.5 12.2356 14.4074 11.8538 14.1857 11.5501C13.965 11.2479 13.6636 11.0888 13.3862 10.9833L10.9679 10.0815C10.7725 10.007 10.6785 9.93759 10.6219 9.86018C10.5663 9.78403 10.5 9.63476 10.5 9.30687C10.5 8.8058 10.8509 8.5 11.1634 8.5H12.6687C13.0756 8.5 13.5 8.8878 13.5 9.5C13.5 9.77614 13.7239 10 14 10C14.2761 10 14.5 9.77614 14.5 9.5C14.5 8.45126 13.737 7.5 12.6687 7.5H12.5V6.5Z"
          fill={color}
        />
        <Path
          d="M14.6226 2.5H9.37737C8.27642 2.5 7.41948 2.5 6.73209 2.55616C6.03416 2.61318 5.4671 2.73058 4.95704 2.99047C4.11031 3.4219 3.4219 4.11031 2.99047 4.95704C2.73058 5.4671 2.61318 6.03416 2.55616 6.73209C2.5 7.41948 2.5 8.27641 2.5 9.37737V12.6226C2.5 13.7236 2.5 14.5805 2.55616 15.2679C2.61318 15.9658 2.73058 16.5329 2.99047 17.043C3.4219 17.8897 4.11031 18.5781 4.95704 19.0095C5.4671 19.2694 6.03416 19.3868 6.73209 19.4438C7.41947 19.5 8.27639 19.5 9.37733 19.5H9.62605L11.2848 21.1974C11.6771 21.5988 12.3229 21.5988 12.7152 21.1974L14.374 19.5H14.6226C15.7236 19.5 16.5805 19.5 17.2679 19.4438C17.9658 19.3868 18.5329 19.2694 19.043 19.0095C19.8897 18.5781 20.5781 17.8897 21.0095 17.043C21.2694 16.5329 21.3868 15.9658 21.4438 15.2679C21.5 14.5805 21.5 13.7236 21.5 12.6227V9.37736C21.5 8.27642 21.5 7.41947 21.4438 6.73209C21.3868 6.03416 21.2694 5.4671 21.0095 4.95704C20.5781 4.11031 19.8897 3.4219 19.043 2.99047C18.5329 2.73058 17.9658 2.61318 17.2679 2.55616C16.5805 2.5 15.7236 2.5 14.6226 2.5ZM5.41103 3.88148C5.75662 3.70539 6.17744 3.60481 6.81352 3.55284C7.45545 3.50039 8.27164 3.5 9.4 3.5H14.6C15.7284 3.5 16.5446 3.50039 17.1865 3.55284C17.8226 3.60481 18.2434 3.70539 18.589 3.88148C19.2475 4.21703 19.783 4.75247 20.1185 5.41103C20.2946 5.75662 20.3952 6.17744 20.4472 6.81352C20.4996 7.45545 20.5 8.27164 20.5 9.4V12.6C20.5 13.7284 20.4996 14.5446 20.4472 15.1865C20.3952 15.8226 20.2946 16.2434 20.1185 16.589C19.783 17.2475 19.2475 17.783 18.589 18.1185C18.2434 18.2946 17.8226 18.3952 17.1865 18.4472C16.5446 18.4996 15.7284 18.5 14.6 18.5H13.953L12 20.4985L10.047 18.5H9.4C8.27164 18.5 7.45545 18.4996 6.81352 18.4472C6.17744 18.3952 5.75662 18.2946 5.41103 18.1185C4.75247 17.783 4.21703 17.2475 3.88148 16.589C3.70539 16.2434 3.60481 15.8226 3.55284 15.1865C3.50039 14.5446 3.5 13.7284 3.5 12.6V9.4C3.5 8.27164 3.50039 7.45545 3.55284 6.81352C3.60481 6.17744 3.70539 5.75662 3.88148 5.41103C4.21703 4.75247 4.75247 4.21703 5.41103 3.88148Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default MonetizeIcon;
