import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const RacketIcon = (
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
          d="M6.64098 17.2546C6.80459 17.3745 6.94689 17.4779 7.1038 17.5653C9.60992 19.1168 12.8221 19.0748 15.2904 17.4397L17.9055 20.0549C18.499 20.6484 19.4613 20.6484 20.0549 20.0549C20.6484 19.4613 20.6484 18.499 20.0549 17.9055L17.4397 15.2903C19.0748 12.8221 19.1168 9.60991 17.5653 7.1038C17.4779 6.94695 17.3746 6.8047 17.2547 6.64117C17.0712 6.38842 16.8702 6.14442 16.6516 5.91084C16.5932 5.84839 16.5335 5.78668 16.4726 5.72575C13.5049 2.75808 8.69341 2.75808 5.72575 5.72575C2.75809 8.69341 2.75809 13.5049 5.72575 16.4726C5.7916 16.5384 5.85836 16.6028 5.92599 16.6658C6.1549 16.8788 6.39376 17.0751 6.64098 17.2546ZM15.7561 6.4422C15.8077 6.49381 15.8583 6.54606 15.9079 6.59893C16.207 6.91823 16.4684 7.26007 16.6921 7.61875C16.7501 7.72738 16.7851 7.83245 16.8178 7.98794C16.8354 8.07164 16.8435 8.22939 16.8292 8.41536C16.815 8.60133 16.7831 8.75602 16.753 8.83607C16.6444 9.12453 16.4859 9.29475 15.9738 9.80682L9.80682 15.9738C9.29475 16.4859 9.12453 16.6444 8.83607 16.753C8.75602 16.7831 8.60133 16.815 8.41536 16.8292C8.22939 16.8435 8.07164 16.8354 7.98794 16.8178C7.83245 16.7851 7.72738 16.7501 7.61875 16.6921C7.26612 16.4722 6.92977 16.2158 6.61512 15.923C6.55672 15.8686 6.49907 15.813 6.4422 15.7561C3.87023 13.1842 3.87023 9.01417 6.4422 6.4422C9.01417 3.87023 13.1842 3.87023 15.7561 6.4422ZM17.5096 9.58486C17.903 11.2572 17.6353 13.0535 16.7063 14.5569L16.4726 14.3232C15.8791 13.7297 14.9168 13.7297 14.3232 14.3232C14.1748 14.4716 14.0636 14.643 13.9894 14.826C13.9021 15.0411 13.8662 15.2722 13.8815 15.5004C13.9053 15.8545 14.0525 16.2019 14.3232 16.4726L14.5569 16.7063C13.0535 17.6353 11.2572 17.903 9.58486 17.5096C9.89491 17.3191 10.1516 17.0623 10.4762 16.7374L16.7374 10.4762C17.0623 10.1516 17.3191 9.89491 17.5096 9.58486ZM15.0397 15.7561C14.9408 15.6572 14.8913 15.5276 14.8913 15.3979C14.8913 15.325 14.907 15.252 14.9383 15.1845C14.9626 15.1321 14.9964 15.0829 15.0397 15.0397C15.2375 14.8418 15.5583 14.8418 15.7561 15.0397L16.4218 15.7053L16.4252 15.7087L19.3384 18.6219C19.5363 18.8198 19.5363 19.1406 19.3384 19.3384C19.1406 19.5362 18.8198 19.5362 18.622 19.3384L15.0397 15.7561Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default RacketIcon;