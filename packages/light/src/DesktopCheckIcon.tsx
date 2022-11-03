import * as React from 'react';
import { IconProps } from './types';

export const DesktopCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.25 5.5C22.25 3.29086 20.4591 1.5 18.25 1.5C16.0409 1.5 14.25 3.29086 14.25 5.5C14.25 7.70914 16.0409 9.5 18.25 9.5C20.4591 9.5 22.25 7.70914 22.25 5.5ZM20.1036 4.14645C20.2988 4.34171 20.2988 4.65829 20.1036 4.85355L18.1036 6.85355C17.9083 7.04882 17.5917 7.04882 17.3964 6.85355L16.3964 5.85355C16.2012 5.65829 16.2012 5.34171 16.3964 5.14645C16.5917 4.95118 16.9083 4.95118 17.1036 5.14645L17.75 5.79289L19.3964 4.14645C19.5917 3.95118 19.9083 3.95118 20.1036 4.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.4286 4.5H12.333C12.2784 4.82521 12.25 5.15929 12.25 5.5H5.45C4.8817 5.5 4.48554 5.50039 4.17712 5.52559C3.87454 5.55031 3.70069 5.5964 3.56901 5.66349C3.28677 5.8073 3.0573 6.03677 2.91349 6.31901C2.85059 6.44246 2.80615 6.60297 2.78047 6.87187C2.77876 6.8898 2.77713 6.90821 2.77559 6.92712C2.75196 7.21626 2.75015 7.58252 2.75001 8.09544L2.75006 14H17.7499L17.75 11.4795C17.9148 11.4931 18.0816 11.5 18.25 11.5C18.4184 11.5 18.5851 11.4931 18.75 11.4795L18.75 14.5C18.75 14.5205 18.7488 14.5408 18.7464 14.5607C18.7427 14.781 18.7355 14.978 18.7211 15.1543C18.6913 15.5187 18.6284 15.8388 18.4775 16.135C18.2378 16.6054 17.8554 16.9878 17.385 17.2275C17.0888 17.3784 16.7687 17.4413 16.4043 17.4711C16.0504 17.5 15.6133 17.5 15.0715 17.5H11.6646C11.4587 18.0826 10.9031 18.5 10.25 18.5C9.59689 18.5 9.04127 18.0826 8.83535 17.5H5.42853C4.88673 17.5 4.44959 17.5 4.09569 17.4711C3.73126 17.4413 3.41117 17.3784 3.11502 17.2275C2.64462 16.9878 2.26217 16.6054 2.02248 16.135C1.87159 15.8388 1.80868 15.5187 1.77891 15.1543C1.7645 14.978 1.75727 14.781 1.75365 14.5607C1.75124 14.5408 1.75 14.5205 1.75 14.5V8.1786C1.75 7.6367 1.74999 7.19963 1.77891 6.84569C1.80868 6.48126 1.87159 6.16117 2.02248 5.86502C2.26217 5.39462 2.64462 5.01217 3.11502 4.77248C3.41117 4.62159 3.73126 4.55868 4.09569 4.52891C4.44963 4.49999 4.8867 4.5 5.4286 4.5ZM15.05 16.5H5.45C4.8817 16.5 4.48554 16.4996 4.17712 16.4744C3.87454 16.4497 3.70069 16.4036 3.56901 16.3365C3.28677 16.1927 3.0573 15.9632 2.91349 15.681C2.8464 15.5493 2.80031 15.3755 2.77559 15.0729C2.77365 15.0491 2.77185 15.0248 2.77019 15H17.7298L17.7275 15.0334L17.7244 15.0729C17.6997 15.3755 17.6536 15.5493 17.5865 15.681C17.4427 15.9632 17.2132 16.1927 16.931 16.3365C16.7993 16.4036 16.6255 16.4497 16.3229 16.4744C16.0145 16.4996 15.6183 16.5 15.05 16.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.25 18.5C8.52614 18.5 8.75 18.7239 8.75 19V19.2842C8.75 20.2282 8.10756 21.051 7.19178 21.2799L6.79662 21.3787C6.76922 21.3856 6.75 21.4102 6.75 21.4384C6.75 21.4724 6.77756 21.5 6.81155 21.5H13.6884C13.7224 21.5 13.75 21.4724 13.75 21.4384C13.75 21.4102 13.7308 21.3856 13.7034 21.3787L13.3082 21.2799C12.3924 21.051 11.75 20.2282 11.75 19.2842V19C11.75 18.7239 11.9739 18.5 12.25 18.5C12.5261 18.5 12.75 18.7239 12.75 19V19.2842C12.75 19.7693 13.0801 20.1921 13.5508 20.3098L13.9459 20.4086C14.4185 20.5267 14.75 20.9513 14.75 21.4384C14.75 22.0247 14.2747 22.5 13.6884 22.5H6.81155C6.22527 22.5 5.75 22.0247 5.75 21.4384C5.75 20.9513 6.08152 20.5267 6.55409 20.4086L6.94925 20.3098C7.41985 20.1921 7.75 19.7693 7.75 19.2842V19C7.75 18.7239 7.97386 18.5 8.25 18.5Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DesktopCheckIcon;
