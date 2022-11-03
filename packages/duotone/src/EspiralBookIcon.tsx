import * as React from 'react';
import { IconProps } from './types';

export const EspiralBookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g opacity=".5" fill={color}>
          <path d="M9.90131 7.7703C9.84248 7.79558 9.79558 7.84248 9.7703 7.90131 9.76844 7.90866 9.76234 7.93707 9.75778 8.0039 9.75041 8.1119 9.75 8.25677 9.75 8.5 9.75 8.74323 9.75041 8.8881 9.75778 8.9961 9.76234 9.06293 9.76844 9.09134 9.7703 9.09869 9.79558 9.15752 9.84248 9.20442 9.90131 9.2297 9.90867 9.23156 9.93707 9.23766 10.0039 9.24222 10.1119 9.24959 10.2568 9.25 10.5 9.25H14.5C14.7432 9.25 14.8881 9.24959 14.9961 9.24222 15.0629 9.23766 15.0913 9.23156 15.0987 9.2297 15.1575 9.20442 15.2044 9.15752 15.2297 9.09869 15.2316 9.09133 15.2377 9.06293 15.2422 8.9961 15.2496 8.8881 15.25 8.74323 15.25 8.5 15.25 8.25677 15.2496 8.1119 15.2422 8.0039 15.2377 7.93706 15.2316 7.90866 15.2297 7.90131 15.2044 7.84248 15.1575 7.79558 15.0987 7.7703 15.0913 7.76844 15.0629 7.76233 14.9961 7.75778 14.8881 7.75041 14.7432 7.75 14.5 7.75H10.5C10.2568 7.75 10.1119 7.75041 10.0039 7.75778 9.93707 7.76234 9.90866 7.76844 9.90131 7.7703zM6.85645 19.5003C6.95608 19.7652 7.18372 19.9871 7.43224 20.1138 7.5228 20.1599 7.66008 20.2018 7.9472 20.2252 8.24308 20.2494 8.6273 20.25 9.19973 20.25H15.7997C16.3722 20.25 16.7564 20.2494 17.0522 20.2252 17.3394 20.2018 17.4767 20.1599 17.5672 20.1138 17.8157 19.9871 18.0434 19.7652 18.143 19.5003 18.1143 19.513 18.0854 19.525 18.0564 19.5363 18.0142 19.5529 17.9717 19.568 17.9289 19.5819 17.9061 19.5893 17.8833 19.5963 17.8604 19.603 17.6402 19.6674 17.4118 19.7009 17.1744 19.7203 16.8329 19.7482 16.4198 19.7499 15.9294 19.75H9.07008C8.57967 19.7499 8.1665 19.7482 7.82506 19.7203 7.80131 19.7183 7.77766 19.7162 7.7541 19.714 7.43963 19.6841 7.14115 19.6262 6.85645 19.5003z" />
        </g>
        <path
          d="M9.16957 3.25H15.8304C16.3646 3.24999 16.8104 3.24998 17.1747 3.27974C17.5546 3.31078 17.9112 3.37789 18.2485 3.54973C18.7659 3.81339 19.1866 4.23408 19.4503 4.75153C19.6221 5.08879 19.6892 5.44545 19.7203 5.82533C19.75 6.18956 19.75 6.6354 19.75 7.16955V15.8305C19.75 15.8485 19.75 15.8665 19.75 15.8844V17.8304C19.75 18.3646 19.75 18.8104 19.7203 19.1747C19.6892 19.5545 19.6221 19.9112 19.4503 20.2485C19.1866 20.7659 18.7659 21.1866 18.2485 21.4503C17.9112 21.6221 17.5546 21.6892 17.1747 21.7202C16.8104 21.75 16.3646 21.75 15.8304 21.75H9.16957C9.06101 21.75 8.95044 21.7513 8.83857 21.7527C8.13488 21.7612 7.37989 21.7704 6.75153 21.4503C6.23408 21.1866 5.81338 20.7659 5.54973 20.2485C5.37789 19.9112 5.31078 19.5545 5.27974 19.1747C5.26308 18.9707 5.25575 18.7412 5.25252 18.4848C4.26472 18.3629 3.5 17.5208 3.5 16.5C3.5 15.9027 3.76188 15.3665 4.17709 15C3.76188 14.6335 3.5 14.0973 3.5 13.5C3.5 12.9027 3.76188 12.3665 4.17709 12C3.76188 11.6335 3.5 11.0973 3.5 10.5C3.5 9.90265 3.76188 9.36647 4.17709 9C3.76188 8.63353 3.5 8.09735 3.5 7.5C3.5 6.45736 4.29784 5.60106 5.31631 5.50832C5.35715 5.24515 5.42652 4.99335 5.54973 4.75153C5.81338 4.23408 6.23408 3.81339 6.75153 3.54973C7.08879 3.37789 7.44545 3.31078 7.82533 3.27974C8.18956 3.24998 8.63542 3.24999 9.16957 3.25ZM5.25 15.8894C5.25 15.8699 5.25 15.8502 5.25 15.8304V15.5315C4.81869 15.6425 4.5 16.034 4.5 16.5C4.5 16.966 4.81869 17.3575 5.25 17.4685L5.25 15.8894ZM6.77476 17.0525C6.79822 17.3396 6.8401 17.4769 6.88624 17.5675C6.88847 17.5718 6.89071 17.5762 6.89297 17.5805C6.94994 17.6891 7.02223 17.7882 7.10711 17.8748C7.32572 18.0925 7.61613 18.1982 7.94748 18.2252C8.24336 18.2494 8.62757 18.25 9.2 18.25H15.8C16.3724 18.25 16.7566 18.2494 17.0525 18.2252C17.3839 18.1982 17.6743 18.0926 17.8929 17.8748C17.9778 17.7882 18.0501 17.6891 18.107 17.5805C18.1093 17.5762 18.1115 17.5718 18.1138 17.5675C18.1253 17.5448 18.1366 17.5193 18.1473 17.4892C18.1797 17.3989 18.2076 17.2679 18.2252 17.0525C18.2283 17.0155 18.2309 16.9772 18.2332 16.9372C18.2496 16.6576 18.25 16.3009 18.25 15.8V7.2C18.25 6.62757 18.2494 6.24336 18.2252 5.94748C18.2018 5.66036 18.1599 5.52307 18.1138 5.43251C17.9939 5.19731 17.8027 5.00608 17.5675 4.88624C17.4769 4.8401 17.3396 4.79822 17.0525 4.77476C16.7566 4.75058 16.3724 4.75 15.8 4.75H9.2C8.62757 4.75 8.24336 4.75058 7.94748 4.77476C7.66036 4.79822 7.52307 4.8401 7.43251 4.88624C7.19731 5.00608 7.00608 5.19731 6.88624 5.43251C6.8401 5.52307 6.79822 5.66036 6.77476 5.94748L6.7739 5.95812C7.21741 6.32496 7.5 6.87948 7.5 7.5C7.5 7.77614 7.27614 8 7 8C6.90893 8 6.82354 7.97565 6.75 7.93311V8.93866C7.20723 9.30519 7.5 9.86841 7.5 10.5C7.5 10.7761 7.27614 11 7 11C6.90893 11 6.82354 10.9757 6.75 10.9331V11.9387C7.20723 12.3052 7.5 12.8684 7.5 13.5C7.5 13.7761 7.27614 14 7 14C6.90893 14 6.82354 13.9757 6.75 13.9331V14.9387C7.20723 15.3052 7.5 15.8684 7.5 16.5C7.5 16.7761 7.27614 17 7 17C6.91589 17 6.83663 16.9792 6.76707 16.9425C6.76932 16.9806 6.77187 17.0172 6.77476 17.0525ZM6.85672 19.5003C6.95635 19.7652 7.18399 19.9871 7.43251 20.1137C7.52307 20.1599 7.66036 20.2018 7.94748 20.2252C8.24336 20.2494 8.62757 20.25 9.2 20.25H15.8C16.3724 20.25 16.7566 20.2494 17.0525 20.2252C17.3396 20.2018 17.4769 20.1599 17.5675 20.1137C17.816 19.9871 18.0436 19.7652 18.1433 19.5003C18.1146 19.513 18.0857 19.525 18.0567 19.5363C18.0145 19.5529 17.972 19.568 17.9291 19.5819C17.9064 19.5893 17.8836 19.5963 17.8607 19.603C17.6405 19.6674 17.4121 19.7009 17.1747 19.7203C16.8332 19.7482 16.4201 19.7499 15.9297 19.75C15.897 19.75 15.8639 19.75 15.8305 19.75H9.16955C9.13617 19.75 9.10305 19.75 9.07035 19.75C8.57995 19.7499 8.16678 19.7482 7.82533 19.7203C7.80159 19.7183 7.77794 19.7162 7.75437 19.714C7.4399 19.6841 7.14143 19.6262 6.85672 19.5003ZM4.5 7.5C4.5 7.96596 4.81869 8.35749 5.25 8.4685V7.16954C5.25 6.94062 5.24999 6.72792 5.25233 6.53091C4.81984 6.64111 4.5 7.0332 4.5 7.5ZM4.5 10.5C4.5 10.966 4.81869 11.3575 5.25 11.4685V9.53151C4.81869 9.64252 4.5 10.034 4.5 10.5ZM4.5 13.5C4.5 13.966 4.81869 14.3575 5.25 14.4685V12.5315C4.81869 12.6425 4.5 13.034 4.5 13.5Z"
          fill={color}
        />
        <path
          d="M10.4782 6.25C10.4855 6.25 10.4927 6.25 10.5 6.25L14.5218 6.25C14.736 6.24999 14.9329 6.24997 15.0982 6.26125C15.2759 6.27338 15.4712 6.30099 15.6697 6.38321C16.0985 6.56083 16.4392 6.9015 16.6168 7.3303C16.699 7.52881 16.7266 7.72415 16.7387 7.90179C16.75 8.06712 16.75 8.26396 16.75 8.47824V8.52176C16.75 8.73604 16.75 8.93288 16.7387 9.09821C16.7266 9.27585 16.699 9.47119 16.6168 9.6697C16.4392 10.0985 16.0985 10.4392 15.6697 10.6168C15.4712 10.699 15.2759 10.7266 15.0982 10.7387C14.9329 10.75 14.736 10.75 14.5218 10.75H10.4782C10.264 10.75 10.0671 10.75 9.90179 10.7387C9.72415 10.7266 9.52881 10.699 9.3303 10.6168C8.9015 10.4392 8.56082 10.0985 8.38321 9.6697C8.30099 9.47119 8.27337 9.27585 8.26125 9.09821C8.24997 8.93288 8.24999 8.73603 8.25 8.52176C8.25 8.51452 8.25 8.50727 8.25 8.5C8.25 8.49273 8.25 8.48548 8.25 8.47824C8.24999 8.26397 8.24997 8.06712 8.26125 7.90179C8.27337 7.72415 8.30099 7.52881 8.38321 7.3303C8.56082 6.9015 8.9015 6.56083 9.3303 6.38321C9.52881 6.30099 9.72415 6.27338 9.90179 6.26125C10.0671 6.24997 10.264 6.24999 10.4782 6.25ZM9.90131 7.7703C9.84248 7.79558 9.79558 7.84248 9.7703 7.90131C9.76844 7.90866 9.76234 7.93707 9.75778 8.0039C9.75041 8.1119 9.75 8.25677 9.75 8.5C9.75 8.74323 9.75041 8.8881 9.75778 8.9961C9.76234 9.06293 9.76844 9.09134 9.7703 9.09869C9.79558 9.15752 9.84248 9.20442 9.90131 9.2297C9.90867 9.23156 9.93707 9.23767 10.0039 9.24222C10.1119 9.24959 10.2568 9.25 10.5 9.25H14.5C14.7432 9.25 14.8881 9.24959 14.9961 9.24222C15.0629 9.23767 15.0913 9.23156 15.0987 9.2297C15.1575 9.20442 15.2044 9.15752 15.2297 9.09869C15.2316 9.09133 15.2377 9.06293 15.2422 8.9961C15.2496 8.8881 15.25 8.74323 15.25 8.5C15.25 8.25677 15.2496 8.1119 15.2422 8.0039C15.2377 7.93706 15.2316 7.90866 15.2297 7.90131C15.2044 7.84248 15.1575 7.79558 15.0987 7.7703C15.0913 7.76844 15.0629 7.76233 14.9961 7.75778C14.8881 7.75041 14.7432 7.75 14.5 7.75H10.5C10.2568 7.75 10.1119 7.75041 10.0039 7.75778C9.93707 7.76234 9.90866 7.76844 9.90131 7.7703Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default EspiralBookIcon;
