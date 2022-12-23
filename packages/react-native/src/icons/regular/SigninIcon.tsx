import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SigninIcon = (
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
          opacity=".5"
          d="M10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967L14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303C10.1768 15.2374 10.1768 14.7626 10.4697 14.4697L12.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H12.1893L10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967Z"
          fill={color}
        />
        <Path
          d="M11.7679 3.25H14.2321C15.0449 3.24999 15.7006 3.24999 16.2315 3.29336C16.7781 3.33803 17.2582 3.43239 17.7025 3.65873C18.4081 4.01825 18.9817 4.59193 19.3413 5.29754C19.5676 5.74175 19.662 6.2219 19.7066 6.76853C19.75 7.29944 19.75 7.95505 19.75 8.76788V15.2321C19.75 16.045 19.75 16.7006 19.7066 17.2315C19.662 17.7781 19.5676 18.2582 19.3413 18.7025C18.9817 19.4081 18.4081 19.9818 17.7025 20.3413C17.2582 20.5676 16.7781 20.662 16.2315 20.7066C15.7006 20.75 15.045 20.75 14.2321 20.75H11.7679C10.955 20.75 10.2994 20.75 9.76853 20.7066C9.2219 20.662 8.74175 20.5676 8.29754 20.3413C7.59193 19.9818 7.01825 19.4081 6.65873 18.7025C6.43239 18.2582 6.33803 17.7781 6.29336 17.2315C6.24999 16.7006 6.24999 16.0449 6.25 15.2321L6.25 15C6.25 14.5858 6.58579 14.25 7 14.25C7.41421 14.25 7.75 14.5858 7.75 15V15.2C7.75 16.0525 7.75058 16.6467 7.78838 17.1093C7.82547 17.5632 7.8946 17.824 7.99524 18.0215C8.21095 18.4448 8.55516 18.7891 8.97852 19.0048C9.17604 19.1054 9.4368 19.1745 9.89068 19.2116C10.3533 19.2494 10.9475 19.25 11.8 19.25H14.2C15.0525 19.25 15.6467 19.2494 16.1093 19.2116C16.5632 19.1745 16.824 19.1054 17.0215 19.0048C17.4448 18.7891 17.7891 18.4448 18.0048 18.0215C18.1054 17.824 18.1745 17.5632 18.2116 17.1093C18.2494 16.6467 18.25 16.0525 18.25 15.2V8.8C18.25 7.94755 18.2494 7.35331 18.2116 6.89068C18.1745 6.4368 18.1054 6.17604 18.0048 5.97852C17.7891 5.55516 17.4448 5.21095 17.0215 4.99524C16.824 4.8946 16.5632 4.82547 16.1093 4.78838C15.6467 4.75058 15.0525 4.75 14.2 4.75H11.8C10.9475 4.75 10.3533 4.75058 9.89068 4.78838C9.4368 4.82547 9.17604 4.8946 8.97852 4.99524C8.55516 5.21095 8.21095 5.55516 7.99524 5.97852C7.8946 6.17604 7.82547 6.4368 7.78838 6.89068C7.75058 7.35331 7.75 7.94755 7.75 8.8V9C7.75 9.41421 7.41421 9.75 7 9.75C6.58579 9.75 6.25 9.41421 6.25 9L6.25 8.7679C6.24999 7.95506 6.24999 7.29944 6.29336 6.76853C6.33803 6.2219 6.43239 5.74175 6.65873 5.29754C7.01825 4.59193 7.59193 4.01825 8.29754 3.65873C8.74175 3.43239 9.2219 3.33803 9.76853 3.29336C10.2994 3.24999 10.9551 3.24999 11.7679 3.25Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SigninIcon;
