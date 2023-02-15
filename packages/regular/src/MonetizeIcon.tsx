import * as React from 'react';
import { IconProps } from './types';

export const MonetizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5V7.25H11.1634C10.028 7.25 9.25 8.2559 9.25 9.30687C9.25 9.79679 9.34915 10.2368 9.61244 10.5973C9.87414 10.9557 10.2273 11.1371 10.5249 11.2503L12.9438 12.1524C13.1182 12.219 13.1606 12.2659 13.1762 12.2873C13.1902 12.3065 13.25 12.3976 13.25 12.6931C13.25 13.0842 12.9845 13.25 12.8366 13.25H11.3313C11.0897 13.25 10.75 13.0031 10.75 12.5C10.75 12.0858 10.4142 11.75 10 11.75C9.58579 11.75 9.25 12.0858 9.25 12.5C9.25 13.6323 10.0606 14.7016 11.25 14.7484V15.5C11.25 15.9142 11.5858 16.25 12 16.25C12.4142 16.25 12.75 15.9142 12.75 15.5V14.75H12.8366C13.972 14.75 14.75 13.7441 14.75 12.6931C14.75 12.2032 14.6508 11.7632 14.3876 11.4027C14.1259 11.0443 13.7727 10.8629 13.4751 10.7497L11.0562 9.84757C10.8818 9.78097 10.8394 9.7341 10.8238 9.71274C10.8098 9.69347 10.75 9.60235 10.75 9.30687C10.75 8.91578 11.0155 8.75 11.1634 8.75H12.6687C12.9103 8.75 13.25 8.99693 13.25 9.5C13.25 9.91421 13.5858 10.25 14 10.25C14.4142 10.25 14.75 9.91421 14.75 9.5C14.75 8.36775 13.9394 7.29837 12.75 7.25159V6.5Z"
          fill={color}
        />
        <path
          d="M14.633 2.25H9.367C8.27486 2.24999 7.40935 2.24999 6.71173 2.30699C5.99835 2.36527 5.39472 2.48688 4.84355 2.76772C3.94978 3.22312 3.22312 3.94978 2.76772 4.84355C2.48688 5.39472 2.36527 5.99834 2.30699 6.71173C2.24999 7.40935 2.24999 8.27485 2.25 9.36699V12.633C2.24999 13.7251 2.24999 14.5906 2.30699 15.2883C2.36527 16.0017 2.48688 16.6053 2.76772 17.1565C3.22312 18.0502 3.94978 18.7769 4.84355 19.2323C5.39472 19.5131 5.99834 19.6347 6.71173 19.693C7.40935 19.75 8.27484 19.75 9.36698 19.75H9.52081L11.106 21.3721C11.5964 21.8739 12.4036 21.8739 12.894 21.3721L14.4792 19.75H14.633C15.7252 19.75 16.5906 19.75 17.2883 19.693C18.0017 19.6347 18.6053 19.5131 19.1565 19.2323C20.0502 18.7769 20.7769 18.0502 21.2323 17.1565C21.5131 16.6053 21.6347 16.0017 21.693 15.2883C21.75 14.5906 21.75 13.7252 21.75 12.633V9.36698C21.75 8.27484 21.75 7.40935 21.693 6.71173C21.6347 5.99835 21.5131 5.39472 21.2323 4.84355C20.7769 3.94978 20.0502 3.22312 19.1565 2.76772C18.6053 2.48688 18.0017 2.36527 17.2883 2.30699C16.5906 2.24999 15.7251 2.24999 14.633 2.25ZM5.52453 4.10423C5.829 3.94909 6.21325 3.85271 6.83388 3.80201C7.46326 3.75058 8.26752 3.75 9.4 3.75H14.6C15.7325 3.75 16.5367 3.75058 17.1661 3.80201C17.7867 3.85271 18.171 3.94909 18.4755 4.10423C19.087 4.41582 19.5842 4.913 19.8958 5.52453C20.0509 5.829 20.1473 6.21325 20.198 6.83388C20.2494 7.46326 20.25 8.26752 20.25 9.4V12.6C20.25 13.7325 20.2494 14.5367 20.198 15.1661C20.1473 15.7867 20.0509 16.171 19.8958 16.4755C19.5842 17.087 19.087 17.5842 18.4755 17.8958C18.171 18.0509 17.7867 18.1473 17.1661 18.198C16.5367 18.2494 15.7325 18.25 14.6 18.25H13.8477L12 20.1408L10.1523 18.25H9.4C8.26752 18.25 7.46326 18.2494 6.83388 18.198C6.21325 18.1473 5.829 18.0509 5.52453 17.8958C4.913 17.5842 4.41582 17.087 4.10423 16.4755C3.94909 16.171 3.85271 15.7867 3.80201 15.1661C3.75058 14.5367 3.75 13.7325 3.75 12.6V9.4C3.75 8.26752 3.75058 7.46326 3.80201 6.83388C3.85271 6.21325 3.94909 5.829 4.10423 5.52453C4.41582 4.913 4.913 4.41582 5.52453 4.10423Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default MonetizeIcon;
