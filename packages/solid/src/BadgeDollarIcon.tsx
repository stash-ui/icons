import * as React from 'react';
import { IconProps } from './types';

export const BadgeDollarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6498 3.7974C12.2239 3.68269 11.7752 3.68269 11.3494 3.7974C10.8628 3.92844 10.4415 4.25477 9.92968 4.65116L9.63213 4.88116C9.38992 5.06827 9.33148 5.11068 9.27353 5.14223C9.2114 5.17607 9.14585 5.20323 9.07799 5.22323C9.0147 5.24189 8.94339 5.25323 8.63981 5.29219L8.26678 5.33996C7.62458 5.42157 7.09589 5.48876 6.65921 5.74012C6.27696 5.96015 5.95972 6.27739 5.73969 6.65964C5.48833 7.09632 5.42114 7.62501 5.33953 8.26721L5.29176 8.64024C5.2528 8.94382 5.24146 9.01513 5.2228 9.07842C5.2028 9.14628 5.17565 9.21183 5.14181 9.27396C5.11025 9.3319 5.06784 9.39035 4.88073 9.63256L4.65073 9.9301C4.25434 10.4419 3.92801 10.8633 3.79697 11.3498C3.68226 11.7757 3.68226 12.2243 3.79697 12.6502C3.92801 13.1367 4.25434 13.5581 4.65073 14.0699L4.88073 14.3674C5.06784 14.6096 5.11025 14.6681 5.14181 14.726C5.17565 14.7881 5.2028 14.8537 5.2228 14.9216C5.24146 14.9848 5.2528 15.0562 5.29176 15.3597L5.33953 15.7328C5.42114 16.375 5.48833 16.9037 5.73969 17.3403C5.95972 17.7226 6.27696 18.0398 6.65921 18.2599C7.09589 18.5112 7.62458 18.5784 8.26678 18.66L8.63981 18.7078C8.94339 18.7467 9.0147 18.7581 9.07799 18.7767C9.14585 18.7968 9.2114 18.8239 9.27353 18.8577C9.33148 18.8893 9.38992 18.9317 9.63213 19.1188L9.92967 19.3488C10.4415 19.7452 10.8628 20.0715 11.3494 20.2026C11.7752 20.3173 12.2239 20.3173 12.6498 20.2026C13.1363 20.0715 13.5576 19.7452 14.0694 19.3488L14.367 19.1188C14.6092 18.9317 14.6676 18.8893 14.7256 18.8577C14.7877 18.8239 14.8533 18.7968 14.9211 18.7767C14.9844 18.7581 15.0557 18.7467 15.3593 18.7078L15.7323 18.66C16.3745 18.5784 16.9032 18.5112 17.3399 18.2599C17.7222 18.0398 18.0394 17.7226 18.2594 17.3403C18.5108 16.9037 18.578 16.375 18.6596 15.7328L18.7074 15.3597C18.7463 15.0562 18.7577 14.9848 18.7763 14.9216C18.7963 14.8537 18.8235 14.7881 18.8573 14.726C18.8889 14.6681 18.9313 14.6096 19.1184 14.3674L19.3484 14.0699C19.7448 13.5581 20.0711 13.1367 20.2022 12.6502C20.3169 12.2243 20.3169 11.7757 20.2022 11.3498C20.0711 10.8633 19.7448 10.4419 19.3484 9.9301L19.1184 9.63256C18.9313 9.39035 18.8889 9.3319 18.8573 9.27396C18.8235 9.21183 18.7963 9.14628 18.7763 9.07842C18.7577 9.01513 18.7463 8.94382 18.7074 8.64024L18.6596 8.26721C18.578 7.62501 18.5108 7.09632 18.2594 6.65964C18.0394 6.27739 17.7222 5.96015 17.3399 5.74012C16.9032 5.48876 16.3745 5.42157 15.7323 5.33996L15.3593 5.29219C15.0557 5.25323 14.9844 5.24189 14.9211 5.22323C14.8533 5.20323 14.7877 5.17607 14.7256 5.14223C14.6676 5.11068 14.6092 5.06827 14.367 4.88116L14.0694 4.65116C13.5576 4.25477 13.1363 3.92844 12.6498 3.7974ZM12.6926 8.05476V8.70952H12.6945C13.7515 8.70952 14.6024 9.58827 14.6024 10.6738C14.6024 11.0354 14.3174 11.3286 13.9658 11.3286C13.6142 11.3286 13.3292 11.0354 13.3292 10.6738C13.3292 10.3093 13.0462 10.019 12.6945 10.019H11.2572C10.9951 10.019 10.7829 10.2383 10.7829 10.5052C10.7829 10.748 10.8352 10.8158 10.8465 10.83C10.8671 10.8558 10.922 10.9054 11.1045 10.9691L13.4139 11.7565C13.6824 11.8499 14.0052 11.9996 14.2494 12.3054C14.5029 12.6227 14.6024 13.0186 14.6024 13.4615C14.6024 14.4536 13.8182 15.2571 12.8549 15.2571H12.6926V15.9119C12.6926 16.2735 12.4076 16.5667 12.0561 16.5667C11.7045 16.5667 11.4195 16.2735 11.4195 15.9119V15.2571H11.4176C10.3606 15.2571 9.50976 14.3784 9.50976 13.2929C9.50976 12.9312 9.79477 12.6381 10.1463 12.6381C10.4979 12.6381 10.7829 12.9312 10.7829 13.2929C10.7829 13.6574 11.0659 13.9476 11.4176 13.9476H12.8549C13.117 13.9476 13.3292 13.7283 13.3292 13.4615C13.3292 13.2187 13.277 13.1508 13.2656 13.1366C13.245 13.1108 13.1902 13.0613 13.0077 12.9976L10.6983 12.2102C10.4297 12.1168 10.1069 11.967 9.86275 11.6613C9.60927 11.3439 9.50976 10.9481 9.50976 10.5052C9.50976 9.5131 10.2939 8.70952 11.2572 8.70952H11.4195V8.05476C11.4195 7.69314 11.7045 7.39999 12.0561 7.39999C12.4076 7.39999 12.6926 7.69314 12.6926 8.05476Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BadgeDollarIcon;
