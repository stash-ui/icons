import * as React from 'react';
import { IconProps } from './types';

export const TvRetroIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.08875 8.68833C6.93674 8.68833 6.00286 9.62222 6.00286 10.7742V14.946C6.00286 16.098 6.93674 17.0319 8.08875 17.0319H13.3035C14.4555 17.0319 15.3894 16.098 15.3894 14.946V10.7742C15.3894 9.62222 14.4555 8.68833 13.3035 8.68833H8.08875Z"
          fill={color}
        />
        <path
          d="M18.5182 9.99201C18.5182 10.424 18.168 10.7742 17.736 10.7742C17.304 10.7742 16.9538 10.424 16.9538 9.99201C16.9538 9.56001 17.304 9.20981 17.736 9.20981C18.168 9.20981 18.5182 9.56001 18.5182 9.99201Z"
          fill={color}
        />
        <path
          d="M17.736 13.5902C18.168 13.5902 18.5182 13.24 18.5182 12.808C18.5182 12.376 18.168 12.0258 17.736 12.0258C17.304 12.0258 16.9538 12.376 16.9538 12.808C16.9538 13.24 17.304 13.5902 17.736 13.5902Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.22332 3.10811C8.90625 2.8147 8.41135 2.83388 8.11794 3.15095C7.82453 3.46802 7.84371 3.96292 8.16078 4.25633L9.85084 5.82027H6.52433C4.65233 5.82027 3.13477 7.33783 3.13477 9.20984V16.5104C3.13477 18.3824 4.65233 19.9 6.52433 19.9H17.4752C19.3472 19.9 20.8648 18.3824 20.8648 16.5104V9.20984C20.8648 7.33783 19.3472 5.82027 17.4752 5.82027H14.156L15.846 4.25633C16.1631 3.96292 16.1823 3.46802 15.8889 3.15095C15.5954 2.83388 15.1005 2.8147 14.7835 3.10811L12.0034 5.68073L9.22332 3.10811ZM4.69918 9.20984C4.69918 8.20183 5.51633 7.38469 6.52433 7.38469H17.4752C18.4832 7.38469 19.3004 8.20183 19.3004 9.20984V16.5104C19.3004 17.5184 18.4832 18.3356 17.4752 18.3356H6.52433C5.51633 18.3356 4.69918 17.5184 4.69918 16.5104V9.20984Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default TvRetroIcon;
