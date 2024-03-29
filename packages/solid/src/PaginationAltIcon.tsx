import * as React from 'react';
import { IconProps } from './types';

export const PaginationAltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <rect
          x="2.5"
          y="7"
          width="19"
          height="10"
          rx="3"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 11.8C2.5 10.1198 2.5 9.27976 2.82698 8.63803C3.1146 8.07354 3.57354 7.6146 4.13803 7.32698C4.77976 7 5.61984 7 7.3 7H16.7C18.3802 7 19.2202 7 19.862 7.32698C20.4265 7.6146 20.8854 8.07354 21.173 8.63803C21.5 9.27976 21.5 10.1198 21.5 11.8V12.2C21.5 13.8802 21.5 14.7202 21.173 15.362C20.8854 15.9265 20.4265 16.3854 19.862 16.673C19.2202 17 18.3802 17 16.7 17H7.3C5.61984 17 4.77976 17 4.13803 16.673C3.57354 16.3854 3.1146 15.9265 2.82698 15.362C2.5 14.7202 2.5 13.8802 2.5 12.2V11.8ZM17.4619 11.3087C17.5393 11.4955 17.4966 11.7106 17.3536 11.8536L16.3536 12.8536C16.2598 12.9473 16.1326 13 16 13C15.8674 13 15.7402 12.9473 15.6464 12.8536L14.6464 11.8536C14.5034 11.7106 14.4607 11.4955 14.5381 11.3087C14.6155 11.1218 14.7978 11 15 11H17C17.2022 11 17.3845 11.1218 17.4619 11.3087ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10H8.125C8.19404 10 8.25 10.056 8.25 10.125V14.5C8.25 14.7761 8.47386 15 8.75 15C9.02614 15 9.25 14.7761 9.25 14.5V10.125C9.25 9.50368 8.74632 9 8.125 9H7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PaginationAltIcon;
