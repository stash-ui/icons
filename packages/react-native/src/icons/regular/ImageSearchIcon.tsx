import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ImageSearchIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M9.37737 3.5H12.6226C13.7236 3.5 14.5805 3.5 15.2679 3.55616C15.9658 3.61318 16.5329 3.73058 17.043 3.99047C17.8897 4.4219 18.5781 5.11031 19.0095 5.95704C19.2694 6.4671 19.3868 7.03416 19.4438 7.73209C19.5 8.41948 19.5 9.27641 19.5 10.3774V10.4C19.5 10.6761 19.2761 10.9 19 10.9C18.7239 10.9 18.5 10.6761 18.5 10.4C18.5 9.27164 18.4996 8.45545 18.4472 7.81352C18.3952 7.17744 18.2946 6.75662 18.1185 6.41103C17.783 5.75247 17.2475 5.21703 16.589 4.88148C16.2434 4.70539 15.8226 4.60481 15.1865 4.55284C14.5446 4.50039 13.7284 4.5 12.6 4.5H9.4C8.27164 4.5 7.45545 4.50039 6.81352 4.55284C6.17744 4.60481 5.75662 4.70539 5.41103 4.88148C4.75247 5.21703 4.21703 5.75247 3.88148 6.41103C3.70539 6.75662 3.60481 7.17744 3.55284 7.81352C3.50039 8.45545 3.5 9.27164 3.5 10.4V13.601C3.5 13.8094 3.50001 14.0073 3.50036 14.1954C3.73393 13.9195 3.93925 13.6857 4.12818 13.4953C4.42449 13.1967 4.71771 12.9652 5.07024 12.8364C5.62447 12.6338 6.23249 12.6338 6.78672 12.8364C7.13924 12.9652 7.43247 13.1967 7.72878 13.4953C8.01838 13.7872 8.34652 14.1809 8.75589 14.6722L8.77089 14.6902C8.89693 14.8414 9.12634 14.8498 9.26309 14.7082L12.2819 11.5816C12.6705 11.1791 12.9836 10.8548 13.2583 10.6138C13.5408 10.3659 13.8161 10.175 14.1393 10.0675C14.6516 9.89708 15.2054 9.89708 15.7177 10.0675C16.1289 10.2044 16.4689 10.4792 16.8467 10.8428C17.0456 11.0342 17.0517 11.3508 16.8602 11.5497C16.6687 11.7487 16.3522 11.7548 16.1532 11.5633C15.7935 11.2171 15.5887 11.0785 15.402 11.0164C15.0946 10.9141 14.7624 10.9141 14.455 11.0164C14.3119 11.064 14.1534 11.1586 13.9179 11.3654C13.678 11.5759 13.3934 11.87 12.9861 12.2919L9.98249 15.4028C9.43244 15.9725 8.50964 15.9387 8.00267 15.3304C7.57483 14.817 7.27427 14.457 7.01894 14.1997C6.7668 13.9456 6.59628 13.8314 6.44342 13.7756C6.11088 13.654 5.74607 13.654 5.41353 13.7756C5.26068 13.8314 5.09016 13.9456 4.83801 14.1997C4.58268 14.457 4.28212 14.817 3.85428 15.3304L3.79201 15.4051C3.63305 15.5959 3.60523 15.6339 3.58509 15.6741C3.56461 15.7151 3.54544 15.775 3.53833 15.8202C3.53476 15.8429 3.53267 15.869 3.53479 15.925C3.55432 16.2651 3.58441 16.549 3.62858 16.7937C3.6335 16.821 3.63861 16.8479 3.64389 16.8742C3.64785 16.894 3.65192 16.9135 3.65609 16.9327C3.68526 17.0675 3.7195 17.1899 3.75952 17.3034C3.79519 17.4046 3.83559 17.4991 3.88141 17.589C4.21697 18.2476 4.7524 18.783 5.41097 19.1186C5.75656 19.2946 6.17737 19.3952 6.81346 19.4472C7.45538 19.4996 8.27158 19.5 9.39993 19.5H12.9999C13.2761 19.5 13.4999 19.7239 13.4999 20C13.4999 20.2762 13.2761 20.5 12.9999 20.5H9.37729C8.27634 20.5 7.41941 20.5 6.73202 20.4439C6.03409 20.3869 5.46703 20.2694 4.95697 20.0096C4.11025 19.5781 3.42183 18.8897 2.9904 18.043C2.92369 17.9121 2.86609 17.7769 2.8164 17.6359C2.8025 17.5965 2.78923 17.5566 2.77657 17.5163C2.65394 17.1262 2.588 16.6952 2.5507 16.1993L2.55021 16.1927C2.54426 16.1136 2.5387 16.0397 2.53593 15.9736C2.5 15.3409 2.5 14.5708 2.5 13.6156V10.3774C2.5 9.27641 2.5 8.41948 2.55616 7.73209C2.61318 7.03416 2.73058 6.4671 2.99047 5.95704C3.4219 5.11031 4.11031 4.4219 4.95704 3.99047C5.4671 3.73058 6.03416 3.61318 6.73209 3.55616C7.41948 3.5 8.27641 3.5 9.37737 3.5ZM9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5ZM6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9ZM13.5 16.4706C13.5 14.83 14.83 13.5 16.4706 13.5C18.1112 13.5 19.4412 14.83 19.4412 16.4706C19.4412 17.1104 19.2389 17.7029 18.8949 18.1878L20.3536 19.6464C20.5488 19.8417 20.5488 20.1583 20.3536 20.3536C20.1583 20.5488 19.8417 20.5488 19.6464 20.3536L18.1878 18.8949C17.7029 19.2389 17.1104 19.4412 16.4706 19.4412C14.83 19.4412 13.5 18.1112 13.5 16.4706ZM14.5 16.4706C14.5 17.5589 15.3823 18.4412 16.4706 18.4412C17.5589 18.4412 18.4412 17.5589 18.4412 16.4706C18.4412 15.3823 17.5589 14.5 16.4706 14.5C15.3823 14.5 14.5 15.3823 14.5 16.4706Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ImageSearchIcon;
