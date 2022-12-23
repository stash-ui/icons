import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SquareCheckIcon = (
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
          d="M15.3536 10.3536C15.5488 10.1583 15.5488 9.84171 15.3536 9.64645C15.1583 9.45118 14.8417 9.45118 14.6464 9.64645L11 13.2929L9.35355 11.6464C9.15829 11.4512 8.84171 11.4512 8.64645 11.6464C8.45118 11.8417 8.45118 12.1583 8.64645 12.3536L10.6464 14.3536C10.8417 14.5488 11.1583 14.5488 11.3536 14.3536L15.3536 10.3536Z"
          fill={color}
        />
        <Path
          d="M12.6226 4.5H11.3774C10.2764 4.5 9.41948 4.5 8.73209 4.55616C8.03416 4.61318 7.4671 4.73058 6.95704 4.99047C6.11031 5.4219 5.4219 6.11031 4.99047 6.95704C4.73058 7.4671 4.61318 8.03416 4.55616 8.73209C4.5 9.41948 4.5 10.2764 4.5 11.3774V12.6226C4.5 13.7236 4.5 14.5805 4.55616 15.2679C4.61318 15.9658 4.73058 16.5329 4.99047 17.043C5.4219 17.8897 6.11031 18.5781 6.95704 19.0095C7.4671 19.2694 8.03416 19.3868 8.73209 19.4438C9.41948 19.5 10.2764 19.5 11.3774 19.5H12.6226C13.7236 19.5 14.5805 19.5 15.2679 19.4438C15.9658 19.3868 16.5329 19.2694 17.043 19.0095C17.8897 18.5781 18.5781 17.8897 19.0095 17.043C19.2694 16.5329 19.3868 15.9658 19.4438 15.2679C19.5 14.5805 19.5 13.7236 19.5 12.6226V11.3774C19.5 10.2764 19.5 9.41948 19.4438 8.73209C19.3868 8.03416 19.2694 7.4671 19.0095 6.95704C18.5781 6.11031 17.8897 5.4219 17.043 4.99047C16.5329 4.73058 15.9658 4.61318 15.2679 4.55616C14.5805 4.5 13.7236 4.5 12.6226 4.5ZM7.41103 5.88148C7.75662 5.70539 8.17744 5.60481 8.81352 5.55284C9.45545 5.50039 10.2716 5.5 11.4 5.5H12.6C13.7284 5.5 14.5446 5.50039 15.1865 5.55284C15.8226 5.60481 16.2434 5.70539 16.589 5.88148C17.2475 6.21703 17.783 6.75247 18.1185 7.41103C18.2946 7.75662 18.3952 8.17744 18.4472 8.81352C18.4996 9.45545 18.5 10.2716 18.5 11.4V12.6C18.5 13.7284 18.4996 14.5446 18.4472 15.1865C18.3952 15.8226 18.2946 16.2434 18.1185 16.589C17.783 17.2475 17.2475 17.783 16.589 18.1185C16.2434 18.2946 15.8226 18.3952 15.1865 18.4472C14.5446 18.4996 13.7284 18.5 12.6 18.5H11.4C10.2716 18.5 9.45545 18.4996 8.81352 18.4472C8.17744 18.3952 7.75662 18.2946 7.41103 18.1185C6.75247 17.783 6.21703 17.2475 5.88148 16.589C5.70539 16.2434 5.60481 15.8226 5.55284 15.1865C5.50039 14.5446 5.5 13.7284 5.5 12.6V11.4C5.5 10.2716 5.50039 9.45545 5.55284 8.81352C5.60481 8.17744 5.70539 7.75662 5.88148 7.41103C6.21703 6.75247 6.75247 6.21703 7.41103 5.88148Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SquareCheckIcon;
