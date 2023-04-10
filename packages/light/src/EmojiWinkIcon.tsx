import * as React from 'react';
import { IconProps } from './types';

export const EmojiWinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.75 10.75C16 9.92266 14.6159 10.2655 13.5 10.7719 13.5 10.1183 15.1055 9.28274 16.0902 9.55175 16.3832 9.63179 16.5394 9.92329 16.6131 10.2179L16.75 10.75zM8.95114 12C9.77957 12 10.4511 11.3284 10.4511 10.5 10.4511 9.67157 9.77957 9 8.95114 9 8.12271 9 7.45114 9.67157 7.45114 10.5 7.45114 11.3284 8.12271 12 8.95114 12z"
          fill={color}
        />
        <path
          d="M16.4233 11.0019C16.6797 11.2847 17.1594 11.0263 17.0643 10.6566C17.0512 10.6056 17.0384 10.5535 17.0253 10.5007C16.8927 9.96361 16.7424 9.35452 16.1402 9.19001C15.5232 9.02146 14.7764 9.20255 14.212 9.47909C13.9228 9.62079 13.6543 9.80025 13.4521 10.0026C13.26 10.1949 13.0761 10.4606 13.0761 10.7719C13.0761 11.0398 13.3622 11.2241 13.6061 11.1134C14.1461 10.8684 14.7256 10.6754 15.2428 10.6347C15.7573 10.5942 16.1552 10.7061 16.4233 11.0019Z"
          fill={color}
        />
        <path
          d="M16.7077 13.7159C16.9545 13.9286 17.0847 14.2767 16.9643 14.6436C16.6961 15.4613 16.2727 16.3817 15.4083 17.0905C14.5383 17.8038 13.2841 18.2527 11.4511 18.2527C10.5789 18.2527 9.96197 18.2412 9.53613 18.2003C8.99374 18.1481 8.34493 17.9689 8.31972 17.3224C8.31243 17.1355 8.34858 16.9519 8.38479 16.7679C8.41727 16.6029 8.44981 16.4377 8.4511 16.2695C8.37614 16.1018 8.22204 15.976 8.07531 15.8562C8.03216 15.8209 7.98963 15.7862 7.94996 15.7511C7.67786 15.5104 7.31765 15.1917 7.08028 14.8222C6.84613 14.4577 7.15922 14.0252 7.56807 14.0555C7.7049 14.0655 7.84174 14.0752 7.97862 14.0845C8.25466 14.1032 8.64132 14.1282 9.08354 14.1531C9.97039 14.2032 11.0715 14.2527 11.9512 14.2527C13.2213 14.2527 14.2642 13.9541 15.1228 13.7083C15.1804 13.6918 15.2389 13.6741 15.2981 13.6562C15.7723 13.5126 16.2899 13.3559 16.7077 13.7159ZM8.76294 15.1362C9.08642 15.4289 9.45115 15.7832 9.45116 16.2527C9.45118 16.5929 9.39251 16.8798 9.35471 17.0646C9.3472 17.1014 9.34049 17.1341 9.33526 17.1624C9.86766 17.2785 10.4404 17.2682 10.9946 17.2583C11.1486 17.2555 11.3013 17.2527 11.4511 17.2527C13.1181 17.2527 14.1277 16.8473 14.7742 16.3173C15.3719 15.8272 15.7121 15.188 15.9513 14.5159C15.8065 14.554 15.6451 14.6005 15.4683 14.6514C14.6058 14.8996 13.3792 15.2527 11.9512 15.2527C10.9499 15.2527 9.68951 15.1911 8.76294 15.1362Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default EmojiWinkIcon;