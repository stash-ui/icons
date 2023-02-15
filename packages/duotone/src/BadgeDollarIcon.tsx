import * as React from 'react';
import { IconProps } from './types';

export const BadgeDollarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3499 3.7974C11.7757 3.68269 12.2244 3.68269 12.6502 3.7974C13.1368 3.92844 13.5581 4.25477 14.0699 4.65116C14.103 4.67678 14.1365 4.70269 14.1703 4.72885L14.3675 4.88116C14.6097 5.06827 14.6681 5.11068 14.7261 5.14223C14.7882 5.17607 14.8538 5.20323 14.9216 5.22323C14.9849 5.24189 15.0562 5.25323 15.3598 5.29219L15.6069 5.3239C15.6494 5.32935 15.6913 5.33468 15.7328 5.33996C16.375 5.42157 16.9037 5.48876 17.3404 5.74012C17.7227 5.96015 18.0399 6.27739 18.2599 6.65964C18.5113 7.09632 18.5785 7.62501 18.6601 8.26721C18.6654 8.30871 18.6707 8.35069 18.6761 8.39314L18.7079 8.64024C18.7468 8.94382 18.7582 9.01513 18.7768 9.07842C18.7968 9.14628 18.824 9.21183 18.8578 9.27396C18.8894 9.3319 18.9318 9.39035 19.1189 9.63256L19.2712 9.82971C19.2973 9.86358 19.3233 9.89703 19.3489 9.9301C19.7453 10.4419 20.0716 10.8633 20.2026 11.3498C20.3174 11.7757 20.3174 12.2243 20.2026 12.6502C20.0716 13.1367 19.7453 13.5581 19.3489 14.0699C19.3233 14.1029 19.2974 14.1364 19.2712 14.1703L19.1189 14.3674C18.9318 14.6096 18.8894 14.6681 18.8578 14.726C18.824 14.7881 18.7968 14.8537 18.7768 14.9216C18.7582 14.9848 18.7468 15.0562 18.7079 15.3597L18.6761 15.6068C18.6707 15.6493 18.6654 15.6913 18.6601 15.7328C18.5785 16.375 18.5113 16.9037 18.2599 17.3403C18.0399 17.7226 17.7226 18.0398 17.3404 18.2599C16.9037 18.5112 16.375 18.5784 15.7328 18.66C15.6913 18.6653 15.6494 18.6706 15.6069 18.6761L15.3598 18.7078C15.0562 18.7467 14.9849 18.7581 14.9216 18.7767C14.8538 18.7968 14.7882 18.8239 14.7261 18.8577C14.6681 18.8893 14.6097 18.9317 14.3675 19.1188L14.1703 19.2711C14.1365 19.2973 14.103 19.3232 14.0699 19.3488C13.5581 19.7452 13.1368 20.0715 12.6502 20.2026C12.2244 20.3173 11.7757 20.3173 11.3499 20.2026C10.8633 20.0715 10.442 19.7452 9.93016 19.3488C9.89709 19.3232 9.86364 19.2973 9.82977 19.2711L9.63262 19.1188C9.39041 18.9317 9.33196 18.8893 9.27402 18.8577C9.21189 18.8239 9.14634 18.7968 9.07848 18.7767C9.01519 18.7581 8.94388 18.7467 8.6403 18.7078L8.3932 18.6761C8.35075 18.6706 8.30877 18.6653 8.26727 18.66C7.62507 18.5784 7.09638 18.5112 6.6597 18.2599C6.27745 18.0398 5.96021 17.7226 5.74018 17.3403C5.48882 16.9037 5.42163 16.375 5.34002 15.7328C5.33474 15.6913 5.32941 15.6493 5.32396 15.6068L5.29225 15.3597C5.25329 15.0562 5.24195 14.9848 5.22329 14.9216C5.20329 14.8537 5.17614 14.7881 5.1423 14.726C5.11074 14.6681 5.06833 14.6096 4.88122 14.3674L4.72892 14.1703C4.70275 14.1364 4.67684 14.1029 4.65122 14.0699C4.25483 13.5581 3.9285 13.1367 3.79746 12.6502C3.68275 12.2243 3.68275 11.7757 3.79746 11.3498C3.9285 10.8633 4.25483 10.4419 4.65122 9.93011C4.67684 9.89703 4.70275 9.86358 4.72892 9.82971L4.88122 9.63256C5.06833 9.39035 5.11074 9.3319 5.1423 9.27396C5.17614 9.21183 5.20329 9.14628 5.22329 9.07842C5.24195 9.01513 5.25329 8.94382 5.29225 8.64024L5.32396 8.39314C5.32941 8.35069 5.33474 8.30871 5.34002 8.26721C5.42163 7.62501 5.48882 7.09632 5.74018 6.65964C5.96021 6.27739 6.27745 5.96015 6.6597 5.74012C7.09638 5.48876 7.62507 5.42157 8.26727 5.33996C8.30877 5.33468 8.35075 5.32935 8.3932 5.3239L8.6403 5.29219C8.94388 5.25323 9.01519 5.24189 9.07848 5.22323C9.14634 5.20323 9.21189 5.17607 9.27402 5.14223C9.33196 5.11068 9.39041 5.06827 9.63262 4.88116L9.82977 4.72885C9.86364 4.70269 9.89709 4.67678 9.93017 4.65116C10.442 4.25477 10.8633 3.92844 11.3499 3.7974ZM12.2601 5.24578C12.0898 5.19989 11.9103 5.19989 11.74 5.24578C11.5822 5.28826 11.4138 5.4006 10.7468 5.9159L10.5496 6.0682C10.5378 6.07735 10.5261 6.08641 10.5145 6.09538C10.3248 6.24204 10.1677 6.36355 9.99148 6.45952C9.83615 6.54412 9.67228 6.612 9.50262 6.66202C9.31016 6.71875 9.11313 6.74394 8.87532 6.77434C8.86078 6.7762 8.84609 6.77808 8.83124 6.77999L8.58414 6.8117C7.74811 6.91899 7.54957 6.95865 7.40801 7.04014C7.2551 7.12815 7.12821 7.25504 7.0402 7.40794C6.95871 7.54951 6.91905 7.74805 6.81176 8.58408L6.78005 8.83117C6.77814 8.84603 6.77626 8.86072 6.7744 8.87527C6.744 9.11307 6.71881 9.3101 6.66208 9.50256C6.61206 9.67222 6.54419 9.83609 6.45959 9.99142C6.36361 10.1676 6.2421 10.3248 6.09544 10.5144C6.08648 10.526 6.07742 10.5377 6.06826 10.5496L5.91596 10.7467C5.40066 11.4138 5.28832 11.5822 5.24584 11.7399C5.19995 11.9103 5.19995 12.0897 5.24584 12.2601C5.28832 12.4178 5.40066 12.5862 5.91596 13.2533L6.06826 13.4504C6.07742 13.4622 6.08648 13.474 6.09544 13.4856C6.2421 13.6752 6.36361 13.8323 6.45959 14.0086C6.54419 14.1639 6.61206 14.3278 6.66208 14.4974C6.71881 14.6899 6.744 14.8869 6.7744 15.1247C6.77626 15.1393 6.77814 15.1539 6.78005 15.1688L6.81176 15.4159C6.91905 16.2519 6.95871 16.4505 7.0402 16.592C7.12821 16.7449 7.2551 16.8718 7.40801 16.9598C7.54957 17.0413 7.74811 17.081 8.58414 17.1883L8.83123 17.22C8.84608 17.2219 8.86077 17.2238 8.87531 17.2256C9.11312 17.256 9.31015 17.2812 9.50262 17.338C9.67228 17.388 9.83615 17.4559 9.99148 17.5405C10.1677 17.6364 10.3248 17.7579 10.5145 17.9046C10.5261 17.9136 10.5378 17.9226 10.5496 17.9318L10.7468 18.0841C11.4138 18.5994 11.5822 18.7117 11.74 18.7542C11.9103 18.8001 12.0898 18.8001 12.2601 18.7542C12.4178 18.7117 12.5863 18.5994 13.2533 18.0841L13.4505 17.9318C13.4623 17.9226 13.474 17.9136 13.4856 17.9046C13.6753 17.7579 13.8324 17.6364 14.0086 17.5405C14.1639 17.4559 14.3278 17.388 14.4975 17.338C14.6899 17.2812 14.887 17.256 15.1248 17.2256C15.1393 17.2238 15.154 17.2219 15.1689 17.22L15.416 17.1883C16.252 17.081 16.4505 17.0413 16.5921 16.9598C16.745 16.8718 16.8719 16.7449 16.9599 16.592C17.0414 16.4505 17.0811 16.2519 17.1883 15.4159L17.2201 15.1688C17.222 15.154 17.2238 15.1393 17.2257 15.1247C17.2561 14.8869 17.2813 14.6899 17.338 14.4974C17.388 14.3278 17.4559 14.1639 17.5405 14.0086C17.6365 13.8323 17.758 13.6752 17.9046 13.4856C17.9136 13.474 17.9227 13.4623 17.9318 13.4504L18.0841 13.2533C18.5994 12.5862 18.7118 12.4178 18.7543 12.2601C18.8001 12.0897 18.8001 11.9103 18.7543 11.7399C18.7118 11.5822 18.5994 11.4138 18.0841 10.7467L17.9318 10.5496C17.9227 10.5377 17.9136 10.526 17.9046 10.5144C17.758 10.3248 17.6365 10.1676 17.5405 9.99142C17.4559 9.83609 17.388 9.67222 17.338 9.50256C17.2813 9.31009 17.2561 9.11306 17.2257 8.87525C17.2238 8.86071 17.222 8.84602 17.2201 8.83117L17.1883 8.58408C17.0811 7.74805 17.0414 7.54951 16.9599 7.40794C16.8719 7.25504 16.745 7.12815 16.5921 7.04014C16.4505 6.95865 16.252 6.91899 15.416 6.8117L15.1689 6.77999C15.154 6.77808 15.1393 6.7762 15.1248 6.77434C14.887 6.74394 14.6899 6.71875 14.4975 6.66202C14.3278 6.612 14.1639 6.54412 14.0086 6.45952C13.8324 6.36355 13.6753 6.24204 13.4856 6.09539C13.474 6.08642 13.4623 6.07736 13.4505 6.0682L13.2533 5.9159C12.5863 5.4006 12.4178 5.28826 12.2601 5.24578Z"
          fill={color}
        />
        <path
          opacity=".5"
          d="M12.0561 7.39999C12.4076 7.39999 12.6926 7.69314 12.6926 8.05476V8.70952H12.6945C13.7515 8.70952 14.6024 9.58827 14.6024 10.6738C14.6024 11.0354 14.3174 11.3286 13.9658 11.3286C13.6142 11.3286 13.3292 11.0354 13.3292 10.6738C13.3292 10.3093 13.0462 10.019 12.6945 10.019H11.2572C10.9951 10.019 10.7829 10.2383 10.7829 10.5052C10.7829 10.748 10.8352 10.8158 10.8465 10.83C10.8671 10.8558 10.922 10.9054 11.1045 10.9691L13.4139 11.7565C13.6824 11.8499 14.0052 11.9996 14.2494 12.3054C14.5029 12.6227 14.6024 13.0186 14.6024 13.4615C14.6024 14.4536 13.8182 15.2571 12.8549 15.2571H12.6926V15.9119C12.6926 16.2735 12.4076 16.5667 12.0561 16.5667C11.7045 16.5667 11.4195 16.2735 11.4195 15.9119V15.2571H11.4176C10.3606 15.2571 9.50977 14.3784 9.50977 13.2929C9.50977 12.9312 9.79477 12.6381 10.1463 12.6381C10.4979 12.6381 10.7829 12.9312 10.7829 13.2929C10.7829 13.6574 11.0659 13.9476 11.4176 13.9476H12.8549C13.117 13.9476 13.3292 13.7283 13.3292 13.4615C13.3292 13.2187 13.277 13.1508 13.2656 13.1366C13.245 13.1108 13.1902 13.0613 13.0077 12.9976L10.6983 12.2102C10.4297 12.1168 10.1069 11.967 9.86276 11.6613C9.60927 11.3439 9.50977 10.9481 9.50977 10.5052C9.50977 9.5131 10.2939 8.70952 11.2572 8.70952H11.4195V8.05476C11.4195 7.69314 11.7045 7.39999 12.0561 7.39999Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BadgeDollarIcon;
