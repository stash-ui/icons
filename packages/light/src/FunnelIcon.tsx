import * as React from 'react';
import { IconProps } from './types';

export const FunnelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.54238 5H15.4576C15.9242 4.99999 16.31 4.99998 16.6094 5.02818C16.9064 5.05615 17.2201 5.11815 17.4675 5.32154C17.805 5.59901 17.9979 6.01532 18 6.45103C18.0015 6.76671 17.8603 7.05169 17.6989 7.30949C17.5362 7.56924 17.2987 7.88226 17.0096 8.2632L14.4195 11.6765C14.1732 12.001 14.0924 12.1112 14.0355 12.2282C13.9806 12.3413 13.9402 12.4619 13.9158 12.5867C13.8904 12.7165 13.8883 12.8566 13.8883 13.2689L13.8883 17.5048C13.8883 17.7196 13.8883 17.9129 13.8746 18.0676C13.861 18.2214 13.8288 18.4267 13.6983 18.6052C13.5312 18.8339 13.2713 18.9808 12.984 18.9986C12.7569 19.0126 12.5653 18.9216 12.4325 18.8471C12.2991 18.7723 12.1425 18.6641 11.9708 18.5456L10.9871 17.8665C10.9729 17.8567 10.9588 17.847 10.9448 17.8374C10.7457 17.7003 10.5655 17.5763 10.4306 17.4063C10.3128 17.258 10.2251 17.0879 10.1719 16.9062C10.1111 16.6991 10.1114 16.4795 10.1117 16.2312C10.1117 16.214 10.1117 16.1967 10.1117 16.1793V13.2689C10.1117 12.8566 10.1096 12.7165 10.0842 12.5867C10.0598 12.4619 10.0194 12.3413 9.96447 12.2282C9.90761 12.1112 9.82679 12.001 9.58054 11.6765L7.02309 8.30625C7.02088 8.30341 7.0187 8.30054 7.01656 8.29765L6.99043 8.26322C6.70135 7.88227 6.4638 7.56924 6.30114 7.30949C6.13969 7.05169 5.99847 6.76671 6.00001 6.45103C6.00214 6.01532 6.19499 5.59901 6.53252 5.32154C6.77994 5.11815 7.09361 5.05615 7.39064 5.02818C7.69002 4.99998 8.07582 4.99999 8.54238 5ZM8.42543 8.5L10.3771 11.072C10.3865 11.0843 10.3957 11.0965 10.4048 11.1085C10.613 11.3826 10.7586 11.5744 10.8639 11.7911C10.9569 11.9825 11.0247 12.1855 11.0656 12.3948C11.1119 12.6314 11.1118 12.8738 11.1117 13.223C11.1117 13.2381 11.1117 13.2534 11.1117 13.2689V16.1793C11.1117 16.5095 11.1165 16.5738 11.1314 16.6247C11.1488 16.6841 11.1771 16.7384 11.2138 16.7846C11.244 16.8226 11.2888 16.8597 11.5552 17.0436L12.5212 17.7104C12.6876 17.8252 12.7976 17.9007 12.8808 17.951C12.8879 17.8479 12.8883 17.7052 12.8883 17.484V13.2689C12.8883 13.2534 12.8883 13.2381 12.8883 13.223C12.8882 12.8738 12.8881 12.6314 12.9344 12.3948C12.9753 12.1855 13.0431 11.9825 13.1361 11.7911C13.2414 11.5744 13.387 11.3826 13.5952 11.1085C13.6043 11.0965 13.6135 11.0843 13.6229 11.072L15.5746 8.5H8.42543ZM16.3333 7.5C16.5685 7.189 16.7364 6.96233 16.8513 6.77874C16.9912 6.55533 17.0001 6.4744 17 6.45592C16.9993 6.31029 16.9346 6.17803 16.8324 6.09403C16.8271 6.08964 16.7702 6.04775 16.5156 6.02377C16.2688 6.00053 15.9307 6 15.4319 6H8.56808C8.06933 6 7.73115 6.00053 7.4844 6.02377C7.22981 6.04775 7.17289 6.08964 7.16755 6.09403C7.06537 6.17803 7.00071 6.31029 7 6.45592C6.99991 6.4744 7.00875 6.55533 7.14866 6.77874C7.26364 6.96233 7.43145 7.189 7.66674 7.5H16.3333Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default FunnelIcon;
