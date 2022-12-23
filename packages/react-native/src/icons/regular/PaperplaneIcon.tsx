import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PaperplaneIcon = (
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
          d="M18.7326 10.7406C19.7552 11.2482 19.7552 12.7519 18.7325 13.2594L6.4408 19.3603C5.41643 19.8687 4.36552 18.9537 4.51411 17.8995L5.05391 14.0698C5.12829 13.5421 5.49165 13.0898 6.00805 12.9315C6.1537 12.8869 6.5287 12.8064 6.99668 12.7112C7.47958 12.613 8.09725 12.4922 8.75566 12.3656C9.38606 12.2444 10.055 12.1177 10.6808 12C10.055 11.8823 9.38606 11.7556 8.75566 11.6344C8.09725 11.5078 7.47958 11.3871 6.99668 11.2888C6.5287 11.1936 6.1537 11.1131 6.00805 11.0685C5.49165 10.9102 5.12829 10.4579 5.05391 9.93016L4.51411 6.10046C4.36552 5.04627 5.41644 4.13129 6.4408 4.63972L18.7326 10.7406ZM18.288 12.3637C18.5701 12.2237 18.5701 11.7763 18.288 11.6363L5.99621 5.53546C5.87587 5.47572 5.75314 5.49423 5.65257 5.57266C5.54997 5.65267 5.48034 5.79071 5.50432 5.96089L6.04412 9.79059C6.06749 9.95642 6.17715 10.0744 6.30114 10.1124C6.38849 10.1392 6.70341 10.2087 7.196 10.3089C7.67367 10.4061 8.28724 10.526 8.94444 10.6524C10.2585 10.905 11.7416 11.1819 12.6494 11.3505L12.6638 11.3532C12.7727 11.3734 12.8769 11.3927 12.956 11.4126C12.9969 11.4228 13.0537 11.4386 13.1105 11.4635C13.1518 11.4817 13.2821 11.5409 13.3707 11.6839C13.4908 11.8776 13.4908 12.1224 13.3707 12.3161C13.2821 12.4591 13.1518 12.5183 13.1105 12.5365C13.0537 12.5614 12.9969 12.5772 12.956 12.5874C12.877 12.6073 12.7727 12.6266 12.6639 12.6468L12.6494 12.6495C11.7416 12.8181 10.2585 13.095 8.94444 13.3476C8.28724 13.474 7.67367 13.594 7.196 13.6911C6.70341 13.7913 6.38849 13.8608 6.30115 13.8876C6.17715 13.9256 6.06749 14.0436 6.04412 14.2094L5.50432 18.0391C5.48034 18.2093 5.54998 18.3473 5.65257 18.4273C5.75314 18.5058 5.87587 18.5243 5.99621 18.4646L18.288 12.3637Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PaperplaneIcon;
