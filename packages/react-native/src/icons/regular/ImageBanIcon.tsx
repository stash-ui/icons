import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ImageBanIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M12.6226 3.5H9.37737C8.27642 3.5 7.41948 3.5 6.73209 3.55616C6.03416 3.61318 5.4671 3.73058 4.95704 3.99047C4.11031 4.4219 3.4219 5.11031 2.99047 5.95704C2.73058 6.4671 2.61318 7.03416 2.55616 7.73209C2.5 8.41948 2.5 9.27642 2.5 10.3774V13.6226C2.5 14.5723 2.5 15.3405 2.53604 15.9748C2.53853 16.0363 2.5432 16.0984 2.5481 16.1628C2.55065 16.1983 2.55333 16.2333 2.55616 16.2679C2.61318 16.9658 2.73058 17.5329 2.99047 18.043C3.4219 18.8897 4.11031 19.5781 4.95704 20.0095C5.0208 20.042 5.08545 20.0723 5.15113 20.1005C5.42801 20.2193 5.72329 20.3015 6.04776 20.3589C6.26212 20.3968 6.48922 20.424 6.73218 20.4439C7.41954 20.5 8.27648 20.5 9.37737 20.5H13.0001C13.2762 20.5 13.5001 20.2762 13.5001 20C13.5001 19.7239 13.2762 19.5 13 19.5H9.4C8.27164 19.5 7.45545 19.4996 6.81352 19.4472C6.41597 19.4147 6.10251 19.3632 5.83894 19.2862C5.73534 19.2559 5.63944 19.2217 5.54918 19.1831C5.5017 19.1628 5.45579 19.1413 5.41112 19.1186C4.75255 18.783 4.21712 18.2476 3.88156 17.589C3.69969 17.2321 3.59851 16.7952 3.54804 16.1243L3.54365 16.0647C3.54086 16.0246 3.53825 15.9839 3.53581 15.9425C3.53241 15.8743 3.53402 15.8486 3.53849 15.8202C3.54559 15.775 3.56476 15.7151 3.58524 15.6741C3.60539 15.6339 3.6332 15.5959 3.79217 15.4051L3.85443 15.3304C4.28228 14.817 4.58284 14.457 4.83817 14.1997C5.09031 13.9456 5.26083 13.8314 5.41369 13.7756C5.74623 13.654 6.11104 13.654 6.44357 13.7756C6.59643 13.8314 6.76695 13.9456 7.0191 14.1997C7.27442 14.457 7.57498 14.817 8.00283 15.3304C8.50979 15.9387 9.4326 15.9725 9.98265 15.4028L12.9863 12.2919C13.3936 11.87 13.6782 11.5759 13.918 11.3654C14.1536 11.1586 14.3121 11.064 14.4551 11.0164C14.7625 10.9141 15.0948 10.9141 15.4022 11.0164C15.5889 11.0785 15.7936 11.2171 16.1534 11.5633C16.3524 11.7548 16.6689 11.7487 16.8604 11.5497C17.0518 11.3508 17.0458 11.0342 16.8468 10.8428C16.469 10.4792 16.1291 10.2044 15.7178 10.0675C15.2055 9.89708 14.6518 9.89708 14.1394 10.0675C13.8163 10.175 13.5409 10.3659 13.2584 10.6138C12.9838 10.8548 12.6707 11.1791 12.282 11.5816L9.26325 14.7082C9.1265 14.8498 8.89708 14.8414 8.77105 14.6902L8.75602 14.6722C8.34665 14.1809 8.01853 13.7872 7.72893 13.4953C7.43262 13.1967 7.1394 12.9652 6.78687 12.8364C6.23264 12.6338 5.62462 12.6338 5.07039 12.8364C4.71787 12.9652 4.42464 13.1967 4.12833 13.4953C3.93937 13.6857 3.734 13.9196 3.50037 14.1955C3.50001 14.0071 3.5 13.8089 3.5 13.6V10.4C3.5 9.27164 3.50039 8.45545 3.55284 7.81352C3.60481 7.17744 3.70539 6.75662 3.88148 6.41103C4.21703 5.75247 4.75247 5.21703 5.41103 4.88148C5.75662 4.70539 6.17744 4.60481 6.81352 4.55284C7.45545 4.50039 8.27164 4.5 9.4 4.5H12.6C13.7284 4.5 14.5446 4.50039 15.1865 4.55284C15.8226 4.60481 16.2434 4.70539 16.589 4.88148C17.2475 5.21703 17.783 5.75247 18.1185 6.41103C18.2946 6.75662 18.3952 7.17744 18.4472 7.81352C18.4996 8.45545 18.5 9.27164 18.5 10.4C18.5 10.6761 18.7239 10.9 19 10.9C19.2761 10.9 19.5 10.6761 19.5 10.4V10.3773C19.5 9.27641 19.5 8.41945 19.4438 7.73209C19.3868 7.03416 19.2694 6.4671 19.0095 5.95704C18.5781 5.11031 17.8897 4.4219 17.043 3.99047C16.5329 3.73058 15.9658 3.61318 15.2679 3.55616C14.5805 3.5 13.7236 3.5 12.6226 3.5Z"
          fill={color}
        />
        <Path
          d="M6.5 9C6.5 7.61929 7.61929 6.5 9 6.5 10.3807 6.5 11.5 7.61929 11.5 9 11.5 10.3807 10.3807 11.5 9 11.5 7.61929 11.5 6.5 10.3807 6.5 9zM9 7.5C8.17157 7.5 7.5 8.17157 7.5 9 7.5 9.82843 8.17157 10.5 9 10.5 9.82843 10.5 10.5 9.82843 10.5 9 10.5 8.17157 9.82843 7.5 9 7.5zM18.5 12.5C16.2909 12.5 14.5 14.2909 14.5 16.5 14.5 18.7091 16.2909 20.5 18.5 20.5 20.7091 20.5 22.5 18.7091 22.5 16.5 22.5 14.2909 20.7091 12.5 18.5 12.5zM15.5 16.5C15.5 15.8521 15.7054 15.2521 16.0546 14.7617L20.2383 18.9454C19.7479 19.2946 19.1479 19.5 18.5 19.5 16.8431 19.5 15.5 18.1569 15.5 16.5zM20.9454 18.2383L16.7617 14.0546C17.2521 13.7054 17.8521 13.5 18.5 13.5 20.1569 13.5 21.5 14.8431 21.5 16.5 21.5 17.1479 21.2946 17.7479 20.9454 18.2383z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ImageBanIcon;
