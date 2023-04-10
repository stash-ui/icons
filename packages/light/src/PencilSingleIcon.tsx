import * as React from 'react';
import { IconProps } from './types';

export const PencilSingleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.307 9.7369C13.445 9.49775 13.3631 9.19196 13.124 9.05389C12.8848 8.91582 12.579 8.99775 12.4409 9.2369L9.36972 14.5564C9.23165 14.7956 9.31359 15.1013 9.55273 15.2394C9.79188 15.3775 10.0977 15.2956 10.2357 15.0564L13.307 9.7369Z"
          fill={color}
        />
        <path
          d="M17.6884 7.81809L16.5692 9.75644C16.566 9.76241 16.5626 9.76832 16.559 9.77416L12.6431 16.5567C12.3643 17.0396 12.1964 17.3306 11.9861 17.5909C11.7995 17.8218 11.5895 18.0327 11.3593 18.2201C11.0998 18.4314 10.8095 18.6005 10.3277 18.8812L9.51468 19.3548L9.5082 19.3586L7.87065 20.3126C7.69907 20.4126 7.54176 20.5042 7.40797 20.5666C7.27213 20.6299 7.08532 20.7008 6.87084 20.6786C6.59565 20.6501 6.34561 20.5057 6.18333 20.2816C6.05686 20.107 6.02486 19.9098 6.01175 19.7605C6.00285 19.6592 6.00043 19.5414 6.00004 19.413L6 19.3426L6.00774 17.3377L6.01143 16.3892C6.01357 15.8316 6.01486 15.4957 6.06812 15.1652C6.11535 14.8722 6.19295 14.5848 6.29965 14.3078C6.41996 13.9955 6.58793 13.7046 6.86677 13.2217L11.912 4.48312C12.4057 3.62798 13.3855 3.17774 14.356 3.36007C15.5561 3.58556 16.6436 4.2134 17.439 5.14002C18.0821 5.88929 18.1821 6.96295 17.6884 7.81809ZM12.778 4.98312C13.0595 4.49561 13.6181 4.23893 14.1713 4.34288C15.148 4.52637 16.0329 5.03729 16.6801 5.79133C17.0468 6.21849 17.1038 6.83058 16.8223 7.31809L16.0987 8.57145C15.1103 7.29674 13.6525 6.45513 12.0544 6.23649L12.778 4.98312ZM11.5052 7.18767C13.1429 7.27775 14.6527 8.1494 15.5495 9.52262L11.7988 16.0191C11.4918 16.5508 11.3636 16.7701 11.2082 16.9625C11.0652 17.1394 10.9043 17.301 10.7279 17.4447C10.5361 17.6008 10.3172 17.7299 9.78681 18.039L9.4767 18.2196C9.22958 17.8048 8.87597 17.4453 8.42843 17.1869C7.98085 16.9285 7.49269 16.802 7.00986 16.7954L7.01126 16.4365C7.01365 15.8226 7.01603 15.5685 7.05538 15.3244C7.09157 15.0998 7.15104 14.8796 7.23281 14.6673C7.32169 14.4366 7.44755 14.2158 7.7545 13.6841L11.5052 7.18767ZM7.00596 17.7955L7.00028 19.2541C6.99962 19.4412 6.99994 19.562 7.00613 19.6503C7.09097 19.6089 7.20459 19.5432 7.38527 19.438L8.61259 18.723C8.45047 18.454 8.22001 18.2213 7.92843 18.053C7.63681 17.8846 7.32002 17.8014 7.00596 17.7955Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PencilSingleIcon;