import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FolderPlusIcon = (
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
          d="M9.80352 3.80347C9.53467 3.74967 9.25055 3.74981 8.88737 3.74999L6.16957 3.75001C5.63541 3.75 5.18956 3.74999 4.82533 3.77975C4.44545 3.81079 4.08879 3.8779 3.75153 4.04974C3.23408 4.31339 2.81339 4.73409 2.54973 5.25154C2.37789 5.5888 2.31078 5.94546 2.27974 6.32534C2.24998 6.68957 2.24999 7.13541 2.25 7.66956V16.3304C2.24999 16.8646 2.24998 17.3105 2.27974 17.6747C2.31078 18.0546 2.37789 18.4112 2.54973 18.7485C2.81339 19.2659 3.23408 19.6866 3.75153 19.9503C4.08879 20.1221 4.44545 20.1892 4.82533 20.2203C5.18954 20.25 5.63536 20.25 6.16946 20.25H17.8305C18.3646 20.25 18.8105 20.25 19.1747 20.2203C19.5546 20.1892 19.9112 20.1221 20.2485 19.9503C20.7659 19.6866 21.1866 19.2659 21.4503 18.7485C21.6221 18.4112 21.6892 18.0546 21.7203 17.6747C21.75 17.3105 21.75 16.8646 21.75 16.3305V10.6696C21.75 10.1354 21.75 9.68957 21.7203 9.32534C21.6892 8.94546 21.6221 8.5888 21.4503 8.25154C21.1866 7.73409 20.7659 7.31339 20.2485 7.04974C19.9112 6.8779 19.5546 6.81079 19.1747 6.77975C18.8104 6.74999 18.3646 6.75 17.8304 6.75001L13.6771 6.75001C13.2193 6.75001 13.0948 6.74653 12.9908 6.72571C12.6967 6.66687 12.4336 6.50425 12.2495 6.26753C12.1843 6.18379 12.1256 6.07406 11.9208 5.6646L11.892 5.60698C11.7298 5.28206 11.6028 5.02787 11.4345 4.81146C11.0294 4.29069 10.4505 3.93293 9.80352 3.80347ZM12 9.75001C12.4142 9.75001 12.75 10.0858 12.75 10.5V12.75H15C15.4142 12.75 15.75 13.0858 15.75 13.5C15.75 13.9142 15.4142 14.25 15 14.25H12.75V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V14.25H9C8.58579 14.25 8.25 13.9142 8.25 13.5C8.25 13.0858 8.58579 12.75 9 12.75H11.25V10.5C11.25 10.0858 11.5858 9.75001 12 9.75001Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default FolderPlusIcon;
