import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MailboxEmptyIcon = (
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
          d="M18.0328 20.7493C18.0219 20.7498 18.011 20.75 18 20.75H6.76788C5.95505 20.75 5.29944 20.75 4.76853 20.7066C4.2219 20.662 3.74175 20.5676 3.29754 20.3413C2.59193 19.9817 2.01825 19.4081 1.65873 18.7025C1.43239 18.2582 1.33803 17.7781 1.29336 17.2315C1.24999 16.7006 1.24999 16.0449 1.25 15.2321V12C1.25 9.4089 3.26611 7.25 5.82353 7.25H18C18.0519 7.25 18.1026 7.25528 18.1516 7.26532C18.2662 7.25518 18.3823 7.25 18.5 7.25C20.9382 7.25 22.75 9.47385 22.75 12V16.0234C22.75 16.6248 22.75 17.1095 22.7265 17.5038C22.7023 17.9083 22.6515 18.2674 22.5275 18.6094C22.2306 19.4286 21.6494 20.1109 20.8805 20.4749C20.5501 20.6313 20.2053 20.6935 19.835 20.7224C19.4803 20.75 19.048 20.75 18.529 20.75H18.4711C18.3175 20.75 18.1715 20.75 18.0328 20.7493ZM2.75 12V15.2C2.75 16.0525 2.75058 16.6467 2.78838 17.1093C2.82547 17.5632 2.8946 17.824 2.99524 18.0215C3.21095 18.4448 3.55516 18.789 3.97852 19.0048C4.17604 19.1054 4.43681 19.1745 4.89068 19.2116C5.35331 19.2494 5.94755 19.25 6.8 19.25H14.7797C14.6572 19.0493 14.5541 18.8345 14.4725 18.6094C14.3485 18.2674 14.2977 17.9083 14.2735 17.5038C14.25 17.1094 14.25 16.6248 14.25 16.0234V12C14.25 10.7715 14.6785 9.61451 15.3991 8.75H5.82353C4.1576 8.75 2.75 10.1728 2.75 12ZM15.75 12V16C15.75 16.6302 15.7503 17.07 15.7709 17.4144C15.7911 17.7537 15.8291 17.9502 15.8827 18.0983C16.0595 18.5859 16.3868 18.9418 16.7613 19.1191C16.8597 19.1657 17.0011 19.205 17.2816 19.2269C17.5711 19.2495 17.9447 19.25 18.5 19.25C19.0553 19.25 19.4289 19.2495 19.7184 19.2269C19.9989 19.205 20.1403 19.1657 20.2387 19.1191C20.6132 18.9418 20.9405 18.5859 21.1173 18.0983C21.1709 17.9502 21.2089 17.7537 21.2291 17.4144C21.2497 17.07 21.25 16.6302 21.25 16V12C21.25 10.1079 19.9278 8.75 18.5 8.75C17.0722 8.75 15.75 10.1079 15.75 12Z"
          fill={color}
        />
        <Path
          opacity=".5"
          d="M4.25009 14.4002C4.25012 14.3912 4.25016 14.3828 4.25016 14.375L4.25016 12.6C4.25016 12.5912 4.25016 12.5825 4.25016 12.5738C4.25014 12.3163 4.25012 12.0798 4.26627 11.8821C4.28369 11.669 4.32355 11.4358 4.4409 11.2055C4.60867 10.8762 4.87639 10.6085 5.20567 10.4407C5.43598 10.3234 5.66915 10.2835 5.88228 10.2661C6.07997 10.25 6.31646 10.25 6.57394 10.25L12.0002 10.25C12.4144 10.25 12.7502 10.5858 12.7502 11C12.7502 11.4142 12.4144 11.75 12.0002 11.75L8.25016 11.75L8.25016 13.125C8.25016 13.1462 8.25017 13.1671 8.25019 13.1879C8.25042 13.4734 8.25061 13.7193 8.20692 13.9389C8.02938 14.8315 7.33166 15.5292 6.43911 15.7068C6.21947 15.7505 5.97359 15.7503 5.68807 15.75C5.66731 15.75 5.64634 15.75 5.62516 15.75C5.61739 15.75 5.60896 15.75 5.59996 15.7501C5.51604 15.7504 5.38184 15.7509 5.25629 15.726C4.76043 15.6273 4.37281 15.2397 4.27418 14.7439C4.2492 14.6183 4.24975 14.4841 4.25009 14.4002ZM6.75016 11.75L6.60016 11.75C6.30776 11.75 6.13356 11.7506 6.00443 11.7611C5.92562 11.7676 5.8925 11.7761 5.88362 11.7788C5.83898 11.8023 5.8025 11.8388 5.77898 11.8835C5.77623 11.8923 5.76773 11.9255 5.76129 12.0043C5.75074 12.1334 5.75016 12.3076 5.75016 12.6L5.75016 14.2498C6.02889 14.249 6.09874 14.2451 6.14647 14.2356C6.44399 14.1764 6.67657 13.9438 6.73575 13.6463C6.74652 13.5921 6.75016 13.5094 6.75016 13.125L6.75016 11.75ZM5.77988 11.8809C5.77989 11.8809 5.77972 11.8814 5.77932 11.8824L5.77988 11.8809ZM5.88103 11.7797C5.881 11.7797 5.88148 11.7795 5.88255 11.7792L5.88103 11.7797Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default MailboxEmptyIcon;
