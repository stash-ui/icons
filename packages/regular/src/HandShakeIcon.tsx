import * as React from 'react';
import { IconProps } from './types';

export const HandShakeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49514 8.75742C7.59309 8.65947 7.72083 8.51588 7.84952 8.37125C7.93053 8.28019 8.01192 8.18872 8.08647 8.10795C8.30573 7.87042 8.54481 7.63324 8.808 7.43584C9.32678 7.04676 9.88346 6.84722 10.5441 7.06745C10.8651 7.17445 11.2121 7.00096 11.3191 6.67997C11.4261 6.35897 11.2526 6.012 10.9316 5.90501C9.75431 5.51257 8.77935 5.92568 8.07281 6.45559C7.72334 6.71769 7.42634 7.01658 7.1861 7.27684C7.06656 7.40635 6.97163 7.51372 6.89004 7.606C6.78977 7.71941 6.70959 7.8101 6.6287 7.891C6.45063 8.06906 6.26709 8.18749 6.09336 8.26212C5.8124 7.92564 5.38976 7.71156 4.91713 7.71156H3.69181C2.8459 7.71156 2.16016 8.39731 2.16016 9.24321V15.3698C2.16016 16.2157 2.8459 16.9015 3.69181 16.9015H4.91713C5.65813 16.9015 6.27623 16.3753 6.41814 15.6761H6.47252C6.65863 15.6761 6.83466 15.7607 6.95092 15.9061L7.98547 17.1993C8.77703 18.1887 10.1937 18.4087 11.248 17.7058C11.3383 17.6456 11.454 17.6384 11.551 17.6869L12.2903 18.0566C13.2727 18.5478 14.4616 18.0586 14.8151 17.0208L14.9773 17.0613C15.6144 17.2206 16.2795 17.0815 16.7693 16.7241C17.2719 16.3573 17.606 15.7402 17.477 15.0085C17.4732 14.9868 17.4691 14.965 17.4648 14.9433C17.3378 14.3087 16.9918 13.7386 16.5932 13.2581C16.1913 12.7736 15.7068 12.3454 15.2508 11.9938C14.7928 11.6407 14.3502 11.3547 14.0228 11.1573C13.9418 11.1084 13.8675 11.0648 13.8015 11.0267L14.2328 10.5954C14.472 10.3562 14.472 9.96824 14.2328 9.72898C13.9935 9.48972 13.6056 9.48972 13.3663 9.72898L11.2974 11.7979C10.7814 12.3139 10.1475 12.4389 9.74802 12.1955C9.53312 12.0645 9.38746 11.9222 9.27523 11.7547C9.15695 11.5781 9.12985 11.3588 9.21217 11.0906C9.2973 10.8132 9.49235 10.5219 9.74966 10.2932L11.8418 8.43354C12.9746 7.42655 14.6736 7.39945 15.838 8.36978L17.0833 9.40754C17.1934 9.49929 17.3322 9.54954 17.4755 9.54954H17.8715V15.3698C17.8715 16.2157 18.5573 16.9015 19.4032 16.9015H20.6285C21.4744 16.9015 22.1602 16.2157 22.1602 15.3698V9.24321C22.1602 8.39731 21.4744 7.71156 20.6285 7.71156H19.4032C18.9021 7.71156 18.4572 7.9522 18.1778 8.32422H17.6973L16.6224 7.42847C14.9923 6.07 12.6137 6.10794 11.0277 7.51772L8.9356 9.37738C8.53878 9.73011 8.20208 10.2055 8.04077 10.7311C7.87664 11.2659 7.8884 11.8861 8.25725 12.4367C8.47556 12.7625 8.75526 13.0254 9.11044 13.2419C10.1984 13.9048 11.4482 13.38 12.1638 12.6644L12.9218 11.9064C12.9084 11.9326 12.9085 11.9327 12.9084 11.9327L12.9136 11.9353L12.9371 11.9478C12.9585 11.9592 12.9911 11.9767 13.0333 12C13.1178 12.0467 13.2406 12.1165 13.39 12.2066C13.6897 12.3873 14.0914 12.6471 14.5026 12.9642C14.9158 13.2827 15.3254 13.649 15.6501 14.0404C15.9781 14.4358 16.1911 14.8229 16.2632 15.1836C16.2656 15.1957 16.268 15.2082 16.2703 15.2212C16.3066 15.4272 16.2286 15.6017 16.047 15.7343C15.8525 15.8762 15.5612 15.9442 15.2745 15.8726L15.1005 15.8291C14.486 15.6755 13.8569 16.0208 13.6566 16.6217C13.5438 16.9601 13.1574 17.1202 12.8383 16.9606L12.099 16.591C11.6087 16.3458 11.0245 16.3822 10.5684 16.6863C10.0429 17.0366 9.3368 16.927 8.94229 16.4338L7.90774 15.1406C7.55894 14.7046 7.03087 14.4508 6.47252 14.4508H6.44878V9.43895C6.81164 9.30443 7.1717 9.08087 7.49514 8.75742Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default HandShakeIcon;
