import * as React from 'react';
import { IconProps } from './types';

export const FileExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          opacity=".5"
          d="M3 10.25L5.25 12.5M3 10.25L5.25 8M3 10.25L7.1 10.25C9.34021 10.25 10.4603 10.25 11.316 10.686C12.0686 11.0695 12.6805 11.6814 13.064 12.434C13.5 13.2897 13.5 14.4098 13.5 16.65V17"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity=".5"
          d="M19.8204 8.49999H16.5C15.9477 8.49999 15.5 8.05227 15.5 7.49999V4.17963C15.873 4.34939 16.1516 4.65155 16.4373 4.93724L19.0627 7.56273C19.3484 7.84842 19.6506 8.12696 19.8204 8.49999Z"
          fill={color}
        />
        <path
          d="M19.8204 8.49999H16.5C15.9477 8.49999 15.5 8.05227 15.5 7.49999V4.17963C15.873 4.34939 16.1516 4.65156 16.4373 4.93726L19.0627 7.56274C19.3484 7.84844 19.6506 8.12696 19.8204 8.49999Z"
          fill={color}
        />
        <path
          d="M16.4373 4.93726L15.9069 5.46759L16.4373 4.93726ZM19.0627 7.56274L19.5931 7.03241L19.0627 7.56274ZM7.25 10C7.25 10.4142 7.58579 10.75 8 10.75C8.41421 10.75 8.75 10.4142 8.75 10H7.25ZM8.75 14C8.75 13.5858 8.41421 13.25 8 13.25C7.58579 13.25 7.25 13.5858 7.25 14H8.75ZM19.7053 8.28343L20.3448 7.89156L20.3448 7.89156L19.7053 8.28343ZM15.7166 4.29472L16.1084 3.65524V3.65524L15.7166 4.29472ZM19.8204 8.49999V9.24999C20.0754 9.24999 20.313 9.12036 20.451 8.90588C20.5891 8.69141 20.6086 8.42148 20.503 8.18933L19.8204 8.49999ZM15.5 4.17963L15.8107 3.49699C15.5785 3.39134 15.3086 3.41092 15.0941 3.54895C14.8796 3.68699 14.75 3.92457 14.75 4.17963H15.5ZM16.8 19.25H11.2V20.75H16.8V19.25ZM11.2 4.75H14.1745V3.25H11.2V4.75ZM19.25 9.82548V16.8H20.75V9.82548H19.25ZM15.9069 5.46759L18.5324 8.09307L19.5931 7.03241L16.9676 4.40693L15.9069 5.46759ZM8.75 10V7.2H7.25V10H8.75ZM8.75 16.8V14H7.25V16.8H8.75ZM18.5324 8.09307C18.9036 8.46422 18.9993 8.56676 19.0658 8.6753L20.3448 7.89156C20.1639 7.59643 19.9137 7.35307 19.5931 7.03241L18.5324 8.09307ZM16.9676 4.40693C16.6469 4.08627 16.4036 3.83609 16.1084 3.65524L15.3247 4.9342C15.4332 5.00071 15.5358 5.09644 15.9069 5.46759L16.9676 4.40693ZM14.1745 4.75C14.7523 4.75 15.0523 4.7673 15.3247 4.9342L16.1084 3.65524C15.4214 3.23425 14.6906 3.25 14.1745 3.25V4.75ZM20.75 9.82548C20.75 9.30936 20.7658 8.57855 20.3448 7.89156L19.0658 8.6753C19.2327 8.94766 19.25 9.24765 19.25 9.82548H20.75ZM19.8204 7.74999H16.5V9.24999H19.8204V7.74999ZM16.25 7.49999V4.17963H14.75V7.49999H16.25ZM16.5 7.74999C16.3619 7.74999 16.25 7.63806 16.25 7.49999H14.75C14.75 8.46648 15.5335 9.24999 16.5 9.24999V7.74999ZM15.1893 4.86226C15.4097 4.96254 15.581 5.14171 15.9069 5.46759L16.9676 4.40693C16.7221 4.16142 16.3364 3.73624 15.8107 3.49699L15.1893 4.86226ZM18.5324 8.09307C18.8583 8.41895 19.0374 8.5903 19.1377 8.81064L20.503 8.18933C20.2637 7.66361 19.8386 7.27792 19.5931 7.03241L18.5324 8.09307ZM11.2 19.25C10.071 19.25 9.5339 19.0628 9.24798 18.787C8.96844 18.5173 8.75 17.9872 8.75 16.8H7.25C7.25 18.0841 7.46794 19.154 8.20659 19.8665C8.93885 20.5729 10.0017 20.75 11.2 20.75V19.25ZM19.25 16.8C19.25 17.929 19.0628 18.4661 18.787 18.752C18.5173 19.0316 17.9872 19.25 16.8 19.25V20.75C18.0841 20.75 19.154 20.5321 19.8665 19.7934C20.5729 19.0612 20.75 17.9983 20.75 16.8H19.25ZM8.75 7.2C8.75 6.07104 8.93723 5.5339 9.21304 5.24798C9.48269 4.96844 10.0128 4.75 11.2 4.75V3.25C9.91587 3.25 8.84597 3.46794 8.13345 4.20659C7.4271 4.93885 7.25 6.00171 7.25 7.2H8.75Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default FileExportIcon;
