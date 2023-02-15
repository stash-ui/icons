import * as React from 'react';
import { IconProps } from './types';

export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 21.2368C17.1014 21.2368 21.2369 17.1014 21.2369 12C21.2369 6.89863 17.1014 2.76315 12 2.76315C6.89866 2.76315 2.76318 6.89863 2.76318 12C2.76318 17.1014 6.89866 21.2368 12 21.2368ZM14.9897 4.26604C15.3493 4.65329 15.6748 5.1039 15.9609 5.60054C16.4827 6.50628 16.8915 7.59106 17.1553 8.79145C17.5699 8.89544 17.9598 9.01183 18.3208 9.13937C18.9893 9.37552 19.5761 9.65581 20.0413 9.97845C19.3839 7.35548 17.4769 5.22815 14.9897 4.26604ZM20.161 13.4618C19.6785 13.8209 19.048 14.13 18.3208 14.3869C17.989 14.5042 17.6328 14.612 17.2554 14.7094C17.0012 16.1087 16.5541 17.3697 15.9609 18.3994C15.6748 18.8961 15.3493 19.3467 14.9897 19.734C17.6515 18.7043 19.6489 16.34 20.161 13.4618ZM9.01038 19.734C8.65074 19.3467 8.32528 18.8961 8.03916 18.3994C7.44597 17.3697 6.99885 16.1087 6.74461 14.7094C6.36727 14.612 6.01109 14.5042 5.67926 14.3869C4.95204 14.13 4.32154 13.8209 3.83904 13.4618C4.35113 16.34 6.34851 18.7043 9.01038 19.734ZM3.9588 9.97845C4.424 9.65581 5.01076 9.37552 5.67926 9.13937C6.04029 9.01183 6.43014 8.89544 6.84472 8.79145C7.10861 7.59106 7.51737 6.50628 8.03916 5.60054C8.32527 5.1039 8.65072 4.65328 9.01034 4.26603C6.52315 5.22815 4.61611 7.35548 3.9588 9.97845ZM15.14 6.07344C15.5485 6.78246 15.8863 7.62699 16.1286 8.5689C15.0199 8.3635 13.7813 8.23919 12.4737 8.21491V3.80408C13.4522 3.99527 14.3925 4.77591 15.14 6.07344ZM16.3441 9.57697C15.2074 9.33872 13.8901 9.18976 12.4737 9.16244V14.3639C13.9215 14.3359 15.2657 14.1809 16.4193 13.9334C16.5029 13.3143 16.5474 12.6671 16.5474 12C16.5474 11.1548 16.4759 10.3415 16.3441 9.57697ZM11.5263 3.80408V8.21491C10.2187 8.23919 8.98018 8.3635 7.8715 8.5689C8.11373 7.62699 8.4516 6.78246 8.86005 6.07344C9.60755 4.77591 10.5479 3.99527 11.5263 3.80408ZM11.5263 9.16244C10.1099 9.18976 8.79263 9.33872 7.65597 9.57697C7.52411 10.3415 7.45266 11.1548 7.45266 12C7.45266 12.6671 7.49717 13.3143 7.58077 13.9334C8.73438 14.1809 10.0786 14.3359 11.5263 14.3639V9.16244ZM5.99481 10.0326C6.20463 9.95852 6.42614 9.88815 6.65836 9.8219C6.55813 10.5214 6.50529 11.251 6.50529 12C6.50529 12.5752 6.53646 13.139 6.59633 13.6865C6.38662 13.6255 6.18587 13.5612 5.99481 13.4937C5.23548 13.2254 4.65465 12.917 4.27282 12.5981C3.88835 12.277 3.75792 11.9926 3.75792 11.7632C3.75792 11.5337 3.88835 11.2493 4.27282 10.9282C4.65465 10.6093 5.23548 10.3009 5.99481 10.0326ZM8.86005 17.9265C8.38118 17.0953 7.99932 16.0777 7.75487 14.9354C8.89305 15.1539 10.1727 15.2863 11.5263 15.3114V20.1959C10.5479 20.0047 9.60755 19.2241 8.86005 17.9265ZM12.4737 20.1959V15.3114C13.8274 15.2863 15.107 15.1539 16.2452 14.9354C16.0007 16.0777 15.6189 17.0953 15.14 17.9265C14.3925 19.2241 13.4522 20.0047 12.4737 20.1959ZM17.4948 12C17.4948 12.5752 17.4636 13.139 17.4037 13.6865C17.6134 13.6255 17.8142 13.5612 18.0052 13.4937C18.7646 13.2254 19.3454 12.917 19.7272 12.5981C20.1117 12.277 20.2421 11.9926 20.2421 11.7632C20.2421 11.5337 20.1117 11.2494 19.7272 10.9282C19.3454 10.6093 18.7646 10.3009 18.0052 10.0326C17.7954 9.95852 17.5739 9.88815 17.3417 9.82191C17.4419 10.5214 17.4948 11.251 17.4948 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default GlobeIcon;
