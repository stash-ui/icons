import * as React from 'react';
import { IconProps } from './types';

export const CalendarNineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 6C8.72386 6 8.5 6.22386 8.5 6.5 8.5 6.77614 8.72386 7 9 7H15C15.2761 7 15.5 6.77614 15.5 6.5 15.5 6.22386 15.2761 6 15 6H9zM11.2216 17.2128L12.0801 15.9895C11.5584 16.0065 11.0271 15.8613 10.5667 15.5397 9.43551 14.7495 9.16003 13.1931 9.95262 12.0638 10.7447 10.9351 12.303 10.6614 13.4335 11.4511 14.5646 12.2413 14.8401 13.7977 14.0475 14.927L12.0401 17.7872C11.8815 18.0133 11.5696 18.0679 11.3436 17.9093 11.1176 17.7506 11.0629 17.4388 11.2216 17.2128zM10.7712 12.6382C10.2967 13.3142 10.461 14.246 11.1393 14.7199 11.8183 15.1942 12.754 15.029 13.229 14.3526 13.7034 13.6766 13.5391 12.7448 12.8608 12.2709 12.1818 11.7965 11.2461 11.9616 10.7712 12.6382z"
          fill={color}
        />
        <path
          d="M13.6226 3H10.3774C9.27642 3 8.41948 3 7.73209 3.05616C7.03416 3.11318 6.4671 3.23058 5.95704 3.49047C5.11031 3.9219 4.4219 4.61031 3.99047 5.45704C3.73058 5.9671 3.61318 6.53416 3.55616 7.23209C3.5 7.91948 3.5 8.77641 3.5 9.87737V14.1226C3.5 15.2236 3.5 16.0805 3.55616 16.7679C3.61318 17.4658 3.73058 18.0329 3.99047 18.543C4.4219 19.3897 5.11031 20.0781 5.95704 20.5095C6.4671 20.7694 7.03416 20.8868 7.73209 20.9438C8.41946 21 9.27637 21 10.3773 21H13.6226C14.7236 21 15.5805 21 16.2679 20.9438C16.9658 20.8868 17.5329 20.7694 18.043 20.5095C18.8897 20.0781 19.5781 19.3897 20.0095 18.543C20.2694 18.0329 20.3868 17.4658 20.4438 16.7679C20.5 16.0805 20.5 15.2236 20.5 14.1227V9.87736C20.5 8.77644 20.5 7.91946 20.4438 7.23209C20.3868 6.53416 20.2694 5.9671 20.0095 5.45704C19.5781 4.61031 18.8897 3.9219 18.043 3.49047C17.5329 3.23058 16.9658 3.11318 16.2679 3.05616C15.5805 3 14.7236 3 13.6226 3ZM6.41103 4.38148C6.75662 4.20539 7.17744 4.10481 7.81352 4.05284C8.45545 4.00039 9.27164 4 10.4 4H13.6C14.7284 4 15.5446 4.00039 16.1865 4.05284C16.8226 4.10481 17.2434 4.20539 17.589 4.38148C18.2475 4.71703 18.783 5.25247 19.1185 5.91103C19.2946 6.25662 19.3952 6.67744 19.4472 7.31352C19.4845 7.77069 19.4955 8.31625 19.4987 9H4.50133C4.50454 8.31625 4.51548 7.77069 4.55284 7.31352C4.60481 6.67744 4.70539 6.25662 4.88148 5.91103C5.21703 5.25247 5.75247 4.71703 6.41103 4.38148ZM4.5 10H19.5V14.1C19.5 15.2284 19.4996 16.0446 19.4472 16.6865C19.3952 17.3226 19.2946 17.7434 19.1185 18.089C18.783 18.7475 18.2475 19.283 17.589 19.6185C17.2434 19.7946 16.8226 19.8952 16.1865 19.9472C15.5446 19.9996 14.7284 20 13.6 20H10.4C9.27164 20 8.45545 19.9996 7.81352 19.9472C7.17744 19.8952 6.75662 19.7946 6.41103 19.6185C5.75247 19.283 5.21703 18.7475 4.88148 18.089C4.70539 17.7434 4.60481 17.3226 4.55284 16.6865C4.50039 16.0446 4.5 15.2284 4.5 14.1V10Z"
          fill={color}
        />
        <path
          d="M13.6336 2.75C14.7254 2.75 15.5907 2.74999 16.2883 2.80699C17.0017 2.86528 17.6053 2.98689 18.1565 3.26772C19.0502 3.72312 19.7769 4.44977 20.2323 5.34354C20.5131 5.8947 20.6347 6.49832 20.693 7.21173C20.75 7.90928 20.75 8.77462 20.75 9.86643V14.1336C20.75 15.2254 20.75 16.0907 20.693 16.7883C20.6347 17.5017 20.5131 18.1053 20.2323 18.6565C19.7769 19.5502 19.0502 20.2769 18.1565 20.7323C17.6053 21.0131 17.0017 21.1347 16.2883 21.193C15.5907 21.25 14.7254 21.25 13.6336 21.25H10.3664C9.27455 21.25 8.40928 21.25 7.71173 21.193C6.99832 21.1347 6.3947 21.0131 5.84354 20.7323C4.94978 20.2769 4.22312 19.5502 3.76772 18.6565C3.48689 18.1053 3.36528 17.5017 3.30699 16.7883C3.24999 16.0907 3.25 15.2254 3.25 14.1336V9.86644C3.25 8.7746 3.24999 7.9093 3.30699 7.21173C3.36528 6.49832 3.48689 5.8947 3.76772 5.34354C4.22312 4.44978 4.94978 3.72312 5.84354 3.26772C6.3947 2.98689 6.99832 2.86528 7.71173 2.80699C8.4093 2.74999 9.2746 2.75 10.3665 2.75H13.6336ZM7.83388 4.30201C7.21322 4.35272 6.82898 4.4491 6.52453 4.60423C5.913 4.91582 5.41582 5.413 5.10423 6.02453C4.9491 6.32898 4.85272 6.71322 4.80201 7.33388C4.7701 7.7244 4.7577 8.18401 4.75294 8.75H19.2471C19.2423 8.18401 19.2299 7.7244 19.198 7.33388C19.1473 6.71322 19.0509 6.32898 18.8958 6.02453C18.5842 5.413 18.087 4.91582 17.4755 4.60423C17.171 4.4491 16.7868 4.35272 16.1661 4.30201C15.5367 4.25058 14.7325 4.25 13.6 4.25H10.4C9.26748 4.25 8.46326 4.25058 7.83388 4.30201ZM19.4971 8.75C19.4923 8.18125 19.4798 7.71355 19.4472 7.31352C19.3952 6.67744 19.2946 6.25662 19.1185 5.91103C18.783 5.25247 18.2475 4.71703 17.589 4.38148C17.2434 4.20539 16.8226 4.10481 16.1865 4.05284C15.5446 4.00039 14.7284 4 13.6 4H10.4C9.27164 4 8.45545 4.00039 7.81352 4.05284C7.17744 4.10481 6.75662 4.20539 6.41103 4.38148C5.75247 4.71703 5.21703 5.25247 4.88148 5.91103C4.70539 6.25662 4.60481 6.67744 4.55284 7.31352C4.52015 7.71355 4.50769 8.18125 4.50293 8.75C4.50225 8.83124 4.50173 8.91454 4.50133 9H19.4987C19.4983 8.91454 19.4977 8.83124 19.4971 8.75ZM4.5 10H19.5V14.1C19.5 15.2284 19.4996 16.0446 19.4472 16.6865C19.3952 17.3226 19.2946 17.7434 19.1185 18.089C18.783 18.7475 18.2475 19.283 17.589 19.6185C17.2434 19.7946 16.8226 19.8952 16.1865 19.9472C15.5446 19.9996 14.7284 20 13.6 20H10.4C9.27164 20 8.45545 19.9996 7.81352 19.9472C7.17744 19.8952 6.75662 19.7946 6.41103 19.6185C5.75247 19.283 5.21703 18.7475 4.88148 18.089C4.70539 17.7434 4.60481 17.3226 4.55284 16.6865C4.50039 16.0446 4.5 15.2284 4.5 14.1V10ZM19.25 10.25V14.1C19.25 15.2325 19.2494 16.0367 19.198 16.6661C19.1473 17.2868 19.0509 17.671 18.8958 17.9755C18.5842 18.587 18.087 19.0842 17.4755 19.3958C17.171 19.5509 16.7868 19.6473 16.1661 19.698C15.5367 19.7494 14.7325 19.75 13.6 19.75H10.4C9.26748 19.75 8.46325 19.7494 7.83388 19.698C7.21322 19.6473 6.82898 19.5509 6.52453 19.3958C5.913 19.0842 5.41582 18.587 5.10423 17.9755C4.9491 17.671 4.85272 17.2868 4.80201 16.6661C4.75058 16.0367 4.75 15.2325 4.75 14.1V10.25H19.25ZM12.7176 12.4758C12.1515 12.0803 11.3714 12.2181 10.9758 12.7818C10.5809 13.3445 10.7174 14.1202 11.2825 14.515C11.8485 14.9103 12.6286 14.7725 13.0243 14.209C13.4192 13.6463 13.2827 12.8706 12.7176 12.4758ZM13.229 14.3526C13.7034 13.6766 13.5391 12.7448 12.8608 12.2709C12.1818 11.7965 11.2461 11.9616 10.7712 12.6382C10.2967 13.3142 10.461 14.246 11.1393 14.7199C11.8183 15.1942 12.754 15.029 13.229 14.3526ZM12.0801 15.9895C11.9804 15.9927 11.8803 15.9901 11.7804 15.9814C11.3578 15.9446 10.939 15.7998 10.5667 15.5397C9.43551 14.7495 9.16003 13.1931 9.95262 12.0638C10.7447 10.9351 12.303 10.6614 13.4335 11.4511C14.5646 12.2413 14.8401 13.7977 14.0475 14.927L12.0401 17.7872C11.8815 18.0133 11.5696 18.0679 11.3436 17.9093C11.1176 17.7506 11.0629 17.4388 11.2216 17.2128L12.0801 15.9895ZM11.6169 16.2143L11.0169 17.0692C10.779 17.4082 10.8609 17.8759 11.2 18.1139C11.539 18.3519 12.0068 18.2699 12.2447 17.9309L14.2521 15.0707C15.1243 13.828 14.821 12.1155 13.5766 11.2462C12.3333 10.3776 10.6194 10.6785 9.74799 11.9201C8.87585 13.1628 9.17914 14.8753 10.4235 15.7446C10.7912 16.0015 11.2005 16.1562 11.6169 16.2143ZM8.25 6.5C8.25 6.08579 8.58579 5.75 9 5.75H15C15.4142 5.75 15.75 6.08579 15.75 6.5C15.75 6.91421 15.4142 7.25 15 7.25H9C8.58579 7.25 8.25 6.91421 8.25 6.5ZM10.3774 3H13.6226C14.7236 3 15.5805 3 16.2679 3.05616C16.9658 3.11318 17.5329 3.23058 18.043 3.49047C18.8897 3.9219 19.5781 4.61031 20.0095 5.45704C20.2694 5.9671 20.3868 6.53416 20.4438 7.23209C20.5 7.91946 20.5 8.77644 20.5 9.87736V14.1227C20.5 15.2236 20.5 16.0805 20.4438 16.7679C20.3868 17.4658 20.2694 18.0329 20.0095 18.543C19.5781 19.3897 18.8897 20.0781 18.043 20.5095C17.5329 20.7694 16.9658 20.8868 16.2679 20.9438C15.5805 21 14.7236 21 13.6226 21H10.3773C9.27637 21 8.41946 21 7.73209 20.9438C7.03416 20.8868 6.4671 20.7694 5.95704 20.5095C5.11031 20.0781 4.4219 19.3897 3.99047 18.543C3.73058 18.0329 3.61318 17.4658 3.55616 16.7679C3.5 16.0805 3.5 15.2236 3.5 14.1226V9.87737C3.5 8.77641 3.5 7.91948 3.55616 7.23209C3.61318 6.53416 3.73058 5.9671 3.99047 5.45704C4.4219 4.61031 5.11031 3.9219 5.95704 3.49047C6.4671 3.23058 7.03416 3.11318 7.73209 3.05616C8.41948 3 9.27642 3 10.3774 3ZM9 6C8.72386 6 8.5 6.22386 8.5 6.5C8.5 6.77614 8.72386 7 9 7H15C15.2761 7 15.5 6.77614 15.5 6.5C15.5 6.22386 15.2761 6 15 6H9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default CalendarNineIcon;
