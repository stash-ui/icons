import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PersonIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M12 4.5C10.6193 4.5 9.50004 5.61929 9.50004 7C9.50004 8.38071 10.6193 9.5 12 9.5C13.3808 9.5 14.5 8.38071 14.5 7C14.5 5.61929 13.3808 4.5 12 4.5ZM8.50004 7C8.50004 5.067 10.067 3.5 12 3.5C13.933 3.5 15.5 5.067 15.5 7C15.5 8.933 13.933 10.5 12 10.5C10.067 10.5 8.50004 8.933 8.50004 7ZM9.36948 12.5461C9.13716 12.6053 8.90639 12.6725 8.67759 12.7477L7.71843 13.0628C6.91404 13.327 6.3043 13.9724 6.09192 14.773L5.69327 17.6529C5.60369 18.3001 5.94593 18.8339 6.48897 18.9633C7.55624 19.2175 9.34057 19.5 12 19.5C14.6595 19.5 16.4438 19.2175 17.5111 18.9633C18.0542 18.8339 18.3964 18.3001 18.3068 17.6529L17.9082 14.773C17.6958 13.9724 17.086 13.327 16.2817 13.0628L15.3225 12.7477C15.0937 12.6725 14.8629 12.6053 14.6306 12.5461C14.6304 12.5463 14.6308 12.5459 14.6306 12.5461C14.4968 12.6516 14.3029 12.7905 14.0579 12.9284C13.57 13.2032 12.8603 13.4856 12 13.4856C11.1398 13.4856 10.4301 13.2032 9.94219 12.9284C9.69722 12.7905 9.50327 12.6516 9.36948 12.5461C9.36971 12.5463 9.36926 12.5459 9.36948 12.5461ZM9.6555 11.4512L9.84964 11.6425C9.84941 11.6423 9.8494 11.6423 9.84964 11.6425L9.85383 11.6465C9.85845 11.6508 9.86667 11.6585 9.8784 11.6689C9.90187 11.6898 9.93916 11.7218 9.98931 11.7614C10.0899 11.8407 10.2404 11.9487 10.4329 12.0571C10.82 12.2751 11.3603 12.4856 12 12.4856C12.6398 12.4856 13.1801 12.2751 13.5672 12.0571C13.7597 11.9487 13.9102 11.8407 14.0108 11.7614C14.0609 11.7218 14.0982 11.6898 14.1217 11.6689C14.1334 11.6585 14.1416 11.6508 14.1463 11.6465L14.1499 11.643C14.1502 11.6428 14.1502 11.6428 14.1499 11.643L14.3446 11.4512L14.6121 11.5127C14.9561 11.5918 15.2973 11.6868 15.6346 11.7976L16.5938 12.1127C17.727 12.485 18.5926 13.4036 18.8841 14.5527L18.8909 14.5796L19.2974 17.5158C19.4442 18.5762 18.8767 19.666 17.7428 19.9361C16.5931 20.2099 14.7306 20.5 12 20.5C9.2695 20.5 7.40694 20.2099 6.25729 19.9361C5.12339 19.666 4.55594 18.5762 4.70272 17.5158L5.10915 14.5796L5.11598 14.5527C5.40744 13.4036 6.27313 12.485 7.40632 12.1127L8.36548 11.7976C8.70278 11.6868 9.04398 11.5918 9.38796 11.5127L9.6555 11.4512Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PersonIcon;
