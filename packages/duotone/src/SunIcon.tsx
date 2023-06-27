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
          opacity=".5"
          d="M7.45453 3.46427C7.56897 2.73271 8.4111 2.37492 9.01712 2.80038L11.3536 4.44079C11.7039 4.6867 12.1718 4.68246 12.5176 4.43025L14.824 2.7478C15.4222 2.31142 16.2707 2.65391 16.3983 3.38328L16.8905 6.19537C16.9643 6.61693 17.2982 6.9448 17.721 7.01094L20.5416 7.45215C21.2731 7.56659 21.6309 8.40872 21.2054 9.01474L19.565 11.3512C19.3191 11.7015 19.3234 12.1694 19.5756 12.5152L21.258 14.8216C21.6944 15.4198 21.3519 16.2683 20.6226 16.3959L17.8105 16.8882C17.3889 16.9619 17.061 17.2958 16.9949 17.7186L16.5537 20.5392C16.4392 21.2707 15.5971 21.6285 14.9911 21.2031L12.6546 19.5627C12.3043 19.3168 11.8364 19.321 11.4907 19.5732L9.18425 21.2557C8.58604 21.692 7.73756 21.3495 7.60989 20.6202L7.11767 17.8081C7.04389 17.3865 6.71002 17.0586 6.2872 16.9925L3.46665 16.5513C2.73509 16.4369 2.3773 15.5947 2.80276 14.9887L4.44317 12.6522C4.68908 12.3019 4.68484 11.834 4.43262 11.4883L2.75018 9.18187C2.3138 8.58366 2.65629 7.73518 3.38566 7.60751L6.19775 7.1153C6.61931 7.04151 6.94718 6.70764 7.01332 6.28482L7.45453 3.46427ZM11.9998 17C14.7613 17 16.9998 14.7614 16.9998 12C16.9998 9.23858 14.7613 7 11.9998 7C9.23842 7 6.99985 9.23858 6.99985 12C6.99985 14.7614 9.23842 17 11.9998 17Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SunIcon;
