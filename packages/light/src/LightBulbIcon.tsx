import * as React from 'react';
import { IconProps } from './types';

export const LightBulbIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.5C15.0562 3.5 17.5 5.87742 17.5 8.76923C17.5 10.5387 17.0392 11.4589 16.4566 12.2866C16.3227 12.4767 16.1759 12.669 16.0222 12.8701C15.5004 13.5533 14.9005 14.3386 14.4681 15.4895C14.3647 15.7647 14.2328 16.0223 14.0774 16.2552L14.0298 16.3229C13.8931 16.5175 13.7408 16.693 13.5755 16.8453C13.1301 17.2539 12.5861 17.5 12 17.5C11.1946 17.5 10.476 17.0429 9.97016 16.3229L9.9226 16.2552C9.76716 16.0223 9.63535 15.7647 9.53194 15.4895C9.09948 14.3386 8.49961 13.5533 7.97776 12.8701C7.82413 12.669 7.67725 12.4767 7.5434 12.2866C6.96081 11.4589 6.5 10.5387 6.5 8.76923C6.5 5.87742 8.94377 3.5 12 3.5ZM14.9241 16.7844C15.1201 16.4872 15.2814 16.168 15.4041 15.8413C15.7799 14.8412 16.2641 14.206 16.7695 13.5429C16.9365 13.3238 17.1058 13.1016 17.2743 12.8622C17.9587 11.8899 18.5 10.7721 18.5 8.76923C18.5 5.28853 15.5712 2.5 12 2.5C8.42881 2.5 5.5 5.28853 5.5 8.76923C5.5 10.7721 6.04125 11.8899 6.72568 12.8622C6.8942 13.1016 7.06353 13.3238 7.23054 13.5429C7.73595 14.206 8.22006 14.8412 8.59585 15.8413C8.71864 16.168 8.8799 16.4872 9.07595 16.7844L9.30347 19.0597C9.44201 20.445 10.6077 21.5 12 21.5C13.3923 21.5 14.558 20.445 14.6965 19.0597L14.9241 16.7844ZM13.8038 17.9369L13.7015 18.9602C13.6141 19.8343 12.8785 20.5 12 20.5C11.1215 20.5 10.3859 19.8343 10.2985 18.9602L10.1962 17.9369C10.7133 18.2862 11.3213 18.5 12 18.5C12.6787 18.5 13.2867 18.2862 13.8038 17.9369ZM2.61589 3.17991C2.79267 2.96777 3.10795 2.93911 3.32009 3.11589L4.82009 4.36589C5.03223 4.54267 5.06089 4.85795 4.88411 5.07009C4.70733 5.28223 4.39205 5.31089 4.17991 5.13411L2.67991 3.88411C2.46777 3.70733 2.43911 3.39205 2.61589 3.17991ZM21.3841 3.17991C21.5609 3.39205 21.5322 3.70733 21.3201 3.88411L19.8201 5.13411C19.608 5.31089 19.2927 5.28223 19.1159 5.07009C18.9391 4.85795 18.9678 4.54267 19.1799 4.36589L20.6799 3.11589C20.892 2.93911 21.2073 2.96777 21.3841 3.17991ZM1.5 8.25C1.5 7.97386 1.72386 7.75 2 7.75H4C4.27614 7.75 4.5 7.97386 4.5 8.25C4.5 8.52614 4.27614 8.75 4 8.75H2C1.72386 8.75 1.5 8.52614 1.5 8.25ZM19.5 8.25C19.5 7.97386 19.7239 7.75 20 7.75H22C22.2761 7.75 22.5 7.97386 22.5 8.25C22.5 8.52614 22.2761 8.75 22 8.75H20C19.7239 8.75 19.5 8.52614 19.5 8.25ZM4.94721 12.0264C5.07071 12.2734 4.9706 12.5737 4.72361 12.6972L3.22361 13.4472C2.97662 13.5707 2.67628 13.4706 2.55279 13.2236C2.42929 12.9766 2.5294 12.6763 2.77639 12.5528L4.27639 11.8028C4.52338 11.6793 4.82372 11.7794 4.94721 12.0264ZM19.0528 12.0264C19.1763 11.7794 19.4766 11.6793 19.7236 11.8028L21.2236 12.5528C21.4706 12.6763 21.5707 12.9766 21.4472 13.2236C21.3237 13.4706 21.0234 13.5707 20.7764 13.4472L19.2764 12.6972C19.0294 12.5737 18.9293 12.2734 19.0528 12.0264Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default LightBulbIcon;
