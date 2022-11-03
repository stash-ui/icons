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
          d="M11.4149 4.03881C11.7982 3.93557 12.2019 3.93557 12.5852 4.03881C13.0215 4.15632 13.4035 4.45181 13.9369 4.86442C13.9634 4.88489 13.9903 4.90566 14.0175 4.92671L14.2146 5.07901C14.4508 5.26142 14.5271 5.31853 14.6065 5.3618C14.6842 5.4041 14.7661 5.43804 14.8509 5.46304C14.9377 5.48863 15.032 5.50219 15.328 5.54017L15.5751 5.57188C15.6092 5.57626 15.6429 5.58056 15.6761 5.5848C16.345 5.67023 16.8241 5.73141 17.2157 5.9568C17.5597 6.15483 17.8452 6.44035 18.0432 6.78437C18.2686 7.17595 18.3298 7.65502 18.4153 8.32396C18.4195 8.35716 18.4238 8.39083 18.4282 8.42498L18.4599 8.67208C18.4979 8.96802 18.5114 9.06234 18.537 9.14912C18.562 9.23395 18.596 9.31589 18.6383 9.39355C18.6815 9.473 18.7386 9.54929 18.921 9.78541L19.0733 9.98256C19.0944 10.0098 19.1152 10.0367 19.1356 10.0631C19.5482 10.5965 19.8437 10.9786 19.9612 11.4148C20.0645 11.7981 20.0645 12.2019 19.9612 12.5852C19.8437 13.0214 19.5482 13.4035 19.1356 13.9369C19.1152 13.9634 19.0944 13.9902 19.0733 14.0175L18.921 14.2146C18.7386 14.4507 18.6815 14.527 18.6383 14.6065C18.596 14.6841 18.562 14.7661 18.537 14.8509C18.5114 14.9377 18.4979 15.032 18.4599 15.3279L18.4282 15.575C18.4238 15.6092 18.4195 15.6428 18.4153 15.676C18.3298 16.345 18.2686 16.8241 18.0432 17.2156C17.8452 17.5597 17.5597 17.8452 17.2157 18.0432C16.8241 18.2686 16.345 18.3298 15.6761 18.4152C15.6429 18.4194 15.6092 18.4237 15.5751 18.4281L15.328 18.4598C15.032 18.4978 14.9377 18.5114 14.8509 18.537C14.7661 18.562 14.6842 18.5959 14.6065 18.6382C14.5271 18.6815 14.4508 18.7386 14.2146 18.921L14.0175 19.0733C13.9902 19.0943 13.9634 19.1151 13.9369 19.1356C13.4035 19.5482 13.0215 19.8437 12.5852 19.9612C12.2019 20.0644 11.7982 20.0644 11.4149 19.9612C10.9786 19.8437 10.5966 19.5482 10.0632 19.1356C10.0367 19.1151 10.0099 19.0943 9.9826 19.0733L9.78546 18.921C9.54934 18.7386 9.47305 18.6815 9.3936 18.6382C9.31593 18.5959 9.234 18.562 9.14917 18.537C9.06239 18.5114 8.96807 18.4978 8.67212 18.4598L8.42503 18.4281C8.39088 18.4237 8.35721 18.4194 8.32401 18.4152C7.65507 18.3298 7.176 18.2686 6.78442 18.0432C6.44039 17.8452 6.15488 17.5597 5.95685 17.2156C5.73146 16.8241 5.67028 16.345 5.58485 15.676C5.58061 15.6428 5.57631 15.6092 5.57193 15.575L5.54021 15.3279C5.50224 15.032 5.48867 14.9377 5.46309 14.8509C5.43808 14.7661 5.40414 14.6841 5.36184 14.6065C5.31857 14.527 5.26147 14.4507 5.07906 14.2146L4.92676 14.0175C4.90571 13.9902 4.88494 13.9634 4.86446 13.9369C4.45186 13.4035 4.15636 13.0214 4.03885 12.5852C3.93562 12.2019 3.93562 11.7981 4.03885 11.4148C4.15636 10.9786 4.45186 10.5965 4.86446 10.0631C4.88494 10.0367 4.90571 10.0098 4.92676 9.98256L5.07906 9.78541C5.26147 9.54929 5.31857 9.473 5.36184 9.39355C5.40414 9.31589 5.43808 9.23395 5.46309 9.14912C5.48867 9.06234 5.50224 8.96802 5.54021 8.67208L5.57193 8.42498C5.57631 8.39083 5.58061 8.35716 5.58485 8.32396C5.67028 7.65502 5.73146 7.17595 5.95685 6.78437C6.15488 6.44035 6.44039 6.15483 6.78442 5.9568C7.17599 5.73141 7.65507 5.67023 8.32401 5.5848C8.35721 5.58056 8.39088 5.57626 8.42503 5.57188L8.67212 5.54017C8.96807 5.50219 9.06239 5.48863 9.14917 5.46304C9.234 5.43804 9.31593 5.4041 9.3936 5.3618C9.47305 5.31853 9.54934 5.26142 9.78546 5.07901L9.9826 4.92671C10.0098 4.90566 10.0367 4.88489 10.0632 4.86442C10.5966 4.45181 10.9786 4.15632 11.4149 4.03881ZM12.3251 5.0044C12.1122 4.94704 11.8879 4.94704 11.6749 5.0044C11.4572 5.06305 11.2428 5.21681 10.594 5.71807L10.3968 5.87037C10.3873 5.8777 10.378 5.88493 10.3687 5.89206C10.1718 6.04429 10.03 6.1539 9.8719 6.23999C9.73211 6.31613 9.58462 6.37722 9.43193 6.42223C9.25928 6.47313 9.08151 6.4959 8.83459 6.52753C8.82302 6.52901 8.8113 6.53051 8.79941 6.53203L8.55232 6.56375C7.73906 6.66811 7.47874 6.71098 7.28329 6.82348C7.09216 6.9335 6.93354 7.09212 6.82353 7.28324C6.71102 7.4787 6.66816 7.73901 6.56379 8.55227L6.53208 8.79937C6.53056 8.81125 6.52905 8.82298 6.52757 8.83455C6.49595 9.08146 6.47318 9.25924 6.42228 9.43189C6.37727 9.58458 6.31618 9.73206 6.24004 9.87186C6.15394 10.0299 6.04434 10.1717 5.89211 10.3687C5.88497 10.3779 5.87774 10.3873 5.87042 10.3968L5.71812 10.5939C5.21686 11.2428 5.0631 11.4571 5.00444 11.6749C4.94709 11.8878 4.94709 12.1122 5.00444 12.3251C5.0631 12.5429 5.21686 12.7572 5.71812 13.4061L5.87042 13.6033C5.87775 13.6127 5.88498 13.6221 5.89211 13.6313C6.04434 13.8283 6.15395 13.9701 6.24004 14.1282C6.31618 14.2679 6.37727 14.4154 6.42228 14.5681C6.47318 14.7408 6.49595 14.9185 6.52757 15.1655C6.52905 15.177 6.53056 15.1888 6.53208 15.2006L6.56379 15.4477C6.66816 16.261 6.71102 16.5213 6.82353 16.7168C6.93354 16.9079 7.09216 17.0665 7.28329 17.1765C7.47874 17.289 7.73906 17.3319 8.55232 17.4363L8.79941 17.468C8.8113 17.4695 8.82303 17.471 8.83461 17.4725C9.08151 17.5041 9.25928 17.5269 9.43193 17.5778C9.58462 17.6228 9.73211 17.6839 9.8719 17.76C10.03 17.8461 10.1718 17.9557 10.3687 18.1079C10.378 18.1151 10.3873 18.1223 10.3968 18.1296L10.594 18.2819C11.2428 18.7832 11.4572 18.937 11.6749 18.9956C11.8879 19.053 12.1122 19.053 12.3251 18.9956C12.5429 18.937 12.7573 18.7832 13.4061 18.2819L13.6033 18.1296C13.6128 18.1223 13.6221 18.1151 13.6313 18.108C13.8283 17.9557 13.9701 17.8461 14.1282 17.76C14.268 17.6839 14.4155 17.6228 14.5682 17.5778C14.7408 17.5269 14.9186 17.5041 15.1655 17.4725C15.1771 17.471 15.1888 17.4695 15.2007 17.468L15.4478 17.4363C16.261 17.3319 16.5214 17.289 16.7168 17.1765C16.9079 17.0665 17.0666 16.9079 17.1766 16.7168C17.2891 16.5213 17.3319 16.261 17.4363 15.4477L17.468 15.2006C17.4695 15.1888 17.471 15.177 17.4725 15.1654C17.5042 14.9185 17.5269 14.7408 17.5778 14.5681C17.6228 14.4154 17.6839 14.2679 17.7601 14.1282C17.8462 13.9701 17.9558 13.8283 18.108 13.6313C18.1151 13.6221 18.1224 13.6127 18.1297 13.6033L18.282 13.4061C18.7832 12.7572 18.937 12.5429 18.9957 12.3251C19.053 12.1122 19.053 11.8878 18.9957 11.6749C18.937 11.4571 18.7832 11.2428 18.282 10.5939L18.1297 10.3968C18.1224 10.3873 18.1151 10.3779 18.108 10.3687C17.9558 10.1717 17.8462 10.0299 17.7601 9.87186C17.6839 9.73206 17.6228 9.58458 17.5778 9.43189C17.5269 9.25924 17.5042 9.08147 17.4725 8.83456C17.471 8.82298 17.4695 8.81126 17.468 8.79937L17.4363 8.55227C17.3319 7.73901 17.2891 7.4787 17.1766 7.28324C17.0666 7.09212 16.9079 6.9335 16.7168 6.82348C16.5214 6.71098 16.261 6.66811 15.4478 6.56375L15.2007 6.53203C15.1888 6.53051 15.1771 6.52901 15.1655 6.52753C14.9186 6.4959 14.7408 6.47313 14.5682 6.42223C14.4155 6.37722 14.268 6.31613 14.1282 6.23999C13.9701 6.1539 13.8283 6.04429 13.6314 5.89206C13.6221 5.88493 13.6128 5.8777 13.6033 5.87037L13.4061 5.71807C12.7573 5.21681 12.5429 5.06305 12.3251 5.0044Z"
          fill={color}
        />
        <path
          d="M15.5304 9.46967C15.8233 9.76257 15.8233 10.2374 15.5304 10.5303L11.5304 14.5303C11.2375 14.8232 10.7626 14.8232 10.4697 14.5303L8.46972 12.5303C8.17683 12.2374 8.17683 11.7626 8.46972 11.4697C8.76261 11.1768 9.23749 11.1768 9.53038 11.4697L11 12.9393L14.4697 9.46967C14.7626 9.17678 15.2375 9.17678 15.5304 9.46967Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default BadgeVerifiedIcon;
