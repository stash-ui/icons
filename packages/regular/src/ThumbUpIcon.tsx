import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.7314 3.25C12.8174 3.25 12.0258 3.85226 11.7486 4.71425L10.9474 7.20512C10.8556 7.49041 10.7042 7.74947 10.5054 7.9643C9.89379 8.62512 9.37929 9.3727 8.97711 10.1833H8.32468C8.02616 9.76977 7.59073 9.46285 7.08246 9.32666C6.79331 9.24918 6.46479 9.24953 6.084 9.24994L6.00012 9.24999L5.91623 9.24994C5.53544 9.24953 5.20692 9.24918 4.91777 9.32666C4.14132 9.53471 3.53483 10.1412 3.32678 10.9177C3.24931 11.2068 3.24965 11.5353 3.25006 11.9161V18.0839C3.24965 18.4647 3.24931 18.7932 3.32678 19.0823C3.53483 19.8588 4.14132 20.4653 4.91777 20.6733C5.20691 20.7508 5.53543 20.7505 5.9162 20.7501L6.00012 20.75L6.084 20.7501C6.46478 20.7505 6.79332 20.7508 7.08246 20.6733C7.61767 20.5299 8.07212 20.1972 8.37099 19.75H15C16.3414 19.75 17.2558 19.6916 17.984 19.3826C18.609 19.1174 19.1528 18.6895 19.5632 18.1438C20.0287 17.5247 20.2441 16.7166 20.5628 15.5206L20.6022 15.373L21.2945 13.0061L21.3034 12.9765C21.4633 12.4425 21.5972 11.9954 21.6733 11.6269C21.7519 11.247 21.7899 10.8623 21.6894 10.4758C21.5417 9.90824 21.1897 9.41325 20.6971 9.0944C20.3584 8.87518 19.9796 8.79767 19.5994 8.76261C19.2324 8.72876 18.7758 8.72877 18.2354 8.72879L15.9327 8.72879C16.4664 7.03445 16.2912 5.66276 16.0037 4.752C15.6697 3.69413 14.6612 3.25 13.782 3.25H13.7314ZM8.7501 18.25C8.75029 18.1957 8.75023 18.1404 8.75017 18.0839V11.9161C8.75026 11.8363 8.75034 11.7587 8.7497 11.6833H9.93194L10.2263 11.0472C10.5779 10.2875 11.0438 9.59086 11.6063 8.98313C11.9553 8.60602 12.2174 8.15543 12.3753 7.6644L13.1765 5.17353C13.2617 4.90856 13.4929 4.75 13.7314 4.75H13.782C14.2311 4.75 14.4964 4.96016 14.5732 5.20359C14.8193 5.98285 14.997 7.35341 14.1568 9.16296C14.049 9.39522 14.0671 9.66644 14.2049 9.88229C14.3426 10.0981 14.581 10.2288 14.8371 10.2288H18.2006C18.7851 10.2288 19.1718 10.2295 19.4617 10.2563C19.7463 10.2825 19.8419 10.3276 19.8821 10.3536C20.053 10.4643 20.1825 10.6413 20.2377 10.8535C20.253 10.9122 20.2649 11.0306 20.2044 11.3232C20.1431 11.6199 20.0288 12.004 19.8569 12.5781L19.8555 12.5827L19.1575 14.9689L19.1552 14.9775C18.7781 16.3903 18.6317 16.8867 18.3643 17.2423C18.1102 17.5802 17.7765 17.8412 17.3981 18.0017C16.9895 18.1751 16.3722 18.25 15 18.25H8.7501ZM5.306 10.7755C5.37734 10.7564 5.48684 10.75 6.00012 10.75C6.51339 10.75 6.6229 10.7564 6.69423 10.7755C6.95305 10.8449 7.15521 11.0471 7.22456 11.3059C7.24367 11.3772 7.25012 11.4867 7.25012 12V18C7.25012 18.5133 7.24367 18.6228 7.22456 18.6941C7.15521 18.9529 6.95305 19.1551 6.69423 19.2244C6.6229 19.2436 6.51339 19.25 6.00012 19.25C5.48684 19.25 5.37734 19.2436 5.306 19.2244C5.04718 19.1551 4.84502 18.9529 4.77567 18.6941C4.75656 18.6228 4.75012 18.5133 4.75012 18V12C4.75012 11.4867 4.75656 11.3772 4.77567 11.3059C4.84502 11.0471 5.04718 10.8449 5.306 10.7755Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ThumbUpIcon;
