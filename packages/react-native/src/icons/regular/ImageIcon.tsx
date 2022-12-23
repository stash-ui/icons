import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ImageIcon = (
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
          d="M7.5 9C7.5 7.61929 8.61929 6.5 10 6.5C11.3807 6.5 12.5 7.61929 12.5 9C12.5 10.3807 11.3807 11.5 10 11.5C8.61929 11.5 7.5 10.3807 7.5 9ZM10 7.5C9.17157 7.5 8.5 8.17157 8.5 9C8.5 9.82843 9.17157 10.5 10 10.5C10.8284 10.5 11.5 9.82843 11.5 9C11.5 8.17157 10.8284 7.5 10 7.5Z"
          fill={color}
        />
        <Path
          d="M13.6226 3.5H10.3774C9.27642 3.5 8.41948 3.5 7.73209 3.55616C7.03416 3.61318 6.4671 3.73058 5.95704 3.99047C5.11031 4.4219 4.4219 5.11031 3.99047 5.95704C3.73058 6.4671 3.61318 7.03416 3.55616 7.73209C3.5 8.41948 3.5 9.27641 3.5 10.3774V13.6226C3.5 14.5689 3.5 15.3348 3.53565 15.9678C3.53812 16.0332 3.54313 16.0991 3.54836 16.1678L3.55074 16.1992C3.58579 16.6654 3.64604 17.0735 3.7549 17.4447C3.81645 17.6546 3.89355 17.8527 3.99047 18.043C4.4219 18.8897 5.11031 19.5781 5.95704 20.0095C6.4671 20.2694 7.03416 20.3868 7.73209 20.4438C8.41946 20.5 9.27639 20.5 10.3773 20.5H13.6227C14.7236 20.5 15.5805 20.5 16.2679 20.4438C16.9658 20.3868 17.5329 20.2694 18.043 20.0095C18.8897 19.5781 19.5781 18.8897 20.0095 18.043C20.5063 17.0679 20.5027 15.8903 20.4994 14.8016C20.499 14.6868 20.4987 14.5724 20.4989 14.4599C20.5 14.1975 20.5 13.9189 20.5 13.6227V10.3773C20.5 9.27642 20.5 8.41946 20.4438 7.73209C20.3868 7.03416 20.2694 6.4671 20.0095 5.95704C19.5781 5.11031 18.8897 4.4219 18.043 3.99047C17.5329 3.73058 16.9658 3.61318 16.2679 3.55616C15.5805 3.5 14.7236 3.5 13.6226 3.5ZM4.55284 16.1865L4.54736 16.1163C4.50587 15.4876 5.1498 14.8664 5.62559 14.4074C5.7019 14.3338 5.7739 14.2643 5.83804 14.1997C6.09019 13.9456 6.26071 13.8314 6.41357 13.7756C6.7461 13.654 7.11092 13.654 7.44345 13.7756C7.59631 13.8314 7.76683 13.9456 8.01898 14.1997C8.2743 14.457 8.57486 14.8169 9.00271 15.3304C9.50967 15.9387 10.4325 15.9725 10.9825 15.4028L13.9861 12.2919C14.0734 12.2015 14.1639 12.1002 14.2579 11.995C14.6029 11.6088 14.9955 11.1692 15.455 11.0164C15.7624 10.9141 16.0946 10.9141 16.402 11.0164C17.1753 11.2736 17.9009 12.1445 18.5325 12.9025C18.7656 13.1824 18.986 13.4468 19.1912 13.6594C19.443 13.9202 19.5003 14.07 19.499 14.4224C19.4957 15.2913 19.4792 15.9291 19.424 16.4269C19.3674 16.9321 19.2714 17.2889 19.1185 17.589C18.783 18.2475 18.2475 18.783 17.589 19.1185C17.2434 19.2946 16.8226 19.3952 16.1865 19.4472C15.5446 19.4996 14.7284 19.5 13.6 19.5H10.4C9.27164 19.5 8.45545 19.4996 7.81352 19.4472C7.17744 19.3952 6.75662 19.2946 6.41103 19.1185C5.75247 18.783 5.21703 18.2475 4.88148 17.589C4.85947 17.5458 4.83864 17.5014 4.81893 17.4556C4.681 17.1348 4.59831 16.7431 4.55284 16.1865ZM19.5 12.5399L18.5752 11.5816C18.1865 11.1791 17.8734 10.8548 17.5987 10.6137C17.3162 10.3658 17.0408 10.175 16.7177 10.0675C16.2054 9.89707 15.6516 9.89707 15.1393 10.0675C14.8162 10.175 14.5408 10.3658 14.2583 10.6137C13.9837 10.8548 13.6705 11.1791 13.2819 11.5816L10.2631 14.7082C10.1264 14.8498 9.89696 14.8414 9.77093 14.6902L9.75591 14.6722C9.34655 14.1809 9.01841 13.7871 8.72881 13.4953C8.4325 13.1967 8.13927 12.9652 7.78675 12.8363C7.23252 12.6338 6.6245 12.6338 6.07027 12.8363C5.71775 12.9652 5.42452 13.1967 5.12821 13.4953C4.93928 13.6857 4.73395 13.9195 4.50037 14.1954C4.50001 14.007 4.5 13.8089 4.5 13.6V10.4C4.5 9.27164 4.50039 8.45545 4.55284 7.81352C4.60481 7.17744 4.70539 6.75662 4.88148 6.41103C5.21703 5.75247 5.75247 5.21703 6.41103 4.88148C6.75662 4.70539 7.17744 4.60481 7.81352 4.55284C8.45545 4.50039 9.27164 4.5 10.4 4.5H13.6C14.7284 4.5 15.5446 4.50039 16.1865 4.55284C16.8226 4.60481 17.2434 4.70539 17.589 4.88148C18.2475 5.21703 18.783 5.75247 19.1185 6.41103C19.2946 6.75662 19.3952 7.17744 19.4472 7.81352C19.4996 8.45545 19.5 9.27164 19.5 10.4V12.5399Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ImageIcon;