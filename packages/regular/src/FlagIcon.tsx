import * as React from 'react';
import { IconProps } from './types';

export const FlagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.25 4.59256V13.4958C5.35801 13.4606 5.47195 13.4245 5.59049 13.3884C6.3511 13.1569 7.37787 12.9 8.25 12.9C9.66819 12.9 10.9907 13.3316 12.1842 13.7212L12.2327 13.737C13.4781 14.1434 14.5907 14.5 15.75 14.5C16.6864 14.5 18.0063 14.1392 18.75 13.9074V5.07329C17.944 5.3052 16.7346 5.6 15.75 5.6C14.3318 5.6 13.0093 5.16836 11.8158 4.7788L11.7673 4.763C10.5219 4.35659 9.40932 4 8.25 4C7.59834 4 6.73982 4.17766 6.00246 4.3746C5.71547 4.45125 5.45694 4.52802 5.25 4.59256ZM5.25 15.0808C5.46063 15.0055 5.72854 14.9144 6.02736 14.8234C6.76436 14.599 7.61259 14.4 8.25 14.4C9.40932 14.4 10.5219 14.7566 11.7673 15.163L11.8158 15.1788C13.0093 15.5684 14.3318 16 15.75 16C17.0386 16 18.7266 15.4927 19.398 15.2754C19.9199 15.1066 20.25 14.6221 20.25 14.0976V4.75945C20.25 3.88922 19.3997 3.3109 18.6075 3.55128C17.8266 3.78823 16.6175 4.1 15.75 4.1C14.5907 4.1 13.4781 3.74341 12.2327 3.337L12.1842 3.3212C10.9907 2.93164 9.66819 2.5 8.25 2.5C7.39213 2.5 6.37564 2.72234 5.61539 2.9254C5.22634 3.02931 4.88692 3.13305 4.64442 3.21089C4.52297 3.24988 4.42533 3.28254 4.35736 3.30569C4.32336 3.31727 4.29675 3.32649 4.27826 3.33295L4.25668 3.34053L4.25061 3.34267L4.24879 3.34332C4.2487 3.34335 4.24779 3.34368 4.5 4.05L4.24779 3.34368C3.94928 3.45027 3.75 3.73302 3.75 4.05V20.75C3.75 21.1642 4.08579 21.5 4.5 21.5C4.91421 21.5 5.25 21.1642 5.25 20.75V15.0808Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default FlagIcon;