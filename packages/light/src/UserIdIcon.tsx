import * as React from 'react';
import { IconProps } from './types';

export const UserIdIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.42116 11C8.42116 9.05484 10.0358 7.5 12.0001 7.5 13.9644 7.5 15.579 9.05484 15.579 11 15.579 12.9452 13.9644 14.5 12.0001 14.5 10.0358 14.5 8.42116 12.9452 8.42116 11zM12.0001 8.5C10.5635 8.5 9.42116 9.63145 9.42116 11 9.42116 12.3685 10.5635 13.5 12.0001 13.5 13.4367 13.5 14.579 12.3685 14.579 11 14.579 9.63145 13.4367 8.5 12.0001 8.5zM11 4C10.7239 4 10.5 4.22386 10.5 4.5 10.5 4.77614 10.7239 5 11 5H13C13.2761 5 13.5 4.77614 13.5 4.5 13.5 4.22386 13.2761 4 13 4H11z"
          fill={color}
        />
        <path
          d="M10.3774 1.5H13.6226C14.7236 1.5 15.5805 1.5 16.2679 1.55616C16.9658 1.61318 17.5329 1.73058 18.043 1.99047C18.8897 2.4219 19.5781 3.11031 20.0095 3.95704C20.2694 4.4671 20.3868 5.03416 20.4438 5.73209C20.5 6.41947 20.5 7.27638 20.5 8.37731V15.6226C20.5 16.7236 20.5 17.5805 20.4438 18.2679C20.3868 18.9658 20.2694 19.5329 20.0095 20.043C19.5781 20.8897 18.8897 21.5781 18.043 22.0095C17.5329 22.2694 16.9658 22.3868 16.2679 22.4438C15.5805 22.5 14.7236 22.5 13.6227 22.5H10.3774C9.27643 22.5 8.41947 22.5 7.73209 22.4438C7.03416 22.3868 6.4671 22.2694 5.95704 22.0095C5.11031 21.5781 4.4219 20.8897 3.99047 20.043C3.73058 19.5329 3.61318 18.9658 3.55616 18.2679C3.5 17.5805 3.5 16.7236 3.5 15.6226V8.37737C3.5 7.27642 3.5 6.41948 3.55616 5.73209C3.61318 5.03416 3.73058 4.4671 3.99047 3.95704C4.4219 3.11031 5.11031 2.4219 5.95704 1.99047C6.4671 1.73058 7.03416 1.61318 7.73209 1.55616C8.41948 1.5 9.27642 1.5 10.3774 1.5ZM7.81352 2.55284C7.17744 2.60481 6.75662 2.70539 6.41103 2.88148C5.75247 3.21703 5.21703 3.75247 4.88148 4.41103C4.70539 4.75662 4.60481 5.17744 4.55284 5.81352C4.50039 6.45545 4.5 7.27164 4.5 8.4V15.6C4.5 16.7284 4.50039 17.5446 4.55284 18.1865C4.59213 18.6674 4.6592 19.0252 4.76568 19.3205L4.94831 18.5496C5.24858 17.3962 6.13823 16.4813 7.29323 16.1116L8.27764 15.7964C8.44471 15.743 8.61271 15.6932 8.78151 15.6471C9.28812 15.5088 9.77922 15.6746 10.134 15.9066C10.5258 16.1628 11.1837 16.4856 12.0001 16.4856C12.8165 16.4856 13.4744 16.1628 13.8662 15.9066C14.221 15.6746 14.7121 15.5088 15.2187 15.6471C15.3875 15.6932 15.5555 15.743 15.7226 15.7964L16.707 16.1116C17.862 16.4813 18.7515 17.3963 19.0518 18.5497L19.0545 18.5603L19.2345 19.3201C19.3409 19.0248 19.4079 18.6671 19.4472 18.1865C19.4996 17.5446 19.5 16.7284 19.5 15.6V8.4C19.5 7.27164 19.4996 6.45545 19.4472 5.81352C19.3952 5.17744 19.2946 4.75662 19.1185 4.41103C18.783 3.75247 18.2475 3.21703 17.589 2.88148C17.2434 2.70539 16.8226 2.60481 16.1865 2.55284C15.5446 2.50039 14.7284 2.5 13.6 2.5H10.4C9.27164 2.5 8.45545 2.50039 7.81352 2.55284ZM6.41103 21.1185C6.75662 21.2946 7.17744 21.3952 7.81352 21.4472C8.45545 21.4996 9.27164 21.5 10.4 21.5H13.6C14.7284 21.5 15.5446 21.4996 16.1865 21.4472C16.8226 21.3952 17.2434 21.2946 17.589 21.1185C17.9201 20.9498 18.2201 20.7305 18.4793 20.4705L18.0827 18.7965C17.871 17.9908 17.2427 17.333 16.4021 17.064L15.4177 16.7488C15.2644 16.6998 15.1102 16.6541 14.9553 16.6118C14.8149 16.5735 14.62 16.6085 14.4135 16.7436C13.9271 17.0616 13.0788 17.4856 12.0001 17.4856C10.9214 17.4856 10.0731 17.0616 9.58674 16.7436C9.3802 16.6085 9.18531 16.5735 9.04487 16.6118C8.88996 16.6541 8.7358 16.6998 8.5825 16.7488L7.59809 17.064C6.75752 17.333 6.12918 17.9908 5.9175 18.7965L5.52091 20.4706C5.77999 20.7306 6.07995 20.9498 6.41103 21.1185Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserIdIcon;
