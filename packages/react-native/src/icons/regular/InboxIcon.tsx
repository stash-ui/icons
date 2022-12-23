import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const InboxIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M3.25001 12.1455C3.21022 11.4995 3.27031 10.8227 3.45144 10.1888L4.28385 7.27531C4.30334 7.20711 4.32297 7.13732 4.34299 7.06619C4.68728 5.8426 5.14286 4.22346 6.84467 3.5284C7.52869 3.24903 8.31834 3.24941 9.46354 3.24996H14.5358C15.681 3.24941 16.4706 3.24903 17.1547 3.5284C18.8565 4.22346 19.3121 5.8426 19.6563 7.06619C19.6764 7.13732 19.696 7.20711 19.7155 7.2753L20.5479 10.1888C20.728 10.8191 20.7884 11.4918 20.75 12.1344C20.7499 12.9868 20.7479 14.3478 20.7088 15.5939C20.6881 16.2498 20.6569 16.8851 20.6088 17.4028C20.5849 17.661 20.5557 17.9011 20.5193 18.1052C20.4867 18.2875 20.4363 18.516 20.3413 18.7025C19.9818 19.4081 19.4081 19.9817 18.7025 20.3413C18.2582 20.5676 17.7781 20.662 17.2315 20.7066C16.7006 20.75 16.045 20.75 15.2322 20.75H8.76788C7.95508 20.75 7.29942 20.75 6.76853 20.7066C6.22189 20.662 5.74175 20.5676 5.29754 20.3413C4.59193 19.9817 4.01825 19.4081 3.65873 18.7025C3.56371 18.516 3.51332 18.2875 3.48074 18.1052C3.44428 17.9011 3.41513 17.661 3.39116 17.4028C3.34309 16.8851 3.31186 16.2498 3.29124 15.5939C3.25224 14.3532 3.25012 12.9986 3.25001 12.1455ZM7.41183 4.91704C6.40516 5.32819 6.13566 6.25406 5.72614 7.68739L4.89372 10.6008C4.76864 11.0386 4.72027 11.5237 4.74419 12H4.75C4.75 12.0312 4.75 12.0633 4.75 12.0961C4.75289 12.1368 4.7563 12.1774 4.76024 12.218C4.86441 13.2883 5.7114 14.1353 6.78172 14.2394C6.96891 14.2576 7.16596 14.2635 7.37751 14.2634L7.42336 14.2633C7.60207 14.2628 7.79049 14.2624 7.96814 14.2988C8.45737 14.3991 8.88086 14.7041 9.13109 15.1363C9.22188 15.2931 9.27922 15.466 9.33306 15.6284L9.3465 15.6688C9.46882 16.0358 9.56729 16.1286 9.61123 16.1596C9.65784 16.1924 9.77654 16.25 10.1529 16.25H13.8464C14.2333 16.25 14.3524 16.1859 14.3957 16.154C14.4417 16.1202 14.5338 16.0258 14.6528 15.6688L14.6663 15.6284C14.7201 15.466 14.7775 15.2931 14.8682 15.1363C15.1185 14.7041 15.542 14.3991 16.0312 14.2988C16.2088 14.2624 16.3973 14.2628 16.576 14.2633L16.6218 14.2634C16.8334 14.2635 17.0304 14.2576 17.2176 14.2394C18.2879 14.1353 19.1349 13.2883 19.2391 12.218C19.2433 12.1743 19.247 12.1304 19.25 12.0865C19.25 12.057 19.25 12.0282 19.25 12H19.2551C19.2791 11.5237 19.2307 11.0386 19.1056 10.6008L18.2732 7.68739C17.8637 6.25405 17.5942 5.32819 16.5875 4.91704C16.2117 4.76356 15.744 4.75001 14.379 4.75001H9.62031C8.25532 4.75001 7.78762 4.76356 7.41183 4.91704ZM4.77622 15.0199C4.78031 15.1968 4.78504 15.373 4.7905 15.5468C4.81076 16.1912 4.84084 16.7913 4.88473 17.2641C4.90674 17.5012 4.93124 17.6951 4.95736 17.8414C4.97647 17.9484 4.99199 18.0027 4.99731 18.0213C4.99877 18.0264 4.99946 18.0288 4.99924 18.0289C4.99901 18.029 4.99774 18.0264 4.99524 18.0215C5.21095 18.4448 5.55516 18.789 5.97852 19.0048C6.17604 19.1054 6.4368 19.1745 6.89068 19.2116C7.35331 19.2494 7.94755 19.25 8.8 19.25H15.2C16.0525 19.25 16.6467 19.2494 17.1093 19.2116C17.5632 19.1745 17.824 19.1054 18.0215 19.0048C18.4429 18.7901 18.7858 18.4481 19.0017 18.0274C19.002 18.027 19.0022 18.0265 19.0026 18.0258C19.0031 18.0247 19.0039 18.0232 19.0048 18.0215C19.0038 18.0235 19.0027 18.0254 19.0017 18.0274C19.0012 18.0284 19.0009 18.029 19.0008 18.0289C19.0005 18.0288 19.0012 18.0264 19.0027 18.0213C19.008 18.0027 19.0235 17.9483 19.0426 17.8414C19.0688 17.6951 19.0933 17.5012 19.1153 17.2641C19.1592 16.7913 19.1892 16.1912 19.2095 15.5468C19.215 15.3728 19.2197 15.1965 19.2238 15.0194C18.6937 15.4103 18.0564 15.6649 17.3629 15.7324C17.1084 15.7571 16.8579 15.7636 16.6206 15.7634C16.502 15.7633 16.4332 15.7633 16.3813 15.7652C16.3488 15.7664 16.3349 15.768 16.3314 15.7685C16.3318 15.7684 16.3321 15.7683 16.3325 15.7683C16.331 15.7686 16.3312 15.7685 16.3314 15.7685C16.3315 15.7685 16.3309 15.7685 16.3314 15.7685C16.2621 15.783 16.2018 15.8266 16.1664 15.8879C16.1687 15.8838 16.164 15.8902 16.1489 15.9303C16.1319 15.9755 16.1116 16.036 16.0759 16.1432C15.9238 16.5993 15.7061 17.0519 15.2853 17.3618C14.8619 17.6736 14.3577 17.75 13.8464 17.75H10.1529C9.67207 17.75 9.17382 17.6866 8.74676 17.3854C8.31705 17.0824 8.08514 16.6281 7.92347 16.1431C7.88775 16.036 7.86746 15.9755 7.8504 15.9303C7.83975 15.902 7.83429 15.8905 7.83281 15.8876C7.79731 15.8265 7.73709 15.783 7.66793 15.7685C7.66448 15.768 7.65058 15.7664 7.61802 15.7652C7.5661 15.7633 7.49737 15.7633 7.37876 15.7634C7.14147 15.7636 6.89095 15.7571 6.63642 15.7324C5.94321 15.6649 5.30621 15.4105 4.77622 15.0199Z"
          fill={color}
        />
        <Path
          opacity=".5"
          d="M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V11.1893L13.4697 10.4697C13.7626 10.1768 14.2374 10.1768 14.5303 10.4697C14.8232 10.7626 14.8232 11.2374 14.5303 11.5303L12.5303 13.5303C12.2374 13.8232 11.7626 13.8232 11.4697 13.5303L9.46967 11.5303C9.17678 11.2374 9.17678 10.7626 9.46967 10.4697C9.76256 10.1768 10.2374 10.1768 10.5303 10.4697L11.25 11.1893V7C11.25 6.58579 11.5858 6.25 12 6.25Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default InboxIcon;