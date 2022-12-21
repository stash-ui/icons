import * as React from 'react';
import { IconProps } from './types';

export const ImagePlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 13.5C19.2761 13.5 19.5 13.7239 19.5 14V16.5H22C22.2761 16.5 22.5 16.7239 22.5 17C22.5 17.2761 22.2761 17.5 22 17.5H19.5V20C19.5 20.2761 19.2761 20.5 19 20.5C18.7239 20.5 18.5 20.2761 18.5 20V17.5H16C15.7239 17.5 15.5 17.2761 15.5 17C15.5 16.7239 15.7239 16.5 16 16.5H18.5V14C18.5 13.7239 18.7239 13.5 19 13.5Z"
          fill={color}
        />
        <path
          d="M9.37737 3.5H12.6226C13.7236 3.5 14.5805 3.5 15.2679 3.55616C15.9658 3.61318 16.5329 3.73058 17.043 3.99047C17.8897 4.4219 18.5781 5.11031 19.0095 5.95704C19.2694 6.4671 19.3868 7.03416 19.4438 7.73209C19.5 8.41947 19.5 9.27638 19.5 10.3773V10.4C19.5 10.6761 19.2761 10.9 19 10.9C18.7239 10.9 18.5 10.6761 18.5 10.4C18.5 9.27164 18.4996 8.45545 18.4472 7.81352C18.3952 7.17744 18.2946 6.75662 18.1185 6.41103C17.783 5.75247 17.2475 5.21703 16.589 4.88148C16.2434 4.70539 15.8226 4.60481 15.1865 4.55284C14.5446 4.50039 13.7284 4.5 12.6 4.5H9.4C8.27164 4.5 7.45545 4.50039 6.81352 4.55284C6.17744 4.60481 5.75662 4.70539 5.41103 4.88148C4.75247 5.21703 4.21703 5.75247 3.88148 6.41103C3.70539 6.75662 3.60481 7.17744 3.55284 7.81352C3.50039 8.45545 3.5 9.27164 3.5 10.4V13.6C3.5 13.8089 3.50001 14.0071 3.50037 14.1955C3.734 13.9196 3.93937 13.6857 4.12833 13.4953C4.42464 13.1967 4.71787 12.9652 5.07039 12.8364C5.62462 12.6338 6.23264 12.6338 6.78687 12.8364C7.1394 12.9652 7.43262 13.1967 7.72893 13.4953C8.01853 13.7872 8.34665 14.1809 8.75602 14.6722L8.77105 14.6902C8.89708 14.8414 9.1265 14.8498 9.26325 14.7082L12.282 11.5816C12.6707 11.1791 12.9838 10.8548 13.2584 10.6138C13.5409 10.3659 13.8163 10.175 14.1394 10.0675C14.6518 9.89708 15.2055 9.89708 15.7178 10.0675C16.1291 10.2044 16.469 10.4792 16.8468 10.8428C17.0458 11.0342 17.0518 11.3508 16.8604 11.5497C16.6689 11.7487 16.3524 11.7548 16.1534 11.5633C15.7936 11.2171 15.5889 11.0785 15.4022 11.0164C15.0948 10.9141 14.7625 10.9141 14.4551 11.0164C14.3121 11.064 14.1536 11.1586 13.918 11.3654C13.6782 11.5759 13.3936 11.87 12.9863 12.2919L9.98265 15.4028C9.4326 15.9725 8.50979 15.9387 8.00283 15.3304C7.57498 14.817 7.27442 14.457 7.0191 14.1997C6.76695 13.9456 6.59643 13.8314 6.44357 13.7756C6.11104 13.654 5.74623 13.654 5.41369 13.7756C5.26083 13.8314 5.09031 13.9456 4.83817 14.1997C4.58284 14.457 4.28228 14.817 3.85443 15.3304L3.79217 15.4051C3.6332 15.5959 3.60539 15.6339 3.58524 15.6741C3.56476 15.7151 3.54559 15.775 3.53849 15.8202C3.53402 15.8486 3.53241 15.8743 3.53581 15.9425C3.53825 15.9839 3.54086 16.0246 3.54365 16.0647L3.54804 16.1243C3.59851 16.7952 3.69969 17.2321 3.88156 17.589C4.21712 18.2476 4.75255 18.783 5.41112 19.1186C5.45579 19.1413 5.5017 19.1628 5.54918 19.1831C5.63944 19.2217 5.73534 19.2559 5.83894 19.2862C6.10251 19.3632 6.41597 19.4147 6.81352 19.4472C7.45545 19.4996 8.27164 19.5 9.4 19.5H14C14.0293 19.5 14.058 19.5025 14.0859 19.5073C14.1237 19.5139 14.1602 19.5247 14.1946 19.5393C14.3741 19.6152 14.5001 19.7929 14.5001 20C14.5001 20.2762 14.2762 20.5 14.0001 20.5H9.37745C8.27652 20.5 7.41956 20.5 6.73218 20.4439C6.48922 20.424 6.26212 20.3968 6.04776 20.3589C5.72329 20.3015 5.42801 20.2193 5.15113 20.1005C5.08545 20.0723 5.0208 20.042 4.95704 20.0095C4.11031 19.5781 3.4219 18.8897 2.99047 18.043C2.73058 17.5329 2.61318 16.9658 2.55616 16.2679C2.55333 16.2333 2.55065 16.1983 2.5481 16.1628C2.5432 16.0984 2.53853 16.0363 2.53604 15.9748C2.5 15.3405 2.5 14.5723 2.5 13.6226V10.3774C2.5 9.27642 2.5 8.41948 2.55616 7.73209C2.61318 7.03416 2.73058 6.4671 2.99047 5.95704C3.4219 5.11031 4.11031 4.4219 4.95704 3.99047C5.4671 3.73058 6.03416 3.61318 6.73209 3.55616C7.41948 3.5 8.27642 3.5 9.37737 3.5Z"
          fill={color}
        />
        <path
          d="M9 6.5C7.61929 6.5 6.5 7.61929 6.5 9C6.5 10.3807 7.61929 11.5 9 11.5C10.3807 11.5 11.5 10.3807 11.5 9C11.5 7.61929 10.3807 6.5 9 6.5ZM7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ImagePlusIcon;
