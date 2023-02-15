import * as React from 'react';
import { IconProps } from './types';

export const ImageOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.6497 9.37074C16.1568 9.20975 16.7039 9.20975 17.2109 9.37074C17.5467 9.47733 17.8237 9.66436 18.0873 9.88512C18.3383 10.0954 18.621 10.3748 18.9549 10.7048L18.9762 10.7259L20.134 11.8702C20.1438 11.8798 20.1538 11.8897 20.164 11.8997C20.2784 12.0123 20.4133 12.145 20.514 12.3066C20.6018 12.4475 20.6674 12.6028 20.7067 12.7649C20.7522 12.9521 20.751 13.141 20.75 13.2966C20.7499 13.3104 20.7498 13.324 20.7497 13.3373C20.7442 14.7165 20.7162 15.7085 20.2799 16.5257C19.8669 17.2992 19.2114 17.9216 18.4134 18.3097C17.918 18.5505 17.3791 18.6531 16.7505 18.7021C16.1364 18.75 15.3754 18.75 14.4197 18.75H11.5511C10.5954 18.75 9.8344 18.75 9.22026 18.7021C8.59167 18.6531 8.05276 18.5505 7.55741 18.3097C6.75935 17.9216 6.10391 17.2992 5.69089 16.5257C5.42396 16.0258 5.31567 15.48 5.26579 14.8471C5.26495 14.8364 5.26406 14.8255 5.26316 14.8144C5.25194 14.676 5.23803 14.5044 5.26914 14.3155C5.29549 14.1555 5.35192 13.9878 5.4269 13.8448C5.51514 13.6764 5.63605 13.5386 5.73725 13.4232C5.746 13.4133 5.7546 13.4035 5.76302 13.3938L5.81762 13.3313L5.83903 13.3068C6.19093 12.9038 6.48667 12.5651 6.7509 12.311C7.02633 12.0462 7.32138 11.8186 7.68916 11.6903C8.2379 11.4989 8.83855 11.4989 9.3873 11.6903C9.75507 11.8186 10.0501 12.0462 10.3256 12.311C10.5898 12.5651 10.8855 12.9038 11.2374 13.3068L11.2531 13.3248L11.2549 13.3248L13.9058 10.7048C14.2397 10.3748 14.5224 10.0954 14.7734 9.88512C15.037 9.66436 15.314 9.47733 15.6497 9.37074ZM16.757 10.8004C16.5453 10.7332 16.3154 10.7332 16.1036 10.8004C16.0306 10.8236 15.9271 10.8755 15.7365 11.0351C15.5386 11.2009 15.2998 11.436 14.9388 11.7927L12.305 14.3959C11.6982 14.9956 10.6927 14.9635 10.129 14.318C9.75004 13.884 9.49719 13.5955 9.28582 13.3922C9.0803 13.1946 8.9687 13.1329 8.8933 13.1066C8.66444 13.0268 8.41202 13.0268 8.18315 13.1066C8.10776 13.1329 7.99615 13.1946 7.79064 13.3922C7.57926 13.5955 7.32641 13.884 6.94745 14.318L6.89285 14.3805C6.82472 14.4585 6.79043 14.498 6.76637 14.5284C6.76057 14.5357 6.75674 14.5408 6.75438 14.544C6.75361 14.546 6.75275 14.5483 6.75189 14.5509C6.75113 14.5531 6.75 14.5569 6.75 14.5569C6.75 14.5592 6.75004 14.5622 6.75014 14.5661C6.75045 14.5784 6.7513 14.5962 6.75321 14.6244C6.75514 14.6528 6.75771 14.6856 6.76115 14.7292C6.80365 15.2684 6.88631 15.5798 7.01408 15.8192C7.27364 16.3053 7.69139 16.7069 8.21332 16.9607C8.46829 17.0847 8.79566 17.1645 9.33686 17.2067C9.88584 17.2495 10.5883 17.25 11.5823 17.25H14.3884C15.3825 17.25 16.0849 17.2495 16.6339 17.2067C17.1751 17.1645 17.5025 17.0847 17.7575 16.9607C18.2794 16.7069 18.6971 16.3053 18.9567 15.8192C19.1848 15.3919 19.2439 14.8051 19.2497 13.3313C19.2502 13.2253 19.2502 13.1715 19.2485 13.1319C19.2481 13.1232 19.2477 13.1172 19.2474 13.1132C19.2463 13.1103 19.245 13.1072 19.2433 13.104C19.2405 13.1006 19.2352 13.0945 19.2264 13.0851C19.1976 13.0539 19.157 13.0135 19.0796 12.937L17.9218 11.7927C17.5609 11.436 17.3221 11.2009 17.1242 11.0351C16.9335 10.8755 16.8301 10.8236 16.757 10.8004Z"
          fill={color}
        />
        <path
          d="M11.5674 3.25H14.4326C15.3851 3.24999 16.1456 3.24999 16.7599 3.30018C17.3899 3.35165 17.9318 3.45963 18.4295 3.71322C19.2291 4.12068 19.8793 4.77085 20.2868 5.57054C20.5404 6.06824 20.6484 6.61012 20.6998 7.24013C20.75 7.85439 20.75 8.61493 20.75 9.56737V12.4326C20.75 13.3851 20.75 14.1456 20.6998 14.7599C20.6484 15.3899 20.5404 15.9318 20.2868 16.4295C19.8793 17.2291 19.2291 17.8793 18.4295 18.2868C17.9318 18.5404 17.3899 18.6484 16.7599 18.6998C16.1456 18.75 15.3851 18.75 14.4326 18.75H11.5674C10.6149 18.75 9.85439 18.75 9.24013 18.6998C8.61012 18.6484 8.06824 18.5404 7.57054 18.2868C6.77085 17.8793 6.12068 17.2291 5.71322 16.4295C5.45963 15.9318 5.35165 15.3899 5.30018 14.7599C5.24999 14.1456 5.24999 13.3851 5.25 12.4326V9.56739C5.24999 8.61494 5.24999 7.8544 5.30018 7.24013C5.35165 6.61012 5.45963 6.06824 5.71322 5.57054C6.12068 4.77085 6.77085 4.12068 7.57054 3.71322C8.06824 3.45963 8.61012 3.35165 9.24013 3.30018C9.8544 3.24999 10.6149 3.24999 11.5674 3.25ZM9.36228 4.79519C8.82503 4.83909 8.50252 4.92184 8.25153 5.04973C7.73408 5.31338 7.31338 5.73408 7.04973 6.25153C6.92184 6.50252 6.83909 6.82503 6.79519 7.36228C6.75058 7.90829 6.75 8.60753 6.75 9.6V12.4C6.75 13.3925 6.75058 14.0917 6.79519 14.6377C6.83909 15.175 6.92184 15.4975 7.04973 15.7485C7.31338 16.2659 7.73408 16.6866 8.25153 16.9503C8.50252 17.0782 8.82503 17.1609 9.36228 17.2048C9.90829 17.2494 10.6075 17.25 11.6 17.25H14.4C15.3925 17.25 16.0917 17.2494 16.6377 17.2048C17.175 17.1609 17.4975 17.0782 17.7485 16.9503C18.2659 16.6866 18.6866 16.2659 18.9503 15.7485C19.0782 15.4975 19.1609 15.175 19.2048 14.6377C19.2494 14.0917 19.25 13.3925 19.25 12.4V9.6C19.25 8.60753 19.2494 7.90829 19.2048 7.36228C19.1609 6.82503 19.0782 6.50252 18.9503 6.25153C18.6866 5.73408 18.2659 5.31338 17.7485 5.04973C17.4975 4.92184 17.175 4.83909 16.6377 4.79519C16.0917 4.75058 15.3925 4.75 14.4 4.75H11.6C10.6075 4.75 9.90829 4.75058 9.36228 4.79519Z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <path d="M11.5 7.75C11.0858 7.75 10.75 8.08579 10.75 8.5C10.75 8.91422 11.0858 9.25 11.5 9.25C11.9142 9.25 12.25 8.91422 12.25 8.5C12.25 8.08579 11.9142 7.75 11.5 7.75ZM9.25003 8.5C9.25003 7.25736 10.2574 6.25 11.5 6.25C12.7427 6.25 13.75 7.25736 13.75 8.5C13.75 9.74264 12.7427 10.75 11.5 10.75C10.2574 10.75 9.25003 9.74264 9.25003 8.5Z" />
          <path d="M6.95219 5.96164C7.09998 6.34859 6.9061 6.78208 6.51915 6.92987C5.48354 7.32541 4.75003 8.32798 4.75003 9.5V13C4.75003 14.9197 4.75929 15.7016 4.95804 16.3133C5.37844 17.6072 6.39285 18.6216 7.68671 19.042C8.29842 19.2407 9.08038 19.25 11 19.25H14.5C15.6598 19.25 16.6537 18.5318 17.0576 17.5131C17.2103 17.1281 17.6462 16.9397 18.0313 17.0924C18.4163 17.2451 18.6047 17.681 18.452 18.066C17.8291 19.637 16.2954 20.75 14.5 20.75H11C10.9454 20.75 10.8915 20.75 10.8382 20.75C9.13192 20.7503 8.09071 20.7505 7.22319 20.4686C5.47267 19.8998 4.10024 18.5274 3.53146 16.7768C3.24958 15.9093 3.24975 14.8681 3.25002 13.1618C3.25002 13.1085 3.25003 13.0546 3.25003 13V9.5C3.25003 7.68568 4.38659 6.13869 5.98395 5.5286C6.3709 5.38081 6.8044 5.57469 6.95219 5.96164Z" />
        </g>
      </svg>
    );
  }
);

export default ImageOpenIcon;
