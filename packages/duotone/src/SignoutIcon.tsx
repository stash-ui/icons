import * as React from 'react';
import { IconProps } from './types';

export const SignoutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967L9.46967 11.4697C9.17678 11.7626 9.17678 12.2374 9.46967 12.5303L12.4697 15.5303C12.7626 15.8232 13.2374 15.8232 13.5303 15.5303C13.8232 15.2374 13.8232 14.7626 13.5303 14.4697L11.8107 12.75H20C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H11.8107L13.5303 9.53033C13.8232 9.23744 13.8232 8.76256 13.5303 8.46967Z"
          fill={color}
        />
        <path
          d="M9.7679 3.25H12.2321C13.0449 3.24999 13.7006 3.24999 14.2315 3.29336C14.7781 3.33803 15.2582 3.43239 15.7025 3.65873C16.4081 4.01825 16.9817 4.59193 17.3413 5.29754C17.5676 5.74175 17.662 6.2219 17.7066 6.76853C17.75 7.29944 17.75 7.95505 17.75 8.76788V9C17.75 9.41421 17.4142 9.75 17 9.75C16.5858 9.75 16.25 9.41421 16.25 9V8.8C16.25 7.94755 16.2494 7.35331 16.2116 6.89068C16.1745 6.4368 16.1054 6.17604 16.0048 5.97852C15.789 5.55516 15.4448 5.21095 15.0215 4.99524C14.824 4.8946 14.5632 4.82547 14.1093 4.78838C13.6467 4.75058 13.0525 4.75 12.2 4.75H9.8C8.94755 4.75 8.35331 4.75058 7.89068 4.78838C7.4368 4.82547 7.17604 4.8946 6.97852 4.99524C6.55516 5.21095 6.21095 5.55516 5.99524 5.97852C5.8946 6.17604 5.82547 6.4368 5.78838 6.89068C5.75058 7.35331 5.75 7.94755 5.75 8.8V15.2C5.75 16.0525 5.75058 16.6467 5.78838 17.1093C5.82547 17.5632 5.8946 17.824 5.99524 18.0215C6.21095 18.4448 6.55516 18.7891 6.97852 19.0048C7.17604 19.1054 7.4368 19.1745 7.89068 19.2116C8.35331 19.2494 8.94755 19.25 9.8 19.25H12.2C13.0525 19.25 13.6467 19.2494 14.1093 19.2116C14.5632 19.1745 14.824 19.1054 15.0215 19.0048C15.4448 18.7891 15.789 18.4448 16.0048 18.0215C16.1054 17.824 16.1745 17.5632 16.2116 17.1093C16.2494 16.6467 16.25 16.0525 16.25 15.2V15C16.25 14.5858 16.5858 14.25 17 14.25C17.4142 14.25 17.75 14.5858 17.75 15V15.2321C17.75 16.045 17.75 16.7006 17.7066 17.2315C17.662 17.7781 17.5676 18.2582 17.3413 18.7025C16.9817 19.4081 16.4081 19.9818 15.7025 20.3413C15.2582 20.5676 14.7781 20.662 14.2315 20.7066C13.7006 20.75 13.045 20.75 12.2321 20.75H9.76788C8.95505 20.75 8.29944 20.75 7.76853 20.7066C7.2219 20.662 6.74175 20.5676 6.29754 20.3413C5.59193 19.9818 5.01825 19.4081 4.65873 18.7025C4.43239 18.2582 4.33803 17.7781 4.29336 17.2315C4.24999 16.7006 4.24999 16.0449 4.25 15.2321V8.7679C4.24999 7.95506 4.24999 7.29944 4.29336 6.76853C4.33803 6.2219 4.43239 5.74175 4.65873 5.29754C5.01825 4.59193 5.59193 4.01825 6.29754 3.65873C6.74175 3.43239 7.2219 3.33803 7.76853 3.29336C8.29944 3.24999 8.95506 3.24999 9.7679 3.25Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default SignoutIcon;
