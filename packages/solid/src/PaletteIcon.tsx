import * as React from 'react';
import { IconProps } from './types';

export const PaletteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5H12.0277L12.0552 20.4969C13.2388 20.3654 14.0219 19.982 14.3753 19.2823C14.709 18.6216 14.5593 17.851 14.3737 17.2192C14.2909 16.9373 14.1898 16.6496 14.0945 16.3787L14.0469 16.2432C13.9359 15.9259 13.838 15.6348 13.773 15.3658C13.6358 14.7981 13.6918 14.5165 13.8549 14.3522C14.039 14.1667 14.4068 14.0814 15.079 14.1382C15.3951 14.1649 15.7382 14.2186 16.1053 14.2797L16.2676 14.3068C16.5803 14.3592 16.9076 14.4141 17.2262 14.4539C17.9498 14.5444 18.7709 14.5807 19.4193 14.239C20.1388 13.8598 20.5 13.1091 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM8.07799 12.9963C8.12508 13.5466 7.71718 14.0309 7.1669 14.078C6.61663 14.1251 6.13237 13.7172 6.08527 13.1669C6.03818 12.6166 6.44608 12.1324 6.99636 12.0853C7.54663 12.0382 8.03089 12.4461 8.07799 12.9963ZM8.1669 10.078C8.71718 10.0309 9.12508 9.54662 9.07799 8.99635C9.03089 8.44607 8.54663 8.03817 7.99636 8.08526C7.44608 8.13235 7.03818 8.61662 7.08527 9.16689C7.13237 9.71716 7.61663 10.1251 8.1669 10.078ZM13.078 6.99635C13.1251 7.54662 12.7172 8.03088 12.1669 8.07798C11.6166 8.12507 11.1324 7.71716 11.0853 7.16689C11.0382 6.61662 11.4461 6.13235 11.9964 6.08526C12.5466 6.03817 13.0309 6.44607 13.078 6.99635ZM16.0262 9.61447C16.5765 9.56738 16.9844 9.08312 16.9373 8.53284C16.8902 7.98257 16.406 7.57466 15.8557 7.62176C15.3054 7.66885 14.8975 8.15312 14.9446 8.70339C14.9917 9.25366 15.476 9.66157 16.0262 9.61447Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PaletteIcon;
