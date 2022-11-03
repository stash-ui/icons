import * as React from 'react';
import { IconProps } from './types';

export const PaperplaneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.8442 10.5166C20.052 11.1161 20.052 12.8839 18.8442 13.4834L6.55244 19.5842C5.32429 20.1938 4.09416 19.0913 4.26706 17.8647L4.80686 14.0349C4.89399 13.4167 5.32078 12.8809 5.93527 12.6925C6.0955 12.6434 6.48552 12.5601 6.94735 12.4662C7.43156 12.3677 8.05025 12.2467 8.70897 12.1201C8.91504 12.0805 9.12523 12.0403 9.33668 12C9.12523 11.9597 8.91504 11.9195 8.70897 11.8799C8.05025 11.7533 7.43156 11.6323 6.94735 11.5338C6.48552 11.4399 6.0955 11.3566 5.93527 11.3075C5.32078 11.1191 4.89399 10.5833 4.80685 9.96505L4.26706 6.13535C4.09416 4.90866 5.3243 3.80621 6.55245 4.41579L18.8442 10.5166ZM18.25 12C18.25 11.9191 18.2136 11.8782 18.1773 11.8602L5.88557 5.75939C5.86416 5.74876 5.85348 5.74969 5.84832 5.75033C5.83998 5.75137 5.82478 5.75578 5.80681 5.7698C5.77178 5.79712 5.74139 5.84802 5.75238 5.92599L6.29217 9.7557C6.30279 9.83104 6.34903 9.86544 6.37492 9.87338C6.44768 9.89569 6.74758 9.96246 7.24633 10.0639C7.7227 10.1608 8.33524 10.2806 8.99213 10.4069C10.3054 10.6593 11.7879 10.9362 12.6956 11.1047C12.7016 11.1058 12.7077 11.107 12.7139 11.1081C12.819 11.1276 12.9304 11.1483 13.0174 11.1701C13.0628 11.1815 13.1355 11.2013 13.2115 11.2346C13.2642 11.2578 13.4537 11.3424 13.5837 11.5522C13.7538 11.8266 13.7538 12.1734 13.5837 12.4478C13.4537 12.6576 13.2642 12.7422 13.2115 12.7654C13.1355 12.7987 13.0628 12.8185 13.0174 12.8299C12.9304 12.8517 12.819 12.8724 12.7138 12.8919L12.6956 12.8953C11.7879 13.0638 10.3054 13.3407 8.99213 13.5931C8.33524 13.7194 7.7227 13.8392 7.24633 13.9361C6.74758 14.0375 6.44768 14.1043 6.37492 14.1266C6.34903 14.1346 6.30279 14.169 6.29217 14.2443L5.75238 18.074C5.74139 18.152 5.77178 18.2029 5.80681 18.2302C5.82478 18.2442 5.83998 18.2486 5.84832 18.2497C5.85348 18.2503 5.86416 18.2512 5.88556 18.2406L18.1773 12.1398C18.2136 12.1218 18.25 12.0809 18.25 12Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PaperplaneIcon;
