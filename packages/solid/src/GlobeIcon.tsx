import * as React from 'react';
import { IconProps } from './types';

export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.02176 9.02375C7.26136 7.53233 7.67731 6.18848 8.22692 5.08925 8.72296 4.09716 9.35308 3.26084 10.0912 2.71869 6.35952 3.48212 3.42696 6.43959 2.70015 10.1845 3.20675 9.9384 3.81861 9.72096 4.50662 9.53332 5.24891 9.33088 6.09581 9.15889 7.02176 9.02375zM2.54737 12.6359C2.53344 12.4257 2.52637 12.2137 2.52637 12 2.52637 11.7863 2.53344 11.5743 2.54737 11.3641 2.58093 11.3404 2.61665 11.3163 2.65463 11.2918 3.12422 10.989 3.83512 10.6984 4.75589 10.4473 5.38787 10.275 6.10606 10.1245 6.89248 10.0014 6.82488 10.6479 6.78953 11.3164 6.78953 12 6.78953 12.6835 6.82488 13.3521 6.89248 13.9986 6.10606 13.8754 5.38787 13.725 4.75589 13.5527 3.83512 13.3015 3.12422 13.011 2.65463 12.7082 2.61665 12.6837 2.58093 12.6596 2.54737 12.6359zM2.70015 13.8155C3.42696 17.5604 6.35951 20.5179 10.0912 21.2813 9.35308 20.7391 8.72296 19.9028 8.22692 18.9107 7.67731 17.8115 7.26136 16.4677 7.02176 14.9762 6.09581 14.8411 5.24891 14.6691 4.50662 14.4667 3.81861 14.279 3.20675 14.0616 2.70015 13.8155zM13.9089 21.2813C17.6406 20.5179 20.5731 17.5604 21.3 13.8155 20.7934 14.0616 20.1815 14.279 19.4935 14.4667 18.7512 14.6691 17.9043 14.8411 16.9783 14.9762 16.7387 16.4677 16.3228 17.8115 15.7732 18.9107 15.2771 19.9028 14.647 20.7391 13.9089 21.2813zM21.4527 11.3641C21.4667 11.5743 21.4737 11.7863 21.4737 12 21.4737 12.2137 21.4667 12.4257 21.4527 12.6359 21.4192 12.6596 21.3835 12.6837 21.3455 12.7082 20.8759 13.011 20.165 13.3016 19.2442 13.5527 18.6122 13.725 17.894 13.8754 17.1076 13.9986 17.1752 13.3521 17.2106 12.6835 17.2106 12 17.2106 11.3164 17.1752 10.6479 17.1076 10.0014 17.894 10.1245 18.6122 10.275 19.2442 10.4473 20.165 10.6984 20.8759 10.989 21.3455 11.2918 21.3835 11.3163 21.4192 11.3404 21.4527 11.3641zM21.3 10.1845C20.5731 6.43958 17.6406 3.48212 13.9089 2.71869 14.647 3.26085 15.2771 4.09716 15.7732 5.08925 16.3228 6.18848 16.7387 7.53233 16.9783 9.02375 17.9043 9.15889 18.7512 9.33088 19.4935 9.53332 20.1815 9.72096 20.7934 9.9384 21.3 10.1845zM8.00396 8.89767C8.23509 7.60281 8.60572 6.45002 9.07428 5.51292 9.77931 4.10286 10.6493 3.27811 11.5264 3.0592V8.68705C10.2877 8.70198 9.10154 8.7752 8.00396 8.89767zM12.4737 8.68705V3.0592C13.3508 3.27811 14.2208 4.10286 14.9258 5.51292 15.3944 6.45002 15.765 7.60281 15.9961 8.89767 14.8986 8.7752 13.7124 8.70198 12.4737 8.68705zM7.86052 9.86798C8.98665 9.73273 10.2232 9.65058 11.5264 9.63449V14.3655C10.2232 14.3494 8.98665 14.2673 7.86052 14.132 7.77986 13.4495 7.73689 12.7357 7.73689 12 7.73689 11.2642 7.77986 10.5505 7.86052 9.86798zM16.1396 9.86798C15.0135 9.73273 13.777 9.65058 12.4737 9.63449V14.3655C13.777 14.3494 15.0135 14.2673 16.1396 14.132 16.2202 13.4495 16.2632 12.7357 16.2632 12 16.2632 11.2642 16.2202 10.5505 16.1396 9.86798zM8.00396 15.1023C9.10154 15.2248 10.2877 15.298 11.5264 15.3129V20.9408C10.6493 20.7219 9.77931 19.8971 9.07428 18.4871 8.60572 17.55 8.23509 16.3972 8.00396 15.1023zM12.4737 15.3129V20.9408C13.3508 20.7219 14.2208 19.8971 14.9258 18.4871 15.3944 17.55 15.765 16.3972 15.9961 15.1023 14.8986 15.2248 13.7124 15.298 12.4737 15.3129z"
          fill={color}
        />
      </svg>
    );
  }
);

export default GlobeIcon;
