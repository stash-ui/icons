import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EnvelopeIcon = (
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
          d="M15.2321 4.75H8.7679C7.95507 4.74999 7.29944 4.74999 6.76853 4.79336C6.2219 4.83803 5.74175 4.93239 5.29754 5.15873C4.59193 5.51825 4.01825 6.09193 3.65873 6.79754C3.43239 7.24176 3.33803 7.7219 3.29336 8.26853C3.24999 8.79944 3.24999 9.45505 3.25 10.2679V13.7321C3.24999 14.5449 3.24999 15.2006 3.29336 15.7315C3.33803 16.2781 3.43239 16.7582 3.65873 17.2025C4.01825 17.9081 4.59193 18.4817 5.29754 18.8413C5.74175 19.0676 6.2219 19.162 6.76853 19.2066C7.29944 19.25 7.95505 19.25 8.76788 19.25H15.2321C16.045 19.25 16.7006 19.25 17.2315 19.2066C17.7781 19.162 18.2582 19.0676 18.7025 18.8413C19.4081 18.4817 19.9817 17.9081 20.3413 17.2025C20.5676 16.7582 20.662 16.2781 20.7066 15.7315C20.75 15.2006 20.75 14.545 20.75 13.7321V10.2679C20.75 9.45505 20.75 8.79944 20.7066 8.26853C20.662 7.7219 20.5676 7.24175 20.3413 6.79754C19.9817 6.09193 19.4081 5.51825 18.7025 5.15873C18.2582 4.93239 17.7781 4.83803 17.2315 4.79336C16.7006 4.74999 16.0449 4.74999 15.2321 4.75ZM5.97852 6.49524C6.17604 6.3946 6.43681 6.32547 6.89068 6.28838C7.35331 6.25058 7.94755 6.25 8.8 6.25H15.2C16.0525 6.25 16.6467 6.25058 17.1093 6.28838C17.5632 6.32547 17.824 6.3946 18.0215 6.49524C18.3209 6.64782 18.5808 6.86469 18.7836 7.1284L13.6046 11.6169C13.2243 11.9464 12.9706 12.1657 12.761 12.321C12.5589 12.4707 12.4427 12.5262 12.3522 12.5528C12.1222 12.6203 11.8777 12.6203 11.6478 12.5528C11.5573 12.5262 11.441 12.4707 11.239 12.321C11.0294 12.1657 10.7756 11.9464 10.3954 11.6169L5.2164 7.12841C5.41919 6.8647 5.67905 6.64782 5.97852 6.49524ZM4.76808 8.72482L9.4341 12.7687C9.78774 13.0752 10.0847 13.3326 10.3459 13.5262C10.6198 13.7291 10.8981 13.896 11.2251 13.992C11.731 14.1405 12.269 14.1405 12.7748 13.992C13.1019 13.896 13.3801 13.7291 13.654 13.5262C13.9152 13.3326 14.2123 13.0752 14.5659 12.7687L19.2319 8.7248C19.2497 9.13413 19.25 9.63957 19.25 10.3V13.7C19.25 14.5525 19.2494 15.1467 19.2116 15.6093C19.1745 16.0632 19.1054 16.324 19.0048 16.5215C18.789 16.9448 18.4448 17.289 18.0215 17.5048C17.824 17.6054 17.5632 17.6745 17.1093 17.7116C16.6467 17.7494 16.0525 17.75 15.2 17.75H8.8C7.94755 17.75 7.35331 17.7494 6.89068 17.7116C6.43681 17.6745 6.17604 17.6054 5.97852 17.5048C5.55516 17.289 5.21095 16.9448 4.99524 16.5215C4.8946 16.324 4.82547 16.0632 4.78838 15.6093C4.75058 15.1467 4.75 14.5525 4.75 13.7V10.3C4.75 9.63958 4.75035 9.13414 4.76808 8.72482Z"
          fill={color}
        />
        <Path
          opacity=".5"
          d="M9.03039 13.9697C9.32328 14.2626 9.32328 14.7374 9.03039 15.0303L5.53039 18.5303L4.46973 17.4697L7.96973 13.9697C8.26262 13.6768 8.73749 13.6768 9.03039 13.9697ZM14.9697 13.9697C15.2626 13.6768 15.7375 13.6768 16.0304 13.9697L19.5304 17.4697L18.4697 18.5303L14.9697 15.0303C14.6768 14.7374 14.6768 14.2626 14.9697 13.9697Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default EnvelopeIcon;
