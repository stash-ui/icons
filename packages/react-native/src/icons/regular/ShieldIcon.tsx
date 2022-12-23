import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ShieldIcon = (
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
          d="M12.5584 2.98177C12.1944 2.85858 11.8 2.85862 11.4361 2.98188L4.65992 5.27676C4.19787 5.43324 3.88005 5.83781 3.84343 6.29579C3.50551 10.5216 4.09092 13.6471 5.47988 16.0084C6.82378 18.2931 8.97413 19.9542 11.9973 21.1918C15.0231 19.9541 17.1747 18.293 18.5193 16.0084C19.9089 13.6472 20.4944 10.5218 20.1565 6.29605C20.1199 5.838 19.802 5.43338 19.3398 5.27695L12.5584 2.98177ZM10.9549 1.56115C11.6308 1.33223 12.3633 1.33215 13.0393 1.56094L19.8207 3.85613C20.8235 4.19551 21.5651 5.09293 21.6518 6.1765C22.0043 10.5854 21.4111 14.0521 19.812 16.7692C18.2083 19.4942 15.6509 21.367 12.272 22.6978C12.0953 22.7674 11.8988 22.7674 11.7221 22.6978C8.34586 21.3669 5.7899 19.494 4.18697 16.769C2.58873 14.0519 1.99564 10.5852 2.3482 6.17622C2.43483 5.09286 3.17626 4.19555 4.17876 3.85603L10.9549 1.56115Z"
          fill={color}
        />
        <Path
          opacity=".5"
          d="M12 19.9991C17.0323 17.9597 19.4058 14.3818 18.9433 7.63313C18.8907 6.86561 18.3666 6.21711 17.64 5.96418L12.82 4.28622C12.5545 4.19379 12.2772 4.14746 12 4.14725V19.9991Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ShieldIcon;
