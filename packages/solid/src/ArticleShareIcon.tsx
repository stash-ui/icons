import * as React from 'react';
import { IconProps } from './types';

export const ArticleShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.1786 2.5H16.3214C16.8633 2.5 17.3004 2.49999 17.6543 2.52891C18.0187 2.55868 18.3388 2.62159 18.635 2.77248C19.1054 3.01217 19.4878 3.39462 19.7275 3.86502C19.8784 4.16117 19.9413 4.48126 19.9711 4.84569C20 5.19963 20 5.6367 20 6.17859V12.5C20 12.7761 19.7761 13 19.5 13C19.2239 13 19 12.7761 19 12.5V6.2C19 5.6317 18.9996 5.23554 18.9744 4.92712C18.9497 4.62454 18.9036 4.45069 18.8365 4.31901C18.6927 4.03677 18.4632 3.8073 18.181 3.66349C18.0493 3.5964 17.8755 3.55031 17.5729 3.52559C17.2645 3.50039 16.8683 3.5 16.3 3.5H5.2C4.6317 3.5 4.23554 3.50039 3.92712 3.52559C3.62454 3.55031 3.45069 3.5964 3.31901 3.66349C3.03677 3.8073 2.8073 4.03677 2.66349 4.31901C2.5964 4.45069 2.55031 4.62454 2.52559 4.92712C2.50039 5.23554 2.5 5.6317 2.5 6.2V21C2.5 21.2761 2.27614 21.5 2 21.5C1.72386 21.5 1.5 21.2761 1.5 21V6.1786C1.5 5.63671 1.49999 5.19963 1.52891 4.84569C1.55868 4.48126 1.62159 4.16117 1.77248 3.86502C2.01217 3.39462 2.39462 3.01217 2.86502 2.77248C3.16117 2.62159 3.48126 2.55868 3.84569 2.52891C4.19963 2.49999 4.63671 2.5 5.1786 2.5Z"
          fill={color}
        />
        <path
          d="M5.75 7.5C5.75 7.08579 6.08579 6.75 6.5 6.75H15.5C15.9142 6.75 16.25 7.08579 16.25 7.5C16.25 7.91421 15.9142 8.25 15.5 8.25H6.5C6.08579 8.25 5.75 7.91421 5.75 7.5Z"
          fill={color}
        />
        <path
          d="M13.9659 10.25H12.0341C11.9079 10.25 11.785 10.25 11.6809 10.2585C11.5666 10.2678 11.4317 10.2898 11.296 10.359C11.1078 10.4549 10.9549 10.6079 10.859 10.796C10.7898 10.9317 10.7678 11.0666 10.7585 11.1809C10.75 11.2849 10.75 11.4078 10.75 11.5339V12.716C10.75 12.8421 10.75 12.9651 10.7585 13.0691C10.7678 13.1834 10.7898 13.3183 10.859 13.454C10.9549 13.6422 11.1078 13.7951 11.296 13.891C11.4317 13.9602 11.5666 13.9822 11.6809 13.9915C11.785 14 11.9079 14 12.0341 14H13.9659C14.0921 14 14.215 14 14.3191 13.9915C14.4334 13.9822 14.5683 13.9602 14.704 13.891C14.8922 13.7951 15.0451 13.6422 15.141 13.454C15.2102 13.3183 15.2322 13.1834 15.2415 13.0691C15.25 12.9651 15.25 12.8422 15.25 12.7161V11.534C15.25 11.4078 15.25 11.2849 15.2415 11.1809C15.2322 11.0666 15.2102 10.9317 15.141 10.796C15.0451 10.6079 14.8922 10.4549 14.704 10.359C14.5683 10.2898 14.4334 10.2678 14.3191 10.2585C14.215 10.25 14.0921 10.25 13.9659 10.25ZM11.7552 11.2623L11.7557 11.2557L11.7623 11.2552C11.8206 11.2504 11.9017 11.25 12.05 11.25H13.95C14.0983 11.25 14.1794 11.2504 14.2377 11.2552L14.2443 11.2557L14.2448 11.2623C14.2496 11.3206 14.25 11.4017 14.25 11.55V12.7C14.25 12.8483 14.2496 12.9294 14.2448 12.9877L14.2443 12.9943L14.2377 12.9949C14.1794 12.9996 14.0983 13 13.95 13H12.05C11.9017 13 11.8206 12.9996 11.7623 12.9949L11.7557 12.9943L11.7552 12.9877C11.7504 12.9294 11.75 12.8483 11.75 12.7V11.55C11.75 11.4017 11.7504 11.3206 11.7552 11.2623Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.75 11C6.75 10.7239 6.97386 10.5 7.25 10.5H8.75C9.02614 10.5 9.25 10.7239 9.25 11 9.25 11.2761 9.02614 11.5 8.75 11.5H7.25C6.97386 11.5 6.75 11.2761 6.75 11zM7.25 12.75C6.97386 12.75 6.75 12.9739 6.75 13.25 6.75 13.5261 6.97386 13.75 7.25 13.75H8.75C9.02614 13.75 9.25 13.5261 9.25 13.25 9.25 12.9739 9.02614 12.75 8.75 12.75H7.25zM6.75 16C6.75 15.7239 6.97386 15.5 7.25 15.5H14.75C15.0261 15.5 15.25 15.7239 15.25 16 15.25 16.2761 15.0261 16.5 14.75 16.5H7.25C6.97386 16.5 6.75 16.2761 6.75 16zM7.25 18C6.97386 18 6.75 18.2239 6.75 18.5 6.75 18.7761 6.97386 19 7.25 19H12.05C12.3261 19 12.55 18.7761 12.55 18.5 12.55 18.2239 12.3261 18 12.05 18H7.25z"
          fill={color}
        />
        <path
          d="M22.8259 17.6109L19.4426 14.704C19.1776 14.4484 18.8098 14.4483 18.5493 14.6198C18.2963 14.7864 18.1581 15.097 18.218 15.4215L18.4146 16.4868C17.2364 16.5741 16.1782 16.9355 15.3359 17.7093C14.3574 18.6082 13.7429 19.9968 13.5038 21.9389C13.4737 22.1833 13.626 22.4133 13.8629 22.4808C14.0997 22.5484 14.3505 22.4334 14.4538 22.2099C14.8825 21.2832 15.4241 20.7346 16.1206 20.4023C16.718 20.1172 17.4623 19.9753 18.4135 19.9359L18.2126 21.0764C18.1551 21.4026 18.297 21.7133 18.5537 21.8772C18.8181 22.0461 19.1868 22.0387 19.4477 21.7783L22.8325 18.7657C22.844 18.7554 22.855 18.7446 22.8656 18.7333C23.1419 18.4372 23.1552 17.9488 22.8597 17.6428C22.8489 17.6316 22.8376 17.621 22.8259 17.6109ZM19.5031 16.8746L19.3276 15.9236L21.9704 18.1942L19.3202 20.5531L19.5038 19.5109C19.5551 19.2198 19.3069 18.9241 19.0114 18.9241C17.716 18.9241 16.6087 19.0614 15.6899 19.4998C15.457 19.6109 15.2392 19.7399 15.0355 19.8879C15.2978 19.2675 15.6298 18.7972 16.0124 18.4458C16.7506 17.7676 17.7498 17.4654 19.0114 17.4654C19.1599 17.4654 19.3007 17.3994 19.3957 17.2852C19.4907 17.1711 19.53 17.0207 19.5031 16.8746Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ArticleShareIcon;
