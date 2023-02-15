import * as React from 'react';
import { IconProps } from './types';

export const PlayBtnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5658 4.25H7.43489C6.62206 4.24999 5.96643 4.24999 5.43552 4.29336C4.88889 4.33803 4.40875 4.43239 3.96453 4.65873C3.25892 5.01825 2.68524 5.59193 2.32572 6.29754C2.09938 6.74176 2.00502 7.2219 1.96036 7.76853C1.91698 8.29944 1.91699 8.95505 1.91699 9.76789V14.2321C1.91699 15.0449 1.91698 15.7006 1.96036 16.2315C2.00502 16.7781 2.09938 17.2582 2.32572 17.7025C2.68524 18.4081 3.25892 18.9817 3.96453 19.3413C4.40875 19.5676 4.88889 19.662 5.43552 19.7066C5.96643 19.75 6.62204 19.75 7.43487 19.75H16.5658C17.3786 19.75 18.0342 19.75 18.5651 19.7066C19.1118 19.662 19.5919 19.5676 20.0361 19.3413C20.7417 18.9817 21.3154 18.4081 21.6749 17.7025C21.9013 17.2582 21.9956 16.7781 22.0403 16.2315C22.0837 15.7006 22.0837 15.045 22.0837 14.2321V9.76788C22.0837 8.95505 22.0837 8.29944 22.0403 7.76853C21.9956 7.2219 21.9013 6.74176 21.6749 6.29754C21.3154 5.59193 20.7417 5.01825 20.0361 4.65873C19.5919 4.43239 19.1118 4.33803 18.5651 4.29336C18.0342 4.24999 17.3786 4.24999 16.5658 4.25ZM10.0144 9.89628C10.0144 9.51005 10.4358 9.27148 10.767 9.4702L14.2732 11.5739C14.5948 11.7669 14.5948 12.2331 14.2732 12.4261L10.767 14.5298C10.4358 14.7285 10.0144 14.49 10.0144 14.1037V9.89628Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PlayBtnIcon;
