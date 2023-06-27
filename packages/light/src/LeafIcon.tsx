import * as React from 'react';
import { IconProps } from './types';

export const LeafIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.6351 4.69746C12.3721 5.07079 9.89626 5.98189 8.32659 7.55156C6.8946 8.98355 6.58864 10.6917 6.79794 12.222C6.97212 13.4954 7.49985 14.6118 8.00203 15.2909L10.0497 13.2432L9.26448 10.8877C9.17716 10.6257 9.31874 10.3426 9.58071 10.2553C9.84268 10.1679 10.1258 10.3095 10.2132 10.5715L10.8402 12.4527L12.7276 10.5653L12.3387 8.62041C12.2845 8.34963 12.4601 8.08622 12.7309 8.03206C13.0017 7.97791 13.2651 8.15351 13.3193 8.42429L13.5775 9.71542L15.5655 7.72735C15.7608 7.53209 16.0774 7.53209 16.2726 7.72735C16.4679 7.92261 16.4679 8.2392 16.2726 8.43446L14.2846 10.4225L15.5757 10.6807C15.8465 10.7349 16.0221 10.9983 15.9679 11.2691C15.9138 11.5399 15.6504 11.7155 15.3796 11.6613L13.4347 11.2724L11.5473 13.1598L13.4285 13.7868C13.6905 13.8742 13.8321 14.1573 13.7447 14.4193C13.6574 14.6813 13.3743 14.8228 13.1123 14.7355L10.7568 13.9503L8.70914 15.998C9.3882 16.5002 10.5046 17.0279 11.778 17.2021C13.3083 17.4114 15.0164 17.1054 16.4484 15.6734C18.0181 14.1037 18.9292 11.6279 19.3025 9.36493C19.488 8.24065 19.5362 7.19475 19.4747 6.37484C19.4439 5.96432 19.3864 5.6224 19.3108 5.36099C19.2317 5.08773 19.147 4.95278 19.0971 4.90287C19.0472 4.85297 18.9123 4.7683 18.639 4.68923C18.3776 4.61359 18.0357 4.55612 17.6252 4.5253C16.8052 4.46376 15.7594 4.51198 14.6351 4.69746ZM7.99573 16.7114C8.81885 17.3571 10.1514 17.9889 11.6425 18.1928C13.4132 18.435 15.4573 18.0788 17.1555 16.3805C18.9344 14.6017 19.8994 11.8905 20.2892 9.5277C20.4853 8.33909 20.5404 7.21239 20.4719 6.29998C20.4377 5.84434 20.3718 5.43016 20.2714 5.08305C20.1744 4.74778 20.0302 4.42176 19.8042 4.19577C19.5782 3.96977 19.2522 3.82564 18.917 3.72863C18.5698 3.6282 18.1557 3.56231 17.7 3.52811C16.7876 3.45962 15.6609 3.5147 14.4723 3.71079C12.1095 4.10059 9.39829 5.06564 7.61948 6.84445C5.9212 8.54273 5.56498 10.5868 5.80716 12.3575C6.01112 13.8486 6.64291 15.1812 7.28863 16.0043L3.64645 19.6464C3.45118 19.8417 3.45118 20.1583 3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.99573 16.7114Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default LeafIcon;
