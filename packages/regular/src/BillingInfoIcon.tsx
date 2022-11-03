import * as React from 'react';
import { IconProps } from './types';

export const BillingInfoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.16957 3.25H12.8304C13.3646 3.24999 13.8104 3.24998 14.1747 3.27974C14.5546 3.31078 14.9112 3.37789 15.2485 3.54973C15.7659 3.81338 16.1866 4.23408 16.4503 4.75153C16.6221 5.08879 16.6892 5.44545 16.7203 5.82533C16.75 6.18955 16.75 6.63538 16.75 7.16951V10.25C16.75 10.6642 16.4142 11 16 11C15.5858 11 15.25 10.6642 15.25 10.25V7.2C15.25 6.62757 15.2494 6.24336 15.2252 5.94748C15.2018 5.66036 15.1599 5.52307 15.1138 5.43251C14.9939 5.19731 14.8027 5.00608 14.5675 4.88624C14.4769 4.8401 14.3396 4.79822 14.0525 4.77476C13.7566 4.75058 13.3724 4.75 12.8 4.75H7.2C6.62757 4.75 6.24336 4.75058 5.94748 4.77476C5.66036 4.79822 5.52307 4.8401 5.43251 4.88624C5.19731 5.00608 5.00608 5.19731 4.88624 5.43251C4.8401 5.52307 4.79822 5.66036 4.77476 5.94748C4.75058 6.24336 4.75 6.62757 4.75 7.2V16.8C4.75 17.3724 4.75058 17.7566 4.77476 18.0525C4.79822 18.3396 4.8401 18.4769 4.88624 18.5675C4.99954 18.7899 5.17664 18.9729 5.39439 19.0935C5.41115 19.0971 5.4445 19.1038 5.49968 19.1119C5.61585 19.129 5.77607 19.1453 5.97603 19.1601C6.37402 19.1894 6.8862 19.2095 7.43005 19.223C8.51547 19.25 9.68923 19.25 10.25 19.25C10.6642 19.25 11 19.5858 11 20C11 20.4142 10.6642 20.75 10.25 20.75H10.2481C9.68804 20.75 8.49812 20.75 7.39277 20.7225C6.8406 20.7088 6.30005 20.688 5.86583 20.656C5.64968 20.6401 5.44892 20.6206 5.28141 20.596C5.15059 20.5767 4.92957 20.541 4.75153 20.4503C4.23408 20.1866 3.81338 19.7659 3.54973 19.2485C3.37789 18.9112 3.31078 18.5546 3.27974 18.1747C3.24998 17.8104 3.24999 17.3646 3.25 16.8304V7.16957C3.24999 6.63542 3.24998 6.18956 3.27974 5.82533C3.31078 5.44545 3.37789 5.08879 3.54973 4.75153C3.81338 4.23408 4.23408 3.81338 4.75153 3.54973C5.08879 3.37789 5.44545 3.31078 5.82533 3.27974C6.18956 3.24998 6.63542 3.24999 7.16957 3.25Z"
          fill={color}
        />
        <path
          d="M14.3711 12.25H18.6289C19.0243 12.25 19.3654 12.25 19.6463 12.2729 19.9428 12.2972 20.2377 12.3506 20.5215 12.4952 20.9448 12.711 21.2891 13.0552 21.5048 13.4785 21.6494 13.7623 21.7028 14.0572 21.7271 14.3537 21.75 14.6347 21.75 14.9757 21.75 15.3711V17.6289C21.75 18.0243 21.75 18.3653 21.7271 18.6463 21.7028 18.9428 21.6494 19.2377 21.5048 19.5215 21.2891 19.9448 20.9448 20.2891 20.5215 20.5048 20.2377 20.6494 19.9428 20.7028 19.6463 20.7271 19.3653 20.75 19.0243 20.75 18.6289 20.75H14.3711C13.9757 20.75 13.6347 20.75 13.3537 20.7271 13.0572 20.7028 12.7623 20.6494 12.4785 20.5048 12.0552 20.2891 11.711 19.9448 11.4952 19.5215 11.3506 19.2377 11.2972 18.9428 11.2729 18.6463 11.25 18.3653 11.25 18.0243 11.25 17.6289V15.3711C11.25 14.9757 11.25 14.6347 11.2729 14.3537 11.2972 14.0572 11.3506 13.7623 11.4952 13.4785 11.711 13.0552 12.0552 12.711 12.4785 12.4952 12.7623 12.3506 13.0572 12.2972 13.3537 12.2729 13.6346 12.25 13.9758 12.25 14.3711 12.25zM13.4759 13.7679C13.2721 13.7846 13.1966 13.8129 13.1595 13.8317 13.0184 13.9037 12.9037 14.0184 12.8317 14.1595 12.8129 14.1966 12.7846 14.2721 12.7679 14.4759 12.7673 14.4838 12.7667 14.4919 12.7661 14.5H20.2339C20.2333 14.4919 20.2327 14.4838 20.2321 14.4759 20.2154 14.2721 20.1872 14.1966 20.1683 14.1595 20.0964 14.0184 19.9816 13.9037 19.8405 13.8317 19.8034 13.8129 19.7279 13.7846 19.5241 13.7679 19.3116 13.7506 19.0324 13.75 18.6 13.75H14.4C13.9676 13.75 13.6884 13.7506 13.4759 13.7679zM20.25 16.5H12.75V17.6C12.75 18.0324 12.7506 18.3116 12.7679 18.5241 12.7846 18.7279 12.8129 18.8034 12.8317 18.8405 12.9037 18.9816 13.0184 19.0964 13.1595 19.1683 13.1966 19.1872 13.2721 19.2154 13.4759 19.2321 13.6884 19.2494 13.9676 19.25 14.4 19.25H18.6C19.0324 19.25 19.3116 19.2494 19.5241 19.2321 19.7279 19.2154 19.8034 19.1872 19.8405 19.1683 19.9816 19.0964 20.0964 18.9816 20.1683 18.8405 20.1872 18.8034 20.2154 18.7279 20.2321 18.5241 20.2494 18.3116 20.25 18.0324 20.25 17.6V16.5zM6.5 6.25C6.08579 6.25 5.75 6.58579 5.75 7 5.75 7.41421 6.08579 7.75 6.5 7.75H10.5C10.9142 7.75 11.25 7.41421 11.25 7 11.25 6.58579 10.9142 6.25 10.5 6.25H6.5zM5.75 10C5.75 9.58579 6.08579 9.25 6.5 9.25H13.5C13.9142 9.25 14.25 9.58579 14.25 10 14.25 10.4142 13.9142 10.75 13.5 10.75H6.5C6.08579 10.75 5.75 10.4142 5.75 10zM6.5 12.25C6.08579 12.25 5.75 12.5858 5.75 13 5.75 13.4142 6.08579 13.75 6.5 13.75H10C10.4142 13.75 10.75 13.4142 10.75 13 10.75 12.5858 10.4142 12.25 10 12.25H6.5zM5.75 17C5.75 16.5858 6.08579 16.25 6.5 16.25H8.5C8.91421 16.25 9.25 16.5858 9.25 17 9.25 17.4142 8.91421 17.75 8.5 17.75H6.5C6.08579 17.75 5.75 17.4142 5.75 17z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BillingInfoIcon;
