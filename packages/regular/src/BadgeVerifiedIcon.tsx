import * as React from 'react';
import { IconProps } from './types';

export const BadgeVerifiedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3499 3.79741C11.7757 3.6827 12.2244 3.6827 12.6502 3.79741C13.1368 3.92845 13.5581 4.25478 14.0699 4.65117C14.103 4.67679 14.1365 4.7027 14.1703 4.72887L14.3675 4.88117C14.6097 5.06828 14.6681 5.11069 14.7261 5.14225C14.7882 5.17609 14.8538 5.20324 14.9216 5.22325C14.9849 5.2419 15.0562 5.25324 15.3598 5.2922L15.6069 5.32391C15.6494 5.32936 15.6913 5.3347 15.7328 5.33997C16.375 5.42159 16.9037 5.48878 17.3404 5.74014C17.7227 5.96016 18.0399 6.2774 18.2599 6.65966C18.5113 7.09634 18.5785 7.62502 18.6601 8.26723C18.6654 8.30873 18.6707 8.3507 18.6761 8.39316L18.7079 8.64025C18.7468 8.94383 18.7582 9.01514 18.7768 9.07843C18.7968 9.1463 18.824 9.21184 18.8578 9.27397C18.8894 9.33192 18.9318 9.39036 19.1189 9.63257L19.2712 9.82972C19.2973 9.86359 19.3233 9.89704 19.3489 9.93011C19.7453 10.4419 20.0716 10.8633 20.2026 11.3498C20.3174 11.7757 20.3174 12.2243 20.2026 12.6502C20.0716 13.1367 19.7453 13.5581 19.3489 14.0699C19.3233 14.103 19.2974 14.1364 19.2712 14.1703L19.1189 14.3674C18.9318 14.6096 18.8894 14.6681 18.8578 14.726C18.824 14.7882 18.7968 14.8537 18.7768 14.9216C18.7582 14.9849 18.7468 15.0562 18.7079 15.3598L18.6761 15.6069C18.6707 15.6493 18.6654 15.6913 18.6601 15.7328C18.5785 16.375 18.5113 16.9037 18.2599 17.3404C18.0399 17.7226 17.7226 18.0398 17.3404 18.2599C16.9037 18.5112 16.375 18.5784 15.7328 18.66C15.6913 18.6653 15.6494 18.6706 15.6069 18.6761L15.3598 18.7078C15.0562 18.7468 14.9849 18.7581 14.9216 18.7768C14.8538 18.7968 14.7882 18.8239 14.7261 18.8578C14.6681 18.8893 14.6097 18.9317 14.3675 19.1188L14.1703 19.2711C14.1365 19.2973 14.103 19.3232 14.0699 19.3488C13.5581 19.7452 13.1368 20.0716 12.6502 20.2026C12.2244 20.3173 11.7757 20.3173 11.3499 20.2026C10.8633 20.0716 10.442 19.7452 9.93016 19.3488C9.89709 19.3232 9.86364 19.2973 9.82977 19.2711L9.63262 19.1188C9.39041 18.9317 9.33196 18.8893 9.27402 18.8578C9.21189 18.8239 9.14634 18.7968 9.07848 18.7768C9.01519 18.7581 8.94388 18.7468 8.6403 18.7078L8.3932 18.6761C8.35075 18.6706 8.30877 18.6653 8.26727 18.66C7.62507 18.5784 7.09638 18.5112 6.6597 18.2599C6.27745 18.0398 5.96021 17.7226 5.74018 17.3404C5.48882 16.9037 5.42163 16.375 5.34002 15.7328C5.33474 15.6913 5.32941 15.6493 5.32396 15.6069L5.29225 15.3598C5.25329 15.0562 5.24195 14.9849 5.22329 14.9216C5.20329 14.8537 5.17614 14.7882 5.1423 14.726C5.11074 14.6681 5.06833 14.6096 4.88122 14.3674L4.72892 14.1703C4.70275 14.1364 4.67684 14.103 4.65122 14.0699C4.25483 13.5581 3.9285 13.1367 3.79746 12.6502C3.68275 12.2243 3.68275 11.7757 3.79746 11.3498C3.9285 10.8633 4.25483 10.4419 4.65122 9.93012C4.67684 9.89705 4.70275 9.86359 4.72892 9.82972L4.88122 9.63257C5.06833 9.39036 5.11074 9.33192 5.1423 9.27397C5.17614 9.21184 5.20329 9.1463 5.22329 9.07843C5.24195 9.01514 5.25329 8.94383 5.29225 8.64025L5.32396 8.39316C5.32941 8.3507 5.33474 8.30873 5.34002 8.26723C5.42163 7.62502 5.48882 7.09634 5.74018 6.65966C5.96021 6.2774 6.27745 5.96016 6.6597 5.74014C7.09638 5.48878 7.62507 5.42159 8.26727 5.33997C8.30877 5.3347 8.35075 5.32936 8.3932 5.32391L8.6403 5.2922C8.94388 5.25324 9.01519 5.2419 9.07848 5.22325C9.14634 5.20324 9.21189 5.17609 9.27402 5.14225C9.33196 5.11069 9.39041 5.06828 9.63262 4.88117L9.82977 4.72887C9.86364 4.7027 9.89709 4.67679 9.93017 4.65118C10.442 4.25478 10.8633 3.92845 11.3499 3.79741ZM12.2601 5.24579C12.0898 5.19991 11.9103 5.19991 11.74 5.24579C11.5822 5.28827 11.4138 5.40062 10.7468 5.91591L10.5496 6.06821C10.5378 6.07737 10.5261 6.08643 10.5145 6.0954C10.3248 6.24206 10.1677 6.36357 9.99148 6.45954C9.83615 6.54414 9.67228 6.61202 9.50262 6.66203C9.31016 6.71877 9.11313 6.74396 8.87532 6.77436C8.86078 6.77622 8.84609 6.77809 8.83124 6.78L8.58414 6.81171C7.74811 6.919 7.54957 6.95867 7.40801 7.04015C7.2551 7.12816 7.12821 7.25506 7.0402 7.40796C6.95871 7.54952 6.91905 7.74806 6.81176 8.58409L6.78005 8.83119C6.77814 8.84604 6.77626 8.86074 6.7744 8.87528C6.744 9.11309 6.71881 9.31011 6.66208 9.50258C6.61206 9.67223 6.54419 9.8361 6.45959 9.99143C6.36361 10.1676 6.2421 10.3248 6.09544 10.5144C6.08648 10.526 6.07742 10.5377 6.06826 10.5496L5.91596 10.7467C5.40066 11.4138 5.28832 11.5822 5.24584 11.7399C5.19995 11.9103 5.19995 12.0897 5.24584 12.2601C5.28832 12.4178 5.40066 12.5862 5.91596 13.2533L6.06826 13.4504C6.07742 13.4623 6.08648 13.474 6.09544 13.4856C6.2421 13.6752 6.36361 13.8324 6.45959 14.0086C6.54419 14.1639 6.61206 14.3278 6.66208 14.4974C6.71881 14.6899 6.744 14.8869 6.7744 15.1247C6.77626 15.1393 6.77814 15.154 6.78005 15.1688L6.81176 15.4159C6.91905 16.2519 6.95871 16.4505 7.0402 16.592C7.12821 16.7449 7.2551 16.8718 7.40801 16.9599C7.54957 17.0413 7.74811 17.081 8.58414 17.1883L8.83123 17.22C8.84608 17.2219 8.86077 17.2238 8.87531 17.2256C9.11312 17.2561 9.31015 17.2812 9.50262 17.338C9.67228 17.388 9.83615 17.4559 9.99148 17.5405C10.1677 17.6364 10.3248 17.7579 10.5145 17.9046C10.5261 17.9136 10.5378 17.9226 10.5496 17.9318L10.7468 18.0841C11.4138 18.5994 11.5822 18.7117 11.74 18.7542C11.9103 18.8001 12.0898 18.8001 12.2601 18.7542C12.4178 18.7117 12.5863 18.5994 13.2533 18.0841L13.4505 17.9318C13.4623 17.9226 13.474 17.9136 13.4856 17.9046C13.6753 17.758 13.8324 17.6364 14.0086 17.5405C14.1639 17.4559 14.3278 17.388 14.4975 17.338C14.6899 17.2812 14.887 17.2561 15.1248 17.2256C15.1393 17.2238 15.154 17.2219 15.1689 17.22L15.416 17.1883C16.252 17.081 16.4505 17.0413 16.5921 16.9599C16.745 16.8718 16.8719 16.7449 16.9599 16.592C17.0414 16.4505 17.0811 16.2519 17.1883 15.4159L17.2201 15.1688C17.222 15.154 17.2238 15.1393 17.2257 15.1247C17.2561 14.8869 17.2813 14.6899 17.338 14.4974C17.388 14.3278 17.4559 14.1639 17.5405 14.0086C17.6365 13.8324 17.758 13.6752 17.9046 13.4856C17.9136 13.474 17.9227 13.4623 17.9318 13.4504L18.0841 13.2533C18.5994 12.5862 18.7118 12.4178 18.7543 12.2601C18.8001 12.0897 18.8001 11.9103 18.7543 11.7399C18.7118 11.5822 18.5994 11.4138 18.0841 10.7467L17.9318 10.5496C17.9227 10.5377 17.9136 10.526 17.9046 10.5144C17.758 10.3248 17.6365 10.1676 17.5405 9.99143C17.4559 9.8361 17.388 9.67223 17.338 9.50258C17.2813 9.31011 17.2561 9.11308 17.2257 8.87526C17.2238 8.86073 17.222 8.84604 17.2201 8.83119L17.1883 8.58409C17.0811 7.74806 17.0414 7.54952 16.9599 7.40796C16.8719 7.25506 16.745 7.12816 16.5921 7.04015C16.4505 6.95867 16.252 6.919 15.416 6.81171L15.1689 6.78C15.154 6.77809 15.1393 6.77622 15.1248 6.77436C14.887 6.74396 14.6899 6.71877 14.4975 6.66203C14.3278 6.61202 14.1639 6.54414 14.0086 6.45954C13.8324 6.36357 13.6753 6.24206 13.4856 6.0954C13.474 6.08643 13.4623 6.07737 13.4505 6.06821L13.2533 5.91591C12.5863 5.40062 12.4178 5.28827 12.2601 5.24579Z"
          fill={color}
        />
        <path
          d="M15.7072 9.2929C16.0977 9.68342 16.0977 10.3166 15.7072 10.7071L11.7072 14.7071C11.3166 15.0976 10.6835 15.0976 10.2929 14.7071L8.29294 12.7071C7.90242 12.3166 7.90242 11.6834 8.29294 11.2929C8.68347 10.9024 9.31663 10.9024 9.70716 11.2929L11 12.5858L14.2929 9.2929C14.6835 8.90237 15.3166 8.90237 15.7072 9.2929Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BadgeVerifiedIcon;
