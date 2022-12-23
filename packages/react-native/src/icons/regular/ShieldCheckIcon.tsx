import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ShieldCheckIcon = (
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
          d="M15.7803 10.0303C16.0732 9.73744 16.0732 9.26256 15.7803 8.96967C15.4874 8.67678 15.0126 8.67678 14.7197 8.96967L11.25 12.4393L9.78033 10.9697C9.48744 10.6768 9.01256 10.6768 8.71967 10.9697C8.42678 11.2626 8.42678 11.7374 8.71967 12.0303L11.25 14.5607L15.7803 10.0303Z"
          fill={color}
        />
        <Path
          d="M13.0393 1.56093C12.3633 1.33214 11.6308 1.33221 10.9549 1.56113L4.17876 3.85601C3.17626 4.19553 2.43483 5.09284 2.3482 6.17621C1.99564 10.5852 2.58873 14.0519 4.18697 16.7689C5.7899 19.494 8.34586 21.3669 11.7221 22.6977C11.8988 22.7674 12.0953 22.7674 12.272 22.6978C15.6509 21.367 18.2083 19.4942 19.812 16.7692C21.4111 14.0521 22.0043 10.5854 21.6518 6.17649C21.5651 5.09292 20.8235 4.1955 19.8207 3.85611L13.0393 1.56093ZM11.4361 2.98187C11.8 2.8586 12.1944 2.85856 12.5584 2.98176L19.3398 5.27694C19.802 5.43336 20.1199 5.83798 20.1565 6.29604C20.4944 10.5218 19.9089 13.6472 18.5193 16.0084C17.1747 18.293 15.0231 19.9541 11.9973 21.1918C8.97413 19.9542 6.82378 18.2931 5.47988 16.0084C4.09092 13.6471 3.50551 10.5216 3.84343 6.29577C3.88005 5.83779 4.19787 5.43323 4.65992 5.27675L11.4361 2.98187Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ShieldCheckIcon;