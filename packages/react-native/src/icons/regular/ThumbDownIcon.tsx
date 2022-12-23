import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ThumbDownIcon = (
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
          d="M11.2686 20.75C12.1826 20.75 12.9742 20.1477 13.2515 19.2857L14.0526 16.7949C14.1444 16.5096 14.2958 16.2505 14.4947 16.0357C15.1062 15.3749 15.6207 14.6273 16.0229 13.8167H16.6753C16.9738 14.2302 17.4093 14.5371 17.9175 14.6733C18.2067 14.7508 18.5352 14.7505 18.916 14.7501L18.9999 14.75L19.0838 14.7501C19.4646 14.7505 19.7931 14.7508 20.0822 14.6733C20.8587 14.4653 21.4652 13.8588 21.6732 13.0823C21.7507 12.7932 21.7504 12.4647 21.7499 12.0839V5.91611C21.7504 5.53532 21.7507 5.2068 21.6732 4.91765C21.4652 4.14119 20.8587 3.53471 20.0822 3.32666C19.7931 3.24919 19.4646 3.24953 19.0838 3.24993L18.9999 3.24999L18.916 3.24993C18.5352 3.24953 18.2067 3.24919 17.9175 3.32666C17.3823 3.47007 16.9279 3.80279 16.629 4.24999H10C8.65858 4.24999 7.74417 4.30843 7.01597 4.61741C6.39105 4.88258 5.84719 5.31054 5.43685 5.8562C4.97131 6.47526 4.75594 7.28337 4.43718 8.47942L4.39783 8.62702L3.70547 10.9939L3.69662 11.0235C3.53674 11.5575 3.40285 12.0046 3.32667 12.3731C3.24812 12.753 3.21009 13.1377 3.31064 13.5242C3.45829 14.0918 3.81027 14.5867 4.30289 14.9056C4.64158 15.1248 5.02042 15.2023 5.40059 15.2374C5.76764 15.2712 6.22424 15.2712 6.76464 15.2712L9.06726 15.2712C8.53362 16.9655 8.70882 18.3372 8.99635 19.248C9.33033 20.3059 10.3388 20.75 11.218 20.75H11.2686ZM16.2499 5.74999C16.2497 5.80424 16.2498 5.8596 16.2498 5.91611V12.0839C16.2497 12.1637 16.2497 12.2413 16.2503 12.3167H15.0681L14.7737 12.9527C14.4221 13.7125 13.9562 14.4091 13.3938 15.0169C13.0448 15.394 12.7826 15.8446 12.6247 16.3356L11.8235 18.8265C11.7383 19.0914 11.5071 19.25 11.2686 19.25H11.218C10.7689 19.25 10.5036 19.0398 10.4268 18.7964C10.1807 18.0171 10.0031 16.6466 10.8432 14.837C10.951 14.6048 10.9329 14.3335 10.7951 14.1177C10.6574 13.9018 10.419 13.7712 10.1629 13.7712H6.7994C6.21493 13.7712 5.82819 13.7704 5.53834 13.7437C5.25376 13.7175 5.15813 13.6724 5.11794 13.6463C4.947 13.5357 4.81752 13.3587 4.76232 13.1465C4.74705 13.0878 4.73511 12.9693 4.7956 12.6768C4.85694 12.3801 4.97123 11.996 5.14314 11.4218L5.14449 11.4173L5.84249 9.03109L5.84478 9.0225C6.22194 7.60971 6.36829 7.11332 6.63569 6.75774C6.88984 6.41978 7.22353 6.15879 7.60188 5.99825C8.01047 5.82488 8.6278 5.74999 10 5.74999H16.2499ZM19.694 13.2244C19.6227 13.2436 19.5132 13.25 18.9999 13.25C18.4866 13.25 18.3771 13.2436 18.3058 13.2244C18.047 13.1551 17.8448 12.9529 17.7754 12.6941C17.7563 12.6228 17.7499 12.5133 17.7499 12V5.99999C17.7499 5.48672 17.7563 5.37721 17.7754 5.30588C17.8448 5.04706 18.047 4.8449 18.3058 4.77555C18.3771 4.75644 18.4866 4.74999 18.9999 4.74999C19.5132 4.74999 19.6227 4.75644 19.694 4.77555C19.9528 4.8449 20.155 5.04706 20.2243 5.30588C20.2434 5.37721 20.2499 5.48672 20.2499 5.99999V12C20.2499 12.5133 20.2434 12.6228 20.2243 12.6941C20.155 12.9529 19.9528 13.1551 19.694 13.2244Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ThumbDownIcon;