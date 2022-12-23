import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SignoutIcon = (
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
          d="M13.3536 8.64645C13.1583 8.45118 12.8417 8.45118 12.6464 8.64645L9.64645 11.6464C9.45118 11.8417 9.45118 12.1583 9.64645 12.3536L12.6464 15.3536C12.8417 15.5488 13.1583 15.5488 13.3536 15.3536C13.5488 15.1583 13.5488 14.8417 13.3536 14.6464L11.2071 12.5H20C20.2761 12.5 20.5 12.2761 20.5 12C20.5 11.7239 20.2761 11.5 20 11.5H11.2071L13.3536 9.35355C13.5488 9.15829 13.5488 8.84171 13.3536 8.64645Z"
          fill={color}
        />
        <Path
          d="M9.77779 3.5H12.2222C13.0435 3.5 13.6905 3.49999 14.2111 3.54253C14.7423 3.58593 15.1859 3.67609 15.589 3.88148C16.2475 4.21703 16.783 4.75247 17.1185 5.41103C17.3239 5.81413 17.4141 6.25771 17.4575 6.78889C17.5 7.30954 17.5 7.95651 17.5 8.77778V9C17.5 9.27614 17.2761 9.5 17 9.5C16.7239 9.5 16.5 9.27614 16.5 9V8.8C16.5 7.95167 16.4996 7.34549 16.4608 6.87032C16.4224 6.40099 16.3491 6.10366 16.2275 5.86502C15.9878 5.39462 15.6054 5.01217 15.135 4.77248C14.8963 4.65089 14.599 4.57756 14.1297 4.53921C13.6545 4.50039 13.0483 4.5 12.2 4.5H9.8C8.95167 4.5 8.34549 4.50039 7.87032 4.53921C7.40099 4.57756 7.10366 4.65089 6.86502 4.77248C6.39462 5.01217 6.01217 5.39462 5.77248 5.86502C5.65089 6.10366 5.57756 6.40099 5.53921 6.87032C5.50039 7.34549 5.5 7.95167 5.5 8.8V15.2C5.5 16.0483 5.50039 16.6545 5.53921 17.1297C5.57756 17.599 5.65089 17.8963 5.77248 18.135C6.01217 18.6054 6.39462 18.9878 6.86502 19.2275C7.10366 19.3491 7.40099 19.4224 7.87032 19.4608C8.34549 19.4996 8.95167 19.5 9.8 19.5H12.2C13.0483 19.5 13.6545 19.4996 14.1297 19.4608C14.599 19.4224 14.8963 19.3491 15.135 19.2275C15.6054 18.9878 15.9878 18.6054 16.2275 18.135C16.3491 17.8963 16.4224 17.599 16.4608 17.1297C16.4996 16.6545 16.5 16.0483 16.5 15.2V15C16.5 14.7239 16.7239 14.5 17 14.5C17.2761 14.5 17.5 14.7239 17.5 15V15.2222C17.5 16.0435 17.5 16.6905 17.4575 17.2111C17.4141 17.7423 17.3239 18.1859 17.1185 18.589C16.783 19.2475 16.2475 19.783 15.589 20.1185C15.1859 20.3239 14.7423 20.4141 14.2111 20.4575C13.6905 20.5 13.0435 20.5 12.2222 20.5H9.77778C8.95651 20.5 8.30954 20.5 7.78889 20.4575C7.25771 20.4141 6.81413 20.3239 6.41103 20.1185C5.75247 19.783 5.21703 19.2475 4.88148 18.589C4.67609 18.1859 4.58593 17.7423 4.54253 17.2111C4.49999 16.6905 4.5 16.0435 4.5 15.2222V8.77779C4.5 7.95652 4.49999 7.30955 4.54253 6.78889C4.58593 6.25771 4.67609 5.81413 4.88148 5.41103C5.21703 4.75247 5.75247 4.21703 6.41103 3.88148C6.81413 3.67609 7.25771 3.58593 7.78889 3.54253C8.30955 3.49999 8.95652 3.5 9.77779 3.5Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SignoutIcon;
