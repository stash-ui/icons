import * as React from 'react';
import { IconProps } from './types';

export const NewWindowPageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.7778 5.5H13.2222C14.0435 5.5 14.6905 5.49999 15.2111 5.54253C15.7423 5.58593 16.1859 5.67609 16.589 5.88148C17.2475 6.21703 17.783 6.75247 18.1185 7.41103C18.3239 7.81413 18.4141 8.25771 18.4575 8.78889C18.5 9.30954 18.5 9.95651 18.5 10.7778V13.2222C18.5 14.0435 18.5 14.6905 18.4575 15.2111C18.4141 15.7423 18.3239 16.1859 18.1185 16.589C17.783 17.2475 17.2475 17.783 16.589 18.1185C16.1859 18.3239 15.7423 18.4141 15.2111 18.4575C14.6905 18.5 14.0435 18.5 13.2222 18.5H9.62132C7.83951 18.5 6.94718 16.3457 8.20711 15.0858L13.0429 10.25H10.5C10.2239 10.25 10 10.0261 10 9.75C10 9.47386 10.2239 9.25 10.5 9.25H14.25C14.5261 9.25 14.75 9.47386 14.75 9.75V13.5C14.75 13.7761 14.5261 14 14.25 14C13.9739 14 13.75 13.7761 13.75 13.5V10.9571L8.91421 15.7929C8.28425 16.4229 8.73042 17.5 9.62132 17.5H13.2C14.0483 17.5 14.6545 17.4996 15.1297 17.4608C15.599 17.4224 15.8963 17.3491 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.3491 15.8963 17.4224 15.599 17.4608 15.1297C17.4996 14.6545 17.5 14.0483 17.5 13.2V10.8C17.5 9.95167 17.4996 9.34549 17.4608 8.87032C17.4224 8.40099 17.3491 8.10366 17.2275 7.86502C16.9878 7.39462 16.6054 7.01217 16.135 6.77248C15.8963 6.65089 15.599 6.57756 15.1297 6.53921C14.6545 6.50039 14.0483 6.5 13.2 6.5H10.8C9.95167 6.5 9.34549 6.50039 8.87032 6.53921C8.40099 6.57756 8.10366 6.65089 7.86502 6.77248C7.39462 7.01217 7.01217 7.39462 6.77248 7.86502C6.65089 8.10366 6.57756 8.40099 6.53921 8.87032C6.50039 9.34549 6.5 9.95167 6.5 10.8V13.5C6.5 13.7761 6.27614 14 6 14C5.72386 14 5.5 13.7761 5.5 13.5L5.5 10.7778C5.5 9.95652 5.49999 9.30955 5.54253 8.78889C5.58593 8.25771 5.67609 7.81414 5.88148 7.41103C6.21703 6.75247 6.75247 6.21703 7.41103 5.88148C7.81414 5.67609 8.25771 5.58593 8.78889 5.54253C9.30955 5.49999 9.95652 5.5 10.7778 5.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default NewWindowPageIcon;
