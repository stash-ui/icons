import * as React from 'react';
import { IconProps } from './types';

export const FootballIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.81519 14.7759C3.77209 15.1947 3.75 15.6198 3.75 16.05C3.75 16.7297 3.80506 17.396 3.91083 18.0448C4.08207 19.0954 4.90463 19.9179 5.95516 20.0892C6.60398 20.1949 7.27029 20.25 7.95 20.25C8.38023 20.25 8.8053 20.2279 9.22414 20.1848L3.81519 14.7759ZM4.13713 12.9765L11.0235 19.8629C15.347 18.7507 18.7507 15.347 19.8629 11.0235L12.9765 4.13713C8.65304 5.24933 5.24933 8.65304 4.13713 12.9765ZM14.7759 3.81519L20.1848 9.22414C20.2279 8.8053 20.25 8.38023 20.25 7.95C20.25 7.27029 20.1949 6.60398 20.0892 5.95516C19.9179 4.90462 19.0954 4.08207 18.0448 3.91082C17.396 3.80506 16.7297 3.75 16.05 3.75C15.6198 3.75 15.1947 3.77209 14.7759 3.81519ZM2.25 16.05C2.25 8.42847 8.42847 2.25 16.05 2.25C16.8109 2.25 17.5579 2.31165 18.2862 2.43036C19.9732 2.70536 21.2946 4.02684 21.5696 5.71384C21.6884 6.44213 21.75 7.18914 21.75 7.95C21.75 15.5715 15.5715 21.75 7.95 21.75C7.18914 21.75 6.44213 21.6884 5.71384 21.5696C4.02684 21.2946 2.70536 19.9732 2.43036 18.2862C2.31165 17.5579 2.25 16.8109 2.25 16.05ZM12.9 7.65C13.3142 7.65 13.65 7.98579 13.65 8.4V10.35H15.6C16.0142 10.35 16.35 10.6858 16.35 11.1C16.35 11.5142 16.0142 11.85 15.6 11.85H13.65V12.9C13.65 13.3142 13.3142 13.65 12.9 13.65H11.85V15.6C11.85 16.0142 11.5142 16.35 11.1 16.35C10.6858 16.35 10.35 16.0142 10.35 15.6V13.65H8.4C7.98579 13.65 7.65 13.3142 7.65 12.9C7.65 12.4858 7.98579 12.15 8.4 12.15H10.35V11.1C10.35 10.6858 10.6858 10.35 11.1 10.35H12.15V8.4C12.15 7.98579 12.4858 7.65 12.9 7.65ZM12.15 11.85H11.85V12.15H12.15V11.85Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <g opacity=".4" fill={color}>
          <path d="M7.95 21C15.1573 21 21 15.1573 21 7.95C21 7.22971 20.9416 6.52306 20.8294 5.8345C20.6063 4.46573 19.5343 3.39371 18.1655 3.17059C17.4769 3.05835 16.7703 3 16.05 3C8.84268 3 3 8.84268 3 16.05C3 16.7703 3.05835 17.4769 3.17059 18.1655C3.39371 19.5343 4.46573 20.6063 5.8345 20.8294C6.52306 20.9416 7.22971 21 7.95 21Z" />
          <path d="M12.9 12.9V11.1H11.1V12.9H12.9Z" />
        </g>
      </svg>
    );
  }
);

export default FootballIcon;
