import * as React from 'react';
import { IconProps } from './types';

export const ShieldUserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6.25C10.1321 6.25 8.61092 7.75726 8.61092 9.625C8.61092 11.4927 10.1321 13 12 13C13.868 13 15.3891 11.4927 15.3891 9.625C15.3891 7.75726 13.868 6.25 12 6.25ZM10.1109 9.625C10.1109 8.59325 10.9529 7.75 12 7.75C13.0471 7.75 13.8891 8.59325 13.8891 9.625C13.8891 10.6568 13.0471 11.5 12 11.5C10.9529 11.5 10.1109 10.6568 10.1109 9.625Z"
          fill={color}
        />
        <path
          d="M13.0393 1.56093C12.3633 1.33214 11.6308 1.33221 10.9549 1.56113L4.17876 3.85601C3.17626 4.19553 2.43483 5.09284 2.3482 6.17621C1.99564 10.5852 2.58873 14.0519 4.18697 16.7689C5.7899 19.494 8.34586 21.3669 11.7221 22.6977C11.8988 22.7674 12.0953 22.7674 12.272 22.6978C15.6509 21.367 18.2083 19.4942 19.812 16.7692C21.4111 14.0521 22.0043 10.5854 21.6518 6.17649C21.5651 5.09292 20.8235 4.1955 19.8207 3.85611L13.0393 1.56093ZM11.4361 2.98187C11.8 2.8586 12.1944 2.85856 12.5584 2.98176L19.3398 5.27694C19.802 5.43336 20.1199 5.83798 20.1565 6.29604C20.4944 10.5218 19.9089 13.6472 18.5193 16.0084C18.4953 16.0491 18.4711 16.0896 18.4466 16.13C18.2368 15.5503 17.9196 15.0465 17.4991 14.6259C16.6867 13.8136 15.569 13.3919 14.3328 13.2546L13.9579 13.2129L13.7035 13.4864L13.7021 13.4878C13.6991 13.4908 13.6929 13.4971 13.6836 13.5062C13.6649 13.5244 13.634 13.5536 13.592 13.5902C13.5072 13.6639 13.3806 13.7645 13.2206 13.8651C12.8944 14.0702 12.4707 14.25 12 14.25C11.5293 14.25 11.1056 14.0702 10.7794 13.8651C10.6194 13.7645 10.4928 13.6639 10.408 13.5902C10.366 13.5536 10.3351 13.5244 10.3164 13.5062C10.3071 13.4971 10.3009 13.4908 10.2979 13.4878L10.2967 13.4866L10.0421 13.2129L9.66718 13.2546C8.43101 13.3919 7.31328 13.8136 6.50092 14.6259C6.08013 15.0467 5.76281 15.5508 5.55306 16.1309C5.52841 16.0903 5.50402 16.0494 5.47988 16.0084C4.09092 13.6471 3.50551 10.5216 3.84343 6.29577C3.88005 5.83779 4.19787 5.43323 4.65992 5.27675L11.4361 2.98187ZM6.75645 17.7379C6.80417 16.7888 7.11295 16.1352 7.56158 15.6866C8.00622 15.2419 8.6541 14.933 9.50483 14.7908C9.62835 14.8929 9.78854 15.0139 9.98092 15.1349C10.4499 15.4298 11.1512 15.75 12 15.75C12.8488 15.75 13.5501 15.4298 14.0191 15.1349C14.2115 15.0139 14.3717 14.8929 14.4952 14.7908C15.3459 14.933 15.9938 15.2419 16.4384 15.6866C16.8868 16.1349 17.1955 16.7881 17.2435 17.7363C15.9412 19.1643 14.2011 20.2903 11.9973 21.1918C9.79621 20.2907 8.0578 19.1652 6.75645 17.7379Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ShieldUserIcon;
