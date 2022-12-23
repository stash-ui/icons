import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlusIcon = (
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
          d="M12 4.75C12.6904 4.75 13.25 5.30964 13.25 6V10.75H18C18.6904 10.75 19.25 11.3096 19.25 12C19.25 12.6904 18.6904 13.25 18 13.25H13.25V18C13.25 18.6904 12.6904 19.25 12 19.25C11.3096 19.25 10.75 18.6904 10.75 18V13.25H6C5.30964 13.25 4.75 12.6904 4.75 12C4.75 11.3096 5.30964 10.75 6 10.75H10.75V6C10.75 5.30964 11.3096 4.75 12 4.75Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default PlusIcon;
