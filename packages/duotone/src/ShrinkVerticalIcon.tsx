import * as React from 'react';
import { IconProps } from './types';

export const ShrinkVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.7929 6.29289C14.1834 5.90237 14.8166 5.90237 15.2071 6.29289 15.5976 6.68342 15.5976 7.31658 15.2071 7.70711L13.2564 9.65779C13.1722 9.74205 13.0717 9.84268 12.9758 9.92405 12.8648 10.0183 12.6962 10.1439 12.4635 10.2195 12.1623 10.3174 11.8377 10.3174 11.5365 10.2195 11.3038 10.1439 11.1352 10.0183 11.0242 9.92405 10.9283 9.84268 10.8278 9.74205 10.7436 9.65779L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289 9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L12 8.08579 13.7929 6.29289zM10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071 8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L10.7436 14.3422C10.8278 14.258 10.9283 14.1573 11.0242 14.0759 11.1352 13.9817 11.3038 13.8561 11.5365 13.7805 11.8377 13.6826 12.1623 13.6826 12.4635 13.7805 12.6962 13.8561 12.8648 13.9817 12.9758 14.0759 13.0717 14.1573 13.1722 14.2579 13.2564 14.3422L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071 14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L12 15.9142 10.2071 17.7071z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ShrinkVerticalIcon;
