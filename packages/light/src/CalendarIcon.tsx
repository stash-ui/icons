import * as React from 'react';
import { IconProps } from './types';

export const CalendarIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.5 6.5C8.5 6.22386 8.72386 6 9 6H15C15.2761 6 15.5 6.22386 15.5 6.5 15.5 6.77614 15.2761 7 15 7H9C8.72386 7 8.5 6.77614 8.5 6.5zM8 12C7.44772 12 7 12.4477 7 13 7 13.5523 7.44772 14 8 14 8.55228 14 9 13.5523 9 13 9 12.4477 8.55228 12 8 12zM16 12C15.4477 12 15 12.4477 15 13 15 13.5523 15.4477 14 16 14 16.5523 14 17 13.5523 17 13 17 12.4477 16.5523 12 16 12zM11 13C11 12.4477 11.4477 12 12 12 12.5523 12 13 12.4477 13 13 13 13.5523 12.5523 14 12 14 11.4477 14 11 13.5523 11 13zM8 16C7.44772 16 7 16.4477 7 17 7 17.5523 7.44772 18 8 18 8.55228 18 9 17.5523 9 17 9 16.4477 8.55228 16 8 16zM11 17C11 16.4477 11.4477 16 12 16 12.5523 16 13 16.4477 13 17 13 17.5523 12.5523 18 12 18 11.4477 18 11 17.5523 11 17z"
          fill={color}
        />
        <path
          d="M13.6226 3H10.3774C9.27642 3 8.41948 3 7.73209 3.05616C7.03416 3.11318 6.4671 3.23058 5.95704 3.49047C5.11031 3.9219 4.4219 4.61031 3.99047 5.45704C3.73058 5.9671 3.61318 6.53416 3.55616 7.23209C3.5 7.91948 3.5 8.77641 3.5 9.87737V14.1226C3.5 15.2236 3.5 16.0805 3.55616 16.7679C3.61318 17.4658 3.73058 18.0329 3.99047 18.543C4.4219 19.3897 5.11031 20.0781 5.95704 20.5095C6.4671 20.7694 7.03416 20.8868 7.73209 20.9438C8.41946 21 9.27637 21 10.3773 21H13.6226C14.7236 21 15.5805 21 16.2679 20.9438C16.9658 20.8868 17.5329 20.7694 18.043 20.5095C18.8897 20.0781 19.5781 19.3897 20.0095 18.543C20.2694 18.0329 20.3868 17.4658 20.4438 16.7679C20.5 16.0805 20.5 15.2236 20.5 14.1227V9.87736C20.5 8.77644 20.5 7.91946 20.4438 7.23209C20.3868 6.53416 20.2694 5.9671 20.0095 5.45704C19.5781 4.61031 18.8897 3.9219 18.043 3.49047C17.5329 3.23058 16.9658 3.11318 16.2679 3.05616C15.5805 3 14.7236 3 13.6226 3ZM6.41103 4.38148C6.75662 4.20539 7.17744 4.10481 7.81352 4.05284C8.45545 4.00039 9.27164 4 10.4 4H13.6C14.7284 4 15.5446 4.00039 16.1865 4.05284C16.8226 4.10481 17.2434 4.20539 17.589 4.38148C18.2475 4.71703 18.783 5.25247 19.1185 5.91103C19.2946 6.25662 19.3952 6.67744 19.4472 7.31352C19.4845 7.77069 19.4955 8.31625 19.4987 9H4.50133C4.50454 8.31625 4.51548 7.77069 4.55284 7.31352C4.60481 6.67744 4.70539 6.25662 4.88148 5.91103C5.21703 5.25247 5.75247 4.71703 6.41103 4.38148ZM4.5 10H19.5V14.1C19.5 15.2284 19.4996 16.0446 19.4472 16.6865C19.3952 17.3226 19.2946 17.7434 19.1185 18.089C18.783 18.7475 18.2475 19.283 17.589 19.6185C17.2434 19.7946 16.8226 19.8952 16.1865 19.9472C15.5446 19.9996 14.7284 20 13.6 20H10.4C9.27164 20 8.45545 19.9996 7.81352 19.9472C7.17744 19.8952 6.75662 19.7946 6.41103 19.6185C5.75247 19.283 5.21703 18.7475 4.88148 18.089C4.70539 17.7434 4.60481 17.3226 4.55284 16.6865C4.50039 16.0446 4.5 15.2284 4.5 14.1V10Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CalendarIcon;
