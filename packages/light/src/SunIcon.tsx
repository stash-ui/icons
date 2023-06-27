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
          d="M8.443 3.61882L10.7795 5.25922C11.48 5.75104 12.4159 5.74256 13.1074 5.23814L15.4138 3.55569L15.906 6.36779C16.0536 7.2109 16.7213 7.86664 17.567 7.99893L20.3875 8.44014L18.7471 10.7766C18.2553 11.4772 18.2638 12.413 18.7682 13.1045L20.4506 15.4109L17.6385 15.9031C16.7954 16.0507 16.1397 16.7184 16.0074 17.5641L15.5662 20.3846L13.2297 18.7442C12.5292 18.2524 11.5933 18.2609 10.9018 18.7653L8.59541 20.4478L8.10319 17.6357C7.95561 16.7925 7.28788 16.1368 6.44223 16.0045L3.62168 15.5633L5.26209 13.2268C5.75391 12.5263 5.74543 11.5904 5.24101 10.8989L3.55856 8.59254L6.37065 8.10032C7.21377 7.95274 7.86951 7.28501 8.0018 6.43937L8.443 3.61882ZM7.45502 3.46427C7.56945 2.73271 8.41159 2.37492 9.01761 2.80038L11.3541 4.44079C11.7044 4.6867 12.1723 4.68246 12.518 4.43025L14.8245 2.7478C15.4227 2.31142 16.2711 2.65391 16.3988 3.38328L16.891 6.19537C16.9648 6.61693 17.2987 6.9448 17.7215 7.01094L20.542 7.45215C21.2736 7.56659 21.6314 8.40872 21.2059 9.01474L19.5655 11.3512C19.3196 11.7015 19.3239 12.1694 19.5761 12.5152L21.2585 14.8216C21.6949 15.4198 21.3524 16.2683 20.623 16.3959L17.8109 16.8882C17.3894 16.9619 17.0615 17.2958 16.9954 17.7186L16.5542 20.5392C16.4397 21.2707 15.5976 21.6285 14.9916 21.2031L12.6551 19.5627C12.3048 19.3168 11.8369 19.321 11.4911 19.5732L9.18473 21.2557C8.58652 21.692 7.73805 21.3495 7.61038 20.6202L7.11816 17.8081C7.04438 17.3865 6.71051 17.0586 6.28769 16.9925L3.46714 16.5513C2.73558 16.4369 2.37778 15.5947 2.80325 14.9887L4.44365 12.6522C4.68956 12.3019 4.68533 11.834 4.43311 11.4883L2.75067 9.18187C2.31429 8.58366 2.65678 7.73518 3.38614 7.60751L6.19824 7.1153C6.6198 7.04151 6.94767 6.70764 7.01381 6.28482L7.45502 3.46427ZM16.0003 12C16.0003 14.2091 14.2095 16 12.0003 16C9.7912 16 8.00034 14.2091 8.00034 12C8.00034 9.79086 9.7912 8 12.0003 8C14.2095 8 16.0003 9.79086 16.0003 12ZM17.0003 12C17.0003 14.7614 14.7618 17 12.0003 17C9.23891 17 7.00034 14.7614 7.00034 12C7.00034 9.23858 9.23891 7 12.0003 7C14.7618 7 17.0003 9.23858 17.0003 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SunIcon;
