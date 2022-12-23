import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MegaphoneIcon = (
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
          d="M16.4092 6.96408C15.7999 6.7992 15.2623 6.92494 14.5034 7.10244L7.40544 8.75866L6.08372 8.95979C5.99163 8.9738 5.92439 8.98657 5.78506 9.03978C5.72267 9.06361 5.6397 9.10865 5.59377 9.13418C5.54784 9.15971 5.46578 9.2064 5.41261 9.24681C5.37478 9.27556 5.35954 9.28661 5.35549 9.2895C5.35549 9.2895 5.34843 9.29426 5.34168 9.29914C5.33354 9.30502 5.31998 9.31517 5.30423 9.32899C5.2875 9.34368 5.27436 9.3572 5.26487 9.36757L5.25586 9.37769L5.2533 9.38066C4.91123 9.78092 4.5 10.5678 4.5 12C4.5 13.4322 4.91187 14.2199 5.25394 14.6201L5.25586 14.6224L5.26487 14.6325C5.27436 14.6428 5.28751 14.6564 5.30423 14.6711C5.31998 14.6849 5.33354 14.695 5.34168 14.7009C5.34844 14.7058 5.35549 14.7105 5.35549 14.7105C5.35955 14.7134 5.3748 14.7245 5.41261 14.7532C5.46578 14.7936 5.54784 14.8403 5.59377 14.8659C5.6397 14.8914 5.72267 14.9364 5.78506 14.9603C5.92439 15.0135 5.99163 15.0262 6.08372 15.0403L7.40544 15.2414L8.43787 15.4823C8.17257 17.0293 8.79352 18.7217 9.91303 19.7117C10.2805 20.0367 10.8005 19.9535 11.0897 19.6401C11.4478 19.252 11.3593 18.6949 11.0543 18.3799C10.5507 17.8599 10.0375 16.9259 10.1829 15.8895L14.5034 16.8976C15.2623 17.0751 15.7999 17.2008 16.4092 17.036C16.6597 16.9682 16.9217 16.8322 17.1447 16.6819C17.3677 16.5315 17.5919 16.3396 17.7487 16.1328C18.1295 15.6303 18.2004 15.176 18.2996 14.5395L18.3078 14.4867C18.3351 14.3122 18.3605 14.1305 18.3833 13.942L19.3593 13.7759C19.6738 13.7223 19.9436 13.5778 20.1037 13.3049C20.2427 13.0679 20.25 12.8073 20.25 12.6512V11.3488C20.25 11.1928 20.2427 10.9321 20.1037 10.6951C19.9436 10.4222 19.6738 10.2777 19.3593 10.2242L18.3833 10.0581C18.3605 9.86957 18.3351 9.68785 18.3078 9.5133L18.2996 9.46059C18.2004 8.82403 18.1295 8.36976 17.7487 7.86725C17.5919 7.66043 17.3677 7.46856 17.1447 7.31819C16.9217 7.16782 16.6597 7.03186 16.4092 6.96408ZM14.6446 8.09638C15.5216 7.89174 15.8076 7.83724 16.148 7.92936C16.259 7.95939 16.4198 8.03548 16.5856 8.14731C16.7515 8.25915 16.8823 8.37964 16.9517 8.47126C17.169 8.75796 17.2112 8.97245 17.3198 9.66771C17.4248 10.3394 17.5 11.1258 17.5 12C17.5 12.8743 17.4248 13.6606 17.3198 14.3323C17.2112 15.0276 17.169 15.2421 16.9517 15.5288C16.8823 15.6204 16.7515 15.7409 16.5856 15.8527C16.4198 15.9646 16.259 16.0407 16.148 16.0707C15.8076 16.1628 15.5216 16.1083 14.6446 15.9037L7.79892 14.3063C7.63442 13.7229 7.5 12.9545 7.5 12C7.5 11.0456 7.63441 10.2772 7.7989 9.69371L14.6446 8.09638ZM6.5 12C6.5 12.8271 6.5919 13.536 6.72289 14.126L6.23416 14.0516C6.20216 14.0468 6.19784 14.0456 6.19784 14.0456C6.19784 14.0456 6.18507 14.0424 6.15075 14.0295L6.13767 14.0229C6.12172 14.0148 6.10125 14.0038 6.07961 13.9918C6.05798 13.9798 6.03788 13.9682 6.02255 13.9589L6.0098 13.9511L5.98007 13.9287C5.80516 13.7039 5.5 13.1517 5.5 12C5.5 10.8484 5.80515 10.2961 5.98007 10.0714L6.0098 10.049L6.02255 10.0411C6.03788 10.0319 6.05798 10.0202 6.07961 10.0082C6.10125 9.9962 6.12172 9.98526 6.13767 9.97712L6.15075 9.97059C6.18507 9.95769 6.19811 9.95435 6.19811 9.95435C6.19811 9.95435 6.20216 9.95328 6.23416 9.94841L6.72288 9.87404C6.59189 10.464 6.5 11.1729 6.5 12ZM18.4744 11.0879L19.1915 11.21C19.2143 11.2139 19.2312 11.218 19.2434 11.2217C19.2475 11.2494 19.25 11.289 19.25 11.3488V12.6512C19.25 12.7111 19.2475 12.7507 19.2434 12.7784C19.2312 12.782 19.2143 12.7862 19.1915 12.79L18.4744 12.9121C18.4908 12.6195 18.5 12.3151 18.5 12C18.5 11.685 18.4908 11.3806 18.4744 11.0879Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default MegaphoneIcon;
