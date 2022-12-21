import * as React from 'react';
import { IconProps } from './types';

export const SquareMinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3774 4.5H12.6226C13.7236 4.5 14.5805 4.5 15.2679 4.55616C15.9658 4.61318 16.5329 4.73058 17.043 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95704C19.2694 7.4671 19.3868 8.03416 19.4438 8.73209C19.5 9.41948 19.5 10.2764 19.5 11.3774V12.6226C19.5 13.7236 19.5 14.5805 19.4438 15.2679C19.3868 15.9658 19.2694 16.5329 19.0095 17.043C18.5781 17.8897 17.8897 18.5781 17.043 19.0095C16.5329 19.2694 15.9658 19.3868 15.2679 19.4438C14.5805 19.5 13.7236 19.5 12.6226 19.5H11.3774C10.2764 19.5 9.41948 19.5 8.73209 19.4438C8.03416 19.3868 7.4671 19.2694 6.95704 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.043C4.73058 16.5329 4.61318 15.9658 4.55616 15.2679C4.5 14.5805 4.5 13.7236 4.5 12.6226V11.3774C4.5 10.2764 4.5 9.41948 4.55616 8.73209C4.61318 8.03416 4.73058 7.4671 4.99047 6.95704C5.4219 6.11031 6.11031 5.4219 6.95704 4.99047C7.4671 4.73058 8.03416 4.61318 8.73209 4.55616C9.41948 4.5 10.2764 4.5 11.3774 4.5ZM8.81352 5.55284C8.17744 5.60481 7.75662 5.70539 7.41103 5.88148C6.75247 6.21703 6.21703 6.75247 5.88148 7.41103C5.70539 7.75662 5.60481 8.17744 5.55284 8.81352C5.50039 9.45545 5.5 10.2716 5.5 11.4V12.6C5.5 13.7284 5.50039 14.5446 5.55284 15.1865C5.60481 15.8226 5.70539 16.2434 5.88148 16.589C6.21703 17.2475 6.75247 17.783 7.41103 18.1185C7.75662 18.2946 8.17744 18.3952 8.81352 18.4472C9.45545 18.4996 10.2716 18.5 11.4 18.5H12.6C13.7284 18.5 14.5446 18.4996 15.1865 18.4472C15.8226 18.3952 16.2434 18.2946 16.589 18.1185C17.2475 17.783 17.783 17.2475 18.1185 16.589C18.2946 16.2434 18.3952 15.8226 18.4472 15.1865C18.4996 14.5446 18.5 13.7284 18.5 12.6V11.4C18.5 10.2716 18.4996 9.45545 18.4472 8.81352C18.3952 8.17744 18.2946 7.75662 18.1185 7.41103C17.783 6.75247 17.2475 6.21703 16.589 5.88148C16.2434 5.70539 15.8226 5.60481 15.1865 5.55284C14.5446 5.50039 13.7284 5.5 12.6 5.5H11.4C10.2716 5.5 9.45545 5.50039 8.81352 5.55284Z"
          fill={color}
        />
        <path
          d="M8.5 12C8.5 11.7239 8.72386 11.5 9 11.5H14.7812C15.0574 11.5 15.2812 11.7239 15.2812 12C15.2812 12.2761 15.0574 12.5 14.7812 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SquareMinusIcon;
