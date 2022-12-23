import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FolderArrowLeftIcon = (
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
          d="M15.5 13.5C15.5 13.7761 15.2761 14 15 14H10.2071L11.8536 15.6464C12.0488 15.8417 12.0488 16.1583 11.8536 16.3536C11.6583 16.5488 11.3417 16.5488 11.1464 16.3536L8.64645 13.8536C8.45118 13.6583 8.45118 13.3417 8.64645 13.1464L11.1464 10.6464C11.3417 10.4512 11.6583 10.4512 11.8536 10.6464C12.0488 10.8417 12.0488 11.1583 11.8536 11.3536L10.2071 13H15C15.2761 13 15.5 13.2239 15.5 13.5Z"
          fill={color}
        />
        <Path
          d="M9.75446 4.04861C9.51078 3.99985 9.2509 3.99992 8.87368 4.00001L6.1786 4.00002C5.6367 4.00001 5.19963 4.00001 4.84569 4.02893C4.48126 4.0587 4.16117 4.12161 3.86502 4.2725C3.39462 4.51218 3.01217 4.89463 2.77248 5.36504C2.62159 5.66119 2.55868 5.98128 2.52891 6.3457C2.49999 6.69964 2.5 7.13672 2.5 7.67861V16.3214C2.5 16.8633 2.49999 17.3004 2.52891 17.6543C2.55868 18.0187 2.62159 18.3388 2.77248 18.635C3.01217 19.1054 3.39462 19.4878 3.86502 19.7275C4.16117 19.8784 4.48126 19.9413 4.84569 19.9711C5.19959 20 5.63662 20 6.17844 20H17.8214C18.3632 20 18.8004 20 19.1543 19.9711C19.5187 19.9413 19.8388 19.8784 20.135 19.7275C20.6054 19.4878 20.9878 19.1054 21.2275 18.635C21.3784 18.3388 21.4413 18.0187 21.4711 17.6543C21.5 17.3004 21.5 16.8633 21.5 16.3214V10.6786C21.5 10.1367 21.5 9.69963 21.4711 9.34569C21.4413 8.98127 21.3784 8.66117 21.2275 8.36503C20.9878 7.89462 20.6054 7.51217 20.135 7.27249C19.8388 7.12159 19.5187 7.05869 19.1543 7.02891C18.8004 6.99999 18.3633 7 17.8214 7H13.677C13.2298 7 13.0759 6.99768 12.9417 6.97085C12.5888 6.90023 12.2731 6.70509 12.0521 6.42103C11.9681 6.31307 11.8972 6.1764 11.6972 5.7764L11.6745 5.73102C11.5059 5.39359 11.3898 5.16112 11.2372 4.96498C10.8689 4.49154 10.3426 4.1663 9.75446 4.04861ZM8.82296 5.00002C9.27017 5.00002 9.42413 5.00234 9.55825 5.02917C9.91115 5.09979 10.2269 5.29493 10.4479 5.57899C10.5319 5.68695 10.6028 5.82362 10.8028 6.22362L10.8255 6.269C10.9941 6.60643 11.1102 6.8389 11.2628 7.03504C11.6311 7.50848 12.1574 7.83372 12.7455 7.95141C12.9892 8.00017 13.2491 8.0001 13.6263 8.00001L17.8 8C18.3683 8 18.7645 8.00039 19.0729 8.02559C19.3755 8.05031 19.5493 8.0964 19.681 8.16349C19.9632 8.3073 20.1927 8.53677 20.3365 8.81902C20.4036 8.9507 20.4497 9.12454 20.4744 9.42712C20.4996 9.73554 20.5 10.1317 20.5 10.7V16.3C20.5 16.8683 20.4996 17.2645 20.4744 17.5729C20.4497 17.8755 20.4036 18.0493 20.3365 18.181C20.1927 18.4632 19.9632 18.6927 19.681 18.8365C19.5493 18.9036 19.3755 18.9497 19.0729 18.9744C18.7645 18.9996 18.3683 19 17.8 19H6.2C5.6317 19 5.23554 18.9996 4.92712 18.9744C4.62454 18.9497 4.45069 18.9036 4.31901 18.8365C4.03677 18.6927 3.8073 18.4632 3.66349 18.181C3.5964 18.0493 3.55031 17.8755 3.52559 17.5729C3.50039 17.2645 3.5 16.8683 3.5 16.3V7.70001C3.5 7.13171 3.50039 6.73556 3.52559 6.42714C3.55031 6.12455 3.5964 5.95071 3.66349 5.81903C3.8073 5.53679 4.03677 5.30732 4.31901 5.16351C4.45069 5.09641 4.62454 5.05033 4.92712 5.0256C5.23554 5.00041 5.6317 5.00002 6.2 5.00002H8.82296Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default FolderArrowLeftIcon;
