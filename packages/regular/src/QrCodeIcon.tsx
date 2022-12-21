import * as React from 'react';
import { IconProps } from './types';

export const QrCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g opacity=".5" fill={color}>
          <path d="M7 8.6C7 8.03995 7 7.75992 7.10899 7.54601 7.20487 7.35785 7.35785 7.20487 7.54601 7.10899 7.75992 7 8.03995 7 8.6 7H8.9C9.46005 7 9.74008 7 9.95399 7.10899 10.1422 7.20487 10.2951 7.35785 10.391 7.54601 10.5 7.75992 10.5 8.03995 10.5 8.6V8.9C10.5 9.46005 10.5 9.74008 10.391 9.95399 10.2951 10.1422 10.1422 10.2951 9.95399 10.391 9.74008 10.5 9.46005 10.5 8.9 10.5H8.6C8.03995 10.5 7.75992 10.5 7.54601 10.391 7.35785 10.2951 7.20487 10.1422 7.10899 9.95399 7 9.74008 7 9.46005 7 8.9V8.6zM7 15.1C7 14.5399 7 14.2599 7.10899 14.046 7.20487 13.8578 7.35785 13.7049 7.54601 13.609 7.75992 13.5 8.03995 13.5 8.6 13.5H8.9C9.46005 13.5 9.74008 13.5 9.95399 13.609 10.1422 13.7049 10.2951 13.8578 10.391 14.046 10.5 14.2599 10.5 14.5399 10.5 15.1V15.4C10.5 15.9601 10.5 16.2401 10.391 16.454 10.2951 16.6422 10.1422 16.7951 9.95399 16.891 9.74008 17 9.46005 17 8.9 17H8.6C8.03995 17 7.75992 17 7.54601 16.891 7.35785 16.7951 7.20487 16.6422 7.10899 16.454 7 16.2401 7 15.9601 7 15.4V15.1zM13.609 7.54601C13.5 7.75992 13.5 8.03995 13.5 8.6V8.9C13.5 9.46005 13.5 9.74008 13.609 9.95399 13.7049 10.1422 13.8578 10.2951 14.046 10.391 14.2599 10.5 14.5399 10.5 15.1 10.5H15.4C15.9601 10.5 16.2401 10.5 16.454 10.391 16.6422 10.2951 16.7951 10.1422 16.891 9.95399 17 9.74008 17 9.46005 17 8.9V8.6C17 8.03995 17 7.75992 16.891 7.54601 16.7951 7.35785 16.6422 7.20487 16.454 7.10899 16.2401 7 15.9601 7 15.4 7H15.1C14.5399 7 14.2599 7 14.046 7.10899 13.8578 7.20487 13.7049 7.35785 13.609 7.54601z" />
        </g>
        <path
          d="M7.96858 3.25L8.66667 3.25C9.08088 3.25 9.41667 3.58579 9.41667 4C9.41667 4.41421 9.08088 4.75 8.66667 4.75H8C7.28756 4.75 6.79833 4.75058 6.41908 4.78157C6.04858 4.81184 5.84956 4.86735 5.70552 4.94074C5.37623 5.10852 5.10852 5.37623 4.94074 5.70552C4.86735 5.84956 4.81184 6.04858 4.78157 6.41908C4.75058 6.79833 4.75 7.28756 4.75 8V8.66667C4.75 9.08088 4.41421 9.41667 4 9.41667C3.58579 9.41667 3.25 9.08088 3.25 8.66667L3.25 7.96858C3.24999 7.2952 3.24998 6.7445 3.28655 6.29693C3.3244 5.83367 3.40514 5.41527 3.60423 5.02453C3.91582 4.413 4.413 3.91582 5.02453 3.60423C5.41527 3.40514 5.83367 3.3244 6.29693 3.28655C6.7445 3.24998 7.2952 3.24999 7.96858 3.25ZM17.5809 4.78157C17.2017 4.75058 16.7124 4.75 16 4.75H15.3333C14.9191 4.75 14.5833 4.41421 14.5833 4C14.5833 3.58579 14.9191 3.25 15.3333 3.25L16.0314 3.25C16.7048 3.24999 17.2555 3.24998 17.7031 3.28655C18.1663 3.3244 18.5847 3.40514 18.9755 3.60423C19.587 3.91582 20.0842 4.413 20.3958 5.02453C20.5949 5.41527 20.6756 5.83367 20.7134 6.29693C20.75 6.74449 20.75 7.29519 20.75 7.96856V8.66667C20.75 9.08088 20.4142 9.41667 20 9.41667C19.5858 9.41667 19.25 9.08088 19.25 8.66667V8C19.25 7.28756 19.2494 6.79833 19.2184 6.41908C19.1882 6.04858 19.1327 5.84956 19.0593 5.70552C18.8915 5.37623 18.6238 5.10852 18.2945 4.94074C18.1504 4.86735 17.9514 4.81184 17.5809 4.78157ZM4 14.5833C4.41421 14.5833 4.75 14.9191 4.75 15.3333V16C4.75 16.7124 4.75058 17.2017 4.78157 17.5809C4.81184 17.9514 4.86735 18.1504 4.94074 18.2945C5.10852 18.6238 5.37623 18.8915 5.70552 19.0593C5.84956 19.1327 6.04858 19.1882 6.41908 19.2184C6.79833 19.2494 7.28756 19.25 8 19.25H8.66667C9.08088 19.25 9.41667 19.5858 9.41667 20C9.41667 20.4142 9.08088 20.75 8.66667 20.75H7.96856C7.29519 20.75 6.74449 20.75 6.29693 20.7134C5.83367 20.6756 5.41527 20.5949 5.02453 20.3958C4.413 20.0842 3.91582 19.587 3.60423 18.9755C3.40514 18.5847 3.3244 18.1663 3.28655 17.7031C3.24998 17.2555 3.24999 16.7048 3.25 16.0314L3.25 15.3333C3.25 14.9191 3.58579 14.5833 4 14.5833ZM20 14.5833C20.4142 14.5833 20.75 14.9191 20.75 15.3333V16.0314C20.75 16.7048 20.75 17.2555 20.7134 17.7031C20.6756 18.1663 20.5949 18.5847 20.3958 18.9755C20.0842 19.587 19.587 20.0842 18.9755 20.3958C18.5847 20.5949 18.1663 20.6756 17.7031 20.7134C17.2555 20.75 16.7048 20.75 16.0314 20.75H15.3333C14.9191 20.75 14.5833 20.4142 14.5833 20C14.5833 19.5858 14.9191 19.25 15.3333 19.25H16C16.7124 19.25 17.2017 19.2494 17.5809 19.2184C17.9514 19.1882 18.1504 19.1327 18.2945 19.0593C18.6238 18.8915 18.8915 18.6238 19.0593 18.2945C19.1327 18.1504 19.1882 17.9514 19.2184 17.5809C19.2494 17.2017 19.25 16.7124 19.25 16V15.3333C19.25 14.9191 19.5858 14.5833 20 14.5833Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.57378 6.25C8.5825 6.25 8.59124 6.25 8.6 6.25H8.9C8.90876 6.25 8.9175 6.25 8.92622 6.25 9.1837 6.24998 9.42019 6.24996 9.61787 6.26612 9.83101 6.28353 10.0642 6.32339 10.2945 6.44074 10.6238 6.60852 10.8915 6.87623 11.0593 7.20552 11.1766 7.43582 11.2165 7.669 11.2339 7.88213 11.25 8.07982 11.25 8.3163 11.25 8.57379V8.92621C11.25 9.1837 11.25 9.42019 11.2339 9.61787 11.2165 9.83101 11.1766 10.0642 11.0593 10.2945 10.8915 10.6238 10.6238 10.8915 10.2945 11.0593 10.0642 11.1766 9.83101 11.2165 9.61787 11.2339 9.42019 11.25 9.1837 11.25 8.92621 11.25H8.57379C8.3163 11.25 8.07982 11.25 7.88213 11.2339 7.669 11.2165 7.43582 11.1766 7.20552 11.0593 6.87623 10.8915 6.60852 10.6238 6.44074 10.2945 6.32339 10.0642 6.28353 9.83101 6.26612 9.61787 6.24996 9.42019 6.24998 9.1837 6.25 8.92622 6.25 8.9175 6.25 8.90876 6.25 8.9V8.6C6.25 8.59124 6.25 8.5825 6.25 8.57378 6.24998 8.3163 6.24996 8.07981 6.26612 7.88213 6.28353 7.669 6.32339 7.43582 6.44074 7.20552 6.60852 6.87623 6.87623 6.60852 7.20552 6.44074 7.43582 6.32339 7.669 6.28353 7.88213 6.26612 8.07981 6.24996 8.3163 6.24998 8.57378 6.25zM7.88088 7.77973L7.88239 7.77917 7.88088 7.77973zM7.88346 7.77882C7.89234 7.77607 7.92547 7.76757 8.00428 7.76113 8.1334 7.75058 8.3076 7.75 8.6 7.75H8.9C9.1924 7.75 9.3666 7.75058 9.49572 7.76113 9.57453 7.76757 9.60766 7.77607 9.61654 7.77882 9.66118 7.80234 9.69766 7.83882 9.72118 7.88346 9.72393 7.89234 9.73243 7.92547 9.73887 8.00428 9.74942 8.1334 9.75 8.3076 9.75 8.6V8.9C9.75 9.1924 9.74942 9.3666 9.73887 9.49572 9.73243 9.57453 9.72393 9.60766 9.72118 9.61654 9.69766 9.66118 9.66118 9.69766 9.61654 9.72118 9.60766 9.72393 9.57454 9.73243 9.49572 9.73887 9.3666 9.74942 9.1924 9.75 8.9 9.75H8.6C8.3076 9.75 8.1334 9.74942 8.00428 9.73887 7.92547 9.73243 7.89234 9.72393 7.88346 9.72118 7.83882 9.69766 7.80234 9.66118 7.77882 9.61654 7.77607 9.60766 7.76757 9.57453 7.76113 9.49572 7.75058 9.3666 7.75 9.1924 7.75 8.9V8.6C7.75 8.3076 7.75058 8.1334 7.76113 8.00428 7.76757 7.92547 7.77607 7.89234 7.77882 7.88346 7.80234 7.83882 7.83882 7.80234 7.88346 7.77882zM7.77973 7.88088L7.77917 7.88239 7.77973 7.88088zM7.77973 9.61913L7.77917 9.61761 7.77973 9.61913zM7.88088 9.72027L7.88239 9.72083 7.88088 9.72027zM9.61913 9.72027L9.61761 9.72083 9.61913 9.72027zM9.72027 9.61913L9.72083 9.61761 9.72027 9.61913zM9.72027 7.88088L9.72083 7.88239 9.72027 7.88088zM9.61761 7.77917L9.61913 7.77973 9.61761 7.77917zM15.0738 6.25H15.4262C15.6837 6.24998 15.9202 6.24996 16.1179 6.26612 16.331 6.28353 16.5642 6.32339 16.7945 6.44074 17.1238 6.60852 17.3915 6.87623 17.5593 7.20552 17.6766 7.43582 17.7165 7.669 17.7339 7.88213 17.75 8.07981 17.75 8.31629 17.75 8.57377V8.92623C17.75 9.18371 17.75 9.42019 17.7339 9.61787 17.7165 9.83101 17.6766 10.0642 17.5593 10.2945 17.3915 10.6238 17.1238 10.8915 16.7945 11.0593 16.5642 11.1766 16.331 11.2165 16.1179 11.2339 15.9202 11.25 15.6837 11.25 15.4262 11.25H15.0738C14.8163 11.25 14.5798 11.25 14.3821 11.2339 14.169 11.2165 13.9358 11.1766 13.7055 11.0593 13.3762 10.8915 13.1085 10.6238 12.9407 10.2945 12.8234 10.0642 12.7835 9.83101 12.7661 9.61787 12.75 9.42019 12.75 9.1837 12.75 8.92621V8.57379C12.75 8.3163 12.75 8.07982 12.7661 7.88213 12.7835 7.669 12.8234 7.43582 12.9407 7.20552 13.1085 6.87623 13.3762 6.60852 13.7055 6.44074 13.9358 6.32339 14.169 6.28353 14.3821 6.26612 14.5798 6.24996 14.8163 6.24998 15.0738 6.25zM14.3809 7.77973L14.3824 7.77918 14.3809 7.77973zM14.3835 7.77882C14.3923 7.77607 14.4255 7.76757 14.5043 7.76113 14.6334 7.75058 14.8076 7.75 15.1 7.75H15.4C15.6924 7.75 15.8666 7.75058 15.9957 7.76113 16.0745 7.76757 16.1077 7.77607 16.1165 7.77882 16.1612 7.80234 16.1977 7.83882 16.2212 7.88346 16.2239 7.89234 16.2324 7.92547 16.2389 8.00428 16.2494 8.1334 16.25 8.3076 16.25 8.6V8.9C16.25 9.1924 16.2494 9.3666 16.2389 9.49572 16.2324 9.57454 16.2239 9.60766 16.2212 9.61654 16.1977 9.66118 16.1612 9.69766 16.1165 9.72118 16.1077 9.72393 16.0745 9.73243 15.9957 9.73887 15.8666 9.74942 15.6924 9.75 15.4 9.75H15.1C14.8076 9.75 14.6334 9.74942 14.5043 9.73887 14.4255 9.73243 14.3923 9.72393 14.3835 9.72118 14.3388 9.69766 14.3023 9.66118 14.2788 9.61654 14.2761 9.60766 14.2676 9.57453 14.2611 9.49572 14.2506 9.3666 14.25 9.1924 14.25 8.9V8.6C14.25 8.3076 14.2506 8.1334 14.2611 8.00428 14.2676 7.92547 14.2761 7.89234 14.2788 7.88346 14.3023 7.83882 14.3388 7.80234 14.3835 7.77882zM14.2797 7.88088L14.2792 7.88239 14.2797 7.88088zM14.2797 9.61913L14.2792 9.61764 14.2797 9.61913zM14.3809 9.72027L14.3824 9.72083 14.3809 9.72027zM16.1191 9.72027L16.1176 9.72082 16.1191 9.72027zM16.2203 9.61913L16.2208 9.61761 16.2203 9.61913zM16.2203 7.88088L16.2208 7.88239 16.2203 7.88088zM16.1176 7.77918L16.1191 7.77973 16.1176 7.77918zM8.57379 12.75H8.92621C9.1837 12.75 9.42019 12.75 9.61787 12.7661 9.83101 12.7835 10.0642 12.8234 10.2945 12.9407 10.6238 13.1085 10.8915 13.3762 11.0593 13.7055 11.1766 13.9358 11.2165 14.169 11.2339 14.3821 11.25 14.5798 11.25 14.8163 11.25 15.0738V15.4262C11.25 15.6837 11.25 15.9202 11.2339 16.1179 11.2165 16.331 11.1766 16.5642 11.0593 16.7945 10.8915 17.1238 10.6238 17.3915 10.2945 17.5593 10.0642 17.6766 9.83101 17.7165 9.61787 17.7339 9.42019 17.75 9.18371 17.75 8.92623 17.75H8.57377C8.31629 17.75 8.07981 17.75 7.88213 17.7339 7.669 17.7165 7.43582 17.6766 7.20552 17.5593 6.87623 17.3915 6.60852 17.1238 6.44074 16.7945 6.32339 16.5642 6.28353 16.331 6.26612 16.1179 6.24996 15.9202 6.24998 15.6837 6.25 15.4262V15.0738C6.24998 14.8163 6.24996 14.5798 6.26612 14.3821 6.28353 14.169 6.32339 13.9358 6.44074 13.7055 6.60852 13.3762 6.87623 13.1085 7.20552 12.9407 7.43582 12.8234 7.669 12.7835 7.88213 12.7661 8.07982 12.75 8.3163 12.75 8.57379 12.75zM7.88088 14.2797L7.88236 14.2792 7.88088 14.2797zM7.88346 14.2788C7.89234 14.2761 7.92547 14.2676 8.00428 14.2611 8.1334 14.2506 8.3076 14.25 8.6 14.25H8.9C9.1924 14.25 9.3666 14.2506 9.49572 14.2611 9.57453 14.2676 9.60766 14.2761 9.61654 14.2788 9.66118 14.3023 9.69766 14.3388 9.72118 14.3835 9.72393 14.3923 9.73243 14.4255 9.73887 14.5043 9.74942 14.6334 9.75 14.8076 9.75 15.1V15.4C9.75 15.6924 9.74942 15.8666 9.73887 15.9957 9.73243 16.0745 9.72393 16.1077 9.72118 16.1165 9.69766 16.1612 9.66118 16.1977 9.61654 16.2212 9.60766 16.2239 9.57453 16.2324 9.49572 16.2389 9.3666 16.2494 9.1924 16.25 8.9 16.25H8.6C8.3076 16.25 8.1334 16.2494 8.00428 16.2389 7.92547 16.2324 7.89234 16.2239 7.88346 16.2212 7.83882 16.1977 7.80234 16.1612 7.77882 16.1165 7.77607 16.1077 7.76757 16.0745 7.76113 15.9957 7.75058 15.8666 7.75 15.6924 7.75 15.4V15.1C7.75 14.8076 7.75058 14.6334 7.76113 14.5043 7.76757 14.4255 7.77607 14.3923 7.77882 14.3835 7.80234 14.3388 7.83882 14.3023 7.88346 14.2788zM7.77973 14.3809L7.77918 14.3824 7.77973 14.3809zM7.77973 16.1191L7.77918 16.1176 7.77973 16.1191zM7.88088 16.2203L7.88236 16.2208 7.88088 16.2203zM9.61913 16.2203L9.61764 16.2208 9.61913 16.2203zM9.72027 16.1191L9.72082 16.1176 9.72027 16.1191zM9.72027 14.3809L9.72082 14.3824 9.72027 14.3809zM9.61764 14.2792L9.61913 14.2797 9.61764 14.2792zM13.75 12.75C14.1642 12.75 14.5 13.0858 14.5 13.5V14.25C14.5 14.3881 14.6119 14.5 14.75 14.5H16.25C17.2165 14.5 18 15.2835 18 16.25V17C18 17.4142 17.6642 17.75 17.25 17.75 16.8358 17.75 16.5 17.4142 16.5 17V16.25C16.5 16.1119 16.3881 16 16.25 16H14.75C13.7835 16 13 15.2165 13 14.25V13.5C13 13.0858 13.3358 12.75 13.75 12.75z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default QrCodeIcon;
