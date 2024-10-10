import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SignOutIcon = ({ color = 'currentColor', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.2321 3.25H9.7679C8.95506 3.24999 8.29944 3.24999 7.76853 3.29336C7.2219 3.33803 6.74175 3.43239 6.29754 3.65873C5.59193 4.01825 5.01825 4.59193 4.65873 5.29754C4.43239 5.74175 4.33803 6.2219 4.29336 6.76853C4.24999 7.29944 4.24999 7.95505 4.25 8.76788V15.2321C4.24999 16.0449 4.24999 16.7006 4.29336 17.2315C4.33803 17.7781 4.43239 18.2582 4.65873 18.7025C5.01825 19.4081 5.59193 19.9817 6.29754 20.3413C6.74175 20.5676 7.2219 20.662 7.76853 20.7066C8.29944 20.75 8.95505 20.75 9.76788 20.75H12.2321C13.045 20.75 13.7006 20.75 14.2315 20.7066C14.7781 20.662 15.2582 20.5676 15.7025 20.3413C16.4081 19.9817 16.9817 19.4081 17.3413 18.7025C17.5676 18.2582 17.662 17.7781 17.7066 17.2315C17.75 16.7006 17.75 16.045 17.75 15.2321V15C17.75 14.5858 17.4142 14.25 17 14.25C16.5858 14.25 16.25 14.5858 16.25 15V15.2C16.25 16.0525 16.2494 16.6467 16.2116 17.1093C16.1745 17.5632 16.1054 17.824 16.0048 18.0215C15.789 18.4448 15.4448 18.7891 15.0215 19.0048C14.824 19.1054 14.5632 19.1745 14.1093 19.2116C13.6467 19.2494 13.0525 19.25 12.2 19.25H9.8C8.94755 19.25 8.35331 19.2494 7.89068 19.2116C7.4368 19.1745 7.17604 19.1054 6.97852 19.0048C6.55516 18.7891 6.21095 18.4448 5.99524 18.0215C5.8946 17.824 5.82547 17.5632 5.78838 17.1093C5.75058 16.6467 5.75 16.0525 5.75 15.2V8.8C5.75 7.94755 5.75058 7.35331 5.78838 6.89068C5.82547 6.43681 5.8946 6.17604 5.99524 5.97852C6.21095 5.55516 6.55516 5.21095 6.97852 4.99524C7.17604 4.8946 7.4368 4.82547 7.89068 4.78838C8.35331 4.75058 8.94755 4.75 9.8 4.75H12.2C13.0525 4.75 13.6467 4.75058 14.1093 4.78838C14.5632 4.82547 14.824 4.8946 15.0215 4.99524C15.4448 5.21095 15.789 5.55516 16.0048 5.97852C16.1054 6.17604 16.1745 6.43681 16.2116 6.89068C16.2494 7.35331 16.25 7.94755 16.25 8.8V9C16.25 9.41421 16.5858 9.75 17 9.75C17.4142 9.75 17.75 9.41421 17.75 9V8.76788C17.75 7.95505 17.75 7.29944 17.7066 6.76853C17.662 6.2219 17.5676 5.74175 17.3413 5.29754C16.9817 4.59193 16.4081 4.01825 15.7025 3.65873C15.2582 3.43239 14.7781 3.33803 14.2315 3.29336C13.7006 3.24999 13.0449 3.24999 12.2321 3.25Z"
      fill={color}
    />
    <Path
      d="M12.4697 8.46967C12.7626 8.17678 13.2374 8.17678 13.5303 8.46967C13.8232 8.76256 13.8232 9.23744 13.5303 9.53033L11.8107 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H11.8107L13.5303 14.4697C13.8232 14.7626 13.8232 15.2374 13.5303 15.5303C13.2374 15.8232 12.7626 15.8232 12.4697 15.5303L9.46967 12.5303C9.17678 12.2374 9.17678 11.7626 9.46967 11.4697L12.4697 8.46967Z"
      fill={color}
    />
  </Svg>
);

export default SignOutIcon;