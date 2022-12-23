import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LockClosedIcon = (
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
          d="M10.25 14.75C10.25 13.7835 11.0335 13 12 13C12.9665 13 13.75 13.7835 13.75 14.75C13.75 15.4481 13.3412 16.0507 12.75 16.3316V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V16.3316C10.6588 16.0507 10.25 15.4481 10.25 14.75Z"
          fill={color}
        />
        <Path
          d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7V9.5C16.5 9.5243 16.4983 9.54819 16.4949 9.57156C16.9037 9.62289 17.2598 9.71377 17.589 9.88148C18.2475 10.217 18.783 10.7525 19.1185 11.411C19.3239 11.8141 19.4141 12.2577 19.4575 12.7889C19.5 13.3095 19.5 13.9565 19.5 14.7778V16.2222C19.5 17.0435 19.5 17.6905 19.4575 18.2111C19.4141 18.7423 19.3239 19.1859 19.1185 19.589C18.783 20.2475 18.2475 20.783 17.589 21.1185C17.1859 21.3239 16.7423 21.4141 16.2111 21.4575C15.6905 21.5 15.0435 21.5 14.2223 21.5H9.77778C8.95656 21.5 8.30952 21.5 7.78889 21.4575C7.25771 21.4141 6.81413 21.3239 6.41103 21.1185C5.75247 20.783 5.21703 20.2475 4.88148 19.589C4.67609 19.1859 4.58593 18.7423 4.54253 18.2111C4.49999 17.6905 4.5 17.0435 4.5 16.2222V14.7778C4.5 13.9565 4.49999 13.3095 4.54253 12.7889C4.58593 12.2577 4.67609 11.8141 4.88148 11.411C5.21703 10.7525 5.75247 10.217 6.41103 9.88148C6.74018 9.71377 7.09631 9.62289 7.50508 9.57156C7.50173 9.54819 7.5 9.5243 7.5 9.5V7ZM15.5 9.5V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9.5L8.49993 9.50865C8.87209 9.5 9.29483 9.5 9.77779 9.5H14.2223C14.7052 9.5 15.1279 9.5 15.5001 9.50865L15.5 9.5ZM7.87032 10.5392C7.40099 10.5776 7.10366 10.6509 6.86502 10.7725C6.39462 11.0122 6.01217 11.3946 5.77248 11.865C5.65089 12.1037 5.57756 12.401 5.53921 12.8703C5.50039 13.3455 5.5 13.9517 5.5 14.8V16.2C5.5 17.0483 5.50039 17.6545 5.53921 18.1297C5.57756 18.599 5.65089 18.8963 5.77248 19.135C6.01217 19.6054 6.39462 19.9878 6.86502 20.2275C7.10366 20.3491 7.40099 20.4224 7.87032 20.4608C8.3455 20.4996 8.95167 20.5 9.8 20.5H14.2C15.0483 20.5 15.6545 20.4996 16.1297 20.4608C16.599 20.4224 16.8963 20.3491 17.135 20.2275C17.6054 19.9878 17.9878 19.6054 18.2275 19.135C18.3491 18.8963 18.4224 18.599 18.4608 18.1297C18.4996 17.6545 18.5 17.0483 18.5 16.2V14.8C18.5 13.9517 18.4996 13.3455 18.4608 12.8703C18.4224 12.401 18.3491 12.1037 18.2275 11.865C17.9878 11.3946 17.6054 11.0122 17.135 10.7725C16.8963 10.6509 16.599 10.5776 16.1297 10.5392C15.6545 10.5004 15.0483 10.5 14.2 10.5H9.8C8.95167 10.5 8.34549 10.5004 7.87032 10.5392Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default LockClosedIcon;