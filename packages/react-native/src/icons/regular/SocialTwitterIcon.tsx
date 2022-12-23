import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SocialTwitterIcon = (
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
          opacity=".5"
          d="M13.3385 6.72839C14.4183 5.71343 16.1162 5.76567 17.1308 6.84447C17.2715 6.99405 17.4655 7.07772 17.6664 7.08059C17.588 7.25071 17.5736 7.44908 17.6375 7.63672C17.7115 7.85385 17.8773 8.01832 18.0806 8.0958C17.9251 8.24815 17.842 8.46237 17.8573 8.68322C17.8654 8.80045 17.8657 8.92189 17.8657 9.07497C17.8657 13.2693 14.6881 18.0492 8.9191 18.083C8.89831 18.0813 8.87738 18.0805 8.85636 18.0805C8.07904 18.0816 7.30901 17.9816 6.56478 17.7858C7.49324 17.5144 8.36815 17.0671 9.13937 16.4614C9.38878 16.2655 9.48804 15.9339 9.38725 15.6332C9.28647 15.3325 9.00744 15.1277 8.69036 15.1217C7.93903 15.1074 7.24832 14.7817 6.76238 14.2518C6.91564 14.2279 7.06779 14.1954 7.21811 14.1543C7.55332 14.0627 7.78172 13.7529 7.77002 13.4056C7.75832 13.0583 7.50958 12.7645 7.16897 12.6957C6.29339 12.5188 5.58998 11.9271 5.24697 11.1504C5.43049 11.1808 5.6164 11.199 5.8035 11.2046C6.13783 11.2146 6.43837 11.002 6.54024 10.6834C6.64212 10.3648 6.52071 10.0172 6.24262 9.83137C5.38576 9.25872 4.96009 8.27336 5.06563 7.30713C6.8762 9.04191 9.26175 10.0811 11.7952 10.2077C12.0302 10.2195 12.2571 10.1203 12.4081 9.93974C12.559 9.75923 12.6164 9.51835 12.5633 9.28914C12.3472 8.35796 12.6425 7.38254 13.3385 6.72839Z"
          fill={color}
        />
        <Path
          d="M20.4231 6.11256C20.6007 6.13819 20.7681 6.22727 20.8897 6.37166C21.1048 6.62692 21.1253 6.99358 20.94 7.27121C20.5046 7.92363 19.973 8.504 19.3649 8.99422L19.365 9.07494C19.365 13.9292 15.6654 19.5832 8.85673 19.5832C8.83461 19.5832 8.81272 19.5822 8.79109 19.5803C6.80677 19.5706 4.86583 18.9963 3.1947 17.9242C2.90041 17.7354 2.77562 17.3683 2.8939 17.0392C3.01217 16.7102 3.34212 16.5065 3.68926 16.5483C3.93029 16.5773 4.17313 16.5919 4.41731 16.5925C5.22842 16.5931 6.02591 16.4329 6.76575 16.127C5.83072 15.6262 5.09744 14.7762 4.75739 13.7196C4.69075 13.5126 4.71787 13.2893 4.8269 13.1062C4.01473 12.3378 3.51862 11.2524 3.51862 10.0692V10.0264C3.51862 9.76048 3.65939 9.5138 3.88862 9.37909C3.90368 9.37024 3.91897 9.36196 3.93446 9.35425C3.38195 8.15539 3.40706 6.71854 4.11508 5.49904C4.23883 5.2859 4.4594 5.14716 4.7051 5.12791C4.95081 5.10865 5.19029 5.21135 5.34573 5.40261C6.7668 7.15124 8.78527 8.29363 10.9934 8.62264C11.0093 7.50377 11.4743 6.42124 12.3104 5.63543C13.8842 4.15613 16.3011 4.13085 17.902 5.50964C18.4523 5.36503 18.9806 5.14406 19.4719 4.85285C19.7401 4.69387 20.0787 4.71741 20.3224 4.91196C20.566 5.10651 20.6638 5.43149 20.5682 5.72823C20.5259 5.85913 20.4775 5.98737 20.4231 6.11256ZM17.1301 6.84448C16.1155 5.76567 14.4176 5.71343 13.3378 6.72839C12.6418 7.38254 12.3465 8.35796 12.5626 9.28914C12.6157 9.51835 12.5583 9.75923 12.4073 9.93974C12.2564 10.1203 12.0295 10.2195 11.7945 10.2077C9.26105 10.0811 6.8755 9.04191 5.06493 7.30713C4.95939 8.27336 5.38506 9.25872 6.24191 9.83137C6.52001 10.0172 6.64142 10.3648 6.53954 10.6834C6.43766 11.002 6.13713 11.2146 5.8028 11.2046C5.6157 11.199 5.42979 11.1808 5.24626 11.1504C5.58928 11.9271 6.29269 12.5188 7.16827 12.6957C7.50888 12.7645 7.75762 13.0583 7.76932 13.4056C7.78102 13.7529 7.55262 14.0627 7.21741 14.1543C7.06709 14.1954 6.91494 14.2279 6.76168 14.2518C7.24762 14.7817 7.93833 15.1074 8.68966 15.1217C9.00674 15.1277 9.28577 15.3325 9.38655 15.6332C9.48733 15.9339 9.38808 16.2655 9.13866 16.4614C8.36744 17.0671 7.49253 17.5144 6.56408 17.7858C7.30831 17.9816 8.07834 18.0816 8.85566 18.0805C8.87668 18.0805 8.8976 18.0813 8.91839 18.083C14.6874 18.0492 17.865 13.2693 17.865 9.07497C17.865 8.92189 17.8647 8.80045 17.8566 8.68322C17.8413 8.46237 17.9244 8.24815 18.0799 8.0958C17.8766 8.01832 17.7108 7.85385 17.6368 7.63672C17.5729 7.44909 17.5873 7.25071 17.6657 7.08059C17.4648 7.07772 17.2708 6.99405 17.1301 6.84448Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default SocialTwitterIcon;
