import * as React from 'react';
import { IconProps } from './types';

export const PodcastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5832 2.89317C8.18657 1.82183 10.0716 1.25 12 1.25C13.9284 1.25 15.8134 1.82183 17.4168 2.89317C19.0202 3.96451 20.2699 5.48726 21.0078 7.26884C21.7458 9.05042 21.9389 11.0108 21.5627 12.9021C21.1865 14.7934 20.2579 16.5307 18.8943 17.8943C18.6014 18.1872 18.1265 18.1872 17.8336 17.8943C17.5407 17.6014 17.5407 17.1265 17.8336 16.8336C18.9874 15.6798 19.7732 14.2098 20.0915 12.6095C20.4098 11.0092 20.2464 9.35035 19.622 7.84286C18.9976 6.33537 17.9402 5.0469 16.5835 4.14038C15.2268 3.23385 13.6317 2.75 12 2.75C10.3683 2.75 8.77326 3.23385 7.41655 4.14038C6.05984 5.0469 5.00242 6.33537 4.378 7.84286C3.75358 9.35035 3.5902 11.0092 3.90853 12.6095C4.22685 14.2098 5.01259 15.6798 6.16637 16.8336C6.45927 17.1265 6.45927 17.6014 6.16637 17.8943C5.87348 18.1872 5.39861 18.1872 5.10571 17.8943C3.74215 16.5307 2.81355 14.7934 2.43735 12.9021C2.06114 11.0108 2.25422 9.05042 2.99218 7.26884C3.73013 5.48726 4.97982 3.96451 6.5832 2.89317ZM9.12501 6.02035C9.99912 5.51569 10.9907 5.25 12 5.25C13.0093 5.25 14.0009 5.51569 14.875 6.02035C15.7491 6.52502 16.475 7.25089 16.9797 8.125C17.4843 8.99911 17.75 9.99066 17.75 11C17.75 12.0093 17.4843 13.0009 16.9797 13.875C16.7725 14.2337 16.3139 14.3566 15.9551 14.1495C15.5964 13.9424 15.4735 13.4837 15.6806 13.125C16.0536 12.4789 16.25 11.746 16.25 11C16.25 10.254 16.0536 9.52108 15.6806 8.875C15.3076 8.22892 14.7711 7.69241 14.125 7.31939C13.4789 6.94638 12.746 6.75 12 6.75C11.254 6.75 10.5211 6.94638 9.87501 7.31939C9.22892 7.69241 8.69241 8.22892 8.3194 8.875C7.94638 9.52108 7.75001 10.254 7.75001 11C7.75001 11.746 7.94638 12.4789 8.3194 13.125C8.5265 13.4837 8.4036 13.9424 8.04488 14.1495C7.68616 14.3566 7.22747 14.2337 7.02036 13.875C6.51569 13.0009 6.25001 12.0093 6.25001 11C6.25001 9.99066 6.51569 8.99911 7.02036 8.125C7.52503 7.25089 8.2509 6.52502 9.12501 6.02035ZM12 10.25C11.5858 10.25 11.25 10.5858 11.25 11C11.25 11.4142 11.5858 11.75 12 11.75C12.4142 11.75 12.75 11.4142 12.75 11C12.75 10.5858 12.4142 10.25 12 10.25ZM9.75001 11C9.75001 9.75736 10.7574 8.75 12 8.75C13.2426 8.75 14.25 9.75736 14.25 11C14.25 12.2426 13.2426 13.25 12 13.25C10.7574 13.25 9.75001 12.2426 9.75001 11ZM12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5L11.25 20.5C11.25 20.9142 11.5858 21.25 12 21.25C12.4142 21.25 12.75 20.9142 12.75 20.5L12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75ZM9.75001 16.5C9.75001 15.2574 10.7574 14.25 12 14.25C13.2426 14.25 14.25 15.2574 14.25 16.5L14.25 20.5C14.25 21.7426 13.2426 22.75 12 22.75C10.7574 22.75 9.75001 21.7426 9.75001 20.5L9.75001 16.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PodcastIcon;
