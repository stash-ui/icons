import * as React from 'react';
import { IconProps } from './types';

export const ChartPieIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.0649 3.76109C13.2055 3.62044 13.3963 3.54142 13.5952 3.54142C14.5158 3.54142 15.4274 3.72274 16.2779 4.07504C17.1284 4.42734 17.9012 4.9437 18.5522 5.59466C19.2031 6.24562 19.7195 7.01842 20.0718 7.86893C20.4241 8.71945 20.6054 9.63103 20.6054 10.5516C20.6054 10.7505 20.5264 10.9413 20.3857 11.082C20.2451 11.2226 20.0543 11.3016 19.8554 11.3016L13.5952 11.3016C13.181 11.3016 12.8452 10.9658 12.8452 10.5516V4.29142C12.8452 4.09251 12.9242 3.90174 13.0649 3.76109ZM14.3452 9.80162L19.0541 9.80162C18.9901 9.33588 18.8667 8.8792 18.686 8.44296C18.409 7.77443 18.0032 7.16699 17.4915 6.65532C16.9798 6.14365 16.3724 5.73777 15.7039 5.46086C15.2676 5.28016 14.8109 5.15669 14.3452 5.0927V9.80162Z"
          fill={color}
        />
        <path
          d="M3.83994 15.9658C3.35221 14.7883 3.1624 13.5087 3.28732 12.2404 3.41224 10.972 3.84804 9.75403 4.55611 8.69433 5.26418 7.63462 6.22267 6.7659 7.34668 6.16511 8.47068 5.56432 9.72551 5.25 11 5.25 11.4142 5.25 11.75 5.58578 11.75 6V12.6893L16.4801 17.4194C16.6207 17.5601 16.6997 17.7508 16.6997 17.9497 16.6997 18.1487 16.6207 18.3394 16.4801 18.4801 15.5789 19.3813 14.4693 20.0463 13.2497 20.4163 12.0301 20.7863 10.7381 20.8497 9.48805 20.6011 8.23805 20.3524 7.06865 19.7994 6.08345 18.9908 5.09826 18.1823 4.32766 17.1433 3.83994 15.9658zM4.7801 12.3874C4.67935 13.4103 4.83243 14.4422 5.22575 15.3918 5.61908 16.3413 6.24053 17.1793 7.03504 17.8313 7.82956 18.4834 8.77262 18.9294 9.78069 19.1299 10.7888 19.3304 11.8307 19.2792 12.8143 18.9809 13.5573 18.7555 14.2496 18.3943 14.8572 17.9178L10.4697 13.5303C10.329 13.3897 10.25 13.1989 10.25 13L10.25 6.79516C9.48348 6.88781 8.73852 7.12198 8.05377 7.48799 7.14732 7.9725 6.37434 8.67308 5.80332 9.52768 5.23229 10.3823 4.88084 11.3645 4.7801 12.3874zM20.3329 15.297C20.0485 15.9837 19.6317 16.6075 19.1062 17.133L15.1045 13.1314H20.7637C20.7637 13.8745 20.6173 14.6104 20.3329 15.297z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ChartPieIcon;
