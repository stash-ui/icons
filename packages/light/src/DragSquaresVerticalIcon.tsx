import * as React from 'react';
import { IconProps } from './types';

export const DragSquaresVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 18.716C7 18.7106 7 18.7053 7 18.7V17.3C7 17.2947 7 17.2894 7 17.2841C6.99999 17.1579 6.99997 17.035 7.00848 16.9309C7.01781 16.8166 7.03985 16.6817 7.109 16.546C7.20487 16.3579 7.35785 16.2049 7.54601 16.109C7.68172 16.0398 7.81659 16.0178 7.93089 16.0085C8.03497 16 8.15786 16 8.28405 16C8.28936 16 8.29468 16 8.3 16H9.7C9.70532 16 9.71064 16 9.71595 16C9.84214 16 9.96504 16 10.0691 16.0085C10.1834 16.0178 10.3183 16.0398 10.454 16.109C10.6422 16.2049 10.7951 16.3579 10.891 16.546C10.9602 16.6817 10.9822 16.8166 10.9915 16.9309C11 17.035 11 17.1579 11 17.2841C11 17.2894 11 17.2947 11 17.3V18.7C11 18.7053 11 18.7106 11 18.716C11 18.8421 11 18.965 10.9915 19.0691C10.9822 19.1834 10.9602 19.3183 10.891 19.454C10.7951 19.6422 10.6422 19.7951 10.454 19.891C10.3183 19.9602 10.1834 19.9822 10.0691 19.9915C9.96504 20 9.84214 20 9.71595 20C9.71064 20 9.70532 20 9.7 20H8.3C8.29468 20 8.28936 20 8.28405 20C8.15786 20 8.03497 20 7.93089 19.9915C7.81659 19.9822 7.68172 19.9602 7.54601 19.891C7.35785 19.7951 7.20487 19.6422 7.109 19.454C7.03985 19.3183 7.01781 19.1834 7.00848 19.0691C6.99997 18.965 6.99999 18.8421 7 18.716ZM8.00573 18.9943C8.0078 18.9945 8.01 18.9947 8.01232 18.9949C8.07061 18.9996 8.15174 19 8.3 19H9.7C9.84827 19 9.92939 18.9996 9.98769 18.9949C9.99001 18.9947 9.9922 18.9945 9.99428 18.9943C9.99447 18.9922 9.99466 18.99 9.99485 18.9877C9.99961 18.9294 10 18.8483 10 18.7V17.3C10 17.1517 9.99961 17.0706 9.99485 17.0123C9.99466 17.01 9.99447 17.0078 9.99428 17.0057C9.9922 17.0055 9.99001 17.0053 9.98769 17.0052C9.92939 17.0004 9.84827 17 9.7 17H8.3C8.15174 17 8.07061 17.0004 8.01232 17.0052C8.01 17.0053 8.0078 17.0055 8.00573 17.0057C8.00554 17.0078 8.00534 17.01 8.00515 17.0123C8.00039 17.0706 8 17.1517 8 17.3V18.7C8 18.8483 8.00039 18.9294 8.00515 18.9877C8.00534 18.99 8.00554 18.9922 8.00573 18.9943ZM7 12.716V11.2841C6.99999 11.1579 6.99997 11.035 7.00848 10.9309C7.01781 10.8166 7.03985 10.6817 7.109 10.546C7.20487 10.3578 7.35785 10.2049 7.54601 10.109C7.68172 10.0398 7.81659 10.0178 7.93089 10.0085C8.03496 9.99997 8.15786 9.99999 8.28404 10H9.71596C9.84215 9.99999 9.96504 9.99997 10.0691 10.0085C10.1834 10.0178 10.3183 10.0398 10.454 10.109C10.6422 10.2049 10.7951 10.3578 10.891 10.546C10.9602 10.6817 10.9822 10.8166 10.9915 10.9309C11 11.035 11 11.1579 11 11.2841V12.716C11 12.8421 11 12.965 10.9915 13.0691C10.9822 13.1834 10.9602 13.3183 10.891 13.454C10.7951 13.6422 10.6422 13.7951 10.454 13.891C10.3183 13.9602 10.1834 13.9822 10.0691 13.9915C9.96504 14 9.84214 14 9.71594 14H8.28406C8.15787 14 8.03497 14 7.93089 13.9915C7.81659 13.9822 7.68172 13.9602 7.54601 13.891C7.35785 13.7951 7.20487 13.6422 7.109 13.454C7.03985 13.3183 7.01781 13.1834 7.00848 13.0691C6.99997 12.965 6.99999 12.8421 7 12.716ZM8.00573 12.9943C8.0078 12.9945 8.01 12.9947 8.01232 12.9949C8.07061 12.9996 8.15174 13 8.3 13H9.7C9.84827 13 9.92939 12.9996 9.98769 12.9949C9.99001 12.9947 9.9922 12.9945 9.99428 12.9943C9.99447 12.9922 9.99466 12.99 9.99485 12.9877C9.99961 12.9294 10 12.8483 10 12.7V11.3C10 11.1517 9.99961 11.0706 9.99485 11.0123C9.99466 11.01 9.99447 11.0078 9.99427 11.0057C9.9922 11.0055 9.99001 11.0053 9.98769 11.0052C9.92939 11.0004 9.84827 11 9.7 11H8.3C8.15174 11 8.07061 11.0004 8.01232 11.0052C8.01 11.0053 8.0078 11.0055 8.00573 11.0057C8.00554 11.0078 8.00534 11.01 8.00515 11.0123C8.00039 11.0706 8 11.1517 8 11.3V12.7C8 12.8483 8.00039 12.9294 8.00515 12.9877C8.00534 12.99 8.00554 12.9922 8.00573 12.9943ZM7 6.71595V5.28405C6.99999 5.15786 6.99997 5.03497 7.00848 4.93089C7.01781 4.81659 7.03985 4.68172 7.109 4.54601C7.20487 4.35785 7.35785 4.20487 7.54601 4.109C7.68172 4.03985 7.81659 4.01781 7.93089 4.00847C8.03496 3.99997 8.15786 3.99999 8.28404 4H9.71596C9.84215 3.99999 9.96504 3.99997 10.0691 4.00847C10.1834 4.01781 10.3183 4.03985 10.454 4.109C10.6422 4.20487 10.7951 4.35785 10.891 4.54601C10.9602 4.68172 10.9822 4.81659 10.9915 4.93089C11 5.03497 11 5.15786 11 5.28405V6.71595C11 6.84214 11 6.96504 10.9915 7.06912C10.9822 7.18341 10.9602 7.31828 10.891 7.45399C10.7951 7.64216 10.6422 7.79514 10.454 7.89101C10.3183 7.96016 10.1834 7.98219 10.0691 7.99153C9.96504 8.00003 9.84215 8.00002 9.71596 8H8.28404C8.15786 8.00002 8.03496 8.00003 7.93089 7.99153C7.81659 7.98219 7.68172 7.96016 7.54601 7.89101C7.35785 7.79514 7.20487 7.64216 7.109 7.45399C7.03985 7.31828 7.01781 7.18341 7.00848 7.06912C6.99997 6.96504 6.99999 6.84214 7 6.71595ZM8.00573 6.99427C8.0078 6.99447 8.01 6.99466 8.01232 6.99485C8.07061 6.99961 8.15174 7 8.3 7H9.7C9.84827 7 9.92939 6.99961 9.98769 6.99485C9.99001 6.99466 9.9922 6.99447 9.99427 6.99428C9.99447 6.9922 9.99466 6.99 9.99485 6.98769C9.99961 6.92939 10 6.84827 10 6.7V5.3C10 5.15174 9.99961 5.07061 9.99485 5.01232C9.99466 5.01 9.99447 5.0078 9.99427 5.00573C9.9922 5.00553 9.99001 5.00534 9.98769 5.00515C9.92939 5.00039 9.84827 5 9.7 5H8.3C8.15174 5 8.07061 5.00039 8.01232 5.00515C8.01 5.00534 8.0078 5.00554 8.00573 5.00573C8.00554 5.00781 8.00534 5.01 8.00515 5.01232C8.00039 5.07061 8 5.15174 8 5.3V6.7C8 6.84827 8.00039 6.92939 8.00515 6.98769C8.00534 6.99 8.00554 6.9922 8.00573 6.99427ZM13 18.7159V17.2841C13 17.1579 13 17.035 13.0085 16.9309C13.0178 16.8166 13.0398 16.6817 13.109 16.546C13.2049 16.3579 13.3578 16.2049 13.546 16.109C13.6817 16.0398 13.8166 16.0178 13.9309 16.0085C14.035 16 14.1579 16 14.2841 16H15.716C15.8421 16 15.965 16 16.0691 16.0085C16.1834 16.0178 16.3183 16.0398 16.454 16.109C16.6422 16.2049 16.7951 16.3579 16.891 16.546C16.9602 16.6817 16.9822 16.8166 16.9915 16.9309C17 17.035 17 17.1579 17 17.284V18.716C17 18.8421 17 18.965 16.9915 19.0691C16.9822 19.1834 16.9602 19.3183 16.891 19.454C16.7951 19.6422 16.6422 19.7951 16.454 19.891C16.3183 19.9602 16.1834 19.9822 16.0691 19.9915C15.965 20 15.8421 20 15.716 20H14.2841C14.1579 20 14.035 20 13.9309 19.9915C13.8166 19.9822 13.6817 19.9602 13.546 19.891C13.3578 19.7951 13.2049 19.6422 13.109 19.454C13.0398 19.3183 13.0178 19.1834 13.0085 19.0691C13 18.965 13 18.8421 13 18.7159ZM14.0057 18.9943C14.0078 18.9945 14.01 18.9947 14.0123 18.9949C14.0706 18.9996 14.1517 19 14.3 19H15.7C15.8483 19 15.9294 18.9996 15.9877 18.9949C15.99 18.9947 15.9922 18.9945 15.9943 18.9943C15.9945 18.9922 15.9947 18.99 15.9949 18.9877C15.9996 18.9294 16 18.8483 16 18.7V17.3C16 17.1517 15.9996 17.0706 15.9949 17.0123C15.9947 17.01 15.9945 17.0078 15.9943 17.0057C15.9922 17.0055 15.99 17.0053 15.9877 17.0052C15.9294 17.0004 15.8483 17 15.7 17H14.3C14.1517 17 14.0706 17.0004 14.0123 17.0052C14.01 17.0053 14.0078 17.0055 14.0057 17.0057C14.0055 17.0078 14.0053 17.01 14.0052 17.0123C14.0004 17.0706 14 17.1517 14 17.3V18.7C14 18.8483 14.0004 18.9294 14.0052 18.9877C14.0053 18.99 14.0055 18.9922 14.0057 18.9943ZM13 12.7159V11.2841C13 11.1579 13 11.035 13.0085 10.9309C13.0178 10.8166 13.0398 10.6817 13.109 10.546C13.2049 10.3578 13.3578 10.2049 13.546 10.109C13.6817 10.0398 13.8166 10.0178 13.9309 10.0085C14.035 9.99997 14.1579 9.99999 14.284 10H15.716C15.8421 9.99999 15.965 9.99997 16.0691 10.0085C16.1834 10.0178 16.3183 10.0398 16.454 10.109C16.6422 10.2049 16.7951 10.3578 16.891 10.546C16.9602 10.6817 16.9822 10.8166 16.9915 10.9309C17 11.035 17 11.1579 17 11.284V12.716C17 12.8421 17 12.965 16.9915 13.0691C16.9822 13.1834 16.9602 13.3183 16.891 13.454C16.7951 13.6422 16.6422 13.7951 16.454 13.891C16.3183 13.9602 16.1834 13.9822 16.0691 13.9915C15.965 14 15.8421 14 15.7159 14H14.2841C14.1579 14 14.035 14 13.9309 13.9915C13.8166 13.9822 13.6817 13.9602 13.546 13.891C13.3578 13.7951 13.2049 13.6422 13.109 13.454C13.0398 13.3183 13.0178 13.1834 13.0085 13.0691C13 12.965 13 12.8421 13 12.7159ZM14.0057 12.9943C14.0078 12.9945 14.01 12.9947 14.0123 12.9949C14.0706 12.9996 14.1517 13 14.3 13H15.7C15.8483 13 15.9294 12.9996 15.9877 12.9949C15.99 12.9947 15.9922 12.9945 15.9943 12.9943C15.9945 12.9922 15.9947 12.99 15.9949 12.9877C15.9996 12.9294 16 12.8483 16 12.7V11.3C16 11.1517 15.9996 11.0706 15.9949 11.0123C15.9947 11.01 15.9945 11.0078 15.9943 11.0057C15.9922 11.0055 15.99 11.0053 15.9877 11.0052C15.9294 11.0004 15.8483 11 15.7 11H14.3C14.1517 11 14.0706 11.0004 14.0123 11.0052C14.01 11.0053 14.0078 11.0055 14.0057 11.0057C14.0055 11.0078 14.0053 11.01 14.0052 11.0123C14.0004 11.0706 14 11.1517 14 11.3V12.7C14 12.8483 14.0004 12.9294 14.0052 12.9877C14.0053 12.99 14.0055 12.9922 14.0057 12.9943ZM13 6.71594V5.28406C13 5.15787 13 5.03497 13.0085 4.93089C13.0178 4.81659 13.0398 4.68172 13.109 4.54601C13.2049 4.35785 13.3578 4.20487 13.546 4.109C13.6817 4.03985 13.8166 4.01781 13.9309 4.00847C14.035 3.99997 14.1579 3.99999 14.284 4H15.716C15.8421 3.99999 15.965 3.99997 16.0691 4.00847C16.1834 4.01781 16.3183 4.03985 16.454 4.109C16.6422 4.20487 16.7951 4.35785 16.891 4.54601C16.9602 4.68172 16.9822 4.81659 16.9915 4.93089C17 5.03496 17 5.15786 17 5.28404V6.71596C17 6.84215 17 6.96504 16.9915 7.06912C16.9822 7.18341 16.9602 7.31828 16.891 7.45399C16.7951 7.64215 16.6422 7.79514 16.454 7.89101C16.3183 7.96016 16.1834 7.98219 16.0691 7.99153C15.965 8.00003 15.8421 8.00002 15.716 8H14.284C14.1579 8.00002 14.035 8.00003 13.9309 7.99153C13.8166 7.98219 13.6817 7.96016 13.546 7.89101C13.3578 7.79514 13.2049 7.64215 13.109 7.45399C13.0398 7.31828 13.0178 7.18341 13.0085 7.06912C13 6.96504 13 6.84214 13 6.71594ZM14.0057 6.99427C14.0078 6.99447 14.01 6.99466 14.0123 6.99485C14.0706 6.99961 14.1517 7 14.3 7H15.7C15.8483 7 15.9294 6.99961 15.9877 6.99485C15.99 6.99466 15.9922 6.99447 15.9943 6.99428C15.9945 6.9922 15.9947 6.99 15.9949 6.98769C15.9996 6.92939 16 6.84827 16 6.7V5.3C16 5.15174 15.9996 5.07061 15.9949 5.01232C15.9947 5.01 15.9945 5.0078 15.9943 5.00573C15.9922 5.00553 15.99 5.00534 15.9877 5.00515C15.9294 5.00039 15.8483 5 15.7 5H14.3C14.1517 5 14.0706 5.00039 14.0123 5.00515C14.01 5.00534 14.0078 5.00554 14.0057 5.00573C14.0055 5.00781 14.0053 5.01 14.0052 5.01232C14.0004 5.07061 14 5.15174 14 5.3V6.7C14 6.84827 14.0004 6.92939 14.0052 6.98769C14.0053 6.99 14.0055 6.9922 14.0057 6.99427Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default DragSquaresVerticalIcon;
