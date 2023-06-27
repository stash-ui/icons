import * as React from 'react';
import { IconProps } from './types';

export const SunIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9998 12C15.9998 14.2091 14.209 16 11.9998 16C9.79071 16 7.99985 14.2091 7.99985 12C7.99985 9.79086 9.79071 8 11.9998 8C14.209 8 15.9998 9.79086 15.9998 12Z"
          fill={color}
        />
        <path
          d="M9.01712 2.80038C8.4111 2.37492 7.56897 2.73271 7.45453 3.46427L7.01332 6.28482C6.94718 6.70764 6.61931 7.04151 6.19775 7.1153L3.38566 7.60751C2.65629 7.73518 2.3138 8.58366 2.75018 9.18187L4.43262 11.4883C4.68484 11.834 4.68908 12.3019 4.44317 12.6522L2.80276 14.9887C2.3773 15.5947 2.73509 16.4369 3.46665 16.5513L6.2872 16.9925C6.71002 17.0586 7.04389 17.3865 7.11767 17.8081L7.60989 20.6202C7.73756 21.3495 8.58604 21.692 9.18425 21.2557L11.4907 19.5732C11.8364 19.321 12.3043 19.3168 12.6546 19.5627L14.9911 21.2031C15.5971 21.6285 16.4392 21.2707 16.5537 20.5392L16.9949 17.7186C17.061 17.2958 17.3889 16.9619 17.8105 16.8882L20.6226 16.3959C21.3519 16.2683 21.6944 15.4198 21.258 14.8216L19.5756 12.5152C19.3234 12.1694 19.3191 11.7015 19.565 11.3512L21.2054 9.01474C21.6309 8.40872 21.2731 7.56659 20.5416 7.45215L17.721 7.01094C17.2982 6.9448 16.9643 6.61693 16.8905 6.19537L16.3983 3.38328C16.2707 2.65391 15.4222 2.31142 14.824 2.7478L12.5176 4.43025C12.1718 4.68246 11.7039 4.6867 11.3536 4.44079L9.01712 2.80038ZM16.9998 12C16.9998 14.7614 14.7613 17 11.9998 17C9.23842 17 6.99985 14.7614 6.99985 12C6.99985 9.23858 9.23842 7 11.9998 7C14.7613 7 16.9998 9.23858 16.9998 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SunIcon;
