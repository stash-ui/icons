import * as React from 'react';
import { IconProps } from './types';

export const UserDollarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99965 2.5C8.03538 2.5 6.42072 4.05484 6.42072 6 6.42072 7.94516 8.03538 9.5 9.99965 9.5 11.9639 9.5 13.5786 7.94516 13.5786 6 13.5786 4.05484 11.9639 2.5 9.99965 2.5zM7.42072 6C7.42072 4.63145 8.56302 3.5 9.99965 3.5 11.4363 3.5 12.5786 4.63145 12.5786 6 12.5786 7.36855 11.4363 8.5 9.99965 8.5 8.56302 8.5 7.42072 7.36855 7.42072 6zM7.0208 11.6183C7.17601 11.5755 7.38751 11.6151 7.60602 11.7564 8.09509 12.0727 8.93518 12.4856 9.99965 12.4856 11.0641 12.4856 11.9042 12.0727 12.3933 11.7564 12.6118 11.6151 12.8233 11.5755 12.9785 11.6183 13.1255 11.6587 13.2718 11.7023 13.4173 11.7488L14.4017 12.064C14.6647 12.1481 14.9461 12.0032 15.0303 11.7402 15.1145 11.4772 14.9695 11.1957 14.7065 11.1116L13.7221 10.7964C13.5635 10.7457 13.4041 10.6983 13.244 10.6542 12.7238 10.5109 12.2165 10.6798 11.8502 10.9167 11.4564 11.1714 10.8051 11.4856 9.99965 11.4856 9.19419 11.4856 8.54289 11.1714 8.14906 10.9167 7.78276 10.6798 7.27555 10.5109 6.75532 10.6542 6.59518 10.6983 6.43577 10.7457 6.27719 10.7964L5.29279 11.1116C4.27479 11.4374 3.46359 12.1863 3.07939 13.1493L3.07886 13.1507 3.07753 13.1541C3.07646 13.1568 3.07396 13.1633 3.07107 13.1715 3.06401 13.1917 3.05974 13.2082 3.05803 13.2149 3.05637 13.2208 3.05044 13.2414 3.03396 13.2952 3.0111 13.3698 2.95637 13.5911 2.94181 13.6678 2.91514 13.8083 2.90814 13.8736 2.89687 13.9802L2.52229 17.5234C2.3748 18.5921 2.96546 19.6707 4.11166 19.9367 5.28956 20.2101 7.19913 20.5 9.99965 20.5 10.2758 20.5 10.4997 20.2761 10.4997 20 10.4997 19.7239 10.2758 19.5 9.99965 19.5 7.26833 19.5 5.43506 19.2173 4.33771 18.9626 3.7662 18.83 3.42334 18.2905 3.51366 17.6547L3.51492 17.6458 3.89163 14.0825C3.90134 13.9906 3.90507 13.9554 3.92426 13.8543 3.92426 13.8543 3.92449 13.8531 3.92506 13.8503L3.9273 13.8399 3.93464 13.8076C3.94056 13.7821 3.94787 13.7517 3.95552 13.7208 3.96316 13.6899 3.97086 13.6596 3.97749 13.6343L3.98607 13.6023 3.98896 13.592C3.98974 13.5893 3.99008 13.5881 3.99008 13.5881 4.00347 13.5444 4.01186 13.5164 4.01737 13.4973 4.29142 12.8303 4.86397 12.2988 5.59765 12.064L6.58205 11.7488C6.72755 11.7023 6.87384 11.6587 7.0208 11.6183zM18.4998 13C18.4998 12.7239 18.2759 12.5 17.9998 12.5 17.7236 12.5 17.4998 12.7239 17.4998 13V13.8333H17.1632C16.2461 13.8333 15.4998 14.5772 15.4998 15.495 15.4998 15.9205 15.5978 16.2818 15.8315 16.5663 16.058 16.842 16.361 16.9817 16.6312 17.0731L19.0493 17.8747C19.252 17.9434 19.3445 18.0067 19.3953 18.0685 19.4389 18.1215 19.4998 18.2323 19.4998 18.505 19.4998 18.869 19.2026 19.1667 18.8363 19.1667H17.3311C16.8704 19.1667 16.4998 18.7962 16.4998 18.3333 16.4998 18.0572 16.2759 17.8333 15.9998 17.8333 15.7236 17.8333 15.4998 18.0572 15.4998 18.3333 15.4998 19.3468 16.3165 20.1667 17.3311 20.1667H17.4998V21C17.4998 21.2761 17.7236 21.5 17.9998 21.5 18.2759 21.5 18.4998 21.2761 18.4998 21V20.1667H18.8363C19.7534 20.1667 20.4998 19.4228 20.4998 18.505 20.4998 18.0795 20.4017 17.7182 20.168 17.4337 19.9415 17.158 19.6385 17.0183 19.3683 16.9269L16.9502 16.1253C16.7475 16.0566 16.655 15.9933 16.6042 15.9315 16.5607 15.8785 16.4998 15.7677 16.4998 15.495 16.4998 15.131 16.7969 14.8333 17.1632 14.8333H18.6684C19.1291 14.8333 19.4998 15.2038 19.4998 15.6667 19.4998 15.9428 19.7236 16.1667 19.9998 16.1667 20.2759 16.1667 20.4998 15.9428 20.4998 15.6667 20.4998 14.6532 19.683 13.8333 18.6684 13.8333H18.4998V13z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserDollarIcon;
