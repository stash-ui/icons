import * as React from 'react';
import { IconProps } from './types';

export const HandHoldingDollarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9999 3.24762C12.4154 3.24762 12.7523 3.58446 12.7523 3.99998V4.46384H12.8035C13.8171 4.46384 14.6273 5.29107 14.6273 6.29728C14.6273 6.7128 14.2904 7.04964 13.8749 7.04964C13.4594 7.04964 13.1226 6.7128 13.1226 6.29728C13.1226 6.10936 12.9734 5.96856 12.8035 5.96856H11.1963C11.0962 5.96856 11.0437 6.00015 11.0073 6.03557C10.9617 6.07994 10.9174 6.15739 10.9009 6.26085C10.8844 6.36431 10.9015 6.45844 10.9343 6.52367C10.9622 6.57891 11.0058 6.6258 11.0911 6.65652L13.4522 7.50738C15.2794 8.16584 14.817 10.901 12.8536 10.901H12.7773V11.5C12.7773 11.9155 12.4405 12.2523 12.025 12.2523C11.6095 12.2523 11.2726 11.9155 11.2726 11.5V10.901H11.1963C10.1827 10.901 9.37256 10.0738 9.37256 9.06755C9.37256 8.65203 9.7094 8.31519 10.1249 8.31519C10.5404 8.31519 10.8773 8.65203 10.8773 9.06755C10.8773 9.25547 11.0265 9.39627 11.1963 9.39627H12.8536C12.9466 9.39627 12.9903 9.36799 13.0154 9.34491C13.0482 9.31485 13.0798 9.26277 13.0919 9.19312C13.1041 9.12335 13.0919 9.06286 13.0711 9.02291C13.055 8.99208 13.0243 8.95265 12.942 8.92299L10.5809 8.07214C9.61496 7.72404 9.29442 6.77916 9.41502 6.02366C9.53703 5.25928 10.1471 4.46384 11.1963 4.46384H11.2476V3.99998C11.2476 3.58446 11.5844 3.24762 11.9999 3.24762ZM7.36972 13.5417C7.91082 13.2035 8.5697 12.9976 9.43287 12.9976H12.5013C13.0344 12.9976 13.5077 13.1651 13.8554 13.487C14.1998 13.8058 14.3776 14.2387 14.3776 14.675C14.3776 15.1113 14.1998 15.5441 13.8554 15.863C13.5077 16.1849 13.0344 16.3523 12.5013 16.3523H10.4999C10.2991 16.3523 10.2169 16.4145 10.187 16.4443C10.1502 16.4809 10.1273 16.5338 10.1273 16.5955C10.1273 16.6573 10.1502 16.7102 10.187 16.7468C10.2169 16.7766 10.2991 16.8387 10.4999 16.8387H13.5013C14.289 16.8387 15.0423 16.5639 15.8119 16.127C16.4022 15.7918 16.9532 15.3923 17.5244 14.9781C17.7143 14.8404 17.9065 14.7011 18.103 14.562C18.1202 14.5499 18.1379 14.5384 18.1561 14.5277C19.0367 14.0095 19.9733 14.3331 20.4388 14.9813C20.669 15.302 20.7963 15.7159 20.7385 16.1523C20.6817 16.5806 20.4552 16.9688 20.0915 17.2688L20.0872 17.2734C20.0609 17.3005 20.0233 17.3389 19.9749 17.3871C19.8782 17.4835 19.7386 17.6192 19.5622 17.781C19.2103 18.104 18.7077 18.5352 18.1047 18.9679C16.928 19.8121 15.2453 20.7523 13.5013 20.7523H3.99992C3.5844 20.7523 3.24756 20.4155 3.24756 20V16.5C3.24756 16.0845 3.5844 15.7476 3.99992 15.7476C4.62366 15.7476 5.01663 15.6079 5.30897 15.4288C5.62276 15.2365 5.86543 14.975 6.18145 14.6226C6.19169 14.6112 6.20202 14.5997 6.21245 14.5881C6.50443 14.2622 6.87029 13.8539 7.36972 13.5417ZM19.0333 16.1983C19.06 16.1699 19.0888 16.1436 19.1195 16.1197C19.2366 16.0285 19.2453 15.9654 19.2468 15.9547C19.2495 15.9339 19.2455 15.8993 19.2165 15.8589C19.1868 15.8175 19.1447 15.7905 19.1043 15.7809C19.0768 15.7743 19.0244 15.7689 18.9409 15.8126C18.7853 15.923 18.6239 16.0401 18.4576 16.1607C17.8719 16.5856 17.2251 17.055 16.5548 17.4355C15.6647 17.9409 14.6489 18.3435 13.5013 18.3435H10.4999C9.9507 18.3435 9.47047 18.1567 9.12536 17.8132C8.78711 17.4764 8.62256 17.0316 8.62256 16.5955C8.62256 16.1595 8.78711 15.7147 9.12536 15.3779C9.47047 15.0343 9.9507 14.8476 10.4999 14.8476H12.5013C12.7175 14.8476 12.8061 14.7839 12.8331 14.7588C12.8634 14.7308 12.8729 14.7012 12.8729 14.675C12.8729 14.6488 12.8634 14.6191 12.8331 14.5911C12.8061 14.5661 12.7175 14.5023 12.5013 14.5023H9.43287C8.82956 14.5023 8.45109 14.6403 8.1673 14.8176C7.85967 15.0099 7.62122 15.271 7.30163 15.6273L7.28726 15.6433C6.98899 15.976 6.61451 16.3936 6.09503 16.7118C5.71466 16.9449 5.27665 17.1143 4.75228 17.1965V19.2476H13.5013C14.7559 19.2476 16.1135 18.5445 17.2275 17.7453C17.7698 17.3562 18.2252 16.9657 18.5448 16.6724C18.7043 16.5261 18.8288 16.405 18.9124 16.3216C18.9542 16.28 18.9857 16.2478 19.0061 16.2267L19.0282 16.2037L19.0333 16.1983Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default HandHoldingDollarIcon;
